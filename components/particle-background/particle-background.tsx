"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

const BLOBS = [
  { fx: 0.18, fy: 0.22, r: 300, sp: 0.00012, ph: 0 },
  { fx: 0.82, fy: 0.34, r: 270, sp: 0.0001, ph: 2 },
  { fx: 0.6, fy: 0.82, r: 320, sp: 0.00008, ph: 4 },
];

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.trim().replace("#", "");
  if (clean.length !== 6) return [230, 51, 41];
  const n = parseInt(clean, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let raf = 0;

    const build = () => {
      const count = Math.min(54, Math.floor((W * H) / 26000));
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          r: Math.random() * 2.4 + 1.6,
        });
      }
    };

    const resize = () => {
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = (t: number) => {
      const accentHex = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim();
      const [r, g, b] = hexToRgb(accentHex || "#e63329");

      ctx.clearRect(0, 0, W, H);

      for (const bl of BLOBS) {
        const cx = (bl.fx + Math.sin(t * bl.sp + bl.ph) * 0.05) * W;
        const cy = (bl.fy + Math.cos(t * bl.sp * 0.8 + bl.ph) * 0.05) * H;
        const gr = ctx.createRadialGradient(cx, cy, 0, cx, cy, bl.r);
        gr.addColorStop(0, `rgba(${r},${g},${b},0.06)`);
        gr.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = gr;
        ctx.beginPath();
        ctx.arc(cx, cy, bl.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const c = nodes[j];
          const dx = a.x - c.x;
          const dy = a.y - c.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 19000) {
            const al = (1 - Math.sqrt(d2) / 138) * 0.14;
            ctx.strokeStyle = `rgba(${r},${g},${b},${al})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(c.x, c.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = `rgba(${r},${g},${b},0.42)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
