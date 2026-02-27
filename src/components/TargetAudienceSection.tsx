"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const audiences = [
  {
    num: "01",
    title: "Авторам проектов",
    desc: "Помогаем с запуском, партнёрами, экспертизой и ресурсами",
  },
  {
    num: "02",
    title: "Бизнесу и компаниям",
    desc: "Репутационное усиление, участие в значимых проектах",
  },
  {
    num: "03",
    title: "Инвесторам и меценатам",
    desc: "Безопасная точка входа в проверенные социальные и культурные инициативы",
  },
  {
    num: "04",
    title: "Экспертам и командам",
    desc: "Возможность влиять, развиваться и быть частью сильных проектов",
  },
];

const TargetAudienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="audience"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
            Для кого
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Кому подойдёт{" "}
            <span className="italic text-glow-light">фонд</span>
          </h2>
        </motion.div>

        {/* Audience rows */}
        <div className="flex flex-col">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.6 }}
              className="group border-t border-white/[0.06] py-10 md:py-14 grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr] gap-6 md:gap-10 items-start"
            >
              {/* Number */}
              <span className="font-display text-5xl md:text-6xl font-bold text-white/10 leading-none select-none">
                {a.num}
              </span>

              {/* Content */}
              <div>
                <h4 className="font-display text-2xl md:text-3xl font-bold text-white group-hover:text-[#9b6dff] transition-colors duration-300 mb-2">
                  {a.title}
                </h4>
                <p className="font-body text-base text-white/50 leading-relaxed max-w-xl">
                  {a.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Bottom border to close the last row */}
          <div className="border-t border-white/[0.06]" />
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
