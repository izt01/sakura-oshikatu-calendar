/* ═══════════════════════════════════════
   花暦 — メンバーデータ
   data.js

   ■ 使い方
   各メンバーオブジェクトの項目を埋めてください。
   未使用スロットは enabled: false のまま残してOKです。

   ■ avatar について
   絵文字（例: '🌸'）または画像パス（例: 'img/member01.jpg'）
   が使えます。画像パスを指定した場合は自動的に<img>タグになります。

   ■ bg について
   CSSグラデーション文字列（linear-gradient(...)）または
   単色('#ff6699'など）を指定してください。
═══════════════════════════════════════ */

const MEMBERS = [
  /* ── 01 ── */
  {
    id:       1,
    enabled:  false,          // false にするとアプリに表示されません
    name:     'ユナ',
    nameRoma: 'Yuna',
    role:     'リーダー / ボーカル',
    birthday: '2000-03-09',       // YYYY-MM-DD 形式
    avatar:   '🌸',          // 絵文字 or 画像パス
    color:    '#c45070',     // テキスト強調色
    bg:       'linear-gradient(145deg,#c45070,#e07898)', // カード背景,
    height:   '163cm',
    mbti:     'ENFP',
    fav:      '🎸 ギター ・ 🌸 桜',
    memo:     '',            // 自由メモ欄
  },
  /* ── 02 ── */
  {
    id:       2,
    enabled:  false,
    name:     'リナ',
    nameRoma: 'Rina',
    role:     'メインダンサー',
    birthday: '2000-06-15',
    avatar:   '🌙',
    color:    '#7a5c8a',
    bg:       'linear-gradient(145deg,#7a5c8a,#b08acd)',
    height:   '158cm',
    mbti:     'INFJ',
    fav:      '🎨 絵 ・ 🐱 猫',
    memo:     '',
  },
  /* ── 03 ── */
  {
    id:       3,
    enabled:  false,
    name:     'ソヒ',
    nameRoma: 'Sohi',
    role:     'ラッパー',
    birthday: '2000-01-28',
    avatar:   '⚡',
    color:    '#b87840',
    bg:       'linear-gradient(145deg,#b87840,#d4a060)',
    height:   '165cm',
    mbti:     'ENTJ',
    fav:      '🎤 作詞 ・ 🏋️ ジム',
    memo:     '',
  },
  /* ── 04 ── */
  {
    id:       4,
    enabled:  false,
    name:     'ミナ',
    nameRoma: 'Mina',
    role:     'ビジュアル / ボーカル',
    birthday: '2000-09-03',
    avatar:   '🦋',
    color:    '#3a7a60',
    bg:       'linear-gradient(145deg,#3a7a60,#5aaa88)',
    height:   '161cm',
    mbti:     'ISFP',
    fav:      '📚 読書 ・ 🌊 海',
    memo:     '',
  },
  /* ── 05 ── */
  {
    id:       5,
    enabled:  false,
    name:     'チェア',
    nameRoma: 'Chea',
    role:     'メインボーカル',
    birthday: '2000-11-20',
    avatar:   '🌺',
    color:    '#a05040',
    bg:       'linear-gradient(145deg,#a05040,#c87a60)',
    height:   '167cm',
    mbti:     'ESFJ',
    fav:      '🍰 お菓子 ・ 🎹 ピアノ',
    memo:     '',
  },
  /* ── 06 ── */
  {
    id:       6,
    enabled:  false,
    name:     'ダウン',
    nameRoma: 'Dawn',
    role:     'マンネ / ダンサー',
    birthday: '2000-12-05',
    avatar:   '🌈',
    color:    '#3858a8',
    bg:       'linear-gradient(145deg,#3858a8,#6080d0)',
    height:   '159cm',
    mbti:     'ENFJ',
    fav:      '✈️ 旅行 ・ 🎮 ゲーム',
    memo:     '',
  },

  /* ── 07〜30：未設定スロット（enabled: false）── */
  /* 以下のスロットに実際のメンバーデータを入力してください */

  { id:  7, enabled: true, name: '遠藤 光莉', nameRoma: 'Hikari Endo', role: '', birthday: '1999-04-17', avatar: 'member/endo_h.png', color: '#0996b9', bg: 'linear-gradient(145deg,#c45070,#e07898)', height: '', mbti: '', fav: '', memo: '' },
  { id:  8, enabled: true, name: '大園 玲', nameRoma: 'Rei Ozono', role: '', birthday: '2000-04-18', avatar: 'member/ozono.png', color: '#be53f8', bg: 'linear-gradient(145deg,#7a5c8a,#b08acd)', height: '', mbti: '', fav: '', memo: '' },
  { id:  9, enabled: true, name: '大沼 晶保', nameRoma: 'Akiho Onuma', role: '', birthday: '1999-10-12', avatar: 'member/onuma.png', color: '#b87840', bg: 'linear-gradient(145deg,#b87840,#d4a060)', height: '', mbti: '', fav: '', memo: '' },
  { id: 10, enabled: true, name: '幸阪 茉里乃', nameRoma: 'Marino Kousaka', role: '', birthday: '2002-12-19', avatar: 'member/kousaka.png', color: '#3a7a60', bg: 'linear-gradient(145deg,#3a7a60,#5aaa88)', height: '', mbti: '', fav: '', memo: '' },
  { id: 11, enabled: true, name: '武元 唯衣', nameRoma: 'Yui Takemoto', role: '', birthday: '2002-03-23', avatar: 'member/takemoto.png', color: '#a05040', bg: 'linear-gradient(145deg,#a05040,#c87a60)', height: '', mbti: '', fav: '', memo: '' },
  { id: 12, enabled: true, name: '田村 保乃', nameRoma: 'Hono Tamura', role: '', birthday: '1998-10-21', avatar: 'member/tamura.png', color: '#3858a8', bg: 'linear-gradient(145deg,#3858a8,#6080d0)', height: '', mbti: '', fav: '', memo: '' },
  { id: 13, enabled: true, name: '藤吉 夏鈴', nameRoma: 'Karin Huziyoshi', role: '', birthday: '2001-08-29', avatar: 'member/huziyosi.png', color: '#8a3a6a', bg: 'linear-gradient(145deg,#8a3a6a,#c06090)', height: '', mbti: '', fav: '', memo: '' },
  { id: 14, enabled: true, name: '増本 綺良', nameRoma: 'Kira Masumoto', role: '', birthday: '2002-01-12', avatar: 'member/masumoto.png', color: '#4a6a3a', bg: 'linear-gradient(145deg,#4a6a3a,#7a9a60)', height: '', mbti: '', fav: '', memo: '' },
  { id: 15, enabled: true, name: '松田 里奈', nameRoma: 'Rina Matsuda', role: '', birthday: '1999-10-13', avatar: 'member/matuda.png', color: '#6a4a8a', bg: 'linear-gradient(145deg,#6a4a8a,#9a78b8)', height: '', mbti: '', fav: '', memo: '' },
  { id: 16, enabled: true, name: '森田 ひかる', nameRoma: 'Hikaru Morita', role: '', birthday: '2001-07-10', avatar: 'member/morita.png', color: '#8a6a3a', bg: 'linear-gradient(145deg,#8a6a3a,#b89860)', height: '', mbti: '', fav: '', memo: '' },
  { id: 17, enabled: true, name: '守屋 麗奈', nameRoma: 'Rena Moriya', role: '', birthday: '2000-01-02', avatar: 'member/moriya.png', color: '#3a5a8a', bg: 'linear-gradient(145deg,#3a5a8a,#6088b8)', height: '', mbti: '', fav: '', memo: '' },
  { id: 18, enabled: true, name: '山﨑 天', nameRoma: 'Ten Yamasaki', role: '', birthday: '2005-09-28', avatar: 'member/yamasaki.png', color: '#8a3a3a', bg: 'linear-gradient(145deg,#8a3a3a,#b86060)', height: '', mbti: '', fav: '', memo: '' },
  { id: 19, enabled: true, name: '石森 璃花', nameRoma: 'Rika Ishimori', role: '', birthday: '2002-01-13', avatar: 'member/ishimori.png', color: '#3a8a7a', bg: 'linear-gradient(145deg,#3a8a7a,#60b8a8)', height: '', mbti: '', fav: '', memo: '' },
  { id: 20, enabled: true, name: '遠藤 理子', nameRoma: 'Riko Endo', role: '', birthday: '2006-01-09', avatar: 'member/endo_r.png', color: '#7a3a8a', bg: 'linear-gradient(145deg,#7a3a8a,#a860b8)', height: '', mbti: '', fav: '', memo: '' },
  { id: 21, enabled: true, name: '小田倉 麗奈', nameRoma: 'Reina Odakura', role: '', birthday: '2004-07-25', avatar: 'member/odakura.png', color: '#8a7a3a', bg: 'linear-gradient(145deg,#8a7a3a,#b8a860)', height: '', mbti: '', fav: '', memo: '' },
  { id: 22, enabled: true, name: '小島 凪紗', nameRoma: 'Nagisa Kozima', role: '', birthday: '2005-07-07', avatar: 'member/kozima.png', color: '#3a8a4a', bg: 'linear-gradient(145deg,#3a8a4a,#60b870)', height: '', mbti: '', fav: '', memo: '' },
  { id: 23, enabled: true, name: '谷口 愛李', nameRoma: 'Airi Taniguchi', role: '', birthday: '2005-04-12', avatar: 'member/taniguti.png', color: '#8a4a3a', bg: 'linear-gradient(145deg,#8a4a3a,#b87860)', height: '', mbti: '', fav: '', memo: '' },
  { id: 24, enabled: true, name: '中嶋 優月', nameRoma: 'Yuzuki Nakashima', role: '', birthday: '2003-02-17', avatar: 'member/nakasima.png', color: '#3a4a8a', bg: 'linear-gradient(145deg,#3a4a8a,#6070b8)', height: '', mbti: '', fav: '', memo: '' },
  { id: 25, enabled: true, name: '的野 美青', nameRoma: 'Mio Matono', role: '', birthday: '2006-11-08', avatar: 'member/matono.png', color: '#6a8a3a', bg: 'linear-gradient(145deg,#6a8a3a,#98b860)', height: '', mbti: '', fav: '', memo: '' },
  { id: 26, enabled: true, name: '向井 純葉', nameRoma: 'Itoha Mukai', role: '', birthday: '2006-05-09', avatar: 'member/mukai.png', color: '#8a3a5a', bg: 'linear-gradient(145deg,#8a3a5a,#b86088)', height: '', mbti: '', fav: '', memo: '' },
  { id: 27, enabled: true, name: '村井 優', nameRoma: 'Yu Murai', role: '', birthday: '2004-08-18', avatar: 'member/murai.png', color: '#3a6a8a', bg: 'linear-gradient(145deg,#3a6a8a,#6098b8)', height: '', mbti: '', fav: '', memo: '' },
  { id: 28, enabled: true, name: '村山 美羽', nameRoma: 'Miu Murayama', role: '', birthday: '2005-02-15', avatar: 'member/murayama.png', color: '#8a5a3a', bg: 'linear-gradient(145deg,#8a5a3a,#b88860)', height: '', mbti: '', fav: '', memo: '' },
  { id: 29, enabled: true, name: '山下 瞳月', nameRoma: 'Shizuki Yamashita', role: '', birthday: '2005-01-22', avatar: 'member/yamasita.png', color: '#5a3a8a', bg: 'linear-gradient(145deg,#5a3a8a,#8860b8)', height: '', mbti: '', fav: '', memo: '' },
  { id: 30, enabled: true, name: '浅井 恋乃実', nameRoma: 'Konomi Asai', role: '', birthday: '2004-12-22', avatar: 'member/asai.png', color: '#3a8a6a', bg: 'linear-gradient(145deg,#3a8a6a,#60b898)', height: '', mbti: '', fav: '', memo: '' },
  { id: 31, enabled: true, name: '稲熊 ひな', nameRoma: 'Hina Inaguma', role: '', birthday: '2006-03-09', avatar: 'member/inaguma.png', color: '#101412', bg: 'linear-gradient(145deg,#101412,#60b898)', height: '', mbti: '', fav: '', memo: '' },
  { id: 32, enabled: true, name: '勝又 春', nameRoma: 'Haru Katsumata', role: '', birthday: '2004-01-24', avatar: 'member/katumata.png', color: '#8a573a', bg: 'linear-gradient(145deg,#8a573a,#60b898)', height: '', mbti: '', fav: '', memo: '' },
  { id: 33, enabled: true, name: '佐藤 愛桜', nameRoma: 'Neo Sato', role: '', birthday: '2006-12-01', avatar: 'member/sato.png', color: '#898a3a', bg: 'linear-gradient(145deg,#898a3a,#60b898)', height: '', mbti: '', fav: '', memo: '' },
  { id: 34, enabled: true, name: '中川 智尋', nameRoma: 'Chihiro Nakagawa', role: '', birthday: '2007-09-16', avatar: 'member/nakagawa.png', color: '#3a3b8a', bg: 'linear-gradient(145deg,#3a3b8a,#60b898)', height: '', mbti: '', fav: '', memo: '' },
  { id: 35, enabled: true, name: '松本 和子', nameRoma: 'Wako Matsumoto', role: '', birthday: '2005-02-06', avatar: 'member/matumoto.png', color: '#8a3a4b', bg: 'linear-gradient(145deg,#8a3a4b,#60b898)', height: '', mbti: '', fav: '', memo: '' },
  { id: 36, enabled: true, name: '目黒 陽色', nameRoma: 'Hiiro Meguro', role: '', birthday: '2006-01-24', avatar: 'member/meguro.png', color: '#a73f0f', bg: 'linear-gradient(145deg,#a73f0f,#60b898)', height: '', mbti: '', fav: '', memo: '' },
  { id: 37, enabled: true, name: '山川 宇衣', nameRoma: 'Ui Yamakawa', role: '', birthday: '2005-09-19', avatar: 'member/yamakawa.png', color: '#cdffac', bg: 'linear-gradient(145deg,#cdffac,#60b898)', height: '', mbti: '', fav: '', memo: '' },
  { id: 38, enabled: true, name: '山田 桃実', nameRoma: 'Momomi Yamada', role: '', birthday: '2008-07-20', avatar: 'member/yamada.png', color: '#e46565', bg: 'linear-gradient(145deg,#e46565,#60b898)', height: '', mbti: '', fav: '', memo: '' },
];

/* ── アクティブメンバーのみ取得 ── */
const ACTIVE_MEMBERS = MEMBERS.filter(m => m.enabled && m.name);

/* ── 旧暦月名 ── */
const MONTHS_JP = ['睦月','如月','弥生','卯月','皐月','水無月','文月','葉月','長月','神無月','霜月','師走'];
const MONTHS_EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];

/* ── 推しメンデータ（localStorage）── */
function loadOshi()   { try { return new Set(JSON.parse(localStorage.getItem('hana_oshi') || '[]')); } catch { return new Set(); } }
function saveOshi(s)  { try { localStorage.setItem('hana_oshi', JSON.stringify([...s])); } catch {} }

/* ── イベントデータ（localStorage）── */
function loadEvents()  { try { return JSON.parse(localStorage.getItem('hana_events') || '[]'); } catch { return []; } }
function saveEvents(a) { try { localStorage.setItem('hana_events', JSON.stringify(a)); } catch {} }

/* ── 誕生日カウントダウン ── */
function daysUntilBirthday(birthday) {
  const today = new Date(); today.setHours(0,0,0,0);
  // YYYY-MM-DD と MM-DD 両対応
  const parts = birthday.split('-');
  const mm = parseInt(parts[parts.length - 2]);
  const dd = parseInt(parts[parts.length - 1]);
  let next = new Date(today.getFullYear(), mm - 1, dd);
  if (next < today) next.setFullYear(today.getFullYear() + 1);
  return Math.round((next - today) / 86400000);
}

/* ── 年齢自動計算 ── */
function calcAge(birthday) {
  if (!birthday || birthday.length < 10) return null;
  const today = new Date();
  const [y, m, d] = birthday.split('-').map(Number);
  let age = today.getFullYear() - y;
  // まだ誕生日を迎えていなければ-1
  if (
    today.getMonth() + 1 < m ||
    (today.getMonth() + 1 === m && today.getDate() < d)
  ) age--;
  return age;
}

/* ── アバター要素生成 ── */
function avatarHTML(member, size = 60) {
  // 画像パスかどうかは拡張子で判定
  const isImg = member.avatar && /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(member.avatar);
  if (isImg) {
    return `<img src="${member.avatar}" alt="${member.name}" style="width:${size}px;height:${size}px;border-radius:50%;object-fit:cover;">`;
  }
  return `<span style="font-size:${Math.round(size*0.52)}px;line-height:1">${member.avatar || '✿'}</span>`;
}

/* ── 通知バッジ更新 ── */
function updateNotifBadge() {
  const dot = document.getElementById('notifDot');
  if (!dot) return;
  const notifs = buildNotifications();
  dot.style.display = notifs.length ? 'block' : 'none';
}

function buildNotifications() {
  const today = new Date(); today.setHours(0,0,0,0);
  const events = loadEvents();
  const notes  = [];

  ACTIVE_MEMBERS.forEach(m => {
    const [mm, dd] = m.birthday.split('-').map(Number);
    const d = new Date(today.getFullYear(), mm - 1, dd);
    const diff = Math.round((d - today) / 86400000);
    if (diff === 0) notes.push({ icon: m.avatar, title: `今日は${m.name}の誕生日🌸`, sub: 'おめでとうございます！' });
    if (diff === 1) notes.push({ icon: m.avatar, title: `明日は${m.name}の誕生日🌸`, sub: 'お祝いの準備を忘れずに' });
  });

  events.forEach(e => {
    const d = new Date(e.date + 'T00:00:00');
    const diff = Math.round((d - today) / 86400000);
    if (diff === 0) notes.push({ icon: e.emoji, title: `今日「${e.name}」の日です`, sub: e.note || '' });
    if (diff === 1) notes.push({ icon: e.emoji, title: `明日「${e.name}」があります`, sub: 'お忘れなく' });
  });
  return notes;
}
