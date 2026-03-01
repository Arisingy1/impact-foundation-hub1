"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
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
  // {
  //   name: "Совет директоров",
  //   role: "Управляющий орган",
  //   description:
  //     "Определяет стратегию фонда, утверждает ключевые проекты и обеспечивает прозрачность деятельности на каждом этапе.",
  //   image: "/assets/team-soviet.png",
  // },
];

const TeamSection = () => {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let intervalId: NodeJS.Timeout;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        // If content fits completely, don't scroll
        if (el.scrollWidth <= el.clientWidth + 10) return;

        // Calculate exact distance to next item including gap
        const step = el.children.length >= 2
          ? (el.children[1] as HTMLElement).offsetLeft - (el.children[0] as HTMLElement).offsetLeft
          : el.clientWidth;

        // If we reached the end (with small tolerance), go strictly back to the start
        if (Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth - 10) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollTo({ left: el.scrollLeft + step, behavior: "smooth" });
        }
      }, 7000);
    };

    startAutoScroll();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="team"
      ref={ref}
      className="section-light relative  py-12 md:py-20 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="font-body text-xl uppercase tracking-[0.35em] text-[#4d7cff] mb-4">
            Лидеры изменений
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#101a35] uppercase">
            НАША КОМАНДА
          </h2>
        </motion.div>

        {/* CSS Scroll Snap Carousel Container */}
        <div
          ref={scrollRef}
          className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 md:justify-center gap-6 md:gap-10"
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="snap-center shrink-0 w-full sm:w-[400px] md:w-[calc(50%-1.25rem)] lg:max-w-[480px] bg-white rounded-3xl p-6 md:p-8 shadow-[0_4px_12px_rgb(0,0,0,0.02)] border border-[#101a35]/[0.03] flex flex-col mx-auto"
            >
              {/* Photo */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#101a35]/[0.05] mb-8">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 85vw, 500px"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col flex-grow">
                <p className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-[#4d7cff] font-semibold mb-3 border-b border-[#101a35]/5 pb-3">
                  {member.role}
                </p>

                <h3 className="font-display text-2xl md:text-3xl font-bold text-[#101a35] mb-4">
                  {member.name}
                </h3>

                <p className="text-sm md:text-base leading-relaxed text-[#3a4a65] mt-auto">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
