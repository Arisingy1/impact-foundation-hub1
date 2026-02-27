"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const newsItems = [
  {
    date: "28.01.2025",
    type: "Новость",
    title: "Фестиваль «Свет культуры» пройдёт в 5 новых городах",
    excerpt:
      "В 2025 году фестиваль расширяет географию — Казань, Екатеринбург, Новосибирск, Краснодар, Владивосток.",
  },
  {
    date: "15.01.2025",
    type: "Статья",
    title: "Как социальное предпринимательство меняет регионы",
    excerpt:
      "Интервью с выпускниками образовательной лаборатории о влиянии их проектов на сообщества.",
  },
  {
    date: "10.12.2024",
    type: "Отчёт",
    title: "Итоги 2024 года: цифры и достижения",
    excerpt:
      "40 новых проектов, 15 000 участников мероприятий и расширение в 8 регионов.",
  },
];

const NewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="news" ref={ref} className="section-light-alt relative py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header — left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-[#4d7cff] mb-4">
            Медиа
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#101a35]">
            СМИ о нас
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {newsItems.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + 0.12 * i, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative bg-white/60 border border-[#101a35]/[0.06] rounded-2xl p-7 md:p-8 flex flex-col cursor-pointer transition-all duration-300 hover:border-[#4d7cff]/20 hover:bg-white/80 shadow-sm hover:shadow-md"
            >
              {/* Date + type */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-body text-xs text-[#3a4a65]/70 tabular-nums">
                  {item.date}
                </span>
                <span className="font-body text-xs text-[#3a4a65]/40">·</span>
                <span className="font-body text-xs text-[#3a4a65]/70">
                  {item.type}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-lg md:text-xl font-semibold text-[#101a35] leading-snug mb-4 transition-colors duration-300 group-hover:text-[#4d7cff]">
                {item.title}
              </h3>

              {/* Excerpt */}
              <p className="font-body text-sm text-[#3a4a65] leading-relaxed flex-1">
                {item.excerpt}
              </p>

              {/* Arrow */}
              <div className="mt-6 flex items-center justify-end">
                <ArrowUpRight className="w-5 h-5 text-[#101a35]/15 transition-all duration-300 group-hover:text-[#4d7cff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
