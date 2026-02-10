"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "О фонде", href: "#about" },
  { label: "Направления", href: "#directions" },
  { label: "Проекты", href: "#projects" },
  { label: "Партнёрам", href: "#partners" },
  { label: "Участникам", href: "#participants" },
  { label: "Новости", href: "#news" },
  { label: "Контакты", href: "#contacts" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/90 backdrop-blur-xl shadow-lg shadow-black/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <a
          href="#"
          className={`font-display text-xl font-bold tracking-wide transition-colors ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          ФОНД
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={`text-sm font-body font-medium px-3 py-2 rounded-lg transition-all hover:text-accent ${
                isScrolled
                  ? "text-foreground/70 hover:bg-muted"
                  : "text-primary-foreground/70 hover:bg-white/5"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="ml-3">
            <Button
              variant={isScrolled ? "default" : "hero"}
              size="sm"
              onClick={() => scrollTo("#partners")}
              className="rounded-xl font-body"
            >
              <Heart className="w-3.5 h-3.5 mr-1.5" />
              Поддержать
            </Button>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 rounded-xl transition-colors ${
            isScrolled
              ? "text-foreground hover:bg-muted"
              : "text-primary-foreground hover:bg-white/10"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-card/98 backdrop-blur-xl border-b border-border"
          >
            <nav className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="text-left text-sm font-body font-medium text-foreground hover:text-accent py-2.5 px-3 rounded-lg hover:bg-muted transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 mt-2 border-t border-border">
                <Button variant="default" size="sm" onClick={() => scrollTo("#partners")} className="w-full rounded-xl font-body">
                  <Heart className="w-3.5 h-3.5 mr-1.5" />
                  Поддержать
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
