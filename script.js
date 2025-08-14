// script.js

// === ДАННЫЕ (редактируйте под себя) ===
const data = {
    name: "Ратила — Mobile/Software Developer",
    tagline: "Делаю приложения, которые решают реальные задачи",
    location: "Беларусь • открыт к релокации/удалёнке",
    age: 18,
    email: "you@example.com", // замените
    phone: "+375 (xx) xxx-xx-xx", // замените
    telegram: "https://t.me/yourhandle", // замените
    github: "https://github.com/yourhandle", // замените
    linkedin: "https://www.linkedin.com/in/yourhandle", // замените
    resumeUrl: "/resume.pdf", // добавьте файл в корень проекта
    languages: [
        { code: "ru", label: "RU" },
        { code: "en", label: "EN" },
    ],
    i18n: {
        ru: {
            heroTitle: "Разработчик мобильных и программных решений",
            heroSubtitle:
                "Android (Java), Python, C++, Unreal Engine 5. Победы в конкурсах, сильный академический бэкграунд и продакшн-подход.",
            hireMe: "Нанять меня",
            viewCV: "Скачать резюме",
            sections: {
                about: "Обо мне",
                skills: "Навыки",
                projects: "Проекты",
                awards: "Достижения",
                experience: "Опыт",
                education: "Образование",
                contact: "Контакты",
            },
            about:
                "Я создаю приложения и инструменты, которые приносят ценность: от телеграм-ботов до мобильных приложений и прототипов устройств. Постоянно прокачиваю английский (B1→B2) и софт‑скиллы. Ценю чистый код, UX и скорость доставки.",
            aboutBullets: [
                "Чистая архитектура и читаемый код",
                "Прототипы быстро, качество — стабильно",
                "Работаю сам и в команде",
                "Ориентируюсь на продукт и пользователей"
            ],
            techStack: ["Java", "Android SDK", "Python", "C++", "Unreal Engine 5", "Blueprints", "SQLite", "Git", "Figma"],
            interests: "Мобилки, ИИ/боты, геймдев, продуктовый дизайн.",
            skills: [
                { name: "Java / Android", level: 90 },
                { name: "Python / Bots", level: 80 },
                { name: "C++", level: 65 },
                { name: "Unreal Engine 5 (Blueprints)", level: 70 },
                { name: "UI/UX, Figma", level: 75 },
                { name: "Git, CI/CD (база)", level: 70 },
            ],
            projects: [
                {
                    title: "NeuroSleep — обучение языкам во сне",
                    stack: ["Android", "Java ~20k loc", "TTS/SSML", "Будильники", "Подключаемые устройства"],
                    highlight: "Готовлю к республиканскому конкурсу \"100 идей для Беларуси\" (ноя–дек 2025)",
                    description:
                        "Курсы, контроль сна, умные сигналы, трекинг прогресса. Архитектура модульная, локальная БД, кастомные виджеты.",
                },
                {
                    title: "Findmate — поиск людей и команд",
                    stack: ["Android", "Java ~7k loc", "Алгоритмы сопоставления"],
                    highlight: "Финалист: сильный проект, но без приза на республиканском этапе",
                    description:
                        "Приложение помогает находить напарников по навыкам и интересам. Свой мессенджер, карточки, фильтры.",
                },
                {
                    title: "Telegram-бот колледжа",
                    stack: ["Python ~1k loc", "Aiogram", "Админ‑панель"],
                    highlight: "1 место на научной конференции инноваций",
                    description:
                        "Много функций: расписание, уведомления, заявки, интеграции. Логи, права ролей, удобные команды.",
                },
                {
                    title: "2.5D платформер",
                    stack: ["Unreal Engine 5", "Blueprints"],
                    highlight: "2 место на Patriot.by (областной конкурс)",
                    description:
                        "Игровой прототип с физикой, уровнями и базовой боевой системой. Акцент на визуал и стабильный FPS.",
                },
                {
                    title: "Генератор электрических сигналов",
                    stack: ["Электроника", "Софтовая часть"],
                    highlight: "1 место в областном конкурсе разработок",
                    description:
                        "Устройство генерирует синус, пилу и др. формы. Интерфейc для настройки параметров и калибровка.",
                },
                {
                    title: "Мини‑приложения (3 шт.)",
                    stack: ["Android", "SQLite"],
                    highlight: "Учебные CRUD‑приложения",
                    description:
                        "База данных + полезные утилиты. Чистая архитектура и внятный UI.",
                },
                {
                    title: "Шахматный тестер",
                    stack: ["C++"],
                    highlight: "Консольный инструмент",
                    description:
                        "Тестирование ходов и правил. Основа для дальнейшего движка.",
                },
            ],
            awards: [
                { title: "Patriot.by (область)", place: "2 место", details: "2.5D платформер на UE5" },
                { title: "Научная конференция инноваций", place: "1 место", details: "Telegram‑бот колледжа (Python)" },
                { title: "Конкурс разработок (область)", place: "1 место", details: "Генератор электрических сигналов" },
                { title: "100 идей для Беларуси", place: "Участник (предстоящий)", details: "NeuroSleep (ноя–дек 2025)" },
            ],
            experience: [
                { role: "Фриланс: дизайн и разработка", time: "2023 — н.в.", bullets: ["UI/UX‑макеты", "Android‑приложения", "Боты"] },
                { role: "Менеджер по продажам (BMZ)", time: "2023", bullets: ["Коммуникации, KPI", "Работа с возражениями"] },
                { role: "Бармен", time: "2022", bullets: ["Сервис", "Стрессоустойчивость", "Командная работа"] },
            ],
            education: {
                school: "Гомельский государственный машиностроительный колледж",
                degree: "Программист мобильных устройств (среднее спец.)",
                gpa: "Средний балл: 9.7",
                extra: "Староста, активная деятельность",
                grad: "Окончание: февраль 2026",
                english: "Английский: B1 (улучшаю)",
            },
            contactCta: "Связаться со мной",
            footerText: "Сделано с ❤️ & Vanilla JS."
        },
        en: {
            heroTitle: "Mobile & Software Developer",
            heroSubtitle:
                "Android (Java), Python, C++, Unreal Engine 5. Competition wins, strong academics, and a product mindset.",
            hireMe: "Hire me",
            viewCV: "Download CV",
            sections: {
                about: "About",
                skills: "Skills",
                projects: "Projects",
                awards: "Awards",
                experience: "Experience",
                education: "Education",
                contact: "Contact",
            },
            about:
                "I build useful apps and tools — from Telegram bots to Android apps and hardware prototypes. I keep leveling up English (B1→B2) and soft skills. I value clean code, UX, and shipping fast.",
            aboutBullets: [
                "Clean architecture and readable code",
                "Prototypes fast, quality stable",
                "Work well solo and in a team",
                "Product and user-oriented"
            ],
            techStack: ["Java", "Android SDK", "Python", "C++", "Unreal Engine 5", "Blueprints", "SQLite", "Git", "Figma"],
            interests: "Mobile, AI/bots, gamedev, product design.",
            skills: [
                { name: "Java / Android", level: 90 },
                { name: "Python / Bots", level: 80 },
                { name: "C++", level: 65 },
                { name: "Unreal Engine 5 (Blueprints)", level: 70 },
                { name: "UI/UX, Figma", level: 75 },
                { name: "Git, CI/CD (basics)", level: 70 },
            ],
            projects: [
                {
                    title: "NeuroSleep — sleep‑learning app",
                    stack: ["Android", "Java ~20k loc", "TTS/SSML", "Alarms", "Connected devices"],
                    highlight: "Preparing for national contest \"100 Ideas for Belarus\" (Nov–Dec 2025)",
                    description:
                        "Courses, sleep control, smart alarms, progress tracking. Modular architecture, local DB, custom widgets.",
                },
                {
                    title: "Findmate — team finder",
                    stack: ["Android", "Java ~7k loc", "Matching algorithms"],
                    highlight: "Finalist: strong project (no prize at national stage)",
                    description:
                        "Helps people find teammates by skills and interests. Built‑in messenger, cards, filters.",
                },
                {
                    title: "College Telegram Bot",
                    stack: ["Python ~1k loc", "Aiogram", "Admin panel"],
                    highlight: "1st place at innovation conference",
                    description:
                        "Lots of features: schedule, notifications, requests, integrations. Logging, roles, convenient commands.",
                },
                {
                    title: "2.5D Platformer",
                    stack: ["Unreal Engine 5", "Blueprints"],
                    highlight: "2nd place at Patriot.by (regional)",
                    description:
                        "Game prototype with physics, levels, and basic combat. Focus on visuals and stable FPS.",
                },
                {
                    title: "Signal Generator Device",
                    stack: ["Electronics", "Software"],
                    highlight: "1st place in regional development contest",
                    description:
                        "Generates sine, sawtooth and other waveforms. UI for parameter tuning and calibration.",
                },
                {
                    title: "Mini apps (3)",
                    stack: ["Android", "SQLite"],
                    highlight: "Study CRUD apps",
                    description:
                        "Local DB utilities with clean architecture and clear UI.",
                },
                {
                    title: "Chess Tester",
                    stack: ["C++"],
                    highlight: "Console tool",
                    description:
                        "Validates moves and rules. Base for future engine.",
                },
            ],
            awards: [
                { title: "Patriot.by (regional)", place: "2nd place", details: "2.5D platformer on UE5" },
                { title: "Innovation Conference", place: "1st place", details: "College Telegram bot (Python)" },
                { title: "Development Contest (regional)", place: "1st place", details: "Signal generator device" },
                { title: "100 Ideas for Belarus", place: "Upcoming", details: "NeuroSleep (Nov–Dec 2025)" },
            ],
            experience: [
                { role: "Freelance: design & development", time: "2023 — present", bullets: ["UI/UX mockups", "Android apps", "Bots"] },
                { role: "Sales Manager (BMZ)", time: "2023", bullets: ["Communication, KPIs", "Objection handling"] },
                { role: "Bartender", time: "2022", bullets: ["Service", "Stress‑resistance", "Teamwork"] },
            ],
            education: {
                school: "Gomel State Machine‑Building College",
                degree: "Mobile Devices Programming (secondary specialized)",
                gpa: "GPA: 9.7",
                extra: "Class leader, community involvement",
                grad: "Graduation: Feb 2026",
                english: "English: B1 (improving)",
            },
            contactCta: "Get in touch",
            footerText: "Made with ❤️ & Vanilla JS."
        },
    },
};

// Функция для рендеринга всего контента на основе выбранного языка
function renderContent(lang) {
    const t = data.i18n[lang];

    // NAV
    document.getElementById('nav-name').textContent = data.name;
    document.querySelectorAll('[data-nav-link]').forEach(el => {
        const key = el.getAttribute('data-nav-link');
        el.textContent = t.sections[key];
    });

    // HERO
    document.getElementById('hero-title').textContent = t.heroTitle;
    document.getElementById('hero-subtitle').textContent = t.heroSubtitle;
    document.getElementById('hero-location').textContent = data.location;
    document.querySelector('[data-i18n-key="hireMe"]').textContent = t.hireMe;
    document.querySelector('[data-i18n-key="viewCV"]').textContent = t.viewCV;
    document.getElementById('resume-link').href = data.resumeUrl;

    // ABOUT
    document.querySelector('#about .section-title').textContent = t.sections.about;
    document.getElementById('about-text').textContent = t.about;
    const aboutBulletsContainer = document.getElementById('about-bullets');
    aboutBulletsContainer.innerHTML = '';
    t.aboutBullets.forEach(bullet => {
        const li = document.createElement('li');
        li.className = 'flex items-center gap-2';
        li.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><polyline points="20 6 9 17 4 12"/></svg>' + bullet;
        aboutBulletsContainer.appendChild(li);
    });
    const techPillsContainer = document.getElementById('tech-pills');
    techPillsContainer.innerHTML = '';
    t.techStack.forEach(tech => {
        const pill = document.createElement('span');
        pill.className = 'pill';
        pill.textContent = tech;
        techPillsContainer.appendChild(pill);
    });

    // SKILLS
    document.querySelector('#skills .section-title').textContent = t.sections.skills;
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = '';
    t.skills.forEach(skill => {
        skillsList.innerHTML += `
            <div class="p-5 rounded-2xl glass-card animate-on-scroll">
                <div class="flex items-center justify-between mb-2">
                    <span class="font-medium">${skill.name}</span>
                    <span class="text-sm opacity-70">${skill.level}%</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${skill.level}%"></div>
                </div>
            </div>
        `;
    });

    // PROJECTS
    document.querySelector('#projects .section-title').textContent = t.sections.projects;
    const projectsList = document.getElementById('projects-list');
    projectsList.innerHTML = '';
    t.projects.forEach(project => {
        projectsList.innerHTML += `
            <article class="p-6 rounded-2xl glass-card flex flex-col animate-on-scroll">
                <div class="flex items-start justify-between gap-3">
                    <h3 class="text-lg font-semibold leading-tight">${project.title}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 opacity-70"><path d="m14.24 9.5-.7.7a2 2 0 1 1-2.83-2.83l.7-.7a2 2 0 1 1 2.83 2.83Z"/><path d="M16 16c-1.334 0-4 1.333-4 4s2.666 4 4 4s4-1.333 4-4-2.666-4-4-4Z"/></svg>
                </div>
                <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">${project.description}</p>
                <div class="mt-3 flex flex-wrap gap-2">
                    ${project.stack.map(s => `<span class="pill">${s}</span>`).join('')}
                </div>
                ${project.highlight ? `<div class="mt-3 text-sm inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-100/60 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A5.5 5.5 0 0 1 8.5 3c1.74 0 3.41.81 4.5 2.05A5.5 5.5 0 0 1 15.5 3c3.04 0 5.5 2.46 5.5 5.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> ${project.highlight}</div>` : ''}
                <a href="#contact" class="mt-4 inline-flex items-center gap-2 text-violet-600 dark:text-cyan-300 hover:underline">
                    Подробнее / связаться <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M9 18l6-6-6-6"/></svg>
                </a>
            </article>
        `;
    });

    // AWARDS
    document.querySelector('#awards .section-title').textContent = t.sections.awards;
    const awardsList = document.getElementById('awards-list');
    awardsList.innerHTML = '';
    t.awards.forEach(award => {
        awardsList.innerHTML += `
            <div class="p-6 rounded-2xl glass-card flex items-start gap-4 animate-on-scroll">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 shrink-0"><path d="M12 2L12 18"/><path d="M15 15L12 18L9 15"/><path d="M12 22h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8"/></svg>
                <div>
                    <div class="font-semibold">${award.title}</div>
                    <div class="text-sm opacity-80">${award.place}</div>
                    <div class="text-sm text-zinc-600 dark:text-zinc-400">${award.details}</div>
                </div>
            </div>
        `;
    });

    // EXPERIENCE
    document.querySelector('#experience .section-title').textContent = t.sections.experience;
    const experienceList = document.getElementById('experience-list');
    experienceList.innerHTML = '';
    t.experience.forEach(exp => {
        experienceList.innerHTML += `
            <div class="p-6 rounded-2xl glass-card animate-on-scroll">
                <div class="flex items-center justify-between">
                    <div class="font-semibold">${exp.role}</div>
                    <div class="text-sm opacity-70">${exp.time}</div>
                </div>
                <ul class="mt-3 grid sm:grid-cols-3 gap-2 text-sm">
                    ${exp.bullets.map(b => `<li class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M9 18l6-6-6-6"/></svg>${b}</li>`).join('')}
                </ul>
            </div>
        `;
    });

    // EDUCATION
    document.querySelector('#education .section-title').textContent = t.sections.education;
    document.getElementById('education-school').textContent = t.education.school;
    document.getElementById('education-degree').textContent = t.education.degree;
    document.getElementById('education-gpa-extra').textContent = `${t.education.gpa} • ${t.education.extra}`;
    document.getElementById('education-grad').textContent = t.education.grad;
    document.getElementById('education-english').textContent = t.education.english;

    // CONTACT
    document.querySelector('#contact .section-title').textContent = t.sections.contact;
    document.getElementById('contact-cta').textContent = t.contactCta;
    document.getElementById('contact-email').textContent = data.email;
    document.getElementById('email-link').href = `mailto:${data.email}`;
    document.getElementById('contact-phone').textContent = data.phone;
    document.getElementById('phone-link').href = `tel:${data.phone}`;
    document.getElementById('telegram-link').href = data.telegram;
    document.getElementById('github-link').href = data.github;
    document.getElementById('linkedin-link').href = data.linkedin;
    document.querySelector('#contact-form button span').textContent = t.hireMe;

    // FOOTER
    document.getElementById('footer-year').textContent = new Date().getFullYear();
    document.getElementById('footer-name').textContent = data.name;
    // document.getElementById('footer-text').textContent = t.footerText;
}

// Устанавливаем язык по умолчанию и слушатель событий
document.addEventListener('DOMContentLoaded', () => {
    let currentLang = 'ru'; // Начальный язык
    renderContent(currentLang);

    // Слушатель для кнопок переключения языка
    const languageSwitcher = document.getElementById('language-switcher');
    languageSwitcher.innerHTML = ''; // Очистка, чтобы не дублировались
    data.languages.forEach(l => {
        const button = document.createElement('button');
        button.textContent = l.label;
        button.setAttribute('data-lang', l.code);
        button.className = `px-2.5 py-1 rounded-lg text-sm border`;
        if (l.code === currentLang) {
            button.classList.add('border-violet-400');
        } else {
            button.classList.add('border-zinc-300', 'dark:border-zinc-700');
        }
        button.addEventListener('click', () => {
            currentLang = l.code;
            renderContent(currentLang);
            // Обновляем активную кнопку
            document.querySelectorAll('#language-switcher button').forEach(btn => {
                btn.classList.remove('border-violet-400');
                btn.classList.add('border-zinc-300', 'dark:border-zinc-700');
            });
            button.classList.remove('border-zinc-300', 'dark:border-zinc-700');
            button.classList.add('border-violet-400');
        });
        languageSwitcher.appendChild(button);
    });

    // Обработка формы
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = encodeURIComponent(formData.get("name"));
        const email = encodeURIComponent(formData.get("email"));
        const message = encodeURIComponent(formData.get("message"));
        const subject = encodeURIComponent(`Письмо с сайта-портфолио: ${name}`);
        const body = encodeURIComponent(`Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`);
        window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
    });

    // Анимации при прокрутке с помощью Intersection Observer
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animateOnScrollElements.forEach(element => {
        observer.observe(element);
    });
});
