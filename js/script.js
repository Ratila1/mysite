const translations = {
    ru: {
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

        "hero-title": "Java Backend Developer",
        "hero-text": "Разрабатываю высоконагруженные backend-системы и микросервисы на Java 17 + Spring Boot.<br>4+ года коммерческого опыта • Архитектура • Производительность • Масштабирование • Работа в команде.<br>",
        "contact-btn": "Связаться",
        "resume-btn": "Резюме",

        "about-title": "Обо мне",
        "about-text": `Backend-разработчик с коммерческим опытом более 4 лет. Основной стек — Java 17, Spring Boot, микросервисы, REST API, базы данных и интеграции с внешними сервисами.<br><br>Участвовал в проектах разного масштаба: от высоконагруженных Telegram-ботов и серверных ядер Android-приложений до EdTech-стартапов и hardware-решений. Отвечал за проектирование архитектуры, оптимизацию производительности, тестирование и координацию небольших команд.<br><br>Люблю чистый, поддерживаемый и масштабируемый код. Постоянно изучаю новые технологии, паттерны проектирования и подходы к системному дизайну.`,

        "experience-title": "Опыт работы",
        "exp1-title": "Java Developer / Chatbot Developer",
        "exp1-company": "ИП Бордовский «БелБот»",
        "exp1-period": "Январь 2022 – Июль 2025 (3.5 года)",
        "exp1-list": `<li><i data-lucide="code-2"></i> Разработка и поддержка мессенджер-ботов (Telegram, VK, Discord) на Java</li><li><i data-lucide="layout-template"></i> Проектирование архитектуры, серверная логика, интеграции с внешними API</li><li><i data-lucide="users"></i> Планирование задач и распределение работы в команде из 2 человек</li><li><i data-lucide="database"></i> Создание и оптимизация БД пользователей и диалогов (SQLite → PostgreSQL)</li><li><i data-lucide="plus-circle"></i> Внедрение новых функций, работа с пользователями, устранение ошибок</li><li><i data-lucide="shield-check"></i> Поддержание стабильности и улучшение UX</li>`,

        "exp2-title": "Фриланс-разработчик",
        "exp2-company": "Fiverr, FL.ru, личные заказы",
        "exp2-period": "Июнь 2021 – н.в. (4+ года)",
        "exp2-list": `<li><i data-lucide="package"></i> Разработка под ключ: Android-приложения, Telegram-боты, backend</li><li><i data-lucide="message-circle"></i> Общение с заказчиками из США, Европы, СНГ — от ТЗ до сдачи</li><li><i data-lucide="figma"></i> Дизайн (Figma), архитектура, тестирование, деплой</li><li><i data-lucide="headphones"></i> Поддержка проектов после сдачи</li><li><i data-lucide="star"></i> 100% положительных отзывов на платформах</li>`,

        "skills-title": "Навыки и технологии",
        "achievements-title": "Достижения",
        "code-achievements-title": "Ключевые достижения в кодинге",

        "ach1": "Областной конкурс научно-технических разработок<br>Генератор электрических сигналов",
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
        "proj3": "Java + Spring Boot<br>Миллионы сообщений, интеграции<br>Коммерческий продукт",
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
        "nav-about": "About",
        "nav-experience": "Experience",
        "nav-skills": "Skills",
        "nav-achievements": "Achievements",
        "nav-projects": "Projects",
        "nav-goals": "Goals",
        "nav-education": "Education",
        "nav-contact": "Contact",

        "hero-title": "Java Backend Developer",
        "hero-text": "Building high-load backend systems and microservices with Java 17 + Spring Boot.<br>4+ years of commercial experience • Architecture • Performance • Scaling • Teamwork.<br>",
        "contact-btn": "Contact me",
        "resume-btn": "CV",

        "about-title": "About me",
        "about-text": `Backend developer with over 4 years of commercial experience. Main stack: Java 17, Spring Boot, microservices, REST API, databases, and external integrations.<br><br>Worked on projects of various scales: high-load Telegram bots, Android backend cores, EdTech startups, and hardware solutions. Responsible for architecture design, performance optimization, testing, and coordinating small teams.<br><br>Love clean, maintainable, and scalable code. Always learning new technologies, design patterns, and system design approaches.`,

        "experience-title": "Work Experience",
        "exp1-title": "Java Developer / Chatbot Developer",
        "exp1-company": "IP Bordovsky «BelBot»",
        "exp1-period": "January 2022 – July 2025 (3.5 years)",
        "exp1-list": `<li><i data-lucide="code-2"></i> Development and support of messenger bots (Telegram, VK, Discord) in Java</li><li><i data-lucide="layout-template"></i> Architecture design, server logic, external API integrations</li><li><i data-lucide="users"></i> Task planning and team coordination (2 developers)</li><li><i data-lucide="database"></i> Database design and optimization (SQLite → PostgreSQL)</li><li><i data-lucide="plus-circle"></i> New features, user support, bug fixing</li><li><i data-lucide="shield-check"></i> Maintaining stability and improving UX</li>`,

        "exp2-title": "Freelance Developer",
        "exp2-company": "Fiverr, FL.ru, private clients",
        "exp2-period": "June 2021 – present (4+ years)",
        "exp2-list": `<li><i data-lucide="package"></i> Full-cycle development: Android apps, Telegram bots, backend</li><li><i data-lucide="message-circle"></i> Working with clients from USA, Europe, CIS — from spec to delivery</li><li><i data-lucide="figma"></i> Design (Figma), architecture, testing, deployment</li><li><i data-lucide="headphones"></i> Post-launch support and updates</li><li><i data-lucide="star"></i> 100% positive reviews on platforms</li>`,

        "skills-title": "Skills & Technologies",
        "achievements-title": "Achievements",
        "code-achievements-title": "Key Technical Achievements",

        "ach1": "Regional Scientific & Technical Contest<br>Signal Generator (hardware + software)",
        "ach2": "Patriot.by Regional Contest<br>2.5D Platformer on Unreal Engine 5",
        "ach3": "Innovation Conference<br>College Telegram Bot",
        "ach4-title": "National Stage Finalist",
        "ach4": "Findmate — people & team matching app",

        "code1-title": "×5.7 Search Speed Boost",
        "code1-desc": "Increased arbitrage bot scan from 70 to 400+ paths in 30 seconds",
        "code1-badge": "Performance",
        "code2-title": "Clean Architecture",
        "code2-desc": "Fully migrated large Android app from MVVM to Clean Architecture",
        "code2-badge": "Refactoring",
        "code3-title": "−60% DB Load",
        "code3-desc": "Implemented Redis caching reducing DB load by 60%",
        "code3-badge": "Optimization",
        "code4-title": "CI/CD from Scratch",
        "code4-desc": "Built CI/CD pipeline from scratch (GitHub Actions + Docker)",
        "code4-badge": "DevOps",
        "code5-title": "80% Test Coverage",
        "code5-desc": "Achieved 80% unit test coverage for auth module",
        "code5-badge": "Testing",

        "projects-title": "Projects",
        "proj1-title": "Noxi — Language Learning in Sleep",
        "proj1": "Android • Java ~20k LOC<br>Sleep phases, TTS/SSML, progress tracking<br>Preparing for “100 Ideas for Belarus” 2025",
        "proj2-title": "Findmate",
        "proj2": "Android + backend • Java<br>People & team matching<br>National stage finalist",
        "proj3-title": "High-Load Telegram Bots",
        "proj3": "Java + Spring Boot<br>Millions of messages, integrations<br>Commercial product",
        "proj4-title": "2.5D Platformer",
        "proj4": "Unreal Engine 5 • Blueprints<br>Custom physics and combat<br>2nd place at Patriot.by",
        "proj5-title": "Signal Generator",
        "proj5": "Hardware + desktop app<br>Sine, triangle, square waves<br>1st place in the national competition",

        "goals-title": "Goals & Plans",
        "goal1-period": "2026–2030",
        "goal1": "Bachelor’s in Software Engineering",
        "goal2-period": "2030–2032",
        "goal2": "Master’s in AI/ML at a top foreign university",
        "goal3-period": "By 2030",
        "goal3": "Senior Java / Backend Engineer in an international company",
        "goal4-period": "Long-term",
        "goal4": "Launch my own startup in EdTech or HealthTech",

        "education-title": "Education",
        "edu-title": "Gomel State Engineering College",
        "edu-text": `<strong>Major:</strong> Mobile Application Programmer<br><strong>Graduation:</strong> February 2026<br><strong>GPA:</strong> 9.0 / 10<br><strong>Extra:</strong> Group leader, active extracurriculars<br><strong>English:</strong> B1 → actively advancing to B2`,

        "contact-title": "Contacts",
        "footer": "© 2025 Daniil Ratnikov — Java Backend Developer"
    }
};

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

// Язык
let currentLang = localStorage.getItem('lang') || 'ru';

function applyLanguage() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        const text = translations[currentLang][key];
        if (text !== undefined) {
            el.innerHTML = text;
        }
    });
    document.documentElement.lang = currentLang;
    document.title = translations[currentLang]["page-title"];
}

document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    localStorage.setItem('lang', currentLang);
    applyLanguage();
    lucide.createIcons();
});

// Анимации появления
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Инициализация
applyLanguage();
lucide.createIcons();