"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";

import { teamMembers } from "./team/data";
import type { TeamMember } from "./team/types";
import TeamCard from "./team/TeamCard";
import TeamModal from "./team/TeamModal";

const TeamSection = () => {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  const openModal = useCallback((member: TeamMember) => setActiveMember(member), []);
  const closeModal = useCallback(() => setActiveMember(null), []);

  // Carousel Scroll Logic
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let isPaused = false;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseEnter = () => isPaused = true;
    const handleMouseLeave = () => {
      if (!isDown) isPaused = false;
    };

    const handleTouchStart = () => isPaused = true;
    const handleTouchEnd = () => {
      setTimeout(() => { if (!isDown) isPaused = false; }, 5000);
    };

    // Desktop Grab Scroll
    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      isPaused = true;
      el.classList.add('active');
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const handleMouseUp = () => {
      isDown = false;
      el.classList.remove('active');
      setTimeout(() => { isPaused = false; }, 2000);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("touchstart", handleTouchStart);
    el.addEventListener("touchend", handleTouchEnd);
    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mouseup", handleMouseUp);
    el.addEventListener("mousemove", handleMouseMove);

    const intervalId = setInterval(() => {
      if (isPaused || isDown) return;
      if (el.scrollWidth <= el.clientWidth + 10) return;

      const step =
        el.children.length >= 2
          ? (el.children[1] as HTMLElement).offsetLeft -
          (el.children[0] as HTMLElement).offsetLeft
          : el.clientWidth;

      if (Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollTo({ left: el.scrollLeft + step, behavior: "smooth" });
      }
    }, 12000);

    return () => {
      clearInterval(intervalId);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mouseup", handleMouseUp);
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <section
        id="team"
        ref={ref}
        className="section-light relative py-12 md:py-20 overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-24"
          >
            <p className="font-body text-xl uppercase tracking-[0.35em] text-[#4d7cff] mb-4">
              Лидеры изменений
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#101a35] uppercase">
              НАША КОМАНДА
            </h2>
          </motion.div>

          {/* Scroll Snap Carousel */}
          <div
            ref={scrollRef}
            className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 gap-6 md:gap-8 cursor-grab active:cursor-grabbing select-none"
          >
            {teamMembers.map((member, i) => (
              <TeamCard
                key={member.name}
                member={member}
                index={i}
                inView={inView}
                onClick={openModal}
              />
            ))}
          </div>

          {/* Hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 2 }}
            className="text-center font-body text-xs text-[#3a4a65]/50 uppercase tracking-widest mt-6"
          >
            Нажмите на карточку, чтобы узнать больше
          </motion.p>
        </div>
      </section>

      <AnimatePresence>
        {activeMember && (
          <TeamModal member={activeMember} onClose={closeModal} />
        )}
      </AnimatePresence>
    </>
  );
};

export default TeamSection;
