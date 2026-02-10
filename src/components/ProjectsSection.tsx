import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

type Category = "realized" | "current" | "planned";

const projects: { category: Category; title: string; idea: string; goal: string; format: string; impact: string; partners?: string }[] = [
  {
    category: "realized",
    title: "Фестиваль «Свет культуры»",
    idea: "Масштабный фестиваль современного искусства в регионах",
    goal: "Сделать современное искусство доступным за пределами столицы",
    format: "Выставки, перформансы, мастер-классы",
    impact: "5 000+ посетителей, 12 городов",
    partners: "Министерство культуры, Фонд А",
  },
  {
    category: "realized",
    title: "Программа «Новый старт»",
    idea: "Реабилитационная программа для молодёжи",
    goal: "Социальная адаптация молодёжи через творчество",
    format: "Мастерские, менторство, гранты",
    impact: "300+ участников программы",
  },
  {
    category: "current",
    title: "Платформа «Идея → Дело»",
    idea: "Онлайн-платформа для инициаторов социальных проектов",
    goal: "Создать экосистему поддержки социальных инициатив",
    format: "Цифровая платформа, акселератор",
    impact: "50+ проектов в работе",
    partners: "Tech-партнёры",
  },
  {
    category: "current",
    title: "Образовательная лаборатория",
    idea: "Серия воркшопов по социальному предпринимательству",
    goal: "Обучить 500 социальных предпринимателей",
    format: "Онлайн и офлайн обучение",
    impact: "200+ выпускников",
  },
  {
    category: "planned",
    title: "Международный форум «Мосты»",
    idea: "Форум по межкультурному сотрудничеству",
    goal: "Наладить международные партнёрства",
    format: "Конференция, нетворкинг, воркшопы",
    impact: "Ожидается 1 000+ участников",
  },
  {
    category: "planned",
    title: "Грантовая программа «Первый шаг»",
    idea: "Микрогранты для начинающих инициаторов",
    goal: "Поддержать 100 начинающих проектов",
    format: "Гранты, менторство",
    impact: "100+ грантов",
  },
];

const categoryLabels: Record<Category, string> = {
  realized: "Реализованные",
  current: "Текущие",
  planned: "Планируемые",
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<Category>("realized");

  const filtered = projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-4">Проекты</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Наши проекты
          </h2>
        </motion.div>

        <div className="flex justify-center gap-2 mb-10">
          {(Object.keys(categoryLabels) as Category[]).map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "secondary"}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className="font-body"
            >
              {categoryLabels[cat]}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{p.title}</h3>
              <div className="space-y-2 font-body text-sm">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Идея:</span> {p.idea}
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Цель:</span> {p.goal}
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Формат:</span> {p.format}
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Эффект:</span> {p.impact}
                </p>
                {p.partners && (
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Партнёры:</span> {p.partners}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
