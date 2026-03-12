"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { HeroBackground } from "./illustrations";
import DonationModal from "./DonationModal";
import Image from "next/image";
import LogoImg from "public/Logo.png";

const HeroSection = () => {
  const [donationOpen, setDonationOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
          animate={isMobile ? {} : { x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }}
          transition={isMobile ? { duration: 0 } : { duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(155,109,255,0.1) 0%, transparent 70%)", willChange: isMobile ? "auto" : "transform" }}
        />
        <motion.div
          animate={isMobile ? {} : { x: [0, -20, 0], y: [0, 15, 0] }}
          transition={isMobile ? { duration: 0 } : { duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(155,109,255,0.07) 0%, transparent 70%)", willChange: isMobile ? "auto" : "transform" }}
        />
      </div>

      {/* Content — centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center pt-24 md:pt-32">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-10 text-center">
          {/* Logo on top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: [1, 1.05, 1],
            }}
            transition={{
              opacity: { duration: isMobile ? 0 : 1, ease: "easeOut" },
              scale: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="flex justify-center mb-8 md:mb-12"
          >
            <div className="relative">
              <Image
                src={LogoImg}
                alt="Logo"
                className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] select-none opacity-40"
                priority
              />
              <div className="absolute inset-0 bg-[#4d7cff]/15 blur-[65px] -z-10 rounded-full" />
            </div>
          </motion.div>

          {/* Fund full name label */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0 : 0.5, delay: isMobile ? 0 : 0.1 }}
            className="font-body text-xl uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#4d7cff] mb-5 md:mb-6 px-4"
          >
            Фонд «Среда Возможностей»
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0 : 0.6, delay: isMobile ? 0 : 0.2 }}
            className="mb-10 md:mb-14"
          >

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0 : 0.6, delay: isMobile ? 0 : 0.5 }}
              className="font-body text-sm md:text-base lg:text-lg text-white/70 max-w-xl mx-auto leading-relaxed"
            >
              Объединяем людей, ресурсы, бизнес и экспертизу для созидания
            </motion.p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0 : 0.6, delay: isMobile ? 0 : 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              variant="hero"
              size="lg"
              onClick={() => setDonationOpen(true)}
              className="text-base px-10 rounded-full bg-[#4d7cff] hover:bg-[#3d6cf0] text-white border-0 shadow-lg shadow-[#4d7cff]/20"
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
        transition={{ delay: isMobile ? 0 : 0.8, duration: isMobile ? 0 : 0.5 }}
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
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: isMobile ? 0 : 0.8 + i * 0.1, duration: isMobile ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => scrollTo("#about")}
                className="text-left group"
              >
                <p className="font-body text-xs md:text-sm font-semibold text-white mb-1 group-hover:text-[#4d7cff] transition-colors">
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
        transition={{ delay: isMobile ? 0 : 1.2, duration: isMobile ? 0 : 0.5 }}
        onClick={() => scrollTo("#stats")}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors z-10"
      >
        <motion.div
          animate={isMobile ? { y: 0 } : { y: [0, 8, 0] }}
          transition={isMobile ? { duration: 0 } : { repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>

      <DonationModal open={donationOpen} onClose={() => setDonationOpen(false)} />
    </section>
  );
};

export default HeroSection;
