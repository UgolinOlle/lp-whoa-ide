"use client";

import { useRef, useState } from "react";

export const RadarArc = () => {
  const centerX = 160;
  const centerY = 120;
  const radius = 100;

  const arcRef = useRef<SVGSVGElement>(null);
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);

  const labels = ["Productivité", "UX", "Clarté", "Flexibilité"];
  const angleStep = Math.PI / (labels.length - 1);
  const scores = [90, 70, 85, 75];

  const polarToCartesian = (r: number, angle: number) => ({
    x: r * Math.cos(angle),
    y: -r * Math.sin(angle),
  });

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = arcRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getDeformedArc = (segments = 60, r = radius) => {
    const points: string[] = [];

    for (let i = 0; i <= segments; i++) {
      const angle = (Math.PI * i) / segments;
      let { x, y } = polarToCartesian(r, angle);
      x += centerX;
      y += centerY;

      if (mouse) {
        const dx = x - mouse.x;
        const dy = y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const influenceRadius = 30;
        if (dist < influenceRadius) {
          const force = (1 - dist / influenceRadius) * 8;
          const dirX = dx / dist || 0;
          const dirY = dy / dist || 0;
          x += dirX * force;
          y += dirY * force;
        }
      }

      points.push(`${x},${y}`);
    }

    return `M ${points.join(" L")}`;
  };

  const polygonPoints = scores.map((val, i) => {
    const angle = angleStep * i;
    const { x, y } = polarToCartesian((val / 100) * radius, angle);
    return `${centerX + x},${centerY + y}`;
  });

  return (
    <div className="mt-8 flex justify-center">
      <svg
        ref={arcRef}
        onMouseMove={handleMouseMove}
        viewBox="0 0 340 160"
        className="max-w-sm w-full"
      >
        {/* MODIFIED ARCS */}
        <defs>
          <linearGradient
            id="neovim-arc-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#98C379" />
            <stop offset="50%" stopColor="#61AFEF" />
            <stop offset="100%" stopColor="#C678DD" />
          </linearGradient>
        </defs>

        {[1, 0.75, 0.5, 0.25].map((factor, i) => (
          <path
            key={i}
            d={getDeformedArc(60, radius * factor)}
            fill="none"
            stroke="url(#neovim-arc-gradient)"
            strokeWidth={1}
            strokeDasharray="4 4"
          />
        ))}

        {/* RADIALS LINES */}
        {labels.map((_, i) => {
          const angle = angleStep * i;
          const { x, y } = polarToCartesian(radius, angle);
          return (
            <line
              key={i}
              x1={centerX}
              y1={centerY}
              x2={centerX + x}
              y2={centerY + y}
              stroke="#98C379"
              strokeWidth={1}
            />
          );
        })}

        {/* POLYGONE */}
        <polygon
          points={polygonPoints.join(" ")}
          fill="rgba(59,130,246,0.2)"
          stroke="#3b82f6"
          strokeWidth={2}
        />

        {/* POINTS */}
        {polygonPoints.map((pt, i) => {
          const [x, y] = pt.split(",").map(Number);
          return <circle key={i} cx={x} cy={y} r={4} fill="#3b82f6" />;
        })}

        {/* LABELS */}
        {labels.map((label, i) => {
          const angle = angleStep * i;
          const { x, y } = polarToCartesian(radius + 14, angle);
          const anchor =
            i === 0 ? "end" : i === labels.length - 1 ? "start" : "middle";
          const offsetY = i === 0 || i === labels.length - 1 ? 10 : 0;

          return (
            <text
              key={i}
              x={centerX + x}
              y={centerY + y + offsetY}
              fontSize="10"
              textAnchor={anchor}
              dominantBaseline="middle"
              fill="#666"
            >
              {label}
            </text>
          );
        })}
      </svg>
    </div>
  );
};
