"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 9, suffix: "", label: "активных проектов" },
  { value: 15000, suffix: "+", label: "участников и благополучателей" },
  { value: 25, suffix: "+", label: "регионов и стран" },
  { value: 120, suffix: "+", label: "партнёров и экспертов" },
  { value: 90, suffix: "%", label: "проектов продолжают развитие" },
];

function AnimatedNumber({ value, inView }: { value: number; inView: boolean }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    if (!inView || !nodeRef.current) return;

    if (isMobile) {
      nodeRef.current.textContent = value.toLocaleString("ru-RU");
      return;
    }

    const end = value;
    const duration = 1500;
    const startTime = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * end);

      if (nodeRef.current) {
        nodeRef.current.textContent = current.toLocaleString("ru-RU");
      }

      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value, isMobile]);

  return <span ref={nodeRef}>{isMobile ? value.toLocaleString("ru-RU") : "0"}</span>;
}

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="stats"
      ref={ref}
      className="relative  flex items-center justify-center overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-[#4d7cff]/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: isMobile ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6"
        >
          <p className="font-body text-xl uppercase tracking-[0.35em] text-[#4d7cff] mb-4">
            Наши результаты
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] uppercase">
            Цифры, которые <span className="italic text-[#4d7cff]">говорят</span>
          </h2>
        </motion.div>

        {/* Thin divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: isMobile ? 0 : 0.6, delay: isMobile ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-px w-full bg-white/5 origin-center mb-16 md:mb-24"
        />

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-16 md:gap-y-20 gap-x-4 mb-20 md:mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: isMobile ? 0 : 0.6,
                delay: isMobile ? 0 : 0.2 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center text-center"
            >
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-none tabular-nums tracking-tight">
                <AnimatedNumber value={stat.value} inView={inView} />
                <span className="text-[#4d7cff]">{stat.suffix}</span>
              </div>
              <p className="font-body text-xs md:text-sm text-white/70 mt-3 md:mt-4 tracking-wide max-w-[150px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: isMobile ? 0 : 0.6, delay: isMobile ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#4d7cff]/50 to-transparent mx-auto mb-8" />
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl italic text-foreground leading-snug mb-6">
            «Мы не делаем разовые акции — <br className="hidden md:block" /> мы строим устойчивые проекты»
          </blockquote>
          <p className="font-body text-sm md:text-base text-[#4d7cff]">
            Анастасия Митькина <span className="text-white/50 block sm:inline sm:ml-2 mt-1 sm:mt-0">— президент фонда</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
