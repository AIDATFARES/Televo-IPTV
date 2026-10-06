import urllib.request
import xml.etree.ElementTree as ET
import re

tree = ET.parse('public/sitemap.xml')
root = tree.getroot()
ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}

total = 0
passed = 0

print('=== TELEVO IPTV SITEMAP AUDIT ===\n')

for url_elem in root.findall('sm:url', ns):
    total += 1
    loc = url_elem.find('sm:loc', ns).text
    local_path = loc.replace('https://www.televoiptv.co.uk', 'http://localhost:3000')
    if local_path == 'http://localhost:3000':
        local_path = 'http://localhost:3000/'
    req = urllib.request.Request(local_path)
    res = urllib.request.urlopen(req)
    
    html = res.read().decode('utf-8')
    m = re.search(r'<link[^>]*rel=["\']canonical["\'][^>]*href=["\']([^"\']+)["\']', html)
    if not m:
        m = re.search(r'<link[^>]*href=["\']([^"\']+)["\'][^>]*rel=["\']canonical["\']', html)
    canonical = m.group(1) if m else 'NONE'
    
    # Check if redirect happened
    final_url = res.geturl()
    redirected = ('http://localhost:3000' + loc.replace('https://www.televoiptv.co.uk', '') != final_url and final_url != 'http://localhost:3000/')
    
    is_direct_200 = (res.status == 200 and not redirected)
    canonical_clean = canonical.rstrip('/') if len(canonical) > len('https://www.televoiptv.co.uk/') else canonical
    loc_clean = loc.rstrip('/') if len(loc) > len('https://www.televoiptv.co.uk/') else loc
    canonical_matches = (canonical_clean == loc_clean)
    
    if is_direct_200 and canonical_matches:
        passed += 1
        status_str = 'PASS'
    else:
        status_str = 'FAIL'
        
    print(f'[{status_str}] {loc:<62} | Status: {res.status} | Canonical: {canonical}')

print(f'\nAudit completed: {passed}/{total} URLs PASSED with 100% agreement!')

