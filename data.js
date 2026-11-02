<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Stream Menu</title>
<meta name="description" content="Every chat command, redeem and game on Drewdj4's stream — click to copy, paste in chat, cause problems.">
<meta name="theme-color" content="#040604">
<meta name="color-scheme" content="dark">
<meta property="og:title" content="Drewdj4 — Stream Menu">
<meta property="og:description" content="Every command, redeem and game. Click any command to copy it. 🥚">
<meta property="og:type" content="website">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🥚</text></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=VT323&display=swap" rel="stylesheet">
<style>
  :root {
    /* Terminal Green — the base palette. Swap these 8 values, not the whole file. */
    --ink: #040604;
    --panel: #0d120d;
    --olive: #596B0A;
    --bone: #E2EAD4;
    --sage: #9eb39b;
    --green: #2BA61E;
    --chartreuse: #CCCD25;
    --amber: #946606;

    /* Derived tints. Keep color decisions in this block. */
    --line: rgba(89, 107, 10, 0.42);
    --green-soft: rgba(43, 166, 30, 0.12);
    --green-line: rgba(43, 166, 30, 0.55);
    --chartreuse-soft: rgba(204, 205, 37, 0.13);
    --chartreuse-line: rgba(204, 205, 37, 0.5);
    --amber-soft: rgba(148, 102, 6, 0.2);
    --sage-soft: rgba(158, 179, 155, 0.08);

    color-scheme: dark;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }

  body {
    background: var(--ink);
    color: var(--bone);
    font-family: 'Share Tech Mono', ui-monospace, monospace;
    line-height: 1.6;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  ::selection { background: var(--chartreuse); color: var(--ink); }
  .wrap { max-width: 1040px; margin: 0 auto; padding: 32px 20px 80px; }
  .hidden { display: none !important; }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  a:focus-visible,
  button:focus-visible,
  input:focus-visible,
  summary:focus-visible {
    outline: 2px solid var(--chartreuse);
    outline-offset: 2px;
  }

  /* ---------- header ---------- */
  header { text-align: center; padding: 40px 0 12px; }
  header h1 {
    font-family: 'VT323', monospace;
    font-size: clamp(2.75rem, 7vw, 4.5rem);
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--chartreuse);
  }
  header h1 span { color: var(--green); }
  .cursor { color: var(--chartreuse); animation: blink 1.1s steps(1) infinite; }
  @keyframes blink { 50% { opacity: 0; } }

  .updated { color: var(--sage); font-size: 0.95rem; margin-top: 8px; letter-spacing: 0.5px; }

  .links { margin-top: 18px; display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
  .links a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    padding: 6px 16px;
    border: 1px solid var(--olive);
    border-radius: 4px;
    color: var(--chartreuse);
    background: transparent;
    text-decoration: none;
    font-size: 1rem;
    transition: background 0.18s, color 0.18s, border-color 0.18s;
  }
  .links a:hover {
    background: var(--chartreuse);
    border-color: var(--chartreuse);
    color: var(--ink);
  }

  .intro {
    background: var(--panel);
    border: 1px solid var(--olive);
    border-left: 4px solid var(--green);
    border-radius: 6px;
    padding: 20px 24px;
    margin-top: 24px;
    font-size: 1.05rem;
    text-align: left;
    color: var(--bone);
  }
  .intro b { color: var(--chartreuse); }

  /* ---------- controls ---------- */
  .controls {
    position: sticky;
    top: 0;
    z-index: 20;
    padding: 16px 0 14px;
    background: var(--ink);
    border-bottom: 1px solid var(--olive);
    margin-top: 24px;
  }

  #search {
    width: 100%;
    min-height: 46px;
    padding: 12px 16px;
    border: 1px solid var(--olive);
    border-radius: 4px;
    background: var(--panel);
    color: var(--bone);
    font-family: inherit;
    font-size: 1.05rem;
    transition: border-color 0.18s;
  }
  #search::placeholder { color: var(--sage); }
  #search:focus { outline: none; border-color: var(--chartreuse); }
  #search:focus-visible { outline: 2px solid var(--chartreuse); outline-offset: 0; }

  .chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
  .chip {
    display: inline-flex;
    align-items: center;
    min-height: 38px;
    padding: 6px 14px;
    border: 1px solid var(--line);
    border-radius: 4px;
    background: var(--panel);
    color: var(--bone);
    cursor: pointer;
    font-family: inherit;
    font-size: 0.9rem;
    transition: background 0.15s, color 0.15s, border-color 0.15s;
  }
  .chip:hover { border-color: var(--green); }
  .chip.active {
    background: var(--chartreuse);
    border-color: var(--chartreuse);
    color: var(--ink);
    font-weight: 700;
  }

  /* ---------- sections ---------- */
  .section { margin-top: 36px; }
  .section > summary,
  .changelog > summary {
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 44px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--olive);
    list-style: none;
    cursor: pointer;
  }
  .section > summary::-webkit-details-marker,
  .changelog > summary::-webkit-details-marker { display: none; }

  .section > summary h2,
  .changelog > summary h2 {
    flex: 1;
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--chartreuse);
    font-family: 'VT323', monospace;
  }
  .section > summary h2 { display: flex; align-items: baseline; gap: 12px; }

  .section > summary::after,
  .changelog > summary::after {
    content: "▾";
    flex-shrink: 0;
    color: var(--sage);
    font-size: 1rem;
    line-height: 1;
  }
  .section:not([open]) > summary::after,
  .changelog:not([open]) > summary::after { content: "▸"; }

  h2 .count {
    color: var(--sage);
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.95rem;
    font-weight: 400;
    letter-spacing: 0;
    text-transform: none;
    white-space: nowrap;
  }

  .note {
    margin-top: 16px;
    padding: 12px 16px;
    border: 1px dashed var(--olive);
    border-radius: 4px;
    background: var(--panel);
    color: var(--bone);
    font-size: 0.95rem;
  }
  .note b { color: var(--chartreuse); }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 14px;
    margin-top: 16px;
  }

  /* ---------- cards ---------- */
  .card {
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 4px;
    padding: 16px 18px;
    transition: border-color 0.18s;
  }
  .card:hover { border-color: var(--green); }
  .card.disabled { opacity: 0.7; cursor: not-allowed; }
  .card.disabled:hover { border-color: var(--line); }

  .card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 8px;
  }

  .name {
    appearance: none;
    -webkit-appearance: none;
    min-width: 0;
    margin: -6px 0;
    padding: 6px 0;
    border: 0;
    background: none;
    color: var(--chartreuse);
    font-family: inherit;
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.35;
    text-align: left;
    overflow-wrap: anywhere;
    word-break: break-word;
    user-select: none;
    cursor: pointer;
    transition: color 0.15s;
  }
  .name:hover { color: var(--green); }
  .name.copied { color: var(--green); }
  .card.disabled .name { color: var(--sage); cursor: not-allowed; }
  .card.disabled .name:hover { color: var(--sage); }

  .cost {
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    padding: 2px 8px;
    border: 1px solid transparent;
    border-radius: 4px;
    font-size: 0.85rem;
    font-weight: 700;
    line-height: 1.5;
    white-space: nowrap;
  }
  .cost-num {
    background: var(--chartreuse-soft);
    border-color: var(--chartreuse-line);
    color: var(--chartreuse);
  }
  .cost-free {
    background: var(--green-soft);
    border-color: var(--green-line);
    color: var(--green);
  }
  .cost-tbc {
    background: var(--amber);
    border-color: var(--amber);
    color: var(--bone);
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .cost-text {
    background: var(--sage-soft);
    border-color: var(--line);
    color: var(--sage);
  }

  .desc {
    margin-bottom: 12px;
    color: var(--sage);
    font-size: 1rem;
    line-height: 1.55;
  }

  .meta { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; font-size: 0.78rem; }
  .badge {
    padding: 2px 8px;
    border: 1px solid transparent;
    border-radius: 4px;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 1.5;
    text-transform: uppercase;
  }
  .b-new { background: var(--chartreuse); border-color: var(--chartreuse); color: var(--ink); }
  .b-updated { background: var(--amber); border-color: var(--amber); color: var(--bone); }
  .b-mod { background: var(--amber-soft); border-color: var(--amber); color: var(--bone); }
  .b-broadcaster { background: var(--sage-soft); border-color: var(--olive); color: var(--bone); }
  .b-vip { background: var(--green-soft); border-color: var(--green); color: var(--green); }
  .b-off { background: var(--sage-soft); border-color: var(--line); color: var(--sage); }
  .b-soon { background: var(--sage-soft); border-color: var(--line); color: var(--sage); }

  .cool {
    padding: 2px 8px;
    border: 1px solid var(--line);
    border-radius: 4px;
    background: var(--sage-soft);
    color: var(--sage);
    font-size: 0.75rem;
  }

  .empty {
    padding: 48px 0;
    color: var(--sage);
    font-size: 1.1rem;
    text-align: center;
  }

  /* ---------- changelog & footer ---------- */
  .changelog { margin-top: 48px; }
  .changelog > summary h2 { flex: 0 0 auto; font-size: 1.6rem; }
  .changelog .latest {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--sage);
    font-size: 0.9rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .changelog .latest .date { color: var(--chartreuse); font-weight: 700; }

  .change {
    margin-top: 16px;
    padding: 16px 20px;
    border: 1px solid var(--line);
    border-radius: 4px;
    background: var(--panel);
  }
  .change ul { padding-left: 20px; }
  .change li { margin-top: 8px; color: var(--bone); font-size: 1rem; }
  .change li:first-child { margin-top: 0; }
  .change .date { color: var(--chartreuse); font-weight: 700; }

  footer {
    margin-top: 56px;
    color: var(--sage);
    font-size: 0.95rem;
    line-height: 2;
    text-align: center;
  }
  footer b { color: var(--chartreuse); }

  /* ---------- mobile ---------- */
  @media (max-width: 650px) {
    .wrap { padding: 16px 12px 60px; }
    header { padding: 24px 0 12px; }
    header h1 { font-size: 2.5rem; letter-spacing: 0; }
    .links { gap: 8px; margin-top: 12px; }
    .links a { min-height: 44px; padding: 8px 12px; font-size: 0.9rem; }
    .intro { padding: 16px; font-size: 0.95rem; margin-top: 16px; }

    .controls { padding: 12px 0 10px; margin-top: 16px; }
    #search { min-height: 46px; padding: 10px 12px; font-size: 1rem; }

    .chips {
      flex-wrap: nowrap;
      overflow-x: auto;
      padding-bottom: 6px;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
    .chips::-webkit-scrollbar { display: none; }
    .chip { flex-shrink: 0; min-height: 44px; padding: 8px 12px; font-size: 0.85rem; }

    .section { margin-top: 28px; }
    .section > summary { min-height: 48px; }
    .section > summary h2 { font-size: 1.55rem; }

    .grid { grid-template-columns: 1fr; gap: 10px; }
    .card { padding: 14px; }
    .name { display: flex; align-items: center; min-height: 44px; font-size: 1.05rem; }
    .desc { font-size: 0.95rem; }

    .changelog { margin-top: 36px; }
    .changelog > summary { flex-wrap: wrap; gap: 4px 10px; }
    .changelog .latest { flex-basis: 100%; font-size: 0.8rem; }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    .cursor { animation: none; }
  }
</style>
</head>
<body>
<div class="wrap">
  <header>
    <h1 id="title"></h1>
    <div class="updated" id="updated"></div>
    <div class="links" id="links"></div>
    <div class="intro" id="intro" style="display:none"></div>
  </header>

  <div class="controls">
    <input id="search" type="search" placeholder="Search commands… ( / )" aria-label="Search commands" autocomplete="off" spellcheck="false" enterkeyhint="search">
    <div class="chips" id="chips" role="group" aria-label="Filter by section"></div>
  </div>

  <main id="menu"></main>
  <p class="empty hidden" id="empty" role="status">No commands match — the bot judges your spelling</p>
  <span id="copyStatus" class="sr-only" aria-live="polite"></span>
  <div id="changelogMount"></div>

  <footer>
    Type <b>!c</b> in chat for the quick version<br>
    Last updated: <span id="footerUpdated"></span><br>
    No backend • No trackers • Edit <b>data.js</b> • Time to Gamer bruhmane
  </footer>
</div>

<script src="data.js?v=4"></script>
<script>
(function () {
  const data = window.MENU;
  const menuEl = document.getElementById('menu');
  const searchEl = document.getElementById('search');
  const controlsEl = document.querySelector('.controls');
  const emptyEl = document.getElementById('empty');
  const copyStatus = document.getElementById('copyStatus');
  const mobileQuery = window.matchMedia('(max-width: 650px)');

  const esc = s => String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  if (!data) {
    menuEl.innerHTML = '<p class="empty">data.js failed to load. Check for a missing comma.</p>';
    return;
  }

  /* ---------- header ---------- */
  const streamer = data.streamer || 'Drewdj4';
  document.getElementById('title').innerHTML =
    `${esc(streamer)}'s <span>Stream Menu</span><span class="cursor" aria-hidden="true">_</span>`;
  document.title = `${streamer} — Stream Menu`;

  const updated = data.updated || 'unknown';
  document.getElementById('updated').textContent = `Last updated: ${updated}`;
  document.getElementById('footerUpdated').textContent = updated;

  (data.links || []).forEach(l => {
    const a = document.createElement('a');
    a.href = l.url;
    a.target = '_blank';
    a.rel = 'noopener';
    a.textContent = l.label;
    document.getElementById('links').appendChild(a);
  });

  if (data.intro) {
    const el = document.getElementById('intro');
    el.innerHTML = data.intro;
    el.style.display = 'block';
  }

  /* ---------- chips ---------- */
  let activeSection = 'All';
  const chipsEl = document.getElementById('chips');
  const chipButtons = [];
  ['All', ...(data.sections || []).map(s => s.name)].forEach(name => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip' + (name === 'All' ? ' active' : '');
    b.textContent = name;
    b.dataset.filter = name;
    b.setAttribute('aria-pressed', name === 'All' ? 'true' : 'false');
    b.addEventListener('click', () => {
      activeSection = name;
      chipButtons.forEach(c => {
        const on = c.dataset.filter === name;
        c.classList.toggle('active', on);
        c.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      render();
      scrollToResults();
    });
    chipsEl.appendChild(b);
    chipButtons.push(b);
  });

  /* ---------- badges: exact role-lock strings only ---------- */
  function badge(it) {
    if (it.status === 'new') return '<span class="badge b-new">New</span>';
    if (it.status === 'updated') return '<span class="badge b-updated">Updated</span>';
    if (it.status === 'disabled') {
      const d = it.desc || '';
      if (d.includes('(Broadcaster only)')) return '<span class="badge b-broadcaster">Broadcaster</span>';
      if (d.includes('(Mod only)')) return '<span class="badge b-mod">Mod Only</span>';
      if (d.includes('(VIP+ and up)')) return '<span class="badge b-vip">VIP+</span>';
      if (d.includes('(Offline)')) return '<span class="badge b-off">Offline</span>';
      return '<span class="badge b-soon">Soon™</span>';
    }
    return '';
  }

  function costInfo(cost) {
    const raw = String(cost == null ? '?' : cost).trim();
    if (raw.toUpperCase() === 'FREE') return { text: 'FREE', cls: 'cost-free', label: 'Free' };
    if (raw === '?') return { text: 'TBC', cls: 'cost-tbc', label: 'Cost TBC' };
    if (/^\d+$/.test(raw)) return { text: raw, cls: 'cost-num', label: `${raw} points` };
    return { text: raw, cls: 'cost-text', label: raw };
  }

  /* ---------- render ---------- */
  function render() {
    const q = searchEl.value.trim().toLowerCase();
    const isMobile = mobileQuery.matches;
    menuEl.innerHTML = '';
    let visible = 0;

    (data.sections || []).forEach(sec => {
      if (activeSection !== 'All' && sec.name !== activeSection) return;

      const items = (sec.items || []).filter(it =>
        !q ||
        it.name.toLowerCase().includes(q) ||
        (it.desc || '').toLowerCase().includes(q)
      );
      if (!items.length) return;

      const details = document.createElement('details');
      details.className = 'section';
      details.open = !isMobile || Boolean(q) || activeSection !== 'All';

      const summary = document.createElement('summary');
      const h2 = document.createElement('h2');
      h2.textContent = sec.name;
      const count = document.createElement('span');
      count.className = 'count';
      count.textContent = `— ${items.length}`;
      h2.appendChild(count);
      summary.appendChild(h2);
      details.appendChild(summary);

      if (sec.note) {
        const note = document.createElement('div');
        note.className = 'note';
        note.innerHTML = sec.note;
        details.appendChild(note);
      }

      const grid = document.createElement('div');
      grid.className = 'grid';

      items.forEach(it => {
        const isDisabled = it.status === 'disabled';
        const card = document.createElement('div');
        card.className = 'card' + (isDisabled ? ' disabled' : '');

        const top = document.createElement('div');
        top.className = 'card-top';

        const nameEl = document.createElement(isDisabled ? 'span' : 'button');
        nameEl.className = 'name';
        nameEl.textContent = it.name;

        if (isDisabled) {
          nameEl.setAttribute('aria-disabled', 'true');
        } else {
          nameEl.type = 'button';
          const copyCmd = it.name.split(/[\s\/]/)[0];
          nameEl.dataset.copy = copyCmd;
          nameEl.title = `Click to copy ${copyCmd}`;
          nameEl.setAttribute('aria-label', `Copy ${copyCmd}`);
        }
        top.appendChild(nameEl);

        const cost = costInfo(it.cost);
        const costEl = document.createElement('span');
        costEl.className = `cost ${cost.cls}`;
        costEl.textContent = cost.text;
        costEl.title = cost.label;
        top.appendChild(costEl);
        card.appendChild(top);

        const desc = document.createElement('div');
        desc.className = 'desc';
        desc.textContent = it.desc || '';
        card.appendChild(desc);

        const meta = document.createElement('div');
        meta.className = 'meta';
        meta.innerHTML = badge(it);
        if (it.cooldown) {
          const cool = document.createElement('span');
          cool.className = 'cool';
          cool.textContent = `⏱ ${it.cooldown}`;
          meta.appendChild(cool);
        }
        card.appendChild(meta);

        grid.appendChild(card);
        visible++;
      });

      details.appendChild(grid);
      menuEl.appendChild(details);
    });

    emptyEl.classList.toggle('hidden', visible > 0);
  }

  function scrollToResults() {
    const target = menuEl.getBoundingClientRect().top + window.scrollY - controlsEl.offsetHeight - 8;
    if (window.scrollY > target) window.scrollTo(0, Math.max(0, target));
  }

  render();
  searchEl.addEventListener('input', () => {
    render();
    scrollToResults();
  });

  if (mobileQuery.addEventListener) mobileQuery.addEventListener('change', render);
  else mobileQuery.addListener(render);

  /* ---------- click-to-copy (event delegation) ---------- */
  menuEl.addEventListener('click', e => {
    const el = e.target.closest('.name');
    if (!el || !el.dataset.copy || el.closest('.card.disabled') || el.classList.contains('copied')) return;

    const original = el.textContent;
    copyText(el.dataset.copy).then(() => {
      el.textContent = 'Copied! ✓';
      el.classList.add('copied');
      copyStatus.textContent = `Copied ${el.dataset.copy}`;
      setTimeout(() => { el.textContent = original; el.classList.remove('copied'); }, 1200);
    }).catch(() => {
      el.textContent = 'Copy failed :(';
      el.classList.add('copied');
      copyStatus.textContent = 'Copy failed';
      setTimeout(() => { el.textContent = original; el.classList.remove('copied'); }, 1200);
    });
  });

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    }
    return fallbackCopy(text);
  }

  function fallbackCopy(text) {
    return new Promise((resolve, reject) => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
      ta.remove();
      ok ? resolve() : reject(new Error('copy failed'));
    });
  }

  /* ---------- keyboard: "/" focuses search, Esc clears ---------- */
  document.addEventListener('keydown', e => {
    if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return;
    const t = e.target;
    const typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
    if (typing) return;
    e.preventDefault();
    searchEl.focus();
    searchEl.select();
  });

  searchEl.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (searchEl.value) {
      searchEl.value = '';
      render();
      scrollToResults();
    } else {
      searchEl.blur();
    }
  });

  /* ---------- changelog (collapsed, newest entry in the summary) ---------- */
  const entries = data.changelog || [];
  if (entries.length) {
    const details = document.createElement('details');
    details.className = 'changelog';

    const summary = document.createElement('summary');
    const h2 = document.createElement('h2');
    h2.textContent = 'Recent Updates';
    summary.appendChild(h2);

    const latest = document.createElement('span');
    latest.className = 'latest';
    latest.innerHTML = `<span class="date">${esc(entries[0].date)}</span> — ${esc(entries[0].text)}`;
    summary.appendChild(latest);
    details.appendChild(summary);

    const change = document.createElement('div');
    change.className = 'change';
    const ul = document.createElement('ul');
    entries.forEach(c => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="date">${esc(c.date)}</span> — ${esc(c.text)}`;
      ul.appendChild(li);
    });
    change.appendChild(ul);
    details.appendChild(change);
    document.getElementById('changelogMount').appendChild(details);
  }
})();
</script>
</body>
</html>
