import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Award, Users, Building2, ArrowRight } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Репутационный эффект", desc: "Укрепление имиджа через ассоциацию с социально значимыми проектами." },
  { icon: Award, title: "Социальное воздействие", desc: "Прямое участие в изменениях, улучшающих жизнь тысяч людей." },
  { icon: Users, title: "Доступ к сообществу", desc: "Сеть экспертов, партнёров и инициаторов для совместных проектов." },
  { icon: Building2, title: "Гибкие форматы", desc: "От разовой поддержки до стратегического партнёрства." },
];

const PartnersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="partners" ref={ref} className="bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side — headline and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="h-[2px] w-12 bg-accent mb-6" />
            <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Партнёрам</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Создавайте
              <br />перемены
              <br /><span className="italic text-accent">вместе с нами</span>
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
              Сотрудничество с фондом — это возможность соединить бизнес-цели с общественной
              пользой и оставить значимый след.
            </p>
            <Button
              variant="default"
              size="lg"
              className="group font-body text-base"
              onClick={() => document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })}
            >
              Обсудить партнёрство
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right side — benefit cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
