/* global React */
// Direction B — Warm sidebar. Manrope throughout. Soft terracotta-tinted
// sidebar (photo, contacts, tech, languages) + main column (about, experience,
// projects, education).
(function () {
  if (!document.getElementById('rb-styles')) {
    const s = document.createElement('style');
    s.id = 'rb-styles';
    s.textContent = `
    .rb-page{width:794px;height:1123px;background:var(--paper);color:var(--ink);
      font-family:'Manrope',sans-serif;display:flex;box-sizing:border-box;
      -webkit-font-smoothing:antialiased;}
    .rb-side{width:286px;flex:0 0 auto;background:var(--sidebar);
      padding:30px 28px;box-sizing:border-box;display:flex;flex-direction:column;gap:13px;}
    .rb-photo{width:116px;height:116px;align-self:center;border:3px solid #fff;
      box-shadow:0 4px 18px rgba(120,60,30,.16);}
    .rb-sgroup{}
    .rb-sh{font-size:11px;letter-spacing:.16em;text-transform:uppercase;font-weight:700;
      color:var(--accent);margin:0 0 12px;padding-bottom:7px;border-bottom:1px solid var(--accent-line);}
    .rb-contact{display:flex;flex-direction:column;gap:9px;}
    .rb-crow{font-size:12px;color:var(--ink2);line-height:1.3;word-break:break-word;}
    .rb-crow .ck{display:block;font-size:9.5px;letter-spacing:.08em;text-transform:uppercase;
      color:var(--muted);margin-bottom:1px;}
    .rb-crow a{color:var(--ink);text-decoration:none;font-weight:600;}
    .rb-techgrp{margin-bottom:13px;}
    .rb-techgrp:last-child{margin-bottom:0;}
    .rb-tgh{font-size:11px;font-weight:700;color:var(--ink);margin-bottom:6px;}
    .rb-chips{display:flex;flex-wrap:wrap;gap:5px;}
    .rb-chip{font-size:10.5px;color:var(--accent-deep);background:#fff;
      border:1px solid var(--accent-line);border-radius:4px;padding:2.5px 7px;line-height:1.25;font-weight:600;white-space:nowrap;}
    .rb-lang{display:flex;justify-content:space-between;font-size:12px;padding:6px 0;
      border-bottom:1px solid var(--accent-line);}
    .rb-lang:last-child{border-bottom:0;}
    .rb-lang .l{color:var(--ink);font-weight:600;}
    .rb-lang .v{color:var(--muted);}

    .rb-main{flex:1;padding:30px 42px 20px;box-sizing:border-box;display:flex;flex-direction:column;min-width:0;}
    .rb-eyebrow{font-size:12px;letter-spacing:.16em;text-transform:uppercase;
      color:var(--accent);font-weight:700;margin-bottom:8px;}
    .rb-name{font-size:42px;font-weight:800;line-height:1;letter-spacing:-.025em;margin:0;color:var(--ink);}
    .rb-name span{display:block;}
    .rb-about{font-size:12.5px;line-height:1.5;color:var(--ink2);margin:12px 0 0;}
    .rb-label{font-size:11px;letter-spacing:.16em;text-transform:uppercase;font-weight:700;
      color:var(--accent);margin:11px 0 7px;display:flex;align-items:center;gap:10px;}
    .rb-label:after{content:'';flex:1;height:1px;background:var(--line);}
    .rb-exp{margin-bottom:8px;}
    .rb-exp:last-child{margin-bottom:0;}
    .rb-exp-top{display:flex;justify-content:space-between;align-items:baseline;gap:12px;}
    .rb-org{font-size:13px;font-weight:700;color:var(--ink);line-height:1.3;}
    .rb-unit{font-size:11px;color:var(--muted);line-height:1.3;margin-top:1px;font-weight:600;}
    .rb-period{font-size:10.5px;color:var(--muted);white-space:nowrap;font-weight:600;font-variant-numeric:tabular-nums;}
    .rb-title{font-size:12px;color:var(--accent-deep);font-weight:600;margin:1px 0 7px;}
    .rb-bullets{list-style:none;margin:0;padding:0;}
    .rb-bullets li{font-size:12px;line-height:1.4;color:var(--ink2);padding-left:15px;position:relative;margin-bottom:2.5px;}
    .rb-bullets li:before{content:'';position:absolute;left:0;top:7px;width:5px;height:5px;
      border-radius:1px;background:var(--accent);transform:rotate(45deg);}
    .rb-bullets b{color:var(--ink);font-weight:800;}
    .rb-proj{margin-bottom:8px;}
    .rb-proj-top{display:flex;align-items:baseline;gap:9px;}
    .rb-proj-name{font-size:13px;font-weight:700;color:var(--ink);}
    .rb-tag{font-size:9.5px;letter-spacing:.04em;text-transform:uppercase;color:#fff;
      background:var(--accent);border-radius:3px;padding:2px 7px;font-weight:700;}
    .rb-stack{font-size:10.5px;color:var(--muted);margin:3px 0 4px;line-height:1.4;}
    .rb-desc{font-size:11.5px;line-height:1.5;color:var(--ink2);margin:0;}
    .rb-links{font-size:10.5px;color:var(--accent-deep);margin-top:3px;font-weight:600;}
    .rb-edu{margin-bottom:8px;display:flex;justify-content:space-between;gap:14px;align-items:baseline;}
    .rb-edu .t .h{font-size:12.5px;font-weight:700;color:var(--ink);}
    .rb-edu .t .p{font-size:11.5px;color:var(--ink2);line-height:1.4;}
    .rb-edu .d{font-size:10.5px;color:var(--muted);white-space:nowrap;font-weight:600;}
    `;
    document.head.appendChild(s);
  }

  function ResumeSidebar() {
    const d = window.RESUME;
    return React.createElement('div', { className: 'rb-page' },
      React.createElement('aside', { className: 'rb-side' },
        React.createElement('image-slot', { id: 'photo-b', class: 'rb-photo', shape: 'circle', placeholder: 'фото' }),
        React.createElement('div', { className: 'rb-sgroup' },
          React.createElement('h3', { className: 'rb-sh' }, 'Контакты'),
          React.createElement('div', { className: 'rb-contact' },
            React.createElement('div', { className: 'rb-crow' }, d.locShort + ' · готов к релокации'),
            d.contacts.map((c) => React.createElement('div', { className: 'rb-crow', key: c.k },
              React.createElement('span', { className: 'ck' }, c.sub || ({ email: 'E-mail', phone: 'Телефон', gh: 'GitHub', site: 'Сайт' }[c.k] || '')),
              React.createElement('a', { href: c.href }, c.label),
            )),
          ),
        ),
        React.createElement('div', { className: 'rb-sgroup' },
          React.createElement('h3', { className: 'rb-sh' }, 'Технологии'),
          d.tech.map((g, i) => React.createElement('div', { className: 'rb-techgrp', key: i },
            React.createElement('div', { className: 'rb-tgh' }, g.group),
            React.createElement('div', { className: 'rb-chips' },
              g.items.map((it, j) => React.createElement('span', { className: 'rb-chip', key: j }, it)),
            ),
          )),
        ),
        React.createElement('div', { className: 'rb-sgroup' },
          React.createElement('h3', { className: 'rb-sh' }, 'Языки'),
          d.languages.map((l, i) => React.createElement('div', { className: 'rb-lang', key: i },
            React.createElement('span', { className: 'l' }, l.name),
            React.createElement('span', { className: 'v' }, l.level),
          )),
        ),
      ),
      React.createElement('div', { className: 'rb-main' },
        React.createElement('div', { className: 'rb-eyebrow' }, d.role + ' · ' + d.role2),
        React.createElement('h1', { className: 'rb-name' },
          React.createElement('span', null, 'Хамзат'),
          React.createElement('span', null, 'Добриев'),
        ),
        React.createElement('p', { className: 'rb-about' }, d.about),
        React.createElement('h2', { className: 'rb-label' }, 'Опыт работы'),
        d.experience.map((e, i) => React.createElement('div', { className: 'rb-exp', key: i },
          React.createElement('div', { className: 'rb-exp-top' },
            React.createElement('div', null,
              React.createElement('div', { className: 'rb-org' }, e.org),
              e.unit ? React.createElement('div', { className: 'rb-unit' }, e.unit) : null,
            ),
            React.createElement('div', { className: 'rb-period' }, e.period),
          ),
          React.createElement('div', { className: 'rb-title' }, e.title),
          React.createElement('ul', { className: 'rb-bullets' },
            e.bullets.map((b, j) => React.createElement('li', { key: j, dangerouslySetInnerHTML: { __html: b } })),
          ),
        )),
        React.createElement('h2', { className: 'rb-label' }, 'Проекты'),
        d.projects.map((p, i) => React.createElement('div', { className: 'rb-proj', key: i },
          React.createElement('div', { className: 'rb-proj-top' },
            React.createElement('span', { className: 'rb-proj-name' }, p.name),
            React.createElement('span', { className: 'rb-tag' }, p.status),
          ),
          React.createElement('div', { className: 'rb-stack' }, p.stack),
          React.createElement('p', { className: 'rb-desc' }, p.desc),
          p.links ? React.createElement('div', { className: 'rb-links' }, p.links) : null,
        )),
        React.createElement('h2', { className: 'rb-label' }, 'Образование'),
        d.education.map((e, i) => React.createElement('div', { className: 'rb-edu', key: i },
          React.createElement('div', { className: 't' },
            React.createElement('div', { className: 'h' }, e.school),
            React.createElement('div', { className: 'p' }, e.program),
          ),
          React.createElement('div', { className: 'd' }, e.period),
        )),
      ),
    );
  }
  window.ResumeSidebar = ResumeSidebar;
})();
