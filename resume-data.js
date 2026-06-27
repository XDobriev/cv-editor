/* ════════════════════════════════════════════════════════════
   ЕДИНЫЙ ИСТОЧНИК ДАННЫХ
   ─ RESUME_DATA — содержимое резюме в формате редактора (editor.html).
                   Его же читают онлайн-резюме (resume.html) и портфолио.
   ─ PORTFOLIO    — дополнительные данные только для лендинга-портфолио
                   (метрики и расширенные карточки проектов).
   ════════════════════════════════════════════════════════════ */
(function (root) {

  const RESUME_DATA = {
    profile: {
      name: 'Хамзат Добриев',
      role: 'Frontend Developer',
      tagline: 'react · typescript · 4+ yrs',
      reloc: 'готов к релокации',
      photo: null,
      showPhoto: true,
    },
    contacts: [
      { key: 'loc',   value: 'Назрань · удалённо' },
      { key: 'email', value: 'XDobriev@yandex.ru' },
      { key: 'tel',   value: '+7 (963) 134-26-93' },
      { key: 'tg',    value: '@XDobriev' },
      { key: 'git',   value: 'github.com/XDobriev' },
      { key: 'web',   value: 'avtorstudio.com' },
    ],
    about: 'Не просто верстаю макеты — запускаю продукты, которые работают. **AvtorStudio** — мой SaaS для писателей: архитектура, код, CI/CD, деплой и поддержка **в одних руках**. На курорте Армхи нашёл узкие места в процессах и закрыл их интеграциями — **без найма дополнительных сотрудников**. Преподаю фронтенд — умею объяснять сложное просто и писать код, который поймёт следующий разработчик.',
    tech: [
      { group: 'Frontend',       items: 'React, TypeScript, JavaScript ES6+, HTML5 / CSS3, TanStack Query, React Hook Form, TipTap' },
      { group: 'Backend & Data', items: 'Supabase, PostgreSQL, SQLite, REST API, FastAPI' },
      { group: 'Инструменты',    items: 'Git / GitHub Actions, CI/CD, Vercel, Figma, Vitest, Playwright' },
      { group: 'AI в разработке', items: 'Claude Code, Cursor' },
    ],
    experience: [
      {
        org: 'ООО «Курорты Ингушетии»', unit: 'курорт Армхи',
        title: 'Специалист по автоматизации бизнес-процессов', period: 'окт 2021 — н.в.',
        bullets: 'Интеграция TravelLine ↔ G1-Software (скан паспортов на ресепшене): ожидание гостя сократилось на **10 минут**\nИнтеграция iiko ↔ DocInBox (Честный Знак): экономия **40 000 ₽/мес**, устранена должность сотрудника склада\nВнедрение Hotbot на сайт курорта: нагрузка колл-центра **−90%** по теме доп. услуг\nTelegram-бот (TypeScript + Grammy.js + SQLite) для онбординга: инструкции, тесты, трекинг — полный цикл от прототипа до прода (NDA)\nНастройка CRM/ERP: Битрикс24, Kaiten, UIS, YouGile, TravelLine, iiko, Medesk',
      },
      {
        org: 'ООО «Смарт Таргет Центр»', unit: 'IThub · KiberOne',
        title: 'Преподаватель IT-дисциплин', period: 'окт 2023 — н.в.',
        bullets: 'Курсы: HTML & CSS, алгоритмы и структуры данных, архитектура ИС, основы технической документации\nРазработка учебных материалов, менторинг студентов по современному стеку',
      },
    ],
    projects: [
      {
        name: 'AvtorStudio', status: 'в продакшне',
        stack: 'React · TypeScript · Supabase · PostgreSQL · TipTap · TanStack Query · GitHub Actions · Vercel',
        desc: 'SaaS-платформа для писателей: удобный редактор рукописей, управление персонажами и заметками, облачная синхронизация. Полный цикл в одни руки — от прототипа до CI/CD, автодеплоя и сбора фидбека. Продукт запущен и работает.',
        links: 'avtorstudio.com · github.com/XDobriev/writers_studio',
      },
      {
        name: 'FinRest', status: 'в разработке',
        stack: 'React · Python / FastAPI · SQLite',
        desc: 'Инструмент для собственников ресторанного бизнеса: загрузка банковских выписок, автоматическое разнесение по статьям, готовые управленческие отчёты (ДДС, ОПиУ, баланс) и дашборд — вместо ручных Excel-таблиц.',
        links: '',
      },
    ],
    education: [
      { school: 'МФПУ «Синергия»', prog: 'Информационные системы и программирование', period: '2021 — 2025' },
      { school: 'Purple School', prog: 'Frontend Developer — JS, TypeScript, React, Redux Toolkit, Next.js, Git Flow', period: '2025 — 2026 (в процессе)' },
    ],
    languages: [
      { name: 'Русский', level: 'Родной' },
      { name: 'Английский', level: 'B1' },
    ],
    custom: [],
    settings: { accent: '#BF5A36', compact: false },
  };

  const PORTFOLIO = {
    photo: 'images/photo.jpg',   // фото для hero лендинга (null → плейсхолдер)
    metrics: [
      { value: '−10 мин', label: 'ожидание гостя на ресепшене' },
      { value: '40 000 ₽', label: 'экономии в месяц на автоматизации' },
      { value: '−90 %', label: 'нагрузки на колл-центр' },
      { value: '4+ года', label: 'на стыке бизнеса и разработки' },
    ],
    projects: [
      {
        id: 'avtorstudio', name: 'AvtorStudio', status: 'в продакшне',
        tagline: 'SaaS-платформа для писателей',
        slot: 'shot-avtorstudio',
        img: 'images/avtorstudio.png',
        stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'TipTap', 'TanStack Query', 'GitHub Actions', 'Vercel', 'Vitest', 'Playwright'],
        desc: 'Рабочее пространство для авторов: удобный редактор рукописей, управление персонажами и заметками, облачная синхронизация с Row-Level Security.',
        points: [
          'Полный цикл в одни руки: прототип → разработка → CI/CD → деплой → фидбек',
          'Продукт запущен и работает — реальные пользователи, реальная обратная связь',
          'Безопасность: RLS на Supabase, санитизация ввода, автотесты Vitest + Playwright',
        ],
        links: [
          { label: 'avtorstudio.com', href: 'https://avtorstudio.com' },
          { label: 'github.com/XDobriev/writers_studio', href: 'https://github.com/XDobriev/writers_studio' },
        ],
      },
      {
        id: 'finrest', name: 'FinRest', status: 'в разработке',
        tagline: 'Финансовая аналитика для ресторанов',
        slot: 'shot-finrest',
        img: 'images/finrest.png',
        stack: ['React', 'Python', 'FastAPI', 'SQLite'],
        desc: 'Инструмент для собственников: загрузка банковских выписок, автоматическое разнесение по статьям, управленческие отчёты и дашборд — вместо ручных Excel-таблиц.',
        points: [
          'Три ключевых отчёта из коробки: ДДС, ОПиУ, баланс',
          'Дашборд метрик, которые собственник проверяет каждый день',
        ],
        links: [],
      },
    ],
  };

  root.RESUME_DATA = RESUME_DATA;
  root.PORTFOLIO = PORTFOLIO;
  if (typeof module !== 'undefined' && module.exports) module.exports = { RESUME_DATA, PORTFOLIO };

})(typeof window !== 'undefined' ? window : globalThis);
