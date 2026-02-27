"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { HeroPattern } from "./illustrations";
import DonationModal from "./DonationModal";

const HeroSection = () => {
  const [donationOpen, setDonationOpen] = useState(false);
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">
      {/* Background — cosmic pattern with crystal */}
      <HeroPattern />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(155,109,255,0.08) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-40 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(155,109,255,0.06) 0%, transparent 70%)" }}
        />
      </div>

      {/* Content — centered like Rybakov Foundation */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-8"
            >
              Социально-культурные
              <br />инициативы —{" "}
              <span className="text-glow italic">самая мощная сила</span>,
              <br />способная изменить мир
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="font-body text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed mb-2"
            >
              Объединяем людей, бизнес и творческие инициативы для созидания
            </motion.p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button variant="hero" size="lg" onClick={() => setDonationOpen(true)} className="text-base px-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white">
              Поддержать фонд
            </Button>
            <Button variant="heroOutline" size="lg" onClick={() => scrollTo("#about")} className="text-base px-10 rounded-full border-white/20 text-white/80 hover:text-white hover:bg-white/5">
              О фонде
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Navigation hints at bottom — Rybakov-style sections preview */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 pb-8"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-3 gap-6 md:gap-8">
            {[
              { label: "Кто меняет мир?", desc: "Лидеры. Они запускают изменения и помогают проявиться новым творческим идеям и сообществам" },
              { label: "Что такое сообщество?", desc: "Среда доверия и поддержки. В нём каждый может расширить свои возможности" },
              { label: "Что делает Фонд?", desc: "Системные изменения в культуре и обществе через поддержку лидеров и проектов" },
            ].map((item, i) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + i * 0.15 }}
                onClick={() => scrollTo("#about")}
                className="text-left group"
              >
                <p className="font-body text-xs md:text-sm font-medium text-white/90 mb-1 group-hover:text-accent transition-colors">
                  {item.label}
                </p>
                <p className="font-body text-[11px] md:text-xs text-white/40 leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => scrollTo("#stats")}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 hover:text-white/50 transition-colors z-10"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <DonationModal open={donationOpen} onClose={() => setDonationOpen(false)} />
    </section>
  );
};

export default HeroSection;
