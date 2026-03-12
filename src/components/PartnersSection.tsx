"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, ExternalLink } from "lucide-react";

const benefits = [
  { num: "01", title: "Репутационный эффект", desc: "Укрепление имиджа через ассоциацию с социально значимыми проектами." },
  { num: "02", title: "Социальное воздействие", desc: "Прямое участие в изменениях, улучшающих жизнь тысяч людей." },
  { num: "03", title: "Доступ к сообществу", desc: "Сеть экспертов, партнёров и инициаторов для совместных проектов." },
  { num: "04", title: "Гибкие форматы", desc: "От разовой поддержки до стратегического партнёрства." },
];

const documents = [
  { title: "5 преимуществ фонда", url: "/documents/partners/5_benefits_of_the_foundation.pdf" },
  { title: "7 форматов сотрудничества", url: "/documents/partners/7_partnership_formats.pdf" },
  { title: "Как стать партнером", url: "/documents/partners/how_to_become_a_partner.pdf" },
  { title: "Как фонд работает с партнерами", url: "/documents/partners/how_foundation_works_with_partners.pdf" },
  { title: "Матрица выгод партнерства", url: "/documents/partners/partnership_benefits_matrix.pdf" },
  { title: "Уровни партнерства фонда", url: "/documents/partners/foundation_partnership_levels.pdf" },
];

const PartnersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="partners"
      ref={ref}
      className="bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 py-12 md:py-20 border-t border-white/[0.03]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — headline, description, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 60, filter: "blur(4px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] mb-6">
              Создавайте
              <br />
              перемены
              <br />
              <span className="italic text-[#4d7cff]">вместе с нами</span>
            </h2>

            <p className="font-body text-lg text-white/70 leading-relaxed mb-10 max-w-lg">
              Сотрудничество с фондом&nbsp;— это возможность соединить бизнес-цели
              с&nbsp;общественной пользой и&nbsp;оставить значимый след.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
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

            {/* Documents list */}
            <div className="space-y-4">
              <h4 className="font-display text-sm uppercase tracking-widest text-[#4d7cff] font-bold mb-4">
                Документы для партнеров
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {documents.map((doc, idx) => (
                  <motion.a
                    key={idx}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + idx * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.08] hover:bg-white/[0.04] transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#4d7cff]/10 flex items-center justify-center text-[#4d7cff] group-hover:bg-[#4d7cff] group-hover:text-white transition-colors">
                      <FileText className="w-4 h-4" />
                    </div>
                    <span className="font-body text-sm text-white/60 group-hover:text-white transition-colors">
                      {doc.title}
                    </span>
                    <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-40 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — benefit text blocks */}
          <div className="flex flex-col">
            {benefits.map((b, i) => (
              <motion.div
                key={b.num}
                initial={{ opacity: 0, y: 30, filter: "blur(3px)" }}
                animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="border-t border-white/[0.06] py-7"
              >
                <span className="font-display text-lg text-[#4d7cff] tracking-wide mb-2 block">
                  {b.num}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-1">
                  {b.title}
                </h3>
                <p className="font-body text-base md:text-lg text-white/65 leading-relaxed">
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
