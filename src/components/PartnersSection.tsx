"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const benefits = [
  { num: "01", title: "Репутационный эффект", desc: "Укрепление имиджа через ассоциацию с социально значимыми проектами." },
  { num: "02", title: "Социальное воздействие", desc: "Прямое участие в изменениях, улучшающих жизнь тысяч людей." },
  { num: "03", title: "Доступ к сообществу", desc: "Сеть экспертов, партнёров и инициаторов для совместных проектов." },
  { num: "04", title: "Гибкие форматы", desc: "От разовой поддержки до стратегического партнёрства." },
];

const PartnersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="partners"
      ref={ref}
      className="min-h-screen flex items-center bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 py-24 md:py-36">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — headline, description, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] mb-6">
              Создавайте
              <br />
              перемены
              <br />
              <span className="italic text-[#9b6dff]">вместе с нами</span>
            </h2>

            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Сотрудничество с фондом&nbsp;— это возможность соединить бизнес-цели
              с&nbsp;общественной пользой и&nbsp;оставить значимый след.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="default"
                size="lg"
                className="group font-body text-base rounded-xl"
                onClick={() =>
                  document
                    .querySelector("#contacts")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Обсудить партнёрство
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="font-body text-base rounded-xl"
                onClick={() =>
                  document
                    .querySelector("#participants")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Подать проект
              </Button>
            </div>
          </motion.div>

          {/* Right — benefit text blocks */}
          <div className="flex flex-col">
            {benefits.map((b, i) => (
              <motion.div
                key={b.num}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                className="border-t border-white/[0.06] py-7"
              >
                <span className="font-display text-sm text-[#9b6dff] tracking-wide mb-2 block">
                  {b.num}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {b.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
