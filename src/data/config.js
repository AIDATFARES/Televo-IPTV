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
    price: 11.99,
    originalPrice: 14.99,
    monthlyEquivalent: '£11.99/mo',
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
    price: 27.99,
    originalPrice: 34.99,
    monthlyEquivalent: '£9.33/mo',
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
    price: 44.99,
    originalPrice: 59.99,
    monthlyEquivalent: '£7.50/mo',
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
    price: 89.99,
    originalPrice: 119.99,
    monthlyEquivalent: '£7.50/mo total',
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
    price: 119.99,
    originalPrice: 159.99,
    monthlyEquivalent: '£10.00/mo total',
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
    price: 149.99,
    originalPrice: 199.99,
    monthlyEquivalent: '£12.50/mo total',
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
    description: 'Simple sideloading with the Downloader app. Provides smooth playback on Fire TV Stick 4K, 4K Max, and Fire TV Cube.',
    setupTime: '5 mins',
  },
  {
    id: 'samsung-smart-tv',
    name: 'Samsung Smart TV (Tizen)',
    slug: 'samsung-smart-tv',
    category: 'Smart TVs',
    apps: ['IBO Player', 'Smart IPTV', 'IPTV Smarters Pro'],
    description: 'Install directly from the Samsung Apps Store using your television remote with M3U or Xtream API credentials.',
    setupTime: '5 mins',
  },
  {
    id: 'lg-smart-tv',
    name: 'LG Smart TV (webOS)',
    slug: 'lg-smart-tv',
    category: 'Smart TVs',
    apps: ['IBO Player', 'Smart IPTV', 'SS IPTV'],
    description: 'Available on LG Content Store with quick MAC address activation and crystal-clear 4K screen rendering.',
    setupTime: '5 mins',
  },
  {
    id: 'android-tv',
    name: 'Android TV / Google TV',
    slug: 'android-tv',
    category: 'TV Boxes & TVs',
    apps: ['TiviMate', 'IPTV Smarters Pro', 'XCIPTV'],
    description: 'Native Google Play Store access with exceptional player customisation, recording features, and EPG display.',
    setupTime: '5 mins',
  },
  {
    id: 'apple-tv',
    name: 'Apple TV (tvOS)',
    slug: 'apple-tv',
    category: 'Media Players',
    apps: ['IPTV Smarters', 'GSE Smart IPTV', 'iPlayTV'],
    description: 'Premium streaming performance on Apple TV 4K with smooth interface and AirPlay interoperability.',
    setupTime: '5 mins',
  },
  {
    id: 'iphone',
    name: 'iPhone & iPad (iOS)',
    slug: 'iphone',
    category: 'Mobile & Tablets',
    apps: ['GSE Smart IPTV', 'IPTV Smarters Pro', 'Smarters Player Lite'],
    description: 'Stream directly on iOS devices anywhere in the UK via Wi-Fi or mobile data without jailbreaking.',
    setupTime: '3 mins',
  },
  {
    id: 'android',
    name: 'Android Phone & Tablet',
    slug: 'android',
    category: 'Mobile & Tablets',
    apps: ['IPTV Smarters Pro', 'TiviMate', 'Televo Player'],
    description: 'Portable streaming with intuitive touch controls, background audio playback, and lightweight battery consumption.',
    setupTime: '3 mins',
  },
  {
    id: 'windows',
    name: 'Windows PC & Laptop',
    slug: 'windows',
    category: 'Computers',
    apps: ['VLC Media Player', 'IPTV Smarters Pro Windows'],
    description: 'Versatile playback through VLC network streaming or dedicated Windows IPTV desktop client.',
    setupTime: '4 mins',
  },
  {
    id: 'mac',
    name: 'Apple Mac (macOS)',
    slug: 'mac',
    category: 'Computers',
    apps: ['VLC Media Player', 'IINA', 'IPTV Smarters for Mac'],
    description: 'Native macOS video players supporting M3U playlists, hardware acceleration, and Retina display output.',
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
        answer: 'Simply choose your preferred subscription tier (1, 3, 6, or 12 months, or a multi-screen family plan) on our Pricing page, and contact our team via WhatsApp (+447882781998) or checkout. Your account credentials and setup instructions are delivered directly to your WhatsApp and email typically within 5 to 15 minutes.',
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
        answer: 'You can contact our UK customer support team directly via WhatsApp at +447882781998, by emailing support@televoiptv.co.uk, or by submitting a message on our Contact page. We are available 7 days a week.',
      },
    ],
  },
];

export const BLOG_POSTS = [
  {
    slug: 'televo-iptv-firestick-setup-guide',
    title: 'How to Set Up Televo IPTV on Amazon Fire Stick: Complete UK Guide',
    metaTitle: 'Televo IPTV Fire Stick Setup Guide | UK Installation Tutorial',
    metaDescription: 'Step-by-step tutorial explaining how to configure your Televo IPTV subscription on Amazon Fire Stick and Fire TV in the UK.',
    category: 'Setup Guides',
    date: '2026-03-24',
    readTime: '6 min read',
    excerpt: 'Amazon Fire TV Stick remains the most popular streaming device in the UK. Discover how to install Televo IPTV via Downloader and IPTV Smarters in less than 5 minutes.',
    content: `
      <h2>Why Amazon Fire Stick Is the Best Choice for Televo IPTV</h2>
      <p>The Amazon Fire TV Stick range (including Fire Stick HD, Fire Stick 4K, 4K Max, and Fire TV Cube) is widely considered the ideal streaming companion for <strong>Televo IPTV</strong> in the United Kingdom. Powered by Fire OS with support for high-efficiency video decoding, these compact devices deliver smooth, lag-free playback for live sports, movies, and TV series.</p>
      
      <h2>Step 1: Preparing Your Fire Stick for Installation</h2>
      <p>Because IPTV players are specialised media utilities, we will use the official <strong>Downloader</strong> tool from the Amazon Appstore to retrieve the installation package:</p>
      <ol>
        <li>Navigate to <strong>Settings</strong> (the gear icon on your Fire Stick home screen).</li>
        <li>Select <strong>My Fire TV</strong> &gt; <strong>Developer Options</strong>.</li>
        <li>Enable <strong>Apps from Unknown Sources</strong>. (If Developer Options is hidden on newer Fire OS updates, go to <em>About</em> and click the device name 7 times rapidly).</li>
      </ol>

      <h2>Step 2: Installing the Downloader Tool</h2>
      <p>Return to the main home screen, select the search icon, type <strong>Downloader</strong>, and install the verified utility published by AFTVnews. It is completely free and takes seconds to install.</p>

      <h2>Step 3: Downloading Your Televo IPTV Player</h2>
      <p>Launch Downloader and grant it storage permissions when prompted. In the URL bar, you can input the direct code or URL for <strong>IPTV Smarters Pro</strong> or <strong>TiviMate</strong>. Click Go to download the official APK, followed by <em>Install</em>.</p>

      <h2>Step 4: Connecting Your Televo IPTV Account</h2>
      <p>Open your newly installed player and choose <strong>Login with Xtream Codes API</strong>. Input your details:</p>
      <ul>
        <li><strong>Any Name:</strong> Televo IPTV</li>
        <li><strong>Username:</strong> (Your assigned username)</li>
        <li><strong>Password:</strong> (Your assigned password)</li>
        <li><strong>Server URL:</strong> (The server address received upon ordering)</li>
      </ul>
      <p>Select <em>Add User</em>. Your entire channel bouquet, on-demand library, and 7-day Electronic Programme Guide (EPG) will download onto your Fire Stick.</p>

      <h2>Pro Tips for the Best UK Streaming Experience</h2>
      <p>To ensure flawless streaming during peak UK broadcast hours, connect your Fire Stick to the 5GHz frequency band of your home router. Additionally, within the player settings, set the video decoder to <strong>ExoPlayer</strong> for seamless buffer-free playback.</p>
    `,
  },
  {
    slug: 'how-to-set-up-televo-iptv-samsung-smart-tv',
    title: 'How to Install and Set Up Televo IPTV on Samsung Smart TV',
    metaTitle: 'Televo IPTV Samsung Smart TV Guide | UK Setup & Apps',
    metaDescription: 'Learn how to easily set up your Televo IPTV subscription on Samsung Smart TVs with Tizen OS in the UK without external boxes.',
    category: 'Smart TV Guides',
    date: '2026-03-20',
    readTime: '5 min read',
    excerpt: 'Stream directly on your Samsung Smart TV using IBO Player or Smart IPTV. Follow our step-by-step UK tutorial for fast activation.',
    content: `
      <h2>Streaming Televo IPTV Directly on Samsung Smart TVs</h2>
      <p>Many UK viewers prefer watching television directly through their Samsung Smart TV without adding cables or external dongles. Samsung's Tizen operating system supports several dependable IPTV players that seamlessly interface with your <strong>Televo IPTV</strong> subscription.</p>

      <h2>Recommended Samsung TV Apps for 2026</h2>
      <p>The top verified players on the Samsung Apps Store include:</p>
      <ul>
        <li><strong>IBO Player:</strong> Highly responsive, modern interface with fast channel switching and complete 4K HDR playback support.</li>
        <li><strong>Smart IPTV:</strong> A classic lightweight player with an online playlist management portal.</li>
        <li><strong>Smart STB:</strong> Emulates a dedicated set-top box interface on your Samsung panel.</li>
      </ul>

      <h2>Step-by-Step Samsung TV Setup Instructions</h2>
      <ol>
        <li>Press the <strong>Smart Hub</strong> / Home button on your Samsung remote and open <strong>Apps</strong>.</li>
        <li>Search for <strong>IBO Player</strong> and download the application.</li>
        <li>Open the application to view your unique <strong>Device MAC Address</strong> and <strong>Device Key</strong> displayed on screen.</li>
        <li>On your smartphone or computer, visit the official IBO Player management website. Enter your MAC Address and Device Key, then paste the <strong>Televo IPTV M3U URL</strong> or Xtream API credentials provided upon subscribing.</li>
        <li>Click Save, then return to your Samsung TV and select <strong>Reload</strong>.</li>
      </ol>

      <h2>Troubleshooting Tips for Samsung Smart TVs</h2>
      <p>If you experience any momentary buffering on your television, ensure that your TV is connected via a wired Ethernet cable or high-speed 5GHz Wi-Fi. In the app settings, verify that the stream buffer size is set to standard (or 2-3 seconds) to cushion against temporary home network fluctuations.</p>
    `,
  },
  {
    slug: 'how-to-fix-iptv-buffering-troubleshooting-guide',
    title: 'How to Fix IPTV Buffering: Practical Troubleshooting for UK Viewers',
    metaTitle: 'How to Fix IPTV Buffering in the UK | Televo IPTV Troubleshooting',
    metaDescription: 'Discover practical solutions to eliminate IPTV buffering, stuttering, and stream freezing across UK broadband providers.',
    category: 'Troubleshooting',
    date: '2026-03-15',
    readTime: '7 min read',
    excerpt: 'Tired of buffering during major live events? Learn the root causes of streaming hiccups and how to optimize your UK home network.',
    content: `
      <h2>Understanding Why IPTV Buffering Occurs</h2>
      <p>Buffering happens when your streaming app consumes video data faster than your home network can download it. While many people immediately assume the streaming server is at fault, the reality is that over 85% of buffering issues in the UK stem from home Wi-Fi congestion, device hardware limitations, or broadband routing throttles.</p>

      <h2>1. Switch From 2.4GHz to 5GHz Wi-Fi or Ethernet</h2>
      <p>The standard 2.4GHz Wi-Fi band is heavily congested in UK homes by microwave ovens, baby monitors, and neighbouring routers. Connecting your Smart TV or Fire Stick to your router's <strong>5GHz band</strong> immediately provides greater throughput and lower latency. For stationary devices, a direct <strong>Ethernet cable</strong> is always the gold standard.</p>

      <h2>2. Adjust the Video Player Engine in Your App</h2>
      <p>Most IPTV applications (such as IPTV Smarters Pro and TiviMate) allow you to change the underlying video decoding engine. If you experience freezing on the default "Native" player, switch to <strong>ExoPlayer</strong> or <strong>VLC Engine</strong> in the application settings. ExoPlayer is specially tailored for modern streaming formats and handles micro-drops gracefully.</p>

      <h2>3. Clear App Cache and Restart Devices</h2>
      <p>Streaming devices like Fire Sticks and Smart TVs possess modest memory allowances. Over weeks of continuous viewing, residual cache accumulates. Go to your device application settings, select your IPTV player, and choose <strong>Clear Cache</strong>. Restart your device and your broadband router to refresh your DNS cache.</p>

      <h2>4. Check Your UK Broadband Speed</h2>
      <p>Run an independent speed test on your streaming device using Fast.com or Speedtest.net. For Full HD streaming, a consistent 15 Mbps is recommended. For 4K UHD content, ensure your device receives at least 25-30 Mbps.</p>

      <h2>5. Reach Out to Televo IPTV Support</h2>
      <p>If you have implemented these recommendations and still face issues, contact the <strong>Televo IPTV</strong> support team via WhatsApp (+447882781998). Our team can test your connection routing and ensure your account is connected to our fastest UK edge node.</p>
    `,
  },
  {
    slug: 'best-iptv-players-smart-tv-uk',
    title: 'Best IPTV Players for Smart TVs in the UK (2026 Comparison)',
    metaTitle: 'Best IPTV Players for Smart TV UK (2026) | Televo IPTV',
    metaDescription: 'Compare the best IPTV player applications for Smart TVs, Fire Sticks, and Android TV in the UK. Features, speed, and usability reviewed.',
    category: 'App Reviews',
    date: '2026-03-10',
    readTime: '6 min read',
    excerpt: 'Selecting the right player makes all the difference. Discover the top-rated apps for TiviMate, IPTV Smarters, IBO Player, and more.',
    content: `
      <h2>Why Your Choice of Player Matters</h2>
      <p>Your IPTV subscription is only as pleasant to use as the software interface you interact with daily. The best IPTV players offer swift channel zapping, intuitive Electronic Programme Guides (EPG), customizable favourite lists, and robust playback stability.</p>

      <h2>1. TiviMate IPTV Player (Best Overall for Android & Fire TV)</h2>
      <p><strong>TiviMate</strong> sets the benchmark for modern IPTV playback. Designed specifically for TV screens with remote controls, it looks and feels like a luxury premium cable set-top box. Features include multi-screen viewing, automatic EPG updates, catch-up scheduling, and external recording.</p>

      <h2>2. IPTV Smarters Pro (Most Versatile Cross-Platform)</h2>
      <p><strong>IPTV Smarters Pro</strong> remains the most widely deployed application because it runs smoothly across virtually every platform: Fire Stick, Android TV, Samsung Smart TV, LG webOS, iOS, and Windows PC. It natively supports Xtream Codes API credentials and multi-user profiles.</p>

      <h2>3. IBO Player (Best for Samsung & LG Smart TVs)</h2>
      <p>For UK viewers using integrated Smart TVs without external sticks, <strong>IBO Player</strong> provides rapid channel loading, clean category tabs, and rock-solid 4K video rendering on both Samsung Tizen and LG webOS systems.</p>

      <h2>4. GSE Smart IPTV (Best for Apple iOS & Mac)</h2>
      <p>For iPhone, iPad, and Apple TV users, <strong>GSE Smart IPTV</strong> delivers comprehensive playlist compatibility, AirPlay 2 support, and multiple audio track selection.</p>

      <h2>Pairing Your Player with Televo IPTV</h2>
      <p>All of these leading players are fully supported by <strong>Televo IPTV</strong>. Upon subscribing, you receive full M3U URLs and Xtream Codes API login parameters so you can choose the exact application that matches your living room setup.</p>
    `,
  },
  {
    slug: 'complete-uk-iptv-setup-guide-televo',
    title: 'The Complete Televo IPTV UK Setup Guide: From Subscription to Streaming',
    metaTitle: 'Complete Televo IPTV UK Setup Guide | Quick Start Tutorial',
    metaDescription: 'A beginner-friendly walkthrough explaining how to get started with Televo IPTV in the UK, from ordering to configuring your preferred device.',
    category: 'Setup Guides',
    date: '2026-03-05',
    readTime: '8 min read',
    excerpt: 'New to Televo IPTV? Here is our comprehensive beginner walkthrough covering everything from plan selection to device configuration.',
    content: `
      <h2>Welcome to Televo IPTV in the UK</h2>
      <p>If you are switching to <strong>Televo IPTV</strong> from traditional UK television providers, you will be pleased to discover how straightforward and flexible modern internet streaming has become. There are no engineer visits, no unsightly satellite dishes, and no punitive multi-year contracts.</p>

      <h2>Step 1: Selecting the Right Subscription Plan</h2>
      <p>Begin by assessing your household's viewing requirements:</p>
      <ul>
        <li><strong>Single-Device Plans (1, 3, 6, or 12 Months):</strong> Best if you stream primarily in your main living room or on a single mobile device. Our 12-month tier delivers the greatest value in GBP.</li>
        <li><strong>Multi-Screen Family Plans (2, 3, or 4 Screens):</strong> Essential if multiple family members want to watch different channels simultaneously in separate rooms.</li>
      </ul>

      <h2>Step 2: Receiving Your Account Credentials</h2>
      <p>After placing your order, your account is activated by our UK support team. You will receive an automated delivery message via WhatsApp and email containing:</p>
      <ul>
        <li>Your Unique Username and Password</li>
        <li>Your Dedicated Server URL</li>
        <li>Your Full M3U Playlist Link</li>
        <li>Your Integrated EPG Schedule URL</li>
      </ul>

      <h2>Step 3: Choosing and Installing Your App</h2>
      <p>Depending on your device, download the corresponding certified player:</p>
      <ul>
        <li><strong>Fire Stick / Fire TV:</strong> IPTV Smarters Pro or TiviMate via Downloader.</li>
        <li><strong>Samsung / LG Smart TV:</strong> IBO Player from the TV app store.</li>
        <li><strong>Apple TV / iOS:</strong> Smarters Player Lite or GSE Smart IPTV from the App Store.</li>
        <li><strong>PC / Mac:</strong> VLC Media Player or IPTV Smarters desktop.</li>
      </ul>

      <h2>Step 4: Inputting Your Credentials and Streaming</h2>
      <p>Launch your player, select <strong>Login with Xtream Codes API</strong>, and enter your Televo IPTV server address, username, and password. The application will synchronize the channel catalogue, live sporting schedules, and VOD titles within 60 seconds.</p>

      <h2>Need Personal Assistance?</h2>
      <p>Our British customer service team is on hand 7 days a week via WhatsApp (+447882781998) to assist with any questions or guide you through first-time setup.</p>
    `,
  },
];
