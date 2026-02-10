import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    date: "28.01.2025",
    type: "Новость",
    title: "Фестиваль «Свет культуры» пройдёт в 5 новых городах",
    excerpt: "В 2025 году фестиваль расширяет географию — Казань, Екатеринбург, Новосибирск, Краснодар, Владивосток.",
  },
  {
    date: "15.01.2025",
    type: "Статья",
    title: "Как социальное предпринимательство меняет регионы",
    excerpt: "Интервью с выпускниками образовательной лаборатории о влиянии их проектов на сообщества.",
  },
  {
    date: "10.12.2024",
    type: "Отчёт",
    title: "Итоги 2024 года: цифры и достижения",
    excerpt: "40 новых проектов, 15 000 участников мероприятий и расширение в 8 регионов.",
  },
];

const NewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="news" ref={ref} className="bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <div className="h-[2px] w-12 bg-accent mb-6" />
            <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Медиа</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Новости
            </h2>
          </div>
        </motion.div>

        {/* News as full-width rows */}
        <div className="divide-y divide-border">
          {newsItems.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group py-8 cursor-pointer flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
            >
              <div className="flex items-center gap-3 md:w-40 flex-shrink-0">
                <span className="font-body text-sm text-muted-foreground tabular-nums">{item.date}</span>
                <span className="font-body text-[10px] uppercase tracking-wider bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                  {item.type}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground line-clamp-1">{item.excerpt}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-2 transition-all flex-shrink-0 hidden md:block" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
