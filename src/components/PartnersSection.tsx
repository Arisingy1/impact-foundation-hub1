import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Award, Users, Building2 } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Репутационный эффект",
    desc: "Ассоциация с социально значимыми проектами укрепляет имидж и повышает лояльность аудитории.",
  },
  {
    icon: Award,
    title: "Социальное воздействие",
    desc: "Прямое участие в изменениях, которые улучшают жизнь тысяч людей.",
  },
  {
    icon: Users,
    title: "Доступ к сообществу",
    desc: "Широкая сеть партнёров, экспертов и инициаторов для совместных проектов.",
  },
  {
    icon: Building2,
    title: "Гибкие форматы",
    desc: "От разовой поддержки до стратегического партнёрства — выбирайте подходящий формат.",
  },
];

const PartnersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partners" className="section-padding bg-section-alt" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Партнёрам и меценатам
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Создавайте перемены вместе с нами
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Сотрудничество с фондом — это возможность соединить бизнес-цели с общественной
            пользой и оставить значимый след.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 items-start bg-card rounded-xl p-6 border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                <b.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{b.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center bg-primary rounded-2xl p-10"
        >
          <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
            Готовы начать сотрудничество?
          </h3>
          <p className="font-body text-primary-foreground/70 mb-6 max-w-lg mx-auto">
            Свяжитесь с нами, чтобы обсудить возможности партнёрства и найти оптимальный
            формат сотрудничества.
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={() => document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })}
          >
            Связаться с нами
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
