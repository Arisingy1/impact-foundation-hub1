const Footer = () => {
  return (
    <footer className="bg-primary py-12 px-4">
      <div className="container-narrow">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-display text-lg font-bold text-primary-foreground mb-3">ФОНД</h4>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
              Объединяем людей и ресурсы для создания проектов, которые меняют жизнь.
            </p>
          </div>
          <div>
            <h5 className="font-body text-sm font-semibold text-primary-foreground mb-3">Навигация</h5>
            <ul className="space-y-2">
              {[
                { label: "О фонде", href: "#about" },
                { label: "Направления", href: "#directions" },
                { label: "Проекты", href: "#projects" },
                { label: "Партнёрам", href: "#partners" },
                { label: "Контакты", href: "#contacts" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="font-body text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-body text-sm font-semibold text-primary-foreground mb-3">Контакты</h5>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/50">
              <li>info@fond.org</li>
              <li>+7 (495) 000-00-00</li>
              <li>г. Москва, ул. Примерная, д. 1</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Благотворительный фонд. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
