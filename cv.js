/* global React */
// Web CV — scrolling portfolio page in the "C / Dev" aesthetic.
// IBM Plex Sans + Mono, warm paper, terracotta accent. Sticky side rail nav.
(function () {
  if (!document.getElementById('cv-styles')) {
    const s = document.createElement('style');
    s.id = 'cv-styles';
    s.textContent = `
    .cv{font-family:'IBM Plex Sans',sans-serif;color:var(--ink);background:var(--paper);
      -webkit-font-smoothing:antialiased;line-height:1.5;}
    .cv-mono{font-family:'IBM Plex Mono',monospace;}
    .cv-wrap{max-width:960px;margin:0 auto;padding:0 32px;box-sizing:border-box;}

    /* top bar */
    .cv-top{position:sticky;top:0;z-index:20;background:rgba(252,250,247,.86);
      backdrop-filter:blur(10px);border-bottom:1px solid var(--line);}
    .cv-top-in{max-width:960px;margin:0 auto;padding:14px 32px;display:flex;align-items:center;
      justify-content:space-between;box-sizing:border-box;}
    .cv-brand{font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:600;color:var(--ink);}
    .cv-brand .dot{color:var(--accent);}
    .cv-nav{display:flex;gap:24px;}
    .cv-nav a{font-size:13px;color:var(--ink2);text-decoration:none;transition:color .15s;}
    .cv-nav a:hover{color:var(--accent);}
    .cv-dl{font-family:'IBM Plex Mono',monospace;font-size:12px;color:var(--accent-deep);
      border:1px solid var(--accent-line);border-radius:5px;padding:6px 13px;text-decoration:none;
      transition:background .15s,color .15s;}
    .cv-dl:hover{background:var(--accent);color:#fff;border-color:var(--accent);}

    /* hero */
    .cv-hero{padding:90px 0 64px;border-bottom:1px solid var(--line);}
    .cv-hero-grid{display:grid;grid-template-columns:1fr 200px;gap:48px;align-items:center;}
    .cv-tagline{font-family:'IBM Plex Mono',monospace;font-size:14px;color:var(--accent);margin-bottom:18px;}
    .cv-tagline .br{color:var(--muted);}
    .cv-h1{font-size:64px;font-weight:600;line-height:1;letter-spacing:-.03em;margin:0 0 18px;}
    .cv-role{font-size:19px;color:var(--ink2);font-weight:500;margin-bottom:26px;}
    .cv-role b{color:var(--accent-deep);font-weight:600;}
    .cv-hero-meta{display:flex;flex-wrap:wrap;gap:10px 10px;}
    .cv-pill{font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:var(--ink2);
      border:1px solid var(--line);border-radius:999px;padding:6px 14px;text-decoration:none;
      display:inline-flex;align-items:center;gap:7px;transition:border-color .15s,color .15s;background:#fff;}
    .cv-pill:hover{border-color:var(--accent-line);color:var(--accent-deep);}
    .cv-pill .k{color:var(--muted);}
    .cv-photo{width:200px;height:200px;border:1px solid var(--line);box-shadow:0 10px 40px rgba(60,30,15,.12);}

    /* metrics strip */
    .cv-metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line);
      border-bottom:1px solid var(--line);}
    .cv-metric{background:var(--paper);padding:30px 26px;}
    .cv-metric .v{font-size:34px;font-weight:600;letter-spacing:-.02em;color:var(--accent-deep);
      font-variant-numeric:tabular-nums;line-height:1;}
    .cv-metric .l{font-size:13px;color:var(--ink2);margin-top:9px;line-height:1.4;}

    /* sections */
    .cv-sec{padding:72px 0;border-bottom:1px solid var(--line);}
    .cv-sec-h{font-family:'IBM Plex Mono',monospace;font-size:13px;letter-spacing:.12em;
      text-transform:uppercase;color:var(--ink);font-weight:600;margin:0 0 36px;display:flex;align-items:center;gap:10px;}
    .cv-sec-h .idx{color:var(--accent);}
    .cv-sec-h:after{content:'';flex:1;height:1px;background:var(--line);}

    .cv-about{font-size:20px;line-height:1.6;color:var(--ink2);max-width:42ch;font-weight:400;}
    .cv-about b{color:var(--ink);font-weight:600;}

    /* projects */
    .cv-proj{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;margin-bottom:64px;}
    .cv-proj:last-child{margin-bottom:0;}
    .cv-proj.rev .cv-proj-media{order:2;}
    .cv-proj-media image-slot{width:100%;aspect-ratio:4/3;border:1px solid var(--line);
      border-radius:10px;box-shadow:0 8px 30px rgba(60,30,15,.10);}
    .cv-proj-head{display:flex;align-items:center;gap:12px;margin-bottom:5px;}
    .cv-proj-name{font-size:27px;font-weight:600;letter-spacing:-.02em;}
    .cv-proj-status{font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--accent);
      border:1px solid var(--accent-line);border-radius:3px;padding:2px 8px;}
    .cv-proj-tag{font-size:15px;color:var(--muted);margin-bottom:16px;}
    .cv-proj-desc{font-size:15px;line-height:1.6;color:var(--ink2);margin:0 0 14px;}
    .cv-proj-points{list-style:none;margin:0 0 16px;padding:0;}
    .cv-proj-points li{font-size:14px;line-height:1.5;color:var(--ink2);padding-left:20px;
      position:relative;margin-bottom:7px;}
    .cv-proj-points li:before{content:'→';position:absolute;left:0;color:var(--accent);
      font-family:'IBM Plex Mono',monospace;}
    .cv-proj-stack{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px;}
    .cv-stack-chip{font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:var(--ink2);
      border:1px solid var(--line);border-radius:4px;padding:3px 9px;background:#fff;white-space:nowrap;}
    .cv-proj-links{display:flex;flex-wrap:wrap;gap:18px;}
    .cv-proj-links a{font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:var(--accent-deep);
      text-decoration:none;border-bottom:1px solid var(--accent-line);padding-bottom:1px;}
    .cv-proj-links a:hover{color:var(--accent);}

    /* experience */
    .cv-exp{display:grid;grid-template-columns:160px 1fr;gap:32px;padding:26px 0;border-top:1px solid var(--line);}
    .cv-exp:first-of-type{border-top:0;padding-top:0;}
    .cv-exp-when{font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:var(--muted);padding-top:3px;}
    .cv-exp-org{font-size:18px;font-weight:600;color:var(--ink);}
    .cv-exp-unit{font-size:13px;color:var(--muted);margin-top:2px;}
    .cv-exp-title{font-size:14.5px;color:var(--accent-deep);font-weight:500;margin:8px 0 12px;}
    .cv-exp-points{list-style:none;margin:0;padding:0;}
    .cv-exp-points li{font-size:14px;line-height:1.55;color:var(--ink2);padding-left:20px;position:relative;margin-bottom:8px;}
    .cv-exp-points li:before{content:'';position:absolute;left:0;top:8px;width:5px;height:5px;
      background:var(--accent);transform:rotate(45deg);}
    .cv-exp-points b{color:var(--ink);font-weight:700;}

    /* tech grid */
    .cv-tech{display:grid;grid-template-columns:repeat(2,1fr);gap:28px 48px;}
    .cv-tech-h{font-family:'IBM Plex Mono',monospace;font-size:12px;color:var(--accent-deep);margin-bottom:12px;}
    .cv-tech-h:before{content:'# ';color:var(--accent);}
    .cv-tech-chips{display:flex;flex-wrap:wrap;gap:8px;}
    .cv-tech-chip{font-size:13.5px;color:var(--ink);border:1px solid var(--line);border-radius:6px;
      padding:5px 12px;background:#fff;}

    /* education + languages */
    .cv-two{display:grid;grid-template-columns:1.4fr 1fr;gap:56px;}
    .cv-edu{padding:16px 0;border-top:1px solid var(--line);}
    .cv-edu:first-child{border-top:0;padding-top:0;}
    .cv-edu-school{font-size:16px;font-weight:600;}
    .cv-edu-prog{font-size:13.5px;color:var(--ink2);line-height:1.45;margin:3px 0;}
    .cv-edu-when{font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:var(--muted);}
    .cv-lang{display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--line);}
    .cv-lang:last-child{border-bottom:0;}
    .cv-lang .l{font-size:15px;font-weight:500;}
    .cv-lang .v{font-family:'IBM Plex Mono',monospace;font-size:13px;color:var(--muted);}

    /* contact / footer */
    .cv-foot{padding:80px 0 70px;text-align:center;}
    .cv-foot-h{font-size:38px;font-weight:600;letter-spacing:-.02em;margin:0 0 12px;}
    .cv-foot-sub{font-size:16px;color:var(--ink2);margin-bottom:30px;}
    .cv-foot-links{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;}
    .cv-foot-copy{margin-top:54px;font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:var(--muted);}

    @media (max-width:760px){
      .cv-hero-grid{grid-template-columns:1fr;gap:32px;}
      .cv-photo{width:150px;height:150px;order:-1;}
      .cv-h1{font-size:46px;}
      .cv-metrics{grid-template-columns:repeat(2,1fr);}
      .cv-proj,.cv-proj.rev{grid-template-columns:1fr;gap:20px;}
      .cv-proj.rev .cv-proj-media{order:0;}
      .cv-exp{grid-template-columns:1fr;gap:8px;}
      .cv-tech,.cv-two{grid-template-columns:1fr;gap:24px;}
      .cv-nav{display:none;}
    }
    `;
    document.head.appendChild(s);
  }

  const ICON = { email: '✉', phone: '☎', tg: '◇', gh: '⌘', site: '↗' };

  function WebCV() {
    const d = window.RESUME;
    const e = React.createElement;
    return e('div', { className: 'cv' },
      // top bar
      e('div', { className: 'cv-top' },
        e('div', { className: 'cv-top-in' },
          e('div', { className: 'cv-brand' }, 'ХД', e('span', { className: 'dot' }, '.'), e('span', { className: 'cv-mono' }, 'dev')),
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
              e('div', { className: 'cv-tagline' },
                e('span', { className: 'br' }, '<'), 'react · typescript · 4+ yrs', e('span', { className: 'br' }, ' />')),
              e('h1', { className: 'cv-h1' }, 'Хамзат', e('br'), 'Добриев'),
              e('div', { className: 'cv-role', dangerouslySetInnerHTML: { __html: 'Frontend-разработчик с <b>живым продуктом в продакшне</b> — Назрань · удалённо · готов к релокации' } }),
              e('div', { className: 'cv-hero-meta' },
                d.contacts.map((c) => e('a', { className: 'cv-pill', key: c.k, href: c.href, target: '_blank' },
                  e('span', { className: 'k' }, ICON[c.k] || '·'), c.label)),
              ),
            ),
            e('image-slot', { id: 'cv-photo', class: 'cv-photo', shape: 'rounded', radius: '14', placeholder: 'фото' }),
          ),
        ),
      ),
      // metrics
      e('div', { className: 'cv-metrics' },
        d.metrics.map((m, i) => e('div', { className: 'cv-metric', key: i },
          e('div', { className: 'v' }, m.value),
          e('div', { className: 'l' }, m.label))),
      ),
      // about
      e('section', { className: 'cv-sec' },
        e('div', { className: 'cv-wrap' },
          e('h2', { className: 'cv-sec-h' }, e('span', { className: 'idx' }, '00'), 'О себе'),
          e('p', { className: 'cv-about', dangerouslySetInnerHTML: { __html: d.about.replace('AvtorStudio', '<b>AvtorStudio</b>').replace('полный цикл', '<b>полный цикл</b>') } }),
        ),
      ),
      // projects
      e('section', { className: 'cv-sec', id: 'projects' },
        e('div', { className: 'cv-wrap' },
          e('h2', { className: 'cv-sec-h' }, e('span', { className: 'idx' }, '01'), 'Проекты'),
          d.portfolio.map((p, i) => e('div', { className: 'cv-proj' + (i % 2 ? ' rev' : ''), key: p.id },
            e('div', { className: 'cv-proj-media' },
              e('image-slot', { id: p.slot, shape: 'rounded', radius: '10', placeholder: 'скриншот ' + p.name })),
            e('div', null,
              e('div', { className: 'cv-proj-head' },
                e('div', { className: 'cv-proj-name' }, p.name),
                e('span', { className: 'cv-proj-status' }, p.status)),
              e('div', { className: 'cv-proj-tag' }, p.tagline),
              e('p', { className: 'cv-proj-desc' }, p.desc),
              e('ul', { className: 'cv-proj-points' }, p.points.map((pt, j) => e('li', { key: j }, pt))),
              e('div', { className: 'cv-proj-stack' }, p.stack.map((s, j) => e('span', { className: 'cv-stack-chip', key: j }, s))),
              p.links.length ? e('div', { className: 'cv-proj-links' },
                p.links.map((l, j) => e('a', { key: j, href: l.href, target: '_blank' }, l.label))) : null,
            ),
          )),
        ),
      ),
      // experience
      e('section', { className: 'cv-sec', id: 'experience' },
        e('div', { className: 'cv-wrap' },
          e('h2', { className: 'cv-sec-h' }, e('span', { className: 'idx' }, '02'), 'Опыт работы'),
          d.experience.map((x, i) => e('div', { className: 'cv-exp', key: i },
            e('div', { className: 'cv-exp-when' }, x.period),
            e('div', null,
              e('div', { className: 'cv-exp-org' }, x.org),
              x.unit ? e('div', { className: 'cv-exp-unit' }, x.unit) : null,
              e('div', { className: 'cv-exp-title' }, x.title),
              e('ul', { className: 'cv-exp-points' },
                x.bullets.map((b, j) => e('li', { key: j, dangerouslySetInnerHTML: { __html: b } }))),
            ),
          )),
        ),
      ),
      // stack
      e('section', { className: 'cv-sec', id: 'stack' },
        e('div', { className: 'cv-wrap' },
          e('h2', { className: 'cv-sec-h' }, e('span', { className: 'idx' }, '03'), 'Технологии'),
          e('div', { className: 'cv-tech' },
            d.tech.map((g, i) => e('div', { key: i },
              e('div', { className: 'cv-tech-h' }, g.group.toLowerCase()),
              e('div', { className: 'cv-tech-chips' },
                g.items.map((it, j) => e('span', { className: 'cv-tech-chip', key: j }, it))),
            )),
          ),
        ),
      ),
      // education + languages
      e('section', { className: 'cv-sec' },
        e('div', { className: 'cv-wrap' },
          e('div', { className: 'cv-two' },
            e('div', null,
              e('h2', { className: 'cv-sec-h' }, e('span', { className: 'idx' }, '04'), 'Образование'),
              d.education.map((ed, i) => e('div', { className: 'cv-edu', key: i },
                e('div', { className: 'cv-edu-school' }, ed.school),
                e('div', { className: 'cv-edu-prog' }, ed.program),
                e('div', { className: 'cv-edu-when' }, ed.period))),
            ),
            e('div', null,
              e('h2', { className: 'cv-sec-h' }, e('span', { className: 'idx' }, '05'), 'Языки'),
              d.languages.map((l, i) => e('div', { className: 'cv-lang', key: i },
                e('span', { className: 'l' }, l.name),
                e('span', { className: 'v' }, l.level)))),
          ),
        ),
      ),
      // contact footer
      e('footer', { className: 'cv-sec cv-foot', id: 'contact', style: { borderBottom: 'none' } },
        e('div', { className: 'cv-wrap' },
          e('h2', { className: 'cv-foot-h' }, 'Давайте поработаем вместе'),
          e('div', { className: 'cv-foot-sub' }, 'Открыт к предложениям — Frontend / React · готов к релокации'),
          e('div', { className: 'cv-foot-links' },
            d.contacts.map((c) => e('a', { className: 'cv-pill', key: c.k, href: c.href, target: '_blank' },
              e('span', { className: 'k' }, ICON[c.k] || '·'), c.label))),
          e('div', { className: 'cv-foot-copy' }, '© 2026 Хамзат Добриев · собрано вручную на React'),
        ),
      ),
    );
  }
  window.WebCV = WebCV;
})();
