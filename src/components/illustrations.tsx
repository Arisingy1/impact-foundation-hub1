"use client";

/* ---------- Decorative SVG Illustrations ----------
   Abstract, warm, trust-inspiring geometric patterns
   for each section of the foundation website.
   -------------------------------------------------- */

export const HeroPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 1440 900"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2a5a5a" />
        <stop offset="50%" stopColor="#306060" />
        <stop offset="100%" stopColor="#265252" />
      </linearGradient>
      <linearGradient id="heroAccent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d4a039" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#e8b94a" stopOpacity="0.1" />
      </linearGradient>
      <radialGradient id="heroGlow" cx="70%" cy="30%" r="50%">
        <stop offset="0%" stopColor="#d4a039" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#d4a039" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="1440" height="900" fill="url(#heroGrad1)" />
    <rect width="1440" height="900" fill="url(#heroGlow)" />
    {/* Abstract circles - community */}
    <circle cx="1100" cy="200" r="280" fill="none" stroke="#d4a039" strokeOpacity="0.08" strokeWidth="1" />
    <circle cx="1100" cy="200" r="200" fill="none" stroke="#d4a039" strokeOpacity="0.06" strokeWidth="1" />
    <circle cx="1100" cy="200" r="120" fill="none" stroke="#d4a039" strokeOpacity="0.04" strokeWidth="1" />
    <circle cx="1150" cy="250" r="8" fill="#d4a039" fillOpacity="0.2" />
    <circle cx="1020" cy="150" r="5" fill="#d4a039" fillOpacity="0.15" />
    <circle cx="1200" cy="130" r="6" fill="#d4a039" fillOpacity="0.12" />
    {/* Connecting lines */}
    <path d="M900 600 Q1050 350 1300 200" stroke="#d4a039" strokeOpacity="0.06" strokeWidth="1" fill="none" />
    <path d="M800 800 Q1000 500 1350 300" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" fill="none" />
    {/* Small dots constellation */}
    <circle cx="300" cy="700" r="3" fill="#d4a039" fillOpacity="0.15" />
    <circle cx="350" cy="680" r="2" fill="#d4a039" fillOpacity="0.1" />
    <circle cx="280" cy="720" r="2" fill="#d4a039" fillOpacity="0.08" />
    <circle cx="1300" cy="600" r="4" fill="#d4a039" fillOpacity="0.1" />
    <circle cx="1350" cy="580" r="2" fill="#d4a039" fillOpacity="0.08" />
    {/* Abstract leaf / growth */}
    <path d="M1250 500 Q1280 420 1350 400 Q1300 450 1290 520 Z" fill="#d4a039" fillOpacity="0.05" />
    <path d="M1270 510 Q1290 450 1340 435" stroke="#d4a039" strokeOpacity="0.08" strokeWidth="1" fill="none" />
    {/* Horizontal decorative lines */}
    <line x1="0" y1="880" x2="1440" y2="880" stroke="#d4a039" strokeOpacity="0.06" strokeWidth="1" />
    <line x1="0" y1="885" x2="1440" y2="885" stroke="#ffffff" strokeOpacity="0.02" strokeWidth="1" />
  </svg>
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
        <stop offset="0%" stopColor="#d4a039" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#d4a039" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    {/* Central interlocking hands/hearts motif */}
    <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />
    <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeOpacity="0.06" strokeWidth="1" />
    <circle cx="200" cy="200" r="90" fill="none" stroke="currentColor" strokeOpacity="0.04" strokeWidth="1" />
    {/* People silhouettes - abstract */}
    <circle cx="170" cy="160" r="18" fill="url(#aboutGrad)" />
    <circle cx="230" cy="160" r="18" fill="url(#aboutGrad)" />
    <circle cx="200" cy="180" r="22" fill="url(#aboutGrad)" />
    {/* Connection arcs */}
    <path d="M140 220 Q170 200 200 220 Q230 200 260 220" stroke="#d4a039" strokeOpacity="0.15" strokeWidth="2" fill="none" />
    <path d="M150 250 Q175 230 200 250 Q225 230 250 250" stroke="#d4a039" strokeOpacity="0.1" strokeWidth="1.5" fill="none" />
    {/* Growth element */}
    <path d="M200 280 L200 320" stroke="#d4a039" strokeOpacity="0.15" strokeWidth="2" />
    <circle cx="200" cy="280" r="4" fill="#d4a039" fillOpacity="0.2" />
    <path d="M192 300 Q200 285 208 300" fill="none" stroke="#d4a039" strokeOpacity="0.12" strokeWidth="1.5" />
    <path d="M188 310 Q200 292 212 310" fill="none" stroke="#d4a039" strokeOpacity="0.1" strokeWidth="1.5" />
    {/* Stars */}
    <circle cx="120" cy="120" r="3" fill="#d4a039" fillOpacity="0.2" />
    <circle cx="280" cy="100" r="2" fill="#d4a039" fillOpacity="0.15" />
    <circle cx="300" cy="280" r="3" fill="#d4a039" fillOpacity="0.12" />
    <circle cx="100" cy="300" r="2" fill="#d4a039" fillOpacity="0.1" />
  </svg>
);

export const DirectionIcons = {
  culture: () => (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect x="4" y="4" width="40" height="40" rx="12" fill="currentColor" fillOpacity="0.1" />
      <path d="M16 32 L24 12 L32 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 26 L29 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="10" r="2" fill="currentColor" fillOpacity="0.4" />
    </svg>
  ),
  social: () => (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect x="4" y="4" width="40" height="40" rx="12" fill="currentColor" fillOpacity="0.1" />
      <path d="M16 28 Q20 20 24 28 Q28 20 32 28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="24" cy="18" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M18 34 L30 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  business: () => (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect x="4" y="4" width="40" height="40" rx="12" fill="currentColor" fillOpacity="0.1" />
      <path d="M14 30 L20 22 L26 26 L34 16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="34" cy="16" r="3" fill="currentColor" fillOpacity="0.3" />
    </svg>
  ),
  international: () => (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect x="4" y="4" width="40" height="40" rx="12" fill="currentColor" fillOpacity="0.1" />
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <ellipse cx="24" cy="24" rx="5" ry="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <line x1="14" y1="24" x2="34" y2="24" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  events: () => (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect x="4" y="4" width="40" height="40" rx="12" fill="currentColor" fillOpacity="0.1" />
      <path d="M18 30 L24 18 L30 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18" cy="32" r="2" fill="currentColor" fillOpacity="0.3" />
      <circle cx="30" cy="32" r="2" fill="currentColor" fillOpacity="0.3" />
      <circle cx="24" cy="16" r="2" fill="currentColor" fillOpacity="0.4" />
    </svg>
  ),
  education: () => (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect x="4" y="4" width="40" height="40" rx="12" fill="currentColor" fillOpacity="0.1" />
      <path d="M14 24 L24 18 L34 24 L24 30 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
      <path d="M18 26 L18 33 Q24 37 30 33 L30 26" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  ),
};

export const ProjectEmoji: Record<string, string> = {
  "Творческий фестиваль": "🎨",
  "Футбольный турнир": "⚽",
  "Фестиваль гармоничного развития личности": "🌿",
  "Кинофестиваль «Загляни в яркий мир кино с изнанки»": "🎬",
  "Музыкальный фестиваль «Песни со смыслом»": "🎵",
  "Фестиваль творчества и культурных ценностей народов России": "🇷🇺",
};

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
