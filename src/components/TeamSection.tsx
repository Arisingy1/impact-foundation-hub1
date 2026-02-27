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

const slideVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir >= 0 ? 120 : -120,
    scale: 0.97,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir >= 0 ? -120 : 120,
    scale: 0.97,
  }),
};

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
    setActiveIdx(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const member = teamMembers[activeIdx];

  return (
    <section
      id="team"
      ref={ref}
      className="section-light relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-0">
        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIdx}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
            >
              {/* Photo — left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7 }}
                className="relative aspect-[3/4] max-h-[600px] rounded-3xl overflow-hidden bg-[#101a35]/[0.05] border border-[#101a35]/[0.08]"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>

              {/* Info — right */}
              <div className="flex flex-col justify-center">
                <p className="font-body text-[11px] uppercase tracking-[0.35em] text-[#4d7cff] font-semibold mb-6">
                  {member.role}
                </p>

                <h2 className="font-display text-4xl md:text-5xl leading-[1.1] font-bold text-[#101a35] mb-6">
                  {member.name}
                </h2>

                <p className="text-lg leading-relaxed text-[#3a4a65] max-w-md">
                  {member.description}
                </p>

                {/* Navigation */}
                <div className="flex items-center gap-6 mt-12">
                  {/* Arrows */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prev}
                      className="w-12 h-12 rounded-full border border-[#101a35]/[0.10] flex items-center justify-center text-[#3a4a65] hover:text-[#4d7cff] hover:border-[#4d7cff]/30 transition-all duration-300"
                      aria-label="Предыдущий"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={next}
                      className="w-12 h-12 rounded-full border border-[#101a35]/[0.10] flex items-center justify-center text-[#3a4a65] hover:text-[#4d7cff] hover:border-[#4d7cff]/30 transition-all duration-300"
                      aria-label="Следующий"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Line indicators */}
                  <div className="flex items-center gap-2">
                    {teamMembers.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setDirection(i > activeIdx ? 1 : -1);
                          setActiveIdx(i);
                        }}
                        className={`h-[3px] rounded-full transition-all duration-500 ${
                          i === activeIdx
                            ? "w-10 bg-[#4d7cff]"
                            : "w-6 bg-[#101a35]/15 hover:bg-[#4d7cff]/40"
                        }`}
                        aria-label={`Участник ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
