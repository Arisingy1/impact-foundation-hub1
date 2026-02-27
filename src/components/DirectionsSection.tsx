"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const directions = [
  {
    title: "Социальные инициативы",
    desc: "Реабилитационные программы, поддержка сообществ, развитие социальной инфраструктуры и устойчивых инициатив.",
  },
  {
    title: "Культура и образование",
    desc: "Выставки, фестивали, образовательные лаборатории, менторство и развитие творческих навыков.",
  },
  {
    title: "Бизнес и предпринимательство",
    desc: "Интеграция бизнес-ресурсов в социально значимые проекты, CSR-стратегии и социальное предпринимательство.",
  },
  {
    title: "Международные проекты",
    desc: "Межрегиональные и международные инициативы, культурный обмен и кросс-функциональные программы.",
  },
];

const DirectionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="directions"
      ref={ref}
      className="section-light relative min-h-screen flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-28"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-xs uppercase tracking-[0.3em] text-[#9b6dff] mb-4"
          >
            Направления фонда
          </motion.p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a0e30] leading-[1.1]">
            Что мы{" "}
            <span className="italic text-[#9b6dff]">поддерживаем</span>
          </h2>
        </motion.div>

        {/* Direction blocks */}
        <div className="flex flex-col">
          {directions.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 50, filter: "blur(4px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: 0.2 + 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 border-t border-[#1a0e30]/[0.08] py-10 md:py-14"
            >
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1a0e30] group-hover:text-[#9b6dff] transition-colors duration-300">
                {d.title}
              </h3>
              <p className="font-body text-base md:text-lg text-[#4a3f5c] leading-relaxed md:pt-2">
                {d.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectionsSection;
