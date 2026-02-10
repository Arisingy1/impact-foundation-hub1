import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Sprout, Handshake, Globe, PartyPopper, BookOpen } from "lucide-react";

const directions = [
  {
    icon: Palette,
    title: "Культура и искусство",
    desc: "Поддержка культурных и художественных проектов, выставок, театральных постановок и музыкальных инициатив.",
    formats: "Выставки, спектакли, арт-резиденции",
    audience: "Художники, музыканты, театральные деятели",
  },
  {
    icon: Sprout,
    title: "Социальные инициативы",
    desc: "Реабилитационные программы, поддержка уязвимых групп и развитие социальной инфраструктуры.",
    formats: "Программы, центры, гранты",
    audience: "НКО, социальные предприниматели",
  },
  {
    icon: Handshake,
    title: "Бизнес и социальное воздействие",
    desc: "Интеграция бизнес-ресурсов в социально значимые проекты для достижения устойчивых результатов.",
    formats: "Партнёрства, CSR-проекты",
    audience: "Корпорации, предприниматели",
  },
  {
    icon: Globe,
    title: "Международные проекты",
    desc: "Межрегиональные и международные инициативы, направленные на культурный обмен и сотрудничество.",
    formats: "Обмены, конференции, совместные программы",
    audience: "Международные организации",
  },
  {
    icon: PartyPopper,
    title: "Фестивали и события",
    desc: "Организация фестивалей, форумов и образовательных событий, объединяющих разные аудитории.",
    formats: "Фестивали, форумы, конференции",
    audience: "Широкая аудитория",
  },
  {
    icon: BookOpen,
    title: "Образование",
    desc: "Образовательные программы, воркшопы и менторские инициативы для развития навыков.",
    formats: "Курсы, лекции, воркшопы",
    audience: "Студенты, молодые специалисты",
  },
];

const DirectionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="directions" className="section-padding bg-section-alt" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-4">Направления</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Сферы деятельности фонда
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {directions.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <d.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{d.title}</h3>
              <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{d.desc}</p>
              <div className="space-y-1 text-xs font-body">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Форматы:</span> {d.formats}
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Кому:</span> {d.audience}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectionsSection;
