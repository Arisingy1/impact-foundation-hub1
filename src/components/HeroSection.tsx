import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover scale-105" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/95" />
      </div>

      {/* Content - left-aligned, more editorial */}
      <div className="relative z-10 flex-1 flex items-end pb-20 md:pb-28 lg:pb-32">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "4rem" }}
              transition={{ duration: 0.8 }}
              className="h-[2px] bg-accent mb-8"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-xs md:text-sm uppercase tracking-[0.4em] text-primary-foreground/50 mb-4"
            >
              Благотворительный фонд
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[0.95] mb-8"
            >
              Созидаем
              <br />
              будущее{" "}
              <span className="text-gradient-gold italic">вместе</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="font-body text-base md:text-lg text-primary-foreground/60 max-w-xl leading-relaxed mb-10"
            >
              Мы объединяем людей, бизнес и культуру для создания проектов,
              которые меняют жизнь и формируют пространство доверия.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-3"
            >
              <Button variant="hero" size="lg" onClick={() => scrollTo("#partners")} className="text-base px-8">
                Поддержать фонд
              </Button>
              <Button variant="heroOutline" size="lg" onClick={() => scrollTo("#partners")} className="text-base px-8">
                Стать партнёром
              </Button>
              <Button variant="heroOutline" size="lg" onClick={() => scrollTo("#participants")} className="text-base px-8">
                Подать проект
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollTo("#stats")}
        className="absolute bottom-6 right-10 hidden md:flex items-center gap-2 text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors"
      >
        <span className="font-body text-xs uppercase tracking-widest">Листать</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
