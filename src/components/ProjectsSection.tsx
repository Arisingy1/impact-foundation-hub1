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

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="relative bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9b6dff]/15 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Проекты экосистемы</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Проекты экосистемы <span className="italic text-glow-light">Фонда</span>
          </h2>
        </motion.div>

        {/* Project logo cards — Rybakov-style horizontal layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group relative bg-card border border-border rounded-3xl p-6 hover:border-[#9b6dff]/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#9b6dff]/5 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#9b6dff]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9b6dff]/10 to-[#c084fc]/5 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {p.emoji}
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-[#9b6dff] transition-colors leading-tight mb-2">
                  {p.title}
                </h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {p.idea}
                </p>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-[#9b6dff] mx-auto mt-3 transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
