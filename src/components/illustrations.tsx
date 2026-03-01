"use client";

/* ---------- Decorative SVG Illustrations ----------
   Cosmic dark-purple theme with stars and atmospheric glow.
   -------------------------------------------------- */

export const HeroBackground = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden">
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#050210" />
          <stop offset="25%" stopColor="#050a18" />
          <stop offset="50%" stopColor="#0a1025" />
          <stop offset="75%" stopColor="#101a32" />
          <stop offset="100%" stopColor="#0a1025" />
        </linearGradient>
        <radialGradient id="horizonGlow" cx="50%" cy="85%" r="50%">
          <stop offset="0%" stopColor="#4d7cff" stopOpacity="0.18" />
          <stop offset="30%" stopColor="#7c3aed" stopOpacity="0.08" />
          <stop offset="60%" stopColor="#6d28d9" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#6d28d9" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="centerGlow" cx="50%" cy="45%" r="40%">
          <stop offset="0%" stopColor="#4d7cff" stopOpacity="0.07" />
          <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7da3ff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#7da3ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="planetGlow" cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor="#4d7cff" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
        <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
        </filter>
      </defs>

      {/* Base gradient */}
      <rect width="1440" height="900" fill="url(#heroGrad1)" />

      {/* Atmospheric glows */}
      <rect width="1440" height="900" fill="url(#horizonGlow)" />
      <rect width="1440" height="900" fill="url(#centerGlow)" />

      {/* Horizon line */}
      <ellipse cx="720" cy="920" rx="900" ry="200" fill="none" stroke="#4d7cff" strokeOpacity="0.12" strokeWidth="1" />
      <ellipse cx="720" cy="850" rx="800" ry="300" fill="url(#planetGlow)" />

      {/* Stars */}
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
      <circle cx="550" cy="300" r="0.7" fill="#e9d5ff" fillOpacity="0.35" />
      <circle cx="820" cy="250" r="0.9" fill="#e9d5ff" fillOpacity="0.3" />
      <circle cx="1000" cy="550" r="1.1" fill="#e9d5ff" fillOpacity="0.2" />

      {/* Brighter stars with glow */}
      <circle cx="300" cy="150" r="6" fill="url(#starGlow)" />
      <circle cx="300" cy="150" r="1.5" fill="#e9d5ff" fillOpacity="0.8" />
      <circle cx="1150" cy="250" r="5" fill="url(#starGlow)" />
      <circle cx="1150" cy="250" r="1.2" fill="#e9d5ff" fillOpacity="0.7" />
      <circle cx="800" cy="80" r="4" fill="url(#starGlow)" />
      <circle cx="800" cy="80" r="1" fill="#e9d5ff" fillOpacity="0.6" />

      {/* Nebula patches */}
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
          <stop offset="0%" stopColor="#4d7cff" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#4d7cff" stopOpacity="0" />
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
        <stop offset="0%" stopColor="#4d7cff" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#4d7cff" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />
    <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeOpacity="0.06" strokeWidth="1" />
    <circle cx="200" cy="200" r="90" fill="none" stroke="currentColor" strokeOpacity="0.04" strokeWidth="1" />
    <circle cx="170" cy="160" r="18" fill="url(#aboutGrad)" />
    <circle cx="230" cy="160" r="18" fill="url(#aboutGrad)" />
    <circle cx="200" cy="180" r="22" fill="url(#aboutGrad)" />
    <path d="M140 220 Q170 200 200 220 Q230 200 260 220" stroke="#4d7cff" strokeOpacity="0.15" strokeWidth="2" fill="none" />
    <path d="M150 250 Q175 230 200 250 Q225 230 250 250" stroke="#4d7cff" strokeOpacity="0.1" strokeWidth="1.5" fill="none" />
    <path d="M200 280 L200 320" stroke="#4d7cff" strokeOpacity="0.15" strokeWidth="2" />
    <circle cx="200" cy="280" r="4" fill="#4d7cff" fillOpacity="0.2" />
    <circle cx="120" cy="120" r="3" fill="#4d7cff" fillOpacity="0.2" />
    <circle cx="280" cy="100" r="2" fill="#4d7cff" fillOpacity="0.15" />
    <circle cx="300" cy="280" r="3" fill="#4d7cff" fillOpacity="0.12" />
    <circle cx="100" cy="300" r="2" fill="#4d7cff" fillOpacity="0.1" />
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


export const VkIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M15.077 2h-6.154C4.154 2 2 4.154 2 8.923v6.154C2 19.846 4.154 22 8.923 22h6.154C19.846 22 22 19.846 22 15.077V8.923C22 4.154 19.846 2 15.077 2Zm3.461 14.615h-1.538c-.385 0-.539-.154-.846-.538-.693-1-1.308-1.077-1.308-.462v.538c0 .231-.077.462-.538.462-2.308 0-4.923-1.308-6.616-3.846-1.538-2.308-2-4.154-2-4.462 0-.231.077-.461.539-.461h1.538c.308 0 .462.154.615.461.769 2.077 1.923 3.692 2.385 3.692.154 0 .307-.077.307-.538V8.923c0-.462-.154-.693-.538-.693H10c.231-.385.615-.539 1.538-.539h1.154c.308 0 .462.154.462.462V11c0 .385.308.538.462.538.307 0 .615-.154 1.307-1 1.077-1.385 1.538-2.846 1.538-2.846.077-.231.308-.385.616-.385h1.538c.462 0 .539.231.385.539-.846 1.23-1.692 2.307-1.692 2.307-.308.385-.385.539 0 .923.385.462 1.616 1.539 2 2.308.154.385-.077.77-.385.77Z" />
  </svg>
);

export const MaxIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <span className={`font-black tracking-tighter text-[9px] flex items-center justify-center bg-white text-black rounded px-[4px] py-px leading-none ${className}`}>
    MAX
  </span>
);
