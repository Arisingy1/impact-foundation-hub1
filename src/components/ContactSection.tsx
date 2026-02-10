"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const contacts = [
  { icon: MapPin, label: "Адрес", value: "г. Москва, ул. Примерная, д. 1" },
  { icon: Mail, label: "Email", value: "info@fond.org" },
  { icon: Phone, label: "Телефон", value: "+7 (495) 000-00-00" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Заполните все поля");
      return;
    }
    toast.success("Сообщение отправлено!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacts" ref={ref} className="bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Контакты</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-4">
              Свяжитесь
              <br />с <span className="italic text-accent">нами</span>
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-10 max-w-md">
              Мы всегда открыты для вопросов, предложений и сотрудничества. Напишите нам!
            </p>

            <div className="space-y-4 mb-10">
              {contacts.map((c) => (
                <div key={c.label} className="flex items-center gap-4 group p-3 -ml-3 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <c.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-body text-[11px] uppercase tracking-wider text-muted-foreground/60">{c.label}</p>
                    <p className="font-body text-sm font-medium text-foreground">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 border border-border rounded-2xl p-5">
              <p className="font-body text-[11px] uppercase tracking-wider text-muted-foreground/60 mb-2">Юридическая информация</p>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                Фонд поддержки социально-культурных инициатив и бизнес проектов · ИНН: 0000000000 · ОГРН: 0000000000000
                <br />г. Москва, ул. Примерная, д. 1
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-3xl p-8 md:p-10 self-start"
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">Обратная связь</h3>
            <p className="font-body text-sm text-muted-foreground mb-8">Мы ответим в течение 24 часов</p>
            <div className="space-y-5">
              <div>
                <label className="font-body text-xs font-medium text-muted-foreground mb-2 block">Ваше имя</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  placeholder="Как к вам обращаться?"
                  className="font-body rounded-xl h-12"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="font-body text-xs font-medium text-muted-foreground mb-2 block">Email</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                  placeholder="email@example.com"
                  className="font-body rounded-xl h-12"
                  maxLength={255}
                />
              </div>
              <div>
                <label className="font-body text-xs font-medium text-muted-foreground mb-2 block">Сообщение</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  placeholder="Напишите ваш вопрос или предложение..."
                  rows={4}
                  className="font-body rounded-xl"
                  maxLength={1000}
                />
              </div>
              <Button type="submit" className="w-full font-body group rounded-xl h-12 text-base" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Отправить сообщение
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
