/* global React */
// Direction C — Dev / Techno. IBM Plex Sans body + IBM Plex Mono for labels,
// meta and chips. Structured grid, numbered sections, monospace stack tags.
(function () {
  if (!document.getElementById('rc-styles')) {
    const s = document.createElement('style');
    s.id = 'rc-styles';
    s.textContent = `
    .rc-page{width:794px;height:1123px;background:var(--paper);color:var(--ink);
      font-family:'IBM Plex Sans',sans-serif;padding:44px 56px 48px;box-sizing:border-box;
      display:flex;flex-direction:column;-webkit-font-smoothing:antialiased;
      border-top:4px solid var(--accent);}
    .rc-mono{font-family:'IBM Plex Mono',monospace;}
    .rc-head{display:flex;justify-content:space-between;align-items:flex-start;gap:26px;}
    .rc-headl{min-width:0;}
    .rc-tagline{font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:var(--accent);
      letter-spacing:.02em;margin-bottom:9px;}
    .rc-tagline .br{color:var(--muted);}
    .rc-name{font-size:40px;font-weight:600;line-height:1.02;letter-spacing:-.02em;margin:0;color:var(--ink);}
    .rc-sub{font-size:13px;color:var(--ink2);margin-top:7px;font-weight:500;}
    .rc-photo{width:100px;height:100px;flex:0 0 auto;border:1px solid var(--line);}
    .rc-meta{display:flex;flex-wrap:wrap;gap:4px 22px;margin-top:16px;
      font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--ink2);}
    .rc-meta .mk{color:var(--muted);}
    .rc-meta a{color:var(--ink2);text-decoration:none;}
    .rc-divider{height:1px;background:var(--line);margin:18px 0;}
    .rc-cols{display:grid;grid-template-columns:1fr 246px;gap:38px;flex:1;}
    .rc-sechead{font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.1em;
      text-transform:uppercase;color:var(--ink);font-weight:600;margin:0 0 13px;
      display:flex;align-items:center;gap:8px;}
    .rc-sechead .idx{color:var(--accent);}
    .rc-block{margin-bottom:16px;}
    .rc-block:last-child{margin-bottom:0;}
    .rc-exp{margin-bottom:10px;}
    .rc-exp:last-child{margin-bottom:0;}
    .rc-exp-top{display:flex;justify-content:space-between;align-items:baseline;gap:12px;}
    .rc-org{font-size:13px;font-weight:600;color:var(--ink);line-height:1.3;}
    .rc-unit{font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--muted);line-height:1.3;margin-top:1px;}
    .rc-period{font-family:'IBM Plex Mono',monospace;font-size:10.5px;color:var(--muted);white-space:nowrap;}
    .rc-title{font-size:12px;color:var(--accent-deep);font-weight:500;margin:1px 0 7px;}
    .rc-bullets{list-style:none;margin:0;padding:0;}
    .rc-bullets li{font-size:12px;line-height:1.45;color:var(--ink2);padding-left:18px;position:relative;margin-bottom:4px;}
    .rc-bullets li:before{content:'→';position:absolute;left:0;top:0;color:var(--accent);
      font-family:'IBM Plex Mono',monospace;font-size:11px;}
    .rc-bullets b{color:var(--ink);font-weight:700;font-family:'IBM Plex Mono',monospace;font-size:11.5px;}
    .rc-proj{margin-bottom:11px;}
    .rc-proj-top{display:flex;align-items:baseline;gap:9px;}
    .rc-proj-name{font-size:13px;font-weight:600;color:var(--ink);}
    .rc-tag{font-family:'IBM Plex Mono',monospace;font-size:9.5px;letter-spacing:.02em;color:var(--accent);
      border:1px solid var(--accent-line);border-radius:2px;padding:1.5px 6px;}
    .rc-stack{font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--muted);margin:3px 0 4px;line-height:1.45;}
    .rc-desc{font-size:11.5px;line-height:1.45;color:var(--ink2);margin:0;}
    .rc-links{font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--muted);margin-top:3px;}
    .rc-techgrp{margin-bottom:13px;}
    .rc-tgh{font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:.04em;color:var(--accent-deep);
      margin-bottom:6px;text-transform:lowercase;}
    .rc-tgh:before{content:'# ';color:var(--accent);}
    .rc-chips{display:flex;flex-wrap:wrap;gap:5px;}
    .rc-chip{font-family:'IBM Plex Mono',monospace;font-size:10.5px;color:var(--ink2);
      border:1px solid var(--line);border-radius:3px;padding:2px 7px;line-height:1.3;background:#fff;white-space:nowrap;}
    .rc-edu{margin-bottom:11px;}
    .rc-edu-h{font-size:12px;font-weight:600;color:var(--ink);}
    .rc-edu-p{font-size:11px;color:var(--ink2);line-height:1.4;margin:1px 0;}
    .rc-edu-d{font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--muted);}
    .rc-lang{display:flex;justify-content:space-between;font-size:12px;padding:5px 0;border-bottom:1px solid var(--line);}
    .rc-lang:last-child{border-bottom:0;}
    .rc-lang .l{color:var(--ink);font-weight:500;}
    .rc-lang .v{font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--muted);}
    `;
    document.head.appendChild(s);
  }

  function ResumeDev() {
    const d = window.RESUME;
    const metaItems = [
      { mk: 'loc', v: 'Назрань · удалённо' },
      ...d.contacts.map((c) => ({ mk: ({ email: 'email', phone: 'tel', tg: 'tg', gh: 'git', site: 'web' }[c.k] || c.k), v: c.label, href: c.href })),
    ];
    return React.createElement('div', { className: 'rc-page' },
      React.createElement('header', { className: 'rc-head' },
        React.createElement('div', { className: 'rc-headl' },
          React.createElement('div', { className: 'rc-tagline' },
            React.createElement('span', { className: 'br' }, '<'),
            'react · typescript · 4+ yrs',
            React.createElement('span', { className: 'br' }, ' />'),
          ),
          React.createElement('h1', { className: 'rc-name' }, d.name),
          React.createElement('div', { className: 'rc-sub' }, d.role + ' — готов к релокации'),
        ),
        React.createElement('image-slot', { id: 'photo-c', class: 'rc-photo', shape: 'rect', placeholder: 'фото' }),
      ),
      React.createElement('div', { className: 'rc-meta' },
        metaItems.map((m, i) => React.createElement('span', { key: i },
          React.createElement('span', { className: 'mk' }, m.mk + ': '),
          m.href ? React.createElement('a', { href: m.href }, m.v) : m.v,
        )),
      ),
      React.createElement('div', { className: 'rc-divider' }),
      React.createElement('section', { style: { marginBottom: 14 } },
        React.createElement('h2', { className: 'rc-sechead' },
          React.createElement('span', { className: 'idx' }, '00'), 'О себе'),
        React.createElement('p', { className: 'rc-desc', style: { maxWidth: '74ch' } }, d.about),
      ),
      React.createElement('div', { className: 'rc-cols' },
        React.createElement('div', null,
          React.createElement('div', { className: 'rc-block' },
            React.createElement('h2', { className: 'rc-sechead' },
              React.createElement('span', { className: 'idx' }, '01'), 'Опыт работы'),
            d.experience.map((e, i) => React.createElement('div', { className: 'rc-exp', key: i },
              React.createElement('div', { className: 'rc-exp-top' },
                React.createElement('div', null,
                  React.createElement('div', { className: 'rc-org' }, e.org),
                  e.unit ? React.createElement('div', { className: 'rc-unit' }, e.unit) : null,
                ),
                React.createElement('div', { className: 'rc-period' }, e.period),
              ),
              React.createElement('div', { className: 'rc-title' }, e.title),
              React.createElement('ul', { className: 'rc-bullets' },
                e.bullets.map((b, j) => React.createElement('li', { key: j, dangerouslySetInnerHTML: { __html: b } })),
              ),
            )),
          ),
          React.createElement('div', { className: 'rc-block' },
            React.createElement('h2', { className: 'rc-sechead' },
              React.createElement('span', { className: 'idx' }, '02'), 'Проекты'),
            d.projects.map((p, i) => React.createElement('div', { className: 'rc-proj', key: i },
              React.createElement('div', { className: 'rc-proj-top' },
                React.createElement('span', { className: 'rc-proj-name' }, p.name),
                React.createElement('span', { className: 'rc-tag' }, p.status),
              ),
              React.createElement('div', { className: 'rc-stack' }, p.stack),
              React.createElement('p', { className: 'rc-desc' }, p.desc),
              p.links ? React.createElement('div', { className: 'rc-links' }, p.links) : null,
            )),
          ),
        ),
        React.createElement('div', null,
          React.createElement('div', { className: 'rc-block' },
            React.createElement('h2', { className: 'rc-sechead' },
              React.createElement('span', { className: 'idx' }, '03'), 'Стек'),
            d.tech.map((g, i) => React.createElement('div', { className: 'rc-techgrp', key: i },
              React.createElement('div', { className: 'rc-tgh' }, g.group),
              React.createElement('div', { className: 'rc-chips' },
                g.items.map((it, j) => React.createElement('span', { className: 'rc-chip', key: j }, it)),
              ),
            )),
          ),
          React.createElement('div', { className: 'rc-block' },
            React.createElement('h2', { className: 'rc-sechead' },
              React.createElement('span', { className: 'idx' }, '04'), 'Образование'),
            d.education.map((e, i) => React.createElement('div', { className: 'rc-edu', key: i },
              React.createElement('div', { className: 'rc-edu-h' }, e.school),
              React.createElement('div', { className: 'rc-edu-p' }, e.program),
              React.createElement('div', { className: 'rc-edu-d' }, e.period),
            )),
          ),
          React.createElement('div', { className: 'rc-block' },
            React.createElement('h2', { className: 'rc-sechead' },
              React.createElement('span', { className: 'idx' }, '05'), 'Языки'),
            d.languages.map((l, i) => React.createElement('div', { className: 'rc-lang', key: i },
              React.createElement('span', { className: 'l' }, l.name),
              React.createElement('span', { className: 'v' }, l.level),
            )),
          ),
        ),
      ),
    );
  }
  window.ResumeDev = ResumeDev;
})();
