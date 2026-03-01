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

const ProjectCard = ({ p }: { p: Project }) => (
  <a
    href={p.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex flex-col items-center text-center rounded-3xl bg-[#101a32]/80 border border-white/[0.06] backdrop-blur-sm p-6 md:p-7 w-[280px] md:w-[320px] shrink-0 hover:border-[#4d7cff]/30 hover:-translate-y-2 hover:shadow-[0_4px_15px_-5px_rgba(77,124,255,0.15)] transition-all duration-300 ease-out"
  >
    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-[#4d7cff]/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative flex flex-col items-center w-full">
      <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-5 bg-[#0a1025] border border-white/[0.08] group-hover:scale-110 transition-all duration-300">
        {p.emoji}
      </div>
      <h3 className="font-display text-sm font-semibold text-white leading-tight mb-2 group-hover:text-[#4d7cff] transition-colors duration-300">
        {p.title}
      </h3>
      <p className="font-body text-xs text-white/60 line-clamp-2 mt-1 mb-2 h-8">
        {p.idea}
      </p>
      <ExternalLink className="w-3.5 h-3.5 mt-2 text-white/0 group-hover:text-[#4d7cff]/70 transition-colors duration-300" />
    </div>
  </a>
);

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const duplicatedProjects = [...projects, ...projects, ...projects, ...projects];

  return (
    <section id="projects" ref={ref} className="section-dark relative py-12 md:py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-[#4d7cff]/[0.04] blur-[120px]" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4d7cff]/15 to-transparent" />

      <div className="relative z-10 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-7xl mx-auto px-6 md:px-10"
        >
          <p className="font-body text-xl uppercase tracking-[0.35em] text-[#4d7cff] mb-4">
            Проекты экосистемы
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase">
            НАШИ ПРОЕКТЫ
          </h2>
        </motion.div>

        {/* Карусели бегущих строк */}
        <div className="w-full flex flex-col gap-6 relative overflow-hidden">
          {/* Первая строка (Справа налево) */}
          <div className="flex w-full">
            <div className="flex w-max shrink-0 gap-4 md:gap-6 pr-4 md:pr-6 animate-marquee-left hover:[animation-play-state:paused]">
              {duplicatedProjects.map((p, i) => (
                <ProjectCard key={`row1-${i}`} p={p} />
              ))}
            </div>
          </div>

          {/* Вторая строка (Слева направо) */}
          <div className="flex w-full">
            <div className="flex w-max shrink-0 gap-4 md:gap-6 pr-4 md:pr-6 animate-marquee-right hover:[animation-play-state:paused]">
              {[...duplicatedProjects].reverse().map((p, i) => (
                <ProjectCard key={`row2-${i}`} p={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
