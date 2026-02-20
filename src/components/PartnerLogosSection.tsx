"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partnerLogos = [
  { name: "Партнёр 1", placeholder: "П1" },
  { name: "Партнёр 2", placeholder: "П2" },
  { name: "Партнёр 3", placeholder: "П3" },
  { name: "Партнёр 4", placeholder: "П4" },
  { name: "Партнёр 5", placeholder: "П5" },
  { name: "Партнёр 6", placeholder: "П6" },
];

const PartnerLogosSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">Наши партнёры</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {partnerLogos.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="w-28 h-16 md:w-36 md:h-20 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground/40 hover:border-accent/30 hover:text-accent/60 transition-all duration-300"
            >
              <span className="font-display text-lg font-bold">{partner.placeholder}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerLogosSection;
