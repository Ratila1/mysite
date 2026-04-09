'use strict';

// ═══════════════════════════════════════════════════════════
// TRANSLATIONS
// ═══════════════════════════════════════════════════════════
const T = {
  ru: {
    nav_about:'Обо мне', nav_exp:'Опыт', nav_skills:'Навыки', nav_achievements:'Достижения',
    nav_projects:'Проекты', nav_goals:'Цели', nav_edu:'Образование', nav_contact:'Контакты',
    hero_badge:'Доступен для сотрудничества', hero_name:'Даниил Ратников',
    hero_desc:'Разрабатываю высоконагруженные backend-системы на Java/Spring Boot. Специализируюсь на микросервисах, REST API и оптимизации производительности.',
    stat_years:'лет опыта', stat_projects:'коммерческих проектов', stat_users:'пользователей',
    hero_contact:'Связаться', hero_resume:'Резюме', scroll_down:'Прокрутить',
    about_tag:'Обо мне', about_title:'Кто я такой',
    about_text1:'Привет! Я Даниил — Java Backend Developer из Беларуси с более чем 4 годами коммерческого опыта. Специализируюсь на разработке высоконагруженных backend-систем, микросервисной архитектуре и оптимизации производительности.',
    about_text2:'Проектировал масштабируемые API, оптимизировал запросы к БД, настраивал CI/CD пайплайны и координировал команды. Также имею опыт в разработке Telegram-ботов, Android-приложений и аппаратных решений.',
    hl_arch:'Чистая архитектура', hl_arch_desc:'SOLID, Design Patterns, Clean Code',
    hl_perf:'Производительность', hl_perf_desc:'×5.7 ускорение, −60% нагрузка на БД',
    hl_tests:'Тестирование', hl_tests_desc:'80%+ покрытие, TDD практики',
    hl_lang:'Языки', hl_lang_desc:'Русский (native), English B2, Deutsch A2',
    exp_tag:'Карьера', exp_title:'Опыт работы',
    job1_role:'Junior Backend Developer', remote:'Удалённо',
    job1_a1:'Telegram бот с нуля (Python + aiogram 3) — <strong>19 000+ активных пользователей</strong>',
    job1_a2:'Интеграция Stripe и escrow-платежей',
    job1_a3:'Async архитектура + Redis — <strong>в 3–4× быстрее</strong>',
    job1_a4:'Оптимизация запросов PostgreSQL — снижение нагрузки на БД',
    job1_a5:'Unit/интеграционные тесты (pytest) — <strong>80%+ покрытие</strong> платёжного модуля',
    job1_a6:'Android-модуль (Java/Flutter): платежи, push-уведомления',
    job2_role:'Java Backend Developer',
    job2_a1:'<strong>15+ коммерческих Telegram/VK ботов</strong> (Java + Spring Boot)',
    job2_a2:'Проектирование на основе Clean Architecture',
    job2_a3:'Внедрение Kafka в 2 проектах — устранение потери сообщений',
    job2_a4:'Docker + Kubernetes + CI/CD — деплой: часы → <strong>5–10 минут</strong>',
    job2_a5:'Покрытие тестами 75–80% (JUnit 5 + Mockito)',
    job2_a6:'Ускорение алгоритма арбитража: 70 → <strong>400+ операций/30 сек</strong> (×5.7)',
    skills_tag:'Технологии', skills_title:'Навыки',
    sg_backend:'Backend', sg_data:'Данные', sg_devops:'DevOps',
    sg_testing:'Тестирование', sg_mobile:'Мобильная', sg_langs:'Языки',
    ach_tag:'Признание', ach_title:'Достижения', ach_contests:'Соревнования',
    place1:'1 место', place2:'2 место', place3:'3 место', finalist:'Финалист',
    ach1_title:'Национальный НТК', ach1_desc:'Генератор электрических сигналов (синус, пила, меандр)',
    ach2_title:'Патриот.бай Региональный', ach2_desc:'2.5D платформер на Unreal Engine 5 с кастомной физикой',
    ach3_title:'Инновации. Наука. Конференция', ach3_desc:'Telegram бот для колледжа',
    ach4_title:'Findmate — Республиканский этап', ach4_desc:'Приложение для поиска людей и команд',
    ach_code:'Ключевые достижения в коде',
    kpi1:'Ускорение поиска', kpi1_sub:'70 → 400+ операций / 30 сек',
    kpi2:'Чистая архитектура', kpi2_sub:'Миграция унаследованного кода',
    kpi3:'Нагрузка на БД', kpi3_sub:'Оптимизация запросов PostgreSQL',
    kpi4:'CI/CD с нуля', kpi4_sub:'Часы → 5–10 минут деплой',
    kpi5:'Покрытие тестами', kpi5_sub:'JUnit 5 + Mockito / pytest',
    proj_tag:'Портфолио', proj_title:'Проекты',
    proj1_desc:'Приложение для изучения языков во сне. ~20k строк кода. Фазы сна, TTS/SSML, трекинг прогресса. Готовится к «100 идей для Беларуси» 2025.',
    proj2_desc:'Приложение для поиска людей и команд. Финалист республиканских соревнований. Android + Java backend.',
    proj_bank_desc:'REST API банковской системы. Spring Boot, PostgreSQL, JWT-авторизация, роли пользователей.',
    proj_delivered_desc:'Pet-проект: микросервисный аналог Яндекс.Еды. Spring Boot, Kafka, PostgreSQL, Docker — полная имитация food-delivery платформы.',
    proj3_title:'High-Load Telegram Боты',
    proj3_desc:'15+ коммерческих ботов, миллионы сообщений, Stripe-интеграция, 19 000+ активных пользователей в пиковом проекте.',
    proj4_title:'2.5D Платформер', proj4_desc:'Игра на Unreal Engine 5 с кастомной физикой и боевой системой. 2-е место на Патриот.бай.',
    proj5_title:'Генератор сигналов', proj5_desc:'Аппаратный генератор + десктопное приложение. Синус, треугольник, меандр. 1-е место на национальном конкурсе.',
    in_dev:'В разработке', in_prod:'В продакшене', award:'🥈 2-е место', award1:'🥇 1-е место',
    goals_tag:'Будущее', goals_title:'Цели и планы',
    goal1_title:'Бакалавр по Software Engineering', goal1_desc:'Получить высшее образование в области разработки программного обеспечения',
    goal2_title:'Магистратура по AI/ML', goal2_desc:'Международный топ-университет. Специализация в искусственном интеллекте',
    goal3_title:'Senior Java / Backend Engineer', goal3_desc:'В международной компании с масштабными высоконагруженными системами',
    goal4_title:'Собственный стартап', goal4_desc:'EdTech или HealthTech — продукт с реальным влиянием на жизни людей',
    edu_tag:'Образование', edu_title:'Учёба',
    edu_school:'Гомельский государственный машиностроительный колледж',
    edu_major:'Программист мобильных устройств (ССО)',
    edu_grad:'Выпуск: Февраль 2026', edu_gpa:'Средний балл: 9.0 / 10', edu_leader:'Старост группы',
    contact_tag:'Связь', contact_title:'Контакты',
    contact_intro:'Открыт для интересных проектов, сотрудничества и новых возможностей. Напишите мне — отвечаю быстро!',
    email_label:'Email', phone_label:'Телефон',
    form_name:'Имя', form_email:'Email', form_subject:'Тема',
    opt_choose:'Выберите тему', opt_job:'Предложение о работе',
    opt_freelance:'Фриланс / проект', opt_collab:'Сотрудничество', opt_other:'Другое',
    form_message:'Сообщение', form_send:'Отправить сообщение',
    form_success:'✓ Сообщение отправлено! Отвечу в ближайшее время.',
    form_error:'✗ Ошибка при отправке. Попробуйте позже или напишите напрямую.',
  },

  en: {
    nav_about:'About', nav_exp:'Experience', nav_skills:'Skills', nav_achievements:'Achievements',
    nav_projects:'Projects', nav_goals:'Goals', nav_edu:'Education', nav_contact:'Contact',
    hero_badge:'Available for collaboration', hero_name:'Daniil Ratnikov',
    hero_desc:'Building high-load backend systems with Java/Spring Boot. Specializing in microservices, REST APIs, and performance optimization.',
    stat_years:'years of experience', stat_projects:'commercial projects', stat_users:'users',
    hero_contact:'Contact', hero_resume:'Resume', scroll_down:'Scroll down',
    about_tag:'About Me', about_title:'Who I Am',
    about_text1:'Hi! I\'m Daniil — a Java Backend Developer from Belarus with 4+ years of commercial experience. I specialize in high-load backend systems, microservice architecture, and performance optimization.',
    about_text2:'I\'ve designed scalable APIs, optimized DB queries, configured CI/CD pipelines, and coordinated teams. I also have experience with Telegram bots, Android apps, and hardware projects.',
    hl_arch:'Clean Architecture', hl_arch_desc:'SOLID, Design Patterns, Clean Code',
    hl_perf:'Performance', hl_perf_desc:'×5.7 optimization, −60% DB load',
    hl_tests:'Testing', hl_tests_desc:'80%+ coverage, TDD practices',
    hl_lang:'Languages', hl_lang_desc:'Russian (native), English B2, Deutsch A2',
    exp_tag:'Career', exp_title:'Work Experience',
    job1_role:'Junior Backend Developer', remote:'Remote',
    job1_a1:'Telegram bot from scratch (Python + aiogram 3) — <strong>19,000+ active users</strong>',
    job1_a2:'Stripe integration and escrow payments',
    job1_a3:'Async architecture + Redis — <strong>3–4× faster</strong> request processing',
    job1_a4:'PostgreSQL query optimization — significant DB load reduction',
    job1_a5:'Unit/integration tests (pytest) — <strong>80%+ coverage</strong> for payment module',
    job1_a6:'Android module tasks (Java/Flutter): payments, push notifications',
    job2_role:'Java Backend Developer',
    job2_a1:'<strong>15+ commercial Telegram/VK bots</strong> (Java + Spring Boot)',
    job2_a2:'Clean Architecture-based design',
    job2_a3:'Kafka implementation in 2 projects — eliminated message loss',
    job2_a4:'Docker + Kubernetes + CI/CD — deployment: hours → <strong>5–10 minutes</strong>',
    job2_a5:'75–80% test coverage (JUnit 5 + Mockito)',
    job2_a6:'Arbitrage algorithm acceleration: 70 → <strong>400+ ops/30 sec</strong> (×5.7)',
    skills_tag:'Technologies', skills_title:'Skills',
    sg_backend:'Backend', sg_data:'Data', sg_devops:'DevOps',
    sg_testing:'Testing', sg_mobile:'Mobile', sg_langs:'Languages',
    ach_tag:'Recognition', ach_title:'Achievements', ach_contests:'Competitions',
    place1:'1st Place', place2:'2nd Place', place3:'3rd Place', finalist:'Finalist',
    ach1_title:'National S&T Contest', ach1_desc:'Electric signal generator (sine, triangle, square wave)',
    ach2_title:'Patriot.by Regional', ach2_desc:'2.5D platformer on Unreal Engine 5 with custom physics',
    ach3_title:'Innovation Science Conference', ach3_desc:'Telegram bot for college',
    ach4_title:'Findmate — Republican Stage', ach4_desc:'App for finding people and teams',
    ach_code:'Key Code Achievements',
    kpi1:'Search Acceleration', kpi1_sub:'70 → 400+ ops / 30 sec',
    kpi2:'Clean Architecture', kpi2_sub:'Legacy code migration',
    kpi3:'DB Load Reduction', kpi3_sub:'PostgreSQL query optimization',
    kpi4:'CI/CD from Scratch', kpi4_sub:'Hours → 5–10 min deployment',
    kpi5:'Test Coverage', kpi5_sub:'JUnit 5 + Mockito / pytest',
    proj_tag:'Portfolio', proj_title:'Projects',
    proj1_desc:'Language learning during sleep app. ~20k LOC. Sleep phases, TTS/SSML, progress tracking. Preparing for "100 Ideas for Belarus" 2025.',
    proj2_desc:'App for finding people and teams. Republican competition finalist. Android + Java backend.',
    proj_bank_desc:'Banking system REST API. Spring Boot, PostgreSQL, JWT auth, user roles.',
    proj_delivered_desc:'Pet project: microservice Yandex Food clone. Spring Boot, Kafka, PostgreSQL, Docker — full food-delivery platform simulation.',
    proj3_title:'High-Load Telegram Bots',
    proj3_desc:'15+ commercial bots, millions of messages, Stripe integration, 19,000+ active users in the peak project.',
    proj4_title:'2.5D Platformer', proj4_desc:'Unreal Engine 5 game with custom physics and combat system. 2nd place at Patriot.by.',
    proj5_title:'Signal Generator', proj5_desc:'Hardware generator + desktop app. Sine, triangle, square wave. 1st place at national contest.',
    in_dev:'In Development', in_prod:'In Production', award:'🥈 2nd Place', award1:'🥇 1st Place',
    goals_tag:'Future', goals_title:'Goals & Plans',
    goal1_title:'Bachelor\'s in Software Engineering', goal1_desc:'Complete higher education in software development',
    goal2_title:'Master\'s in AI/ML', goal2_desc:'Top international university, specialization in artificial intelligence',
    goal3_title:'Senior Java / Backend Engineer', goal3_desc:'In an international company with large-scale high-load systems',
    goal4_title:'Own Startup', goal4_desc:'EdTech or HealthTech — a product with real impact on people\'s lives',
    edu_tag:'Education', edu_title:'Studies',
    edu_school:'Gomel State Machine-Building College',
    edu_major:'Mobile Devices Programmer (Vocational)',
    edu_grad:'Graduation: February 2026', edu_gpa:'GPA: 9.0 / 10', edu_leader:'Group Leader',
    contact_tag:'Contact', contact_title:'Get in Touch',
    contact_intro:'Open to interesting projects, collaborations, and new opportunities. Write to me — I respond quickly!',
    email_label:'Email', phone_label:'Phone',
    form_name:'Name', form_email:'Email', form_subject:'Subject',
    opt_choose:'Choose a subject', opt_job:'Job offer',
    opt_freelance:'Freelance / project', opt_collab:'Collaboration', opt_other:'Other',
    form_message:'Message', form_send:'Send Message',
    form_success:'✓ Message sent! I\'ll get back to you soon.',
    form_error:'✗ Failed to send. Please try again or write directly.',
  },

  es: {
    nav_about:'Sobre mí', nav_exp:'Experiencia', nav_skills:'Habilidades', nav_achievements:'Logros',
    nav_projects:'Proyectos', nav_goals:'Objetivos', nav_edu:'Educación', nav_contact:'Contacto',
    hero_badge:'Disponible para colaborar', hero_name:'Daniil Ratnikov',
    hero_desc:'Desarrollo sistemas backend de alta carga con Java/Spring Boot. Especializado en microservicios, REST APIs y optimización de rendimiento.',
    stat_years:'años de experiencia', stat_projects:'proyectos comerciales', stat_users:'usuarios',
    hero_contact:'Contactar', hero_resume:'Currículum', scroll_down:'Desplazar',
    about_tag:'Sobre Mí', about_title:'Quién Soy',
    about_text1:'¡Hola! Soy Daniil, un Desarrollador Backend Java de Bielorrusia con más de 4 años de experiencia comercial.',
    about_text2:'He diseñado APIs escalables, optimizado consultas de BD, configurado pipelines CI/CD y coordinado equipos. También tengo experiencia con bots de Telegram, apps Android y proyectos de hardware.',
    hl_arch:'Arquitectura Limpia', hl_arch_desc:'SOLID, Patrones de diseño, Código limpio',
    hl_perf:'Rendimiento', hl_perf_desc:'×5.7 optimización, −60% carga BD',
    hl_tests:'Testing', hl_tests_desc:'80%+ cobertura, prácticas TDD',
    hl_lang:'Idiomas', hl_lang_desc:'Ruso (nativo), Inglés B2, Deutsch A2',
    exp_tag:'Carrera', exp_title:'Experiencia Laboral',
    job1_role:'Desarrollador Backend Junior', remote:'Remoto',
    job1_a1:'Bot de Telegram desde cero (Python + aiogram 3) — <strong>19.000+ usuarios activos</strong>',
    job1_a2:'Integración de Stripe y pagos en custodia',
    job1_a3:'Arquitectura async + Redis — procesamiento <strong>3–4× más rápido</strong>',
    job1_a4:'Optimización de consultas PostgreSQL — reducción de carga',
    job1_a5:'Tests (pytest) — <strong>80%+ cobertura</strong> del módulo de pagos',
    job1_a6:'Módulo Android (Java/Flutter): pagos, notificaciones push',
    job2_role:'Desarrollador Backend Java',
    job2_a1:'<strong>15+ bots comerciales Telegram/VK</strong> (Java + Spring Boot)',
    job2_a2:'Diseño basado en Arquitectura Limpia',
    job2_a3:'Implementación de Kafka en 2 proyectos — eliminación de pérdida de mensajes',
    job2_a4:'Docker + Kubernetes + CI/CD — despliegue: horas → <strong>5–10 minutos</strong>',
    job2_a5:'Cobertura de tests 75–80% (JUnit 5 + Mockito)',
    job2_a6:'Aceleración de algoritmo: 70 → <strong>400+ ops/30 seg</strong> (×5.7)',
    skills_tag:'Tecnologías', skills_title:'Habilidades',
    sg_backend:'Backend', sg_data:'Datos', sg_devops:'DevOps',
    sg_testing:'Testing', sg_mobile:'Móvil', sg_langs:'Idiomas',
    ach_tag:'Reconocimiento', ach_title:'Logros', ach_contests:'Competiciones',
    place1:'1er Lugar', place2:'2do Lugar', place3:'3er Lugar', finalist:'Finalista',
    ach1_title:'Concurso Nacional C&T', ach1_desc:'Generador de señales eléctricas',
    ach2_title:'Patriot.by Regional', ach2_desc:'Plataformer 2.5D en Unreal Engine 5',
    ach3_title:'Conferencia de Ciencias', ach3_desc:'Bot de Telegram para la universidad',
    ach4_title:'Findmate — Etapa Republicana', ach4_desc:'App para encontrar personas y equipos',
    ach_code:'Logros Técnicos Clave',
    kpi1:'Aceleración de Búsqueda', kpi1_sub:'70 → 400+ ops / 30 seg',
    kpi2:'Arquitectura Limpia', kpi2_sub:'Migración de código legado',
    kpi3:'Reducción Carga BD', kpi3_sub:'Optimización de consultas PostgreSQL',
    kpi4:'CI/CD desde Cero', kpi4_sub:'Horas → 5–10 min despliegue',
    kpi5:'Cobertura de Tests', kpi5_sub:'JUnit 5 + Mockito / pytest',
    proj_tag:'Portafolio', proj_title:'Proyectos',
    proj1_desc:'App para aprender idiomas durante el sueño. ~20k líneas. Fases del sueño, TTS/SSML, seguimiento.',
    proj2_desc:'App para encontrar personas y equipos. Finalista en competición republicana. Android + backend Java.',
    proj_bank_desc:'API REST de sistema bancario. Spring Boot, PostgreSQL, autenticación JWT, roles de usuario.',
    proj_delivered_desc:'Proyecto pet: clon de Yandex Food en microservicios. Spring Boot, Kafka, PostgreSQL, Docker.',
    proj3_title:'Bots Telegram de Alta Carga',
    proj3_desc:'15+ bots comerciales, millones de mensajes, integración Stripe, 19.000+ usuarios activos.',
    proj4_title:'Plataformer 2.5D', proj4_desc:'Juego en Unreal Engine 5 con física y combate personalizados.',
    proj5_title:'Generador de Señales', proj5_desc:'Generador hardware + app de escritorio. 1er lugar en concurso nacional.',
    in_dev:'En Desarrollo', in_prod:'En Producción', award:'🥈 2do Lugar', award1:'🥇 1er Lugar',
    goals_tag:'Futuro', goals_title:'Objetivos y Planes',
    goal1_title:'Licenciatura en Ingeniería de Software', goal1_desc:'Obtener educación superior en desarrollo de software',
    goal2_title:'Máster en IA/ML', goal2_desc:'Universidad internacional de primer nivel, especialización en IA',
    goal3_title:'Senior Java / Backend Engineer', goal3_desc:'En empresa internacional con sistemas de alta carga',
    goal4_title:'Startup Propio', goal4_desc:'EdTech o HealthTech — producto con impacto real',
    edu_tag:'Educación', edu_title:'Estudios',
    edu_school:'Colegio Estatal de Ingeniería Mecánica de Gomel',
    edu_major:'Programador de Dispositivos Móviles',
    edu_grad:'Graduación: Febrero 2026', edu_gpa:'Nota Media: 9.0 / 10', edu_leader:'Delegado de Grupo',
    contact_tag:'Contacto', contact_title:'Contáctame',
    contact_intro:'¡Abierto a proyectos interesantes y nuevas oportunidades. ¡Escríbeme, respondo rápido!',
    email_label:'Email', phone_label:'Teléfono',
    form_name:'Nombre', form_email:'Email', form_subject:'Asunto',
    opt_choose:'Elige un asunto', opt_job:'Oferta de trabajo',
    opt_freelance:'Freelance / proyecto', opt_collab:'Colaboración', opt_other:'Otro',
    form_message:'Mensaje', form_send:'Enviar Mensaje',
    form_success:'✓ ¡Mensaje enviado! Te responderé pronto.',
    form_error:'✗ Error al enviar. Inténtalo de nuevo o escribe directamente.',
  },

  de: {
    nav_about:'Über mich', nav_exp:'Erfahrung', nav_skills:'Fähigkeiten', nav_achievements:'Erfolge',
    nav_projects:'Projekte', nav_goals:'Ziele', nav_edu:'Bildung', nav_contact:'Kontakt',
    hero_badge:'Verfügbar für Zusammenarbeit', hero_name:'Daniil Ratnikov',
    hero_desc:'Entwickle hochlastige Backend-Systeme mit Java/Spring Boot. Spezialisiert auf Microservices, REST APIs und Performance-Optimierung.',
    stat_years:'Jahre Erfahrung', stat_projects:'kommerzielle Projekte', stat_users:'Nutzer',
    hero_contact:'Kontakt', hero_resume:'Lebenslauf', scroll_down:'Scrollen',
    about_tag:'Über Mich', about_title:'Wer ich bin',
    about_text1:'Hallo! Ich bin Daniil, ein Java Backend Developer aus Belarus mit über 4 Jahren kommerzieller Erfahrung.',
    about_text2:'Ich habe skalierbare APIs entworfen, Datenbankabfragen optimiert, CI/CD-Pipelines eingerichtet und Teams koordiniert.',
    hl_arch:'Saubere Architektur', hl_arch_desc:'SOLID, Design Patterns, Clean Code',
    hl_perf:'Performance', hl_perf_desc:'×5.7 Optimierung, −60% DB-Last',
    hl_tests:'Testing', hl_tests_desc:'80%+ Abdeckung, TDD-Praktiken',
    hl_lang:'Sprachen', hl_lang_desc:'Russisch (Muttersprache), Englisch B2, Deutsch A2',
    exp_tag:'Karriere', exp_title:'Berufserfahrung',
    job1_role:'Junior Backend Developer', remote:'Remote',
    job1_a1:'Telegram-Bot (Python + aiogram 3) — <strong>19.000+ aktive Nutzer</strong>',
    job1_a2:'Stripe-Integration und Treuhandzahlungen',
    job1_a3:'Async-Architektur + Redis — <strong>3–4× schnellere</strong> Verarbeitung',
    job1_a4:'PostgreSQL-Abfrageoptimierung — deutliche DB-Lastreduzierung',
    job1_a5:'Tests (pytest) — <strong>80%+ Abdeckung</strong> des Zahlungsmoduls',
    job1_a6:'Android-Modul (Java/Flutter): Zahlungen, Push-Benachrichtigungen',
    job2_role:'Java Backend Developer',
    job2_a1:'<strong>15+ kommerzielle Telegram/VK-Bots</strong> (Java + Spring Boot)',
    job2_a2:'Design auf Basis von Clean Architecture',
    job2_a3:'Kafka-Implementierung in 2 Projekten — Nachrichtenverlust eliminiert',
    job2_a4:'Docker + Kubernetes + CI/CD — Deployment: Stunden → <strong>5–10 Minuten</strong>',
    job2_a5:'75–80% Testabdeckung (JUnit 5 + Mockito)',
    job2_a6:'Algorithmus-Beschleunigung: 70 → <strong>400+ Ops/30 Sek</strong> (×5.7)',
    skills_tag:'Technologien', skills_title:'Fähigkeiten',
    sg_backend:'Backend', sg_data:'Daten', sg_devops:'DevOps',
    sg_testing:'Testing', sg_mobile:'Mobil', sg_langs:'Sprachen',
    ach_tag:'Anerkennung', ach_title:'Erfolge', ach_contests:'Wettbewerbe',
    place1:'1. Platz', place2:'2. Platz', place3:'3. Platz', finalist:'Finalist',
    ach1_title:'Nationaler W&T-Wettbewerb', ach1_desc:'Elektrischer Signalgenerator',
    ach2_title:'Patriot.by Regional', ach2_desc:'2.5D-Plattformer in Unreal Engine 5',
    ach3_title:'Innovationskonferenz', ach3_desc:'Telegram-Bot für die Hochschule',
    ach4_title:'Findmate — Republikanische Ebene', ach4_desc:'App zur Suche nach Personen und Teams',
    ach_code:'Wichtige Code-Erfolge',
    kpi1:'Suchbeschleunigung', kpi1_sub:'70 → 400+ Ops / 30 Sek',
    kpi2:'Clean Architecture', kpi2_sub:'Legacy-Code-Migration',
    kpi3:'DB-Last Reduzierung', kpi3_sub:'PostgreSQL-Abfrageoptimierung',
    kpi4:'CI/CD von Grund auf', kpi4_sub:'Stunden → 5–10 Min Deployment',
    kpi5:'Testabdeckung', kpi5_sub:'JUnit 5 + Mockito / pytest',
    proj_tag:'Portfolio', proj_title:'Projekte',
    proj1_desc:'App zum Sprachenlernen im Schlaf. ~20k Codezeilen. Schlafphasen, TTS/SSML, Fortschrittsverfolgung.',
    proj2_desc:'App zur Suche nach Personen und Teams. Finalist nationaler Wettbewerbe. Android + Java Backend.',
    proj_bank_desc:'REST API eines Banksystems. Spring Boot, PostgreSQL, JWT-Authentifizierung, Benutzerrollen.',
    proj3_title:'Hochlast-Telegram-Bots',
    proj3_desc:'15+ kommerzielle Bots, Millionen von Nachrichten, Stripe-Integration, 19.000+ aktive Nutzer.',
    proj4_title:'2.5D-Plattformer', proj4_desc:'Unreal Engine 5-Spiel mit eigener Physik. 2. Platz bei Patriot.by.',
    proj5_title:'Signalgenerator', proj5_desc:'Hardware-Generator + Desktop-App. 1. Platz beim nationalen Wettbewerb.',
    in_dev:'In Entwicklung', in_prod:'In Produktion', award:'🥈 2. Platz', award1:'🥇 1. Platz',
    goals_tag:'Zukunft', goals_title:'Ziele & Pläne',
    goal1_title:'Bachelor in Software Engineering', goal1_desc:'Hochschulabschluss in Softwareentwicklung',
    goal2_title:'Master in KI/ML', goal2_desc:'Top internationale Universität, Spezialisierung auf KI',
    goal3_title:'Senior Java / Backend Engineer', goal3_desc:'In einem internationalen Unternehmen mit Hochlastsystemen',
    goal4_title:'Eigenes Startup', goal4_desc:'EdTech oder HealthTech — Produkt mit echtem Einfluss',
    edu_tag:'Bildung', edu_title:'Studium',
    edu_school:'Staatliche Maschinenbauschule Gomel',
    edu_major:'Programmierer für mobile Geräte',
    edu_grad:'Abschluss: Februar 2026', edu_gpa:'Notendurchschnitt: 9.0 / 10', edu_leader:'Klassensprecher',
    contact_tag:'Kontakt', contact_title:'Kontaktiere mich',
    contact_intro:'Offen für interessante Projekte und neue Möglichkeiten. Schreib mir — ich antworte schnell!',
    email_label:'E-Mail', phone_label:'Telefon',
    form_name:'Name', form_email:'E-Mail', form_subject:'Betreff',
    opt_choose:'Betreff wählen', opt_job:'Stellenangebot',
    opt_freelance:'Freelance / Projekt', opt_collab:'Zusammenarbeit', opt_other:'Sonstiges',
    form_message:'Nachricht', form_send:'Nachricht senden',
    form_success:'✓ Nachricht gesendet! Ich melde mich bald.',
    form_error:'✗ Sendefehler. Bitte erneut versuchen oder direkt schreiben.',
  },

  pl: {
    nav_about:'O mnie', nav_exp:'Doświadczenie', nav_skills:'Umiejętności', nav_achievements:'Osiągnięcia',
    nav_projects:'Projekty', nav_goals:'Cele', nav_edu:'Edukacja', nav_contact:'Kontakt',
    hero_badge:'Dostępny do współpracy', hero_name:'Daniił Ratnikow',
    hero_desc:'Buduję wysokowydajne systemy backendowe w Java/Spring Boot. Specjalizuję się w mikroserwisach, REST API i optymalizacji wydajności.',
    stat_years:'lata doświadczenia', stat_projects:'projektów komercyjnych', stat_users:'użytkowników',
    hero_contact:'Kontakt', hero_resume:'CV', scroll_down:'Przewiń',
    about_tag:'O Mnie', about_title:'Kim jestem',
    about_text1:'Cześć! Jestem Daniił — Java Backend Developer z Białorusi z ponad 4-letnim doświadczeniem komercyjnym.',
    about_text2:'Projektowałem skalowalne API, optymalizowałem zapytania do baz danych, konfigurowano pipeline\'y CI/CD i koordynowałem zespoły.',
    hl_arch:'Czysta Architektura', hl_arch_desc:'SOLID, Wzorce projektowe, Clean Code',
    hl_perf:'Wydajność', hl_perf_desc:'×5.7 optymalizacja, −60% obciążenie BD',
    hl_tests:'Testowanie', hl_tests_desc:'80%+ pokrycie, praktyki TDD',
    hl_lang:'Języki', hl_lang_desc:'Rosyjski (ojczysty), Angielski B2, Deutsch A2',
    exp_tag:'Kariera', exp_title:'Doświadczenie Zawodowe',
    job1_role:'Junior Backend Developer', remote:'Zdalnie',
    job1_a1:'Bot Telegram (Python + aiogram 3) — <strong>19 000+ aktywnych użytkowników</strong>',
    job1_a2:'Integracja Stripe i płatności escrow',
    job1_a3:'Architektura async + Redis — <strong>3–4× szybsze</strong> przetwarzanie',
    job1_a4:'Optymalizacja zapytań PostgreSQL — redukcja obciążenia BD',
    job1_a5:'Testy (pytest) — <strong>80%+ pokrycia</strong> modułu płatności',
    job1_a6:'Moduł Android (Java/Flutter): płatności, powiadomienia push',
    job2_role:'Java Backend Developer',
    job2_a1:'<strong>15+ komercyjnych botów Telegram/VK</strong> (Java + Spring Boot)',
    job2_a2:'Projektowanie oparte na Czystej Architekturze',
    job2_a3:'Implementacja Kafka w 2 projektach — eliminacja utraty wiadomości',
    job2_a4:'Docker + Kubernetes + CI/CD — wdrożenie: godziny → <strong>5–10 minut</strong>',
    job2_a5:'Pokrycie testami 75–80% (JUnit 5 + Mockito)',
    job2_a6:'Przyspieszenie algorytmu: 70 → <strong>400+ ops/30 sek</strong> (×5.7)',
    skills_tag:'Technologie', skills_title:'Umiejętności',
    sg_backend:'Backend', sg_data:'Dane', sg_devops:'DevOps',
    sg_testing:'Testowanie', sg_mobile:'Mobile', sg_langs:'Języki',
    ach_tag:'Uznanie', ach_title:'Osiągnięcia', ach_contests:'Zawody',
    place1:'1. miejsce', place2:'2. miejsce', place3:'3. miejsce', finalist:'Finalista',
    ach1_title:'Krajowy Konkurs N&T', ach1_desc:'Generator sygnałów elektrycznych',
    ach2_title:'Patriot.by Regionalny', ach2_desc:'Platformer 2.5D w Unreal Engine 5',
    ach3_title:'Konferencja Naukowa', ach3_desc:'Bot Telegram dla uczelni',
    ach4_title:'Findmate — Etap Republikański', ach4_desc:'Aplikacja do znajdowania osób i zespołów',
    ach_code:'Kluczowe Osiągnięcia Kodowania',
    kpi1:'Przyspieszenie Wyszukiwania', kpi1_sub:'70 → 400+ ops / 30 sek',
    kpi2:'Czysta Architektura', kpi2_sub:'Migracja kodu legacy',
    kpi3:'Redukcja Obciążenia BD', kpi3_sub:'Optymalizacja zapytań PostgreSQL',
    kpi4:'CI/CD od Podstaw', kpi4_sub:'Godziny → 5–10 min wdrożenie',
    kpi5:'Pokrycie Testami', kpi5_sub:'JUnit 5 + Mockito / pytest',
    proj_tag:'Portfolio', proj_title:'Projekty',
    proj1_desc:'Aplikacja do nauki języków podczas snu. ~20k linii kodu. Fazy snu, TTS/SSML, śledzenie postępów.',
    proj2_desc:'Aplikacja do znajdowania osób i zespołów. Finalista zawodów. Android + backend Java.',
    proj_bank_desc:'REST API systemu bankowego. Spring Boot, PostgreSQL, uwierzytelnianie JWT, role użytkowników.',
    proj3_title:'Hochlast-Boty Telegram',
    proj3_desc:'15+ botów komercyjnych, miliony wiadomości, integracja Stripe, 19 000+ aktywnych użytkowników.',
    proj4_title:'Platformer 2.5D', proj4_desc:'Gra na Unreal Engine 5 z własną fizyką. 2. miejsce na Patriot.by.',
    proj5_title:'Generator Sygnałów', proj5_desc:'Generator sprzętowy + aplikacja desktopowa. 1. miejsce na konkursie.',
    in_dev:'W Opracowaniu', in_prod:'W Produkcji', award:'🥈 2. Miejsce', award1:'🥇 1. Miejsce',
    goals_tag:'Przyszłość', goals_title:'Cele i Plany',
    goal1_title:'Licencjat z Inżynierii Oprogramowania', goal1_desc:'Uzyskanie wyższego wykształcenia w zakresie tworzenia oprogramowania',
    goal2_title:'Studia Magisterskie z AI/ML', goal2_desc:'Czołowy międzynarodowy uniwersytet, specjalizacja w AI',
    goal3_title:'Senior Java / Backend Engineer', goal3_desc:'W międzynarodowej firmie z dużymi systemami wysokowydajnymi',
    goal4_title:'Własny Startup', goal4_desc:'EdTech lub HealthTech — produkt z realnym wpływem',
    edu_tag:'Edukacja', edu_title:'Nauka',
    edu_school:'Państwowe Kolegium Budowy Maszyn w Homlu',
    edu_major:'Programista Urządzeń Mobilnych',
    edu_grad:'Ukończenie: Luty 2026', edu_gpa:'Średnia: 9.0 / 10', edu_leader:'Starosta Grupy',
    contact_tag:'Kontakt', contact_title:'Skontaktuj się',
    contact_intro:'Otwarty na ciekawe projekty i nowe możliwości. Napisz do mnie — odpowiadam szybko!',
    email_label:'Email', phone_label:'Telefon',
    form_name:'Imię', form_email:'Email', form_subject:'Temat',
    opt_choose:'Wybierz temat', opt_job:'Oferta pracy',
    opt_freelance:'Freelance / projekt', opt_collab:'Współpraca', opt_other:'Inne',
    form_message:'Wiadomość', form_send:'Wyślij Wiadomość',
    form_success:'✓ Wiadomość wysłana! Odezwę się wkrótce.',
    form_error:'✗ Błąd wysyłania. Spróbuj ponownie lub napisz bezpośrednio.',
  }
};

// Typed strings per language
const TYPED = {
  ru: ['Java Backend Developer','Spring Boot Architect','High-Load Systems Engineer','API Design Specialist'],
  en: ['Java Backend Developer','Spring Boot Architect','High-Load Systems Engineer','API Design Specialist'],
  es: ['Desarrollador Backend Java','Arquitecto Spring Boot','Ingeniero de Sistemas de Alta Carga'],
  de: ['Java Backend Developer','Spring Boot Architekt','Hochlast-System-Ingenieur'],
  pl: ['Java Backend Developer','Architekt Spring Boot','Inżynier Systemów Wysokowydajnych'],
};

const LANGS = ['ru','en','es','de','pl'];
const LABELS = { ru:'РУ', en:'EN', es:'ES', de:'DE', pl:'PL' };

// ═══════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════
let lang  = localStorage.getItem('lang')  || 'ru';
let theme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
let typedInst = null;

// ═══════════════════════════════════════════════════════════
// THEME
// ═══════════════════════════════════════════════════════════
function setTheme(t) {
  theme = t;
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
}
function toggleTheme() { setTheme(theme === 'light' ? 'dark' : 'light'); }

// ═══════════════════════════════════════════════════════════
// LANGUAGE
// ═══════════════════════════════════════════════════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('lang', l);
  document.documentElement.lang = l;

  const map = T[l] || T.ru;
  document.querySelectorAll('[data-key]').forEach(el => {
    const v = map[el.dataset.key];
    if (v !== undefined) el.innerHTML = v;
  });

  const lbl = LABELS[l];
  const a = document.getElementById('langLabel');
  const b = document.getElementById('floatLangLabel');
  if (a) a.textContent = lbl;
  if (b) b.textContent = lbl;

  initTyped();
}
function cycleLang() {
  const i = LANGS.indexOf(lang);
  setLang(LANGS[(i + 1) % LANGS.length]);
}

// ═══════════════════════════════════════════════════════════
// TYPED.JS
// ═══════════════════════════════════════════════════════════
function initTyped() {
  if (typedInst) { typedInst.destroy(); typedInst = null; }
  const el = document.getElementById('typed-text');
  if (!el || typeof Typed === 'undefined') return;
  el.innerHTML = '';
  typedInst = new Typed('#typed-text', {
    strings: TYPED[lang] || TYPED.en,
    typeSpeed: 52,
    backSpeed: 30,
    backDelay: 2400,
    loop: true,
    showCursor: false,
  });
}

// ═══════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════
function initNav() {
  const nav    = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const menu   = document.getElementById('mobileMenu');
  const close  = document.getElementById('mobileClose');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  function openMenu()  { burger.classList.add('active'); menu.classList.add('open'); }
  function closeMenu() { burger.classList.remove('active'); menu.classList.remove('open'); }

  burger?.addEventListener('click', openMenu);
  close?.addEventListener('click', closeMenu);
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Active link tracking
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav__link');
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' }).observe_all = (obs) => sections.forEach(s => obs.observe(s));

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting)
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
    });
  }, { rootMargin: '-50% 0px -50% 0px' });
  sections.forEach(s => obs.observe(s));
}

// ═══════════════════════════════════════════════════════════
// SCROLL PROGRESS
// ═══════════════════════════════════════════════════════════
function initProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = total > 0 ? `${(window.scrollY / total) * 100}%` : '0%';
  }, { passive: true });
}

// ═══════════════════════════════════════════════════════════
// BACK TO TOP
// ═══════════════════════════════════════════════════════════
function initBackTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ═══════════════════════════════════════════════════════════
// REVEAL ON SCROLL
// ═══════════════════════════════════════════════════════════
function initReveal() {
  const els = document.querySelectorAll('.reveal,.reveal-up,.reveal-left,.reveal-right');
  new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const delay = parseFloat(e.target.dataset.delay || 0) * 100;
      setTimeout(() => e.target.classList.add('visible'), delay);
      obs.unobserve(e.target);
    });
  }, { threshold: 0.1 }).observe_all = null; // placeholder

  const revObs = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const delay = parseFloat(e.target.dataset.delay || 0) * 100;
      setTimeout(() => e.target.classList.add('visible'), delay);
      obs.unobserve(e.target);
    });
  }, { threshold: 0.1 });
  els.forEach(el => revObs.observe(el));
}

// ═══════════════════════════════════════════════════════════
// COUNTER ANIMATION
// ═══════════════════════════════════════════════════════════
function animateNum(el, target, dur, prefix, suffix) {
  const decimal = String(target).includes('.');
  const start   = performance.now();
  function step(now) {
    const p = Math.min((now - start) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = prefix + (decimal ? (e * target).toFixed(1) : Math.floor(e * target)) + suffix;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = prefix + target + suffix;
  }
  requestAnimationFrame(step);
}

function initCounters() {
  const make = (sel, attr, dur) => {
    new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el     = e.target;
        const target = parseFloat(el.dataset[attr] ?? el.dataset.count);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        animateNum(el, target, dur, prefix, suffix);
        obs.unobserve(el);
      });
    }, { threshold: 0.5 }).observe_all = null;

    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el     = e.target;
        const target = parseFloat(el.dataset.count);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        animateNum(el, target, dur, prefix, suffix);
        o.unobserve(el);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll(sel).forEach(el => obs.observe(el));
  };

  make('.hero__stat-num[data-count]', 'count', 1400);
  make('.kpi-num[data-count]', 'count', 1600);
}

// ═══════════════════════════════════════════════════════════
// CONTACT FORM
// ═══════════════════════════════════════════════════════════
function initForm() {
  const form   = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const btn    = document.getElementById('submitBtn');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (form.querySelector('[name="_gotcha"]')?.value) return;

    btn.disabled = true;
    const span = btn.querySelector('span');
    const orig = span?.textContent;
    if (span) span.textContent = '...';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        status.textContent = T[lang]?.form_success || '✓ Sent!';
        status.className = 'form-status success';
        form.reset();
      } else throw new Error();
    } catch {
      status.textContent = T[lang]?.form_error || '✗ Error.';
      status.className = 'form-status error';
    } finally {
      btn.disabled = false;
      if (span && orig) span.textContent = orig;
      setTimeout(() => { status.className = 'form-status'; }, 5000);
    }
  });
}

// ═══════════════════════════════════════════════════════════
// BOOT
// ═══════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  setLang(lang);

  if (typeof lucide !== 'undefined') lucide.createIcons();

  // Theme buttons
  document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
  document.getElementById('floatTheme')?.addEventListener('click', toggleTheme);

  // Lang buttons
  document.getElementById('langToggle')?.addEventListener('click', cycleLang);
  document.getElementById('floatLang')?.addEventListener('click', cycleLang);

  initNav();
  initProgress();
  initBackTop();
  initReveal();
  initCounters();
  initForm();
  initTyped();
});
