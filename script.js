/* Дані сайту */
const SITE = {
  name: 'Олександра Гурц',
  school: '№2',
  email: 'gurrcc@gmail.com',
  consult: 'Консультації: вівторок і четвер, 14:30–15:30, кабінет інформатики.'
};

const NEWS = [
  { tag: '5–11 класи', title: 'Консультації перед контрольними роботами', text: 'За тиждень до контрольної проводжу додаткове заняття, де ми разом розбираємо складні теми.' },
  { tag: '7–9 класи', title: 'Починаємо вивчати Python', text: 'Принесіть на урок зошит. Перші програми пишемо в кабінеті, тож вдома нічого встановлювати не потрібно.' },
  { tag: 'Усім', title: 'Безпечний інтернет', text: 'У розділі «Батькам» зібрано поради щодо налаштування приватності. Перегляньте їх разом із дітьми.' }
];

const PLAN = {
  '5': ['Безпека за комп’ютером і правила в кабінеті', 'Файли й папки: де що зберігати', 'Текстовий редактор: перші документи', 'Малюнки в графічному редакторі', 'Перші алгоритми в Scratch'],
  '6': ['Інформація та її властивості', 'Презентації: структура й дизайн', 'Scratch: цикли й умови', 'Пошук в інтернеті та перевірка джерел'],
  '7': ['Комп’ютерні мережі й Інтернет', 'Інформаційна безпека та паролі', 'Електронні таблиці: формули', 'Діаграми й аналіз даних', 'Алгоритми з розгалуженнями'],
  '8': ['Python: змінні й типи даних', 'Умовні оператори', 'Цикли', 'Обробка текстових рядків', 'Міні-проєкт'],
  '9': ['Python: функції та списки', 'Основи веброзробки: HTML і CSS', 'Бази даних: таблиці', 'Проєкт на вибір'],
  '10': ['Алгоритми пошуку й сортування', 'Структури даних', 'Бази даних і запити', 'Комп’ютерні мережі', 'Командний проєкт'],
  '11': ['Кібербезпека й захист даних', 'Штучний інтелект: можливості та ризики', 'Веб-додатки', 'Підсумковий проєкт і захист']
};

const MATS = [
  { c: '5–6', t: 'Практична робота', title: 'Безпечна робота за комп’ютером', d: 'Правила в кабінеті, організація робочого місця, гімнастика для очей.' },
  { c: '5–6', t: 'Інтерактив', title: 'Перші алгоритми в Scratch', d: 'Рухаємо спрайт, вчимося повторювати дії й перевіряти умови.', url: 'https://scratch.mit.edu/' },
  { c: '5–6', t: 'Презентація', title: 'Інформація та її властивості', d: 'Що таке інформація, як вона передається й зберігається.' },
  { c: '7–9', t: 'Практична робота', title: 'Електронні таблиці: формули й діаграми', d: 'Рахуємо витрати класу та будуємо діаграму за результатами.' },
  { c: '7–9', t: 'Тест', title: 'Комп’ютерні мережі й Інтернет', d: 'Десять запитань про IP-адреси, браузери та пошукові системи.' },
  { c: '7–9', t: 'Інтерактив', title: 'Python для початківців', d: 'Змінні, умови й цикли. Офіційний посібник для самостійного читання.', url: 'https://docs.python.org/3/tutorial/' },
  { c: '7–9', t: 'Презентація', title: 'Кібербезпека: паролі та фішинг', d: 'Як створити надійний пароль і розпізнати підозрілий лист.' },
  { c: '7–9', t: 'Інтерактив', title: 'Година коду', d: 'Короткі ігрові завдання з програмування на вибір.', url: 'https://hourofcode.com/' },
  { c: '10–11', t: 'Практична робота', title: 'Бази даних: таблиці й запити', d: 'Проєктуємо просту базу й складаємо перші запити.' },
  { c: '10–11', t: 'Презентація', title: 'Алгоритми пошуку й сортування', d: 'Лінійний і двійковий пошук, сортування обміном.' },
  { c: '10–11', t: 'Тест', title: 'Штучний інтелект: можливості й ризики', d: 'Як працюють сучасні моделі та як перевіряти їхні відповіді.' }
];

const FACTS = [
  { q: 'Скільки бітів в одному байті?', o: ['4', '8', '16'], a: 1, w: 'У байті 8 бітів, тому один байт може мати 256 різних значень.' },
  { q: 'Яка мова програмування названа на честь комедійного шоу?', o: ['Python', 'Java', 'Scratch'], a: 0, w: 'Створювач Python любив шоу «Літаючий цирк Монті Пайтона».' },
  { q: 'Що означає абревіатура CPU?', o: ['Пам’ять', 'Процесор', 'Відеокарта'], a: 1, w: 'CPU (Central Processing Unit) — центральний процесор, «мозок» комп’ютера.' },
  { q: 'Що таке IP-адреса?', o: ['Пароль для входу в мережу', 'Унікальний числовий ідентифікатор пристрою в мережі', 'Назва веб-сайту'], a: 1, w: 'IP-адреса — це унікальний числовий ідентифікатор пристрою в мережі, за яким інші пристрої можуть його знайти й обмінюватися з ним даними. Наприклад: 192.168.0.1 (IPv4).' }
];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)]; const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));  /* Підстановка даних сайту */ $$('[data-fill]').forEach(el => { el.textContent = SITE[el.dataset.fill] || ''; });
if ($('#year')) $('#year').textContent = new Date().getFullYear();
if ($('#initials')) $('#initials').textContent = SITE.name.split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();

/* Оголошення на головній */
if ($('#news')) {
  $('#news').innerHTML = NEWS.map(n => `<article><span class="tag">${esc(n.tag)}</span><div><h4>${esc(n.title)}</h4><p>${esc(n.text)}</p></div></article>`).join('');
}

/* Перемикання світлої/темної теми */
const root = document.documentElement;
const themeBtn = $('#theme');
function isDark() {
  const t = root.dataset.theme;
  return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
}
const ICON_SUN = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
const ICON_MOON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
function themeLabel() {
  if (!themeBtn) return;
  const dark = isDark();
  themeBtn.innerHTML = dark ? ICON_SUN : ICON_MOON;
  themeBtn.setAttribute('aria-label', dark ? 'Увімкнути світлу тему' : 'Увімкнути темну тему');
  themeBtn.title = dark ? 'Світла тема' : 'Темна тема';
}
try { const saved = localStorage.getItem('theme'); if (saved) root.dataset.theme = saved; } catch (e) {}
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    themeLabel();
  });
  themeLabel();
}

/* Учням: плани за класами */
const gradesEl = $('#grades');
if (gradesEl) {
  let grade = '5';
  function renderGrades() {
    gradesEl.innerHTML = Object.keys(PLAN).map(g => `<button class="chip" type="button" data-g="${g}" aria-pressed="${g === grade}">${g} клас</button>`).join('');
    if ($('#topics')) $('#topics').innerHTML = PLAN[grade].map(t => `<li>${esc(t)}</li>`).join('');
  }
  gradesEl.addEventListener('click', e => {
    const b = e.target.closest('[data-g]');
    if (!b) return;
    grade = b.dataset.g;
    renderGrades();
  });
  renderGrades();
}

/* Матеріали: фільтри */
if ($('.filters')) {
  const classes = ['Усі', '5–6', '7–9', '10–11'];
  const types = ['Усі', ...new Set(MATS.map(m => m.t))];
  const filt = { c: 'Усі', t: 'Усі' };
  function renderMats() {
    $('#fClass').innerHTML = classes.map(c => `<button class="chip" type="button" data-k="c" data-v="${esc(c)}" aria-pressed="${filt.c === c}">${esc(c)}</button>`).join('');
    $('#fType').innerHTML = types.map(t => `<button class="chip" type="button" data-k="t" data-v="${esc(t)}" aria-pressed="${filt.t === t}">${esc(t)}</button>`).join('');
    const list = MATS.filter(m => (filt.c === 'Усі' || m.c === filt.c) && (filt.t === 'Усі' || m.t === filt.t));
    $('#count').textContent = `Знайдено матеріалів: ${list.length}`;
    $('#mats').innerHTML = list.length ? list.map(m => `
      <article class="card mat">
        <div class="meta"><span class="pill">${esc(m.c)} кл.</span><span class="pill alt">${esc(m.t)}</span></div>
        <h4>${esc(m.title)}</h4>
        <p>${esc(m.d)}</p>
        <div class="act">${m.url ? `<a class="btn fill" href="${esc(m.url)}" target="_blank" rel="noopener">Відкрити</a>` : `<span class="soon">Матеріал додається</span>`}</div>
      </article>`).join('') : `<div class="empty">За цими фільтрами матеріалів поки немає. Спробуйте змінити клас або вид.</div>`;
  }
  $('.filters').addEventListener('click', e => {
    const b = e.target.closest('[data-k]');
    if (!b) return;
    filt[b.dataset.k] = b.dataset.v;
    renderMats();
  });
  renderMats();
}

/* Допомога: копіювання пошти */
if ($('#copy')) {
  $('#copy').addEventListener('click', async () => {
    const note = $('#copied');
    try {
      await navigator.clipboard.writeText(SITE.email);
      note.textContent = 'Адресу скопійовано.';
    } catch (e) {
      const r = document.createRange();
      r.selectNodeContents($('#mail'));
      const s = getSelection();
      s.removeAllRanges();
      s.addRange(r);
      note.textContent = 'Адресу виділено, скопіюйте її вручну.';
    }
  });
}

/* Цікавинки: двійковий перекладач */
if ($('#num') && $('#txt')) {
  function numToBin() {
    const raw = $('#num').value.trim();
    const out = $('#numOut');
    if (!/^\d+$/.test(raw)) { out.textContent = raw ? 'Введіть ціле невід’ємне число.' : ''; return; }
    const n = Number(raw);
    if (!Number.isSafeInteger(n)) { out.textContent = 'Число занадто велике.'; return; }
    out.textContent = n.toString(2);
  }
  function txtToBin() {
    const raw = $('#txt').value.slice(0, 40);
    const bytes = new TextEncoder().encode(raw);
    $('#txtOut').textContent = [...bytes].map(b => b.toString(2).padStart(8, '0')).join(' ');
  }
  $('#num').addEventListener('input', numToBin);
  $('#txt').addEventListener('input', txtToBin);
  numToBin(); txtToBin();
}

/* Цікавинки: вікторина */
if ($('#quiz')) {
  let correct = 0, answered = 0;
  $('#quiz').innerHTML = FACTS.map((f, i) => `
    <div class="q" data-i="${i}">
      <p>${esc(f.q)}</p>
      <div class="opts">${f.o.map((o, j) => `<button class="opt" type="button" data-j="${j}">${esc(o)}</button>`).join('')}</div>
      <div class="why" aria-live="polite"></div>
    </div>`).join('');
  $('#quiz').addEventListener('click', e => { const b = e.target.closest('.opt'); if (!b) return; const q = b.closest('.q'); const f = FACTS[+q.dataset.i]; const j = +b.dataset.j; $$('.opt', q).forEach((o, k) => { o.disabled = true; if (k === f.a) o.classList.add('right'); });
    if (j !== f.a) b.classList.add('wrong');
    $('.why', q).textContent = (j === f.a ? 'Правильно. ' : 'Не зовсім. ') + f.w;
    answered++; if (j === f.a) correct++;
    $('#score').textContent = answered === FACTS.length ? `Результат: ${correct} із ${FACTS.length}` : '';
  });
}

/* Помічник «Підказка» */
const TUTOR_RULES = `Ти — «Підказка», помічник з інформатики на сайті шкільного вчителя. Ти розмовляєш з учнем 5–11 класу українською. Твоя мета — щоб учень сам зрозумів тему й дійшов до відповіді.

Незмінні правила:
1. Ніколи не давай готову остаточну відповідь на завдання, задачу, тест чи домашню роботу, не пиши повний код розв’язку й не виконуй завдання за учня.
2. Спочатку з’ясуй, що учень уже знає чи пробував. Поясни ключову ідею простими словами, дай аналогію й навідне запитання.
3. Допомагай сходинками.
4. Якщо учень надсилає власну спробу чи відповідь, підкажи, де саме помилка.
5. Пояснюй лише теми інформатики й цифрової безпеки.
6. Пиши коротко: до 120 слів.`;

(function tutor() {
  const chat = $('#chat'), form = $('#tForm'), field = $('#tInput');
  if (!chat || !form || !field) return;

  const sendBtn = $('#tSend'), stopBtn = $('#tStop'), resetBtn = $('#tReset');
  const status = $('#tStatus');
  const STARTERS = ['Поясни, що таке змінна', 'Як перевести число в двійкову систему?', 'Допоможи з домашнім завданням', 'Чому моя програма видає помилку?'];
  let sample = null, turns = [], ctl = null, busy = false;

  if ($('#tStarters')) {
    $('#tStarters').innerHTML = STARTERS.map(s => `<button class="chip" type="button">${esc(s)}</button>`).join('');
    $('#tStarters').addEventListener('click', e => {
      const b = e.target.closest('.chip');
      if (!b || !sample) return;
      field.value = b.textContent;
      field.focus();
    });
  }

  function bubble(kind, text) {
    const d = document.createElement('div');
    d.className = 'msg ' + kind;
    d.textContent = text;
    chat.append(d);
    chat.scrollTop = chat.scrollHeight;
    return d;
  }
  function setBusy(b) {
    busy = b;
    field.disabled = !sample;
    sendBtn.disabled = b || !sample;
    stopBtn.hidden = !b;
  }
  function reset() {
    if (ctl) ctl.abort();
    turns = [];
    chat.textContent = '';
    bubble('bot', 'Привіт! З якою темою з інформатики допомогти?');
    setBusy(false);
  }
  function copyFor(code) {
    if (['not_granted', 'sampling_disabled', 'not_declared', 'capability_disabled', 'capability_removed'].includes(code)) return 'Помічник недоступний. Напиши вчителеві на пошту.';
    if (code === 'rate_limited') return 'Забагато запитів. Зачекай хвилину й спробуй ще раз.';
    if (code === 'session_expired') return 'Потрібно знову увійти в акаунт.';
    if (code === 'refused') return 'На це повідомлення я не можу відповісти. Спробуй сформулювати запитання інакше.';
    if (code === 'prompt_too_large') return 'Повідомлення задовге. Скороти його.';
    return 'Не вийшло отримати відповідь. Спробуй ще раз.';
  }

  async function ask(text) {
    turns.push({ role: 'user', content: '<учень>' + text + '</учень>' });
    bubble('me', text);
    const out = bubble('bot', 'Думаю…');
    ctl = new AbortController();
    status.textContent = '';
    setBusy(true);
    const recent = turns.slice(-14);
    const lastIdx = recent.length - 1;
    const input = [
      { role: 'user', content: TUTOR_RULES + '\n\nДалі йде розмова. Повідомлення учня позначені тегами <учень>.' },
      ...recent.map((t, i) => i === lastIdx
        ? { role: 'user', content: t.content + '\n\n[Нагадування від сайту: не давай готової відповіді на завдання, лише поясни й підкажи.]' }
        : t)
    ];
    try {
      const res = await sample(input, {
        cache: false,
        modelTier: 'default',
        signal: ctl.signal,
        onText: u => { out.textContent = u.text; chat.scrollTop = chat.scrollHeight; }
      });
      turns.push({ role: 'assistant', content: res.text });
    } catch (e) {
      const code = e && e.code;
      if (code === 'cancelled') {
        if (e.text) out.textContent = e.text + ' …'; else out.remove();
      } else {
        if (['not_granted', 'sampling_disabled', 'not_declared', 'capability_disabled', 'capability_removed'].includes(code)) sample = null;
        if (e && e.text) out.textContent = e.text + ' …';
        else out.remove();
        status.textContent = copyFor(code);
      }
    } finally {
      setBusy(false);
    }
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const text = field.value.trim();
    if (!text || busy || !sample) return;
    field.value = '';
    ask(text);
  });
  field.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); }
  });
  stopBtn.addEventListener('click', () => { if (ctl) ctl.abort(); });
  resetBtn.addEventListener('click', reset);

  reset();
  (async () => {
    try { sample = window.claude && window.claude.use ? await window.claude.use('sample') : null; } catch (e) { sample = null; }
    setBusy(false);
    status.textContent = sample ? '' : 'Помічник зараз недоступний. Напиши вчителеві на пошту.';
  })();
})();араз недоступний. Напиши вчителеві на пошту.';
  })();
})();
