"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Target, Users, MapPin, Handshake, TrendingUp } from "lucide-react";

const stats = [
  { value: 9, suffix: "", label: "Активных проектов", icon: Target, color: "from-amber-500/20 to-amber-600/5" },
  { value: 15000, suffix: "+", label: "Участников и благополучателей", icon: Users, color: "from-emerald-500/20 to-emerald-600/5" },
  { value: 25, suffix: "+", label: "Регионов и стран", icon: MapPin, color: "from-blue-500/20 to-blue-600/5" },
  { value: 120, suffix: "+", label: "Партнёров и экспертов", icon: Handshake, color: "from-purple-500/20 to-purple-600/5" },
  { value: 90, suffix: "%", label: "Проектов продолжают развитие", icon: TrendingUp, color: "from-rose-500/20 to-rose-600/5" },
];

function AnimatedNumber({ value, inView }: { value: number; inView: boolean }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);
  return <>{display.toLocaleString("ru-RU")}</>;
}

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="stats" ref={ref} className="relative bg-background">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Наши результаты</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Цифры, которые <span className="italic text-accent">говорят</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-card rounded-2xl border border-border p-6 md:p-8 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <stat.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2 tabular-nums">
                  <AnimatedNumber value={stat.value} inView={inView} />
                  <span className="text-accent">{stat.suffix}</span>
                </div>
                <div className="font-body text-sm text-muted-foreground leading-snug">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Founder quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="font-body text-base md:text-lg text-muted-foreground italic max-w-2xl mx-auto">
            «Мы не делаем разовые акции — мы строим устойчивые проекты»
          </p>
          <p className="font-body text-sm text-accent mt-3">
            Анастасия Митькина — <span className="text-muted-foreground">президент фонда</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
