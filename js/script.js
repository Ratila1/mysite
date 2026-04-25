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
    proj1_desc:'Приложение для изучения языков во сне. ~20k строк кода. Фазы сна, TTS/SSML, трекинг прогресса',
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
    edu_grad:'Выпуск: Февраль 2026', edu_gpa:'Средний балл: 9.0 / 10', edu_leader:'Староста группы',
    contact_tag:'Связь', contact_title:'Контакты',
    contact_intro:'Открыт для интересных проектов, сотрудничества и новых возможностей. Напишите мне — отвечаю быстро!',
    email_label:'Email', phone_label:'Телефон',
    form_name:'Имя', form_email:'Email', form_subject:'Тема',
    opt_choose:'Выберите тему', opt_job:'Предложение о работе',
    opt_freelance:'Фриланс / проект', opt_collab:'Сотрудничество', opt_other:'Другое',
    form_message:'Сообщение', form_send:'Отправить сообщение',
    form_success:'✓ Сообщение отправлено! Отвечу в ближайшее время.',
    form_error:'✗ Ошибка при отправке. Попробуйте позже или напишите напрямую.',
    // ── New: Publications (Habr + dev.to)
    nav_pub:'Статьи',
    pub_tag:'Публикации', pub_title:'Технические статьи',
    pub_subtitle:'Пишу на Habr (RU) и dev.to (EN): безопасность LLM, guardrails, Java-архитектура. Суммарно 13 000+ просмотров.',
    pub_habr_sub:'Русскоязычная аудитория · 13 000+ просмотров',
    pub_devto_sub:'Международная аудитория · English',
    pub_all_habr:'Все статьи', pub_all_devto:'Все статьи',
    pub1_date:'15 апр 2026 · 14 мин',
    pub1_title:'Guardrails для LLM на Java: как приручить промпт-инъекции и токсичные ответы',
    pub1_desc:'«System prompt — это инструкция, которую LLM старается выполнить, но не обязан». Разбор защит на уровне кода: PII-маскирование, детекция jailbreak, fail-closed политика.',
    pub2_date:'16 апр 2026 · 13 мин',
    pub2_title:'Токсичный контент, промпт-хакинг и защита ИИ — всё о Guardrails для LLM',
    pub2_desc:'Обзор уязвимостей языковых моделей и технологий защиты: prompt injection, jailbreak, data exfiltration. Практические подходы и архитектурные паттерны.',
    pub3_date:'11 апр 2026 · EN',
    pub3_title:'JGuardrails: Production-Ready Safety Rails for Java LLM Applications',
    pub3_desc:'Java-библиотека, которая оборачивает вызовы LLM pipeline-ом для контроля безопасности: детекция prompt injection, утечек PII, токсичности, невалидного JSON. Защита как код, а не только system prompt.',
    pub4_date:'16 апр 2026 · EN',
    pub4_title:'JGuardrails 1.0.0 — Hardening Java LLM Apps Against Jailbreaks, Toxicity, and Prompt Injection',
    pub4_desc:'Релиз 1.0.0: производительность через Aho-Corasick, поддержка японского языка, расширяемая архитектура паттернов. Защита против prompt injection, jailbreak и токсичного вывода.',
    // ── New: JGuardrails project
    open_source:'Open Source',
    proj_jg_desc:'Первая Java-библиотека guardrails для LLM: защита от prompt injection, маскирование PII, детекция токсичного контента. Spring AI / LangChain4j, мультиязычность (7 языков). Аналог NVIDIA NeMo Guardrails для Java-экосистемы.',
    // ── New: Timeline two-tier (Job 1 BuildersApp)
    sep_results:'Результаты', sep_tech:'Для тех. специалиста',
    j1_period:'Апр 2025 — Окт 2025', j1_role:'Backend Developer', j1_dur:'7 мес.',
    j1_team:'Команда 5–6 человек · поддержка существующих проектов + разработка нового сервиса',
    j1_hr1:'Создал бота с нуля — <strong>19 000+ пользователей</strong> за 6 месяцев, retention +25%',
    j1_hr2:'Реализовал платёжную систему с эскроу — безопасные транзакции для тысяч пользователей',
    j1_hr3:'Ускорил обработку заявок — <strong>в 3–4 раза</strong> при пиковых нагрузках',
    j1_hr4:'Снизил нагрузку на базу данных — <strong>на 30–40%</strong> при 5× росте аудитории, без downtime',
    j1_hr5:'Тестовое покрытие платёжных сценариев — <strong>80%+</strong>, регрессии устранены',
    j1_hr6:'Реализовал экраны оплаты и push-уведомления в мобильном приложении',
    j1_t1:'Python + aiogram 3 + asyncio, интеграция со Spring Boot бэкендом — Telegram-бот с нуля',
    j1_t2:'Escrow-логика и интеграция Stripe в микросервисной архитектуре — безопасные транзакции',
    j1_t3:'Асинхронная архитектура + Redis cache-aside + PostgreSQL — 3–4× быстрее при пиковой нагрузке',
    j1_t4:'Оптимизация тяжёлых SQL через Hibernate — −30–40% нагрузки на БД при росте пользователей',
    j1_t5:'pytest + JUnit 5 + Mockito на платёжные сценарии — покрытие 80%+, регрессии устранены',
    j1_t6:'Нативный Android-модуль (Java) + Flutter в CI/CD пайплайне: экраны оплаты, push-уведомления',
    // ── Job 2 БелБот
    j2_period:'Янв 2022 — Июл 2025', j2_role:'Backend Developer',
    j2_outsource:'Аутсорс · Беларусь', j2_dur:'3.5 г.',
    j2_team:'Команда 3 человека (frontend, тимлид, я — backend) · Agile / Jira · аутсорс',
    j2_hr1:'Разработал <strong>15+ коммерческих продуктов</strong> — от ТЗ до релиза, всё в срок',
    j2_hr2:'Устранил потерю сообщений при пиковых нагрузках — стабильность <strong>+50%</strong>',
    j2_hr3:'Сократил время выката обновлений — <strong>с нескольких часов до 5–10 минут</strong>',
    j2_hr4:'Поднял тестовое покрытие до <strong>75–80%</strong> — регрессии практически исчезли',
    j2_hr5:'Ускорил ключевой алгоритм в <strong>6×</strong> — с 70 до 400+ операций за 30 секунд',
    j2_hr6:'Вёл проекты от ТЗ до продакшена — координировал с бизнесом и frontend без задержек',
    j2_t1:'Java + Spring Boot, 15+ Telegram/VK-ботов в Agile/Jira (интернет-магазины, CRM, арбитраж)',
    j2_t2:'Kafka в 2 проектах: at-least-once delivery, DLQ — устранена потеря сообщений, стабильность +50%',
    j2_t3:'Docker + Kubernetes + CI/CD (Maven/Gradle, GitHub Actions) — деплой: часы → 5–10 минут',
    j2_t4:'JUnit 5 + Mockito, покрытие 75–80% на REST API + Spring Security — регрессии исчезли',
    j2_t5:'Оптимизация legacy-алгоритма арбитражных связок (Java): 60–70 → <strong>400+ ops / 25–30 сек</strong>, MySQL/SQL',
    j2_t6:'Самостоятельно вёл проекты от ТЗ до продакшена, координируя с бизнесом и frontend',
    // ── Job 3 Freelance
    j3_period:'Июн 2021 — н.в.', j3_role:'Freelance Backend & Mobile Developer', j3_dur:'4+ г.',
    j3_a1:'Разрабатывал REST API-сервисы, Android-приложения (Java) и Telegram-боты под индивидуальные заказы',
    j3_a2:'Ведение клиентов: составление ТЗ, оценка сроков, сдача MVP в срок',
    // ── Goal years
    goal1_year:'2026–2030', goal2_year:'2030–2032', goal3_year:'до 2030', goal4_year:'Долгосрочно',
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
    proj1_desc:'Language learning during sleep app. ~20k LOC. Sleep phases, TTS/SSML, progress tracking',
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
    // ── New: Publications (Habr + dev.to)
    nav_pub:'Articles',
    pub_tag:'Publications', pub_title:'Technical Articles',
    pub_subtitle:'I write on Habr (RU) and dev.to (EN): LLM security, guardrails, Java architecture. 13,000+ total views.',
    pub_habr_sub:'Russian-speaking audience · 13,000+ views',
    pub_devto_sub:'International audience · English',
    pub_all_habr:'All articles', pub_all_devto:'All articles',
    pub1_date:'Apr 15, 2026 · 14 min',
    pub1_title:'Guardrails for LLMs in Java: Taming Prompt Injections and Toxic Responses',
    pub1_desc:'"System prompt is an instruction the LLM tries to follow, but isn\'t required to." Code-level defenses: PII masking, jailbreak detection, fail-closed policy.',
    pub2_date:'Apr 16, 2026 · 13 min',
    pub2_title:'Toxic Content, Prompt Hacking and AI Protection — All About Guardrails for LLMs',
    pub2_desc:'Overview of LLM vulnerabilities and protection technologies: prompt injection, jailbreak, data exfiltration. Practical approaches and architectural patterns.',
    pub3_date:'Apr 11, 2026 · EN',
    pub3_title:'JGuardrails: Production-Ready Safety Rails for Java LLM Applications',
    pub3_desc:'A Java library that wraps LLM client calls with an input/output pipeline to enforce safety constraints: prompt injection detection, PII leakage, toxic outputs, invalid JSON. Safety as code, not just a system prompt.',
    pub4_date:'Apr 16, 2026 · EN',
    pub4_title:'JGuardrails 1.0.0 — Hardening Java LLM Apps Against Jailbreaks, Toxicity, and Prompt Injection',
    pub4_desc:'1.0.0 release: performance via Aho-Corasick keyword matching, Japanese language support, extensible pattern architecture. Protection against prompt injection, jailbreaks, and toxic output.',
    // ── New: JGuardrails project
    open_source:'Open Source',
    proj_jg_desc:'First Java guardrails library for LLMs: prompt injection protection, PII masking, toxic content detection. Spring AI / LangChain4j, multilingual (7 languages). Java-ecosystem alternative to NVIDIA NeMo Guardrails.',
    // ── New: Timeline two-tier (Job 1 BuildersApp)
    sep_results:'Results', sep_tech:'For tech specialists',
    j1_period:'Apr 2025 — Oct 2025', j1_role:'Backend Developer', j1_dur:'7 mo.',
    j1_team:'Team of 5–6 · maintaining existing projects + new service development',
    j1_hr1:'Built a bot from scratch — <strong>19,000+ users</strong> in 6 months, retention +25%',
    j1_hr2:'Implemented escrow payment system — secure transactions for thousands of users',
    j1_hr3:'Accelerated request processing — <strong>3–4× faster</strong> during peak loads',
    j1_hr4:'Reduced database load — <strong>by 30–40%</strong> during 5× audience growth, zero downtime',
    j1_hr5:'Test coverage for payment scenarios — <strong>80%+</strong>, regressions eliminated',
    j1_hr6:'Implemented payment screens and push notifications in the mobile app',
    j1_t1:'Python + aiogram 3 + asyncio, integration with Spring Boot backend — Telegram bot from scratch',
    j1_t2:'Escrow logic and Stripe integration in microservice architecture — secure transactions',
    j1_t3:'Async architecture + Redis cache-aside + PostgreSQL — 3–4× faster at peak load',
    j1_t4:'Heavy SQL optimization via Hibernate — −30–40% DB load during user growth',
    j1_t5:'pytest + JUnit 5 + Mockito on payment scenarios — 80%+ coverage, regressions eliminated',
    j1_t6:'Native Android module (Java) + Flutter in CI/CD pipeline: payment screens, push notifications',
    // ── Job 2 BelBot
    j2_period:'Jan 2022 — Jul 2025', j2_role:'Backend Developer',
    j2_outsource:'Outsource · Belarus', j2_dur:'3.5 yrs',
    j2_team:'Team of 3 (frontend, tech lead, me — backend) · Agile / Jira · outsource',
    j2_hr1:'Delivered <strong>15+ commercial products</strong> — from spec to release, all on time',
    j2_hr2:'Eliminated message loss under peak loads — stability <strong>+50%</strong>',
    j2_hr3:'Reduced deployment time — <strong>from hours to 5–10 minutes</strong>',
    j2_hr4:'Raised test coverage to <strong>75–80%</strong> — regressions virtually disappeared',
    j2_hr5:'Accelerated key algorithm <strong>6×</strong> — from 70 to 400+ operations in 30 seconds',
    j2_hr6:'Led projects from spec to production — coordinated with business and frontend seamlessly',
    j2_t1:'Java + Spring Boot, 15+ Telegram/VK bots in Agile/Jira (online shops, CRM, arbitrage)',
    j2_t2:'Kafka in 2 projects: at-least-once delivery, DLQ — eliminated message loss, stability +50%',
    j2_t3:'Docker + Kubernetes + CI/CD (Maven/Gradle, GitHub Actions) — deploy: hours → 5–10 min',
    j2_t4:'JUnit 5 + Mockito, 75–80% coverage on REST API + Spring Security — regressions eliminated',
    j2_t5:'Legacy arbitrage algorithm optimization (Java): 60–70 → <strong>400+ ops / 25–30 sec</strong>, MySQL/SQL',
    j2_t6:'Independently led projects from spec to production, coordinating with business and frontend',
    // ── Job 3 Freelance
    j3_period:'Jun 2021 — Present', j3_role:'Freelance Backend & Mobile Developer', j3_dur:'4+ yrs',
    j3_a1:'Developed REST API services, Android apps (Java) and Telegram bots for custom orders',
    j3_a2:'Client management: writing specs, estimating timelines, delivering MVPs on time',
    // ── Goal years
    goal1_year:'2026–2030', goal2_year:'2030–2032', goal3_year:'by 2030', goal4_year:'Long-term',
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
    // ── New: Publications (Habr + dev.to)
    nav_pub:'Artículos',
    pub_tag:'Publicaciones', pub_title:'Artículos Técnicos',
    pub_subtitle:'Escribo en Habr (RU) y dev.to (EN): seguridad LLM, guardrails, arquitectura Java. Más de 13.000 visualizaciones en total.',
    pub_habr_sub:'Audiencia rusoparlante · 13.000+ visualizaciones',
    pub_devto_sub:'Audiencia internacional · Inglés',
    pub_all_habr:'Todos los artículos', pub_all_devto:'Todos los artículos',
    pub1_date:'15 abr 2026 · 14 min',
    pub1_title:'Guardrails para LLM en Java: cómo domar inyecciones de prompt y respuestas tóxicas',
    pub1_desc:'«El system prompt es una instrucción que el LLM intenta cumplir, pero no está obligado». Defensas a nivel de código: enmascaramiento PII, detección de jailbreak, política fail-closed.',
    pub2_date:'16 abr 2026 · 13 min',
    pub2_title:'Contenido tóxico, prompt hacking y protección de IA — todo sobre Guardrails para LLM',
    pub2_desc:'Visión general de vulnerabilidades de modelos de lenguaje y tecnologías de protección: prompt injection, jailbreak, exfiltración de datos. Enfoques prácticos y patrones arquitectónicos.',
    pub3_date:'11 abr 2026 · EN',
    pub3_title:'JGuardrails: Production-Ready Safety Rails for Java LLM Applications',
    pub3_desc:'Biblioteca Java que envuelve las llamadas a LLM con un pipeline de entrada/salida para aplicar restricciones de seguridad: detección de prompt injection, fugas de PII, salidas tóxicas, JSON inválido. Seguridad como código, no solo un system prompt.',
    pub4_date:'16 abr 2026 · EN',
    pub4_title:'JGuardrails 1.0.0 — Hardening Java LLM Apps Against Jailbreaks, Toxicity, and Prompt Injection',
    pub4_desc:'Lanzamiento 1.0.0: rendimiento con Aho-Corasick, soporte para japonés, arquitectura extensible de patrones. Protección contra prompt injection, jailbreaks y salidas tóxicas.',
    // ── New: JGuardrails project
    open_source:'Open Source',
    proj_jg_desc:'Primera biblioteca Java de guardrails para LLM: protección contra prompt injection, enmascaramiento PII, detección de contenido tóxico. Spring AI / LangChain4j, multilingüe (7 idiomas). Alternativa en Java a NVIDIA NeMo Guardrails.',
    // ── New: Timeline two-tier (Job 1 BuildersApp)
    sep_results:'Resultados', sep_tech:'Para especialistas técnicos',
    j1_period:'Abr 2025 — Oct 2025', j1_role:'Backend Developer', j1_dur:'7 meses',
    j1_team:'Equipo de 5–6 personas · mantenimiento de proyectos existentes + desarrollo de nuevo servicio',
    j1_hr1:'Creé un bot desde cero — <strong>19.000+ usuarios</strong> en 6 meses, retención +25%',
    j1_hr2:'Implementé sistema de pagos escrow — transacciones seguras para miles de usuarios',
    j1_hr3:'Aceleré el procesamiento de solicitudes — <strong>3–4× más rápido</strong> en cargas máximas',
    j1_hr4:'Reduje la carga de la base de datos — <strong>en 30–40%</strong> con 5× de crecimiento, sin downtime',
    j1_hr5:'Cobertura de tests de pagos — <strong>80%+</strong>, regresiones eliminadas',
    j1_hr6:'Implementé pantallas de pago y notificaciones push en la app móvil',
    j1_t1:'Python + aiogram 3 + asyncio, integración con backend Spring Boot — bot de Telegram desde cero',
    j1_t2:'Lógica escrow e integración Stripe en arquitectura de microservicios — transacciones seguras',
    j1_t3:'Arquitectura async + Redis cache-aside + PostgreSQL — 3–4× más rápido en carga máxima',
    j1_t4:'Optimización de SQL pesado con Hibernate — −30–40% de carga de BD durante crecimiento',
    j1_t5:'pytest + JUnit 5 + Mockito en escenarios de pago — 80%+ cobertura, regresiones eliminadas',
    j1_t6:'Módulo Android nativo (Java) + Flutter en pipeline CI/CD: pantallas de pago, notificaciones push',
    // ── Job 2 BelBot
    j2_period:'Ene 2022 — Jul 2025', j2_role:'Backend Developer',
    j2_outsource:'Outsourcing · Bielorrusia', j2_dur:'3.5 años',
    j2_team:'Equipo de 3 (frontend, tech lead, yo — backend) · Agile / Jira · outsourcing',
    j2_hr1:'Desarrollé <strong>15+ productos comerciales</strong> — desde la especificación hasta el release, todo a tiempo',
    j2_hr2:'Eliminé la pérdida de mensajes en cargas máximas — estabilidad <strong>+50%</strong>',
    j2_hr3:'Reduje el tiempo de despliegue — <strong>de horas a 5–10 minutos</strong>',
    j2_hr4:'Aumenté la cobertura de tests a <strong>75–80%</strong> — las regresiones prácticamente desaparecieron',
    j2_hr5:'Aceleré un algoritmo clave <strong>6×</strong> — de 70 a 400+ operaciones en 30 segundos',
    j2_hr6:'Lideré proyectos desde la especificación hasta producción — coordinación con negocio y frontend sin retrasos',
    j2_t1:'Java + Spring Boot, 15+ bots Telegram/VK en Agile/Jira (tiendas online, CRM, arbitraje)',
    j2_t2:'Kafka en 2 proyectos: at-least-once delivery, DLQ — pérdida de mensajes eliminada, estabilidad +50%',
    j2_t3:'Docker + Kubernetes + CI/CD (Maven/Gradle, GitHub Actions) — despliegue: horas → 5–10 min',
    j2_t4:'JUnit 5 + Mockito, 75–80% cobertura en REST API + Spring Security — regresiones eliminadas',
    j2_t5:'Optimización de algoritmo legacy de arbitraje (Java): 60–70 → <strong>400+ ops / 25–30 seg</strong>, MySQL/SQL',
    j2_t6:'Lideré proyectos de forma autónoma desde la especificación hasta producción, coordinando con negocio y frontend',
    // ── Job 3 Freelance
    j3_period:'Jun 2021 — actualidad', j3_role:'Desarrollador Backend & Mobile Freelance', j3_dur:'4+ años',
    j3_a1:'Desarrollé servicios REST API, apps Android (Java) y bots de Telegram para pedidos personalizados',
    j3_a2:'Gestión de clientes: redacción de especificaciones, estimación de plazos, entrega de MVPs a tiempo',
    // ── Goal years
    goal1_year:'2026–2030', goal2_year:'2030–2032', goal3_year:'hasta 2030', goal4_year:'Largo plazo',
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
    proj_delivered_desc:'Pet-Projekt: Microservice-Klon von Yandex Food. Spring Boot, Kafka, PostgreSQL, Docker — vollständige Simulation einer Food-Delivery-Plattform.',
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
    // ── New: Publications (Habr + dev.to)
    nav_pub:'Artikel',
    pub_tag:'Publikationen', pub_title:'Technische Artikel',
    pub_subtitle:'Ich schreibe auf Habr (RU) und dev.to (EN): LLM-Sicherheit, Guardrails, Java-Architektur. Insgesamt 13.000+ Aufrufe.',
    pub_habr_sub:'Russischsprachiges Publikum · 13.000+ Aufrufe',
    pub_devto_sub:'Internationales Publikum · Englisch',
    pub_all_habr:'Alle Artikel', pub_all_devto:'Alle Artikel',
    pub1_date:'15. Apr 2026 · 14 Min',
    pub1_title:'Guardrails für LLMs in Java: Prompt-Injections und toxische Antworten zähmen',
    pub1_desc:'„Der System-Prompt ist eine Anweisung, die das LLM zu befolgen versucht, aber nicht befolgen muss." Code-Level-Schutz: PII-Maskierung, Jailbreak-Erkennung, Fail-Closed-Policy.',
    pub2_date:'16. Apr 2026 · 13 Min',
    pub2_title:'Toxische Inhalte, Prompt-Hacking und KI-Schutz — alles über Guardrails für LLMs',
    pub2_desc:'Überblick über Schwachstellen von Sprachmodellen und Schutztechnologien: Prompt Injection, Jailbreak, Data Exfiltration. Praktische Ansätze und Architekturmuster.',
    pub3_date:'11. Apr 2026 · EN',
    pub3_title:'JGuardrails: Production-Ready Safety Rails for Java LLM Applications',
    pub3_desc:'Java-Bibliothek, die LLM-Aufrufe mit einer Input/Output-Pipeline umhüllt, um Sicherheitsbeschränkungen durchzusetzen: Erkennung von Prompt Injection, PII-Lecks, toxischen Ausgaben, ungültigem JSON. Sicherheit als Code, nicht nur als System-Prompt.',
    pub4_date:'16. Apr 2026 · EN',
    pub4_title:'JGuardrails 1.0.0 — Hardening Java LLM Apps Against Jailbreaks, Toxicity, and Prompt Injection',
    pub4_desc:'Release 1.0.0: Performance durch Aho-Corasick, Japanisch-Unterstützung, erweiterbare Pattern-Architektur. Schutz vor Prompt Injection, Jailbreaks und toxischen Ausgaben.',
    // ── New: JGuardrails project
    open_source:'Open Source',
    proj_jg_desc:'Erste Java-Guardrails-Bibliothek für LLMs: Schutz vor Prompt Injection, PII-Maskierung, Erkennung toxischer Inhalte. Spring AI / LangChain4j, mehrsprachig (7 Sprachen). Java-Alternative zu NVIDIA NeMo Guardrails.',
    // ── New: Timeline two-tier (Job 1 BuildersApp)
    sep_results:'Ergebnisse', sep_tech:'Für technische Spezialisten',
    j1_period:'Apr 2025 — Okt 2025', j1_role:'Backend Developer', j1_dur:'7 Mon.',
    j1_team:'Team von 5–6 Personen · Pflege bestehender Projekte + Entwicklung eines neuen Services',
    j1_hr1:'Bot von Grund auf entwickelt — <strong>19.000+ Nutzer</strong> in 6 Monaten, Retention +25%',
    j1_hr2:'Escrow-Zahlungssystem implementiert — sichere Transaktionen für Tausende von Nutzern',
    j1_hr3:'Anfrageverarbeitung beschleunigt — <strong>3–4× schneller</strong> bei Spitzenlast',
    j1_hr4:'Datenbanklast reduziert — <strong>um 30–40%</strong> bei 5× Wachstum, ohne Downtime',
    j1_hr5:'Testabdeckung der Zahlungsszenarien — <strong>80%+</strong>, Regressionen beseitigt',
    j1_hr6:'Zahlungsbildschirme und Push-Benachrichtigungen in der Mobile-App implementiert',
    j1_t1:'Python + aiogram 3 + asyncio, Integration mit Spring Boot Backend — Telegram-Bot von Grund auf',
    j1_t2:'Escrow-Logik und Stripe-Integration in Microservice-Architektur — sichere Transaktionen',
    j1_t3:'Async-Architektur + Redis Cache-Aside + PostgreSQL — 3–4× schneller bei Spitzenlast',
    j1_t4:'Optimierung schwerer SQL via Hibernate — −30–40% DB-Last bei Nutzerwachstum',
    j1_t5:'pytest + JUnit 5 + Mockito auf Zahlungsszenarien — 80%+ Abdeckung, Regressionen beseitigt',
    j1_t6:'Natives Android-Modul (Java) + Flutter in CI/CD-Pipeline: Zahlungsbildschirme, Push-Benachrichtigungen',
    // ── Job 2 BelBot
    j2_period:'Jan 2022 — Jul 2025', j2_role:'Backend Developer',
    j2_outsource:'Outsourcing · Belarus', j2_dur:'3,5 J.',
    j2_team:'Team von 3 (Frontend, Tech Lead, ich — Backend) · Agile / Jira · Outsourcing',
    j2_hr1:'<strong>15+ kommerzielle Produkte</strong> entwickelt — vom Lastenheft bis zum Release, alles pünktlich',
    j2_hr2:'Nachrichtenverlust bei Spitzenlast eliminiert — Stabilität <strong>+50%</strong>',
    j2_hr3:'Deployment-Zeit reduziert — <strong>von Stunden auf 5–10 Minuten</strong>',
    j2_hr4:'Testabdeckung auf <strong>75–80%</strong> erhöht — Regressionen praktisch verschwunden',
    j2_hr5:'Schlüsselalgorithmus <strong>6×</strong> beschleunigt — von 70 auf 400+ Operationen in 30 Sekunden',
    j2_hr6:'Projekte vom Lastenheft bis zur Produktion geleitet — Koordination mit Business und Frontend ohne Verzögerungen',
    j2_t1:'Java + Spring Boot, 15+ Telegram/VK-Bots in Agile/Jira (Online-Shops, CRM, Arbitrage)',
    j2_t2:'Kafka in 2 Projekten: At-least-once-Delivery, DLQ — Nachrichtenverlust beseitigt, Stabilität +50%',
    j2_t3:'Docker + Kubernetes + CI/CD (Maven/Gradle, GitHub Actions) — Deploy: Stunden → 5–10 Min',
    j2_t4:'JUnit 5 + Mockito, 75–80% Abdeckung auf REST API + Spring Security — Regressionen beseitigt',
    j2_t5:'Legacy-Arbitrage-Algorithmus-Optimierung (Java): 60–70 → <strong>400+ Ops / 25–30 Sek</strong>, MySQL/SQL',
    j2_t6:'Projekte eigenständig vom Lastenheft bis zur Produktion geleitet, Koordination mit Business und Frontend',
    // ── Job 3 Freelance
    j3_period:'Jun 2021 — heute', j3_role:'Freelance Backend & Mobile Developer', j3_dur:'4+ J.',
    j3_a1:'Entwickelte REST-API-Services, Android-Apps (Java) und Telegram-Bots für individuelle Aufträge',
    j3_a2:'Kundenbetreuung: Erstellung von Pflichtenheften, Zeitschätzung, pünktliche MVP-Lieferung',
    // ── Goal years
    goal1_year:'2026–2030', goal2_year:'2030–2032', goal3_year:'bis 2030', goal4_year:'Langfristig',
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
    proj_delivered_desc:'Pet-projekt: mikrousługowy klon Yandex Food. Spring Boot, Kafka, PostgreSQL, Docker — pełna symulacja platformy dostawy jedzenia.',
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
    // ── New: Publications (Habr + dev.to)
    nav_pub:'Artykuły',
    pub_tag:'Publikacje', pub_title:'Artykuły Techniczne',
    pub_subtitle:'Piszę na Habr (RU) i dev.to (EN): bezpieczeństwo LLM, guardrails, architektura Java. Łącznie ponad 13 000 wyświetleń.',
    pub_habr_sub:'Rosyjskojęzyczna publiczność · 13 000+ wyświetleń',
    pub_devto_sub:'Międzynarodowa publiczność · Angielski',
    pub_all_habr:'Wszystkie artykuły', pub_all_devto:'Wszystkie artykuły',
    pub1_date:'15 kwi 2026 · 14 min',
    pub1_title:'Guardrails dla LLM w Javie: jak poskromić prompt injections i toksyczne odpowiedzi',
    pub1_desc:'„System prompt to instrukcja, którą LLM stara się wykonać, ale nie musi". Analiza zabezpieczeń na poziomie kodu: maskowanie PII, detekcja jailbreak, polityka fail-closed.',
    pub2_date:'16 kwi 2026 · 13 min',
    pub2_title:'Toksyczne treści, prompt hacking i ochrona AI — wszystko o Guardrails dla LLM',
    pub2_desc:'Przegląd podatności modeli językowych i technologii ochrony: prompt injection, jailbreak, eksfiltracja danych. Praktyczne podejścia i wzorce architektoniczne.',
    pub3_date:'11 kwi 2026 · EN',
    pub3_title:'JGuardrails: Production-Ready Safety Rails for Java LLM Applications',
    pub3_desc:'Biblioteka Java, która opakowuje wywołania LLM w pipeline wejścia/wyjścia dla wymuszenia ograniczeń bezpieczeństwa: detekcja prompt injection, wycieków PII, toksycznych wyjść, niepoprawnego JSON. Bezpieczeństwo jako kod, nie tylko system prompt.',
    pub4_date:'16 kwi 2026 · EN',
    pub4_title:'JGuardrails 1.0.0 — Hardening Java LLM Apps Against Jailbreaks, Toxicity, and Prompt Injection',
    pub4_desc:'Wydanie 1.0.0: wydajność dzięki Aho-Corasick, wsparcie dla języka japońskiego, rozszerzalna architektura wzorców. Ochrona przed prompt injection, jailbreakami i toksycznymi wyjściami.',
    // ── New: JGuardrails project
    open_source:'Open Source',
    proj_jg_desc:'Pierwsza biblioteka Java guardrails dla LLM: ochrona przed prompt injection, maskowanie PII, detekcja toksycznych treści. Spring AI / LangChain4j, wielojęzyczność (7 języków). Odpowiednik NVIDIA NeMo Guardrails dla ekosystemu Java.',
    // ── New: Timeline two-tier (Job 1 BuildersApp)
    sep_results:'Wyniki', sep_tech:'Dla specjalistów technicznych',
    j1_period:'Kwi 2025 — Paź 2025', j1_role:'Backend Developer', j1_dur:'7 mies.',
    j1_team:'Zespół 5–6 osób · utrzymanie istniejących projektów + rozwój nowego serwisu',
    j1_hr1:'Stworzyłem bota od zera — <strong>19 000+ użytkowników</strong> w 6 miesięcy, retencja +25%',
    j1_hr2:'Wdrożyłem system płatności escrow — bezpieczne transakcje dla tysięcy użytkowników',
    j1_hr3:'Przyspieszyłem przetwarzanie żądań — <strong>3–4× szybciej</strong> przy szczytowych obciążeniach',
    j1_hr4:'Zmniejszyłem obciążenie bazy danych — <strong>o 30–40%</strong> przy 5× wzroście audytorium, bez downtime',
    j1_hr5:'Pokrycie testami scenariuszy płatności — <strong>80%+</strong>, regresje wyeliminowane',
    j1_hr6:'Zaimplementowałem ekrany płatności i powiadomienia push w aplikacji mobilnej',
    j1_t1:'Python + aiogram 3 + asyncio, integracja ze Spring Boot backend — bot Telegram od zera',
    j1_t2:'Logika escrow i integracja Stripe w architekturze mikroserwisowej — bezpieczne transakcje',
    j1_t3:'Architektura async + Redis cache-aside + PostgreSQL — 3–4× szybciej przy szczytowym obciążeniu',
    j1_t4:'Optymalizacja ciężkich SQL przez Hibernate — −30–40% obciążenia BD podczas wzrostu',
    j1_t5:'pytest + JUnit 5 + Mockito w scenariuszach płatności — 80%+ pokrycia, regresje wyeliminowane',
    j1_t6:'Natywny moduł Android (Java) + Flutter w pipeline CI/CD: ekrany płatności, powiadomienia push',
    // ── Job 2 BelBot
    j2_period:'Sty 2022 — Lip 2025', j2_role:'Backend Developer',
    j2_outsource:'Outsourcing · Białoruś', j2_dur:'3,5 r.',
    j2_team:'Zespół 3 osób (frontend, tech lead, ja — backend) · Agile / Jira · outsourcing',
    j2_hr1:'Zrealizowałem <strong>15+ produktów komercyjnych</strong> — od specyfikacji po release, wszystko na czas',
    j2_hr2:'Wyeliminowałem utratę wiadomości przy szczytowych obciążeniach — stabilność <strong>+50%</strong>',
    j2_hr3:'Skróciłem czas wdrażania — <strong>z godzin do 5–10 minut</strong>',
    j2_hr4:'Zwiększyłem pokrycie testami do <strong>75–80%</strong> — regresje praktycznie zniknęły',
    j2_hr5:'Przyspieszyłem kluczowy algorytm <strong>6×</strong> — z 70 do 400+ operacji w 30 sekund',
    j2_hr6:'Prowadziłem projekty od specyfikacji do produkcji — koordynacja z biznesem i frontend bez opóźnień',
    j2_t1:'Java + Spring Boot, 15+ botów Telegram/VK w Agile/Jira (sklepy online, CRM, arbitraż)',
    j2_t2:'Kafka w 2 projektach: at-least-once delivery, DLQ — utrata wiadomości wyeliminowana, stabilność +50%',
    j2_t3:'Docker + Kubernetes + CI/CD (Maven/Gradle, GitHub Actions) — wdrożenie: godziny → 5–10 min',
    j2_t4:'JUnit 5 + Mockito, 75–80% pokrycia na REST API + Spring Security — regresje wyeliminowane',
    j2_t5:'Optymalizacja legacy algorytmu arbitrażu (Java): 60–70 → <strong>400+ ops / 25–30 sek</strong>, MySQL/SQL',
    j2_t6:'Samodzielnie prowadziłem projekty od specyfikacji do produkcji, koordynując z biznesem i frontend',
    // ── Job 3 Freelance
    j3_period:'Cze 2021 — obecnie', j3_role:'Freelance Backend & Mobile Developer', j3_dur:'4+ lat',
    j3_a1:'Rozwijałem serwisy REST API, aplikacje Android (Java) i boty Telegram pod indywidualne zamówienia',
    j3_a2:'Obsługa klientów: pisanie specyfikacji, szacowanie terminów, dostarczanie MVP na czas',
    // ── Goal years
    goal1_year:'2026–2030', goal2_year:'2030–2032', goal3_year:'do 2030', goal4_year:'Długoterminowo',
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

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  function openMenu() {
    burger.classList.add('active');
    burger.setAttribute('aria-expanded', 'true');
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  }
  function closeMenu() {
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
  }
  function toggleMenu() {
    if (menu.classList.contains('open')) closeMenu();
    else openMenu();
  }

  burger?.addEventListener('click', toggleMenu);
  menu?.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', closeMenu));

  // ESC closes menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu?.classList.contains('open')) closeMenu();
  });

  // Close when viewport grows past mobile breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860 && menu?.classList.contains('open')) closeMenu();
  });

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
