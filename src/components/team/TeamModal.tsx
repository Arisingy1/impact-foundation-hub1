"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import type { TeamMember } from "./types";

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

interface TeamModalProps {
  member: TeamMember;
  onClose: () => void;
}

export default function TeamModal({ member, onClose }: TeamModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={handleBackdropClick}
      style={{ backgroundColor: "rgba(10, 16, 35, 0.72)", backdropFilter: "blur(6px)" }}
    >
      <motion.div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[90dvh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        initial={{ opacity: 0, scale: 0.95, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 24 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-[#101a35]/[0.06] hover:bg-[#101a35]/[0.12] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4 text-[#101a35]" />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 overscroll-contain scrollbar-hide">

          {/* Hero: full photo or initials placeholder */}
          {member.image ? (
            <div className="relative w-full shrink-0">
              <Image
                src={member.image}
                alt={member.name}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 672px"
                className="w-full h-auto block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101a35]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-[#7faeff] font-semibold mb-2">
                  {member.role}
                </p>
                <h3 className="font-display text-2xl md:text-4xl font-bold text-white leading-tight">
                  {member.name}
                </h3>
              </div>
            </div>
          ) : (
            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[#101a35] to-[#1e2f5e] shrink-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-6xl md:text-8xl font-bold text-white/20 select-none">
                  {getInitials(member.name)}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#101a35]/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-[#7faeff] font-semibold mb-2">
                  {member.role}
                </p>
                <h3 className="font-display text-2xl md:text-4xl font-bold text-white leading-tight">
                  {member.name}
                </h3>
              </div>
            </div>
          )}

          {/* Body */}
          <div className="px-6 md:px-8 py-6 md:py-8 space-y-6">

            {/* Quote */}
            {member.quote && (
              <blockquote className="border-l-[3px] border-[#4d7cff] pl-5 pr-2">
                <p className="font-display text-lg md:text-xl italic text-[#101a35] leading-relaxed">
                  «{member.quote}»
                </p>
              </blockquote>
            )}

            {/* Full bio */}
            {member.fullBio && member.fullBio.length > 0 && (
              <div className="space-y-3">
                {member.fullBio.map((para, idx) => (
                  <p key={idx} className="text-sm md:text-base leading-relaxed text-[#3a4a65]">
                    {para}
                  </p>
                ))}
              </div>
            )}

            {/* Activities */}
            {member.activities && (
              <div>
                <h4 className="font-body text-[10px] uppercase tracking-[0.3em] text-[#4d7cff] font-semibold mb-3">
                  Профессиональная деятельность
                </h4>
                <p className="text-sm md:text-base leading-relaxed text-[#3a4a65]">
                  {member.activities}
                </p>
              </div>
            )}

            {/* Inspiration */}
            {member.inspiration && (
              <div>
                <h4 className="font-body text-[10px] uppercase tracking-[0.3em] text-[#4d7cff] font-semibold mb-3">
                  Меня вдохновляет
                </h4>
                <p className="text-sm md:text-base leading-relaxed text-[#3a4a65]">
                  {member.inspiration}
                </p>
              </div>
            )}

            {/* Hobbies */}
            {member.hobbies && (
              <div>
                <h4 className="font-body text-[10px] uppercase tracking-[0.3em] text-[#4d7cff] font-semibold mb-3">
                  Хобби
                </h4>
                <p className="text-sm md:text-base leading-relaxed text-[#3a4a65]">
                  {member.hobbies}
                </p>
              </div>
            )}

            <div className="h-2" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
