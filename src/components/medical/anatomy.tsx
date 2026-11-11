import type { SVGProps } from "react";

type AnatomyProps = SVGProps<SVGSVGElement>;

/* ============================================================
   Realistic medical-style anatomical illustrations.
   Each SVG uses:
   - Multi-layer gradients for tissue depth
   - feDropShadow + feGaussianBlur for soft 3D appearance
   - Anatomically positioned vessels, gyri, bronchi, etc.
   - Subtle highlight overlays for "wet" tissue look
   ============================================================ */

/* Pre-computed stable coordinates to avoid SSR/client float
   precision drift in Math.cos/Math.sin between Node and V8. */

const CELL_MEMBRANE_DOTS = Array.from({ length: 36 }).map((_, i) => {
  const angle = (i / 36) * Math.PI * 2;
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);
  // Round to 4 decimals for stable SSR/client output
  const round = (n: number) => Math.round(n * 10000) / 10000;
  return {
    i,
    x: round(180 + cosA * 145),
    y: round(160 + sinA * 115),
    dx: round(cosA * 4),
    dy: round(sinA * 4),
  };
});

const DNA_PAIRS = (() => {
  const pairCount = 16;
  const round = (n: number) => Math.round(n * 10000) / 10000;
  return Array.from({ length: pairCount }).map((_, i) => {
    const t = i / (pairCount - 1);
    const y = round(25 + t * 250);
    const phase = i * 0.55;
    const sinP = Math.sin(phase);
    return {
      i,
      y,
      phase,
      sinP: round(sinP),
      x1: round(180 + sinP * 65),
      x2: round(180 - sinP * 65),
      ctrlX1: round(180 + Math.sin(phase - 0.27) * 70),
      ctrlX2: round(180 - Math.sin(phase - 0.27) * 70),
    };
  });
})();

/* 1. REALISTIC HUMAN HEART
   - 4 chambers visible (RA, LA, RV, LV)
   - Aorta arch with branches
   - Pulmonary trunk & arteries
   - Superior & inferior vena cava
   - Coronary arteries on surface
   - Apex at bottom
*/
export function HeartAnatomy(props: AnatomyProps) {
  return (
    <svg viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        {/* Muscle tissue gradient - deep red */}
        <radialGradient id="r-heart-muscle" cx="42%" cy="38%" r="70%">
          <stop offset="0%" stopColor="#fda4af" />
          <stop offset="35%" stopColor="#e11d48" />
          <stop offset="75%" stopColor="#9f1239" />
          <stop offset="100%" stopColor="#4c0519" />
        </radialGradient>
        {/* Vessel gradient - blue-red for oxygenated/deoxygenated */}
        <linearGradient id="r-heart-artery" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fecaca" />
          <stop offset="50%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </linearGradient>
        <linearGradient id="r-heart-vein" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="50%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        {/* Tissue highlight */}
        <radialGradient id="r-heart-shine" cx="35%" cy="28%" r="42%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#fff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        {/* Background card */}
        <linearGradient id="r-heart-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#fee2e2" stopOpacity="0.7" />
        </linearGradient>
        <filter id="r-heart-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#4c0519" floodOpacity="0.55" />
        </filter>
        <filter id="r-heart-vessel-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#1e293b" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="360" height="320" fill="url(#r-heart-bg)" rx="16" />

      {/* ===== Great vessels (back layer) ===== */}
      <g filter="url(#r-heart-vessel-shadow)">
        {/* Superior vena cava - top right (anatomically patient left) */}
        <path
          d="M 220 30 L 222 90 Q 222 110 210 118 L 200 122"
          fill="none"
          stroke="url(#r-heart-vein)"
          strokeWidth="13"
          strokeLinecap="round"
        />
        {/* Inferior vena cava - bottom right */}
        <path
          d="M 218 270 L 220 200 Q 220 180 208 175 L 198 172"
          fill="none"
          stroke="url(#r-heart-vein)"
          strokeWidth="13"
          strokeLinecap="round"
        />
        {/* Aorta arch - top */}
        <path
          d="M 165 50 Q 165 25 145 22 Q 120 20 105 40 Q 90 60 90 95"
          fill="none"
          stroke="url(#r-heart-artery)"
          strokeWidth="15"
          strokeLinecap="round"
        />
        {/* Aorta branches */}
        <path d="M 145 22 L 138 8" stroke="url(#r-heart-artery)" strokeWidth="4" strokeLinecap="round" />
        <path d="M 125 18 L 118 4" stroke="url(#r-heart-artery)" strokeWidth="4" strokeLinecap="round" />
        <path d="M 105 22 L 100 6" stroke="url(#r-heart-artery)" strokeWidth="4" strokeLinecap="round" />
        {/* Pulmonary trunk */}
        <path
          d="M 165 70 Q 175 50 178 30"
          fill="none"
          stroke="url(#r-heart-artery)"
          strokeWidth="11"
          strokeLinecap="round"
          opacity="0.95"
        />
        {/* Pulmonary arteries branching */}
        <path d="M 178 30 Q 195 25 210 35" stroke="url(#r-heart-artery)" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M 178 30 Q 160 25 145 35" stroke="url(#r-heart-artery)" strokeWidth="6" strokeLinecap="round" fill="none" />
        {/* Pulmonary veins (returning oxygenated blood) */}
        <path d="M 110 110 Q 95 100 85 90" stroke="url(#r-heart-vein)" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M 115 130 Q 100 130 90 135" stroke="url(#r-heart-vein)" strokeWidth="5" strokeLinecap="round" fill="none" />
      </g>

      {/* ===== Heart body ===== */}
      <g filter="url(#r-heart-shadow)">
        {/* Main heart mass - realistic shape with apex */}
        <path
          d="M 130 95
             C 95 80, 75 105, 85 145
             C 90 175, 110 215, 145 250
             C 165 270, 180 275, 200 260
             C 230 235, 250 200, 255 165
             C 260 125, 240 90, 200 95
             C 180 95, 160 90, 130 95 Z"
          fill="url(#r-heart-muscle)"
          stroke="#4c0519"
          strokeWidth="2.5"
        />
        {/* Tissue shine overlay */}
        <path
          d="M 130 95
             C 95 80, 75 105, 85 145
             C 90 175, 110 215, 145 250
             C 165 270, 180 275, 200 260
             C 230 235, 250 200, 255 165
             C 260 125, 240 90, 200 95
             C 180 95, 160 90, 130 95 Z"
          fill="url(#r-heart-shine)"
        />

        {/* ===== Coronary arteries on surface (LAD & LCX) ===== */}
        <g stroke="#fecaca" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.85">
          {/* Left anterior descending */}
          <path d="M 175 100 Q 175 130 180 170 Q 182 210 195 250" />
          {/* Branches */}
          <path d="M 178 140 Q 165 145 155 155" />
          <path d="M 180 175 Q 200 175 215 185" />
          <path d="M 182 210 Q 170 220 162 230" />
          {/* Circumflex */}
          <path d="M 175 105 Q 140 110 110 125 Q 95 140 100 160" />
          {/* Right coronary */}
          <path d="M 240 110 Q 235 150 220 175 Q 215 200 220 220" />
        </g>

        {/* ===== Chamber separation lines ===== */}
        <g stroke="#fff" strokeWidth="1.6" fill="none" opacity="0.35">
          {/* Atrioventricular septum */}
          <path d="M 135 125 Q 175 135 220 120" />
          {/* Interventricular septum */}
          <path d="M 178 125 L 188 245" />
        </g>

        {/* Apex marker */}
        <ellipse cx="195" cy="258" rx="6" ry="3" fill="#4c0519" opacity="0.5" />
      </g>

      {/* Labels: chamber indicators as small dots */}
      <g fill="#fff" opacity="0.85">
        <circle cx="160" cy="115" r="2.5" />
        <circle cx="210" cy="115" r="2.5" />
        <circle cx="160" cy="180" r="2.5" />
        <circle cx="215" cy="180" r="2.5" />
      </g>
    </svg>
  );
}

/* 2. REALISTIC HUMAN BRAIN
   - Cerebrum with detailed gyri/sulci
   - Cerebellum with folia texture
   - Brainstem (medulla, pons)
   - Two hemispheres with central fissure
*/
export function BrainAnatomy(props: AnatomyProps) {
  return (
    <svg viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="r-brain-tissue" cx="40%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#fbcfe8" />
          <stop offset="40%" stopColor="#f472b6" />
          <stop offset="75%" stopColor="#be185d" />
          <stop offset="100%" stopColor="#500724" />
        </radialGradient>
        <radialGradient id="r-brain-cerebellum" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#fce7f3" />
          <stop offset="50%" stopColor="#db2777" />
          <stop offset="100%" stopColor="#6b0c33" />
        </radialGradient>
        <linearGradient id="r-brain-stem" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#5b21b6" />
        </linearGradient>
        <radialGradient id="r-brain-shine" cx="35%" cy="28%" r="42%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="r-brain-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#fce7f3" stopOpacity="0.7" />
        </linearGradient>
        <filter id="r-brain-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#500724" floodOpacity="0.5" />
        </filter>
        <filter id="r-brain-gyri-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="1" floodColor="#500724" floodOpacity="0.4" />
        </filter>
      </defs>

      <rect width="360" height="320" fill="url(#r-brain-bg)" rx="16" />

      {/* ===== Brainstem (back layer) ===== */}
      <g filter="url(#r-brain-shadow)">
        <path
          d="M 175 220 Q 170 250 165 280 L 195 280 Q 190 250 185 220 Z"
          fill="url(#r-brain-stem)"
          stroke="#3b0764"
          strokeWidth="2"
        />
        {/* Pons bulge */}
        <ellipse cx="180" cy="235" rx="14" ry="8" fill="url(#r-brain-stem)" stroke="#3b0764" strokeWidth="1.5" />
        {/* Medulla texture lines */}
        <line x1="172" y1="255" x2="188" y2="255" stroke="#3b0764" strokeWidth="1" opacity="0.5" />
        <line x1="172" y1="265" x2="188" y2="265" stroke="#3b0764" strokeWidth="1" opacity="0.5" />
      </g>

      {/* ===== Cerebellum (back, behind cerebrum) ===== */}
      <g filter="url(#r-brain-shadow)">
        <ellipse
          cx="115"
          cy="200"
          rx="40"
          ry="32"
          fill="url(#r-brain-cerebellum)"
          stroke="#500724"
          strokeWidth="2.5"
        />
        <ellipse cx="115" cy="200" rx="40" ry="32" fill="url(#r-brain-shine)" />
        {/* Cerebellum folia (parallel lines) */}
        <g stroke="#6b0c33" strokeWidth="1" fill="none" opacity="0.6">
          {[185, 195, 205, 215, 225].map((y) => (
            <path key={y} d={`M 80 ${y} Q 115 ${y - 5} 150 ${y}`} />
          ))}
        </g>
        {/* Right cerebellum */}
        <ellipse
          cx="245"
          cy="200"
          rx="40"
          ry="32"
          fill="url(#r-brain-cerebellum)"
          stroke="#500724"
          strokeWidth="2.5"
        />
        <ellipse cx="245" cy="200" rx="40" ry="32" fill="url(#r-brain-shine)" />
        <g stroke="#6b0c33" strokeWidth="1" fill="none" opacity="0.6">
          {[185, 195, 205, 215, 225].map((y) => (
            <path key={y} d={`M 210 ${y} Q 245 ${y - 5} 280 ${y}`} />
          ))}
        </g>
      </g>

      {/* ===== Cerebrum (front layer) ===== */}
      <g filter="url(#r-brain-shadow)">
        {/* Left hemisphere */}
        <path
          d="M 180 60
             C 110 55, 75 95, 75 145
             C 75 175, 90 200, 110 215
             C 130 220, 155 215, 170 205
             C 178 200, 180 195, 180 190
             L 180 60 Z"
          fill="url(#r-brain-tissue)"
          stroke="#500724"
          strokeWidth="2.5"
        />
        {/* Right hemisphere */}
        <path
          d="M 180 60
             C 250 55, 285 95, 285 145
             C 285 175, 270 200, 250 215
             C 230 220, 205 215, 190 205
             C 182 200, 180 195, 180 190
             L 180 60 Z"
          fill="url(#r-brain-tissue)"
          stroke="#500724"
          strokeWidth="2.5"
        />
        {/* Tissue shine on both hemispheres */}
        <path
          d="M 180 60 C 110 55, 75 95, 75 145 C 75 175, 90 200, 110 215 C 130 220, 155 215, 170 205 C 178 200, 180 195, 180 190 L 180 60 Z"
          fill="url(#r-brain-shine)"
        />
        <path
          d="M 180 60 C 250 55, 285 95, 285 145 C 285 175, 270 200, 250 215 C 230 220, 205 215, 190 205 C 182 200, 180 195, 180 190 L 180 60 Z"
          fill="url(#r-brain-shine)"
        />

        {/* ===== Detailed gyri/sulci pattern ===== */}
        <g stroke="#fff" strokeWidth="1.8" fill="none" opacity="0.75" filter="url(#r-brain-gyri-shadow)">
          {/* Left hemisphere gyri - wavy parallel-ish lines */}
          <path d="M 95 90 Q 115 80 135 95 Q 145 85 160 95" />
          <path d="M 85 110 Q 105 105 125 115 Q 140 110 160 115" />
          <path d="M 80 130 Q 100 125 125 135 Q 145 130 165 135" />
          <path d="M 80 150 Q 100 145 125 155 Q 145 150 165 155" />
          <path d="M 85 170 Q 105 165 130 175 Q 150 170 165 175" />
          <path d="M 95 190 Q 115 185 135 195 Q 150 190 160 195" />

          {/* Right hemisphere gyri */}
          <path d="M 265 90 Q 245 80 225 95 Q 215 85 200 95" />
          <path d="M 275 110 Q 255 105 235 115 Q 220 110 200 115" />
          <path d="M 280 130 Q 260 125 235 135 Q 215 130 195 135" />
          <path d="M 280 150 Q 260 145 235 155 Q 215 150 195 155" />
          <path d="M 275 170 Q 255 165 230 175 Q 210 170 195 175" />
          <path d="M 265 190 Q 245 185 225 195 Q 210 190 200 195" />
        </g>

        {/* Central fissure (Rolandic) - deep groove */}
        <path
          d="M 180 60 Q 175 100 178 140 Q 180 170 182 195"
          stroke="#500724"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Lateral sulcus (Sylvian) */}
        <path
          d="M 95 145 Q 130 155 165 150"
          stroke="#500724"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M 265 145 Q 230 155 195 150"
          stroke="#500724"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
      </g>

      {/* Corpus callosum hint */}
      <path
        d="M 130 125 Q 180 115 230 125"
        stroke="#fce7f3"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
        strokeDasharray="3 2"
      />
    </svg>
  );
}

/* 3. REALISTIC RESPIRATORY SYSTEM
   - Trachea with cartilage rings
   - Bronchial tree branching into bronchioles
   - Two lungs with lobes (3 right, 2 left)
   - Diaphragm at bottom
   - Realistic lung shape with apex & base
*/
export function RespiratoryAnatomy(props: AnatomyProps) {
  return (
    <svg viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="r-lung-tissue" cx="50%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#ecfeff" />
          <stop offset="40%" stopColor="#67e8f9" />
          <stop offset="75%" stopColor="#0e7490" />
          <stop offset="100%" stopColor="#155e75" />
        </radialGradient>
        <linearGradient id="r-trachea-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="50%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
        <linearGradient id="r-bronchus-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <linearGradient id="r-diaphragm-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f9a8d4" />
          <stop offset="100%" stopColor="#9d174d" />
        </linearGradient>
        <radialGradient id="r-lung-shine" cx="35%" cy="25%" r="40%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="r-lung-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ecfeff" stopOpacity="0.7" />
        </linearGradient>
        <filter id="r-lung-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#155e75" floodOpacity="0.5" />
        </filter>
        <filter id="r-lung-vessel-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#155e75" floodOpacity="0.4" />
        </filter>
      </defs>

      <rect width="360" height="320" fill="url(#r-lung-bg)" rx="16" />

      {/* ===== Larynx at top ===== */}
      <g filter="url(#r-lung-shadow)">
        <ellipse cx="180" cy="35" rx="18" ry="13" fill="url(#r-trachea-grad)" stroke="#475569" strokeWidth="1.8" />
        <ellipse cx="180" cy="35" rx="18" ry="13" fill="url(#r-lung-shine)" />
        {/* Thyroid cartilage hint */}
        <path d="M 168 32 L 192 32" stroke="#475569" strokeWidth="1.2" opacity="0.6" />
      </g>

      {/* ===== Trachea with cartilage rings ===== */}
      <g filter="url(#r-lung-shadow)">
        <rect x="173" y="42" width="14" height="70" fill="url(#r-trachea-grad)" stroke="#475569" strokeWidth="1.5" rx="3" />
        {/* Cartilage rings (C-shaped) */}
        {[48, 56, 64, 72, 80, 88, 96, 104].map((y) => (
          <line key={y} x1="173" y1={y} x2="187" y2={y} stroke="#334155" strokeWidth="1.4" />
        ))}
      </g>

      {/* ===== Bronchial tree ===== */}
      <g filter="url(#r-lung-vessel-shadow)" stroke="url(#r-bronchus-grad)" fill="none" strokeLinecap="round">
        {/* Main bronchi */}
        <path d="M 180 110 Q 145 122 120 145" strokeWidth="7" />
        <path d="M 180 110 Q 215 122 240 145" strokeWidth="7" />
        {/* Secondary bronchi */}
        <path d="M 120 145 Q 100 158 85 180" strokeWidth="5" />
        <path d="M 120 145 Q 120 170 110 195" strokeWidth="4.5" />
        <path d="M 120 145 Q 140 160 150 185" strokeWidth="4" />
        <path d="M 240 145 Q 260 158 275 180" strokeWidth="5" />
        <path d="M 240 145 Q 240 170 250 195" strokeWidth="4.5" />
        <path d="M 240 145 Q 220 160 210 185" strokeWidth="4" />
        {/* Tertiary bronchioles */}
        <path d="M 85 180 Q 75 195 70 215" strokeWidth="3" />
        <path d="M 85 180 Q 90 200 88 220" strokeWidth="3" />
        <path d="M 110 195 Q 105 215 100 230" strokeWidth="2.5" />
        <path d="M 150 185 Q 155 205 152 225" strokeWidth="2.5" />
        <path d="M 275 180 Q 285 195 290 215" strokeWidth="3" />
        <path d="M 275 180 Q 270 200 272 220" strokeWidth="3" />
        <path d="M 250 195 Q 255 215 260 230" strokeWidth="2.5" />
        <path d="M 210 185 Q 205 205 208 225" strokeWidth="2.5" />
      </g>

      {/* ===== Left lung (anatomically right, viewer's left) ===== */}
      <g filter="url(#r-lung-shadow)">
        <path
          d="M 120 120
             C 80 130, 60 175, 65 220
             C 70 250, 95 270, 130 268
             C 155 266, 165 245, 165 215
             L 165 140 Z"
          fill="url(#r-lung-tissue)"
          stroke="#0e7490"
          strokeWidth="2.5"
        />
        <path
          d="M 120 120 C 80 130, 60 175, 65 220 C 70 250, 95 270, 130 268 C 155 266, 165 245, 165 215 L 165 140 Z"
          fill="url(#r-lung-shine)"
        />
        {/* Right lung fissures (3 lobes: upper, middle, lower) */}
        <path d="M 70 165 Q 105 175 130 180" stroke="#0e7490" strokeWidth="1.5" fill="none" opacity="0.7" />
        <path d="M 75 215 Q 110 220 130 225" stroke="#0e7490" strokeWidth="1.5" fill="none" opacity="0.7" />
      </g>

      {/* ===== Right lung (anatomically left, viewer's right) ===== */}
      <g filter="url(#r-lung-shadow)">
        <path
          d="M 240 120
             C 280 130, 300 175, 295 220
             C 290 250, 265 270, 230 268
             C 205 266, 195 245, 195 215
             L 195 140 Z"
          fill="url(#r-lung-tissue)"
          stroke="#0e7490"
          strokeWidth="2.5"
        />
        <path
          d="M 240 120 C 280 130, 300 175, 295 220 C 290 250, 265 270, 230 268 C 205 266, 195 245, 195 215 L 195 140 Z"
          fill="url(#r-lung-shine)"
        />
        {/* Left lung fissure (2 lobes: upper, lower) */}
        <path d="M 290 170 Q 255 180 225 185" stroke="#0e7490" strokeWidth="1.5" fill="none" opacity="0.7" />
      </g>

      {/* ===== Diaphragm at bottom ===== */}
      <g filter="url(#r-lung-shadow)" opacity="0.85">
        <path
          d="M 50 275 Q 180 305 310 275 Q 305 290 290 295 Q 180 320 70 295 Q 55 290 50 275 Z"
          fill="url(#r-diaphragm-grad)"
          stroke="#831843"
          strokeWidth="1.8"
        />
      </g>

      {/* Apex markers */}
      <circle cx="120" cy="125" r="2" fill="#0e7490" opacity="0.6" />
      <circle cx="240" cy="125" r="2" fill="#0e7490" opacity="0.6" />
    </svg>
  );
}

/* 4. REALISTIC DIGESTIVE SYSTEM
   - Mouth, esophagus with proper curves
   - Stomach with realistic J-shape, fundus, body, antrum, pylorus
   - Liver with lobes (right, left, caudate, quadrate)
   - Small intestine: duodenum, jejunum, ileum with mesenteric coiling
   - Large intestine: ascending, transverse, descending, sigmoid
*/
export function DigestiveAnatomy(props: AnatomyProps) {
  return (
    <svg viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="r-stomach-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
        <linearGradient id="r-intestine-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fef9c3" />
          <stop offset="50%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#854d0e" />
        </linearGradient>
        <linearGradient id="r-large-int-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="50%" stopColor="#c2410c" />
          <stop offset="100%" stopColor="#7c2d12" />
        </linearGradient>
        <radialGradient id="r-liver-grad" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="55%" stopColor="#9a3412" />
          <stop offset="100%" stopColor="#451a03" />
        </radialGradient>
        <radialGradient id="r-stomach-shine" cx="35%" cy="25%" r="40%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="r-digest-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.7" />
        </linearGradient>
        <filter id="r-digest-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#451a03" floodOpacity="0.5" />
        </filter>
        <filter id="r-digest-vessel-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#451a03" floodOpacity="0.4" />
        </filter>
      </defs>

      <rect width="360" height="320" fill="url(#r-digest-bg)" rx="16" />

      {/* ===== Liver (top right) ===== */}
      <g filter="url(#r-digest-shadow)">
        <path
          d="M 165 75
             Q 220 65, 250 80
             Q 270 95, 265 115
             Q 250 125, 215 122
             L 170 120 Z"
          fill="url(#r-liver-grad)"
          stroke="#451a03"
          strokeWidth="2"
        />
        <path
          d="M 165 75 Q 220 65, 250 80 Q 270 95, 265 115 Q 250 125, 215 122 L 170 120 Z"
          fill="url(#r-stomach-shine)"
        />
        {/* Liver lobes - falciform ligament */}
        <path d="M 215 75 L 215 122" stroke="#451a03" strokeWidth="1.5" opacity="0.7" />
        {/* Gallbladder hint */}
        <ellipse cx="225" cy="120" rx="6" ry="8" fill="#84cc16" stroke="#3f6212" strokeWidth="1" opacity="0.85" />
      </g>

      {/* ===== Mouth ===== */}
      <ellipse cx="180" cy="28" rx="22" ry="7" fill="#fb923c" stroke="#9a3412" strokeWidth="1.5" />

      {/* ===== Esophagus ===== */}
      <g filter="url(#r-digest-shadow)">
        <path
          d="M 175 32 Q 170 60 170 90 Q 165 100 145 110"
          fill="none"
          stroke="url(#r-stomach-grad)"
          strokeWidth="11"
          strokeLinecap="round"
        />
      </g>

      {/* ===== Stomach (J-shape) ===== */}
      <g filter="url(#r-digest-shadow)">
        <path
          d="M 145 95
             C 110 95, 90 130, 100 165
             C 110 185, 130 195, 150 185
             C 165 180, 175 165, 180 145
             C 182 125, 175 95, 145 95 Z"
          fill="url(#r-stomach-grad)"
          stroke="#92400e"
          strokeWidth="2.5"
        />
        <path
          d="M 145 95 C 110 95, 90 130, 100 165 C 110 185, 130 195, 150 185 C 165 180, 175 165, 180 145 C 182 125, 175 95, 145 95 Z"
          fill="url(#r-stomach-shine)"
        />
        {/* Rugae (stomach folds) */}
        <g stroke="#92400e" strokeWidth="1" fill="none" opacity="0.5">
          <path d="M 115 120 Q 130 125 145 122" />
          <path d="M 105 145 Q 125 150 145 145" />
          <path d="M 110 165 Q 130 170 150 165" />
        </g>
        {/* Pylorus - exit to duodenum */}
        <circle cx="148" cy="190" r="5" fill="#7c2d12" opacity="0.8" />
      </g>

      {/* ===== Large intestine frame (behind small intestine) ===== */}
      <g filter="url(#r-digest-shadow)">
        {/* Ascending colon */}
        <path d="M 75 130 Q 70 145 72 240" stroke="url(#r-large-int-grad)" strokeWidth="16" fill="none" strokeLinecap="round" opacity="0.9" />
        {/* Transverse colon */}
        <path d="M 72 130 Q 180 110 285 130" stroke="url(#r-large-int-grad)" strokeWidth="16" fill="none" strokeLinecap="round" opacity="0.9" />
        {/* Descending colon */}
        <path d="M 285 130 Q 290 145 288 240" stroke="url(#r-large-int-grad)" strokeWidth="16" fill="none" strokeLinecap="round" opacity="0.9" />
        {/* Sigmoid colon */}
        <path d="M 288 240 Q 270 260 230 265 Q 210 265 200 250" stroke="url(#r-large-int-grad)" strokeWidth="13" fill="none" strokeLinecap="round" opacity="0.9" />
        {/* Rectum */}
        <path d="M 200 250 L 200 280" stroke="url(#r-large-int-grad)" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.9" />
        {/* Haustra (pouches) - circles along colon */}
        {[145, 175, 205, 235].map((y) => (
          <circle key={y} cx="76" cy={y} r="9" fill="url(#r-large-int-grad)" stroke="#7c2d12" strokeWidth="0.5" opacity="0.9" />
        ))}
        {[145, 175, 205, 235].map((y) => (
          <circle key={y} cx="284" cy={y} r="9" fill="url(#r-large-int-grad)" stroke="#7c2d12" strokeWidth="0.5" opacity="0.9" />
        ))}
        {/* Cecum */}
        <ellipse cx="75" cy="245" rx="13" ry="14" fill="url(#r-large-int-grad)" stroke="#7c2d12" strokeWidth="1" />
        {/* Appendix */}
        <path d="M 70 260 Q 60 270 55 280" stroke="#7c2d12" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>

      {/* ===== Small intestine (jejunum + ileum coiled) ===== */}
      <g filter="url(#r-digest-shadow)">
        <path
          d="M 150 190
             Q 110 195 105 215
             Q 130 225 145 215
             Q 120 235 130 250
             Q 165 255 175 240
             Q 145 250 160 265
             Q 195 268 200 250
             Q 175 260 195 245
             Q 230 245 230 230
             Q 200 235 215 220
             Q 250 220 245 205
             Q 215 210 225 195
             Q 200 195 200 185"
          fill="none"
          stroke="url(#r-intestine-grad)"
          strokeWidth="11"
          strokeLinecap="round"
        />
        {/* Highlight on small intestine */}
        <path
          d="M 150 190 Q 110 195 105 215 Q 130 225 145 215"
          stroke="#fff"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

/* 5. REALISTIC DNA DOUBLE HELIX
   - True 3D helical appearance with major and minor grooves
   - Sugar-phosphate backbone as ribbons
   - Base pairs with depth (closer = larger, farther = smaller)
   - Glowing radial center
*/
export function DNAAnatomy(props: AnatomyProps) {
  const round = (n: number) => Math.round(n * 10000) / 10000;
  return (
    <svg viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="r-dna-strand1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5eead4" />
          <stop offset="50%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#134e4a" />
        </linearGradient>
        <linearGradient id="r-dna-strand2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d8b4fe" />
          <stop offset="50%" stopColor="#9333ea" />
          <stop offset="100%" stopColor="#581c87" />
        </linearGradient>
        <radialGradient id="r-dna-glow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#5eead4" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#9333ea" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#5eead4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="r-dna-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#f0fdfa" stopOpacity="0.7" />
        </linearGradient>
        <filter id="r-dna-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#134e4a" floodOpacity="0.5" />
        </filter>
        <filter id="r-dna-blur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="0.7" />
        </filter>
      </defs>

      <rect width="360" height="320" fill="url(#r-dna-bg)" rx="16" />

      {/* Center glow */}
      <ellipse cx="180" cy="150" rx="100" ry="140" fill="url(#r-dna-glow)" />

      {/* Backbones as smooth curves */}
      <g filter="url(#r-dna-shadow)">
        {/* Strand 1 - sinusoidal curve */}
        <path
          d={`M ${DNA_PAIRS[0].x1} ${DNA_PAIRS[0].y} ${DNA_PAIRS.map(
            (p) => `Q ${p.ctrlX1} ${round(p.y - 6)} ${p.x1} ${p.y}`
          ).join(" ")}`}
          fill="none"
          stroke="url(#r-dna-strand1)"
          strokeWidth="3.5"
          opacity="0.85"
        />
        {/* Strand 2 - opposite phase */}
        <path
          d={`M ${DNA_PAIRS[0].x2} ${DNA_PAIRS[0].y} ${DNA_PAIRS.map(
            (p) => `Q ${p.ctrlX2} ${round(p.y - 6)} ${p.x2} ${p.y}`
          ).join(" ")}`}
          fill="none"
          stroke="url(#r-dna-strand2)"
          strokeWidth="3.5"
          opacity="0.85"
        />
      </g>

      {/* Base pairs with depth (closer strand = bigger) */}
      {DNA_PAIRS.map((p) => {
        // Depth scale: when sin is positive, strand1 is closer
        const depthScale1 = round(0.6 + 0.5 * ((p.sinP + 1) / 2));
        const depthScale2 = round(0.6 + 0.5 * ((-p.sinP + 1) / 2));
        const baseColors = ["#ef4444", "#22c55e", "#3b82f6", "#f59e0b"];
        const baseColor = baseColors[p.i % 4];

        return (
          <g key={p.i} filter="url(#r-dna-shadow)">
            {/* Base pair connection (semi-transparent) */}
            <line
              x1={p.x1}
              y1={p.y}
              x2={p.x2}
              y2={p.y}
              stroke={baseColor}
              strokeWidth={round(2.5 + depthScale1)}
              opacity={round(0.4 + 0.3 * ((Math.abs(p.sinP) + 1) / 2))}
            />
            {/* Sugar-phosphate backbone nodes */}
            {/* Closer node (larger, brighter) */}
            <circle
              cx={p.x1}
              cy={p.y}
              r={round(6 * depthScale1)}
              fill="url(#r-dna-strand1)"
            />
            <circle cx={round(p.x1 - 1.5)} cy={round(p.y - 1.5)} r={round(2 * depthScale1)} fill="#fff" opacity="0.7" />

            {/* Farther node (smaller, dimmer, slight blur for depth) */}
            <g filter="url(#r-dna-blur)" opacity={round(0.7 + 0.3 * depthScale2)}>
              <circle
                cx={p.x2}
                cy={p.y}
                r={round(6 * depthScale2)}
                fill="url(#r-dna-strand2)"
              />
            </g>
            <circle cx={round(p.x2 - 1.5)} cy={round(p.y - 1.5)} r={round(1.8 * depthScale2)} fill="#fff" opacity="0.5" />
          </g>
        );
      })}

      {/* Major/minor groove annotations (subtle dashed lines) */}
      <line x1="60" y1="60" x2="60" y2="100" stroke="#9333ea" strokeWidth="1" strokeDasharray="2 3" opacity="0.5" />
      <line x1="300" y1="180" x2="300" y2="220" stroke="#0d9488" strokeWidth="1" strokeDasharray="2 3" opacity="0.5" />
    </svg>
  );
}

/* 6. REALISTIC CELL STRUCTURE
   - Cell membrane with phospholipid bilayer
   - Cytosol with organelles:
     - Nucleus with nucleolus, chromatin, nuclear pores
     - Mitochondria (cristae visible)
     - Endoplasmic Reticulum (rough & smooth)
     - Golgi apparatus (stacked cisternae)
     - Ribosomes
     - Lysosomes
     - Vesicles
*/
export function CellAnatomy(props: AnatomyProps) {
  return (
    <svg viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="r-cell-cytosol" cx="40%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="55%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#1e40af" />
        </radialGradient>
        <radialGradient id="r-cell-nucleus" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#fecaca" />
          <stop offset="50%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#450a0a" />
        </radialGradient>
        <radialGradient id="r-cell-mito" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="55%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#7c2d12" />
        </radialGradient>
        <linearGradient id="r-cell-er" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
        <linearGradient id="r-cell-golgi" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#a16207" />
        </linearGradient>
        <radialGradient id="r-cell-shine" cx="30%" cy="25%" r="40%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="r-cell-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#f0f9ff" stopOpacity="0.7" />
        </linearGradient>
        <filter id="r-cell-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#1e3a8a" floodOpacity="0.45" />
        </filter>
        <filter id="r-cell-org-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#1e3a8a" floodOpacity="0.4" />
        </filter>
        <filter id="r-cell-nucleus-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="360" height="320" fill="url(#r-cell-bg)" rx="16" />

      {/* ===== Cell membrane with phospholipid bilayer ===== */}
      <g filter="url(#r-cell-shadow)">
        <ellipse cx="180" cy="160" rx="145" ry="115" fill="url(#r-cell-cytosol)" stroke="#1e3a8a" strokeWidth="3.5" />
        <ellipse cx="180" cy="160" rx="145" ry="115" fill="url(#r-cell-shine)" />
        {/* Phospholipid bilayer dots (heads) — pre-computed for SSR stability */}
        {CELL_MEMBRANE_DOTS.map((d) => (
          <g key={`outer-${d.i}`}>
            <circle cx={d.x} cy={d.y} r="3.5" fill="#1e3a8a" />
            <circle cx={d.x + d.dx} cy={d.y + d.dy} r="2" fill="#3b82f6" opacity="0.7" />
          </g>
        ))}
      </g>

      {/* ===== Mitochondria (multiple, with cristae) ===== */}
      <g filter="url(#r-cell-org-shadow)">
        {/* Mitochondrion 1 - top right */}
        <g transform="rotate(-20 245 110)">
          <ellipse cx="245" cy="110" rx="24" ry="11" fill="url(#r-cell-mito)" stroke="#7c2d12" strokeWidth="1.8" />
          <ellipse cx="245" cy="110" rx="24" ry="11" fill="url(#r-cell-shine)" opacity="0.7" />
          {/* Cristae (inner membrane folds) */}
          <g stroke="#7c2d12" strokeWidth="1.2" fill="none">
            <path d="M 230 105 Q 235 110 230 115" />
            <path d="M 240 105 Q 245 110 240 115" />
            <path d="M 250 105 Q 255 110 250 115" />
            <path d="M 260 105 Q 265 110 260 115" />
          </g>
        </g>
        {/* Mitochondrion 2 - bottom left */}
        <g transform="rotate(25 95 215)">
          <ellipse cx="95" cy="215" rx="22" ry="10" fill="url(#r-cell-mito)" stroke="#7c2d12" strokeWidth="1.8" />
          <ellipse cx="95" cy="215" rx="22" ry="10" fill="url(#r-cell-shine)" opacity="0.7" />
          <g stroke="#7c2d12" strokeWidth="1.2" fill="none">
            <path d="M 82 211 Q 87 215 82 219" />
            <path d="M 92 211 Q 97 215 92 219" />
            <path d="M 102 211 Q 107 215 102 219" />
          </g>
        </g>
      </g>

      {/* ===== Endoplasmic Reticulum (rough - with ribosomes) ===== */}
      <g filter="url(#r-cell-org-shadow)">
        {/* Rough ER - curved tubes near nucleus */}
        <g stroke="url(#r-cell-er)" strokeWidth="4" fill="none" strokeLinecap="round">
          <path d="M 85 145 Q 95 140 110 145 Q 120 150 130 145" />
          <path d="M 85 155 Q 95 150 110 155 Q 120 160 130 155" />
          <path d="M 85 165 Q 95 160 110 165 Q 120 170 130 165" />
        </g>
        {/* Ribosomes (dark dots on ER) */}
        <g fill="#15803d">
          <circle cx="92" cy="143" r="1.8" />
          <circle cx="105" cy="141" r="1.8" />
          <circle cx="118" cy="146" r="1.8" />
          <circle cx="92" cy="153" r="1.8" />
          <circle cx="108" cy="155" r="1.8" />
          <circle cx="122" cy="158" r="1.8" />
          <circle cx="92" cy="163" r="1.8" />
          <circle cx="105" cy="166" r="1.8" />
          <circle cx="118" cy="167" r="1.8" />
        </g>
        {/* Smooth ER - right side */}
        <g stroke="url(#r-cell-er)" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.85">
          <path d="M 235 200 Q 245 195 255 200 Q 265 205 275 200" />
          <path d="M 235 210 Q 245 205 255 210 Q 265 215 275 210" />
        </g>
      </g>

      {/* ===== Golgi apparatus (stacked cisternae) ===== */}
      <g filter="url(#r-cell-org-shadow)">
        <g stroke="url(#r-cell-golgi)" strokeWidth="3" fill="none" strokeLinecap="round">
          <path d="M 240 165 Q 255 158 270 165" />
          <path d="M 238 173 Q 255 166 272 173" />
          <path d="M 236 181 Q 255 174 274 181" />
          <path d="M 238 189 Q 255 182 272 189" />
          <path d="M 240 197 Q 255 190 270 197" />
        </g>
        {/* Vesicles budding off */}
        <circle cx="232" cy="195" r="3" fill="url(#r-cell-golgi)" stroke="#a16207" strokeWidth="0.8" />
        <circle cx="278" cy="180" r="2.5" fill="url(#r-cell-golgi)" stroke="#a16207" strokeWidth="0.8" />
      </g>

      {/* ===== Lysosomes & vesicles ===== */}
      <g filter="url(#r-cell-org-shadow)">
        <circle cx="270" cy="135" r="6" fill="#84cc16" stroke="#3f6212" strokeWidth="1" opacity="0.9" />
        <circle cx="80" cy="180" r="5" fill="#84cc16" stroke="#3f6212" strokeWidth="1" opacity="0.9" />
        <circle cx="115" cy="105" r="4" fill="#fbbf24" stroke="#92400e" strokeWidth="1" opacity="0.9" />
        <circle cx="245" cy="245" r="5" fill="#fbbf24" stroke="#92400e" strokeWidth="1" opacity="0.9" />
        {/* Small vesicles */}
        <circle cx="70" cy="120" r="2.5" fill="#bfdbfe" stroke="#1e40af" strokeWidth="0.5" />
        <circle cx="290" cy="155" r="2.5" fill="#bfdbfe" stroke="#1e40af" strokeWidth="0.5" />
        <circle cx="125" cy="240" r="2.5" fill="#bfdbfe" stroke="#1e40af" strokeWidth="0.5" />
      </g>

      {/* ===== Nucleus (with chromatin, nucleolus, nuclear pores) ===== */}
      <g filter="url(#r-cell-nucleus-glow)">
        <circle cx="180" cy="160" r="50" fill="url(#r-cell-nucleus)" stroke="#450a0a" strokeWidth="3" />
        <circle cx="180" cy="160" r="50" fill="url(#r-cell-shine)" />
        {/* Chromatin (DNA strands inside nucleus) */}
        <g stroke="#7f1d1d" strokeWidth="1.2" fill="none" opacity="0.55">
          <path d="M 145 145 Q 165 140 180 145 Q 200 150 215 145" />
          <path d="M 140 160 Q 160 155 180 160 Q 200 165 220 160" />
          <path d="M 145 175 Q 165 170 185 175 Q 205 180 215 175" />
          <path d="M 155 190 Q 175 185 195 190" />
          <path d="M 150 130 Q 170 135 190 130" />
        </g>
        {/* Nucleolus */}
        <circle cx="195" cy="150" r="13" fill="#450a0a" />
        <circle cx="192" cy="148" r="4" fill="#fff" opacity="0.4" />
        {/* Nuclear pores */}
        <g fill="#fff">
          <circle cx="138" cy="160" r="3" />
          <circle cx="222" cy="160" r="3" />
          <circle cx="180" cy="118" r="3" />
          <circle cx="180" cy="202" r="3" />
          <circle cx="155" cy="125" r="2.5" />
          <circle cx="205" cy="125" r="2.5" />
          <circle cx="155" cy="195" r="2.5" />
          <circle cx="205" cy="195" r="2.5" />
        </g>
        {/* Nuclear envelope double membrane hint */}
        <circle cx="180" cy="160" r="53" fill="none" stroke="#450a0a" strokeWidth="1" opacity="0.4" />
      </g>

      {/* Free ribosomes in cytosol */}
      <g fill="#15803d" opacity="0.8">
        <circle cx="155" cy="105" r="1.5" />
        <circle cx="165" cy="98" r="1.5" />
        <circle cx="100" cy="200" r="1.5" />
        <circle cx="260" cy="220" r="1.5" />
        <circle cx="220" cy="245" r="1.5" />
        <circle cx="140" cy="245" r="1.5" />
      </g>
    </svg>
  );
}

export const ANATOMY_DIAGRAMS = [
  { id: "heart", Component: HeartAnatomy },
  { id: "brain", Component: BrainAnatomy },
  { id: "respiratory", Component: RespiratoryAnatomy },
  { id: "digestive", Component: DigestiveAnatomy },
  { id: "dna", Component: DNAAnatomy },
  { id: "cell", Component: CellAnatomy },
] as const;
