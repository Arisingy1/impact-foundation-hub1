"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  idea: string;
  goal: string;
  format: string;
  impact: string;
  link: string;
  emoji: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Творческий фестиваль",
    idea: "Поддержка молодых художников на старте их пути — помощь талантам вырасти в настоящие творческие бренды",
    goal: "Дать молодым художникам платформу для развития и продвижения",
    format: "Фестиваль, выставки, конкурсы, менторство",
    impact: "Развитие творческого сообщества",
    link: "https://t.me/unionart_fest",
    emoji: "🎨",
    gradient: "from-blue-400/15 via-blue-500/8 to-transparent",
  },
  {
    title: "Футбольный турнир",
    idea: "Спортивное событие, объединяющее участников через командный дух и здоровый образ жизни",
    goal: "Популяризация спорта и формирование сообщества",
    format: "Турнир, соревнования",
    impact: "Укрепление спортивного сообщества",
    link: "https://t.me/spfootballturnir",
    emoji: "⚽",
    gradient: "from-slate-400/15 via-indigo-400/8 to-transparent",
  },
  {
    title: "Фестиваль гармоничного развития личности",
    idea: "Пространство для раскрытия потенциала через практики осознанности, творчества и физического развития",
    goal: "Содействие гармоничному развитию участников",
    format: "Фестиваль, мастер-классы, практики",
    impact: "Личностный рост участников",
    link: "https://t.me/fbweel",
    emoji: "🧘",
    gradient: "from-violet-400/15 via-violet-500/8 to-transparent",
  },
  {
    title: "Кинофестиваль «Загляни в яркий мир кино с изнанки»",
    idea: "Кинофестиваль для молодёжи и всей семьи — возможность увидеть мир кино изнутри",
    goal: "Вовлечение молодёжи и семей в кинокультуру",
    format: "Кинопоказы, встречи с создателями, мастер-классы",
    impact: "Развитие киноиндустрии и культурного досуга",
    link: "https://t.me/kino_festival_25",
    emoji: "🎬",
    gradient: "from-sky-400/15 via-sky-500/8 to-transparent",
  },
  {
    title: "Музыкальный фестиваль «Песни со смыслом»",
    idea: "Фестиваль, посвящённый музыке с глубоким содержанием и смыслом",
    goal: "Поддержка авторской музыки и культуры осмысленного творчества",
    format: "Концерты, выступления, конкурс",
    impact: "Продвижение качественной авторской музыки",
    link: "https://t.me/musicfestmsc",
    emoji: "🎵",
    gradient: "from-indigo-500/15 via-blue-400/8 to-transparent",
  },
  {
    title: "Фестиваль творчества и культурных ценностей народов России",
    idea: "Сохранение и популяризация культурного наследия и традиций народов России",
    goal: "Объединение людей через культурный обмен и уважение к традициям",
    format: "Фестиваль, выставки, мастер-классы, выступления",
    impact: "Сохранение культурного разнообразия России",
    link: "https://t.me/sokrovishanarodovrossii",
    emoji: "🏛️",
    gradient: "from-blue-500/15 via-violet-400/8 to-transparent",
  },
];

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback((idx: number) => {
    setDirection(idx > activeIdx ? 1 : -1);
    setActiveIdx(idx);
  }, [activeIdx]);

  const next = useCallback(() => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % projects.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  // Show 3 cards on desktop, 1 on mobile
  const getVisibleProjects = () => {
    const visible: { project: Project; index: number }[] = [];
    for (let offset = 0; offset < 3; offset++) {
      const idx = (activeIdx + offset) % projects.length;
      visible.push({ project: projects[idx], index: idx });
    }
    return visible;
  };

  const visibleProjects = getVisibleProjects();

  return (
    <section id="projects" ref={ref} className="relative bg-primary-soft overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/[0.03] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/[0.02] translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
        {/* Header with nav arrows */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-xs uppercase tracking-[0.3em] text-accent mb-3">Проекты</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Наши <span className="italic text-glow">проекты</span>
            </h2>
            <p className="font-body text-base md:text-lg text-primary-foreground/80 max-w-lg">
              Текущие инициативы фонда — фестивали, турниры и культурные события, объединяющие людей
            </p>
          </motion.div>

          {/* Navigation arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/[0.15] flex items-center justify-center text-primary-foreground/60 hover:text-accent hover:border-accent/40 transition-all duration-300"
              aria-label="Предыдущий проект"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/[0.15] flex items-center justify-center text-primary-foreground/60 hover:text-accent hover:border-accent/40 transition-all duration-300"
              aria-label="Следующий проект"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Carousel — animated cards */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={activeIdx}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 300 : -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -300 : 300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {visibleProjects.map(({ project: p, index: origIdx }) => (
                <a
                  key={`${activeIdx}-${origIdx}`}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-7 hover:bg-white/[0.08] hover:border-accent/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300 cursor-pointer block overflow-hidden"
                >
                  {/* Gradient blob */}
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${p.gradient} opacity-40 group-hover:opacity-70 transition-opacity rounded-bl-full`} />

                  <div className="relative">
                    {/* Emoji + title */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 group-hover:bg-white/[0.1] transition-all duration-300">
                        {p.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-lg font-semibold text-primary-foreground group-hover:text-accent transition-colors leading-tight mb-1">
                          {p.title}
                        </h3>
                        <p className="font-body text-xs text-primary-foreground/60">{p.format}</p>
                      </div>
                    </div>

                    <p className="font-body text-sm md:text-base text-primary-foreground/80 leading-relaxed mb-5">{p.idea}</p>

                    {/* Impact badge */}
                    <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-3 py-1.5 mb-5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="font-body text-xs font-medium text-accent">{p.impact}</span>
                    </div>

                    {/* Telegram link */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                      <div className="flex items-center gap-2 text-primary-foreground/55 group-hover:text-accent/70 transition-colors">
                        <TelegramIcon />
                        <span className="font-body text-xs">Подробнее</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-primary-foreground/35 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIdx
                  ? "w-8 bg-accent"
                  : "w-2 bg-primary-foreground/20 hover:bg-primary-foreground/40"
              }`}
              aria-label={`Проект ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
