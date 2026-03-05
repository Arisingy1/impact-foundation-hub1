"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { TelegramIcon, VkIcon, MaxIcon } from "./illustrations";
import { toast } from "sonner";

const contactsInfo = [
  { label: "Адрес", value: "г. Москва", icon: <MapPin className="w-5 h-5" />, href: null },
  { label: "Email", value: "Mfondom@yandex.ru", icon: <Mail className="w-5 h-5" />, href: "mailto:Mfondom@yandex.ru" },
  { label: "Телефон", value: "+7 (917) 568-88-99", icon: <Phone className="w-5 h-5" />, href: "tel:+79175688899" },
];

const socialLinks = [
  { label: "Telegram", href: "https://t.me/FondMitkina", icon: <TelegramIcon className="w-5 h-5" /> },
  { label: "ВКонтакте", href: "https://vk.com/club236050978", icon: <VkIcon className="w-5 h-5" /> },
  { label: "Max", href: "https://max.ru/id9706011000_biz", icon: <MaxIcon className="w-5 h-5" /> },
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
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Заполните все поля");
      return;
    }
    if (!isAgreed) {
      toast.error("Необходимо согласие с политикой обработки персональных данных");
      return;
    }

    setIsSubmitting(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://mfondom.ru/mfond/notify";
      const apiKey = process.env.NEXT_PUBLIC_API_KEY || "your-secret-api-key";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message
        }),
      });

      if (!response.ok) throw new Error("Ошибка отправки");

      toast.success("Сообщение отправлено!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Произошла ошибка при отправке сообщения. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contacts"
      ref={ref}
      className="relative flex items-center"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#4d7cff]/10 to-transparent" />
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-20">
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
              className="text-xl uppercase tracking-[0.3em] text-[#4d7cff] mb-4"
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
              с&nbsp;<span className="italic text-[#4d7cff]">нами</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-base text-white/70 leading-relaxed mb-12 max-w-md"
            >
              Мы всегда открыты для вопросов, предложений и сотрудничества.
              Напишите нам или свяжитесь любым удобным способом!
            </motion.p>

            {/* contact lines */}
            <div className="space-y-6 mb-10">
              {contactsInfo.map((c, i) => (
                <motion.div
                  key={c.label}
                  variants={fadeUp}
                  custom={3 + i}
                  className="flex items-center gap-5"
                >
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#4d7cff]">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-white hover:text-[#4d7cff] transition-colors font-medium">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{c.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* social links */}
            <motion.div variants={fadeUp} custom={6} className="mb-12">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-4">Наши соцсети</p>
              <div className="flex flex-wrap gap-5">
                {socialLinks.map((social, i) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 shrink-0 rounded-2xl bg-[#4d7cff]/10 border border-[#4d7cff]/20 flex items-center justify-center text-white hover:bg-[#4d7cff] hover:border-[#4d7cff] transition-all duration-300 p-3"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* legal block */}
            <motion.div
              variants={fadeUp}
              custom={7}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6"
            >
              <p className="text-[11px] uppercase tracking-wider text-white/50 mb-3">
                Юридическая информация
              </p>
              <div className="text-xs text-white/60 leading-relaxed grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                <p><strong>Наименование:</strong> ФОНД ПОДДЕРЖКИ СОЦИАЛЬНО-КУЛЬТУРНЫХ ИНИЦИАТИВ И БИЗНЕС ПРОЕКТОВ</p>
                <p><strong>ОГРН:</strong> 1207700461781</p>
                <p><strong>ИНН:</strong> 9706011000</p>
                <p><strong>КПП:</strong> 770601001</p>
                <p><strong>Дата постановки:</strong> 2 декабря 2020 г.</p>
                <p><strong>Налоговый орган:</strong> ИФНС № 6 по г. Москве</p>
                <p><strong>Президент:</strong> Анастасия Сергеевна Митькина</p>
              </div>
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
                  className="rounded-xl h-12 bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/25 focus-visible:ring-[#4d7cff]/40"
                  maxLength={100}
                />
              </div>

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
                  className="rounded-xl h-12 bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/25 focus-visible:ring-[#4d7cff]/40"
                  maxLength={255}
                />
              </div>

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
                  className="rounded-xl bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/25 focus-visible:ring-[#4d7cff]/40"
                  maxLength={1000}
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="contact-policy"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                  className="w-4 h-4 rounded appearance-none border border-white/20 bg-white/5 checked:bg-[#4d7cff] checked:border-[#4d7cff] shrink-0 cursor-pointer relative after:content-[''] after:absolute after:top-[1px] after:left-[4px] after:w-[4px] after:h-[8px] after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:opacity-0 checked:after:opacity-100 transition-all"
                />
                <label htmlFor="contact-policy" className="text-xs text-white/50 cursor-pointer select-none">
                  Согласен с <a href="/documents/policy.pdf" className="text-[#4d7cff] hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">политикой обработки персональных данных</a>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full group rounded-xl h-12 text-base"
                size="lg"
                disabled={isSubmitting || !isAgreed}
              >
                <Send className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-0.5" />
                {isSubmitting ? "Отправка..." : "Отправить сообщение"}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
