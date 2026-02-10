"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Palette, Sprout, Handshake, Globe, PartyPopper, BookOpen, ArrowUpRight } from "lucide-react";

const directions = [
  {
    icon: Palette,
    title: "Культура и искусство",
    desc: "Поддержка выставок, театральных постановок, музыкальных инициатив и арт-резиденций.",
    formats: "Выставки · Спектакли · Арт-резиденции",
    audience: "Художники, музыканты, театральные деятели",
    gradient: "from-rose-500/10 to-amber-500/10",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-500",
  },
  {
    icon: Sprout,
    title: "Социальные инициативы",
    desc: "Реабилитационные программы и развитие социальной инфраструктуры.",
    formats: "Программы · Центры · Гранты",
    audience: "НКО, социальные предприниматели",
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  {
    icon: Handshake,
    title: "Бизнес и соц. воздействие",
    desc: "Интеграция бизнес-ресурсов в социально значимые проекты.",
    formats: "Партнёрства · CSR-проекты",
    audience: "Корпорации, предприниматели",
    gradient: "from-blue-500/10 to-indigo-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Globe,
    title: "Международные проекты",
    desc: "Межрегиональные инициативы и культурный обмен.",
    formats: "Обмены · Конференции · Программы",
    audience: "Международные организации",
    gradient: "from-violet-500/10 to-purple-500/10",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
  },
  {
    icon: PartyPopper,
    title: "Фестивали и события",
    desc: "Организация форумов и образовательных событий.",
    formats: "Фестивали · Форумы · Конференции",
    audience: "Широкая аудитория",
    gradient: "from-amber-500/10 to-orange-500/10",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
  },
  {
    icon: BookOpen,
    title: "Образование",
    desc: "Воркшопы, менторство и развитие навыков.",
    formats: "Курсы · Лекции · Воркшопы",
    audience: "Студенты, молодые специалисты",
    gradient: "from-cyan-500/10 to-blue-500/10",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-600",
  },
];

const DirectionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

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
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Направления</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Сферы <span className="italic text-accent">деятельности</span>
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-xl mx-auto">
            Шесть ключевых направлений, в которых мы создаём устойчивые изменения
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {directions.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative bg-card rounded-2xl border border-border p-7 hover:border-accent/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${d.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl ${d.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <d.icon className={`w-6 h-6 ${d.iconColor}`} />
                  </div>
                  <ArrowUpRight className={`w-5 h-5 text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300`} />
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-3">
                  {d.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{d.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {d.formats.split(" · ").map((tag) => (
                    <span key={tag} className="font-body text-[11px] bg-muted px-2.5 py-1 rounded-full text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="font-body text-xs text-muted-foreground/70">
                  <span className="text-accent/60">Для:</span> {d.audience}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectionsSection;
