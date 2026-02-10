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
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-4">О фонде</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Кто мы и зачем мы здесь
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Фонд был создан с убеждением, что сила общества — в объединении. Мы верим, что каждый
            человек и организация способны изменить мир вокруг себя, если дать им правильные
            инструменты и окружение.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Видение</h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Мы видим мир, в котором социальная ответственность становится нормой, а не
              исключением. Мир, где бизнес, культура и общество действуют в гармонии, создавая
              устойчивые изменения для будущих поколений.
            </p>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Миссия</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Объединять ресурсы, идеи и людей для реализации проектов, которые приносят
              долгосрочную пользу обществу и формируют культуру созидания.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-sm"
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Основатель
            </h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display text-xl font-bold">
                ИА
              </div>
              <div>
                <p className="font-body font-semibold text-foreground">Иван Александров</p>
                <p className="font-body text-sm text-muted-foreground">
                  Учредитель и председатель правления
                </p>
              </div>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              «Каждый проект, который мы поддерживаем — это инвестиция в будущее. Не финансовая,
              а человеческая.»
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-8">
            Наши ценности
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3 shadow-sm"
              >
                <v.icon className="w-5 h-5 text-accent" />
                <span className="font-body font-medium text-foreground">{v.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
