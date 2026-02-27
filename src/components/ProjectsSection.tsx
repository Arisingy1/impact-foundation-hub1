"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  idea: string;
  link: string;
  emoji: string;
}

const projects: Project[] = [
  {
    title: "Творческий фестиваль",
    idea: "Поддержка молодых художников на старте их пути",
    link: "https://t.me/unionart_fest",
    emoji: "🎨",
  },
  {
    title: "Футбольный турнир",
    idea: "Спортивное событие, объединяющее через командный дух",
    link: "https://t.me/spfootballturnir",
    emoji: "⚽",
  },
  {
    title: "Фестиваль гармоничного развития",
    idea: "Раскрытие потенциала через осознанность и творчество",
    link: "https://t.me/fbweel",
    emoji: "🧘",
  },
  {
    title: "Кинофестиваль",
    idea: "Мир кино изнутри для молодёжи и всей семьи",
    link: "https://t.me/kino_festival_25",
    emoji: "🎬",
  },
  {
    title: "Песни со смыслом",
    idea: "Музыка с глубоким содержанием и авторская культура",
    link: "https://t.me/musicfestmsc",
    emoji: "🎵",
  },
  {
    title: "Культурные ценности народов",
    idea: "Сохранение наследия и традиций народов России",
    link: "https://t.me/sokrovishanarodovrossii",
    emoji: "🏛️",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.15 + i * 0.09,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative overflow-hidden bg-background py-28 md:py-40"
    >
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-[#9b6dff]/[0.04] blur-[120px]" />
      </div>

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9b6dff]/15 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="font-body text-[11px] uppercase tracking-[0.35em] text-[#9b6dff]/60 mb-4">
            Проекты экосистемы
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Проекты экосистемы{" "}
            <span className="italic text-glow-light">Фонда</span>
          </h2>
        </motion.div>

        {/* Project cards — Rybakov-style horizontal row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group relative flex flex-col items-center text-center rounded-3xl
                         bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm
                         p-6 md:p-7
                         hover:border-[#9b6dff]/30 hover:-translate-y-2
                         hover:shadow-[0_8px_40px_-12px_rgba(155,109,255,0.15)]
                         transition-all duration-300 ease-out"
            >
              {/* Hover glow overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-[#9b6dff]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-col items-center">
                {/* Emoji circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-5
                             bg-gradient-to-br from-white/[0.06] to-white/[0.02]
                             border border-white/[0.08]
                             group-hover:scale-110 group-hover:border-[#9b6dff]/20
                             transition-all duration-300"
                >
                  {p.emoji}
                </div>

                {/* Title */}
                <h3 className="font-display text-sm font-semibold text-foreground leading-tight mb-1 group-hover:text-[#9b6dff] transition-colors duration-300">
                  {p.title}
                </h3>

                {/* External link icon — visible on hover */}
                <ExternalLink
                  className="w-3.5 h-3.5 mt-3 text-white/0 group-hover:text-[#9b6dff]/70 transition-colors duration-300"
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Founder quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          className="mt-24 md:mt-32 text-center max-w-2xl mx-auto"
        >
          <blockquote className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-px bg-gradient-to-r from-transparent via-[#9b6dff]/40 to-transparent" />
            <p className="font-display text-lg md:text-xl text-foreground/80 italic leading-relaxed">
              «Мы не делаем разовые акции — мы строим проекты, которые
              действительно меняют жизнь»
            </p>
            <footer className="mt-5">
              <span className="font-body text-sm text-muted-foreground tracking-wide">
                Анастасия Митькина,{" "}
                <span className="text-[#9b6dff]/60">президент фонда</span>
              </span>
            </footer>
          </blockquote>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9b6dff]/15 to-transparent" />
    </section>
  );
};

export default ProjectsSection;
