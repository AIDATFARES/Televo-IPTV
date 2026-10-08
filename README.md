# Televo IPTV UK — Official Website

Production-ready, brand-first IPTV website built from scratch for the United Kingdom market.

## Project Information
- **Brand Name:** Televo IPTV
- **Secondary Reference:** Televo
- **Primary Market:** United Kingdom (UK)
- **Currency:** GBP (£)
- **Primary Language:** English (British English)
- **Official Domain:** https://www.televoiptv.co.uk/
- **WhatsApp Support:** [WhatsApp Live Chat](https://wa.me/447882781998?text=Hello%20Televo%20IPTV%2C%20I%20need%20help)
- **Support Email:** support@televoiptv.co.uk

## Technology Stack
- **Framework:** React 19 (JavaScript / JSX ONLY — Strict 0% TypeScript)
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4 + Plus Jakarta Sans
- **Routing:** React Router v7
- **Icons:** Lucide React

## Semantic SEO Architecture
The website implements a brand-first entity hierarchy:
```
Televo
  └── Televo IPTV
        └── Televo IPTV UK
              ├── Televo IPTV subscription & plans (/subscription, /pricing)
              ├── Televo IPTV installation & devices (/guide-installation)
              │     ├── Samsung Smart TV (/guide-installation/samsung-smart-tv)
              │     ├── LG Smart TV (/guide-installation/lg-smart-tv)
              │     ├── Amazon Fire Stick (/guide-installation/firestick)
              │     ├── Android TV (/guide-installation/android-tv)
              │     ├── Apple TV (/guide-installation/apple-tv)
              │     ├── iPhone & iPad (/guide-installation/iphone)
              │     ├── Android Mobile (/guide-installation/android)
              │     ├── Windows PC (/guide-installation/windows)
              │     └── Apple Mac (/guide-installation/mac)
              ├── Televo IPTV FAQ & Support (/faq, /contact)
              ├── Televo IPTV Blog & Guides (/blog)
              └── Supporting UK IPTV Keywords
```

## Running Locally

### Development Server
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```
