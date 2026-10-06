import { postFirestick } from './posts/firestick.js';
import { postSamsung } from './posts/samsung.js';
import { postBuffering } from './posts/buffering.js';
import { postPlayers } from './posts/players.js';
import { postSetup } from './posts/setup.js';

export const SITE_CONFIG = {
  brandName: 'Televo IPTV',
  shortBrand: 'Televo',
  legalEntity: 'Televo IPTV UK',
  domain: 'https://www.televoiptv.co.uk',
  supportEmail: 'support@televoiptv.co.uk',
  whatsappNumber: '+447882781998',
  whatsappUrl: 'https://wa.me/447882781998',
  country: 'United Kingdom',
  primaryMarket: 'UK',
  currency: '£',
  currencyCode: 'GBP',
  openingHours: 'Mon-Sun: 08:00 - 23:00 GMT',
  deliveryTime: 'Typically within 5 to 15 minutes',
  guaranteeText: '7-day money-back guarantee',
};

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'IPTV Plans', path: '/subscription' },
  { name: 'Installation', path: '/guide-installation' },
  { name: 'FAQ', path: '/faq' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const PRICING_PLANS = [
  {
    id: 'plan-1m',
    name: '1 Month Plan',
    duration: '1 Month',
    screens: 1,
    price: 14.99,
    originalPrice: 19.99,
    monthlyEquivalent: '£14.99/mo',
    badge: 'Trial Choice',
    isPopular: false,
    description: 'Perfect for testing our high-definition streaming service on your primary device.',
    features: [
      '1 Active connection',
      'High-Definition & 4K UHD streaming streams',
      'Electronic Programme Guide (EPG) included',
      'Extensive Video on Demand (VOD) library',
      'Compatible with Smart TVs, Fire Stick & mobiles',
      'M3U playlist & Xtream Codes API credentials',
      '7-day money-back guarantee',
      'Fast delivery via WhatsApp & email',
    ],
  },
  {
    id: 'plan-3m',
    name: '3 Months Plan',
    duration: '3 Months',
    screens: 1,
    price: 24.99,
    originalPrice: 34.99,
    monthlyEquivalent: '£8.33/mo',
    badge: 'Flexible',
    isPopular: false,
    description: 'Quarterly subscription offering exceptional flexibility and reliable UK streaming.',
    features: [
      '1 Active connection',
      'High-Definition & 4K UHD streaming streams',
      'Catch-up TV & Electronic Programme Guide (EPG)',
      'Extensive Video on Demand (VOD) library',
      'Works seamlessly across all compatible apps',
      'Anti-buffering UK-optimised routing',
      '7-day money-back guarantee',
      'Dedicated UK customer support via WhatsApp',
    ],
  },
  {
    id: 'plan-6m',
    name: '6 Months Plan',
    duration: '6 Months',
    screens: 1,
    price: 39.99,
    originalPrice: 54.99,
    monthlyEquivalent: '£6.66/mo',
    badge: 'Great Value',
    isPopular: false,
    description: 'Six months of uninterrupted entertainment, live sports, and box sets.',
    features: [
      '1 Active connection',
      'High-Definition & 4K UHD streaming streams',
      'Full UK & international content catalogue',
      'Regular channel & VOD library updates',
      'Full EPG schedule & Catch-up access',
      'Compatible with Samsung, LG, Fire Stick, Android',
      '7-day money-back guarantee',
      'Priority setup assistance via WhatsApp',
    ],
  },
  {
    id: 'plan-12m',
    name: '12 Months Plan',
    duration: '12 Months',
    screens: 1,
    price: 59.99,
    originalPrice: 89.99,
    monthlyEquivalent: '£5.00/mo',
    badge: 'Most Popular',
    isPopular: true,
    description: 'Our most comprehensive single-device plan offering maximum savings and annual stability.',
    features: [
      '1 Active connection',
      'Full 4K Ultra HD & Full HD streams',
      'Complete Live TV, Sports & On-Demand catalogue',
      'Comprehensive 7-day EPG guide',
      'Fast activation (typically 5-15 mins)',
      'Free step-by-step setup support',
      '7-day money-back guarantee',
      'VIP WhatsApp support all year round',
    ],
  },
];

export const MULTI_SCREEN_PLANS = [
  {
    id: 'multi-2s',
    name: '12 Months Family (2 Screens)',
    duration: '12 Months',
    screens: 2,
    price: 119.98,
    originalPrice: 179.98,
    monthlyEquivalent: '£5.00/mo per screen',
    badge: 'Popular Family Plan',
    isPopular: true,
    description: 'Stream on two different screens simultaneously anywhere in your home.',
    features: [
      '2 Simultaneous active connections',
      'Full HD & 4K streaming quality',
      'Independent playlists for each room',
      'Complete Live Sports & VOD access',
      'Electronic Programme Guide (EPG) on both devices',
      'Samsung TV, LG, Fire Stick, iOS & Android compatible',
      '7-day money-back guarantee',
      'WhatsApp support 7 days a week',
    ],
  },
  {
    id: 'multi-3s',
    name: '12 Months Family (3 Screens)',
    duration: '12 Months',
    screens: 3,
    price: 179.97,
    originalPrice: 269.97,
    monthlyEquivalent: '£5.00/mo per screen',
    badge: 'Multi-Room Value',
    isPopular: false,
    description: 'Ideal for larger households where everyone wants their favourite channels at once.',
    features: [
      '3 Simultaneous active connections',
      'High-Definition & 4K UHD streaming streams',
      'No conflicts between family members',
      'Full Live TV & VOD library on all devices',
      'Works across any combination of compatible devices',
      'Multi-room flexibility across UK home broadband',
      '7-day money-back guarantee',
      'Direct WhatsApp assistance whenever needed',
    ],
  },
  {
    id: 'multi-4s',
    name: '12 Months Premium (4 Screens)',
    duration: '12 Months',
    screens: 4,
    price: 239.96,
    originalPrice: 359.96,
    monthlyEquivalent: '£5.00/mo per screen',
    badge: 'Ultimate Household',
    isPopular: false,
    description: 'The ultimate household package with four simultaneous streams for living rooms, bedrooms, and tablets.',
    features: [
      '4 Simultaneous active connections',
      'Highest stream allocation & stability',
      'Every screen streams independently in full quality',
      'Comprehensive VOD, Movies & TV Shows',
      'Works with TiviMate, IPTV Smarters & Smart TV apps',
      'No contracts or recurring direct debits',
      '7-day money-back guarantee',
      'Dedicated support specialist via WhatsApp',
    ],
  },
];

export const SUPPORTED_DEVICES = [
  {
    id: 'firestick',
    name: 'Amazon Fire Stick / Fire TV',
    slug: 'firestick',
    category: 'Streaming Sticks',
    apps: ['IPTV Smarters Pro', 'TiviMate', 'Downloader'],
    description: 'Fast setup with the Downloader app. Stream Televo IPTV in 4K on Fire TV Stick 4K, 4K Max, and Fire TV Cube.',
    setupTime: '5 mins',
  },
  {
    id: 'samsung-smart-tv',
    name: 'Samsung Smart TV (Tizen)',
    slug: 'samsung-smart-tv',
    category: 'Smart TVs',
    apps: ['IBO Player', 'Smart IPTV', 'IPTV Smarters Pro'],
    description: 'Install directly from the Samsung Apps Store. Connect Televo IPTV easily with M3U or Xtream Codes API credentials.',
    setupTime: '5 mins',
  },
  {
    id: 'lg-smart-tv',
    name: 'LG Smart TV (webOS)',
    slug: 'lg-smart-tv',
    category: 'Smart TVs',
    apps: ['IBO Player', 'Smart IPTV', 'SS IPTV'],
    description: 'Available on the LG Content Store with fast activation. Enjoy Televo IPTV live streams and VOD in full 4K clarity.',
    setupTime: '5 mins',
  },
  {
    id: 'android-tv',
    name: 'Android TV / Google TV',
    slug: 'android-tv',
    category: 'TV Boxes & TVs',
    apps: ['TiviMate', 'IPTV Smarters Pro', 'XCIPTV'],
    description: 'Direct Google Play Store access with advanced player controls, 7-day EPG schedules, and smooth 4K playback.',
    setupTime: '5 mins',
  },
  {
    id: 'apple-tv',
    name: 'Apple TV (tvOS)',
    slug: 'apple-tv',
    category: 'Media Players',
    apps: ['IPTV Smarters', 'GSE Smart IPTV', 'iPlayTV'],
    description: 'High-performance 4K IPTV streaming on Apple TV with responsive navigation and seamless AirPlay integration.',
    setupTime: '5 mins',
  },
  {
    id: 'iphone',
    name: 'iPhone & iPad (iOS)',
    slug: 'iphone',
    category: 'Mobile & Tablets',
    apps: ['GSE Smart IPTV', 'IPTV Smarters Pro', 'Smarters Player Lite'],
    description: 'Stream Televo IPTV across iPhone and iPad via Wi-Fi or 4G/5G mobile data with no jailbreak required.',
    setupTime: '3 mins',
  },
  {
    id: 'android',
    name: 'Android Phone & Tablet',
    slug: 'android',
    category: 'Mobile & Tablets',
    apps: ['IPTV Smarters Pro', 'TiviMate', 'Televo Player'],
    description: 'Portable mobile entertainment with responsive touch controls, background audio, and minimal battery usage.',
    setupTime: '3 mins',
  },
  {
    id: 'windows',
    name: 'Windows PC & Laptop',
    slug: 'windows',
    category: 'Computers',
    apps: ['VLC Media Player', 'IPTV Smarters Pro Windows'],
    description: 'Watch live television and on-demand box sets on Windows PCs and laptops via IPTV Smarters or VLC.',
    setupTime: '4 mins',
  },
  {
    id: 'mac',
    name: 'Apple Mac (macOS)',
    slug: 'mac',
    category: 'Computers',
    apps: ['VLC Media Player', 'IINA', 'IPTV Smarters for Mac'],
    description: 'Native macOS streaming supporting M3U playlists, hardware acceleration, and crisp Retina display output.',
    setupTime: '4 mins',
  },
];

export const INSTALLATION_GUIDES_DATA = {
  'firestick': {
    title: 'How to Install Televo IPTV on Amazon Fire Stick',
    metaTitle: 'Televo IPTV Fire Stick Setup Guide | UK Fire TV Installation',
    metaDescription: 'Step-by-step tutorial to install Televo IPTV on Amazon Fire Stick and Fire TV in the UK. Quick setup using Downloader and IPTV Smarters Pro.',
    h1: 'Amazon Fire Stick Setup Guide for Televo IPTV',
    device: 'Amazon Fire Stick / Fire TV',
    recommendedApp: 'IPTV Smarters Pro / TiviMate',
    prerequisites: [
      'Amazon Fire TV Stick connected to HDMI and Wi-Fi',
      'Active Televo IPTV subscription credentials (Xtream Codes API or M3U)',
      'The Downloader app installed from the Amazon Appstore',
      'Stable UK broadband connection (minimum 10-15 Mbps)',
    ],
    steps: [
      {
        step: 1,
        title: 'Enable Apps from Unknown Sources',
        instructions: 'From your Fire Stick home screen, go to Settings (gear icon) > My Fire TV > Developer Options. Turn on "Apps from Unknown Sources" and "ADB Debugging". (Note: On newer Fire OS versions, click About > Fire TV Stick 7 times to reveal Developer Options).',
      },
      {
        step: 2,
        title: 'Install the Downloader Application',
        instructions: 'Return to the home screen, select Find > Search, type "Downloader", and download the free orange Downloader app from the Amazon Appstore.',
      },
      {
        step: 3,
        title: 'Download IPTV Smarters Pro or Preferred App',
        instructions: 'Launch Downloader, allow storage permissions, and enter the download URL or code for IPTV Smarters Pro. Click Go, wait for the APK to download, and click Install. After installation, delete the APK file to save Fire Stick storage.',
      },
      {
        step: 4,
        title: 'Log In with Your Televo IPTV Credentials',
        instructions: 'Open IPTV Smarters Pro and choose "Login with Xtream Codes API". Enter Any Name (e.g. Televo IPTV), followed by the Username, Password, and Server URL sent to you via WhatsApp or email upon subscribing.',
      },
      {
        step: 5,
        title: 'Load Content and Begin Watching',
        instructions: 'Click "Add User". The app will download your live channel categories, movies, series, and Electronic Programme Guide (EPG). You are now ready to stream in Full HD and 4K.',
      },
    ],
    troubleshooting: [
      {
        question: 'What if Downloader says permission denied?',
        answer: 'Navigate to Fire Stick Settings > My Fire TV > Developer Options > Install Unknown Apps, and make sure Downloader is set to "ON".',
      },
      {
        question: 'How do I avoid buffering during peak UK evening times?',
        answer: 'In IPTV Smarters settings, switch Player Selection from Native to ExoPlayer. We also recommend connecting your Fire Stick to the 5GHz Wi-Fi band or using an Ethernet adapter.',
      },
    ],
  },
  'samsung-smart-tv': {
    title: 'How to Install Televo IPTV on Samsung Smart TV',
    metaTitle: 'Televo IPTV Samsung Smart TV Setup Guide | UK Tizen Setup',
    metaDescription: 'Learn how to set up Televo IPTV on Samsung Smart TV using IBO Player or Smart IPTV. Clear step-by-step instructions for UK households.',
    h1: 'Samsung Smart TV Setup Guide for Televo IPTV',
    device: 'Samsung Smart TV (Tizen OS)',
    recommendedApp: 'IBO Player / Smart IPTV',
    prerequisites: [
      'Samsung Smart TV connected to home internet',
      'Active Televo IPTV subscription credentials',
      'Access to the Samsung Smart Hub App Store',
    ],
    steps: [
      {
        step: 1,
        title: 'Open Samsung Smart Hub App Store',
        instructions: 'Press the Home button on your Samsung remote and navigate to "Apps".',
      },
      {
        step: 2,
        title: 'Search and Install a Compatible Player',
        instructions: 'Search for "IBO Player" or "Smart IPTV" in the search bar. Click "Install" to download the application to your television.',
      },
      {
        step: 3,
        title: 'Locate Your Device MAC Address',
        instructions: 'Open the installed player on your Samsung TV. The welcome screen will display your Device MAC Address and Device Key.',
      },
      {
        step: 4,
        title: 'Upload Your Televo IPTV Playlist',
        instructions: 'On your phone or computer, visit the player management portal (e.g., iboplayer.com/manage), enter your MAC Address and Device Key, and paste the M3U URL or Xtream details provided with your Televo IPTV subscription.',
      },
      {
        step: 5,
        title: 'Reload the Application',
        instructions: 'Return to your TV, press "Reload" or restart the application. Your channels and on-demand titles will synchronize immediately.',
      },
    ],
    troubleshooting: [
      {
        question: 'What if an app is not found in the Samsung UK App Store?',
        answer: 'You can search for alternative certified players such as "Smart STB" or "Nanomid Player", or attach an Amazon Fire Stick for an even broader player selection.',
      },
      {
        question: 'Audio is playing but the screen is black?',
        answer: 'In the app settings on your Samsung TV, switch the stream format from HLS to MPEG-TS or change the internal video decoder.',
      },
    ],
  },
  'lg-smart-tv': {
    title: 'How to Install Televo IPTV on LG Smart TV',
    metaTitle: 'Televo IPTV LG Smart TV Setup Guide | UK webOS Installation',
    metaDescription: 'Easy guide to set up Televo IPTV on LG Smart TV (webOS) in the UK. Quick installation with IBO Player or SS IPTV.',
    h1: 'LG Smart TV Setup Guide for Televo IPTV',
    device: 'LG Smart TV (webOS)',
    recommendedApp: 'IBO Player / SS IPTV',
    prerequisites: [
      'LG Smart TV connected to broadband',
      'Televo IPTV subscription credentials',
      'LG Content Store access',
    ],
    steps: [
      {
        step: 1,
        title: 'Open the LG Content Store',
        instructions: 'Press the Home button on your LG Magic Remote and select the LG Content Store.',
      },
      {
        step: 2,
        title: 'Search for an IPTV Application',
        instructions: 'Type "IBO Player" or "SS IPTV" in the search icon at the top right and install the player.',
      },
      {
        step: 3,
        title: 'Note Your TV MAC Address',
        instructions: 'Launch the application on your LG TV. Write down the MAC Address displayed on the settings screen.',
      },
      {
        step: 4,
        title: 'Link Your Televo IPTV Playlist',
        instructions: 'Access the web portal for the app and upload the Televo IPTV M3U URL or enter your Xtream Codes API parameters.',
      },
      {
        step: 5,
        title: 'Restart and Enjoy',
        instructions: 'Close and restart the app on your LG TV to load your channel groups and electronic programme guide.',
      },
    ],
    troubleshooting: [
      {
        question: 'App loading screen is stuck?',
        answer: 'Power cycle your LG TV by turning it off and unplugging it from the mains for 60 seconds to clear cache.',
      },
      {
        question: 'Which player is best on LG webOS?',
        answer: 'IBO Player offers the fastest zapping speeds and smoothest 4K playback on modern LG OLED and NanoCell displays.',
      },
    ],
  },
  'android-tv': {
    title: 'How to Install Televo IPTV on Android TV & Google TV',
    metaTitle: 'Televo IPTV Android TV Setup Guide | UK Google TV Installation',
    metaDescription: 'Complete tutorial for setting up Televo IPTV on Android TV, Google TV, Sony, TCL, Philips, and Nvidia Shield in the UK.',
    h1: 'Android TV & Google TV Setup Guide for Televo IPTV',
    device: 'Android TV / Google TV / Nvidia Shield',
    recommendedApp: 'TiviMate IPTV Player / IPTV Smarters Pro',
    prerequisites: [
      'Android TV or Google TV device with Google Play Store',
      'Televo IPTV credentials (Xtream API or M3U)',
      'Internet connection',
    ],
    steps: [
      {
        step: 1,
        title: 'Open Google Play Store',
        instructions: 'Navigate to the Google Play Store on your Android TV interface.',
      },
      {
        step: 2,
        title: 'Install TiviMate IPTV Player',
        instructions: 'Search for "TiviMate IPTV Player" and click Install. TiviMate is widely regarded as the premier player for Android TV.',
      },
      {
        step: 3,
        title: 'Add Playlist via Xtream Codes',
        instructions: 'Open TiviMate, select "Add Playlist", and choose "Xtream Codes".',
      },
      {
        step: 4,
        title: 'Enter Televo IPTV Account Details',
        instructions: 'Input the Server URL, Username, and Password provided in your Televo IPTV welcome message.',
      },
      {
        step: 5,
        title: 'Finish Setup',
        instructions: 'Set your playlist name to "Televo IPTV", enable "TV guide", and press Done to view your complete channel lineup.',
      },
    ],
    troubleshooting: [
      {
        question: 'Can I record live television on Android TV?',
        answer: 'Yes! TiviMate includes a native recording feature if you connect an external USB storage drive to your Android TV or Nvidia Shield.',
      },
    ],
  },
  'apple-tv': {
    title: 'How to Install Televo IPTV on Apple TV',
    metaTitle: 'Televo IPTV Apple TV Setup Guide | UK tvOS Installation',
    metaDescription: 'Learn how to set up Televo IPTV on Apple TV 4K and Apple TV HD in the United Kingdom with recommended tvOS players.',
    h1: 'Apple TV Setup Guide for Televo IPTV',
    device: 'Apple TV 4K / Apple TV HD (tvOS)',
    recommendedApp: 'IPTV Smarters / iPlayTV',
    prerequisites: [
      'Apple TV connected to your display and Wi-Fi',
      'Apple App Store access',
      'Televo IPTV credentials',
    ],
    steps: [
      {
        step: 1,
        title: 'Open the Apple TV App Store',
        instructions: 'Launch the App Store from your Apple TV home screen.',
      },
      {
        step: 2,
        title: 'Download a Supported Player',
        instructions: 'Search for "IPTV Smarters" or "iPlayTV" and install the application.',
      },
      {
        step: 3,
        title: 'Enter Xtream Codes API Details',
        instructions: 'Launch the app and enter your Televo IPTV Server URL, Username, and Password.',
      },
      {
        step: 4,
        title: 'Sync Channels and EPG',
        instructions: 'Click Save / Login to synchronize your channel lineup with automatic EPG loading.',
      },
    ],
    troubleshooting: [
      {
        question: 'Does Apple TV support 4K 60fps streams?',
        answer: 'Yes, Apple TV 4K features powerful hardware decoding capable of handling ultra-high-definition sports and movies smoothly.',
      },
    ],
  },
  'iphone': {
    title: 'How to Install Televo IPTV on iPhone and iPad',
    metaTitle: 'Televo IPTV iPhone & iPad Setup Guide | UK iOS Installation',
    metaDescription: 'Set up Televo IPTV on iOS devices in the UK. Watch live streaming on iPhone and iPad with GSE Smart IPTV or Smarters Player Lite.',
    h1: 'iPhone & iPad Setup Guide for Televo IPTV',
    device: 'Apple iPhone & iPad (iOS)',
    recommendedApp: 'Smarters Player Lite / GSE Smart IPTV',
    prerequisites: [
      'iPhone or iPad running iOS 13 or newer',
      'Televo IPTV subscription credentials',
      'Wi-Fi or 4G/5G mobile data',
    ],
    steps: [
      {
        step: 1,
        title: 'Install from the iOS App Store',
        instructions: 'Open the App Store on your iPhone or iPad and install "Smarters Player Lite" or "GSE Smart IPTV".',
      },
      {
        step: 2,
        title: 'Choose Xtream Codes API',
        instructions: 'Select "Login with Xtream Codes API" inside the application.',
      },
      {
        step: 3,
        title: 'Fill in Your Televo IPTV Credentials',
        instructions: 'Enter any account name, your username, password, and the server address provided by Televo IPTV.',
      },
      {
        step: 4,
        title: 'Enjoy Mobile Streaming',
        instructions: 'Tap "Add User". Your channels, movies, and TV shows will be available instantly with AirPlay support.',
      },
    ],
    troubleshooting: [
      {
        question: 'Can I AirPlay from my iPhone to my television?',
        answer: 'Yes! While playing any stream in Smarters Player Lite, tap the AirPlay icon in the video player to cast to any Apple TV or AirPlay 2 compatible Smart TV.',
      },
    ],
  },
  'android': {
    title: 'How to Install Televo IPTV on Android Smartphones and Tablets',
    metaTitle: 'Televo IPTV Android Setup Guide | UK Mobile Installation',
    metaDescription: 'Easy tutorial to install Televo IPTV on Android phones and tablets in the UK using Google Play Store apps.',
    h1: 'Android Smartphone & Tablet Setup Guide for Televo IPTV',
    device: 'Android Phones & Tablets',
    recommendedApp: 'IPTV Smarters Pro / XCIPTV',
    prerequisites: [
      'Android smartphone or tablet (Android 5.0+)',
      'Televo IPTV account credentials',
      'Internet connection',
    ],
    steps: [
      {
        step: 1,
        title: 'Open Google Play Store',
        instructions: 'Search for "IPTV Smarters Pro" or "XCIPTV" on the Google Play Store and install the app.',
      },
      {
        step: 2,
        title: 'Select Login Option',
        instructions: 'Choose "Login with Xtream Codes API" upon launching.',
      },
      {
        step: 3,
        title: 'Enter Account Information',
        instructions: 'Paste your Username, Password, and Server URL provided by Televo IPTV.',
      },
      {
        step: 4,
        title: 'Save and Start Streaming',
        instructions: 'Tap Add User and access all live television categories, VOD, and sports schedules.',
      },
    ],
    troubleshooting: [
      {
        question: 'Can I watch over UK 4G or 5G mobile networks?',
        answer: 'Yes. Streaming requires approximately 4-8 Mbps for standard HD and 15-25 Mbps for 4K. Check your mobile data plan allowance when streaming on the go.',
      },
    ],
  },
  'windows': {
    title: 'How to Install Televo IPTV on Windows PC and Laptop',
    metaTitle: 'Televo IPTV Windows PC Setup Guide | UK Desktop Installation',
    metaDescription: 'Step-by-step tutorial to watch Televo IPTV on Windows 10 and 11 using VLC Media Player or IPTV Smarters Pro Windows.',
    h1: 'Windows PC Setup Guide for Televo IPTV',
    device: 'Windows 10 / Windows 11 PC & Laptop',
    recommendedApp: 'VLC Media Player / IPTV Smarters Pro Windows',
    prerequisites: [
      'Windows PC or laptop with internet access',
      'Televo IPTV M3U link or Xtream credentials',
      'VLC Media Player (free from videolan.org)',
    ],
    steps: [
      {
        step: 1,
        title: 'Method 1: VLC Media Player (Fastest)',
        instructions: 'Download and open VLC. Click "Media" in the top menu > "Open Network Stream" (Ctrl+N). Paste your Televo IPTV M3U URL and click "Play". Open the Playlist window (Ctrl+L) to search and select channels.',
      },
      {
        step: 2,
        title: 'Method 2: IPTV Smarters Pro for Windows',
        instructions: 'Download the official IPTV Smarters application for Windows PC. Install and launch the program, select "Add New User", and log in via Xtream Codes API.',
      },
      {
        step: 3,
        title: 'Optimise for Smooth Playback',
        instructions: 'In VLC Preferences > Input / Codecs, ensure Hardware-accelerated decoding is set to Automatic for smooth performance.',
      },
    ],
    troubleshooting: [
      {
        question: 'Why does VLC loop through channels continuously?',
        answer: 'Click the "Loop" button at the bottom of VLC until it is disabled. This prevents VLC from automatically advancing if a stream momentarily buffers.',
      },
    ],
  },
  'mac': {
    title: 'How to Install Televo IPTV on Apple Mac (macOS)',
    metaTitle: 'Televo IPTV Mac Setup Guide | UK macOS Installation',
    metaDescription: 'Watch Televo IPTV on Mac, MacBook Pro, and iMac. Simple setup using VLC, IINA, or IPTV Smarters for macOS.',
    h1: 'macOS Setup Guide for Televo IPTV',
    device: 'Apple Mac / MacBook / iMac (macOS)',
    recommendedApp: 'VLC Media Player / IINA / Smarters for Mac',
    prerequisites: [
      'Mac computer running macOS',
      'Televo IPTV M3U link or Xtream credentials',
      'VLC or IINA video player',
    ],
    steps: [
      {
        step: 1,
        title: 'Install VLC or IINA',
        instructions: 'Download VLC from videolan.org or IINA from iina.io (both free and open-source).',
      },
      {
        step: 2,
        title: 'Open Network Stream',
        instructions: 'In VLC, click File > Open Network. Paste your Televo IPTV M3U URL and press Open.',
      },
      {
        step: 3,
        title: 'Browse Channel List',
        instructions: 'Press Cmd+Shift+P to reveal the playlist window where you can filter channels by category and country.',
      },
    ],
    troubleshooting: [
      {
        question: 'Can I use native iPad apps on Apple Silicon Macs?',
        answer: 'Yes! On Macs with M1, M2, or M3 chips, you can download "Smarters Player Lite" directly from the Mac App Store in the iPhone & iPad Apps section.',
      },
    ],
  },
};

export const FAQ_DATA = [
  {
    category: 'General & Brand',
    items: [
      {
        question: 'What is Televo IPTV?',
        answer: 'Televo IPTV (often simply called Televo) is a dedicated streaming service designed for customers across the United Kingdom. We provide flexible IPTV subscriptions, compatible device setup guidance, and British customer support to ensure seamless access to live television, sports, and on-demand entertainment.',
      },
      {
        question: 'How does Televo IPTV work?',
        answer: 'Televo IPTV transmits television broadcasts, on-demand movies, and series over your existing broadband internet connection rather than traditional satellite dishes or aerial cables. Once subscribed, you receive digital connection details (Xtream Codes API credentials and M3U playlist URLs) that you insert into any compatible media app on your Smart TV, Fire Stick, smartphone, or computer.',
      },
      {
        question: 'Is Televo IPTV tailored for the United Kingdom?',
        answer: 'Yes. Televo IPTV is focused on the UK market. All prices are listed in GBP (£), our installation tutorials and compatible app recommendations are curated for UK households, and our customer support operates in British English during convenient UK time zones.',
      },
    ],
  },
  {
    category: 'Subscriptions & Ordering',
    items: [
      {
        question: 'How do I subscribe to Televo IPTV?',
        answer: 'Simply choose your preferred subscription tier (1, 3, 6, or 12 months, or a multi-screen family plan) on our Pricing page, and contact our team via WhatsApp or checkout. Your account credentials and setup instructions are delivered directly to your WhatsApp and email typically within 5 to 15 minutes.',
      },
      {
        question: 'Are there any long-term contracts or direct debits?',
        answer: 'No. All Televo IPTV plans are prepaid and contract-free. We do not lock you into automatic direct debits. When your subscription period nears expiration, you can choose to renew manually or let it conclude without obligation.',
      },
      {
        question: 'What is your refund policy?',
        answer: 'We provide a transparent 7-day money-back guarantee. If you experience technical incompatibility that our support team cannot resolve within your first 7 days, you are eligible for a full refund.',
      },
      {
        question: 'Can I use Televo IPTV on multiple screens simultaneously?',
        answer: 'Our standard single-device subscriptions allow one active stream at any given time. For households wanting to watch separate channels simultaneously in the living room and bedrooms, we offer dedicated Multi-Screen Family Plans (2, 3, or 4 simultaneous devices).',
      },
    ],
  },
  {
    category: 'Setup & Device Compatibility',
    items: [
      {
        question: 'Which devices are compatible with Televo IPTV?',
        answer: 'Televo IPTV is compatible with virtually every modern internet-connected display, including Amazon Fire Stick / Fire TV, Samsung Smart TVs (Tizen), LG Smart TVs (webOS), Android TV, Google TV, Apple TV (tvOS), iPhone, iPad, Android smartphones and tablets, Windows PCs, and macOS computers.',
      },
      {
        question: 'Do I need technical skills to set up Televo IPTV?',
        answer: 'Not at all. Setup typically requires only 5 minutes. We provide clear, beginner-friendly instructions for every device in our Installation Centre, and our support team on WhatsApp is available to walk you through each step if you require assistance.',
      },
      {
        question: 'What internet speed do I need for smooth streaming?',
        answer: 'We recommend a minimum download speed of 10-15 Mbps for stable High-Definition (HD) playback, and 25-30 Mbps for 4K Ultra HD streams. For televisions located far from your home router, a 5GHz Wi-Fi connection or wired Ethernet cable will yield optimal stability.',
      },
      {
        question: 'How do I activate the Electronic Programme Guide (EPG)?',
        answer: 'Your Televo IPTV account includes an integrated EPG URL. When entering your Xtream Codes API credentials into players like TiviMate or IPTV Smarters Pro, the programme schedule loads automatically. You can also specify the EPG link in your app settings to ensure daily programme schedules remain updated.',
      },
    ],
  },
  {
    category: 'Troubleshooting & Support',
    items: [
      {
        question: 'What should I do if a stream buffers or freezes?',
        answer: 'First, restart your home broadband router and the streaming device. In your app settings, switch the internal video player (e.g., from Native to ExoPlayer or VLC). If the issue persists, our WhatsApp support team can verify your server routing and advise on DNS adjustments.',
      },
      {
        question: 'How can I contact Televo IPTV customer support?',
        answer: 'You can contact our UK customer support team directly via WhatsApp, by emailing support@televoiptv.co.uk, or by submitting a message on our Contact page. We are available 7 days a week.',
      },
    ],
  },
];

export const BLOG_POSTS = [
  postFirestick,
  postSamsung,
  postBuffering,
  postPlayers,
  postSetup,
];

