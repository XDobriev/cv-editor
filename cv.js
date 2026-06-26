/* global React, RESUME_DATA, PORTFOLIO, buildHref, inlineRich */
(function () {
  if (!document.getElementById('cv-styles')) {
    const s = document.createElement('style');
    s.id = 'cv-styles';
    s.textContent = `
    .cv{font-family:'Manrope',sans-serif;color:var(--ink);background:var(--bg);
      -webkit-font-smoothing:antialiased;line-height:1.6;}

    /* top bar */
    .cv-top{position:sticky;top:0;z-index:20;background:rgba(10,10,12,.92);
      backdrop-filter:blur(12px);border-bottom:1px solid var(--line);}
    .cv-top-in{max-width:1060px;margin:0 auto;padding:14px 32px;display:flex;align-items:center;
      justify-content:space-between;box-sizing:border-box;}
    .cv-brand{font-size:15px;font-weight:800;color:#fff;letter-spacing:-.02em;}
    .cv-brand .dot{color:var(--accent);}
    .cv-nav{display:flex;gap:28px;}
    .cv-nav a{font-size:14px;color:var(--muted);text-decoration:none;transition:color .15s;font-weight:500;}
    .cv-nav a:hover{color:#fff;}
    .cv-dl{font-size:13px;font-weight:600;color:var(--accent);
      border:1.5px solid var(--accent);border-radius:8px;padding:8px 18px;text-decoration:none;
      transition:background .2s,color .2s;}
    .cv-dl:hover{background:var(--accent);color:#fff;}

    /* hero */
    .cv-hero{padding:100px 0 80px;background:var(--bg);}
    .cv-wrap{max-width:1060px;margin:0 auto;padding:0 32px;box-sizing:border-box;}
    .cv-hero-grid{display:grid;grid-template-columns:1fr 220px;gap:56px;align-items:center;}
    .cv-label{display:inline-block;font-size:13px;font-weight:700;color:var(--accent);
      background:rgba(255,107,53,.12);padding:6px 16px;border-radius:6px;margin-bottom:24px;
      letter-spacing:.01em;}
    .cv-h1{font-size:clamp(2.8rem,5vw,4.5rem);font-weight:800;line-height:1.04;letter-spacing:-.03em;
      margin:0 0 20px;color:#fff;text-wrap:balance;}
    .cv-role{font-size:18px;color:var(--text);font-weight:400;margin-bottom:28px;line-height:1.5;
      max-width:50ch;}
    .cv-role strong{color:#fff;font-weight:700;}
    .cv-hero-meta{display:flex;flex-wrap:wrap;gap:10px;}
    .cv-pill{font-size:13px;font-weight:500;color:var(--text);
      border:1px solid var(--line);border-radius:999px;padding:8px 16px;text-decoration:none;
      display:inline-flex;align-items:center;gap:8px;transition:border-color .15s,color .15s;
      background:var(--surf);}
    .cv-pill:hover{border-color:var(--accent);color:#fff;}
    .cv-pill .k{color:var(--muted);}
    .cv-photo{width:220px;height:220px;border-radius:16px;border:2px solid var(--line);
      box-shadow:0 16px 48px rgba(0,0,0,.4);object-fit:cover;object-position:center;}

    /* impact strip — вместо hero-metric template */
    .cv-impact{padding:48px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);}
    .cv-impact-text{font-size:17px;color:var(--text);line-height:1.7;max-width:72ch;}
    .cv-impact-text strong{color:#fff;font-weight:700;}
    .cv-impact-text .num{color:var(--accent);font-weight:800;}

    /* sections */
    .cv-sec{padding:72px 0;border-bottom:1px solid var(--line);}
    .cv-sec-h{font-size:28px;font-weight:800;color:#fff;margin:0 0 40px;letter-spacing:-.02em;}
    .cv-sec-h .accent{color:var(--accent);}

    .cv-about{font-size:19px;line-height:1.7;color:var(--text);max-width:56ch;font-weight:400;}
    .cv-about strong{color:#fff;font-weight:700;}

    /* projects */
    .cv-proj{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start;margin-bottom:72px;}
    .cv-proj:last-child{margin-bottom:0;}
    .cv-proj.rev .cv-proj-media{order:2;}
    .cv-proj-media img,.cv-proj-media image-slot{width:100%;aspect-ratio:4/3;border:1px solid var(--line);
      border-radius:12px;box-shadow:0 12px 40px rgba(0,0,0,.3);}
    .cv-proj-media img{display:block;object-fit:cover;object-position:top;}
    .cv-proj-head{display:flex;align-items:center;gap:14px;margin-bottom:8px;}
    .cv-proj-name{font-size:24px;font-weight:800;letter-spacing:-.02em;color:#fff;}
    .cv-proj-status{font-size:12px;font-weight:600;color:var(--accent);
      border:1px solid rgba(255,107,53,.3);border-radius:6px;padding:3px 10px;
      background:rgba(255,107,53,.08);}
    .cv-proj-tag{font-size:15px;color:var(--muted);margin-bottom:16px;}
    .cv-proj-desc{font-size:15px;line-height:1.65;color:var(--text);margin:0 0 16px;}
    .cv-proj-points{list-style:none;margin:0 0 18px;padding:0;}
    .cv-proj-points li{font-size:14px;line-height:1.55;color:var(--text);padding-left:22px;
      position:relative;margin-bottom:8px;}
    .cv-proj-points li:before{content:'';position:absolute;left:0;top:8px;width:8px;height:2px;
      background:var(--accent);border-radius:1px;}
    .cv-proj-stack{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:18px;}
    .cv-stack-chip{font-size:12px;font-weight:600;color:var(--text);
      border:1px solid var(--line);border-radius:6px;padding:4px 10px;background:var(--surf);
      white-space:nowrap;}
    .cv-proj-links{display:flex;flex-wrap:wrap;gap:20px;}
    .cv-proj-links a{font-size:13px;font-weight:600;color:var(--accent);
      text-decoration:none;border-bottom:1.5px solid rgba(255,107,53,.3);padding-bottom:2px;
      transition:border-color .15s;}
    .cv-proj-links a:hover{border-bottom-color:var(--accent);}

    /* experience */
    .cv-exp{display:grid;grid-template-columns:140px 1fr;gap:32px;padding:28px 0;
      border-top:1px solid var(--line);}
    .cv-exp:first-of-type{border-top:0;padding-top:0;}
    .cv-exp-when{font-size:13px;font-weight:600;color:var(--muted);padding-top:4px;}
    .cv-exp-org{font-size:18px;font-weight:700;color:#fff;}
    .cv-exp-unit{font-size:13px;color:var(--muted);margin-top:3px;}
    .cv-exp-title{font-size:15px;color:var(--accent);font-weight:600;margin:6px 0 12px;}
    .cv-exp-points{list-style:none;margin:0;padding:0;}
    .cv-exp-points li{font-size:14px;line-height:1.6;color:var(--text);padding-left:22px;
      position:relative;margin-bottom:8px;}
    .cv-exp-points li:before{content:'';position:absolute;left:0;top:9px;width:8px;height:2px;
      background:var(--accent);border-radius:1px;}
    .cv-exp-points b{color:#fff;font-weight:700;}

    /* tech grid */
    .cv-tech{display:grid;grid-template-columns:repeat(2,1fr);gap:32px 56px;}
    .cv-tech-h{font-size:14px;font-weight:700;color:var(--accent);margin-bottom:14px;
      text-transform:lowercase;}
    .cv-tech-chips{display:flex;flex-wrap:wrap;gap:8px;}
    .cv-tech-chip{font-size:13px;font-weight:500;color:var(--text);border:1px solid var(--line);
      border-radius:8px;padding:6px 14px;background:var(--surf);}

    /* education + languages */
    .cv-two{display:grid;grid-template-columns:1.4fr 1fr;gap:56px;}
    .cv-edu{padding:18px 0;border-top:1px solid var(--line);}
    .cv-edu:first-child{border-top:0;padding-top:0;}
    .cv-edu-school{font-size:16px;font-weight:700;color:#fff;}
    .cv-edu-prog{font-size:14px;color:var(--text);line-height:1.5;margin:4px 0;}
    .cv-edu-when{font-size:12px;font-weight:600;color:var(--muted);}
    .cv-lang{display:flex;justify-content:space-between;padding:14px 0;
      border-bottom:1px solid var(--line);}
    .cv-lang:last-child{border-bottom:0;}
    .cv-lang .l{font-size:15px;font-weight:600;color:#fff;}
    .cv-lang .v{font-size:14px;color:var(--muted);}

    /* footer */
    .cv-foot{padding:80px 0 72px;text-align:center;}
    .cv-foot-h{font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:800;letter-spacing:-.02em;
      margin:0 0 14px;color:#fff;text-wrap:balance;}
    .cv-foot-sub{font-size:16px;color:var(--text);margin-bottom:32px;}
    .cv-foot-links{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;}
    .cv-foot-copy{margin-top:56px;font-size:12px;color:var(--muted);}

    @media (prefers-reduced-motion:reduce){.cv *{transition-duration:0s !important;animation:none !important;}}

    @media (max-width:760px){
      .cv-hero-grid{grid-template-columns:1fr;gap:32px;}
      .cv-photo{width:160px;height:160px;order:-1;}
      .cv-h1{font-size:clamp(2rem,8vw,3rem);}
      .cv-proj,.cv-proj.rev{grid-template-columns:1fr;gap:24px;}
      .cv-proj.rev .cv-proj-media{order:0;}
      .cv-exp{grid-template-columns:1fr;gap:8px;}
      .cv-tech,.cv-two{grid-template-columns:1fr;gap:28px;}
      .cv-nav{display:none;}
    }
    `;
    document.head.appendChild(s);
  }

  function iconFor(key) {
    const k = (key || '').toLowerCase();
    if (/mail|email/.test(k)) return '✉';
    if (/tel|phone/.test(k)) return '☎';
    if (/tg|telegram/.test(k)) return '◇';
    if (/git/.test(k)) return '⌘';
    if (/web|site/.test(k)) return '↗';
    if (/loc|город|где/.test(k)) return '◉';
    return '·';
  }

  function contacts() {
    return RESUME_DATA.contacts
      .filter(c => (c.value || '').trim())
      .map(c => ({ icon: iconFor(c.key), label: c.value, href: buildHref(c.key, c.value) }));
  }

  function pill(c, i, e) {
    const inner = [e('span', { className: 'k' }, c.icon), c.label];
    return c.href
      ? e('a', { className: 'cv-pill', key: i, href: c.href, target: '_blank' }, ...inner)
      : e('span', { className: 'cv-pill', key: i }, ...inner);
  }

  function WebCV() {
    const d = RESUME_DATA;
    const e = React.createElement;
    const cs = contacts();

    return e('div', { className: 'cv' },
      // top bar
      e('div', { className: 'cv-top' },
        e('div', { className: 'cv-top-in' },
          e('div', { className: 'cv-brand' }, 'ХД', e('span', { className: 'dot' }, '.')),
          e('nav', { className: 'cv-nav' },
            e('a', { href: '#projects' }, 'Проекты'),
            e('a', { href: '#experience' }, 'Опыт'),
            e('a', { href: '#stack' }, 'Стек'),
            e('a', { href: '#contact' }, 'Контакты'),
          ),
          e('a', { className: 'cv-dl', href: 'resume.html' }, '↓ PDF-резюме'),
        ),
      ),
      // hero
      e('header', { className: 'cv-hero' },
        e('div', { className: 'cv-wrap' },
          e('div', { className: 'cv-hero-grid' },
            e('div', null,
              e('span', { className: 'cv-label' }, 'React · TypeScript · 4+ года'),
              e('h1', { className: 'cv-h1' }, 'Хамзат Добриев'),
              e('div', { className: 'cv-role' },
                'Строю продукты от первого коммита до ',
                e('strong', null, 'живых пользователей'),
                ' — Назрань · удалённо · готов к релокации'),
              e('div', { className: 'cv-hero-meta' }, cs.map((c, i) => pill(c, i, e))),
            ),
            PORTFOLIO.photo
              ? e('img', { className: 'cv-photo', src: PORTFOLIO.photo, alt: 'Хамзат Добриев' })
              : e('image-slot', { class: 'cv-photo', placeholder: 'фото' }),
          ),
        ),
      ),
      // impact strip — метрики вплетены в текст вместо hero-metric template
      e('div', { className: 'cv-impact' },
        e('div', { className: 'cv-wrap' },
          e('p', { className: 'cv-impact-text', dangerouslySetInnerHTML: { __html:
            'Запустил собственный SaaS и автоматизировал процессы на курорте Армхи: ' +
            '<strong class="num">−10 мин</strong> ожидания на ресепшене, ' +
            '<strong class="num">−90%</strong> звонков в колл-центр, ' +
            '<strong class="num">40 000 ₽/мес</strong> экономии для бизнеса. ' +
            '<strong>4+ года</strong> превращаю задачи бизнеса в работающий код.'
          }}),
        ),
      ),
      // about
      e('section', { className: 'cv-sec' },
        e('div', { className: 'cv-wrap' },
          e('h2', { className: 'cv-sec-h' }, 'О ', e('span', { className: 'accent' }, 'себе')),
          e('p', { className: 'cv-about', dangerouslySetInnerHTML: { __html: inlineRich(d.about)
            .replace('AvtorStudio', '<strong>AvtorStudio</strong>')
            .replace('полный цикл', '<strong>полный цикл</strong>') } }),
        ),
      ),
      // projects
      e('section', { className: 'cv-sec', id: 'projects' },
        e('div', { className: 'cv-wrap' },
          e('h2', { className: 'cv-sec-h' }, 'Про', e('span', { className: 'accent' }, 'екты')),
          PORTFOLIO.projects.map((p, i) => e('div', { className: 'cv-proj' + (i % 2 ? ' rev' : ''), key: p.id },
            e('div', { className: 'cv-proj-media' },
              p.img
                ? e('img', { src: p.img, alt: 'Скриншот ' + p.name, loading: 'lazy' })
                : e('image-slot', { id: p.slot, placeholder: 'скриншот ' + p.name })),
            e('div', null,
              e('div', { className: 'cv-proj-head' },
                e('div', { className: 'cv-proj-name' }, p.name),
                e('span', { className: 'cv-proj-status' }, p.status)),
              e('div', { className: 'cv-proj-tag' }, p.tagline),
              e('p', { className: 'cv-proj-desc' }, p.desc),
              e('ul', { className: 'cv-proj-points' }, p.points.map((pt, j) => e('li', { key: j }, pt))),
              e('div', { className: 'cv-proj-stack' }, p.stack.map((st, j) => e('span', { className: 'cv-stack-chip', key: j }, st))),
              p.links.length ? e('div', { className: 'cv-proj-links' },
                p.links.map((l, j) => e('a', { key: j, href: l.href, target: '_blank' }, l.label))) : null,
            ),
          )),
        ),
      ),
      // experience
      e('section', { className: 'cv-sec', id: 'experience' },
        e('div', { className: 'cv-wrap' },
          e('h2', { className: 'cv-sec-h' }, 'Опыт ', e('span', { className: 'accent' }, 'работы')),
          d.experience.map((x, i) => {
            const bullets = (x.bullets || '').split('\n').map(b => b.trim()).filter(Boolean);
            return e('div', { className: 'cv-exp', key: i },
              e('div', { className: 'cv-exp-when' }, x.period),
              e('div', null,
                e('div', { className: 'cv-exp-org' }, x.org),
                x.unit ? e('div', { className: 'cv-exp-unit' }, x.unit) : null,
                e('div', { className: 'cv-exp-title' }, x.title),
                e('ul', { className: 'cv-exp-points' },
                  bullets.map((b, j) => e('li', { key: j, dangerouslySetInnerHTML: { __html: inlineRich(b) } }))),
              ),
            );
          }),
        ),
      ),
      // stack
      e('section', { className: 'cv-sec', id: 'stack' },
        e('div', { className: 'cv-wrap' },
          e('h2', { className: 'cv-sec-h' }, 'Техно', e('span', { className: 'accent' }, 'логии')),
          e('div', { className: 'cv-tech' },
            d.tech.map((g, i) => e('div', { key: i },
              e('div', { className: 'cv-tech-h' }, g.group.toLowerCase()),
              e('div', { className: 'cv-tech-chips' },
                g.items.split(',').map(s => s.trim()).filter(Boolean)
                  .map((it, j) => e('span', { className: 'cv-tech-chip', key: j }, it))),
            )),
          ),
        ),
      ),
      // education + languages
      e('section', { className: 'cv-sec' },
        e('div', { className: 'cv-wrap' },
          e('div', { className: 'cv-two' },
            e('div', null,
              e('h2', { className: 'cv-sec-h' }, 'Обра', e('span', { className: 'accent' }, 'зование')),
              d.education.map((ed, i) => e('div', { className: 'cv-edu', key: i },
                e('div', { className: 'cv-edu-school' }, ed.school),
                e('div', { className: 'cv-edu-prog' }, ed.prog),
                e('div', { className: 'cv-edu-when' }, ed.period))),
            ),
            e('div', null,
              e('h2', { className: 'cv-sec-h' }, 'Язы', e('span', { className: 'accent' }, 'ки')),
              d.languages.map((l, i) => e('div', { className: 'cv-lang', key: i },
                e('span', { className: 'l' }, l.name),
                e('span', { className: 'v' }, l.level)))),
          ),
        ),
      ),
      // contact footer
      e('footer', { className: 'cv-sec cv-foot', id: 'contact', style: { borderBottom: 'none' } },
        e('div', { className: 'cv-wrap' },
          e('h2', { className: 'cv-foot-h' }, 'Готов к новым проектам'),
          e('div', { className: 'cv-foot-sub' }, 'Frontend · React — Назрань · удалённо · открыт к релокации'),
          e('div', { className: 'cv-foot-links' }, cs.map((c, i) => pill(c, i, e))),
          e('div', { className: 'cv-foot-copy' }, '© 2026 Хамзат Добриев'),
        ),
      ),
    );
  }
  window.WebCV = WebCV;
})();
