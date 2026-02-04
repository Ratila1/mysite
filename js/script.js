const translations = {
    ru: {
        // (твоя ru-часть полностью остаётся — она у тебя уже идеальна)
        "page-title": "Даниил Ратников — Java Backend Developer",
        "name": "Даниил Ратников",
        "nav-about": "Обо мне",
        "nav-experience": "Опыт работы",
        "nav-skills": "Навыки",
        "nav-achievements": "Достижения",
        "nav-projects": "Проекты",
        "nav-goals": "Цели",
        "nav-education": "Образование",
        "nav-contact": "Контакты",
        "contact-direct": "Написать мне напрямую",
        "form-success": "Сообщение успешно отправлено! Скоро отвечу.",
        "form-error": "Произошла ошибка. Попробуйте позже или напишите в Telegram @rat4la",
        "label-name": "Ваше имя",
        "label-email": "Email",
        "label-purpose": "Цель сообщения",
        "label-message": "Сообщение",
        "hero-title": "Java Backend Developer",
        "hero-text": "Разрабатываю высоконагруженные backend-системы и микросервисы на Java 17 + Spring Boot.<br>4+ года коммерческого опыта • Архитектура • Производительность • Масштабирование • Работа в команде.<br>",
        "contact-btn": "Связаться",
        "resume-btn": "Резюме",

        "about-title": "Обо мне",
        "about-text": `Backend-разработчик с коммерческим опытом более 4 лет. Основной стек — Java 17, Spring Boot, микросервисы, REST API, базы данных и интеграции с внешними сервисами.<br><br>Участвовал в проектах разного масштаба: от высоконагруженных Telegram-ботов и серверных ядер Android-приложений до EdTech-стартапов и hardware-решений. Отвечал за проектирование архитектуры, оптимизацию производительности, тестирование и координацию небольших команд.<br><br>Люблю чистый, поддерживаемый и масштабируемый код. Постоянно изучаю новые технологии, паттерны проектирования и подходы к системному дизайну.`,

        "experience-title": "Опыт работы",

        "exp-ba-position": "Junior Backend Developer (Remote)",
        "exp-ba-company": "BuildersApp",
        "exp-ba-period": "Апрель 2025 – октябрь 2025 (7 месяцев)",
        "exp-ba-item1": "С нуля написал Telegram-бота на Python + aiogram 3 — к октябрю 19 000+ активных пользователей",
        "exp-ba-item2": "Самостоятельно реализовал escrow-платежи и интеграцию со Stripe",
        "exp-ba-item3": "Перевёл бота на асинхронную архитектуру + Redis-кэш — время обработки заявок сократилось в 3–4 раза",
        "exp-ba-item4": "Оптимизировал тяжёлые запросы к PostgreSQL — нагрузка на базу заметно снизилась",
        "exp-ba-item5": "Добавил юнит/интеграционные тесты (pytest) — покрытие платёжных сценариев 80%+",
        "exp-ba-item6": "Выполнял задачи по Android-модулю на Java и Flutter (оплата, push-уведомления)",

        "exp-ipb-position": "Java Backend Developer",
        "exp-ipb-company": "ИП Бордовский «БелБот» + прямые заказчики",
        "exp-ipb-period": "Январь 2022 – июль 2025 (3 года 7 месяцев)",
        "exp-ipb-item1": "Разработал 15+ коммерческих Telegram/VK-ботов на Java + Spring Boot",
        "exp-ipb-item2": "Проектировал архитектуру по Clean Architecture",
        "exp-ipb-item3": "Внедрил Kafka в двух проектах — устранил потерю сообщений при пиках",
        "exp-ipb-item4": "Настроил Docker + Kubernetes и CI/CD — деплой с часов до 5–10 минут",
        "exp-ipb-item5": "Поднял покрытие тестами до 75–80 % (JUnit 5 + Mockito)",
        "exp-ipb-item6": "Ускорил критический алгоритм арбитража с 70 до 400+ операций за ~30 сек",

        "skills-title": "Навыки и технологии",
        "achievements-title": "Достижения",
        "code-achievements-title": "Ключевые достижения в кодинге",

        "place-1st": "1 место",
        "place-2nd": "2 место",
        "place-3rd": "3 место",

        "ach1": "Республиканский конкурс научно-технических разработок<br>Генератор электрических сигналов",
        "ach2": "Patriot.by — областной конкурс<br>2.5D платформер на Unreal Engine 5",
        "ach3": "Научная конференция инноваций<br>Telegram-бот колледжа",
        "ach4-title": "Финалист республиканского этапа",
        "ach4": "Findmate — поиск людей и команд",

        "code1-title": "×5.7 ускорение поиска",
        "code1-desc": "Увеличил объём проверки арбитраж-бота с 70 до 400+ путей за 30 сек",
        "code1-badge": "Performance",
        "code2-title": "Clean Architecture",
        "code2-desc": "Полностью перевёл крупное Android-приложение с MVVM на Clean",
        "code2-badge": "Рефакторинг",
        "code3-title": "−60% нагрузки на БД",
        "code3-desc": "Внедрил Redis-кэширование и оптимизацию запросов в высоконагруженном боте",
        "code3-badge": "Оптимизация",
        "code4-title": "CI/CD с нуля",
        "code4-desc": "Настроил автоматический деплой через GitHub Actions + Docker",
        "code4-badge": "DevOps",
        "code5-title": "80% покрытие тестами",
        "code5-desc": "Написал юнит-тесты для критического модуля авторизации",
        "code5-badge": "Тестирование",

        "projects-title": "Проекты",
        "proj1-title": "Noxi — обучение языкам во сне",
        "proj1": "Android • Java ~20k LOC<br>Фазы сна, TTS/SSML, трекинг<br>Готовится к «100 идей для Беларуси» 2025",
        "proj2-title": "Findmate",
        "proj2": "Android + backend • Java<br>Поиск людей и команд<br>Финалист республиканского конкурса",
        "proj3-title": "Высоконагруженные Telegram-боты",
        "proj3": "Java (Spring Boot) / Python<br>Разработка и поддержка модулей на двух стеках.<br>Миллионы сообщений, интеграции, коммерческий продукт.",
        "proj4-title": "2.5D платформер",
        "proj4": "Unreal Engine 5 • Blueprints<br>Кастомная физика и боёвка<br>2 место на Patriot.by",
        "proj5-title": "Генератор электрических сигналов",
        "proj5": "Hardware + desktop-приложение<br>Синус, треугольник, меандр<br>1 место на республиканском конкурсе",

        "goals-title": "Цели и планы",
        "goal1-period": "2026–2030",
        "goal1": "Бакалавриат «Инженер-программист»",
        "goal2-period": "2030–2032",
        "goal2": "Магистратура по AI/ML в топовом зарубежном университете",
        "goal3-period": "До 2030 года",
        "goal3": "Senior Java / Backend Engineer в международной компании",
        "goal4-period": "Долгосрочно",
        "goal4": "Запуск собственного стартапа в EdTech / HealthTech",

        "education-title": "Образование",
        "edu-title": "Гомельский государственный машиностроительный колледж",
        "edu-text": `<strong>Специальность:</strong> Программист мобильных устройств (ССО)<br><strong>Окончание:</strong> февраль 2026<br><strong>Средний балл:</strong> 9.0 / 10<br><strong>Дополнительно:</strong> староста группы, активная внеучебная деятельность<br><strong>Английский:</strong> B1 → активно иду к B2`,

        "contact-title": "Контакты",
        "footer": "© 2025 Даниил Ратников — Java Backend Developer"
    },

    en: {
    "page-title": "Daniil Ratnikov — Java Backend Developer",
    "name": "Daniil Ratnikov",

    "nav-about": "About me",
    "nav-experience": "Experience",
    "nav-skills": "Skills",
    "nav-achievements": "Achievements",
    "nav-projects": "Projects",
    "nav-goals": "Goals",
    "nav-education": "Education",
    "nav-contact": "Contacts",

    "contact-direct": "Write me directly",
    "form-success": "Message sent successfully! I will reply soon.",
    "form-error": "An error occurred. Please try again later or message me on Telegram @rat4la",
    "label-name": "Your name",
    "label-email": "Email",
    "label-purpose": "Message purpose",
    "label-message": "Message",

    "hero-title": "Java Backend Developer",
    "hero-text": "I build high-load backend systems and microservices using Java 17 + Spring Boot.<br>4+ years of commercial experience • Architecture • Performance • Scalability • Teamwork.<br>",
    "contact-btn": "Contact",
    "resume-btn": "Resume",

    "about-title": "About me",
    "about-text": `Backend developer with 4+ years of commercial experience. Main stack: Java 17, Spring Boot, microservices, REST API, databases, and integrations with external services.<br><br>I have worked on projects of various sizes: from high-load Telegram bots and Android app backend cores to EdTech startups and hardware solutions. I was responsible for architecture design, performance optimization, testing, and coordination of small teams.<br><br>I enjoy clean, maintainable, and scalable code. I constantly explore new technologies, design patterns, and system design approaches.`,

    "experience-title": "Experience",

    "exp-ba-position": "Junior Backend Developer (Remote)",
    "exp-ba-company": "BuildersApp",
    "exp-ba-period": "April 2025 – October 2025 (7 months)",
    "exp-ba-item1": "Built a Telegram bot from scratch using Python + aiogram 3 — reached 19,000+ active users by October",
    "exp-ba-item2": "Independently implemented escrow payments and Stripe integration",
    "exp-ba-item3": "Migrated the bot to an asynchronous architecture with Redis cache — request processing time decreased by 3–4x",
    "exp-ba-item4": "Optimized heavy PostgreSQL queries — database load dropped noticeably",
    "exp-ba-item5": "Added unit and integration tests (pytest) — payment flows coverage 80%+",
    "exp-ba-item6": "Handled tasks for the Android module in Java and Flutter (payments, push notifications)",

    "exp-ipb-position": "Java Backend Developer",
    "exp-ipb-company": "IE Bordovsky “BelBot” + direct clients",
    "exp-ipb-period": "January 2022 – July 2025 (3 years 7 months)",
    "exp-ipb-item1": "Developed 15+ commercial Telegram/VK bots using Java + Spring Boot",
    "exp-ipb-item2": "Designed architecture following Clean Architecture principles",
    "exp-ipb-item3": "Introduced Kafka in two projects — eliminated message loss during traffic peaks",
    "exp-ipb-item4": "Set up Docker + Kubernetes and CI/CD — reduced deployment time from hours to 5–10 minutes",
    "exp-ipb-item5": "Increased test coverage to 75–80% (JUnit 5 + Mockito)",
    "exp-ipb-item6": "Accelerated a critical arbitration algorithm from 70 to 400+ operations in ~30 seconds",

    "skills-title": "Skills and technologies",
    "achievements-title": "Achievements",
    "code-achievements-title": "Key coding achievements",

    "place-1st": "1st place",
    "place-2nd": "2nd place",
    "place-3rd": "3rd place",

    "ach1": "National contest of scientific and technical developments<br>Electric signal generator",
    "ach2": "Regional Patriot.by contest<br>2.5D platformer on Unreal Engine 5",
    "ach3": "Innovation science conference<br>College Telegram bot",
    "ach4-title": "Republican stage finalist",
    "ach4": "Findmate — people and team finder",

    "code1-title": "×5.7 faster search",
    "code1-desc": "Increased arbitration bot check volume from 70 to 400+ paths in 30 seconds",
    "code1-badge": "Performance",
    "code2-title": "Clean Architecture",
    "code2-desc": "Fully migrated a large Android app from MVVM to Clean Architecture",
    "code2-badge": "Refactoring",
    "code3-title": "−60% DB load",
    "code3-desc": "Implemented Redis caching and query optimization in a high-load bot",
    "code3-badge": "Optimization",
    "code4-title": "CI/CD from scratch",
    "code4-desc": "Set up automated deployment with GitHub Actions + Docker",
    "code4-badge": "DevOps",
    "code5-title": "80% test coverage",
    "code5-desc": "Wrote unit tests for a critical authentication module",
    "code5-badge": "Testing",

    "projects-title": "Projects",
    "proj1-title": "Noxi — language learning during sleep",
    "proj1": "Android • Java ~20k LOC<br>Sleep phases, TTS/SSML, tracking<br>Preparing for “100 Ideas for Belarus” 2025",
    "proj2-title": "Findmate",
    "proj2": "Android + backend • Java<br>People and team matchmaking<br>Finalist of a republican competition",
    "proj3-title": "High-load Telegram bots",
    "proj3": "Java (Spring Boot) / Python<br>Development and maintenance of modules on two stacks.<br>Millions of messages, integrations, commercial product.",
    "proj4-title": "2.5D platformer",
    "proj4": "Unreal Engine 5 • Blueprints<br>Custom physics and combat system<br>2nd place at Patriot.by",
    "proj5-title": "Electric signal generator",
    "proj5": "Hardware + desktop application<br>Sine, triangle, square wave<br>1st place at a national contest",

    "goals-title": "Goals and plans",
    "goal1-period": "2026–2030",
    "goal1": "Bachelor’s degree in Software Engineering",
    "goal2-period": "2030–2032",
    "goal2": "Master’s in AI/ML at a top international university",
    "goal3-period": "By 2030",
    "goal3": "Senior Java / Backend Engineer in an international company",
    "goal4-period": "Long-term",
    "goal4": "Launch my own startup in EdTech or HealthTech",

    "education-title": "Education",
    "edu-title": "Gomel State Machine-Building College",
    "edu-text": `<strong>Major:</strong> Mobile Devices Programmer (Vocational college)<br><strong>Graduation:</strong> February 2026<br><strong>GPA:</strong> 9.0 / 10<br><strong>Additional:</strong> group leader, active extracurricular involvement<br><strong>English:</strong> B1 → actively progressing towards B2`,

    "contact-title": "Contacts",
    "footer": "© 2025 Daniil Ratnikov — Java Backend Developer"
    },


    es: {
        "page-title": "Daniil Ratnikov — Desarrollador Java Backend",
        "name": "Daniil Ratnikov",

        "nav-about": "Sobre mí",
        "nav-experience": "Experiencia laboral",
        "nav-skills": "Habilidades",
        "nav-achievements": "Logros",
        "nav-projects": "Proyectos",
        "nav-goals": "Metas",
        "nav-education": "Educación",
        "nav-contact": "Contacto",
        "contact-direct": "Escríbeme directamente",
        "form-success": "¡Mensaje enviado con éxito! Responderé pronto.",
        "form-error": "Ocurrió un error. Inténtalo más tarde o escríbeme por Telegram @rat4la",
        "label-name": "Tu nombre",
        "label-email": "Email",
        "label-purpose": "Propósito del mensaje",
        "label-message": "Mensaje",
        "hero-title": "Desarrollador Java Backend",
        "hero-text": "Desarrollo sistemas backend de alta carga y microservicios con Java 17 + Spring Boot.<br>Más de 4 años de experiencia comercial • Arquitectura • Rendimiento • Escalabilidad • Trabajo en equipo.<br>",
        "contact-btn": "Contactar",
        "resume-btn": "CV",

        "about-title": "Sobre mí",
        "about-text": `Desarrollador backend con más de 4 años de experiencia comercial. Stack principal: Java 17, Spring Boot, microservicios, REST API, bases de datos e integraciones externas.<br><br>Participé en proyectos de diversas escalas: desde bots de Telegram de alta carga y núcleos backend para apps Android hasta startups EdTech y soluciones hardware. Responsable del diseño de arquitectura, optimización de rendimiento, testing y coordinación de pequeños equipos.<br><br>Me encanta el código limpio, mantenible y escalable. Siempre estoy aprendiendo nuevas tecnologías, patrones de diseño y enfoques de system design.`,

        "experience-title": "Experiencia laboral",

        "exp-ba-position": "Junior Backend Developer (Remote)",
        "exp-ba-company": "BuildersApp",
        "exp-ba-period": "Abril 2025 – Octubre 2025 (7 meses)",
        "exp-ba-item1": "Desarrollé desde cero un bot de Telegram en Python + aiogram 3 — más de 19 000 usuarios activos en octubre",
        "exp-ba-item2": "Implementé de forma independiente pagos escrow e integración con Stripe",
        "exp-ba-item3": "Migré el bot a arquitectura asíncrona + caché Redis — tiempo de procesamiento reducido 3–4 veces",
        "exp-ba-item4": "Optimicé consultas pesadas a PostgreSQL — carga en la base reducida significativamente",
        "exp-ba-item5": "Añadí tests unitarios/integración (pytest) — cobertura de escenarios de pago >80%",
        "exp-ba-item6": "Trabajé en tareas del módulo Android con Java y Flutter (pagos, notificaciones push)",

        "exp-ipb-position": "Java Backend Developer",
        "exp-ipb-company": "IP Bordovsky «BelBot» + Clientes privados",
        "exp-ipb-period": "Enero 2022 – Julio 2025 (3 años 7 meses)",
        "exp-ipb-item1": "Desarrollé más de 15 bots comerciales para Telegram/VK con Java + Spring Boot",
        "exp-ipb-item2": "Diseñé arquitectura siguiendo Clean Architecture",
        "exp-ipb-item3": "Implementé Kafka en dos proyectos — eliminé pérdida de mensajes en picos de carga",
        "exp-ipb-item4": "Configuré Docker + Kubernetes y CI/CD — despliegue reducido de horas a 5–10 minutos",
        "exp-ipb-item5": "Aumenté cobertura de tests al 75–80% (JUnit 5 + Mockito)",
        "exp-ipb-item6": "Aceleré algoritmo crítico de arbitraje de 70 a más de 400 operaciones en ~30 segundos",

        "skills-title": "Habilidades y tecnologías",
        "achievements-title": "Logros",
        "code-achievements-title": "Logros técnicos clave",

        "place-1st": "1er lugar",
        "place-2nd": "2do lugar",
        "place-3rd": "3er lugar",

        "ach1": "Concurso nacional de desarrollos científicos y técnicos<br>Generador de señales eléctricas",
        "ach2": "Concurso regional Patriot.by<br>Plataformero 2.5D en Unreal Engine 5",
        "ach3": "Conferencia científica de innovaciones<br>Bot de Telegram para el colegio",
        "ach4-title": "Finalista de etapa republicana",
        "ach4": "Findmate — búsqueda de personas y equipos",

        "code1-title": "×5.7 aceleración de búsqueda",
        "code1-desc": "Aumenté el volumen de verificación del bot de arbitraje de 70 a más de 400 rutas en 30 segundos",
        "code1-badge": "Performance",
        "code2-title": "Clean Architecture",
        "code2-desc": "Migré completamente una gran app Android de MVVM a Clean Architecture",
        "code2-badge": "Refactoring",
        "code3-title": "−60% carga en BD",
        "code3-desc": "Implementé caché Redis y optimización de consultas en bot de alta carga",
        "code3-badge": "Optimización",
        "code4-title": "CI/CD desde cero",
        "code4-desc": "Configuré despliegue automático con GitHub Actions + Docker",
        "code4-badge": "DevOps",
        "code5-title": "80% cobertura de tests",
        "code5-desc": "Escribí tests unitarios para módulo crítico de autorización",
        "code5-badge": "Testing",

        "projects-title": "Proyectos",
        "proj1-title": "Noxi — aprendizaje de idiomas durante el sueño",
        "proj1": "Android • Java ~20k LOC<br>Fases del sueño, TTS/SSML, seguimiento<br>Se prepara para «100 ideas para Bielorrusia» 2025",
        "proj2-title": "Findmate",
        "proj2": "Android + backend • Java<br>Búsqueda de personas y equipos<br>Finalista de concurso republicano",
        "proj3-title": "Bots de Telegram de alta carga",
        "proj3": "Java (Spring Boot) / Python<br>Desarrollo y mantenimiento de módulos en dos stacks.<br>Millones de mensajes, integraciones, producto comercial.",
        "proj4-title": "Plataformero 2.5D",
        "proj4": "Unreal Engine 5 • Blueprints<br>Física y combate personalizados<br>2do lugar en Patriot.by",
        "proj5-title": "Generador de señales eléctricas",
        "proj5": "Hardware + aplicación de escritorio<br>Seno, triángulo, onda cuadrada<br>1er lugar en concurso nacional",

        "goals-title": "Metas y planes",
        "goal1-period": "2026–2030",
        "goal1": "Grado en Ingeniería de Software",
        "goal2-period": "2030–2032",
        "goal2": "Máster en AI/ML en universidad extranjera top",
        "goal3-period": "Hasta 2030",
        "goal3": "Senior Java / Backend Engineer en empresa internacional",
        "goal4-period": "A largo plazo",
        "goal4": "Lanzar mi propio startup en EdTech o HealthTech",

        "education-title": "Educación",
        "edu-title": "Colegio Estatal de Ingeniería de Gomel",
        "edu-text": `<strong>Especialidad:</strong> Programador de dispositivos móviles<br><strong>Graduación:</strong> febrero 2026<br><strong>Promedio:</strong> 9.0 / 10<br><strong>Extra:</strong> jefe de grupo, actividad extracurricular activa<br><strong>Inglés:</strong> B1 → avanzando activamente a B2`,

        "contact-title": "Contacto",
        "footer": "© 2025 Daniil Ratnikov — Desarrollador Java Backend"
    },

    de: {
        "page-title": "Daniil Ratnikov — Java Backend Entwickler",
        "name": "Daniil Ratnikov",

        "nav-about": "Über mich",
        "nav-experience": "Berufserfahrung",
        "nav-skills": "Fähigkeiten",
        "nav-achievements": "Erfolge",
        "nav-projects": "Projekte",
        "nav-goals": "Ziele",
        "nav-education": "Ausbildung",
        "nav-contact": "Kontakt",
        "contact-direct": "Schreib mir direkt",
        "form-success": "Nachricht erfolgreich gesendet! Ich antworte bald.",
        "form-error": "Es ist ein Fehler aufgetreten. Versuche es später erneut oder schreib mir auf Telegram @rat4la",
        "label-name": "Dein Name",
        "label-email": "E-Mail",
        "label-purpose": "Zweck der Nachricht",
        "label-message": "Nachricht",
        "hero-title": "Java Backend Entwickler",
        "hero-text": "Entwickle hochbelastete Backend-Systeme und Microservices mit Java 17 + Spring Boot.<br>Über 4 Jahre kommerzielle Erfahrung • Architektur • Performance • Skalierung • Teamarbeit.<br>",
        "contact-btn": "Kontaktieren",
        "resume-btn": "Lebenslauf",

        "about-title": "Über mich",
        "about-text": `Backend-Entwickler mit über 4 Jahren kommerzieller Erfahrung. Hauptstack: Java 17, Spring Boot, Microservices, REST API, Datenbanken und externe Integrationen.<br><br>Arbeitete an Projekten unterschiedlicher Größe: von hochbelasteten Telegram-Bots und Android-Backend-Kernen bis zu EdTech-Startups und Hardware-Lösungen. Verantwortlich für Architekturdesign, Performance-Optimierung, Testing und Koordination kleiner Teams.<br><br>Ich liebe sauberen, wartbaren und skalierbaren Code. Lerne ständig neue Technologien, Design Patterns und System-Design-Ansätze.`,

        "experience-title": "Berufserfahrung",

        "exp-ba-position": "Junior Backend Developer (Remote)",
        "exp-ba-company": "BuildersApp",
        "exp-ba-period": "April 2025 – Oktober 2025 (7 Monate)",
        "exp-ba-item1": "Entwickelte von Grund auf einen Telegram-Bot mit Python + aiogram 3 — über 19.000 aktive Nutzer bis Oktober",
        "exp-ba-item2": "Implementierte eigenständig Escrow-Zahlungen und Stripe-Integration",
        "exp-ba-item3": "Migrerte den Bot auf asynchrone Architektur + Redis-Cache — Verarbeitungszeit um 3–4× reduziert",
        "exp-ba-item4": "Optimierte schwere PostgreSQL-Abfragen — Datenbanklast deutlich reduziert",
        "exp-ba-item5": "Fügte Unit-/Integrationstests hinzu (pytest) — 80%+ Abdeckung bei Zahlungsszenarien",
        "exp-ba-item6": "Arbeitete an Android-Modul-Aufgaben mit Java und Flutter (Zahlungen, Push-Benachrichtigungen)",

        "exp-ipb-position": "Java Backend Developer",
        "exp-ipb-company": "IP Bordovsky «BelBot» + Private Kunden",
        "exp-ipb-period": "Januar 2022 – Juli 2025 (3 Jahre 7 Monate)",
        "exp-ipb-item1": "Entwickelte über 15 kommerzielle Telegram/VK-Bots mit Java + Spring Boot",
        "exp-ipb-item2": "Entwarf Architektur nach Clean Architecture Prinzipien",
        "exp-ipb-item3": "Implementierte Kafka in zwei Projekten — eliminierte Nachrichtenverlust bei Spitzenlast",
        "exp-ipb-item4": "Richtete Docker + Kubernetes und CI/CD ein — Deployment von Stunden auf 5–10 Minuten reduziert",
        "exp-ipb-item5": "Erhöhte Testabdeckung auf 75–80% (JUnit 5 + Mockito)",
        "exp-ipb-item6": "Beschleunigte kritischen Arbitrage-Algorithmus von 70 auf über 400 Operationen in ~30 Sekunden",

        "skills-title": "Fähigkeiten & Technologien",
        "achievements-title": "Erfolge",
        "code-achievements-title": "Wichtige technische Erfolge",

        "place-1st": "1. Platz",
        "place-2nd": "2. Platz",
        "place-3rd": "3. Platz",

        "ach1": "Nationaler Wettbewerb für wissenschaftlich-technische Entwicklungen<br>Generator elektrischer Signale",
        "ach2": "Regionale Ausschreibung Patriot.by<br>2.5D-Plattformer in Unreal Engine 5",
        "ach3": "Wissenschaftliche Innovationskonferenz<br>Telegram-Bot des Colleges",
        "ach4-title": "Finalist der republikanischen Stufe",
        "ach4": "Findmate — Suche nach Personen und Teams",

        "code1-title": "×5.7 Suchbeschleunigung",
        "code1-desc": "Erhöhte Prüfvolumen des Arbitrage-Bots von 70 auf über 400 Pfade in 30 Sekunden",
        "code1-badge": "Performance",
        "code2-title": "Clean Architecture",
        "code2-desc": "Migrerte große Android-App komplett von MVVM auf Clean Architecture",
        "code2-badge": "Refactoring",
        "code3-title": "−60% Datenbanklast",
        "code3-desc": "Implementierte Redis-Caching und Abfrageoptimierung in hochbelastetem Bot",
        "code3-badge": "Optimierung",
        "code4-title": "CI/CD von Grund auf",
        "code4-desc": "Richtete automatisiertes Deployment mit GitHub Actions + Docker ein",
        "code4-badge": "DevOps",
        "code5-title": "80% Testabdeckung",
        "code5-desc": "Schrieb Unit-Tests für kritisches Autorisierungsmodul",
        "code5-badge": "Testing",

        "projects-title": "Projekte",
        "proj1-title": "Noxi — Sprachenlernen im Schlaf",
        "proj1": "Android • Java ~20k LOC<br>Schlafphasen, TTS/SSML, Tracking<br>Vorbereitung auf «100 Ideen für Belarus» 2025",
        "proj2-title": "Findmate",
        "proj2": "Android + Backend • Java<br>Suche nach Personen und Teams<br>Finalist republikanischer Wettbewerb",
        "proj3-title": "Hochbelastete Telegram-Bots",
        "proj3": "Java (Spring Boot) / Python<br>Entwicklung und Wartung von Modulen auf zwei Stacks.<br>Millionen Nachrichten, Integrationen, kommerzielles Produkt.",
        "proj4-title": "2.5D Plattformer",
        "proj4": "Unreal Engine 5 • Blueprints<br>Eigene Physik und Kampfsystem<br>2. Platz bei Patriot.by",
        "proj5-title": "Generator elektrischer Signale",
        "proj5": "Hardware + Desktop-App<br>Sinus, Dreieck, Rechteck<br>1. Platz im nationalen Wettbewerb",

        "goals-title": "Ziele & Pläne",
        "goal1-period": "2026–2030",
        "goal1": "Bachelor in Software Engineering",
        "goal2-period": "2030–2032",
        "goal2": "Master in AI/ML an einer Top-Universität im Ausland",
        "goal3-period": "Bis 2030",
        "goal3": "Senior Java / Backend Engineer in internationalem Unternehmen",
        "goal4-period": "Langfristig",
        "goal4": "Gründung eines eigenen Startups in EdTech oder HealthTech",

        "education-title": "Ausbildung",
        "edu-title": "Staatliches Maschinenbaukolleg Gomel",
        "edu-text": `<strong>Spezialisierung:</strong> Programmierer für mobile Geräte<br><strong>Abschluss:</strong> Februar 2026<br><strong>Durchschnitt:</strong> 9.0 / 10<br><strong>Zusätzlich:</strong> Gruppenleiter, aktive außerunterrichtliche Tätigkeiten<br><strong>Englisch:</strong> B1 → aktiv auf dem Weg zu B2`,

        "contact-title": "Kontakt",
        "footer": "© 2025 Daniil Ratnikov — Java Backend Entwickler"
    },

    pl: {
        "page-title": "Daniil Ratnikov — Java Backend Developer",
        "name": "Daniil Ratnikov",

        "nav-about": "O mnie",
        "nav-experience": "Doświadczenie zawodowe",
        "nav-skills": "Umiejętności",
        "nav-achievements": "Osiągnięcia",
        "nav-projects": "Projekty",
        "nav-goals": "Cele",
        "nav-education": "Wykształcenie",
        "nav-contact": "Kontakt",
        "contact-direct": "Napisz do mnie bezpośrednio",
        "form-success": "Wiadomość została wysłana! Wkrótce odpowiem.",
        "form-error": "Wystąpił błąd. Spróbuj ponownie później lub napisz do mnie na Telegramie @rat4la",
        "label-name": "Twoje imię",
        "label-email": "Email",
        "label-purpose": "Cel wiadomości",
        "label-message": "Wiadomość",
        "hero-title": "Java Backend Developer",
        "hero-text": "Tworzę wysokowydajne systemy backendowe i mikroserwisy w Java 17 + Spring Boot.<br>Ponad 4 lata doświadczenia komercyjnego • Architektura • Wydajność • Skalowalność • Praca zespołowa.<br>",
        "contact-btn": "Skontaktuj się",
        "resume-btn": "CV",

        "about-title": "O mnie",
        "about-text": `Backend developer z ponad 4-letnim doświadczeniem komercyjnym. Główny stack: Java 17, Spring Boot, mikroserwisy, REST API, bazy danych i integracje zewnętrzne.<br><br>Uczestniczyłem w projektach różnej skali: od wysokowydajnych botów Telegram i backendów aplikacji Android po startupy EdTech i rozwiązania hardware. Odpowiadałem za projektowanie architektury, optymalizację wydajności, testowanie i koordynację małych zespołów.<br><br>Lubię czysty, łatwy w utrzymaniu i skalowalny kod. Stale uczę się nowych technologii, wzorców projektowych i podejść do system design.`,

        "experience-title": "Doświadczenie zawodowe",

        "exp-ba-position": "Junior Backend Developer (Remote)",
        "exp-ba-company": "BuildersApp",
        "exp-ba-period": "Kwiecień 2025 – Październik 2025 (7 miesięcy)",
        "exp-ba-item1": "Od zera stworzyłem bota Telegram w Python + aiogram 3 — do października ponad 19 000 aktywnych użytkowników",
        "exp-ba-item2": "Samodzielnie wdrożyłem płatności escrow i integrację ze Stripe",
        "exp-ba-item3": "Przeniosłem bota na architekturę asynchroniczną + cache Redis — czas przetwarzania skrócił się 3–4 razy",
        "exp-ba-item4": "Zoptymalizowałem ciężkie zapytania do PostgreSQL — obciążenie bazy znacznie spadło",
        "exp-ba-item5": "Dodałem testy jednostkowe/integracyjne (pytest) — pokrycie scenariuszy płatności >80%",
        "exp-ba-item6": "Wykonywałem zadania w module Android z użyciem Java i Flutter (płatności, powiadomienia push)",

        "exp-ipb-position": "Java Backend Developer",
        "exp-ipb-company": "IP Bordovsky «BelBot» + Klienci prywatni",
        "exp-ipb-period": "Styczeń 2022 – Lipiec 2025 (3 lata 7 miesięcy)",
        "exp-ipb-item1": "Rozwinąłem ponad 15 komercyjnych botów Telegram/VK w Java + Spring Boot",
        "exp-ipb-item2": "Projektowałem architekturę według zasad Clean Architecture",
        "exp-ipb-item3": "Wdrożyłem Kafka w dwóch projektach — wyeliminowałem utratę wiadomości podczas szczytów",
        "exp-ipb-item4": "Skonfigurowałem Docker + Kubernetes i CI/CD — deployment skrócony z godzin do 5–10 minut",
        "exp-ipb-item5": "Podniosłem pokrycie testami do 75–80% (JUnit 5 + Mockito)",
        "exp-ipb-item6": "Przyspieszyłem krytyczny algorytm arbitrażu z 70 do ponad 400 operacji w ~30 sekund",

        "skills-title": "Umiejętności i technologie",
        "achievements-title": "Osiągnięcia",
        "code-achievements-title": "Kluczowe osiągnięcia techniczne",

        "place-1st": "1. miejsce",
        "place-2nd": "2. miejsce",
        "place-3rd": "3. miejsce",

        "ach1": "Republikański konkurs prac naukowo-technicznych<br>Generator sygnałów elektrycznych",
        "ach2": "Konkurs regionalny Patriot.by<br>Platformówka 2.5D na Unreal Engine 5",
        "ach3": "Konferencja naukowa innowacji<br>Bot Telegram uczelni",
        "ach4-title": "Finalista etapu republikańskiego",
        "ach4": "Findmate — wyszukiwanie osób i zespołów",

        "code1-title": "×5.7 przyspieszenie wyszukiwania",
        "code1-desc": "Zwiększyłem objętość sprawdzania botem arbitrażowym z 70 do ponad 400 ścieżek w 30 sekund",
        "code1-badge": "Performance",
        "code2-title": "Clean Architecture",
        "code2-desc": "W pełni przeniosłem dużą aplikację Android z MVVM na Clean Architecture",
        "code2-badge": "Refactoring",
        "code3-title": "−60% obciążenia bazy",
        "code3-desc": "Wdrożyłem cache Redis i optymalizację zapytań w wysokowydajnym bocie",
        "code3-badge": "Optymalizacja",
        "code4-title": "CI/CD od zera",
        "code4-desc": "Skonfigurowałem automatyczne wdrożenie przez GitHub Actions + Docker",
        "code4-badge": "DevOps",
        "code5-title": "80% pokrycia testami",
        "code5-desc": "Napisałem testy jednostkowe dla krytycznego modułu autoryzacji",
        "code5-badge": "Testing",

        "projects-title": "Projekty",
        "proj1-title": "Noxi — nauka języków podczas snu",
        "proj1": "Android • Java ~20k LOC<br>Fazy snu, TTS/SSML, śledzenie postępów<br>Przygotowywany do «100 pomysłów dla Białorusi» 2025",
        "proj2-title": "Findmate",
        "proj2": "Android + backend • Java<br>Wyszukiwanie osób i zespołów<br>Finalista konkursu republikańskiego",
        "proj3-title": "Wysokowydajne boty Telegram",
        "proj3": "Java (Spring Boot) / Python<br>Rozwój i utrzymanie modułów na dwóch stackach.<br>Miliony wiadomości, integracje, produkt komercyjny.",
        "proj4-title": "Platformówka 2.5D",
        "proj4": "Unreal Engine 5 • Blueprints<br>Własna fizyka i walka<br>2. miejsce na Patriot.by",
        "proj5-title": "Generator sygnałów elektrycznych",
        "proj5": "Hardware + aplikacja desktopowa<br>Sinus, trójkąt, prostokąt<br>1. miejsce w konkursie republikańskim",

        "goals-title": "Cele i plany",
        "goal1-period": "2026–2030",
        "goal1": "Studia licencjackie na kierunku Inżynieria Oprogramowania",
        "goal2-period": "2030–2032",
        "goal2": "Studia magisterskie z AI/ML na topowym zagranicznym uniwersytecie",
        "goal3-period": "Do 2030",
        "goal3": "Senior Java / Backend Engineer w międzynarodowej firmie",
        "goal4-period": "Długoterminowo",
        "goal4": "Uruchomienie własnego startupu w EdTech lub HealthTech",

        "education-title": "Wykształcenie",
        "edu-title": "Gomelski Państwowy College Budowy Maszyn",
        "edu-text": `<strong>Kierunek:</strong> Programista urządzeń mobilnych<br><strong>Ukończenie:</strong> luty 2026<br><strong>Średnia ocen:</strong> 9.0 / 10<br><strong>Dodatkowo:</strong> starosta grupy, aktywna działalność pozalekcyjna<br><strong>Angielski:</strong> B1 → aktywnie dążę do B2`,

        "contact-title": "Kontakt",
        "footer": "© 2025 Daniil Ratnikov — Java Backend Developer"
    }
};
const languages = ['ru', 'en', 'es', 'de', 'pl'];
let currentLang = localStorage.getItem('lang') || 'ru';

// Тема
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

function setTheme(dark) {
    if (dark) {
        html.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i data-lucide="moon"></i>';
    } else {
        html.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i data-lucide="sun"></i>';
    }
    lucide.createIcons();
}

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(savedTheme === 'dark' || (!savedTheme && prefersDark));

themeToggle.addEventListener('click', () => {
    const isDark = html.hasAttribute('data-theme');
    setTheme(!isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// Перевод
function applyLanguage() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        const text = translations[currentLang]?.[key];
        if (text) el.innerHTML = text;
    });
    document.documentElement.lang = currentLang;
    document.title = translations[currentLang]?.["page-title"] || "Даниил Ратников — Java Backend Developer";

    const langNames = { ru: "Русский", en: "English", es: "Español", de: "Deutsch", pl: "Polski" };
    document.getElementById('langToggle').title = langNames[currentLang] || "Язык";

    lucide.createIcons();
}

document.getElementById('langToggle').addEventListener('click', () => {
    const idx = languages.indexOf(currentLang);
    currentLang = languages[(idx + 1) % languages.length];
    localStorage.setItem('lang', currentLang);
    applyLanguage();
});

// Анимации появления
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Бургер-меню
const burger = document.querySelector('.burger-menu');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
    burger.innerHTML = navLinks.classList.contains('active') 
        ? '<i data-lucide="x"></i>' 
        : '<i data-lucide="menu"></i>';
    lucide.createIcons();
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
        burger.innerHTML = '<i data-lucide="menu"></i>';
        lucide.createIcons();
    });
});

document.getElementById('contact-form')?.addEventListener('submit', async function(e) {
    e.preventDefault();

    const form = e.target;
    const success = document.getElementById('form-success');
    const error   = document.getElementById('form-error');

    success.style.display = 'none';
    error.style.display   = 'none';

    try {
        const res = await fetch(form.action, {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: new FormData(form)
        });

        if (res.ok) {
            success.style.display = 'block';
            form.reset();
        } else {
            error.style.display = 'block';
        }
    } catch (err) {
        error.style.display = 'block';
    }
});


// Инициализация
applyLanguage();
lucide.createIcons();