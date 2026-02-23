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
        title: 'AI & Backend Engineer at Whale Group',
        location: 'Remote',
        bullets: [
          'Designing and developing AI-powered “Digital Worker” bots for Slack, Telegram and WhatsApp to automate business workflows and lead capture.',
          'Building backend services in Python/Django with Celery, RabbitMQ and Redis for scalable asynchronous AI task processing.',
          'Integrating multiple LLM providers (OpenAI, Claude, Bedrock and local models) to generate structured runbooks and JSON guidelines from natural language.',
          'Designing prompt-engineering pipelines with dynamic templates, tags and schema validation for reliable AI outputs.',
          'Implementing event-driven architecture for routing AI requests through message queues and background workers.',
          'Developing internal bot-management platform to configure and operate AI assistants at scale.',
          'Deploying and maintaining AWS infrastructure (EC2, S3, CloudWatch, API Gateway) for production AI services.',
          'Participating in product definition, system architecture and full lifecycle delivery from concept to production.',
        ],
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
      {
        title: 'Whale Digital Workers Platform',
        desc: 'AI-powered platform that creates autonomous “digital workers” for businesses. Includes Slack/Telegram bots, lead capture automation, and workflow orchestration using LLMs and event-driven architecture.',
        href: 'https://whale.co.il/',
      },
      {
        title: 'WhaleBiz SaaS Platform',
        desc: 'Business-oriented interface for configuring and operating AI bots, managing automation pipelines and integrating with external SaaS tools for customer communication and lead management.',
        href: 'https://whalebiz.co.il/login',
      },
      {
        title: 'BotsManagerApp',
        desc: 'Internal platform for creating, configuring and operating AI assistants at scale. Supports multiple channels (Slack, Telegram, WhatsApp) and dynamic prompt-based behavior configuration.',
        href: '#',
      },
      {
        title: 'AI Guideline Generation Engine',
        desc: 'Core AI system that converts natural language instructions into structured JSON runbooks and actionable guidelines using LLM orchestration, schema validation and prompt templates.',
        href: '#',
      },
      {
        title: 'AI Processing Server',
        desc: 'Dedicated AI backend service that receives requests from main applications, routes them through Celery + RabbitMQ pipelines, stores results in Redis/NATS and returns structured AI outputs.',
        href: '#',
      },
      {
        title: 'Telegram AI Image Bot',
        desc: 'Telegram bot that processes user photos and generates AI-stylized images (e.g., Studio Ghibli style) using AWS Lambda and external AI models.',
        href: '#',
      },
      {
        title: 'VPN Automation Telegram Bot',
        desc: 'Bot designed to sell and manage VPN access subscriptions, integrating AWS infrastructure provisioning and automated user onboarding flows.',
        href: '#',
      },
      {
        title: 'Route Optimization API',
        desc: 'Django-based API that calculates optimal driving routes across the US with cost-efficient gas station stops using OpenRouteService and geospatial optimization logic.',
        href: '#',
      },
      {
        title: 'Finger Food AI Catering Bot',
        desc: 'WhatsApp-based AI assistant for catering businesses that suggests menus, handles customer requests and automates ordering workflows using LLM-powered recommendations.',
        href: '#',
      },
      {
        title: 'Sudoku Mobile Game (Python)',
        desc: 'Mobile Sudoku game prototype built with Python, focusing on scalable generation of puzzle boards and ad-monetization strategy.',
        href: '#',
      },
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
        title: 'AI & Backend Engineer в Whale Group',
        location: 'Удалённо',
        bullets: [
          'Проектирование и разработка AI-ботов “Digital Worker” для Slack, Telegram и WhatsApp для автоматизации бизнес-процессов и генерации лидов.',
          'Разработка backend-сервисов на Python/Django с использованием Celery, RabbitMQ и Redis для масштабируемой асинхронной обработки AI-задач.',
          'Интеграция различных LLM-провайдеров (OpenAI, Claude, Bedrock и локальные модели) для генерации структурированных runbook-ов и JSON-гайдов из текстовых инструкций.',
          'Проектирование пайплайнов prompt engineering с динамическими шаблонами, тегами и валидацией схемы для стабильных AI-ответов.',
          'Реализация event-driven архитектуры для маршрутизации AI-запросов через очереди сообщений и фоновые воркеры.',
          'Разработка внутренней платформы управления ботами для создания и конфигурации AI-ассистентов.',
          'Развёртывание и поддержка AWS-инфраструктуры (EC2, S3, CloudWatch, API Gateway) для продакшен AI-сервисов.',
          'Участие в формировании продукта, проектировании архитектуры и полном цикле разработки от идеи до продакшена.',
        ],
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
      {
        title: 'Платформа цифровых сотрудников Whale',
        desc: 'AI-платформа для создания автономных “digital workers” для бизнеса: боты для Slack/Telegram, автоматизация лидогенерации и оркестрация рабочих процессов на базе LLM и event-driven архитектуры.',
        href: 'https://whale.co.il/',
      },
      {
        title: 'WhaleBiz SaaS-платформа',
        desc: 'Интерфейс для бизнеса для настройки и управления AI-ботами, автоматизацией процессов и интеграциями с внешними SaaS-сервисами для коммуникации с клиентами.',
        href: 'https://whalebiz.co.il/login',
      },
      {
        title: 'BotsManagerApp',
        desc: 'Внутренняя платформа для создания и управления AI-ассистентами в разных каналах (Slack, Telegram, WhatsApp) с динамической конфигурацией поведения через prompt templates.',
        href: '#',
      },
      {
        title: 'AI-движок генерации гайдов (Guideline Engine)',
        desc: 'Система, преобразующая текстовые инструкции на английском языке в структурированные JSON-runbook’и и пошаговые действия с использованием LLM, шаблонов и валидации схем.',
        href: '#',
      },
      {
        title: 'Сервер обработки AI-запросов',
        desc: 'Отдельный AI-сервер, принимающий запросы от основного приложения, отправляющий их в Celery через RabbitMQ, получающий результат через Redis/NATS и возвращающий структурированный ответ.',
        href: '#',
      },
      {
        title: 'Telegram-бот генерации AI-изображений',
        desc: 'Бот, обрабатывающий фотографии пользователей и создающий стилизованные AI-изображения (например, в стиле Studio Ghibli) с использованием AWS Lambda и внешних моделей.',
        href: '#',
      },
      {
        title: 'Telegram-бот продажи VPN',
        desc: 'Бот для продажи и управления VPN-подписками с автоматическим созданием инфраструктуры в AWS и онбордингом пользователей.',
        href: '#',
      },
      {
        title: 'API оптимизации маршрутов',
        desc: 'Django API для построения оптимальных маршрутов по США с учётом стоимости заправок, используя OpenRouteService и геопространственную оптимизацию.',
        href: '#',
      },
      {
        title: 'Finger Food AI бот для кейтеринга',
        desc: 'WhatsApp-бот для кейтеринг-бизнеса, предлагающий меню, обрабатывающий запросы клиентов и автоматизирующий заказы с помощью LLM-рекомендаций.',
        href: '#',
      },
      {
        title: 'Мобильная игра Судоку (Python)',
        desc: 'Прототип мобильной игры Судоку на Python с упором на массовую генерацию уровней и стратегию монетизации через рекламу.',
        href: '#',
      },
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
        title: 'AI & Backend Engineer ב-Whale Group',
        location: 'מרחוק',
        bullets: [
          'תכנון ופיתוח בוטים מבוססי AI מסוג “Digital Worker” עבור Slack, Telegram ו-WhatsApp לאוטומציה של תהליכים עסקיים ויצירת לידים.',
          'פיתוח שירותי Backend ב-Python/Django עם Celery, RabbitMQ ו-Redis לעיבוד אסינכרוני סקיילבילי של משימות AI.',
          'אינטגרציה עם ספקי LLM שונים (OpenAI, Claude, Bedrock ומודלים מקומיים) ליצירת runbooks מובנים ו-JSON guidelines מתוך הוראות טקסט.',
          'תכנון תהליכי Prompt Engineering עם תבניות דינמיות, תגיות ו-Schema Validation ליציבות תוצרי ה-AI.',
          'מימוש ארכיטקטורת Event-Driven לניתוב בקשות AI דרך תורי הודעות ו-background workers.',
          'פיתוח פלטפורמת ניהול בוטים פנימית ליצירה והפעלה של עוזרי AI בקנה מידה גדול.',
          'הקמה ותחזוקה של תשתיות AWS (EC2, S3, CloudWatch, API Gateway) עבור שירותי AI בפרודקשן.',
          'מעורבות בהגדרת המוצר, תכנון הארכיטקטורה והובלת פיצ’רים מקונספט ועד פרודקשן.',
        ],
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
      {
        title: 'פלטפורמת עובדים דיגיטליים Whale',
        desc: 'פלטפורמת AI ליצירת “עובדים דיגיטליים” אוטונומיים לעסקים: בוטים ל-Slack/Telegram, אוטומציה של לידים ותזמור תהליכי עבודה באמצעות LLM וארכיטקטורת Event-Driven.',
        href: 'https://whale.co.il/',
      },
      {
        title: 'פלטפורמת SaaS WhaleBiz',
        desc: 'ממשק לעסקים לניהול והגדרת בוטי AI, אוטומציית תהליכים ואינטגרציות עם שירותי SaaS חיצוניים לתקשורת עם לקוחות וניהול לידים.',
        href: 'https://whalebiz.co.il/login',
      },
      {
        title: 'BotsManagerApp',
        desc: 'פלטפורמה פנימית ליצירה וניהול של עוזרי AI במספר ערוצים (Slack, Telegram, WhatsApp) עם קונפיגורציה דינמית מבוססת prompts.',
        href: '#',
      },
      {
        title: 'מנוע יצירת הנחיות AI (Guideline Engine)',
        desc: 'מערכת הממירה הוראות טקסט חופשי להנחיות מובנות בפורמט JSON ול-runbooks אוטומטיים באמצעות מודלי LLM, תבניות ו-Schema Validation.',
        href: '#',
      },
      {
        title: 'שרת עיבוד בקשות AI',
        desc: 'שרת AI ייעודי המקבל בקשות מהאפליקציה הראשית, מעבד אותן דרך Celery ו-RabbitMQ, שומר תוצאות ב-Redis/NATS ומחזיר תשובות מובנות.',
        href: '#',
      },
      {
        title: 'בוט טלגרם ליצירת תמונות AI',
        desc: 'בוט שמעבד תמונות משתמשים ויוצר גרסאות מעוצבות בעזרת מודלי AI (למשל בסגנון Studio Ghibli) באמצעות AWS Lambda ושירותי AI חיצוניים.',
        href: '#',
      },
      {
        title: 'בוט טלגרם לניהול ומכירת VPN',
        desc: 'בוט למכירה וניהול מנויי VPN הכולל אוטומציה של הקמת תשתיות ב-AWS ותהליכי Onboarding למשתמשים.',
        href: '#',
      },
      {
        title: 'API לאופטימיזציית מסלולים',
        desc: 'API מבוסס Django לחישוב מסלולי נסיעה אופטימליים בארה״ב עם עצירות תדלוק חסכוניות, תוך שימוש ב-OpenRouteService ולוגיקת אופטימיזציה גאוגרפית.',
        href: '#',
      },
      {
        title: 'Finger Food – בוט AI לקייטרינג',
        desc: 'עוזר WhatsApp מבוסס AI לעסקי קייטרינג המציע תפריטים, מטפל בפניות לקוחות ומבצע אוטומציה להזמנות באמצעות המלצות מבוססות LLM.',
        href: '#',
      },
      {
        title: 'משחק סודוקו למובייל (Python)',
        desc: 'פרוטוטייפ של משחק סודוקו למובייל שנבנה ב-Python עם דגש על יצירת לוחות אוטומטית בקנה מידה גדול ואסטרטגיית מוניטיזציה באמצעות פרסומות.',
        href: '#',
      },
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
