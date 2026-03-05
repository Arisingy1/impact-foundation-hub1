"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const partners = [
   { name: "OMSM", placeholder: null, image: "/assets/omsm.webp", link: null },
   { name: "NIRIX", placeholder: null, image: "/assets/nirix.webp", link: null },
   { name: "LUMELABS", placeholder: null, image: "/assets/lumelabs.webp", link: 'https://lumelabs-landing.vercel.app/' },
   { name: "Ваша компания 1", placeholder: "Здесь может быть ваша компания", image: null, link: null },
];

const PartnerLogosSection = () => {
   const ref = useRef(null);
   const inView = useInView(ref, { once: true, margin: "-40px" });

   return (
      <section ref={ref} className="relative overflow-hidden bg-[#0a1025]">
         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

         <div className="max-w-[100vw] mx-auto py-16 md:py-20 relative">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={inView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6 }}
               className="text-center mb-10 px-6"
            >
               <p className="font-body text-xl uppercase tracking-[0.3em] text-white/40">Наши партнёры</p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0 }}
               animate={inView ? { opacity: 1 } : {}}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="w-full relative px-6 md:px-10 max-w-7xl mx-auto"
            >
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-items-center">
                  {partners.map((partner, i) => {
                     const CardContent = (
                        <div className="flex items-center justify-center w-full h-full transition-colors duration-300 overflow-hidden rounded-2xl">
                           {partner.image ? (
                              <img src={partner.image} alt={partner.name} className="w-full h-full object-cover rounded-2xl" />
                           ) : (
                              <span className="font-display text-sm sm:text-base font-medium leading-tight text-white/20 group-hover:text-[#4d7cff]/60 px-4 text-center">{partner.placeholder}</span>
                           )}
                        </div>
                     );

                     // Grid cell container
                     const hasImage = !!partner.image;
                     const containerClass = `w-full max-w-[360px] h-24 md:h-32 flex items-center justify-center rounded-2xl transition-all duration-300 group ${hasImage
                        ? "border-transparent bg-transparent"
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
