window.RESUME = {
  name: 'Хамзат Добриев',
  role: 'Frontend Developer',
  role2: 'React & TypeScript',
  locShort: 'Назрань · Удалённо',
  relocate: 'Готов к релокации',
  contacts: [
    { k: 'email', label: 'XDobriev@yandex.ru', href: 'mailto:XDobriev@yandex.ru' },
    { k: 'phone', label: '+7 (963) 134-26-93', href: 'tel:+79631342693' },
    { k: 'tg', label: '@XDobriev', sub: 'Telegram', href: 'https://t.me/XDobriev' },
    { k: 'gh', label: 'github.com/XDobriev', href: 'https://github.com/XDobriev' },
    { k: 'site', label: 'avtorstudio.com', href: 'https://avtorstudio.com' },
  ],
  about: 'Frontend-разработчик с живым продуктом в продакшне (AvtorStudio) и 4+ годами на стыке бизнеса и технологий. Умею разговаривать с нетехническими стейкхолдерами и превращать боли бизнеса в работающий продукт. Прошёл полный цикл от идеи до CI/CD и сбора фидбека. Активно применяю AI-инструменты в ежедневной разработке.',
  tech: [
    { group: 'Frontend', items: ['React', 'TypeScript', 'JavaScript ES6+', 'HTML5 / CSS3', 'TanStack Query', 'React Hook Form', 'TipTap'] },
    { group: 'Backend & Data', items: ['Supabase', 'PostgreSQL', 'SQLite', 'REST API', 'FastAPI'] },
    { group: 'Инструменты', items: ['Git / GitHub Actions', 'CI/CD', 'Vercel', 'Figma', 'Vitest', 'Playwright'] },
    { group: 'AI в разработке', items: ['Claude Code', 'Cursor'] },
  ],
  languages: [
    { name: 'Русский', level: 'Родной' },
    { name: 'Английский', level: 'B1' },
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
  experience: [
    {
      org: 'ООО «Курорты Ингушетии»',
      unit: 'курорт Армхи',
      title: 'Специалист по автоматизации бизнес-процессов',
      period: 'окт 2021 — н.в.',
      bullets: [
        'Интеграция TravelLine ↔ G1-Software (скан паспортов на ресепшене): ожидание гостя сократилось на <b>10 минут</b>',
        'Интеграция iiko ↔ DocInBox (Честный Знак): экономия <b>40 000 ₽/мес</b>, устранена должность сотрудника склада',
        'Внедрение Hotbot на сайт курорта: нагрузка колл-центра <b>−90%</b> по теме доп. услуг',
        'Telegram-бот (TypeScript + Grammy.js + SQLite) для онбординга: инструкции, тесты, трекинг — полный цикл от прототипа до прода (NDA)',
        'Настройка CRM/ERP: Битрикс24, Kaiten, UIS, YouGile, TravelLine, iiko, Medesk',
      ],
    },
    {
      org: 'ООО «Смарт Таргет Центр»',
      unit: 'IThub · KiberOne',
      title: 'Преподаватель IT-дисциплин',
      period: 'окт 2023 — н.в.',
      bullets: [
        'Курсы: HTML & CSS, алгоритмы и структуры данных, архитектура ИС, основы технической документации',
        'Разработка учебных материалов, менторинг студентов по современному стеку',
      ],
    },
  ],
  education: [
    { school: 'МФПУ «Синергия»', program: 'Информационные системы и программирование', period: '2021 — 2025' },
    { school: 'Purple School', program: 'Frontend Developer — JS, TypeScript, React, Redux Toolkit, Next.js, Git Flow', period: '2025 — 2026 (в процессе)' },
  ],
  // ── Extended data for the web CV / portfolio ──
  metrics: [
    { value: '−10 мин', label: 'ожидание гостя на ресепшене' },
    { value: '40 000 ₽', label: 'экономии в месяц на автоматизации' },
    { value: '−90 %', label: 'нагрузки на колл-центр' },
    { value: '4+ года', label: 'на стыке бизнеса и разработки' },
  ],
  portfolio: [
    {
      id: 'avtorstudio', name: 'AvtorStudio', status: 'в продакшне',
      tagline: 'Платформа для писателей',
      slot: 'shot-avtorstudio',
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
