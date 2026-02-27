"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="section-light relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto px-6 md:px-10 py-32 md:py-44">
        {/* ── Label + Headline ── */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="font-body text-xs uppercase tracking-[0.35em] text-[#4d7cff] mb-5">
            О фонде
          </p>

          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#101a35] leading-[1.08] mb-10">
            Кто мы и зачем
            <br />
            мы&nbsp;<span className="italic text-glow">здесь</span>
          </h2>

          <p className="font-body text-lg md:text-xl text-[#3a4a65] max-w-3xl mx-auto leading-relaxed">
            Фонд поддержки социально-культурных инициатив и бизнес проектов был
            создан с убеждением, что сила общества&nbsp;— в объединении. Мы верим,
            что каждый человек и организация способны изменить мир вокруг себя,
            если дать им правильные инструменты и окружение.
          </p>
        </motion.div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-[#101a35]/[0.10] max-w-xl mx-auto mb-16 md:mb-24 origin-center"
        />

        {/* ── Vision / Mission columns ── */}
        <div className="relative grid md:grid-cols-2 gap-16">
          {/* Vertical divider between columns (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#101a35]/[0.08]" />

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-xs uppercase tracking-[0.3em] text-[#4d7cff] mb-4">
              Видение
            </p>
            <p className="font-body text-lg text-[#3a4a65] leading-relaxed">
              Мы видим мир, в котором социальная ответственность становится нормой.
              Мир, где бизнес, культура и общество действуют в гармонии, создавая
              устойчивые изменения для будущих поколений.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-xs uppercase tracking-[0.3em] text-[#4d7cff] mb-4">
              Миссия
            </p>
            <p className="font-body text-lg text-[#3a4a65] leading-relaxed">
              Объединять ресурсы, идеи и людей для реализации проектов, которые
              приносят долгосрочную пользу обществу и формируют культуру созидания.
            </p>
          </motion.div>
        </div>

        {/* ── Founder quote ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 md:mt-32 text-center max-w-3xl mx-auto"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#4d7cff]/50 to-transparent mx-auto mb-10" />

          <blockquote className="font-display text-xl md:text-2xl lg:text-3xl italic text-[#1e2a45] leading-relaxed mb-6">
            «Мы не делаем разовые акции — мы строим устойчивые проекты, которые
            меняют жизнь людей»
          </blockquote>

          <p className="font-body text-sm text-[#4d7cff]">
            Анастасия Митькина —{" "}
            <span className="text-[#3a4a65]">президент фонда</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
