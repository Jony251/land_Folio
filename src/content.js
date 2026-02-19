export const LANGS = ['en', 'ru', 'he']

/**
 * Keep all editable content here.
 * Replace placeholder images/links with your own assets.
 */
export const CONTENT = {
  en: {
    nav: {
      experience: 'Experience',
      education: 'Education',
      articles: 'Articles',
      projects: 'Side Hustles',
      recommendations: 'Recommendations',
      connect: "Let's Connect",
    },
    aria: {
      language: 'Language',
      switchToDay: 'Switch to Day',
      switchToNight: 'Switch to Night',
      hero: 'Hero',
      preview: 'Preview',
      experience: 'Experience',
      education: 'Education',
      articles: 'Articles',
      projects: 'Projects',
      connect: 'Connect',
    },
    hero: {
      name: 'Darya Levitan',
      tagline: 'Back End engineer',
      available: 'Available For Work',
      avatar: '/avatar.jpg',
    },
    gallery: [
      { img: '/shot-1.jpg', href: '#', label: 'Preview 1' },
      { img: '/shot-2.jpg', href: '#', label: 'Preview 2' },
      { img: '/shot-3.jpg', href: '#', label: 'Preview 3' },
    ],
    sections: {
      experience: { title: 'Experience' },
      education: { title: 'Education & Certifications' },
      articles: { title: 'Articles' },
      projects: { title: 'Side Hustles' },
      recommendations: { title: 'Recommendations' },
      connect: { title: 'Contact me' },
    },
    educationUi: {
      certificationsTitle: 'Certifications',
    },
    experience: [
      {
        date: 'Sep 2024 - Present',
        title: 'Back End Engineer at MoovingON',
        location: 'Israel · On-site',
        bullets: [
          'Primarily developing the backend using Django.',
          'Developing GenAI features powered by API-based models, custom MCP tools and vector databases for semantic search.',
          'Debugging and resolving server-side issues.',
          'Implementing API endpoints to enhance communication between frontend and backend systems.',
          'Working with tools such as Docker Swarm and Adminer.',
        ],
      },
      {
        date: 'Sep 2022 - Aug 2024',
        title: 'Program Monitoring Engineer at MoovingON',
        location: 'Nesher, Haifa District, Israel',
        bullets: [
          'Utilized AWS, Azure, and Google Cloud platforms to monitor and manage infrastructure resources.',
          'Used tools such as Grafana, DataDog, Dynatrace, and Kibana to identify and resolve issues proactively.',
          'Wrote runbooks and documentation, and mentored new team members.',
        ],
      },
      {
        date: 'Jul 2024 - Present',
        title: 'Software Developer at Whale Group',
        location: 'Remote',
        bullets: ['Software development.'],
      },
      {
        date: 'Aug 2019 - Dec 2022',
        title: 'Director at Abacus Skills - Mental Arithmetic Schools',
        location: 'Haifa District, Israel',
        bullets: [],
      },
    ],
    education: [
      {
        date: 'Apr 2025 - Jun 2027',
        title: 'Master of Business Administration (MBA)',
        org: 'The Open University of Israel',
        desc: 'Business administration · Specialization in Entrepreneurship and Innovation',
      },
      {
        date: 'Oct 2021 - Jun 2024',
        title: 'B.Sc., Computer Science',
        org: 'Technion - Israel Institute of Technology',
        desc: '',
      },
    ],
    certifications: [
      {
        date: 'Issued Apr 2025',
        title: 'AWS Certified Cloud Practitioner',
        org: 'Amazon Web Services (AWS)',
        expires: 'Expires Apr 2028',
        href: '',
      },
    ],
    articles: [
      {
        domain: 'whale.co.il',
        title: 'How to Generate Leads',
        desc: '',
        href: 'https://whale.co.il/blog/how-to-generate-leads',
      },
      {
        domain: 'whale.co.il',
        title: 'AI Agents in Marketplaces',
        desc: '',
        href: 'https://whale.co.il/blog/ai-agents-in-marketplaces',
      },
      {
        domain: 'whale.co.il',
        title: 'AI Human Service',
        desc: '',
        href: 'https://whale.co.il/blog/ai-human-service',
      },
    ],
    projects: [
      { title: 'Whale', desc: '', href: 'https://whale.co.il/' },
      { title: 'WhaleBiz', desc: '', href: 'https://whalebiz.co.il/login' },
    ],
    recommendations: [
      {
        name: 'Name Surname',
        role: 'Role, Company',
        quote: '“Recommendation text goes here.”',
        avatar: '/rec-1.jpg',
        muted: false,
      },
      {
        name: 'Name Surname',
        role: 'Role, Company',
        quote: '“Recommendation text goes here.”',
        avatar: '/rec-2.jpg',
        muted: true,
      },
    ],
    connect: {
      placeholder: 'Enter your email...',
      cta: 'Send',
      sending: 'Sending...',
      sent: 'Sent.',
      errors: {
        invalidEmail: 'Please enter a valid email.',
        notConfigured: 'Email service is not configured.',
        failed: 'Failed to send. Please try again.',
      },
    },
    footer: {
      links: [
        { label: 'GitHub', href: 'https://github.com/levitanda' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daria-levitan-593440147/' },
      ],
      credit: { label: 'Evgeny Nemchenko', href: 'https://www.linkedin.com/in/evgeny-nemchenko' },
      copy: 'All rights reserved.',
    },
  },

  ru: {
    nav: {
      experience: 'Опыт',
      education: 'Образование',
      articles: 'Статьи',
      projects: 'Проекты',
      recommendations: 'Рекомендации',
      connect: 'Контакты',
    },
    aria: {
      language: 'Язык',
      switchToDay: 'Переключить на дневную тему',
      switchToNight: 'Переключить на ночную тему',
      hero: 'Главный блок',
      preview: 'Превью',
      experience: 'Опыт',
      education: 'Образование',
      articles: 'Статьи',
      projects: 'Проекты',
      connect: 'Контакты',
    },
    hero: {
      name: 'Дарья Левитан',
      tagline: 'Back End engineer',
      available: 'Открыта к работе',
      avatar: '/avatar.jpg',
    },
    gallery: [
      { img: '/shot-1.jpg', href: '#', label: 'Превью 1' },
      { img: '/shot-2.jpg', href: '#', label: 'Превью 2' },
      { img: '/shot-3.jpg', href: '#', label: 'Превью 3' },
    ],
    sections: {
      experience: { title: 'Опыт' },
      education: { title: 'Образование и сертификаты' },
      articles: { title: 'Статьи' },
      projects: { title: 'Проекты' },
      recommendations: { title: 'Рекомендации' },
      connect: { title: 'Свяжись со мной' },
    },
    educationUi: {
      certificationsTitle: 'Сертификаты',
    },
    experience: [
      {
        date: 'сент. 2024 г. - настоящее время',
        title: 'Back End Engineer в MoovingON',
        location: 'Израиль · В офисе',
        bullets: [
          'Основная разработка бэкенда на Django.',
          'Разработка GenAI-функций с использованием API-моделей, кастомных MCP-инструментов и векторных баз данных для семантического поиска.',
          'Отладка и устранение проблем на стороне сервера.',
          'Реализация API-эндпоинтов для улучшения взаимодействия фронтенда и бэкенда.',
          'Работа с инструментами Docker Swarm и Adminer.',
        ],
      },
      {
        date: 'сент. 2022 г. - авг. 2024 г.',
        title: 'Program Monitoring Engineer в MoovingON',
        location: 'Нешер, Хайфский округ, Израиль',
        bullets: [
          'Мониторинг и управление инфраструктурными ресурсами в AWS, Azure и Google Cloud.',
          'Использование Grafana, DataDog, Dynatrace и Kibana для проактивного выявления и устранения проблем.',
          'Создание runbook-документации и наставничество для новых сотрудников.',
        ],
      },
      {
        date: 'июль 2024 г. - настоящее время',
        title: 'Software Developer в Whale Group',
        location: 'Удалённо',
        bullets: ['Разработка ПО.'],
      },
      {
        date: 'авг. 2019 г. - дек. 2022 г.',
        title: 'Директор в Abacus Skills - Mental Arithmetic Schools',
        location: 'Хайфский округ, Израиль',
        bullets: [],
      },
    ],
    education: [
      {
        date: 'апр. 2025 г. - июнь 2027 г.',
        title: 'Master of Business Administration (MBA)',
        org: 'The Open University of Israel',
        desc: 'Управление бизнесом · Специализация: предпринимательство и инновации',
      },
      {
        date: 'окт. 2021 г. - июнь 2024 г.',
        title: 'B.Sc., Computer Science',
        org: 'Technion - Israel Institute of Technology',
        desc: '',
      },
    ],
    certifications: [
      {
        date: 'Дата выдачи: апр. 2025 г.',
        title: 'AWS Certified Cloud Practitioner',
        org: 'Amazon Web Services (AWS)',
        expires: 'Истекает: апр. 2028 г.',
        href: '',
      },
    ],
    articles: [
      {
        domain: 'whale.co.il',
        title: 'Как генерировать лиды',
        desc: '',
        href: 'https://whale.co.il/blog/how-to-generate-leads',
      },
      {
        domain: 'whale.co.il',
        title: 'AI-агенты в маркетплейсах',
        desc: '',
        href: 'https://whale.co.il/blog/ai-agents-in-marketplaces',
      },
      {
        domain: 'whale.co.il',
        title: 'AI Human Service',
        desc: '',
        href: 'https://whale.co.il/blog/ai-human-service',
      },
    ],
    projects: [
      { title: 'Whale', desc: '', href: 'https://whale.co.il/' },
      { title: 'WhaleBiz', desc: '', href: 'https://whalebiz.co.il/login' },
    ],
    recommendations: [],
    connect: {
      placeholder: 'Введите email...',
      cta: 'Отправить',
      sending: 'Отправка...',
      sent: 'Отправлено.',
      errors: {
        invalidEmail: 'Пожалуйста, введите корректный email.',
        notConfigured: 'Почтовый сервис не настроен.',
        failed: 'Не удалось отправить. Попробуйте ещё раз.',
      },
    },
    footer: {
      links: [
        { label: 'GitHub', href: 'https://github.com/levitanda' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daria-levitan-593440147/' },
      ],
      credit: { label: 'Evgeny Nemchenko', href: 'https://www.linkedin.com/in/evgeny-nemchenko' },
      copy: 'Все права защищены.',
    },
  },

  he: {
    nav: {
      experience: 'ניסיון',
      education: 'השכלה',
      articles: 'מאמרים',
      projects: 'פרויקטים',
      recommendations: 'המלצות',
      connect: 'יצירת קשר',
    },
    aria: {
      language: 'שפה',
      switchToDay: 'מעבר למצב יום',
      switchToNight: 'מעבר למצב לילה',
      hero: 'כותרת',
      preview: 'תצוגה מקדימה',
      experience: 'ניסיון',
      education: 'השכלה',
      articles: 'מאמרים',
      projects: 'פרויקטים',
      connect: 'יצירת קשר',
    },
    hero: {
      name: 'דריה לויטן',
      tagline: 'Back End engineer',
      available: 'Available For Work',
      avatar: '/avatar.jpg',
    },
    gallery: [
      { img: '/shot-1.jpg', href: '#', label: 'תצוגה 1' },
      { img: '/shot-2.jpg', href: '#', label: 'תצוגה 2' },
      { img: '/shot-3.jpg', href: '#', label: 'תצוגה 3' },
    ],
    sections: {
      experience: { title: 'ניסיון' },
      education: { title: 'השכלה והסמכות' },
      articles: { title: 'מאמרים' },
      projects: { title: 'פרויקטים' },
      recommendations: { title: 'המלצות' },
      connect: { title: 'צור קשר' },
    },
    educationUi: {
      certificationsTitle: 'הסמכות',
    },
    experience: [
      {
        date: 'ספט׳ 2024 - היום',
        title: 'Back End Engineer ב-MoovingON',
        location: 'ישראל · באתר',
        bullets: [
          'פיתוח עיקרי של ה-Backend באמצעות Django.',
          'פיתוח יכולות GenAI בעזרת מודלים מבוססי API, כלי MCP מותאמים ומסדי נתונים וקטוריים לחיפוש סמנטי.',
          'דיבאג ותיקון תקלות בצד השרת.',
          'מימוש API endpoints לשיפור התקשורת בין ה-Frontend ל-Backend.',
          'עבודה עם כלים כגון Docker Swarm ו-Adminer.',
        ],
      },
      {
        date: 'ספט׳ 2022 - אוג׳ 2024',
        title: 'Program Monitoring Engineer ב-MoovingON',
        location: 'נשר, מחוז חיפה, ישראל',
        bullets: [
          'ניטור וניהול תשתיות בעננים AWS, Azure ו-Google Cloud.',
          'שימוש ב-Grafana, DataDog, Dynatrace ו-Kibana לזיהוי ותיקון תקלות באופן פרואקטיבי.',
          'כתיבת runbooks ותיעוד, וחניכה של עובדים חדשים.',
        ],
      },
      {
        date: 'יולי 2024 - היום',
        title: 'Software Developer ב-Whale Group',
        location: 'מרחוק',
        bullets: ['פיתוח תוכנה.'],
      },
      {
        date: 'אוג׳ 2019 - דצמ׳ 2022',
        title: 'מנהלת ב-Abacus Skills - Mental Arithmetic Schools',
        location: 'מחוז חיפה, ישראל',
        bullets: [],
      },
    ],
    education: [
      {
        date: 'Apr 2025 - Jun 2027',
        title: 'Master of Business Administration (MBA)',
        org: 'The Open University of Israel',
        desc: 'מנהל עסקים · התמחות ביזמות וחדשנות',
      },
      {
        date: 'Oct 2021 - Jun 2024',
        title: 'B.Sc., Computer Science',
        org: 'Technion - Israel Institute of Technology',
        desc: '',
      },
    ],
    certifications: [
      {
        date: 'Issued Apr 2025',
        title: 'AWS Certified Cloud Practitioner',
        org: 'Amazon Web Services (AWS)',
        expires: 'Expires Apr 2028',
        href: '',
      },
    ],
    articles: [
      {
        domain: 'whale.co.il',
        title: 'איך לייצר לידים',
        desc: '',
        href: 'https://whale.co.il/blog/how-to-generate-leads',
      },
      {
        domain: 'whale.co.il',
        title: 'סוכני AI במרקטפלייסים',
        desc: '',
        href: 'https://whale.co.il/blog/ai-agents-in-marketplaces',
      },
      {
        domain: 'whale.co.il',
        title: 'AI Human Service',
        desc: '',
        href: 'https://whale.co.il/blog/ai-human-service',
      },
    ],
    projects: [
      { title: 'פרויקט #1', desc: 'תיאור קצר.', href: '#' },
      { title: 'פרויקט #2', desc: 'תיאור קצר.', href: '#' },
    ],
    recommendations: [],
    connect: {
      placeholder: 'הכנס/י אימייל...',
      cta: 'שלח',
      sending: 'שולח...',
      sent: 'נשלח.',
      errors: {
        invalidEmail: 'נא להזין כתובת אימייל תקינה.',
        notConfigured: 'שירות האימייל לא הוגדר.',
        failed: 'השליחה נכשלה. נסה/י שוב.',
      },
    },
    footer: {
      links: [
        { label: 'GitHub', href: 'https://github.com/levitanda' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daria-levitan-593440147/' },
      ],
      credit: { label: 'Evgeny Nemchenko', href: 'https://www.linkedin.com/in/evgeny-nemchenko' },
      copy: 'כל הזכויות שמורות.',
    },
  },
}
