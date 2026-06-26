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
    about: 'Frontend-разработчик с живым продуктом в продакшне (AvtorStudio) и 4+ годами на стыке бизнеса и технологий. Умею разговаривать с нетехническими стейкхолдерами и превращать боли бизнеса в работающий продукт. Прошёл полный цикл от идеи до CI/CD и сбора фидбека. Активно применяю AI-инструменты в ежедневной разработке.',
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
        desc: 'Платформа для писателей: редактор рукописей (TipTap), управление персонажами и заметками, облачное хранение (Supabase + RLS), адаптивный UI. CI/CD через GitHub Actions, автодеплой на Vercel, тестирование Vitest и Playwright, защита ввода DOMPurify. Публичная версия запущена, собрана обратная связь первых пользователей.',
        links: 'avtorstudio.com · github.com/XDobriev/writers_studio',
      },
      {
        name: 'FinRest', status: 'в разработке',
        stack: 'React · Python / FastAPI · SQLite',
        desc: 'Управленческий учёт для ресторанного бизнеса: загрузка банковских выписок, проводки по статьям ДДС, автоматические отчёты (ДДС, ОПиУ, баланс), дашборд ключевых метрик.',
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
    photo: null,            // фото для hero лендинга, напр. 'images/photo.jpg' (null → плейсхолдер)
    metrics: [
      { value: '−10 мин', label: 'ожидание гостя на ресепшене' },
      { value: '40 000 ₽', label: 'экономии в месяц на автоматизации' },
      { value: '−90 %', label: 'нагрузки на колл-центр' },
      { value: '4+ года', label: 'на стыке бизнеса и разработки' },
    ],
    projects: [
      {
        id: 'avtorstudio', name: 'AvtorStudio', status: 'в продакшне',
        tagline: 'Платформа для писателей',
        slot: 'shot-avtorstudio',
        img: 'images/avtorstudio.png',
        stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'TipTap', 'TanStack Query', 'GitHub Actions', 'Vercel', 'Vitest', 'Playwright'],
        desc: 'SaaS для авторов: редактор рукописей на TipTap, управление персонажами и заметками, облачное хранение на Supabase с Row-Level Security, адаптивный интерфейс.',
        points: [
          'Прошёл весь цикл: идея → прототип → CI/CD на GitHub Actions → автодеплой на Vercel',
          'Тестирование Vitest и Playwright, защита пользовательского ввода через DOMPurify',
          'Публичная версия запущена, собрана обратная связь первых пользователей',
        ],
        links: [
          { label: 'avtorstudio.com', href: 'https://avtorstudio.com' },
          { label: 'github.com/XDobriev/writers_studio', href: 'https://github.com/XDobriev/writers_studio' },
        ],
      },
      {
        id: 'finrest', name: 'FinRest', status: 'в разработке',
        tagline: 'Управленческий учёт для ресторанов',
        slot: 'shot-finrest',
        img: null,
        stack: ['React', 'Python', 'FastAPI', 'SQLite'],
        desc: 'Сервис управленческого учёта для ресторанного бизнеса: загрузка банковских выписок, проводки по статьям движения денежных средств, автоматические отчёты и дашборд ключевых метрик.',
        points: [
          'Автоматические отчёты: ДДС, ОПиУ, баланс',
          'Дашборд ключевых финансовых метрик для собственника',
        ],
        links: [],
      },
    ],
  };

  root.RESUME_DATA = RESUME_DATA;
  root.PORTFOLIO = PORTFOLIO;
  if (typeof module !== 'undefined' && module.exports) module.exports = { RESUME_DATA, PORTFOLIO };

})(typeof window !== 'undefined' ? window : globalThis);
