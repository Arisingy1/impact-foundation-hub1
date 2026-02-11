"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Heart, Users, Lightbulb } from "lucide-react";
import { HeroPattern } from "./illustrations";
import DonationModal from "./DonationModal";

const HeroSection = () => {
  const [donationOpen, setDonationOpen] = useState(false);
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">
      {/* Background — generated pattern instead of image */}
      <HeroPattern />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,57,0.08) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-40 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,57,0.06) 0%, transparent 70%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "5rem" }}
                transition={{ duration: 1 }}
                className="h-[2px] bg-accent mb-8"
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-body text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary-foreground/80">
                  Фонд поддержки соц.-культурных инициатив
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-primary-foreground leading-[0.95] mb-8"
              >
                Созидаем
                <br />
                будущее{" "}
                <span className="text-gradient-gold italic">вместе</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-lg leading-relaxed mb-10"
              >
                Мы объединяем людей, бизнес и культуру для создания проектов,
                которые меняют жизнь и формируют пространство доверия.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-3 mb-12"
              >
                <Button variant="hero" size="lg" onClick={() => setDonationOpen(true)} className="text-base px-8 rounded-full">
                  Поддержать фонд
                </Button>
                <Button variant="heroOutline" size="lg" onClick={() => scrollTo("#partners")} className="text-base px-8 rounded-full">
                  Стать партнёром
                </Button>
                <Button variant="heroOutline" size="lg" onClick={() => scrollTo("#participants")} className="text-base px-8 rounded-full">
                  Подать проект
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex flex-wrap gap-6"
              >
                {[
                  { icon: Heart, text: "6 активных проектов" },
                  { icon: Users, text: "15 000+ участников" },
                  { icon: Lightbulb, text: "25 регионов" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-primary-foreground/65">
                    <item.icon className="w-4 h-4 text-accent/60" />
                    <span className="font-body text-sm">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right side — decorative card stack */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden lg:block relative"
            >
              <div className="relative w-[320px] h-[400px]">
                {/* Card 3 (back) */}
                <div className="absolute top-8 left-8 w-[280px] h-[340px] rounded-3xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm rotate-6" />
                {/* Card 2 (middle) */}
                <div className="absolute top-4 left-4 w-[280px] h-[340px] rounded-3xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm rotate-3" />
                {/* Card 1 (front) */}
                <div className="relative w-[280px] h-[340px] rounded-3xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-md p-8 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
                      Фестивали и события
                    </h3>
                    <p className="font-body text-sm text-primary-foreground/65 leading-relaxed">
                      6 уникальных фестивалей — от творческих до спортивных — объединяют тысячи людей по всей России
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {["🎨", "⚽", "🎬", "🎵"].map((emoji, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-white/10 border-2 border-primary flex items-center justify-center text-sm"
                        >
                          {emoji}
                        </div>
                      ))}
                    </div>
                    <span className="font-body text-xs text-primary-foreground/60">+2 проекта</span>
                  </div>
                </div>
              </div>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.3em]">Вниз</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <DonationModal open={donationOpen} onClose={() => setDonationOpen(false)} />
    </section>
  );
};

export default HeroSection;
