"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const directions = [
  {
    title: "Социальные инициативы",
    desc: "Реабилитационные программы, поддержка сообществ, развитие социальной инфраструктуры и устойчивых инициатив.",
  },
  {
    title: "Культурные и образовательные проекты",
    desc: "Выставки, фестивали, образовательные лаборатории, менторство и развитие творческих навыков.",
  },
  {
    title: "Бизнес и предпринимательство",
    desc: "Интеграция бизнес-ресурсов в социально значимые проекты, CSR-стратегии и социальное предпринимательство.",
  },
  {
    title: "Междисциплинарные и международные проекты",
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
      className="section-light relative  flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20 text-center"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-xl uppercase tracking-[0.3em] text-[#4d7cff] mb-4"
          >
            Направления фонда
          </motion.p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase font-bold text-[#101a35] leading-[1.1] mb-6">
            Что мы <span className="italic text-[#4d7cff]">поддерживаем</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-[#3a4a65] max-w-2xl mx-auto">
            Мы поддерживаем проекты на стыке смысла, пользы и устойчивости
          </p>
        </motion.div>

        {/* Direction cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {directions.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_4px_12px_rgb(0,0,0,0.02)] border border-[#101a35]/[0.03] hover:shadow-[0_4px_15px_rgb(77,124,255,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-display text-2xl md:text-3xl font-bold text-[#101a35] mb-4">
                {d.title}
              </h3>
              <p className="font-body text-base text-[#3a4a65] leading-relaxed">
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
