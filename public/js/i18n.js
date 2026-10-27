/**
 * WitnessCard - Internationalization (i18n) Engine
 * Supports English (default) and Spanish.
 * Persists user choice in localStorage.
 */

const I18N_DATA = {
  en: {
    // Meta & Head
    "meta.title": "WitnessCard — Smart Business Card Scanner 100% On-Device",
    "meta.desc": "WitnessCard is the native Android app built with Kotlin and Jetpack Compose to scan, organize, and share business cards with local OCR and absolute privacy.",
    "privacy.meta.title": "Privacy Policy — WitnessCard",
    "privacy.meta.desc": "Official Privacy Policy of WitnessCard. 100% on-device processing, zero cloud servers, and total sovereignty over your business contacts.",

    // Navbar
    "nav.features": "Features",
    "nav.digitalCard": "Digital Card",
    "nav.privacy": "Privacy",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "nav.legal": "Legal",
    "nav.backHome": "← Back to Home",
    "nav.contact": "Contact",
    "nav.printPdf": "Print / PDF",
    "nav.getApp": "Get App",
    "nav.getAppMobile": "Get WitnessCard App",
    "nav.brandTag": "100% On-Device",
    "nav.brandTagPrivacy": "Privacy",

    // Hero Section
    "hero.badge": "Absolute Privacy • 100% On-Device",
    "hero.title": "The business card scanner that <span class=\"highlight\">never sends your data</span> to the cloud.",
    "hero.desc": "Transform physical business cards into neatly organized digital contacts in seconds. No remote servers. No forced subscriptions.",
    "hero.ctaPlay": "Download on Google Play",
    "hero.ctaExplore": "See How It Works",
    "hero.trust1": "OCR",
    "hero.trust2": "10 Free Scans",
    "hero.trust3": "Lifetime $39 MXN (~$2 USD)",

    // Simulator
    "sim.tabScanner": "1. OCR Scanner",
    "sim.tabFolders": "2. Folders",
    "sim.tabCard": "3. QR Card",
    "sim.extractedLabel": "Fields Extracted by Local AI:",
    "sim.lblContact": "Contact:",
    "sim.lblRole": "Role:",
    "sim.lblPhone": "Phone:",
    "sim.lblFolder": "Folder:",
    "sim.badge100": "✓ 100%",
    "sim.badgeOcr": "✓ OCR",
    "sim.badgeDirect": "✓ Direct",
    "sim.badgeSaved": "✓ Saved",
    "sim.fldMedical": "📁 Medical &amp; Health",
    "sim.fldTech": "Tech &amp; AI",
    "sim.fldTechCount": "14 cards",
    "sim.fldSuppliers": "Suppliers",
    "sim.fldSuppliersCount": "8 cards",
    "sim.fldConferences": "Conferences 2026",
    "sim.fldConferencesCount": "22 cards",
    "sim.fldInvestors": "Investors",
    "sim.fldInvestorsCount": "5 cards",
    "sim.searchPlaceholder": "Search by name, company, email...",
    "sim.cardName": "Beltsasar",
    "sim.cardRole": "Lead Software Architect",
    "sim.cardCompany": "WitnessCard Mobile",
    "sim.cardVcard": "Standard vCard 3.0",
    "sim.cardVcardSub": "Point camera to save directly into contacts",
    "sim.themeLabel": "Select color theme:",

    // Features Section
    "features.tag": "Local Architecture",
    "features.title": "Designed for Speed, Built for Absolute Privacy",
    "features.subtitle": "Traditional scanner apps upload your contacts to remote databases. WitnessCard runs exclusively on your smartphone's processor.",

    "feat1.title": "On-Device OCR",
    "feat1.desc": "Ultra-fast text recognition powered by local OCR. Scans text locally without requiring any cellular data or Wi-Fi.",
    "feat1.tag": "100% Offline",

    "feat2.title": "Hierarchical Folders",
    "feat2.desc": "Organize your contacts with subfolders, distinct colors, and intuitive nesting. Say goodbye to disorganized business card piles.",
    "feat2.tag": "Total Organization",

    "feat3.title": "Instant Global Search",
    "feat3.desc": "Find any contact in milliseconds by searching their name, company, job title, phone number, address, or custom notes.",
    "feat3.tag": "Indexed Offline",

    "feat4.title": "Digital vCard QR Card",
    "feat4.desc": "Create your own executive business card. Display a universal vCard QR code that others can scan with their native camera app.",
    "feat4.tag": "Universal Exchange",

    "feat5.title": "Export to Contacts",
    "feat5.desc": "Export scanned cards directly to your phone's native address book or Google Contacts with a single tap, or create universal .vcf files.",
    "feat5.tag": "Optional Sync",

    "feat6.title": "Local Backups",
    "feat6.desc": "Export and import complete backups in .zip format using Android's secure Storage Access Framework. Switch phones with zero loss.",
    "feat6.tag": "Sovereign Control",

    // Digital Card Split
    "dcard.tag": "Your Digital Identity",
    "dcard.title": "Your own interactive business card with vCard QR",
    "dcard.desc": "Never run out of cards at a conference or networking event. WitnessCard lets you craft your personalized executive card with your logo and direct contact info.",
    "dcard.item1": "<strong>Universal compatibility:</strong> Anyone can scan your QR using their standard iPhone or Android camera to instantly add you to their contacts.",
    "dcard.item2": "<strong>6 elegant color themes:</strong> Dark Navy, Classic Light, Midnight Cyan, Royal Blue, Charcoal Black, and Emerald.",
    "dcard.item3": "<strong>Save image to gallery:</strong> Export a high-resolution branded QR code image to your photo library for easy sharing via WhatsApp or social media.",
    "dcard.mockTitle": "Standard vCard 3.0",
    "dcard.mockDesc": "Scanning automatically opens the native contact card on iOS and Android. Zero web intermediaries.",
    "dcard.mockType": "📱 Digital Business Card",
    "dcard.mockVerified": "✓ Verified On-Device",

    // Privacy Section
    "privacy.tag": "Sovereign Architecture",
    "privacy.title": "Real Privacy, Backed by Architecture",
    "privacy.desc": "Most card scanner apps upload your clients' business cards to cloud servers to train external AI models or build marketing databases. In WitnessCard, we have zero cloud servers because we believe your business relationships belong strictly to you.",
    "privacy.p1Title": "Zero External Servers",
    "privacy.p1Desc": "We do not operate backend servers or cloud databases. There is no remote repository where your contact information could ever leak.",
    "privacy.p2Title": "Local On-Device OCR",
    "privacy.p2Desc": "Text recognition runs on a local on-device neural OCR engine. Your photos and camera feed never leave your physical smartphone.",
    "privacy.p3Title": "Sandboxed Storage",
    "privacy.p3Desc": "Cards and images are stored strictly in the app's isolated sandbox storage. No other installed app can access your contacts database.",
    "privacy.p4Title": "No User Tracking",
    "privacy.p4Desc": "Zero tracking scripts, zero third-party advertising SDKs, and zero telemetry profiling. Your professional network belongs solely to you.",
    "privacy.learnMore": "Read full Privacy Policy →",

    // Pricing Section
    "pricing.tag": "Transparent Pricing",
    "pricing.title": "Choose how you want to use WitnessCard",
    "pricing.subtitle": "No greedy monthly subscriptions. Try it free, and unlock unlimited lifetime access for the price of a cup of coffee.",
    
    "price.freeTitle": "Free Explorer",
    "price.freePrice": "$0",
    "price.freePeriod": "Free forever",
    "price.freeDesc": "Ideal for testing OCR recognition speed and card scanning quality with zero financial commitment.",
    "price.freeItem1": "<strong>10 physical card scans</strong> with full OCR",
    "price.freeItem2": "Complete local folder organization",
    "price.freeItem3": "Instant global search across all fields",
    "price.freeItem4": "Digital business card &amp; vCard QR generator",
    "price.freeItem5": "Export and restore offline .zip backups",
    "price.freeItem6": "100% offline, zero cloud servers",
    "price.freeCta": "Download Free",

    "price.proBadge": "BEST VALUE",
    "price.proTitle": "Lifetime Pro",
    "price.proPrice": "$39 MXN",
    "price.proPeriod": "(~$2 USD) • One-time payment",
    "price.proDesc": "Complete sovereignty over your professional contact network. No renewals, no ads, forever yours.",
    "price.proItem1": "<strong>Unlimited card scans</strong> forever",
    "price.proItem2": "One-time purchase bound to Google Play account",
    "price.proItem3": "All 6 digital card executive color themes",
    "price.proItem4": "All future on-device AI features included",
    "price.proItem5": "Zero ads, zero subscriptions, zero tracking",
    "price.proItem6": "Eligible for Google Play Family Library",
    "price.proCta": "Get Lifetime Pro",

    "price.guaranteeTitle": "100% Google Play Guarantee",
    "price.guaranteeDesc": "Your purchase is handled directly by Google Play In-App Billing. Automatically restores across all your current and future Android devices.",

    // FAQ Section
    "faq.tag": "Questions &amp; Answers",
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Everything you need to know about WitnessCard, privacy, and licensing.",

    "faq.q1": "How does the one-time $39 MXN payment work?",
    "faq.a1": "The purchase is securely processed through Google Play In-App Billing. Upon completing the one-time payment of $39 Mexican Pesos (or approximately $2 USD in your local currency), the lifetime license is permanently bound to your Google Account. There are no recurring charges, renewals, or hidden fees. If you reinstall the app or upgrade your phone, your purchase restores automatically.",

    "faq.q2": "What does the free mode include?",
    "faq.a2": "The free mode lets you scan up to 10 physical business cards to verify OCR accuracy and speed on your own device. It includes folder organization and instant global search. Once you reach 10 scans, you can upgrade to the lifetime license to scan unlimited cards.",

    "faq.q3": "Does the app really work without internet?",
    "faq.a3": "Yes, 100%. Card scanning, optical character recognition (OCR), folder structuring, QR code generation, and contact exports work seamlessly in airplane mode or in venues without cell reception (such as convention center basements or flights).",

    "faq.q4": "How does the digital QR card work with other phones?",
    "faq.a4": "Your Digital Card generates an industry-standard vCard 3.0 QR code. The other person only needs to point their standard iPhone or Android camera at your screen or saved image. Their phone will instantly recognize the contact card and prompt them to add you to their address book without downloading any app.",

    "faq.q5": "How do I transfer my cards to another phone?",
    "faq.a5": "In the Settings section, tap \"Export Backup\". WitnessCard will compile your cards, folder hierarchy, and images into an offline compressed .zip file and open Android's native file picker so you can save it anywhere you prefer (internal storage, SD card, Google Drive, or transfer to your computer).",

    "faq.q6": "What permissions does the app require?",
    "faq.a6": "Only Camera (to capture card photos) and optionally Write Contacts (if you choose to tap \"Export to Device Contacts\"). The app never reads or harvests your existing phone contacts.",

    // Simulator & Trust Extra
    "sim.targetName": "DR. ALEXANDER VANCE",
    "sim.targetRole": "Clinical Cardiologist &amp; Researcher",
    "sim.targetCompany": "Metropolitan Health Center",
    "sim.targetContact": "alexander@cardiohealth.org • +1 415 555 0192",
    "sim.valContact": "Dr. Alexander Vance",
    "sim.valRole": "Clinical Cardiologist",
    "sim.valPhone": "+1 415 555 0192",
    "sim.valFolder": "📁 Medical &amp; Health",
    "sim.bcHome": "Home",
    "sim.bcVip": "VIP Clients",
    "sim.bcWest": "West Coast",
    "sim.cardsInFolder": "Cards in this folder:",
    "sim.c1Name": "Sophia Valenzuela",
    "sim.c1Role": "Chief Operations Officer • InnovaTech",
    "sim.cTag": "📁 West Coast",
    "sim.c2Name": "Robert Sterling, P.E.",
    "sim.c2Role": "Managing Partner • Nexus Solutions",
    "sim.c3Name": "Mariana Torres, CFA",
    "sim.c3Role": "Financial Consultant • Capital Partners",
    "sim.myRole": "Software Engineer",
    "sim.qrSubtext": "Offline vCard Code • Scan with any smartphone",
    "sim.tryThemes": "Try Visual Themes:",

    "trust.p1Title": "100% On-Device Processing",
    "trust.p1Desc": "OCR text extraction and semantic structuring run locally on your phone's processor.",
    "trust.p2Title": "Zero Cloud Servers",
    "trust.p2Desc": "We do not operate remote databases. Not a single byte of your contact information ever leaves your device.",
    "trust.p3Title": "No Accounts or Trackers",
    "trust.p3Desc": "No registration, sign-in, or email required to begin scanning. Just open the app and get straight to business.",
    "trust.p4Title": "Direct Google Play Billing",
    "trust.p4Desc": "In-app upgrades are processed end-to-end by Google Play. We never handle or store your financial details.",

    "dcard.devRole": "Software Engineer • Kotlin &amp; Android",

    "price.freeApprox": "100% Free",
    "price.freeCadence": "Forever",
    "price.freeItem7": "Bulk export to Google Contacts (.vcf)",
    "price.freeNote": "No intrusive ads • No account required",

    "price.proApprox": "Approximately <strong>~$2 USD</strong>",
    "price.proCadence": "⚡ One-time payment • No monthly fees",
    "price.proItem7": "All future updates and improvements included",
    "price.proNote": "Processed by Google Play Billing • Official purchase protection",

    "privacy.spotlightBadge": "Uncompromising Architectural Commitment",
    "privacy.readPolicyBtn": "Read the Full Privacy Policy (October 27, 2026)",

    "audit.title": "Data Flow Architecture Audit",
    "audit.row1Lbl": "OCR &amp; text recognition",
    "audit.row1Val": "✓ Local on NPU chip",
    "audit.row2Lbl": "Photo &amp; image storage",
    "audit.row2Val": "✓ App internal sandbox",
    "audit.row3Lbl": "vCard QR code generation",
    "audit.row3Val": "✓ 100% offline",
    "audit.row4Lbl": "Transmission to cloud servers",
    "audit.row4Val": "✗ 0 KB transmitted",
    "audit.row5Lbl": "Advertising trackers",
    "audit.row5Val": "✗ 0 trackers",
    "audit.row6Lbl": "Selling databases to third parties",
    "audit.row6Val": "✗ Impossible by design",
    // Footer
    "footer.desc": "Executive productivity tool and intelligent business card scanner built with an uncompromising focus on user privacy. 100% On-Device.",
    "footer.crafted": "Crafted with passion by <strong>Beltsasar</strong>.",
    "footer.colProduct": "Product",
    "footer.fKeyFeatures": "Key Features",
    "footer.fDigitalCard": "Digital QR Card",
    "footer.fPricing": "Pricing (Free &amp; Pro)",
    "footer.fFaq": "Frequently Asked Questions",
    "footer.colLegal": "Privacy &amp; Legal",
    "footer.fPrivacyPolicy": "Privacy Policy",
    "footer.fZeroKnowledge": "Zero-Knowledge Architecture",
    "footer.fPermissions": "Device Permissions",
    "footer.fBilling": "Google Play Billing",
    "footer.colContact": "Support &amp; Contact",
    "footer.linkPrivacy": "Privacy Policy",
    "footer.linkTerms": "Terms of Service",
    "footer.devName": "Developer: Beltsasar",
    "footer.contactInfo": "Contact Information",
    "footer.copyToast": "Email copied to clipboard: ",
    "footer.bottomPrivacy": "Privacy",
    "footer.bottomPricing": "Pricing",
    "footer.bottomContact": "Contact",
    "footer.copyright": "© 2026 WitnessCard. Developed by Beltsasar. All rights reserved."
  },

  es: {
    // Meta & Head
    "meta.title": "WitnessCard — Escáner Inteligente de Tarjetas de Presentación 100% On-Device",
    "meta.desc": "WitnessCard es la app para Android construida con Kotlin y Jetpack Compose para escanear, organizar y compartir tarjetas de presentación con OCR local y privacidad absoluta.",
    "privacy.meta.title": "Política de Privacidad — WitnessCard",
    "privacy.meta.desc": "Política de Privacidad oficial de WitnessCard. Procesamiento 100% on-device, cero servidores en la nube y total soberanía de tus contactos.",

    // Navbar
    "nav.features": "Funciones",
    "nav.digitalCard": "Tarjeta Digital",
    "nav.privacy": "Privacidad",
    "nav.pricing": "Precios",
    "nav.faq": "Preguntas",
    "nav.legal": "Legal",
    "nav.backHome": "← Volver al Inicio",
    "nav.contact": "Contacto",
    "nav.printPdf": "Imprimir / PDF",
    "nav.getApp": "Obtener App",
    "nav.getAppMobile": "Descargar WitnessCard",
    "nav.brandTag": "100% On-Device",
    "nav.brandTagPrivacy": "Privacidad",

    // Hero Section
    "hero.badge": "Privacidad Absoluta • 100% On-Device",
    "hero.title": "El escáner de tarjetas de presentación que <span class=\"highlight\">nunca envía tus datos</span> a la nube.",
    "hero.desc": "Convierte tarjetas de presentación físicas en contactos organizados en segundos. Sin servidores remotos. Sin suscripciones obligatorias.",
    "hero.ctaPlay": "Descargar en Google Play",
    "hero.ctaExplore": "Ver Cómo Funciona",
    "hero.trust1": "OCR",
    "hero.trust2": "10 Escaneos Gratis",
    "hero.trust3": "De Por Vida $39 MXN (~$2 USD)",

    // Simulator
    "sim.tabScanner": "1. Escáner OCR",
    "sim.tabFolders": "2. Carpetas",
    "sim.tabCard": "3. Tarjeta QR",
    "sim.extractedLabel": "Campos Extraídos por IA Local:",
    "sim.lblContact": "Contacto:",
    "sim.lblRole": "Cargo:",
    "sim.lblPhone": "Teléfono:",
    "sim.lblFolder": "Carpeta:",
    "sim.badge100": "✓ 100%",
    "sim.badgeOcr": "✓ OCR",
    "sim.badgeDirect": "✓ Directo",
    "sim.badgeSaved": "✓ Guardado",
    "sim.fldMedical": "📁 Salud &amp; Medicina",
    "sim.fldTech": "Tecnología &amp; IA",
    "sim.fldTechCount": "14 tarjetas",
    "sim.fldSuppliers": "Proveedores",
    "sim.fldSuppliersCount": "8 tarjetas",
    "sim.fldConferences": "Congresos 2026",
    "sim.fldConferencesCount": "22 tarjetas",
    "sim.fldInvestors": "Inversionistas",
    "sim.fldInvestorsCount": "5 tarjetas",
    "sim.searchPlaceholder": "Buscar por nombre, empresa, email...",
    "sim.cardName": "Beltsasar",
    "sim.cardRole": "Arquitecto de Software Principal",
    "sim.cardCompany": "WitnessCard Mobile",
    "sim.cardVcard": "Estándar vCard 3.0",
    "sim.cardVcardSub": "Apunta la cámara para guardar en tus contactos",
    "sim.themeLabel": "Elegir tema de color:",

    // Features Section
    "features.tag": "Arquitectura Local",
    "features.title": "Diseñado para la Rapidez, Construido para la Privacidad",
    "features.subtitle": "Las aplicaciones tradicionales suben tus contactos a bases de datos remotas. WitnessCard procesa todo en el procesador de tu smartphone.",

    "feat1.title": "OCR en Dispositivo",
    "feat1.desc": "Reconocimiento de texto ultrarrápido con OCR en el dispositivo. Escanea localmente sin requerir datos celulares ni Wi-Fi.",
    "feat1.tag": "100% Offline",

    "feat2.title": "Carpetas Jerárquicas",
    "feat2.desc": "Organiza tus contactos con subcarpetas, colores distintivos y anidación intuitiva. Dile adiós al desorden de tarjetas de papel.",
    "feat2.tag": "Organización Total",

    "feat3.title": "Búsqueda Global Instantánea",
    "feat3.desc": "Encuentra cualquier contacto en milisegundos buscando por nombre, empresa, puesto, teléfono, dirección o notas personalizadas.",
    "feat3.tag": "Indexado Offline",

    "feat4.title": "Tarjeta Digital con QR vCard",
    "feat4.desc": "Crea tu propia tarjeta ejecutiva interactiva. Muestra un código QR estándar que otros pueden escanear con la cámara nativa de su móvil.",
    "feat4.tag": "Intercambio Universal",

    "feat5.title": "Exportación a Contactos",
    "feat5.desc": "Exporta tarjetas escaneadas directamente a la agenda nativa o a Contactos de Google con un solo toque, o genera un archivo universal .vcf.",
    "feat5.tag": "Sincronización Opcional",

    "feat6.title": "Copias de Seguridad Locales",
    "feat6.desc": "Exporta e importa respaldos completos en formato .zip mediante el Selector de Archivos seguro de Android. Cambia de móvil sin perder nada.",
    "feat6.tag": "Control Soberano",

    // Digital Card Split
    "dcard.tag": "Tu Firma Digital",
    "dcard.title": "Tu propia tarjeta de presentación interactiva con QR vCard",
    "dcard.desc": "Nunca más te quedarás sin tarjetas en un evento. WitnessCard te permite diseñar tu tarjeta digital profesional personalizada con tu fotografía, logotipo empresarial y datos de contacto directos.",
    "dcard.item1": "<strong>Compatible universal:</strong> Cualquier persona puede escanear tu QR con la app nativa de cámara de su iPhone o Android y guardar tu contacto directo.",
    "dcard.item2": "<strong>6 temas visuales elegantes:</strong> Dark Navy, Classic Light, Midnight Cyan, Royal Blue, Charcoal Black y Emerald.",
    "dcard.item3": "<strong>Exportar imagen a galería:</strong> Guarda el código QR de alta resolución con tu marca en la carpeta pública de fotos para compartirlo en WhatsApp o redes.",
    "dcard.mockTitle": "Estándar vCard 3.0",
    "dcard.mockDesc": "Al escanearse abre automáticamente la ficha de contacto nativa en iOS y Android. Cero intermediarios web.",
    "dcard.mockType": "📱 Tarjeta de Presentación Digital",
    "dcard.mockVerified": "✓ Verificado On-Device",

    // Privacy Section
    "privacy.tag": "Arquitectura Soberana",
    "privacy.title": "Privacidad Real, Garantizada por Arquitectura",
    "privacy.desc": "La mayoría de apps suben las tarjetas de tus clientes a servidores en la nube para entrenar modelos de IA o construir bases de datos de mercadotecnia. En WitnessCard tenemos cero servidores porque tus relaciones comerciales son solo tuyas.",
    "privacy.p1Title": "Cero Servidores Externos",
    "privacy.p1Desc": "No operamos servidores backend ni bases de datos en la nube. No existe ningún repositorio remoto donde tu información pueda filtrarse.",
    "privacy.p2Title": "OCR en Dispositivo",
    "privacy.p2Desc": "El reconocimiento de texto funciona mediante un motor neuronal local de OCR en el dispositivo. Tus fotos nunca salen de tu smartphone físico.",
    "privacy.p3Title": "Almacenamiento Aislado",
    "privacy.p3Desc": "Las tarjetas e imágenes se guardan exclusivamente en el almacenamiento aislado de la app. Ninguna otra aplicación puede acceder a ellas.",
    "privacy.p4Title": "Cero Rastreo de Usuarios",
    "privacy.p4Desc": "Sin scripts de seguimiento, sin SDKs publicitarios de terceros y sin telemetría de perfiles. Tu red profesional te pertenece únicamente a ti.",
    "privacy.learnMore": "Leer Política de Privacidad completa →",

    // Pricing Section
    "pricing.tag": "Precios Transparentes",
    "pricing.title": "Elige cómo quieres usar WitnessCard",
    "pricing.subtitle": "Sin suscripciones mensuales abusivas. Pruébala gratis y desbloquea acceso ilimitado de por vida por el precio de un café.",

    "price.freeTitle": "Explorador Gratis",
    "price.freePrice": "$0",
    "price.freePeriod": "Gratis para siempre",
    "price.freeDesc": "Ideal para comprobar la precisión del OCR y la velocidad de escaneo sin ningún compromiso financiero.",
    "price.freeItem1": "<strong>10 escaneos de tarjetas físicas</strong> con OCR completo",
    "price.freeItem2": "Organización completa en carpetas locales",
    "price.freeItem3": "Búsqueda global instantánea por todos los campos",
    "price.freeItem4": "Tarjeta de presentación digital con generador QR vCard",
    "price.freeItem5": "Exportar e importar copias de seguridad en archivo .zip",
    "price.freeItem6": "100% offline, cero servidores en la nube",
    "price.freeCta": "Descargar Gratis",

    "price.proBadge": "MÁS POPULAR",
    "price.proTitle": "Pro De Por Vida",
    "price.proPrice": "$39 MXN",
    "price.proPeriod": "(~$2 USD) • Pago único",
    "price.proDesc": "Soberanía total sobre tu red de contactos profesionales. Sin renovaciones, sin anuncios, tuya para siempre.",
    "price.proItem1": "<strong>Escaneos ilimitados de tarjetas</strong> de por vida",
    "price.proItem2": "Compra única ligada a tu cuenta de Google Play",
    "price.proItem3": "Los 6 temas ejecutivos para tu tarjeta digital",
    "price.proItem4": "Todas las futuras funciones de IA local incluidas",
    "price.proItem5": "Cero anuncios, cero suscripciones, cero rastreo",
    "price.proItem6": "Apta para la Biblioteca Familiar de Google Play",
    "price.proCta": "Obtener Pro de por Vida",

    "price.guaranteeTitle": "Garantía 100% Google Play",
    "price.guaranteeDesc": "Tu compra se gestiona directamente por Facturación Google Play. Se restaura automáticamente en todos tus teléfonos Android presentes y futuros.",

    // FAQ Section
    "faq.tag": "Preguntas Frecuentes",
    "faq.title": "Preguntas Frecuentes",
    "faq.subtitle": "Todo lo que necesitas saber sobre WitnessCard, privacidad y licencias.",

    "faq.q1": "¿Cómo funciona el pago único de $39 MXN?",
    "faq.a1": "La compra se procesa de forma segura mediante Google Play In-App Billing. Al completar el pago único de $39 pesos mexicanos (o aprox. $2 USD en tu moneda local), la licencia permanente queda ligada a tu Cuenta de Google. No hay cargos recurrentes, renovaciones ni letras pequeñas. Si reinstalas la app o cambias de móvil, tu compra se restaura automáticamente.",

    "faq.q2": "¿Qué incluye el modo gratuito?",
    "faq.a2": "El modo gratis te permite escanear hasta 10 tarjetas físicas para comprobar la precisión del OCR y la velocidad en tu propio teléfono. Incluye organización por carpetas y búsqueda instantánea. Al alcanzar las 10 tarjetas, puedes adquirir la licencia vitalicia para seguir escaneando sin límite.",

    "faq.q3": "¿La app realmente funciona sin internet?",
    "faq.a3": "Sí, 100%. El escaneo, reconocimiento de texto (OCR), creación de carpetas, generación de QR y exportación de contactos funcionan sin problema en modo avión o en lugares sin cobertura (como sótanos de centros de convenciones o vuelos).",

    "faq.q4": "¿Cómo funciona la tarjeta digital QR con otros móviles?",
    "faq.a4": "Tu Tarjeta Digital genera un código QR bajo el estándar internacional vCard 3.0. La otra persona solo necesita apuntar la cámara estándar de su iPhone o Android a tu pantalla o imagen compartida. Su teléfono reconocerá la tarjeta y le sugerirá guardarte en su agenda sin instalar ninguna app.",

    "faq.q5": "¿Cómo transfiero mis tarjetas a otro teléfono?",
    "faq.a5": "En la sección de Ajustes, toca en \"Exportar Copia de Seguridad\". WitnessCard empaquetará tus tarjetas, estructura de carpetas e imágenes en un archivo .zip comprimido y abrirá el selector de archivos de Android para guardarlo donde prefieras (memoria interna, tarjeta SD, Google Drive o PC).",

    "faq.q6": "¿Qué permisos requiere la aplicación?",
    "faq.a6": "Únicamente Cámara (para capturar las fotos de las tarjetas) y opcionalmente Escribir Contactos (si decides pulsar en \"Exportar a Contactos del Dispositivo\"). La aplicación nunca lee ni recopila los contactos que ya tengas guardados.",

    // Simulator & Trust Extra
    "sim.targetName": "DR. ALEJANDRO NAVARRO",
    "sim.targetRole": "Cardiólogo Clínico &amp; Investigador",
    "sim.targetCompany": "Hospital Ángeles León",
    "sim.targetContact": "alejandro@cardio.mx • +52 477 123 4567",
    "sim.valContact": "Dr. Alejandro Navarro",
    "sim.valRole": "Cardiólogo Clínico",
    "sim.valPhone": "+52 477 123 4567",
    "sim.valFolder": "📁 Médicos &amp; Salud",
    "sim.bcHome": "Inicio",
    "sim.bcVip": "Clientes VIP",
    "sim.bcWest": "Bajío",
    "sim.cardsInFolder": "Tarjetas en esta carpeta:",
    "sim.c1Name": "Sofia Valenzuela",
    "sim.c1Role": "Directora de Operaciones • InnovaTech",
    "sim.cTag": "📁 Bajío",
    "sim.c2Name": "Ing. Roberto Lara",
    "sim.c2Role": "Socio Fundador • Nexo Soluciones",
    "sim.c3Name": "Lic. Mariana Torres",
    "sim.c3Role": "Consultora Financiera • Capital Gto",
    "sim.myRole": "Desarrollador de Software",
    "sim.qrSubtext": "Código vCard Offline • Escanea con cualquier móvil",
    "sim.tryThemes": "Probar Temas Visuales:",

    "trust.p1Title": "Procesamiento 100% On-Device",
    "trust.p1Desc": "La extracción de texto OCR y la inferencia semántica se ejecutan localmente en el procesador de tu teléfono.",
    "trust.p2Title": "Cero Servidores en la Nube",
    "trust.p2Desc": "No tenemos bases de datos remotas. Ni un solo byte de tus contactos sale de tu dispositivo hacia servidores de terceros.",
    "trust.p3Title": "Sin Cuentas ni Rastreadores",
    "trust.p3Desc": "No requieres crear una cuenta, iniciar sesión ni proporcionar tu correo para comenzar a escanear. Abre la app y listo.",
    "trust.p4Title": "Facturación Directa de Google",
    "trust.p4Desc": "Las compras integradas son procesadas de extremo a extremo por Google Play Billing. No almacenamos tarjetas ni datos bancarios.",

    "dcard.devRole": "Desarrollador de Software • Kotlin &amp; Android",

    "price.freeApprox": "Totalmente Gratis",
    "price.freeCadence": "Para siempre",
    "price.freeItem7": "Exportación masiva a Google Contactos (.vcf)",
    "price.freeNote": "Sin anuncios invasivos • Sin registro",

    "price.proApprox": "Aproximadamente <strong>~$2 USD</strong>",
    "price.proCadence": "⚡ Un solo pago • Sin mensualidades",
    "price.proItem7": "Todas las futuras actualizaciones incluidas",
    "price.proNote": "Procesado por Google Play Billing • Garantía oficial",

    "privacy.spotlightBadge": "Compromiso Legal Inquebrantable",
    "privacy.readPolicyBtn": "Leer la Política de Privacidad Completa (27 de octubre de 2026)",

    "audit.title": "Auditoría de Flujo de Datos",
    "audit.row1Lbl": "OCR e inferencia de texto",
    "audit.row1Val": "✓ Local en Chip NPU",
    "audit.row2Lbl": "Almacenamiento de fotos",
    "audit.row2Val": "✓ Memoria Interna App",
    "audit.row3Lbl": "Generación de código QR vCard",
    "audit.row3Val": "✓ Local sin conexión",
    "audit.row4Lbl": "Transmisión a servidores nube",
    "audit.row4Val": "✗ 0 KB transmitidos",
    "audit.row5Lbl": "Rastreadores publicitarios",
    "audit.row5Val": "✗ 0 rastreadores",
    "audit.row6Lbl": "Venta de bases de datos a terceros",
    "audit.row6Val": "✗ Imposible por diseño",
    // Footer
    "footer.desc": "Herramienta de productividad profesional y escáner inteligente de tarjetas de presentación enfocado prioritariamente en la privacidad del usuario. 100% On-Device.",
    "footer.crafted": "Desarrollado con pasión por <strong>Beltsasar</strong>.",
    "footer.colProduct": "Producto",
    "footer.fKeyFeatures": "Funciones Clave",
    "footer.fDigitalCard": "Tarjeta Digital QR",
    "footer.fPricing": "Precios (Free &amp; Premium)",
    "footer.fFaq": "Preguntas Frecuentes",
    "footer.colLegal": "Privacidad &amp; Legal",
    "footer.fPrivacyPolicy": "Política de Privacidad",
    "footer.fZeroKnowledge": "Arquitectura Zero-Knowledge",
    "footer.fPermissions": "Permisos del Dispositivo",
    "footer.fBilling": "Google Play Billing",
    "footer.colContact": "Soporte &amp; Contacto",
    "footer.linkPrivacy": "Política de Privacidad",
    "footer.linkTerms": "Términos de Servicio",
    "footer.devName": "Desarrollador: Beltsasar",
    "footer.contactInfo": "Datos de Contacto",
    "footer.copyToast": "Correo copiado al portapapeles: ",
    "footer.bottomPrivacy": "Privacidad",
    "footer.bottomPricing": "Precios",
    "footer.bottomContact": "Contacto",
    "footer.copyright": "© 2026 WitnessCard. Desarrollado por Beltsasar. Todos los derechos reservados."
  }
};

window.I18N_DATA = I18N_DATA;

/**
 * Detect initial language:
 * 1. URL search param (?lang=es / ?lang=en)
 * 2. URL pathname (/politica-de-privacidad -> es)
 * 3. Saved localStorage preference
 * 4. Default: 'en'
 */
function detectInitialLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  if (langParam === 'es' || langParam === 'en') {
    return langParam;
  }

  // If path is explicitly Spanish legal URL
  if (window.location.pathname.includes('politica')) {
    const saved = localStorage.getItem('witnesscard_lang');
    return saved || 'es';
  }

  const saved = localStorage.getItem('witnesscard_lang');
  if (saved === 'es' || saved === 'en') {
    return saved;
  }

  // User requested default: English
  return 'en';
}

/**
 * Apply language to DOM
 */
function applyLanguage(lang) {
  if (lang !== 'en' && lang !== 'es') lang = 'en';

  // 1. Set <html> lang attribute
  document.documentElement.lang = lang;
  document.documentElement.setAttribute('data-current-lang', lang);

  // 2. Save preference
  try {
    localStorage.setItem('witnesscard_lang', lang);
  } catch (e) {
    // ignore in private browsing if restricted
  }

  const dict = I18N_DATA[lang] || I18N_DATA.en;

  // 3. Update Title & Meta Description
  const isPrivacyPage = window.location.pathname.includes('privacy') || window.location.pathname.includes('politica') || document.querySelector('.legal-page-header');
  if (isPrivacyPage) {
    if (dict['privacy.meta.title']) document.title = dict['privacy.meta.title'];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict['privacy.meta.desc']) metaDesc.setAttribute('content', dict['privacy.meta.desc']);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && dict['privacy.meta.title']) ogTitle.setAttribute('content', dict['privacy.meta.title']);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && dict['privacy.meta.desc']) ogDesc.setAttribute('content', dict['privacy.meta.desc']);
  } else {
    if (dict['meta.title']) document.title = dict['meta.title'];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict['meta.desc']) metaDesc.setAttribute('content', dict['meta.desc']);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && dict['meta.title']) ogTitle.setAttribute('content', dict['meta.title']);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && dict['meta.desc']) ogDesc.setAttribute('content', dict['meta.desc']);
  }

  // 4. Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // 5. Update attributes with data-i18n-attr (e.g. placeholder:sim.searchPlaceholder)
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const mappings = el.getAttribute('data-i18n-attr').split(',');
    mappings.forEach(mapping => {
      const parts = mapping.split(':');
      if (parts.length === 2) {
        const attr = parts[0].trim();
        const key = parts[1].trim();
        if (dict[key] !== undefined) {
          el.setAttribute(attr, dict[key]);
        }
      }
    });
  });

  // 6. Support for Privacy page dual containers: #privacy-lang-en and #privacy-lang-es
  const privacyEn = document.getElementById('privacy-lang-en');
  const privacyEs = document.getElementById('privacy-lang-es');
  if (privacyEn && privacyEs) {
    if (lang === 'es') {
      privacyEn.style.display = 'none';
      privacyEs.style.display = 'block';
    } else {
      privacyEn.style.display = 'block';
      privacyEs.style.display = 'none';
    }
    // Reinitialize TOC observer if present
    if (window.reinitPrivacyTocObserver) {
      window.reinitPrivacyTocObserver();
    }
  }

  // 7. Update UI active buttons in all language switchers
  document.querySelectorAll('.lang-switcher').forEach(switcher => {
    switcher.querySelectorAll('.lang-btn').forEach(btn => {
      const choice = btn.getAttribute('data-lang-choice');
      if (choice === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  });
}

// Global hook to toggle language
window.switchLanguage = function(lang) {
  applyLanguage(lang);
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Attach click events to all lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const chosen = btn.getAttribute('data-lang-choice');
      if (chosen) {
        applyLanguage(chosen);
      }
    });
  });

  // Apply detected language
  const initialLang = detectInitialLanguage();
  applyLanguage(initialLang);
});
