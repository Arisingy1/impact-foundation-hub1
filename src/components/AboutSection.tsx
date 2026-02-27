"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Rocket } from "lucide-react";
import { CosmicSectionBg } from "./illustrations";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="overflow-hidden">
      {/* Dark cosmic about section */}
      <div className="relative section-dark-alt overflow-hidden">
        <CosmicSectionBg />

        {/* Planetary horizon glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[300px]" style={{
          background: "radial-gradient(ellipse 120% 80% at 50% 100%, rgba(155,109,255,0.08) 0%, transparent 70%)"
        }} />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-40">
          {/* Main heading — centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 md:mb-28"
          >
            <p className="font-body text-xs uppercase tracking-[0.3em] text-[#9b6dff] mb-4">О фонде</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-8">
              Кто мы и зачем
              <br />мы <span className="italic text-glow">здесь</span>
            </h2>
            <p className="font-body text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Фонд поддержки социально-культурных инициатив и бизнес проектов был создан с убеждением,
              что сила общества — в объединении. Мы верим, что каждый человек и организация способны
              изменить мир вокруг себя, если дать им правильные инструменты и окружение.
            </p>
          </motion.div>

          {/* Vision & Mission — side by side glass cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-3xl p-8 md:p-10 hover:border-[#9b6dff]/20 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#9b6dff]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-[#9b6dff]/10 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-[#9b6dff]" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">Видение</h3>
                <p className="font-body text-base md:text-lg text-white/60 leading-relaxed">
                  Мы видим мир, в котором социальная ответственность становится нормой.
                  Мир, где бизнес, культура и общество действуют в гармонии, создавая
                  устойчивые изменения для будущих поколений.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-3xl p-8 md:p-10 hover:border-[#9b6dff]/20 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#9b6dff]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-[#9b6dff]/10 flex items-center justify-center mb-6">
                  <Rocket className="w-6 h-6 text-[#9b6dff]" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">Миссия</h3>
                <p className="font-body text-base md:text-lg text-white/60 leading-relaxed">
                  Объединять ресурсы, идеи и людей для реализации проектов, которые приносят
                  долгосрочную пользу обществу и формируют культуру созидания.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Founder quote — centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-20 text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#9b6dff]/40 to-transparent mx-auto mb-8" />
            <blockquote className="font-display text-xl md:text-2xl lg:text-3xl italic text-white/80 leading-relaxed mb-6">
              «Мы не делаем разовые акции — мы строим устойчивые проекты, которые меняют жизнь людей»
            </blockquote>
            <p className="font-body text-sm text-[#9b6dff]">
              Анастасия Митькина — <span className="text-white/50">президент фонда</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
