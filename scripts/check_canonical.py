import urllib.request
import re

urls = [
    'http://localhost:3000/',
    'http://localhost:3000/about',
    'http://localhost:3000/pricing',
    'http://localhost:3000/subscription',
    'http://localhost:3000/guide-installation',
    'http://localhost:3000/blog',
    'http://localhost:3000/faq',
    'http://localhost:3000/contact',
    'http://localhost:3000/blog/how-to-setup-iptv-on-firestick',
    'http://localhost:3000/guide-installation/firestick',
    'http://localhost:3000/privacy-policy'
]

for u in urls:
    try:
        html = urllib.request.urlopen(u).read().decode('utf-8')
        m = re.search(r'<link[^>]*rel=["\']canonical["\'][^>]*href=["\']([^"\']+)["\']', html)
        if not m:
            m = re.search(r'<link[^>]*href=["\']([^"\']+)["\'][^>]*rel=["\']canonical["\']', html)
        canonical = m.group(1) if m else 'NONE'
        print(f'{u:<55} -> Canonical: {canonical}')
    except Exception as e:
        print(f'{u:<55} -> Error: {e}')
