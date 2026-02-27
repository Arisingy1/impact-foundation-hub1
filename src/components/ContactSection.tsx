"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { toast } from "sonner";

const contacts = [
  { label: "Адрес", value: "г. Москва, ул. Примерная, д. 1" },
  { label: "Email", value: "info@fond.org" },
  { label: "Телефон", value: "+7 (495) 000-00-00" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

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
    <section
      id="contacts"
      ref={ref}
      className="relative min-h-screen flex items-center"
    >
      {/* subtle top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9b6dff]/10 to-transparent" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* ── Left column ── */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs uppercase tracking-[0.3em] text-[#9b6dff] mb-4"
            >
              Контакты
            </motion.p>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-5"
            >
              Свяжитесь
              <br />
              с&nbsp;<span className="italic text-[#9b6dff]">нами</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-base text-white/70 leading-relaxed mb-12 max-w-md"
            >
              Мы всегда открыты для вопросов, предложений и сотрудничества.
              Напишите нам!
            </motion.p>

            {/* contact lines */}
            <div className="space-y-5 mb-12">
              {contacts.map((c, i) => (
                <motion.div
                  key={c.label}
                  variants={fadeUp}
                  custom={3 + i}
                  className="flex items-baseline gap-3"
                >
                  <span className="text-[#9b6dff] text-sm font-medium w-24 shrink-0">
                    {c.label}
                  </span>
                  <span className="text-white/80 text-sm">{c.value}</span>
                </motion.div>
              ))}
            </div>

            {/* legal block */}
            <motion.div
              variants={fadeUp}
              custom={6}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6"
            >
              <p className="text-[11px] uppercase tracking-wider text-white/50 mb-2">
                Юридическая информация
              </p>
              <p className="text-xs text-white/60 leading-relaxed">
                Фонд поддержки социально-культурных инициатив и бизнес проектов
                · ИНН:&nbsp;0000000000 · ОГРН:&nbsp;0000000000000
                <br />
                г. Москва, ул. Примерная, д. 1
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right column: form ── */}
          <motion.form
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            onSubmit={handleSubmit}
            className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8 md:p-10 self-start backdrop-blur-sm"
          >
            <h3 className="font-serif text-2xl font-semibold text-white mb-2">
              Обратная связь
            </h3>
            <p className="text-sm text-white/40 mb-8">
              Мы ответим в течение 24 часов
            </p>

            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="text-xs font-medium text-white/50 mb-2 block">
                  Ваше имя
                </label>
                <Input
                  value={form.name}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, name: e.target.value }))
                  }
                  placeholder="Как к вам обращаться?"
                  className="rounded-xl h-12 bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/25 focus-visible:ring-[#9b6dff]/40"
                  maxLength={100}
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-medium text-white/50 mb-2 block">
                  Email
                </label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, email: e.target.value }))
                  }
                  placeholder="email@example.com"
                  className="rounded-xl h-12 bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/25 focus-visible:ring-[#9b6dff]/40"
                  maxLength={255}
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-medium text-white/50 mb-2 block">
                  Сообщение
                </label>
                <Textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, message: e.target.value }))
                  }
                  placeholder="Напишите ваш вопрос или предложение..."
                  rows={5}
                  className="rounded-xl bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/25 focus-visible:ring-[#9b6dff]/40"
                  maxLength={1000}
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full group rounded-xl h-12 text-base"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-0.5" />
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
