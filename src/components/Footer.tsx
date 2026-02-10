const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-10 mb-12">
          <div>
            <h4 className="font-display text-2xl font-bold text-primary-foreground mb-3">ФОНД</h4>
            <p className="font-body text-sm text-primary-foreground/40 leading-relaxed max-w-xs">
              Объединяем людей и ресурсы для создания проектов, которые меняют жизнь.
            </p>
          </div>
          <div>
            <h5 className="font-body text-[10px] uppercase tracking-[0.2em] text-primary-foreground/30 mb-4">Навигация</h5>
            <ul className="space-y-2.5">
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
            <h5 className="font-body text-[10px] uppercase tracking-[0.2em] text-primary-foreground/30 mb-4">Контакты</h5>
            <ul className="space-y-2.5 font-body text-sm text-primary-foreground/40">
              <li>info@fond.org</li>
              <li>+7 (495) 000-00-00</li>
              <li>г. Москва</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/8 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="font-body text-xs text-primary-foreground/25">
            © {new Date().getFullYear()} Благотворительный фонд. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
