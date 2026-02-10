import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
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
    <section id="contacts" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-4">Контакты</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Свяжитесь с нами
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground">Адрес</p>
                  <p className="font-body text-sm text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground">Email</p>
                  <p className="font-body text-sm text-muted-foreground">info@fond.org</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground">Телефон</p>
                  <p className="font-body text-sm text-muted-foreground">+7 (495) 000-00-00</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="font-display text-sm font-semibold text-foreground mb-2">Юридическая информация</h4>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                Благотворительный фонд «Фонд»<br />
                ИНН: 0000000000 / ОГРН: 0000000000000<br />
                Юридический адрес: г. Москва, ул. Примерная, д. 1
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-2xl p-8 shadow-sm"
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
              <Button type="submit" className="w-full font-body" size="lg">
                Отправить
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
