import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Lightbulb, Handshake, Shield, Sparkles } from "lucide-react";

const values = [
  { icon: Heart, label: "Доверие" },
  { icon: Lightbulb, label: "Созидание" },
  { icon: Handshake, label: "Партнёрство" },
  { icon: Shield, label: "Ответственность" },
  { icon: Sparkles, label: "Культура будущего" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="overflow-hidden">
      {/* Full-bleed dark band */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="h-[2px] w-12 bg-accent mb-6" />
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary-foreground/40 mb-3">О фонде</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Кто мы и зачем
                <br />мы <span className="italic text-accent">здесь</span>
              </h2>
              <p className="font-body text-base md:text-lg text-primary-foreground/60 leading-relaxed">
                Фонд был создан с убеждением, что сила общества — в объединении.
                Мы верим, что каждый человек и организация способны изменить мир вокруг себя,
                если дать им правильные инструменты и окружение.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-accent mb-3">Видение</h3>
                <p className="font-body text-sm text-primary-foreground/55 leading-relaxed">
                  Мы видим мир, в котором социальная ответственность становится нормой.
                  Мир, где бизнес, культура и общество действуют в гармонии, создавая
                  устойчивые изменения для будущих поколений.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-accent mb-3">Миссия</h3>
                <p className="font-body text-sm text-primary-foreground/55 leading-relaxed">
                  Объединять ресурсы, идеи и людей для реализации проектов, которые приносят
                  долгосрочную пользу обществу и формируют культуру созидания.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values + Founder on light background */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-[1fr_auto] gap-16 items-start">
            {/* Values as a horizontal strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h3 className="font-display text-2xl font-semibold text-foreground mb-8">Наши ценности</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {values.map((v, i) => (
                  <motion.div
                    key={v.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="group flex flex-col items-center text-center p-5 rounded-2xl border border-border bg-card hover:border-accent/30 transition-all hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                      <v.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-body text-sm font-medium text-foreground">{v.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Founder card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="min-w-[260px] bg-card border border-border rounded-2xl p-6"
            >
              <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Основатель</p>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display text-lg font-bold flex-shrink-0">
                  ИА
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">Иван Александров</p>
                  <p className="font-body text-xs text-muted-foreground">Председатель правления</p>
                </div>
              </div>
              <blockquote className="font-display text-sm italic text-muted-foreground leading-relaxed border-l-2 border-accent/40 pl-4">
                «Каждый проект — это инвестиция в будущее. Не финансовая, а человеческая.»
              </blockquote>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
