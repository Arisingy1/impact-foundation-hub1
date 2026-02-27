"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { HeroBackground } from "./illustrations";
import DonationModal from "./DonationModal";
import Image from "next/image";
import LogoImg from "@/assets/Logo.png";

const HeroSection = () => {
  const [donationOpen, setDonationOpen] = useState(false);
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">
      {/* Background — cosmic gradient + stars */}
      <HeroBackground />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(155,109,255,0.1) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(155,109,255,0.07) 0%, transparent 70%)" }}
        />
      </div>

      {/* Rotating logo behind content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="relative"
        >
          <Image
            src={LogoImg}
            alt=""
            width={500}
            height={500}
            className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] lg:w-[520px] lg:h-[520px] opacity-[0.04] select-none"
            priority
          />
        </motion.div>
        {/* Glow behind logo */}
        <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-[#9b6dff]/[0.06] blur-[100px]" />
      </div>

      {/* Content — centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto px-6 md:px-10 text-center">
          {/* Fund full name label */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#9b6dff] mb-6 md:mb-8"
          >
            Фонд поддержки социально-культурных инициатив и бизнес проектов
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 md:mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-8"
            >
              Социально-культурные
              <br />инициативы —{" "}
              <span className="text-glow italic">самая мощная сила</span>,
              <br />способная изменить мир
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="font-body text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
            >
              Объединяем людей, бизнес и творческие инициативы для созидания
            </motion.p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              variant="hero"
              size="lg"
              onClick={() => setDonationOpen(true)}
              className="text-base px-10 rounded-full bg-[#9b6dff] hover:bg-[#8b5df0] text-white border-0 shadow-lg shadow-[#9b6dff]/20"
            >
              Поддержать фонд
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              onClick={() => scrollTo("#about")}
              className="text-base px-10 rounded-full border-white/25 text-white hover:text-white hover:bg-white/10"
            >
              О фонде
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Navigation hints at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="relative z-10 pb-8"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
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
                transition={{ delay: 1.7 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => scrollTo("#about")}
                className="text-left group"
              >
                <p className="font-body text-xs md:text-sm font-semibold text-white mb-1 group-hover:text-[#9b6dff] transition-colors">
                  {item.label}
                </p>
                <p className="font-body text-[11px] md:text-xs text-white/55 leading-relaxed line-clamp-2">
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
        transition={{ delay: 2.2 }}
        onClick={() => scrollTo("#stats")}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors z-10"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>

      <DonationModal open={donationOpen} onClose={() => setDonationOpen(false)} />
    </section>
  );
};

export default HeroSection;
