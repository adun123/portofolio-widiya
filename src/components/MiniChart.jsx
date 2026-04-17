import { useEffect, useRef } from 'react';

function drawBar(ctx, w, h) {
  const data = [65, 80, 55, 90, 70, 85, 95];
  const barW = (w - 20) / data.length - 6;
  ctx.clearRect(0, 0, w, h);
  data.forEach((v, i) => {
    const x = 10 + i * (barW + 6);
    const bh = (v / 100) * (h - 20);
    const grad = ctx.createLinearGradient(0, h - bh - 10, 0, h - 10);
    grad.addColorStop(0, '#C0152A');
    grad.addColorStop(1, '#F4A0B0');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(x, h - bh - 10, barW, bh, 4);
    ctx.fill();
  });
}

function drawDonut(ctx, w, h) {
  const cx = w / 2, cy = h / 2, r = Math.min(w, h) / 2 - 12;
  const data = [42, 28, 18, 12];
  const colors = ['#8B0000', '#C0152A', '#E63950', '#F4A0B0'];
  let angle = -Math.PI / 2;
  ctx.clearRect(0, 0, w, h);
  data.forEach((v, i) => {
    const slice = (v / 100) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, angle, angle + slice);
    ctx.closePath();
    ctx.fillStyle = colors[i];
    ctx.fill();
    angle += slice;
  });
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.55, 0, Math.PI * 2);
  ctx.fillStyle = 'var(--white, #fafafa)';
  ctx.fill();
}

function drawLine(ctx, w, h) {
  const data = [30, 45, 38, 60, 52, 75, 68, 82, 78, 90];
  const stepX = (w - 20) / (data.length - 1);
  const maxV = 100;
  ctx.clearRect(0, 0, w, h);
  const grad = ctx.createLinearGradient(0, 0, w, 0);
  grad.addColorStop(0, '#8B0000');
  grad.addColorStop(1, '#F4A0B0');
  ctx.strokeStyle = grad;
  ctx.lineWidth = 2.5;
  ctx.lineJoin = 'round';
  ctx.beginPath();
  data.forEach((v, i) => {
    const x = 10 + i * stepX;
    const y = h - 10 - (v / maxV) * (h - 20);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.stroke();
  const areaGrad = ctx.createLinearGradient(0, 0, 0, h);
  areaGrad.addColorStop(0, 'rgba(192,21,42,0.15)');
  areaGrad.addColorStop(1, 'rgba(244,160,176,0.02)');
  ctx.lineTo(10 + (data.length - 1) * stepX, h - 10);
  ctx.lineTo(10, h - 10);
  ctx.closePath();
  ctx.fillStyle = areaGrad;
  ctx.fill();
}

export default function MiniChart({ type = 'bar', width = 260, height = 120 }) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (type === 'bar') drawBar(ctx, width, height);
    else if (type === 'donut') drawDonut(ctx, width, height);
    else drawLine(ctx, width, height);
  }, [type, width, height]);
  return <canvas ref={ref} width={width} height={height} style={{ borderRadius: 8 }} />;
}
