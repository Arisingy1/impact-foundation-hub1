"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { TeamMember } from "./types";

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
  inView: boolean;
  onClick: (member: TeamMember) => void;
}

export default function TeamCard({ member, index, inView, onClick }: TeamCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      onClick={() => onClick(member)}
      className="snap-center shrink-0 w-[80vw] sm:w-[340px] md:w-[300px] lg:w-[320px] xl:w-[340px] bg-white rounded-3xl p-5 md:p-6 shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-[#101a35]/[0.05] flex flex-col text-left cursor-pointer hover:shadow-[0_8px_32px_rgb(77,124,255,0.12)] hover:-translate-y-1 transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7cff] focus-visible:ring-offset-2"
    >
      {/* Photo / Avatar */}
      <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#eef1f8] mb-6">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 80vw, 340px"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-5xl font-bold text-[#101a35]/20 select-none">
              {getInitials(member.name)}
            </span>
          </div>
        )}

        {/* "Подробнее" hover badge */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="font-body text-[9px] uppercase tracking-[0.2em] bg-[#4d7cff] text-white px-3 py-1 rounded-full">
            Подробнее
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-grow">
        <div className="mb-4">
          <p className="font-body text-[10px] uppercase tracking-[0.25em] text-[#4d7cff] font-semibold mb-3 border-b border-[#101a35]/5 pb-3 block">
            {member.role}
          </p>
        </div>
        <div className="mt-auto">
          <h3 className="font-display text-xl md:text-2xl font-bold text-[#101a35] mb-2 leading-tight">
            {member.name}
          </h3>
        </div>
      </div>
    </motion.button>
  );
}
