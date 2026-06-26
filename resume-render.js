/* ════════════════════════════════════════════════════════════
   ОБЩИЙ РЕНДЕРЕР РЕЗЮМЕ  —  единый источник истины для вёрстки.
   Используется и редактором (editor.html), и онлайн-резюме (resume.html).
   Чистые функции, глобальные (без модулей) — грузится обычным <script>.
   ════════════════════════════════════════════════════════════ */

function esc(s){
  return String(s ?? '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* inline-форматирование: **жирный**, ==выделение==, *курсив*, [текст](url),
   голые ссылки/почта, переносы строк, legacy <b>.
   Ссылки прячем во временные токены с меткой-сентинелом  (Private Use
   Area) — он не пересекается с цифрами текста, поэтому числа не портятся. */
function inlineRich(raw){
  if (raw == null) return '';
  let s = esc(String(raw));
  const toks = [];
  const stash = html => { toks.push(html); return ''+(toks.length-1)+''; };

  // markdown-ссылки [текст](url)
  s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+)\)/g,
    (m,t,u)=> stash(`<a href="${u}" target="_blank" rel="noopener">${t}</a>`));
  // голые http(s)-ссылки
  s = s.replace(/(https?:\/\/[^\s<]+)/g, (m,u)=>{
    const clean = u.replace(/[.,;:!?)]+$/,''); const tail = u.slice(clean.length);
    return stash(`<a href="${clean}" target="_blank" rel="noopener">${clean.replace(/^https?:\/\//,'')}</a>`) + tail;
  });
  // www.…
  s = s.replace(/(^|[\s(])(www\.[^\s<]+)/g, (m,pre,u)=>{
    const clean = u.replace(/[.,;:!?)]+$/,''); const tail = u.slice(clean.length);
    return pre + stash(`<a href="https://${clean}" target="_blank" rel="noopener">${clean}</a>`) + tail;
  });
  // e-mail
  s = s.replace(/([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g,
    (m,e)=> stash(`<a href="mailto:${e}">${e}</a>`));

  // legacy HTML-теги из старых данных
  s = s.replace(/&lt;b&gt;/g,'<b>').replace(/&lt;\/b&gt;/g,'</b>').replace(/&lt;br\s*\/?&gt;/g,'<br>');
  // markdown-разметка
  s = s.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
  s = s.replace(/==([^=]+)==/g, '<mark>$1</mark>');
  s = s.replace(/(^|[^*\w])\*([^*\n]+)\*/g, '$1<i>$2</i>');
  // переносы строк
  s = s.replace(/\n/g, '<br>');
  // вернуть защищённые токены
  s = s.replace(/(\d+)/g, (m,i)=> toks[+i]);
  return s;
}

/* список ссылок «avtorstudio.com · github.com/…» → кликабельные */
function linkifyList(raw){
  return String(raw||'').split(/\s*[·|,]\s*/).filter(Boolean).map(tok=>{
    const t = tok.trim();
    let href = null;
    if (/^https?:\/\//.test(t)) href = t;
    else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)) href = 'mailto:'+t;
    else if (/^[\w-]+(\.[\w-]+)+(\/\S*)?$/.test(t)) href = 'https://'+t;
    return href ? `<a href="${esc(href)}" target="_blank" rel="noopener">${esc(t)}</a>` : esc(t);
  }).join(' · ');
}

/* href для контакта по его ключу (email/tel/tg/…) */
function buildHref(key, value){
  const k = (key||'').toLowerCase().trim(); const v = (value||'').trim();
  if (!v) return null;
  if (/(email|mail|почт)/.test(k))        return 'mailto:'+v;
  if (/(tel|phone|тел)/.test(k))          return 'tel:'+v.replace(/[^\d+]/g,'');
  if (/(tg|telegram|телег)/.test(k))      return 'https://t.me/'+v.replace(/^@/,'');
  if (/(loc|город|адрес|location|где)/.test(k)) return null;
  if (/^https?:\/\//.test(v))             return v;
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'mailto:'+v;
  if (/^@?[\w.]+$/.test(v) && /(insta|behance|dribbble|linkedin|vk|habr)/.test(k))
    return 'https://'+k.replace(/[^a-z]/g,'')+'.com/'+v.replace(/^@/,'');
  if (/\./.test(v))                       return 'https://'+v;
  return null;
}

/* ── главный рендер: data (форма редактора) → внутренний HTML страницы .rc-page ── */
function renderResumeHTML(s){
  let c = 0; const num = () => String(c++).padStart(2,'0');

  const hasAbout = (s.about||'').trim();
  const expL  = (s.experience||[]).filter(e => (e.org||e.title||e.bullets||'').trim());
  const projL = (s.projects||[]).filter(p => (p.name||'').trim());
  const custL = (s.custom||[]).filter(x => (x.title||x.body||'').trim());
  const techL = (s.tech||[]).filter(t => (t.group||'').trim() && (t.items||'').trim());
  const eduL  = (s.education||[]).filter(e => (e.school||'').trim());
  const langL = (s.languages||[]).filter(l => (l.name||'').trim());

  const nAbout = hasAbout ? num() : '';
  const nExp   = expL.length ? num() : '';
  const nProj  = projL.length ? num() : '';
  const custN  = custL.map(() => num());
  const nTech  = techL.length ? num() : '';
  const nEdu   = eduL.length ? num() : '';
  const nLang  = langL.length ? num() : '';

  const metaHTML = (s.contacts||[]).filter(c=>(c.value||'').trim()).map(c=>{
    const href = buildHref(c.key, c.value);
    const inner = href ? `<a href="${esc(href)}" target="_blank" rel="noopener">${esc(c.value)}</a>` : esc(c.value);
    const key = (c.key||'').trim() ? `<span class="mk">${esc(c.key)}: </span>` : '';
    return `<span>${key}${inner}</span>`;
  }).join('');

  const p = s.profile || {};
  const photoHTML = !p.showPhoto ? ''
    : p.photo ? `<img class="rc-photo" src="${p.photo}" alt="фото">`
    : `<div class="rc-photo-ph">фото</div>`;

  const techHTML = techL.map(t=>{
    const items = t.items.split(',').map(x=>x.trim()).filter(Boolean);
    return `<div class="rc-techgrp">
      <div class="rc-tgh">${esc(t.group.toLowerCase())}</div>
      <div class="rc-chips">${items.map(it=>`<span class="rc-chip">${esc(it)}</span>`).join('')}</div>
    </div>`;
  }).join('');

  const expHTML = expL.map(e=>{
    const bullets = (e.bullets||'').split('\n').map(x=>x.trim()).filter(Boolean);
    return `<div class="rc-exp">
      <div class="rc-exp-top">
        <div>
          <div class="rc-org">${esc(e.org)}</div>
          ${(e.unit||'').trim()?`<div class="rc-unit">${esc(e.unit)}</div>`:''}
        </div>
        ${(e.period||'').trim()?`<div class="rc-period">${esc(e.period)}</div>`:''}
      </div>
      ${(e.title||'').trim()?`<div class="rc-title">${esc(e.title)}</div>`:''}
      ${bullets.length?`<ul class="rc-bullets">${bullets.map(b=>`<li>${inlineRich(b)}</li>`).join('')}</ul>`:''}
    </div>`;
  }).join('');

  const projHTML = projL.map(p=>`
    <div class="rc-proj">
      <div class="rc-proj-top">
        <span class="rc-proj-name">${esc(p.name)}</span>
        ${(p.status||'').trim()?`<span class="rc-tag">${esc(p.status)}</span>`:''}
      </div>
      ${(p.stack||'').trim()?`<div class="rc-stack">${esc(p.stack)}</div>`:''}
      ${(p.desc||'').trim()?`<p class="rc-desc">${inlineRich(p.desc)}</p>`:''}
      ${(p.links||'').trim()?`<div class="rc-links">${linkifyList(p.links)}</div>`:''}
    </div>`).join('');

  const custHTML = custL.map((x,i)=>`
    <div class="rc-block">
      <h2 class="rc-sechead"><span class="idx">${custN[i]}</span> ${esc(x.title||'')}</h2>
      <p class="rc-desc">${inlineRich(x.body)}</p>
    </div>`).join('');

  const eduHTML = eduL.map(e=>`
    <div class="rc-edu">
      <div class="rc-edu-h">${esc(e.school)}</div>
      ${(e.prog||'').trim()?`<div class="rc-edu-p">${inlineRich(e.prog)}</div>`:''}
      ${(e.period||'').trim()?`<div class="rc-edu-d">${esc(e.period)}</div>`:''}
    </div>`).join('');

  const langHTML = langL.map(l=>`
    <div class="rc-lang"><span class="l">${esc(l.name)}</span><span class="v">${esc(l.level)}</span></div>`).join('');

  const block = (n, title, html) => html ? `<div class="rc-block"><h2 class="rc-sechead"><span class="idx">${n}</span> ${title}</h2>${html}</div>` : '';

  const leftCol  = block(nExp,'Опыт работы',expHTML) + block(nProj,'Проекты',projHTML) + custHTML;
  const rightCol = block(nTech,'Стек',techHTML) + block(nEdu,'Образование',eduHTML) + block(nLang,'Языки',langHTML);

  return `
    <header class="rc-head">
      <div class="rc-headl">
        ${(p.tagline||'').trim()?`<div class="rc-tagline"><span class="br">&lt;</span> ${esc(p.tagline)} <span class="br">/&gt;</span></div>`:''}
        <h1 class="rc-name">${esc(p.name)}</h1>
        <div class="rc-sub">${esc(p.role)}${(p.reloc||'').trim()?` — ${esc(p.reloc)}`:''}</div>
      </div>
      ${photoHTML}
    </header>
    <div class="rc-meta">${metaHTML}</div>
    <div class="rc-divider"></div>
    ${hasAbout?`<section style="margin-bottom:14px">
      <h2 class="rc-sechead"><span class="idx">${nAbout}</span> О себе</h2>
      <p class="rc-desc" style="max-width:74ch">${inlineRich(s.about)}</p>
    </section>`:''}
    <div class="rc-cols">
      <div class="${leftCol.trim()?'':'rc-col-empty'}">${leftCol}</div>
      <div class="${rightCol.trim()?'':'rc-col-empty'}">${rightCol}</div>
    </div>
  `;
}

// доступно и как CommonJS (для node-тестов), и как глобал (в браузере)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { esc, inlineRich, linkifyList, buildHref, renderResumeHTML };
}
