"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sprout, BookOpen, Briefcase, Globe, ArrowUpRight } from "lucide-react";

const directions = [
  {
    icon: Sprout,
    title: "Социальные инициативы",
    desc: "Реабилитационные программы, поддержка сообществ, развитие социальной инфраструктуры и устойчивых инициатив.",
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  {
    icon: BookOpen,
    title: "Культурные и образовательные проекты",
    desc: "Выставки, фестивали, образовательные лаборатории, менторство и развитие творческих навыков.",
    gradient: "from-rose-500/10 to-amber-500/10",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-500",
  },
  {
    icon: Briefcase,
    title: "Бизнес и предпринимательство",
    desc: "Интеграция бизнес-ресурсов в социально значимые проекты, CSR-стратегии и социальное предпринимательство.",
    gradient: "from-blue-500/10 to-indigo-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Globe,
    title: "Междисциплинарные и международные проекты",
    desc: "Межрегиональные и международные инициативы, культурный обмен и кросс-функциональные программы.",
    gradient: "from-violet-500/10 to-purple-500/10",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
  },
];

const DirectionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="directions" ref={ref} className="bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Направления фонда</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Что мы <span className="italic text-accent">поддерживаем</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {directions.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-card rounded-2xl border border-border p-7 hover:border-accent/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${d.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl ${d.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <d.icon className={`w-6 h-6 ${d.iconColor}`} />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-3">
                  {d.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 font-body text-base md:text-lg text-muted-foreground italic max-w-2xl mx-auto"
        >
          Мы поддерживаем проекты на стыке смысла, пользы и устойчивости
        </motion.p>
      </div>
    </section>
  );
};

export default DirectionsSection;
