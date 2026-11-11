import type { SVGProps } from "react";

export function DnaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
        <linearGradient id="logoGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5eead4" />
          <stop offset="100%" stopColor="#0f766e" />
        </linearGradient>
      </defs>
      {/* Outer rounded square */}
      <rect width="64" height="64" rx="14" fill="url(#logoGrad)" />
      <rect width="64" height="64" rx="14" fill="black" opacity="0.1" />
      {/* DNA strands */}
      {Array.from({ length: 6 }).map((_, i) => {
        const y = 16 + i * 6.5;
        const x1 = 32 + Math.sin(i * 0.8) * 11;
        const x2 = 32 - Math.sin(i * 0.8) * 11;
        return (
          <g key={i}>
            <line x1={x1} y1={y} x2={x2} y2={y} stroke="#fff" strokeWidth="1.2" opacity="0.85" />
            <circle cx={x1} cy={y} r="2.2" fill="#fff" />
            <circle cx={x2} cy={y} r="2.2" fill="url(#logoGrad2)" />
          </g>
        );
      })}
      <path
        d="M 21 16 Q 32 22 43 28 Q 32 34 21 40 Q 32 46 43 52"
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <path
        d="M 43 16 Q 32 22 21 28 Q 32 34 43 40 Q 32 46 21 52"
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
        opacity="0.6"
      />
    </svg>
  );
}
