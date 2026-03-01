"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";
import { toast } from "sonner";

const steps = [
  { num: "01", title: "Заявка", desc: "Заполните форму с описанием проекта" },
  { num: "02", title: "Экспертиза", desc: "Наши эксперты оценят инициативу" },
  { num: "03", title: "Согласование", desc: "Обсуждаем детали и план" },
  { num: "04", title: "Запуск", desc: "Начинаем при поддержке фонда" },
];

const ParticipantsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({ name: "", email: "", direction: "", description: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.description || !formState.direction) {
      toast.error("Пожалуйста, заполните все обязательные поля");
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
          name: formState.name,
          email: formState.email,
          projectDirection: formState.direction,
          projectDescription: formState.description
        }),
      });

      if (!response.ok) throw new Error("Ошибка отправки");

      toast.success("Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.");
      setFormState({ name: "", email: "", direction: "", description: "" });
    } catch (error) {
      toast.error("Произошла ошибка при отправке заявки. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="participants" ref={ref} className="relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#4d7cff]/[0.03] -translate-y-1/3 translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xl uppercase tracking-[0.3em] text-[#4d7cff] mb-3">Участникам</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            Подайте свой <span className="italic text-glow">проект</span>
          </h2>
          <p className="font-body text-base text-white/70 max-w-xl mx-auto">
            Мы поддерживаем инициативы в сфере культуры, образования, социального
            предпринимательства и международного сотрудничества.
          </p>
        </motion.div>

        {/* Steps — modern timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="relative border-t border-white/[0.06] pt-6 group"
            >
              <span className="font-display text-4xl md:text-5xl font-bold text-white/10 block mb-2">{s.num}</span>
              <p className="font-body text-lg md:text-xl font-semibold text-white mb-2">{s.title}</p>
              <p className="font-body text-sm md:text-base text-white/60">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8 md:p-10"
        >
          <div className="text-center mb-8">
            <h3 className="font-display text-xl font-semibold text-white mb-2">
              Форма заявки
            </h3>
            <p className="font-body text-sm text-white/65">Заполните поля и мы свяжемся с вами</p>
          </div>
          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-body text-xs font-medium text-white/70 mb-2 block">Имя *</label>
                <Input
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  placeholder="Ваше имя"
                  className="font-body bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/25 rounded-xl h-12"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="font-body text-xs font-medium text-white/70 mb-2 block">Email *</label>
                <Input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  placeholder="email@example.com"
                  className="font-body bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/25 rounded-xl h-12"
                  maxLength={255}
                />
              </div>
            </div>
            <div>
              <label className="font-body text-xs font-medium text-white/70 mb-2 block">Направление *</label>
              <Select value={formState.direction} onValueChange={(v) => setFormState((s) => ({ ...s, direction: v }))}>
                <SelectTrigger className="font-body bg-white/[0.05] border-white/[0.1] text-white rounded-xl h-12">
                  <SelectValue placeholder="Выберите направление" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="culture">Культура и искусство</SelectItem>
                  <SelectItem value="social">Социальные инициативы</SelectItem>
                  <SelectItem value="business">Бизнес и соц. воздействие</SelectItem>
                  <SelectItem value="international">Международные проекты</SelectItem>
                  <SelectItem value="events">Фестивали и события</SelectItem>
                  <SelectItem value="education">Образование</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="font-body text-xs font-medium text-white/70 mb-2 block">Описание проекта *</label>
              <Textarea
                value={formState.description}
                onChange={(e) => setFormState((s) => ({ ...s, description: e.target.value }))}
                placeholder="Расскажите о вашей инициативе..."
                rows={4}
                className="font-body bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/25 rounded-xl"
                maxLength={1000}
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full font-body rounded-xl h-13 text-base" disabled={isSubmitting}>
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? "Отправка..." : "Отправить заявку"}
            </Button>
            <p className="font-body text-[11px] text-white/50 text-center">
              Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ParticipantsSection;
