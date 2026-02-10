import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "120+", label: "Проектов" },
  { value: "15 000+", label: "Участников" },
  { value: "25", label: "Регионов" },
  { value: "80+", label: "Событий" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="stats" className="relative" ref={ref}>
      {/* Diagonal split background */}
      <div className="bg-background py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-border">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="text-center py-6 md:py-8 first:pl-0 last:pr-0"
              >
                <div className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-xs md:text-sm uppercase tracking-[0.15em] text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
