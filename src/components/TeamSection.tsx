"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Анастасия Митькина",
    role: "Президент фонда",
    description:
      "Основатель и идейный вдохновитель фонда. Отвечает за стратегическое развитие, формирование партнёрств и реализацию ключевых инициатив.",
    image: "/assets/team-president.png",
  },
  {
    name: "Совет директоров",
    role: "Управляющий орган",
    description:
      "Определяет стратегию фонда, утверждает ключевые проекты и обеспечивает прозрачность деятельности на каждом этапе.",
    image: "/assets/team-soviet.png",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % teamMembers.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  }, []);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const member = teamMembers[activeIdx];

  return (
    <section id="team" ref={ref} className="bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
        {/* Header with nav arrows */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Команда</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Наша <span className="italic text-accent">команда</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition-all duration-300"
              aria-label="Предыдущий"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition-all duration-300"
              aria-label="Следующий"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Carousel card */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIdx}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 300 : -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -300 : 300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] max-h-[500px] rounded-3xl overflow-hidden bg-muted border border-border">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Info */}
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-1.5 mb-6">
                  <span className="font-body text-xs uppercase tracking-[0.2em] text-accent font-medium">
                    {member.role}
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {member.name}
                </h3>
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {teamMembers.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > activeIdx ? 1 : -1);
                setActiveIdx(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIdx
                  ? "w-8 bg-accent"
                  : "w-2 bg-muted-foreground/20 hover:bg-muted-foreground/40"
              }`}
              aria-label={`Участник ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
