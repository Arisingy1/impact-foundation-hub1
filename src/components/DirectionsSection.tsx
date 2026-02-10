import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Palette, Sprout, Handshake, Globe, PartyPopper, BookOpen, ArrowRight } from "lucide-react";

const directions = [
  {
    icon: Palette,
    title: "Культура и искусство",
    desc: "Поддержка выставок, театральных постановок, музыкальных инициатив и арт-резиденций.",
    formats: "Выставки · Спектакли · Арт-резиденции",
    audience: "Художники, музыканты, театральные деятели",
  },
  {
    icon: Sprout,
    title: "Социальные инициативы",
    desc: "Реабилитационные программы и развитие социальной инфраструктуры.",
    formats: "Программы · Центры · Гранты",
    audience: "НКО, социальные предприниматели",
  },
  {
    icon: Handshake,
    title: "Бизнес и соц. воздействие",
    desc: "Интеграция бизнес-ресурсов в социально значимые проекты.",
    formats: "Партнёрства · CSR-проекты",
    audience: "Корпорации, предприниматели",
  },
  {
    icon: Globe,
    title: "Международные проекты",
    desc: "Межрегиональные инициативы и культурный обмен.",
    formats: "Обмены · Конференции · Программы",
    audience: "Международные организации",
  },
  {
    icon: PartyPopper,
    title: "Фестивали и события",
    desc: "Организация форумов и образовательных событий.",
    formats: "Фестивали · Форумы · Конференции",
    audience: "Широкая аудитория",
  },
  {
    icon: BookOpen,
    title: "Образование",
    desc: "Воркшопы, менторство и развитие навыков.",
    formats: "Курсы · Лекции · Воркшопы",
    audience: "Студенты, молодые специалисты",
  },
];

const DirectionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="directions" ref={ref} className="bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          {/* Left sticky headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="h-[2px] w-12 bg-accent mb-6" />
            <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Направления</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              Сферы
              <br />деятельности
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Шесть ключевых направлений, в которых мы создаём устойчивые изменения.
            </p>
          </motion.div>

          {/* Right — direction items as list */}
          <div className="space-y-0 divide-y divide-border">
            {directions.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group py-6 md:py-8 cursor-pointer"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${hovered === i ? 'bg-accent text-accent-foreground scale-110' : 'bg-accent/10 text-accent'}`}>
                    <d.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display text-lg md:text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                        {d.title}
                      </h3>
                      <ArrowRight className={`w-4 h-4 text-accent transition-all duration-300 ${hovered === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-2">{d.desc}</p>
                    <div className={`overflow-hidden transition-all duration-300 ${hovered === i ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="font-body text-xs text-accent">{d.formats}</p>
                      <p className="font-body text-xs text-muted-foreground mt-1">Для: {d.audience}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectionsSection;
