import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { toast } from "sonner";

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
    <section id="contacts" ref={ref} className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="h-[2px] w-12 bg-accent mb-6" />
            <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Контакты</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-10">
              Свяжитесь
              <br />с нами
            </h2>

            <div className="space-y-5 mb-10">
              {[
                { icon: MapPin, label: "Адрес", value: "г. Москва, ул. Примерная, д. 1" },
                { icon: Mail, label: "Email", value: "info@fond.org" },
                { icon: Phone, label: "Телефон", value: "+7 (495) 000-00-00" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                    <p className="font-body text-sm text-foreground">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-xl p-5">
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2">Юридическая информация</p>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                Благотворительный фонд «Фонд» · ИНН: 0000000000 · ОГРН: 0000000000000
                <br />г. Москва, ул. Примерная, д. 1
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-2xl p-8 self-start"
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">Обратная связь</h3>
            <div className="space-y-4">
              <Input
                value={form.name}
                onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                placeholder="Ваше имя"
                className="font-body"
                maxLength={100}
              />
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                placeholder="Email"
                className="font-body"
                maxLength={255}
              />
              <Textarea
                value={form.message}
                onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                placeholder="Ваше сообщение..."
                rows={4}
                className="font-body"
                maxLength={1000}
              />
              <Button type="submit" className="w-full font-body group" size="lg">
                Отправить
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
