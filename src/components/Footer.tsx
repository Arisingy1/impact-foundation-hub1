"use client";

import { Heart } from "lucide-react";

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-12 mb-14">
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-display text-2xl font-bold text-primary-foreground mb-4 block hover:text-accent transition-colors"
            >
              ФОНД
            </button>
            <p className="font-body text-sm text-primary-foreground/40 leading-relaxed max-w-xs mb-6">
              Объединяем людей и ресурсы для создания проектов, которые меняют жизнь к лучшему.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/40 hover:text-accent hover:border-accent/30 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-body text-[11px] uppercase tracking-[0.25em] text-accent/60 mb-5 font-medium">Навигация</h5>
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
                    className="font-body text-sm text-primary-foreground/40 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-body text-[11px] uppercase tracking-[0.25em] text-accent/60 mb-5 font-medium">Контакты</h5>
            <ul className="space-y-3 font-body text-sm text-primary-foreground/40">
              <li className="hover:text-primary-foreground/60 transition-colors">info@fond.org</li>
              <li className="hover:text-primary-foreground/60 transition-colors">+7 (495) 000-00-00</li>
              <li className="hover:text-primary-foreground/60 transition-colors">г. Москва</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/[0.06] pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-primary-foreground/25">
            © {new Date().getFullYear()} Фонд поддержки социально-культурных инициатив и бизнес проектов. Все права защищены.
          </p>
          <p className="font-body text-xs text-primary-foreground/20 flex items-center gap-1">
            Сделано с <Heart className="w-3 h-3 text-accent/40" /> для людей
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
