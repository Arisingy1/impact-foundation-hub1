"use client";

/* ---------- Decorative SVG Illustrations ----------
   Cosmic dark-purple theme with 3D crystal, planetary horizon,
   and abstract geometric patterns inspired by Rybakov Foundation.
   -------------------------------------------------- */

export const HeroPattern = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden">
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Deep cosmic gradient */}
        <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0a0416" />
          <stop offset="25%" stopColor="#0f0720" />
          <stop offset="50%" stopColor="#1a0a2e" />
          <stop offset="75%" stopColor="#2d1b4e" />
          <stop offset="100%" stopColor="#1a0a2e" />
        </linearGradient>

        {/* Horizon glow */}
        <radialGradient id="horizonGlow" cx="50%" cy="85%" r="50%">
          <stop offset="0%" stopColor="#9b6dff" stopOpacity="0.2" />
          <stop offset="30%" stopColor="#7c3aed" stopOpacity="0.1" />
          <stop offset="60%" stopColor="#6d28d9" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#6d28d9" stopOpacity="0" />
        </radialGradient>

        {/* Crystal face gradients */}
        <linearGradient id="crystalFace1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3d2066" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#2d1b4e" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#1a0a2e" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="crystalFace2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4c2d73" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#3d2066" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2d1b4e" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="crystalFace3" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3d2066" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="crystalHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#9b6dff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="crystalEdge" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c084fc" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#e879f9" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0.4" />
        </linearGradient>

        {/* Star glow */}
        <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c084fc" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
        </radialGradient>

        {/* Planet surface curve glow */}
        <radialGradient id="planetGlow" cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor="#9b6dff" stopOpacity="0.12" />
          <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>

        <filter id="crystalBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
        <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
        </filter>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
        </filter>
      </defs>

      {/* Base dark gradient */}
      <rect width="1440" height="900" fill="url(#heroGrad1)" />

      {/* Horizon atmospheric glow */}
      <rect width="1440" height="900" fill="url(#horizonGlow)" />

      {/* Planetary curved horizon line */}
      <ellipse cx="720" cy="920" rx="900" ry="200" fill="none" stroke="#9b6dff" strokeOpacity="0.15" strokeWidth="1" />
      <ellipse cx="720" cy="930" rx="850" ry="180" fill="none" stroke="#c084fc" strokeOpacity="0.08" strokeWidth="0.5" />

      {/* Planet surface glow */}
      <ellipse cx="720" cy="850" rx="800" ry="300" fill="url(#planetGlow)" />

      {/* ===== 3D Crystal / Diamond shape — center ===== */}
      <g transform="translate(720, 340)">
        {/* Crystal shadow/glow underneath */}
        <ellipse cx="0" cy="140" rx="120" ry="30" fill="#9b6dff" fillOpacity="0.08" filter="url(#glowFilter)" />

        {/* Crystal body — faceted diamond shape */}
        {/* Top facet (lightest) */}
        <path d="M0 -120 L80 -20 L0 -10 Z" fill="url(#crystalFace3)" />
        <path d="M0 -120 L-80 -20 L0 -10 Z" fill="url(#crystalFace2)" />

        {/* Right face */}
        <path d="M80 -20 L0 -10 L0 120 L40 40 Z" fill="url(#crystalFace1)" />
        {/* Left face */}
        <path d="M-80 -20 L0 -10 L0 120 L-40 40 Z" fill="url(#crystalFace2)" />

        {/* Bottom right facet */}
        <path d="M40 40 L0 120 L80 -20 Z" fill="#2d1b4e" fillOpacity="0.95" />
        {/* Bottom left facet */}
        <path d="M-40 40 L0 120 L-80 -20 Z" fill="#1a0a2e" fillOpacity="0.95" />

        {/* Crystal highlight edges */}
        <path d="M0 -120 L80 -20" stroke="url(#crystalEdge)" strokeWidth="1.5" fill="none" />
        <path d="M0 -120 L-80 -20" stroke="url(#crystalEdge)" strokeWidth="1" fill="none" />
        <path d="M80 -20 L0 120" stroke="#c084fc" strokeOpacity="0.15" strokeWidth="0.5" fill="none" />
        <path d="M-80 -20 L0 120" stroke="#c084fc" strokeOpacity="0.1" strokeWidth="0.5" fill="none" />
        <path d="M0 -10 L80 -20" stroke="#c084fc" strokeOpacity="0.2" strokeWidth="0.5" fill="none" />
        <path d="M0 -10 L-80 -20" stroke="#c084fc" strokeOpacity="0.15" strokeWidth="0.5" fill="none" />
        <path d="M0 -10 L0 120" stroke="#c084fc" strokeOpacity="0.1" strokeWidth="0.5" fill="none" />

        {/* Top highlight */}
        <path d="M0 -120 L80 -20 L0 -10 Z" fill="url(#crystalHighlight)" />

        {/* Specular spot */}
        <circle cx="-25" cy="-50" r="8" fill="white" fillOpacity="0.08" filter="url(#crystalBlur)" />
        <circle cx="30" cy="-30" r="4" fill="white" fillOpacity="0.12" />
      </g>

      {/* ===== Scattered stars ===== */}
      <circle cx="200" cy="100" r="1.5" fill="#e9d5ff" fillOpacity="0.6" />
      <circle cx="350" cy="200" r="1" fill="#e9d5ff" fillOpacity="0.4" />
      <circle cx="1200" cy="150" r="1.8" fill="#e9d5ff" fillOpacity="0.5" />
      <circle cx="1050" cy="80" r="1" fill="#e9d5ff" fillOpacity="0.3" />
      <circle cx="900" cy="120" r="1.3" fill="#e9d5ff" fillOpacity="0.5" />
      <circle cx="150" cy="350" r="1" fill="#e9d5ff" fillOpacity="0.3" />
      <circle cx="1300" cy="300" r="1.5" fill="#e9d5ff" fillOpacity="0.4" />
      <circle cx="500" cy="80" r="0.8" fill="#e9d5ff" fillOpacity="0.5" />
      <circle cx="1100" cy="400" r="1" fill="#e9d5ff" fillOpacity="0.3" />
      <circle cx="400" cy="500" r="1.2" fill="#e9d5ff" fillOpacity="0.25" />
      <circle cx="1350" cy="500" r="0.8" fill="#e9d5ff" fillOpacity="0.35" />
      <circle cx="650" cy="150" r="1" fill="#e9d5ff" fillOpacity="0.4" />
      <circle cx="250" cy="600" r="1.5" fill="#e9d5ff" fillOpacity="0.2" />

      {/* Brighter stars with glow */}
      <circle cx="300" cy="150" r="6" fill="url(#starGlow)" />
      <circle cx="300" cy="150" r="1.5" fill="#e9d5ff" fillOpacity="0.8" />
      <circle cx="1150" cy="250" r="5" fill="url(#starGlow)" />
      <circle cx="1150" cy="250" r="1.2" fill="#e9d5ff" fillOpacity="0.7" />
      <circle cx="800" cy="80" r="4" fill="url(#starGlow)" />
      <circle cx="800" cy="80" r="1" fill="#e9d5ff" fillOpacity="0.6" />

      {/* Small decorative accent lines near crystal */}
      <line x1="620" y1="500" x2="580" y2="520" stroke="#9b6dff" strokeOpacity="0.08" strokeWidth="0.5" />
      <line x1="820" y1="490" x2="860" y2="510" stroke="#9b6dff" strokeOpacity="0.08" strokeWidth="0.5" />

      {/* Soft nebula-like patches */}
      <ellipse cx="300" cy="400" rx="200" ry="100" fill="#6d28d9" fillOpacity="0.03" filter="url(#glowFilter)" />
      <ellipse cx="1100" cy="350" rx="250" ry="120" fill="#7c3aed" fillOpacity="0.02" filter="url(#glowFilter)" />
    </svg>
  </div>
);

export const CosmicSectionBg = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="sectionGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#9b6dff" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#9b6dff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1440" height="600" fill="url(#sectionGlow)" />
      {/* Stars */}
      <circle cx="100" cy="80" r="1" fill="#e9d5ff" fillOpacity="0.3" />
      <circle cx="400" cy="50" r="0.8" fill="#e9d5ff" fillOpacity="0.25" />
      <circle cx="800" cy="70" r="1.2" fill="#e9d5ff" fillOpacity="0.2" />
      <circle cx="1200" cy="40" r="0.8" fill="#e9d5ff" fillOpacity="0.3" />
      <circle cx="1350" cy="90" r="1" fill="#e9d5ff" fillOpacity="0.2" />
      <circle cx="200" cy="500" r="0.8" fill="#e9d5ff" fillOpacity="0.2" />
      <circle cx="1100" cy="520" r="1" fill="#e9d5ff" fillOpacity="0.15" />
    </svg>
  </div>
);

export const AboutIllustration = () => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <defs>
      <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9b6dff" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#9b6dff" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />
    <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeOpacity="0.06" strokeWidth="1" />
    <circle cx="200" cy="200" r="90" fill="none" stroke="currentColor" strokeOpacity="0.04" strokeWidth="1" />
    <circle cx="170" cy="160" r="18" fill="url(#aboutGrad)" />
    <circle cx="230" cy="160" r="18" fill="url(#aboutGrad)" />
    <circle cx="200" cy="180" r="22" fill="url(#aboutGrad)" />
    <path d="M140 220 Q170 200 200 220 Q230 200 260 220" stroke="#9b6dff" strokeOpacity="0.15" strokeWidth="2" fill="none" />
    <path d="M150 250 Q175 230 200 250 Q225 230 250 250" stroke="#9b6dff" strokeOpacity="0.1" strokeWidth="1.5" fill="none" />
    <path d="M200 280 L200 320" stroke="#9b6dff" strokeOpacity="0.15" strokeWidth="2" />
    <circle cx="200" cy="280" r="4" fill="#9b6dff" fillOpacity="0.2" />
    <circle cx="120" cy="120" r="3" fill="#9b6dff" fillOpacity="0.2" />
    <circle cx="280" cy="100" r="2" fill="#9b6dff" fillOpacity="0.15" />
    <circle cx="300" cy="280" r="3" fill="#9b6dff" fillOpacity="0.12" />
    <circle cx="100" cy="300" r="2" fill="#9b6dff" fillOpacity="0.1" />
  </svg>
);

export const SectionDivider = ({ variant = "wave" }: { variant?: "wave" | "angle" }) => {
  if (variant === "angle") {
    return (
      <div className="relative h-16 md:h-24 -mt-1">
        <svg viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0 96 L0 32 Q720 96 1440 32 L1440 96 Z" fill="var(--background)" />
        </svg>
      </div>
    );
  }
  return (
    <div className="relative h-16 md:h-24 -mt-1">
      <svg viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full" preserveAspectRatio="none">
        <path d="M0 48 Q360 0 720 48 Q1080 96 1440 48 L1440 96 L0 96 Z" fill="var(--background)" />
      </svg>
    </div>
  );
};

export const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-accent/10 animate-pulse"
        style={{
          width: `${4 + Math.random() * 8}px`,
          height: `${4 + Math.random() * 8}px`,
          left: `${10 + Math.random() * 80}%`,
          top: `${10 + Math.random() * 80}%`,
          animationDelay: `${i * 0.3}s`,
          animationDuration: `${3 + Math.random() * 4}s`,
        }}
      />
    ))}
  </div>
);

export const TelegramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current`} xmlns="http://www.w3.org/2000/svg">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);
