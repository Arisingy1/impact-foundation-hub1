"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Lightbulb, Handshake, Shield, Sparkles, Eye, Rocket } from "lucide-react";

const values = [
  {
    icon: Heart,
    label: "Доверие",
    desc: "Мы строим отношения на честности и прозрачности. Каждый партнёр и участник видит, куда идут ресурсы и какой результат они приносят.",
    color: "from-rose-500/15 to-pink-500/5",
    iconBg: "bg-rose-500/10 group-hover:bg-rose-500/20",
    iconColor: "text-rose-500",
  },
  {
    icon: Lightbulb,
    label: "Созидание",
    desc: "Мы поддерживаем идеи, которые создают новое — новые форматы, новые пространства, новые возможности для людей.",
    color: "from-amber-500/15 to-yellow-500/5",
    iconBg: "bg-amber-500/10 group-hover:bg-amber-500/20",
    iconColor: "text-amber-500",
  },
  {
    icon: Handshake,
    label: "Партнёрство",
    desc: "Вместе — больше, чем поодиночке. Мы объединяем бизнес, культуру и общество для достижения общих целей.",
    color: "from-blue-500/15 to-indigo-500/5",
    iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: Shield,
    label: "Ответственность",
    desc: "Каждое действие имеет значение. Мы берём на себя ответственность за результат каждого проекта и его влияние на общество.",
    color: "from-emerald-500/15 to-teal-500/5",
    iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    iconColor: "text-emerald-500",
  },
  {
    icon: Sparkles,
    label: "Культура будущего",
    desc: "Инвестируем в новое поколение через культуру, образование и творчество — формируем среду для устойчивого развития.",
    color: "from-violet-500/15 to-purple-500/5",
    iconBg: "bg-violet-500/10 group-hover:bg-violet-500/20",
    iconColor: "text-violet-500",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const valuesRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-60px" });

  return (
    <section id="about" ref={ref} className="overflow-hidden">
      {/* Decorative separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* About intro — warm teal background */}
      <div className="relative bg-primary overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/[0.03] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/[0.02] translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="font-body text-xs uppercase tracking-[0.3em] text-accent mb-4">О фонде</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.05] mb-8">
                Кто мы и зачем
                <br />мы <span className="italic text-accent">здесь</span>
              </h2>
              <p className="font-body text-base md:text-lg text-primary-foreground/60 leading-relaxed mb-8">
                Фонд поддержки социально-культурных инициатив и бизнес проектов был создан с убеждением,
                что сила общества — в объединении. Мы верим, что каждый человек и организация способны
                изменить мир вокруг себя, если дать им правильные инструменты и окружение.
              </p>

              {/* Founder quote — inline */}
              <div className="flex items-start gap-4 bg-white/[0.04] rounded-2xl p-5 border border-white/[0.06]">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-primary-foreground font-display text-sm font-bold flex-shrink-0">
                  ИА
                </div>
                <div>
                  <blockquote className="font-display text-sm italic text-primary-foreground/70 leading-relaxed mb-2">
                    «Каждый проект — это инвестиция в будущее. Не финансовая, а человеческая.»
                  </blockquote>
                  <p className="font-body text-xs text-primary-foreground/40">
                    Иван Александров · <span className="text-accent/60">Председатель правления</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision & Mission cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5"
            >
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 hover:border-accent/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                  <Eye className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">Видение</h3>
                <p className="font-body text-sm text-primary-foreground/55 leading-relaxed">
                  Мы видим мир, в котором социальная ответственность становится нормой.
                  Мир, где бизнес, культура и общество действуют в гармонии, создавая
                  устойчивые изменения для будущих поколений.
                </p>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 hover:border-accent/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                  <Rocket className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">Миссия</h3>
                <p className="font-body text-sm text-primary-foreground/55 leading-relaxed">
                  Объединять ресурсы, идеи и людей для реализации проектов, которые приносят
                  долгосрочную пользу обществу и формируют культуру созидания.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ===== VALUES — LARGE IMPACTFUL BLOCK ===== */}
      <div ref={valuesRef} className="bg-background relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.02] -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
          {/* Section header — large and centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 md:mb-20"
          >
            <p className="font-body text-xs uppercase tracking-[0.3em] text-accent mb-4">Принципы работы</p>
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Наши <span className="italic text-accent">ценности</span>
            </h3>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Пять принципов, на которых строится каждый наш проект и каждое решение
            </p>
          </motion.div>

          {/* Top row — 3 cards */}
          <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-5 md:mb-6">
            {values.slice(0, 3).map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
                className="group relative bg-card rounded-3xl border border-border p-8 md:p-10 hover:border-accent/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/5 transition-all duration-400 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${v.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl ${v.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                    <v.icon className={`w-7 h-7 ${v.iconColor}`} />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {v.label}
                  </h4>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom row — 2 cards (wider) */}
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {values.slice(3).map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45 + i * 0.1, duration: 0.6 }}
                className="group relative bg-card rounded-3xl border border-border p-8 md:p-10 hover:border-accent/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/5 transition-all duration-400 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${v.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl ${v.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300`}>
                    <v.icon className={`w-7 h-7 ${v.iconColor}`} />
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {v.label}
                    </h4>
                    <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
