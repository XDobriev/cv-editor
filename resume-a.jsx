/* global React */
// Direction A — Editorial / Минимал. Serif name (Lora) + Onest body, single
// hero column then a refined 2-col body. Airy, hairline rules, terracotta used
// sparingly.
(function () {
  if (!document.getElementById('ra-styles')) {
    const s = document.createElement('style');
    s.id = 'ra-styles';
    s.textContent = `
    .ra-page{width:794px;height:1123px;background:var(--paper);color:var(--ink);
      font-family:'Onest',sans-serif;padding:44px 64px 26px;box-sizing:border-box;
      display:flex;flex-direction:column;-webkit-font-smoothing:antialiased;}
    .ra-head{display:flex;justify-content:space-between;align-items:flex-start;gap:28px;}
    .ra-eyebrow{font-size:12px;letter-spacing:.16em;text-transform:uppercase;
      color:var(--accent);font-weight:600;margin-bottom:10px;}
    .ra-name{font-family:'Lora',serif;font-weight:500;font-size:44px;line-height:1.02;
      letter-spacing:-.01em;margin:0 0 11px;color:var(--ink);}
    .ra-contacts{display:flex;flex-wrap:wrap;gap:5px 14px;font-size:12.5px;color:var(--ink2);}
    .ra-contacts a{color:var(--ink2);text-decoration:none;}
    .ra-contacts .sep{color:var(--line);}
    .ra-loc{font-size:12.5px;color:var(--muted);margin-top:9px;}
    .ra-loc b{color:var(--accent);font-weight:600;}
    .ra-photo{width:104px;height:104px;flex:0 0 auto;border:1px solid var(--line);}
    .ra-rule{height:1px;background:var(--line);border:0;margin:13px 0 11px;}
    .ra-label{font-size:11px;letter-spacing:.18em;text-transform:uppercase;
      color:var(--accent);font-weight:600;margin:0 0 12px;}
    .ra-about{font-size:13px;line-height:1.5;color:var(--ink2);margin:0;max-width:64ch;}
    .ra-cols{display:grid;grid-template-columns:1fr 252px;gap:40px;margin-top:13px;flex:1;}
    .ra-main{display:flex;flex-direction:column;}
    .ra-side{display:flex;flex-direction:column;}
    .ra-block{margin-bottom:13px;}
    .ra-block:last-child{margin-bottom:0;}
    .ra-exp{margin-bottom:10px;}
    .ra-exp:last-child{margin-bottom:0;}
    .ra-exp-top{display:flex;justify-content:space-between;align-items:baseline;gap:12px;}
    .ra-org{font-size:13.5px;font-weight:600;color:var(--ink);line-height:1.3;}
    .ra-unit{font-size:11.5px;color:var(--muted);line-height:1.3;margin-top:1px;}
    .ra-period{font-size:11px;color:var(--muted);white-space:nowrap;font-variant-numeric:tabular-nums;}
    .ra-title{font-size:12.5px;color:var(--accent);font-weight:500;margin:1px 0 7px;}
    .ra-bullets{list-style:none;margin:0;padding:0;}
    .ra-bullets li{font-size:12.5px;line-height:1.45;color:var(--ink2);
      padding-left:15px;position:relative;margin-bottom:3px;}
    .ra-bullets li:before{content:'';position:absolute;left:0;top:8px;width:4px;height:4px;
      border-radius:50%;background:var(--accent);}
    .ra-bullets b{color:var(--ink);font-weight:700;}
    .ra-proj{margin-bottom:10px;}
    .ra-proj-top{display:flex;align-items:baseline;gap:9px;}
    .ra-proj-name{font-size:13.5px;font-weight:600;color:var(--ink);}
    .ra-tag{font-size:10px;letter-spacing:.04em;text-transform:uppercase;color:var(--accent);
      border:1px solid var(--accent-line);border-radius:3px;padding:1px 6px;font-weight:600;}
    .ra-stack{font-size:11px;color:var(--muted);margin:3px 0 4px;line-height:1.4;}
    .ra-desc{font-size:12px;line-height:1.5;color:var(--ink2);margin:0;}
    .ra-links{font-size:11px;color:var(--muted);margin-top:3px;}
    .ra-techgrp{margin-bottom:13px;}
    .ra-techgrp-h{font-size:11px;font-weight:600;color:var(--ink);margin-bottom:6px;}
    .ra-chips{display:flex;flex-wrap:wrap;gap:5px;}
    .ra-chip{font-size:11px;color:var(--ink2);background:var(--accent-tint);
      border-radius:4px;padding:2.5px 8px;line-height:1.3;white-space:nowrap;}
    .ra-edu{margin-bottom:11px;}
    .ra-edu-h{font-size:12.5px;font-weight:600;color:var(--ink);}
    .ra-edu-p{font-size:11.5px;color:var(--ink2);line-height:1.4;margin:1px 0;}
    .ra-edu-d{font-size:10.5px;color:var(--muted);}
    .ra-lang{display:flex;justify-content:space-between;font-size:12.5px;
      padding:5px 0;border-bottom:1px solid var(--line);}
    .ra-lang:last-child{border-bottom:0;}
    .ra-lang .l{color:var(--ink);font-weight:500;}
    .ra-lang .v{color:var(--muted);}
    `;
    document.head.appendChild(s);
  }

  function ResumeEditorial() {
    const d = window.RESUME;
    const contacts = [];
    d.contacts.forEach((c, i) => {
      if (i) contacts.push(React.createElement('span', { key: 's' + i, className: 'sep' }, '·'));
      contacts.push(React.createElement('a', { key: c.k, href: c.href }, c.label));
    });
    return React.createElement('div', { className: 'ra-page' },
      React.createElement('header', { className: 'ra-head' },
        React.createElement('div', { className: 'ra-headmain' },
          React.createElement('div', { className: 'ra-eyebrow' }, d.role + ' · ' + d.role2),
          React.createElement('h1', { className: 'ra-name' }, d.name),
          React.createElement('div', { className: 'ra-contacts' }, contacts),
          React.createElement('div', { className: 'ra-loc', dangerouslySetInnerHTML: { __html: d.locShort + ' — <b>готов к релокации</b>' } }),
        ),
        React.createElement('image-slot', { id: 'photo-a', class: 'ra-photo', shape: 'rect', placeholder: 'фото' }),
      ),
      React.createElement('hr', { className: 'ra-rule' }),
      React.createElement('section', null,
        React.createElement('h2', { className: 'ra-label' }, 'О себе'),
        React.createElement('p', { className: 'ra-about' }, d.about),
      ),
      React.createElement('div', { className: 'ra-cols' },
        React.createElement('div', { className: 'ra-main' },
          React.createElement('div', { className: 'ra-block' },
            React.createElement('h2', { className: 'ra-label' }, 'Опыт работы'),
            d.experience.map((e, i) => React.createElement('div', { className: 'ra-exp', key: i },
              React.createElement('div', { className: 'ra-exp-top' },
                React.createElement('div', null,
                  React.createElement('div', { className: 'ra-org' }, e.org),
                  e.unit ? React.createElement('div', { className: 'ra-unit' }, e.unit) : null,
                ),
                React.createElement('div', { className: 'ra-period' }, e.period),
              ),
              React.createElement('div', { className: 'ra-title' }, e.title),
              React.createElement('ul', { className: 'ra-bullets' },
                e.bullets.map((b, j) => React.createElement('li', { key: j, dangerouslySetInnerHTML: { __html: b } })),
              ),
            )),
          ),
          React.createElement('div', { className: 'ra-block' },
            React.createElement('h2', { className: 'ra-label' }, 'Проекты'),
            d.projects.map((p, i) => React.createElement('div', { className: 'ra-proj', key: i },
              React.createElement('div', { className: 'ra-proj-top' },
                React.createElement('span', { className: 'ra-proj-name' }, p.name),
                React.createElement('span', { className: 'ra-tag' }, p.status),
              ),
              React.createElement('div', { className: 'ra-stack' }, p.stack),
              React.createElement('p', { className: 'ra-desc' }, p.desc),
              p.links ? React.createElement('div', { className: 'ra-links' }, p.links) : null,
            )),
          ),
        ),
        React.createElement('div', { className: 'ra-side' },
          React.createElement('div', { className: 'ra-block' },
            React.createElement('h2', { className: 'ra-label' }, 'Технологии'),
            d.tech.map((g, i) => React.createElement('div', { className: 'ra-techgrp', key: i },
              React.createElement('div', { className: 'ra-techgrp-h' }, g.group),
              React.createElement('div', { className: 'ra-chips' },
                g.items.map((it, j) => React.createElement('span', { className: 'ra-chip', key: j }, it)),
              ),
            )),
          ),
          React.createElement('div', { className: 'ra-block' },
            React.createElement('h2', { className: 'ra-label' }, 'Образование'),
            d.education.map((e, i) => React.createElement('div', { className: 'ra-edu', key: i },
              React.createElement('div', { className: 'ra-edu-h' }, e.school),
              React.createElement('div', { className: 'ra-edu-p' }, e.program),
              React.createElement('div', { className: 'ra-edu-d' }, e.period),
            )),
          ),
          React.createElement('div', { className: 'ra-block' },
            React.createElement('h2', { className: 'ra-label' }, 'Языки'),
            d.languages.map((l, i) => React.createElement('div', { className: 'ra-lang', key: i },
              React.createElement('span', { className: 'l' }, l.name),
              React.createElement('span', { className: 'v' }, l.level),
            )),
          ),
        ),
      ),
    );
  }
  window.ResumeEditorial = ResumeEditorial;
})();
