import os
import base64
from playwright.sync_api import sync_playwright
from PIL import Image

# Read image for the TV screen preview (Live sports & UK channels)
sports_path = os.path.abspath('public/tv-strip/tv-preview-12.webp')
with open(sports_path, 'rb') as f:
    sports_b64 = base64.b64encode(f.read()).decode('utf-8')

# Read movies preview for floating VOD pill
movies_path = os.path.abspath('public/tv-strip/tv-preview-1.webp')
with open(movies_path, 'rb') as f:
    movies_b64 = base64.b64encode(f.read()).decode('utf-8')

html_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>
  * {{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }}
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

  body {{
    width: 1200px;
    height: 630px;
    overflow: hidden;
    background-color: #030712;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #FFFFFF;
    position: relative;
    -webkit-font-smoothing: antialiased;
  }}

  /* Rich Ambient Background */
  .bg-canvas {{
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(circle at 82% 28%, rgba(29, 122, 242, 0.38) 0%, rgba(29, 122, 242, 0.08) 50%, transparent 70%),
      radial-gradient(circle at 14% 88%, rgba(200, 16, 46, 0.24) 0%, rgba(200, 16, 46, 0.04) 40%, transparent 65%),
      radial-gradient(circle at 48% -10%, rgba(56, 189, 248, 0.22) 0%, transparent 50%),
      linear-gradient(135deg, #020610 0%, #061329 45%, #040d1c 100%);
    z-index: 1;
  }}

  /* Subtle High-Tech Grid Pattern */
  .grid-pattern {{
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
    background-size: 50px 50px;
    z-index: 2;
  }}

  /* Ambient Lighting */
  .glow-orb-top {{
    position: absolute;
    width: 520px;
    height: 520px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(29, 122, 242, 0.3) 0%, transparent 70%);
    top: -100px;
    right: 60px;
    filter: blur(60px);
    z-index: 2;
  }}

  .glow-orb-bottom {{
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(200, 16, 46, 0.22) 0%, transparent 70%);
    bottom: -100px;
    left: -60px;
    filter: blur(70px);
    z-index: 2;
  }}

  /* Main Container */
  .container {{
    position: relative;
    z-index: 10;
    width: 1200px;
    height: 630px;
    padding: 44px 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }}

  /* Left Column */
  .left-col {{
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }}

  .top-meta {{
    display: flex;
    flex-direction: column;
    gap: 15px;
  }}

  /* Trust Pill Badge */
  .trust-pill {{
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 7px 16px;
    border-radius: 9999px;
    background: rgba(13, 37, 75, 0.75);
    border: 1px solid rgba(56, 189, 248, 0.45);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    width: fit-content;
  }}

  .pulse-dot {{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #10B981;
    box-shadow: 0 0 10px #10B981, 0 0 20px #10B981;
  }}

  .trust-pill-text {{
    font-size: 12.5px;
    font-weight: 800;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: #BAE6FD;
  }}

  /* Brand Logo Header */
  .brand-row {{
    display: flex;
    align-items: center;
    gap: 16px;
  }}

  .flag-box {{
    width: 56px;
    height: 38px;
    border-radius: 11px;
    overflow: hidden;
    box-shadow: 0 4px 18px rgba(10, 30, 80, 0.7), 0 0 0 1.5px rgba(96, 165, 250, 0.6);
    background: #012169;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }}

  .brand-name {{
    font-size: 48px;
    font-weight: 900;
    letter-spacing: -1px;
    color: #FFFFFF;
    line-height: 1;
    display: flex;
    align-items: center;
    gap: 12px;
  }}

  .brand-badge {{
    font-size: 21px;
    font-weight: 900;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background: linear-gradient(135deg, #DC2626 0%, #B91C1C 100%);
    color: #FFFFFF;
    padding: 5px 14px;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(220, 38, 38, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }}

  /* Hero Headline */
  .hero-title {{
    font-size: 38px;
    font-weight: 900;
    line-height: 1.14;
    letter-spacing: -0.8px;
    color: #FFFFFF;
    margin-top: 2px;
  }}

  .gradient-highlight {{
    background: linear-gradient(90deg, #60A5FA 0%, #38BDF8 50%, #93C5FD 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }}

  .hero-sub {{
    font-size: 15.5px;
    font-weight: 500;
    line-height: 1.45;
    color: #94A3B8;
  }}

  /* 2x2 Feature Grid */
  .feature-grid {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 6px;
  }}

  .feature-card {{
    background: rgba(11, 27, 54, 0.7);
    border: 1px solid rgba(56, 189, 248, 0.22);
    border-radius: 12px;
    padding: 11px 14px;
    display: flex;
    align-items: center;
    gap: 11px;
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  }}

  .feature-icon {{
    font-size: 20px;
    flex-shrink: 0;
  }}

  .feature-info {{
    display: flex;
    flex-direction: column;
  }}

  .feature-title {{
    font-size: 13.5px;
    font-weight: 800;
    color: #F8FAFC;
    line-height: 1.2;
  }}

  .feature-desc {{
    font-size: 11px;
    font-weight: 500;
    color: #64748B;
    line-height: 1.2;
    margin-top: 2px;
  }}

  /* Bottom Bar */
  .bottom-bar {{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }}

  .devices-list {{
    font-size: 12.5px;
    font-weight: 600;
    color: #94A3B8;
    display: flex;
    align-items: center;
    gap: 7px;
  }}

  .devices-dot {{
    color: #38BDF8;
    font-weight: bold;
  }}

  .domain-pill {{
    font-size: 13.5px;
    font-weight: 800;
    letter-spacing: 0.5px;
    color: #60A5FA;
    background: rgba(29, 122, 242, 0.15);
    padding: 6px 14px;
    border-radius: 8px;
    border: 1px solid rgba(96, 165, 250, 0.35);
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }}

  /* Right Column (Visual Mockup) */
  .right-col {{
    width: 480px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }}

  /* TV Screen Frame */
  .tv-frame {{
    width: 468px;
    height: 278px;
    background: #091224;
    border-radius: 18px;
    padding: 8px;
    position: relative;
    box-shadow: 
      0 24px 60px rgba(0, 0, 0, 0.85),
      0 0 70px rgba(29, 122, 242, 0.4),
      0 0 0 1.5px rgba(96, 165, 250, 0.45);
    overflow: hidden;
  }}

  .screen-content {{
    width: 100%;
    height: 100%;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    background: #000;
  }}

  .screen-img {{
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }}

  .screen-overlay {{
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(3, 8, 20, 0.35) 0%, rgba(3, 8, 20, 0.05) 50%, rgba(3, 8, 20, 0.88) 100%);
  }}

  /* Live 4K Tag inside TV */
  .tv-live-tag {{
    position: absolute;
    top: 13px;
    left: 13px;
    display: flex;
    align-items: center;
    gap: 6px;
    background: rgba(0, 0, 0, 0.75);
    border: 1px solid rgba(239, 68, 68, 0.65);
    padding: 4px 10px;
    border-radius: 6px;
    backdrop-filter: blur(8px);
  }}

  .live-dot {{
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #EF4444;
    box-shadow: 0 0 8px #EF4444;
  }}

  .live-text {{
    font-size: 11px;
    font-weight: 800;
    color: #FFFFFF;
    letter-spacing: 0.5px;
  }}

  .tv-res-tag {{
    position: absolute;
    top: 13px;
    right: 13px;
    background: rgba(14, 165, 233, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.45);
    padding: 3px 9px;
    border-radius: 5px;
    font-size: 10.5px;
    font-weight: 900;
    color: #FFFFFF;
    letter-spacing: 0.5px;
  }}

  .tv-caption-bar {{
    position: absolute;
    bottom: 12px;
    left: 12px;
    right: 12px;
    background: rgba(5, 15, 36, 0.85);
    border: 1px solid rgba(56, 189, 248, 0.38);
    border-radius: 8px;
    padding: 8px 12px;
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }}

  .tv-caption-title {{
    font-size: 12.5px;
    font-weight: 800;
    color: #FFFFFF;
  }}

  .tv-caption-sub {{
    font-size: 10px;
    font-weight: 500;
    color: #38BDF8;
  }}

  .tv-caption-badge {{
    font-size: 10px;
    font-weight: 800;
    background: rgba(16, 185, 129, 0.22);
    border: 1px solid rgba(16, 185, 129, 0.55);
    color: #34D399;
    padding: 3px 8px;
    border-radius: 4px;
    letter-spacing: 0.4px;
  }}

  /* Floating Glass Badges around TV */
  .floating-badge-1 {{
    position: absolute;
    top: -18px;
    right: 8px;
    background: rgba(15, 23, 42, 0.9);
    border: 1px solid rgba(56, 189, 248, 0.45);
    padding: 8px 16px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    gap: 8px;
    z-index: 20;
  }}

  .floating-badge-1-text {{
    font-size: 12px;
    font-weight: 800;
    color: #F8FAFC;
  }}

  /* Floating Badge Left-Mid (Zero overlap with caption, live tags, or chips) */
  .floating-badge-2 {{
    position: absolute;
    top: 75px;
    left: -36px;
    background: rgba(15, 23, 42, 0.94);
    border: 1px solid rgba(16, 185, 129, 0.55);
    padding: 9px 18px;
    border-radius: 12px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 25;
  }}

  .floating-badge-2-icon {{
    color: #10B981;
    font-size: 18px;
  }}

  .floating-badge-2-text {{
    display: flex;
    flex-direction: column;
  }}

  .floating-badge-2-val {{
    font-size: 13.5px;
    font-weight: 900;
    color: #FFFFFF;
    line-height: 1.1;
  }}

  .floating-badge-2-sub {{
    font-size: 10px;
    font-weight: 600;
    color: #10B981;
  }}

  /* Stat Chips Row below TV */
  .stats-row {{
    display: flex;
    gap: 12px;
    margin-top: 28px;
    width: 468px;
  }}

  .stat-chip {{
    flex: 1;
    background: rgba(10, 25, 52, 0.7);
    border: 1px solid rgba(56, 189, 248, 0.2);
    border-radius: 11px;
    padding: 10px 10px;
    text-align: center;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  }}

  .stat-num {{
    font-size: 17px;
    font-weight: 900;
    color: #60A5FA;
  }}

  .stat-label {{
    font-size: 10px;
    font-weight: 700;
    color: #94A3B8;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 2px;
  }}
</style>
</head>
<body>
  <div class="bg-canvas"></div>
  <div class="grid-pattern"></div>
  <div class="glow-orb-top"></div>
  <div class="glow-orb-bottom"></div>

  <div class="container">
    <!-- Left Column: Branding & Key Information -->
    <div class="left-col">
      <div class="top-meta">
        <!-- Trust Pill -->
        <div class="trust-pill">
          <span class="pulse-dot"></span>
          <span class="trust-pill-text">United Kingdom's #1 Rated IPTV Service</span>
        </div>

        <!-- Brand Name & Union Jack Flag -->
        <div class="brand-row">
          <div class="flag-box">
            <!-- Precise Union Jack SVG -->
            <svg viewBox="0 0 60 40" width="100%" height="100%">
              <rect width="60" height="40" fill="#012169" />
              <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFFFFF" stroke-width="8" />
              <path d="M0,0 L27,18 M33,22 L60,40 M60,0 L33,18 M27,22 L0,40" stroke="#C8102E" stroke-width="2.7" />
              <path d="M30,0 V40 M0,20 H60" stroke="#FFFFFF" stroke-width="13" />
              <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" stroke-width="7.5" />
            </svg>
          </div>
          <div class="brand-name">
            <span>TELEVO</span>
            <span class="brand-badge">IPTV</span>
          </div>
        </div>

        <!-- Main Headline -->
        <h1 class="hero-title">
          <span class="gradient-highlight">50,000+ 4K Channels</span><br/>
          &amp; 200,000+ Movies &amp; Series
        </h1>

        <!-- Subheading -->
        <p class="hero-sub">
          Next-generation UK IPTV streaming with 99.9% anti-freeze stability, instant 5-minute activation, and full 7-day catch-up.
        </p>

        <!-- 2x2 Feature Highlights -->
        <div class="feature-grid">
          <div class="feature-card">
            <span class="feature-icon">⚡</span>
            <div class="feature-info">
              <span class="feature-title">Instant Setup</span>
              <span class="feature-desc">Active in 5–15 Minutes</span>
            </div>
          </div>
          <div class="feature-card">
            <span class="feature-icon">🛡️</span>
            <div class="feature-info">
              <span class="feature-title">7-Day Guarantee</span>
              <span class="feature-desc">100% Risk-Free Refund</span>
            </div>
          </div>
          <div class="feature-card">
            <span class="feature-icon">⚽</span>
            <div class="feature-info">
              <span class="feature-title">Live 4K Sports</span>
              <span class="feature-desc">Premier League, UCL &amp; PPV</span>
            </div>
          </div>
          <div class="feature-card">
            <span class="feature-icon">🚀</span>
            <div class="feature-info">
              <span class="feature-title">Anti-Freeze™ CDN</span>
              <span class="feature-desc">High-Speed UK Network</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="bottom-bar">
        <div class="devices-list">
          <span>📺</span> Fire Stick <span class="devices-dot">•</span> Smart TV <span class="devices-dot">•</span> Android <span class="devices-dot">•</span> Apple TV <span class="devices-dot">•</span> iOS <span class="devices-dot">•</span> PC
        </div>
        <div class="domain-pill">
          <div style="width: 18px; height: 12px; border-radius: 2px; overflow: hidden; display: inline-flex; flex-shrink: 0; box-shadow: 0 1px 3px rgba(0,0,0,0.5);">
            <svg viewBox="0 0 60 40" width="100%" height="100%">
              <rect width="60" height="40" fill="#012169" />
              <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFFFFF" stroke-width="8" />
              <path d="M0,0 L27,18 M33,22 L60,40 M60,0 L33,18 M27,22 L0,40" stroke="#C8102E" stroke-width="2.7" />
              <path d="M30,0 V40 M0,20 H60" stroke="#FFFFFF" stroke-width="13" />
              <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" stroke-width="7.5" />
            </svg>
          </div>
          <span>www.televoiptv.co.uk</span>
        </div>
      </div>
    </div>

    <!-- Right Column: Visual Showcase TV Frame -->
    <div class="right-col">
      <!-- Floating Badge Top -->
      <div class="floating-badge-1">
        <span>⭐</span>
        <span class="floating-badge-1-text">Rated 4.9/5 by UK Customers</span>
      </div>

      <!-- TV Screen Frame -->
      <div class="tv-frame">
        <div class="screen-content">
          <img src="data:image/webp;base64,{sports_b64}" class="screen-img" alt="Live Premier League and Sports Streaming" />
          <div class="screen-overlay"></div>

          <!-- Inside TV Tags -->
          <div class="tv-live-tag">
            <span class="live-dot"></span>
            <span class="live-text">LIVE 4K UHD</span>
          </div>

          <div class="tv-res-tag">
            HDR 60FPS
          </div>

          <div class="tv-caption-bar">
            <div>
              <div class="tv-caption-title">Premier League &amp; UEFA Replay</div>
              <div class="tv-caption-sub">Ultra-High Bitrate • 0% Buffering</div>
            </div>
            <div class="tv-caption-badge">
              Active Stream
            </div>
          </div>
        </div>
      </div>

      <!-- Floating Badge Mid-Left -->
      <div class="floating-badge-2">
        <span class="floating-badge-2-icon">⚡</span>
        <div class="floating-badge-2-text">
          <span class="floating-badge-2-val">99.9% Uptime</span>
          <span class="floating-badge-2-sub">High-Speed UK Network</span>
        </div>
      </div>

      <!-- Bottom Stats Row -->
      <div class="stats-row">
        <div class="stat-chip">
          <div class="stat-num">50,000+</div>
          <div class="stat-label">Live Channels</div>
        </div>
        <div class="stat-chip">
          <div class="stat-num">200K+</div>
          <div class="stat-label">Movies &amp; Series</div>
        </div>
        <div class="stat-chip">
          <div class="stat-num">5-15m</div>
          <div class="stat-label">Fast Setup</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
'''

temp_html_path = os.path.abspath('temp_og_render.html')
with open(temp_html_path, 'w', encoding='utf-8') as f:
    f.write(html_content)

p = sync_playwright().start()
browser = p.chromium.launch(channel='msedge')
page = browser.new_page(viewport={'width': 1200, 'height': 630}, device_scale_factor=1)
page.goto('file:///' + temp_html_path.replace('\\', '/'))
page.wait_for_timeout(1000)

output_png = os.path.abspath('public/og-image.png')
output_jpg = os.path.abspath('public/og-image.jpg')
output_nextjs = os.path.abspath('src/app/opengraph-image.png')

page.screenshot(path=output_png)
print('PNG written to:', output_png, 'size:', os.path.getsize(output_png))

# Save JPG using PIL
img = Image.open(output_png).convert('RGB')
img.save(output_jpg, 'JPEG', quality=95, optimize=True)
print('JPG written to:', output_jpg, 'size:', os.path.getsize(output_jpg))

# Copy to Next.js
img_png = Image.open(output_png)
img_png.save(output_nextjs, 'PNG', optimize=True)
print('Next.js opengraph-image.png written to:', output_nextjs)

browser.close()
p.stop()

if os.path.exists(temp_html_path):
    os.remove(temp_html_path)
print('Rendering complete!')
