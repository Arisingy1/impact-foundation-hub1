import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowRight } from "lucide-react";

const newsItems = [
  {
    date: "28 января 2025",
    type: "Новость",
    title: "Фестиваль «Свет культуры» пройдёт в 5 новых городах",
    excerpt: "В 2025 году фестиваль расширяет географию и впервые пройдёт в Казани, Екатеринбурге, Новосибирске, Краснодаре и Владивостоке.",
  },
  {
    date: "15 января 2025",
    type: "Статья",
    title: "Как социальное предпринимательство меняет регионы",
    excerpt: "Интервью с выпускниками образовательной лаборатории о том, как их проекты влияют на местные сообщества.",
  },
  {
    date: "10 декабря 2024",
    type: "Отчёт",
    title: "Итоги 2024 года: цифры и достижения",
    excerpt: "Подводим итоги года: 40 новых проектов, 15 000 участников мероприятий и расширение в 8 регионов.",
  },
];

const NewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="news" className="section-padding bg-section-alt" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-4">Медиа</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Новости и события
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border overflow-hidden group hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="h-2 bg-accent/30 group-hover:bg-accent transition-colors" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="font-body text-xs text-muted-foreground">{item.date}</span>
                  <span className="font-body text-xs bg-secondary px-2 py-0.5 rounded-full text-secondary-foreground">
                    {item.type}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-accent">
                  Читать <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
