"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Award, Users, Building2, ArrowRight, Sparkles } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Репутационный эффект", desc: "Укрепление имиджа через ассоциацию с социально значимыми проектами.", num: "01" },
  { icon: Award, title: "Социальное воздействие", desc: "Прямое участие в изменениях, улучшающих жизнь тысяч людей.", num: "02" },
  { icon: Users, title: "Доступ к сообществу", desc: "Сеть экспертов, партнёров и инициаторов для совместных проектов.", num: "03" },
  { icon: Building2, title: "Гибкие форматы", desc: "От разовой поддержки до стратегического партнёрства.", num: "04" },
];

const PartnersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="partners" ref={ref} className="bg-background overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left side — headline and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="font-body text-xs uppercase tracking-[0.2em] text-accent font-medium">Партнёрам</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-6">
              Создавайте
              <br />перемены
              <br /><span className="italic text-accent">вместе с нами</span>
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
              Сотрудничество с фондом — это возможность соединить бизнес-цели с общественной
              пользой и оставить значимый след.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="default"
                size="lg"
                className="group font-body text-base rounded-xl"
                onClick={() => document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })}
              >
                Обсудить партнёрство
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-body text-base rounded-xl"
                onClick={() => document.querySelector("#participants")?.scrollIntoView({ behavior: "smooth" })}
              >
                Подать проект
              </Button>
            </div>
          </motion.div>

          {/* Right side — benefit cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:border-accent/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                      <b.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-display text-3xl font-bold text-border group-hover:text-accent/20 transition-colors">{b.num}</span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{b.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
