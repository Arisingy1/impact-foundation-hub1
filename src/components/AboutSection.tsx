"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Rocket } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="overflow-hidden">
      {/* Decorative separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* About intro — warm teal background */}
      <div className="relative bg-primary-soft overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/[0.03] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/[0.02] translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="font-body text-xs uppercase tracking-[0.3em] text-accent mb-4">О фонде</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.05] mb-8">
                Кто мы и зачем
                <br />мы <span className="italic text-accent">здесь</span>
              </h2>
              <p className="font-body text-lg md:text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
                Фонд поддержки социально-культурных инициатив и бизнес проектов был создан с убеждением,
                что сила общества — в объединении. Мы верим, что каждый человек и организация способны
                изменить мир вокруг себя, если дать им правильные инструменты и окружение.
              </p>

            </motion.div>

            {/* Vision & Mission cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5"
            >
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 hover:border-accent/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                  <Eye className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">Видение</h3>
                <p className="font-body text-base md:text-lg text-primary-foreground/85 leading-relaxed">
                  Мы видим мир, в котором социальная ответственность становится нормой.
                  Мир, где бизнес, культура и общество действуют в гармонии, создавая
                  устойчивые изменения для будущих поколений.
                </p>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 hover:border-accent/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                  <Rocket className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">Миссия</h3>
                <p className="font-body text-base md:text-lg text-primary-foreground/85 leading-relaxed">
                  Объединять ресурсы, идеи и людей для реализации проектов, которые приносят
                  долгосрочную пользу обществу и формируют культуру созидания.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default AboutSection;
