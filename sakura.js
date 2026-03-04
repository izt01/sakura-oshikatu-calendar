/* ═══════════════════════════════════════
   花暦 — 桜花びらアニメーション
   sakura.js
═══════════════════════════════════════ */

(function () {
  const canvas = document.getElementById('petals-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const COLORS = ['#f9c9d9', '#f0a0bc', '#fce8ef', '#e07898', '#f5b8cf', '#fad4e4'];
  const COUNT  = 28;
  const petals = [];

  function rand(min, max) { return min + Math.random() * (max - min); }

  function newPetal(scatter) {
    return {
      x:         rand(0, canvas.width),
      y:         scatter ? rand(-20, canvas.height) : rand(-120, -10),
      r:         rand(5, 9),
      rot:       rand(0, Math.PI * 2),
      rotSpeed:  rand(-0.025, 0.025),
      speed:     rand(0.55, 1.2),
      drift:     rand(-0.4, 0.4),
      color:     COLORS[Math.floor(Math.random() * COLORS.length)],
      opacity:   rand(0.35, 0.72),
      wobble:    rand(0, Math.PI * 2),
      wobbleSpd: rand(0.008, 0.018),
    };
  }

  for (let i = 0; i < COUNT; i++) petals.push(newPetal(true));

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.globalAlpha = p.opacity;
    ctx.fillStyle   = p.color;
    ctx.beginPath();
    // 5-petal sakura
    for (let i = 0; i < 5; i++) {
      const a   = (i / 5) * Math.PI * 2 - Math.PI / 2;
      const px  = Math.cos(a) * p.r;
      const py  = Math.sin(a) * p.r;
      const cx1 = Math.cos(a - 0.5) * p.r * 0.6;
      const cy1 = Math.sin(a - 0.5) * p.r * 0.6;
      const cx2 = Math.cos(a + 0.5) * p.r * 0.6;
      const cy2 = Math.sin(a + 0.5) * p.r * 0.6;
      if (i === 0) ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(cx1, cy1, px, py);
      ctx.quadraticCurveTo(cx2, cy2, 0, 0);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach(p => {
      p.wobble += p.wobbleSpd;
      p.x      += p.drift + Math.sin(p.wobble) * 0.55;
      p.y      += p.speed;
      p.rot    += p.rotSpeed;
      if (p.y > canvas.height + 20) Object.assign(p, newPetal(false));
      drawPetal(p);
    });
    requestAnimationFrame(tick);
  }
  tick();
})();
