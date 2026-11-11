import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

/* ============================================================
   Endocrinology SVG illustrations
   - Full-body endocrine glands map
   - Male ♂ and Female ♀ symbols
   - Individual glands: pituitary/hypothalamus, thyroid, adrenal, pancreas
   - Hormone molecule (steroid)
   ============================================================ */

/* Full-body Endocrine System Map — shows all 9 glands in anatomical position */
export function EndocrineSystemMap(props: Props) {
  return (
    <svg viewBox="0 0 360 480" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#fce7f3" stopOpacity="0.3" />
        </linearGradient>
        <radialGradient id="glandGrad" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#5eead4" />
          <stop offset="60%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#134e4a" />
        </radialGradient>
        <radialGradient id="sexGlandGrad" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#fda4af" />
          <stop offset="60%" stopColor="#e11d48" />
          <stop offset="100%" stopColor="#4c0519" />
        </radialGradient>
        <radialGradient id="brainGrad" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#fbcfe8" />
          <stop offset="60%" stopColor="#db2777" />
          <stop offset="100%" stopColor="#500724" />
        </radialGradient>
        <filter id="bodyShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#134e4a" floodOpacity="0.4" />
        </filter>
        <filter id="glandGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="360" height="480" fill="url(#bodyGrad)" rx="16" />

      {/* ===== Body silhouette ===== */}
      <g opacity="0.35" stroke="#94a3b8" strokeWidth="2" fill="#f1f5f9">
        {/* Head */}
        <ellipse cx="180" cy="50" rx="32" ry="38" />
        {/* Neck */}
        <rect x="170" y="80" width="20" height="20" />
        {/* Torso */}
        <path d="M 130 100 Q 130 110 135 130 L 145 230 Q 145 250 160 270 L 200 270 Q 215 250 215 230 L 225 130 Q 230 110 230 100 Z" />
        {/* Arms */}
        <path d="M 135 130 Q 105 180 100 250 Q 100 280 110 320 L 122 320 Q 122 280 125 250 Q 130 180 145 150 Z" />
        <path d="M 225 130 Q 255 180 260 250 Q 260 280 250 320 L 238 320 Q 238 280 235 250 Q 230 180 215 150 Z" />
        {/* Legs */}
        <path d="M 160 270 Q 158 320 155 380 Q 155 430 165 460 L 180 460 Q 180 430 178 380 Q 178 320 180 280 Z" />
        <path d="M 200 270 Q 202 320 205 380 Q 205 430 195 460 L 180 460 Q 180 430 182 380 Q 182 320 180 280 Z" />
      </g>

      {/* ===== GLANDS (numbered + labeled with glow) ===== */}

      {/* 1. Pineal gland (deep in brain) */}
      <circle cx="180" cy="48" r="3.5" fill="#7c3aed" filter="url(#glandGlow)" />
      <text x="195" y="42" fontSize="9" fill="#7c3aed" fontWeight="600">9</text>

      {/* 2. Hypothalamus + Pituitary (in brain, hanging) */}
      <g filter="url(#glandGlow)">
        {/* Hypothalamus area - pink region in brain */}
        <ellipse cx="180" cy="55" rx="14" ry="6" fill="url(#brainGrad)" opacity="0.85" />
        {/* Pituitary - small bean hanging below */}
        <ellipse cx="180" cy="72" rx="5" ry="7" fill="url(#brainGrad)" />
      </g>
      <text x="200" y="58" fontSize="9" fill="#be185d" fontWeight="600">1</text>

      {/* 3. Thyroid (butterfly shape on neck) */}
      <g filter="url(#bodyShadow)">
        <path
          d="M 165 110 Q 165 122 172 128 Q 180 130 188 128 Q 195 122 195 110 L 192 105 Q 180 108 168 105 Z"
          fill="url(#glandGrad)"
          stroke="#0f766e"
          strokeWidth="1.5"
        />
        <path d="M 172 113 L 175 124 M 188 113 L 185 124" stroke="#0f766e" strokeWidth="0.8" opacity="0.7" />
        {/* Parathyroid dots */}
        <circle cx="170" cy="120" r="1.8" fill="#fbbf24" />
        <circle cx="190" cy="120" r="1.8" fill="#fbbf24" />
      </g>
      <text x="205" y="115" fontSize="9" fill="#0d9488" fontWeight="600">2</text>

      {/* 4. Parathyroid (label) */}
      <text x="205" y="125" fontSize="8" fill="#a16207" fontWeight="600">3</text>

      {/* 5. Adrenal glands (on top of kidneys - triangular caps) */}
      <g filter="url(#bodyShadow)">
        {/* Left adrenal (viewer right) */}
        <path
          d="M 200 175 Q 210 170 215 180 Q 215 192 208 195 Q 200 192 198 185 Z"
          fill="url(#glandGrad)"
          stroke="#0f766e"
          strokeWidth="1.5"
        />
        {/* Right adrenal (viewer left) */}
        <path
          d="M 160 175 Q 150 170 145 180 Q 145 192 152 195 Q 160 192 162 185 Z"
          fill="url(#glandGrad)"
          stroke="#0f766e"
          strokeWidth="1.5"
        />
        {/* Kidneys underneath */}
        <ellipse cx="155" cy="210" rx="12" ry="18" fill="#7c2d12" opacity="0.4" stroke="#7c2d12" strokeWidth="0.8" />
        <ellipse cx="205" cy="210" rx="12" ry="18" fill="#7c2d12" opacity="0.4" stroke="#7c2d12" strokeWidth="0.8" />
      </g>
      <text x="225" y="185" fontSize="9" fill="#0d9488" fontWeight="600">4</text>

      {/* 6. Pancreas (elongated, behind stomach) */}
      <g filter="url(#bodyShadow)">
        <path
          d="M 145 215 Q 170 200 200 215 Q 210 220 215 230 Q 200 235 175 232 Q 155 230 145 225 Z"
          fill="url(#glandGrad)"
          stroke="#0f766e"
          strokeWidth="1.5"
        />
        {/* Islets of Langerhans (small dots) */}
        <circle cx="165" cy="220" r="2" fill="#fbbf24" opacity="0.9" />
        <circle cx="180" cy="218" r="2" fill="#fbbf24" opacity="0.9" />
        <circle cx="195" cy="222" r="2" fill="#fbbf24" opacity="0.9" />
      </g>
      <text x="225" y="225" fontSize="9" fill="#0d9488" fontWeight="600">6</text>

      {/* 7. Ovaries OR 8. Testes — shown as dual symbol set (one of each shown for educational purposes) */}
      {/* Ovaries (female position - pelvis) */}
      <g filter="url(#bodyShadow)">
        <ellipse cx="167" cy="280" rx="5" ry="7" fill="url(#sexGlandGrad)" stroke="#831843" strokeWidth="1" />
        <ellipse cx="193" cy="280" rx="5" ry="7" fill="url(#sexGlandGrad)" stroke="#831843" strokeWidth="1" />
        {/* Uterus hint */}
        <path d="M 173 270 Q 180 265 187 270 L 185 285 Q 180 290 175 285 Z" fill="#fda4af" opacity="0.5" stroke="#831843" strokeWidth="0.8" />
      </g>
      <text x="210" y="280" fontSize="9" fill="#be185d" fontWeight="600">7</text>

      {/* Testes (male position - external, shown as smaller dashed hint) */}
      <g opacity="0.6" filter="url(#bodyShadow)">
        <ellipse cx="170" cy="420" rx="5" ry="7" fill="url(#sexGlandGrad)" stroke="#831843" strokeWidth="1" strokeDasharray="2 2" />
        <ellipse cx="190" cy="420" rx="5" ry="7" fill="url(#sexGlandGrad)" stroke="#831843" strokeWidth="1" strokeDasharray="2 2" />
      </g>
      <text x="210" y="425" fontSize="9" fill="#be185d" fontWeight="600">8</text>

      {/* Connecting lines (hypothalamic-pituitary axis) */}
      <line x1="180" y1="65" x2="180" y2="70" stroke="#831843" strokeWidth="1.5" />
    </svg>
  );
}

/* Male symbol ♂ — circle with arrow pointing to upper-right */
export function MaleSymbol(props: Props) {
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="maleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
        <radialGradient id="maleShine" cx="35%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <filter id="maleShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#1e3a8a" floodOpacity="0.5" />
        </filter>
      </defs>
      <g filter="url(#maleShadow)">
        {/* Circle */}
        <circle cx="48" cy="72" r="32" fill="url(#maleGrad)" stroke="#1e3a8a" strokeWidth="3" />
        <circle cx="48" cy="72" r="32" fill="url(#maleShine)" />
        {/* Arrow shaft */}
        <line x1="72" y1="48" x2="100" y2="20" stroke="#1e40af" strokeWidth="6" strokeLinecap="round" />
        {/* Arrow head */}
        <path d="M 100 20 L 90 18 L 88 28 L 100 20 Z" fill="#1e40af" stroke="#1e3a8a" strokeWidth="1" strokeLinejoin="round" />
        <path d="M 100 20 L 100 32 M 100 20 L 88 8" stroke="#1e40af" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M 100 20 L 88 32 L 100 32 L 100 20 Z" fill="none" />
        <path d="M 100 20 L 88 8 L 100 8 L 100 20 Z" fill="none" />
        <path d="M 100 20 L 100 8 L 110 12 M 100 20 L 100 32 L 110 28" stroke="#1e40af" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M 100 20 L 88 8 M 100 20 L 100 8 M 100 20 L 100 32" stroke="#1e40af" strokeWidth="6" strokeLinecap="round" fill="none" />
        {/* Cleaner arrowhead */}
        <path d="M 100 20 L 110 12 M 100 20 L 110 28 M 100 20 L 95 10 M 100 20 L 95 30" stroke="none" fill="none" />
      </g>
      <path
        d="M 100 20 L 110 10 M 100 20 L 110 30"
        stroke="#1e40af"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/* Female symbol ♀ — circle with cross below */
export function FemaleSymbol(props: Props) {
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="femaleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#9d174d" />
        </linearGradient>
        <radialGradient id="femaleShine" cx="35%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <filter id="femaleShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#500724" floodOpacity="0.5" />
        </filter>
      </defs>
      <g filter="url(#femaleShadow)">
        {/* Circle */}
        <circle cx="60" cy="42" r="30" fill="url(#femaleGrad)" stroke="#500724" strokeWidth="3" />
        <circle cx="60" cy="42" r="30" fill="url(#femaleShine)" />
        {/* Vertical line */}
        <line x1="60" y1="72" x2="60" y2="108" stroke="#9d174d" strokeWidth="6" strokeLinecap="round" />
        {/* Horizontal crossbar */}
        <line x1="42" y1="92" x2="78" y2="92" stroke="#9d174d" strokeWidth="6" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/* Hypothalamus-Pituitary Axis - detailed close-up */
export function HypothalamusPituitary(props: Props) {
  return (
    <svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="hp-brain" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#fbcfe8" />
          <stop offset="60%" stopColor="#db2777" />
          <stop offset="100%" stopColor="#500724" />
        </radialGradient>
        <radialGradient id="hp-pit" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="60%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#3b0764" />
        </radialGradient>
        <filter id="hp-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#500724" floodOpacity="0.5" />
        </filter>
        <linearGradient id="hp-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#fce7f3" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect width="360" height="220" fill="url(#hp-bg)" rx="16" />

      {/* Brain outline (cerebrum) */}
      <g filter="url(#hp-shadow)">
        <path
          d="M 80 50 C 60 50 50 80 60 110 C 70 130 100 135 130 130 C 150 128 170 125 180 120 L 180 50 Z
             M 280 50 C 300 50 310 80 300 110 C 290 130 260 135 230 130 C 210 128 190 125 180 120 L 180 50 Z"
          fill="url(#hp-brain)"
          stroke="#500724"
          strokeWidth="2"
        />
      </g>

      {/* Hypothalamus (small region) */}
      <g filter="url(#hp-shadow)">
        <ellipse cx="180" cy="100" rx="30" ry="14" fill="url(#hp-brain)" stroke="#500724" strokeWidth="2" opacity="0.95" />
        {/* Hypothalamic nuclei dots */}
        <circle cx="165" cy="98" r="2" fill="#fff" opacity="0.7" />
        <circle cx="180" cy="96" r="2" fill="#fff" opacity="0.7" />
        <circle cx="195" cy="98" r="2" fill="#fff" opacity="0.7" />
        <circle cx="172" cy="105" r="2" fill="#fff" opacity="0.7" />
        <circle cx="188" cy="105" r="2" fill="#fff" opacity="0.7" />
      </g>

      {/* Pituitary stalk (infundibulum) */}
      <rect x="176" y="115" width="8" height="20" fill="#7c3aed" opacity="0.85" />

      {/* Pituitary gland (anterior + posterior) */}
      <g filter="url(#hp-shadow)">
        <ellipse cx="180" cy="150" rx="22" ry="15" fill="url(#hp-pit)" stroke="#3b0764" strokeWidth="2" />
        {/* Anterior pituitary (larger, front) */}
        <ellipse cx="174" cy="150" rx="14" ry="12" fill="#a78bfa" opacity="0.7" />
        {/* Posterior pituitary (smaller, back) */}
        <ellipse cx="194" cy="150" rx="6" ry="9" fill="#5b21b6" opacity="0.85" />

        {/* Hormone release dots */}
        <circle cx="160" cy="145" r="1.5" fill="#fbbf24" />
        <circle cx="170" cy="160" r="1.5" fill="#fbbf24" />
        <circle cx="180" cy="142" r="1.5" fill="#fbbf24" />
        <circle cx="190" cy="158" r="1.5" fill="#ef4444" />
        <circle cx="195" cy="145" r="1.5" fill="#ef4444" />
      </g>

      {/* Hormone flow arrows downward */}
      <g stroke="#0d9488" strokeWidth="1.5" fill="none" opacity="0.6" strokeDasharray="3 2">
        <path d="M 180 165 Q 180 180 180 195" />
        <path d="M 165 165 Q 155 180 150 195" />
        <path d="M 195 165 Q 205 180 210 195" />
      </g>

      {/* Labels */}
      <text x="180" y="218" textAnchor="middle" fontSize="10" fill="#500724" fontWeight="600">
        Hypothalamus → Pituitary → Hormones
      </text>
    </svg>
  );
}

/* Steroid hormone molecule (e.g., testosterone/cortisol) — 4-ring structure */
export function SteroidMolecule(props: Props) {
  return (
    <svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="steroidBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#f0fdfa" stopOpacity="0.7" />
        </linearGradient>
        <radialGradient id="atomC" cx="35%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1e293b" />
        </radialGradient>
        <radialGradient id="atomO" cx="35%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#fecaca" />
          <stop offset="100%" stopColor="#dc2626" />
        </radialGradient>
        <radialGradient id="atomH" cx="35%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#94a3b8" />
        </radialGradient>
        <filter id="mol-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#0f766e" floodOpacity="0.4" />
        </filter>
      </defs>
      <rect width="360" height="240" fill="url(#steroidBg)" rx="16" />

      {/* Steroid nucleus = 3 six-membered rings (A, B, C) + 1 five-membered ring (D) */}
      <g filter="url(#mol-shadow)">
        {/* Ring A (bottom-left, six-membered) */}
        <polygon
          points="100,140 130,140 145,165 130,190 100,190 85,165"
          fill="none"
          stroke="#0d9488"
          strokeWidth="3"
        />
        {/* Ring B (middle, six-membered) - shares edge with A */}
        <polygon
          points="130,140 160,140 175,165 160,190 145,165 130,140"
          fill="none"
          stroke="#0d9488"
          strokeWidth="3"
          opacity="0"
        />
        <polygon
          points="145,165 175,165 190,140 175,115 145,115 130,140"
          fill="none"
          stroke="#0d9488"
          strokeWidth="3"
        />
        {/* Ring C (top-right, six-membered) - shares edge with B */}
        <polygon
          points="190,140 220,140 235,165 220,190 190,190 175,165"
          fill="none"
          stroke="#0d9488"
          strokeWidth="3"
        />
        {/* Ring D (five-membered, far right) - shares edge with C */}
        <polygon
          points="235,165 260,155 275,180 260,205 235,190"
          fill="none"
          stroke="#0d9488"
          strokeWidth="3"
        />

        {/* Carbon atoms at vertices */}
        {[
          [100, 140], [130, 140], [145, 115], [175, 115], [190, 140], [220, 140],
          [260, 155], [275, 180], [260, 205], [235, 190], [220, 190], [190, 190],
          [160, 190], [145, 165], [175, 165], [130, 190], [85, 165], [100, 190], [235, 165],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4.5" fill="url(#atomC)" stroke="#0f172a" strokeWidth="0.5" />
        ))}

        {/* Oxygen atoms (=O) - ketone groups characteristic of steroids */}
        {/* =O on Ring A */}
        <line x1="100" y1="140" x2="80" y2="120" stroke="#dc2626" strokeWidth="2" />
        <line x1="103" y1="138" x2="83" y2="118" stroke="#dc2626" strokeWidth="2" />
        <circle cx="78" cy="118" r="5.5" fill="url(#atomO)" stroke="#7f1d1d" strokeWidth="0.6" />

        {/* =O on Ring D (typical of testosterone/cortisol) */}
        <line x1="275" y1="180" x2="295" y2="165" stroke="#dc2626" strokeWidth="2" />
        <line x1="277" y1="183" x2="297" y2="168" stroke="#dc2626" strokeWidth="2" />
        <circle cx="298" cy="163" r="5.5" fill="url(#atomO)" stroke="#7f1d1d" strokeWidth="0.6" />

        {/* OH group (hydroxyl) */}
        <line x1="260" y1="205" x2="270" y2="225" stroke="#16a34a" strokeWidth="2" />
        <circle cx="272" cy="227" r="5" fill="url(#atomO)" stroke="#7f1d1d" strokeWidth="0.6" />
        <text x="280" y="232" fontSize="9" fill="#15803d" fontWeight="600">OH</text>

        {/* Methyl group CH3 (vertical line up from C10/C13) */}
        <line x1="175" y1="115" x2="175" y2="92" stroke="#1e293b" strokeWidth="2" />
        <circle cx="175" cy="88" r="4" fill="url(#atomC)" />
        <text x="180" y="92" fontSize="9" fill="#1e293b" fontWeight="600">CH₃</text>

        <line x1="220" y1="140" x2="220" y2="117" stroke="#1e293b" strokeWidth="2" />
        <circle cx="220" cy="113" r="4" fill="url(#atomC)" />
        <text x="225" y="117" fontSize="9" fill="#1e293b" fontWeight="600">CH₃</text>

        {/* Double bond inside Ring B */}
        <line x1="148" y1="118" x2="172" y2="118" stroke="#0d9488" strokeWidth="2" opacity="0.7" />
      </g>

      {/* Label */}
      <text x="180" y="230" textAnchor="middle" fontSize="11" fill="#0f766e" fontWeight="700">
        Steroid Nucleus (A-B-C-D rings)
      </text>
    </svg>
  );
}

/* Thyroid gland - butterfly shape close-up */
export function ThyroidGland(props: Props) {
  return (
    <svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="thyGrad" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="55%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#854d0e" />
        </radialGradient>
        <radialGradient id="thyShine" cx="35%" cy="25%" r="40%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="thyBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.7" />
        </linearGradient>
        <filter id="thyShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#854d0e" floodOpacity="0.5" />
        </filter>
      </defs>
      <rect width="360" height="220" fill="url(#thyBg)" rx="16" />

      {/* Trachea hint */}
      <rect x="172" y="60" width="16" height="100" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.2" rx="2" opacity="0.7" />
      {[68, 78, 88, 98, 108, 118, 128, 138, 148].map((y) => (
        <line key={y} x1="172" y1={y} x2="188" y2={y} stroke="#475569" strokeWidth="0.9" />
      ))}

      {/* Thyroid - two lobes + isthmus */}
      <g filter="url(#thyShadow)">
        {/* Left lobe */}
        <path
          d="M 165 75 Q 145 80 138 105 Q 138 135 152 155 Q 165 165 170 155 L 170 80 Z"
          fill="url(#thyGrad)"
          stroke="#854d0e"
          strokeWidth="2.5"
        />
        <path
          d="M 165 75 Q 145 80 138 105 Q 138 135 152 155 Q 165 165 170 155 L 170 80 Z"
          fill="url(#thyShine)"
        />
        {/* Right lobe */}
        <path
          d="M 195 75 Q 215 80 222 105 Q 222 135 208 155 Q 195 165 190 155 L 190 80 Z"
          fill="url(#thyGrad)"
          stroke="#854d0e"
          strokeWidth="2.5"
        />
        <path
          d="M 195 75 Q 215 80 222 105 Q 222 135 208 155 Q 195 165 190 155 L 190 80 Z"
          fill="url(#thyShine)"
        />
        {/* Isthmus connecting */}
        <rect x="170" y="115" width="20" height="20" fill="url(#thyGrad)" stroke="#854d0e" strokeWidth="2" rx="3" />

        {/* Follicles (small circles) inside thyroid showing hormone production */}
        {[
          [155, 100], [165, 120], [150, 140],
          [205, 100], [200, 120], [210, 140],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="#fff" opacity="0.7" stroke="#854d0e" strokeWidth="0.5" />
        ))}
      </g>

      {/* Parathyroid glands (4 small dots on back of thyroid) */}
      <g>
        <circle cx="148" cy="105" r="3.5" fill="#fde68a" stroke="#92400e" strokeWidth="1" />
        <circle cx="148" cy="145" r="3.5" fill="#fde68a" stroke="#92400e" strokeWidth="1" />
        <circle cx="212" cy="105" r="3.5" fill="#fde68a" stroke="#92400e" strokeWidth="1" />
        <circle cx="212" cy="145" r="3.5" fill="#fde68a" stroke="#92400e" strokeWidth="1" />
      </g>

      <text x="180" y="205" textAnchor="middle" fontSize="11" fill="#854d0e" fontWeight="700">
        Thyroid + Parathyroid (4 dots)
      </text>
    </svg>
  );
}

/* Adrenal gland sitting on top of kidney */
export function AdrenalGland(props: Props) {
  return (
    <svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="adrGrad" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#fda4af" />
          <stop offset="55%" stopColor="#e11d48" />
          <stop offset="100%" stopColor="#4c0519" />
        </radialGradient>
        <radialGradient id="kidneyGrad" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="55%" stopColor="#c2410c" />
          <stop offset="100%" stopColor="#7c2d12" />
        </radialGradient>
        <radialGradient id="adrShine" cx="35%" cy="25%" r="40%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="adrBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#fee2e2" stopOpacity="0.7" />
        </linearGradient>
        <filter id="adrShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#4c0519" floodOpacity="0.5" />
        </filter>
      </defs>
      <rect width="360" height="220" fill="url(#adrBg)" rx="16" />

      {/* Kidney (bean shape) */}
      <g filter="url(#adrShadow)">
        <path
          d="M 130 130 Q 100 125 90 150 Q 85 175 110 190 Q 145 195 160 175 Q 170 160 165 145 Q 155 130 130 130 Z"
          fill="url(#kidneyGrad)"
          stroke="#7c2d12"
          strokeWidth="2.5"
        />
        <path
          d="M 130 130 Q 100 125 90 150 Q 85 175 110 190 Q 145 195 160 175 Q 170 160 165 145 Q 155 130 130 130 Z"
          fill="url(#adrShine)"
        />
        {/* Kidney indentation (hilum) */}
        <path d="M 130 130 Q 140 145 130 165" stroke="#7c2d12" strokeWidth="2" fill="none" opacity="0.6" />

        {/* Adrenal gland sitting on top (triangular cap) */}
        <path
          d="M 110 75 Q 140 65 165 75 Q 170 95 155 110 Q 130 115 115 105 Q 105 90 110 75 Z"
          fill="url(#adrGrad)"
          stroke="#4c0519"
          strokeWidth="2.5"
        />
        <path
          d="M 110 75 Q 140 65 165 75 Q 170 95 155 110 Q 130 115 115 105 Q 105 90 110 75 Z"
          fill="url(#adrShine)"
        />

        {/* Cortex layers (concentric inside) */}
        <path
          d="M 118 82 Q 140 75 158 82 Q 162 95 150 105 Q 130 108 120 100 Q 113 92 118 82 Z"
          fill="none"
          stroke="#fff"
          strokeWidth="1.2"
          opacity="0.4"
        />
        {/* Zona glomerulosa, fasciculata, reticularis lines */}
        <line x1="125" y1="85" x2="135" y2="92" stroke="#fff" strokeWidth="0.7" opacity="0.5" />
        <line x1="140" y1="83" x2="148" y2="92" stroke="#fff" strokeWidth="0.7" opacity="0.5" />

        {/* Medulla (central darker region) */}
        <ellipse cx="137" cy="93" rx="8" ry="6" fill="#7f1d1d" opacity="0.7" />
      </g>

      {/* Right side - second kidney + adrenal (mirror, smaller for depth) */}
      <g filter="url(#adrShadow)" opacity="0.7" transform="translate(160 30) scale(0.7)">
        <path
          d="M 200 130 Q 230 125 240 150 Q 245 175 220 190 Q 185 195 170 175 Q 160 160 165 145 Q 175 130 200 130 Z"
          fill="url(#kidneyGrad)"
          stroke="#7c2d12"
          strokeWidth="2.5"
        />
        <path
          d="M 200 75 Q 170 65 145 75 Q 140 95 155 110 Q 180 115 195 105 Q 205 90 200 75 Z"
          fill="url(#adrGrad)"
          stroke="#4c0519"
          strokeWidth="2.5"
        />
      </g>

      <text x="180" y="210" textAnchor="middle" fontSize="11" fill="#4c0519" fontWeight="700">
        Adrenal Gland on Kidney
      </text>
    </svg>
  );
}

/* Pancreas with Islets of Langerhans */
export function PancreasGland(props: Props) {
  return (
    <svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="pancGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef9c3" />
          <stop offset="50%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#854d0e" />
        </linearGradient>
        <radialGradient id="isletGrad" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#fecaca" />
          <stop offset="60%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#450a0a" />
        </radialGradient>
        <linearGradient id="pancBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#fef9c3" stopOpacity="0.7" />
        </linearGradient>
        <filter id="pancShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#854d0e" floodOpacity="0.5" />
        </filter>
        <filter id="isletGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="360" height="220" fill="url(#pancBg)" rx="16" />

      {/* Pancreas body - elongated shape with head, body, tail */}
      <g filter="url(#pancShadow)">
        <path
          d="M 80 130
             Q 100 110 130 115
             Q 160 120 190 110
             Q 220 100 250 105
             Q 275 115 280 130
             Q 275 145 250 145
             Q 220 145 190 140
             Q 160 140 130 145
             Q 105 150 90 145
             Q 75 140 80 130 Z"
          fill="url(#pancGrad)"
          stroke="#854d0e"
          strokeWidth="2.5"
        />
        {/* Shine */}
        <path
          d="M 80 130 Q 100 110 130 115 Q 160 120 190 110 Q 220 100 250 105 Q 275 115 280 130"
          stroke="#fff"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
        />

        {/* Pancreatic duct (running length) */}
        <path
          d="M 90 132 Q 130 125 180 122 Q 230 120 270 128"
          stroke="#fff"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
          strokeDasharray="3 2"
        />

        {/* Islets of Langerhans (endocrine regions) - glowing red dots */}
        <g filter="url(#isletGlow)">
          <circle cx="120" cy="125" r="7" fill="url(#isletGrad)" stroke="#450a0a" strokeWidth="1" />
          <circle cx="160" cy="130" r="8" fill="url(#isletGrad)" stroke="#450a0a" strokeWidth="1" />
          <circle cx="200" cy="122" r="6" fill="url(#isletGrad)" stroke="#450a0a" strokeWidth="1" />
          <circle cx="240" cy="125" r="7" fill="url(#isletGrad)" stroke="#450a0a" strokeWidth="1" />
        </g>

        {/* Beta cells (insulin - blue) and Alpha cells (glucagon - red) within islets */}
        <g>
          <circle cx="118" cy="123" r="1.8" fill="#3b82f6" />
          <circle cx="123" cy="127" r="1.8" fill="#3b82f6" />
          <circle cx="120" cy="120" r="1.5" fill="#ef4444" />
          <circle cx="158" cy="128" r="1.8" fill="#3b82f6" />
          <circle cx="163" cy="132" r="1.8" fill="#3b82f6" />
          <circle cx="160" cy="125" r="1.5" fill="#ef4444" />
          <circle cx="198" cy="120" r="1.8" fill="#3b82f6" />
          <circle cx="203" cy="124" r="1.8" fill="#3b82f6" />
          <circle cx="200" cy="117" r="1.5" fill="#ef4444" />
          <circle cx="238" cy="123" r="1.8" fill="#3b82f6" />
          <circle cx="243" cy="127" r="1.8" fill="#3b82f6" />
          <circle cx="240" cy="120" r="1.5" fill="#ef4444" />
        </g>
      </g>

      <text x="180" y="200" textAnchor="middle" fontSize="11" fill="#854d0e" fontWeight="700">
        Pancreas + Islets of Langerhans
      </text>
      <text x="180" y="215" textAnchor="middle" fontSize="9" fill="#450a0a">
        🔴 alpha (glucagon) · 🔵 beta (insulin)
      </text>
    </svg>
  );
}
