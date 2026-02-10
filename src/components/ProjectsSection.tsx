import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

const tabs: { key: Category; label: string }[] = [
  { key: "realized", label: "Реализованные" },
  { key: "current", label: "Текущие" },
  { key: "planned", label: "Планируемые" },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<Category>("realized");
  const filtered = projects.filter((p) => p.category === active);

  return (
    <section id="projects" ref={ref} className="bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <div className="h-[2px] w-12 bg-accent mb-6" />
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary-foreground/40 mb-3">Проекты</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">Наши проекты</h2>
          </div>
          <div className="flex gap-1 bg-primary-foreground/5 rounded-full p-1">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`font-body text-sm px-5 py-2 rounded-full transition-all duration-300 ${
                  active === t.key
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-primary-foreground/50 hover:text-primary-foreground/80"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {filtered.map((p) => (
              <div
                key={p.title}
                className="group bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-7 hover:bg-primary-foreground/8 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-xl font-semibold text-primary-foreground group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-primary-foreground/20 group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                </div>
                <p className="font-body text-sm text-primary-foreground/50 mb-4 leading-relaxed">{p.idea}</p>
                <div className="grid grid-cols-2 gap-3 text-xs font-body">
                  <div>
                    <span className="text-primary-foreground/30 uppercase tracking-wider">Цель</span>
                    <p className="text-primary-foreground/60 mt-0.5">{p.goal}</p>
                  </div>
                  <div>
                    <span className="text-primary-foreground/30 uppercase tracking-wider">Формат</span>
                    <p className="text-primary-foreground/60 mt-0.5">{p.format}</p>
                  </div>
                  <div>
                    <span className="text-primary-foreground/30 uppercase tracking-wider">Эффект</span>
                    <p className="text-accent mt-0.5 font-medium">{p.impact}</p>
                  </div>
                  {p.partners && (
                    <div>
                      <span className="text-primary-foreground/30 uppercase tracking-wider">Партнёры</span>
                      <p className="text-primary-foreground/60 mt-0.5">{p.partners}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
