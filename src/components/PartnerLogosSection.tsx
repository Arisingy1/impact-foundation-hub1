"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";

const partners = [
   { name: "OMSM", placeholder: null, image: "/assets/omsm.webp", link: null },
   { name: "NIRIX", placeholder: null, image: "/assets/nirix.webp", link: null },
   { name: "LUMELABS", placeholder: null, image: "/assets/lumelabs.webp", link: 'https://lumelabs-landing.vercel.app/' },
   { name: "Ваша компания 1", placeholder: "Здесь может быть ваша компания", image: null, link: null },
];

const PartnerLogosSection = () => {
   const ref = useRef(null);
   const scrollRef = useRef<HTMLDivElement>(null);
   const inView = useInView(ref, { once: true, margin: "-40px" });

   // Carousel Scroll Logic
   useEffect(() => {
      const el = scrollRef.current;
      if (!el) return;

      let isDown = false;
      let startX: number;
      let scrollLeft: number;

      const handleMouseDown = (e: MouseEvent) => {
         isDown = true;
         el.classList.add('active');
         startX = e.pageX - el.offsetLeft;
         scrollLeft = el.scrollLeft;
      };

      const handleMouseLeave = () => {
         isDown = false;
         el.classList.remove('active');
      };

      const handleMouseUp = () => {
         isDown = false;
         el.classList.remove('active');
      };

      const handleMouseMove = (e: MouseEvent) => {
         if (!isDown) return;
         e.preventDefault();
         const x = e.pageX - el.offsetLeft;
         const walk = (x - startX) * 2;
         el.scrollLeft = scrollLeft - walk;
      };

      el.addEventListener("mousedown", handleMouseDown);
      el.addEventListener("mouseleave", handleMouseLeave);
      el.addEventListener("mouseup", handleMouseUp);
      el.addEventListener("mousemove", handleMouseMove);

      return () => {
         el.removeEventListener("mousedown", handleMouseDown);
         el.removeEventListener("mouseleave", handleMouseLeave);
         el.removeEventListener("mouseup", handleMouseUp);
         el.removeEventListener("mousemove", handleMouseMove);
      };
   }, []);

   return (
      <section ref={ref} className="relative overflow-hidden bg-[#0a1025]">
         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

         <div className="w-full mx-auto py-6 md:py-8 relative">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={inView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6 }}
               className="text-center mb-5 px-4"
            >
               <p className="font-body text-sm uppercase tracking-[0.3em] text-white/40">Наши партнёры</p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0 }}
               animate={inView ? { opacity: 1 } : {}}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="w-full relative"
            >
               {/* Carousel Container */}
               <div
                  ref={scrollRef}
                  className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-3 px-4 md:px-6 pb-2 scroll-smooth md:justify-center cursor-grab active:cursor-grabbing select-none"
               >
                  {partners.map((partner, i) => {
                     const CardContent = (
                        <div className="flex items-center justify-center w-full h-full p-2.5 md:p-3 transition-colors duration-300 overflow-hidden rounded-2xl">
                           {partner.image ? (
                              <Image
                                 src={partner.image}
                                 alt={partner.name}
                                 width={200}
                                 height={100}
                                 className="max-w-full max-h-full object-contain"
                              />
                           ) : (
                              <span className="font-display text-[18px] sm:text-s font-medium leading-tight text-white/40 group-hover:text-[#4d7cff]/60 px-2 text-center">
                                 {partner.placeholder}
                              </span>
                           )}
                        </div>
                     );

                     const hasImage = !!partner.image;
                     const containerClass = `flex-shrink-0 w-[200px] h-24 md:w-56 md:h-32 flex items-center justify-center rounded-2xl transition-all duration-300 group snap-center ${hasImage
                        ? "border border-white/[0.06] bg-white/[0.02] hover:border-[#4d7cff]/30"
                        : "border border-white/[0.06] bg-white/[0.03] hover:border-[#4d7cff]/30"
                        }`;

                     if (partner.link) {
                        return (
                           <a key={`p-${i}`} href={partner.link} target="_blank" rel="noopener noreferrer" className={containerClass}>
                              {CardContent}
                           </a>
                        )
                     }

                     return (
                        <div key={`p-${i}`} className={containerClass}>
                           {CardContent}
                        </div>
                     )
                  })}
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default PartnerLogosSection;
