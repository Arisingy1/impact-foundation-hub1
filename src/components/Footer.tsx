"use client";

import { Heart } from "lucide-react";
import { TelegramIcon, VkIcon, MaxIcon } from "./illustrations";

const socialLinks = [
  { label: "Telegram", href: "https://t.me/FondMitkina", icon: <TelegramIcon className="w-5 h-5" /> },
  { label: "ВКонтакте", href: "https://vk.com/club236050978", icon: <VkIcon className="w-5 h-5" /> },
  { label: "Max", href: "https://max.ru/id9706011000_biz", icon: <MaxIcon className="w-5 h-5" /> },
];

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="section-dark relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4d7cff]/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-12 mb-14">
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mb-4 block hover:opacity-80 transition-opacity"
            >
              <img src="/assets/Logo.png" alt="Фонд" width={100} height={55} className="rounded-xl" />
            </button>
            <p className="font-body text-sm text-white/70 leading-relaxed max-w-xs mb-6">
              Объединяем людей и ресурсы для создания проектов, которые меняют жизнь к лучшему.
            </p>
            {/* Social */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 shrink-0 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-[#4d7cff] hover:border-[#4d7cff]/30 transition-all duration-300 p-2"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h5 className="font-body text-[11px] uppercase tracking-[0.25em] text-[#4d7cff]/70 mb-5 font-medium">Навигация</h5>
            <ul className="space-y-3">
              {[
                { label: "О фонде", href: "#about" },
                { label: "Направления", href: "#directions" },
                { label: "Проекты", href: "#projects" },
                { label: "Партнёрам", href: "#partners" },
                { label: "Контакты", href: "#contacts" },
              ].map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="font-body text-sm text-white/70 hover:text-[#4d7cff] transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-body text-[11px] uppercase tracking-[0.25em] text-[#4d7cff]/70 mb-5 font-medium">Контакты</h5>
            <ul className="space-y-3 font-body text-sm text-white/70">
              <li className="hover:text-white/70 transition-colors">Mfondom@yandex.ru</li>
              <li className="hover:text-white/70 transition-colors">+7 (917) 568-88-99</li>
              <li className="hover:text-white/70 transition-colors">г. Москва</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-white/55">
            © {new Date().getFullYear()} Фонд поддержки социально-культурных инициатив и бизнес проектов. Все права защищены.
          </p>
          <p className="font-body text-xs text-white/50 flex items-center gap-1">
            Сделано с <Heart className="w-3 h-3 text-[#4d7cff]/40" /> для людей
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
