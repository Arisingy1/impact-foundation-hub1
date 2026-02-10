"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Newspaper, FileText, BarChart3 } from "lucide-react";

const newsItems = [
  {
    date: "28.01.2025",
    type: "Новость",
    icon: Newspaper,
    title: "Фестиваль «Свет культуры» пройдёт в 5 новых городах",
    excerpt: "В 2025 году фестиваль расширяет географию — Казань, Екатеринбург, Новосибирск, Краснодар, Владивосток.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    date: "15.01.2025",
    type: "Статья",
    icon: FileText,
    title: "Как социальное предпринимательство меняет регионы",
    excerpt: "Интервью с выпускниками образовательной лаборатории о влиянии их проектов на сообщества.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    date: "10.12.2024",
    type: "Отчёт",
    icon: BarChart3,
    title: "Итоги 2024 года: цифры и достижения",
    excerpt: "40 новых проектов, 15 000 участников мероприятий и расширение в 8 регионов.",
    color: "bg-amber-500/10 text-amber-600",
  },
];

const NewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="news" ref={ref} className="bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Медиа</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Последние <span className="italic text-accent">новости</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {newsItems.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-7 hover:border-accent/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 cursor-pointer transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 font-body text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full ${item.color}`}>
                    <item.icon className="w-3 h-3" />
                    {item.type}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground/20 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 mb-5">{item.excerpt}</p>

              <div className="pt-4 border-t border-border">
                <span className="font-body text-xs text-muted-foreground/60 tabular-nums">{item.date}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
