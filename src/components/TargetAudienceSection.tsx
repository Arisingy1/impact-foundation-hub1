"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Building2, Heart, Users } from "lucide-react";

const audiences = [
  {
    icon: Lightbulb,
    title: "Авторам проектов",
    desc: "Помогаем с запуском, партнёрами, экспертизой и ресурсами",
    gradient: "from-amber-500/15 to-yellow-500/5",
    iconBg: "bg-amber-500/10 group-hover:bg-amber-500/20",
    iconColor: "text-amber-500",
  },
  {
    icon: Building2,
    title: "Бизнесу и компаниям",
    desc: "Репутационное усиление, участие в значимых проектах",
    gradient: "from-blue-500/15 to-indigo-500/5",
    iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: Heart,
    title: "Инвесторам и меценатам",
    desc: "Безопасная точка входа в проверенные социальные и культурные инициативы",
    gradient: "from-emerald-500/15 to-teal-500/5",
    iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    iconColor: "text-emerald-500",
  },
  {
    icon: Users,
    title: "Экспертам и командам",
    desc: "Возможность влиять, развиваться и быть частью сильных проектов",
    gradient: "from-violet-500/15 to-purple-500/5",
    iconBg: "bg-violet-500/10 group-hover:bg-violet-500/20",
    iconColor: "text-violet-500",
  },
];

const TargetAudienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="audience" ref={ref} className="bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.02] -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Для кого</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Кому подойдёт <span className="italic text-accent">фонд</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
              className="group relative bg-card rounded-3xl border border-border p-8 md:p-10 hover:border-accent/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/5 transition-all duration-400 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${a.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl ${a.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                  <a.icon className={`w-7 h-7 ${a.iconColor}`} />
                </div>
                <h4 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {a.title}
                </h4>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  {a.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
