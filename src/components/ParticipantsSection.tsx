"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Search, CheckCircle, Award, Send, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const steps = [
  { icon: FileText, num: "01", title: "Заявка", desc: "Заполните форму с описанием проекта" },
  { icon: Search, num: "02", title: "Экспертиза", desc: "Наши эксперты оценят инициативу" },
  { icon: CheckCircle, num: "03", title: "Согласование", desc: "Обсуждаем детали и план" },
  { icon: Award, num: "04", title: "Запуск", desc: "Начинаем при поддержке фонда" },
];

const ParticipantsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({ name: "", email: "", direction: "", description: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.description || !formState.direction) {
      toast.error("Пожалуйста, заполните все обязательные поля");
      return;
    }
    toast.success("Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    setFormState({ name: "", email: "", direction: "", description: "" });
  };

  return (
    <section id="participants" ref={ref} className="relative bg-primary-soft overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/[0.02] -translate-y-1/3 translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-accent mb-3">Участникам</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Подайте свой <span className="italic text-accent">проект</span>
          </h2>
          <p className="font-body text-base text-primary-foreground/80 max-w-xl mx-auto">
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
              className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 text-center group hover:border-accent/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/25 transition-colors">
                <s.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="font-display text-2xl font-bold text-accent/50 block mb-1">{s.num}</span>
              <p className="font-body text-sm font-semibold text-primary-foreground mb-1">{s.title}</p>
              <p className="font-body text-xs text-primary-foreground/65">{s.desc}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-foreground/35 z-10" />
              )}
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
            <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
              Форма заявки
            </h3>
            <p className="font-body text-sm text-primary-foreground/65">Заполните поля и мы свяжемся с вами</p>
          </div>
          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-body text-xs font-medium text-primary-foreground/80 mb-2 block">Имя *</label>
                <Input
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  placeholder="Ваше имя"
                  className="font-body bg-white/[0.05] border-white/[0.1] text-primary-foreground placeholder:text-primary-foreground/25 rounded-xl h-12"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="font-body text-xs font-medium text-primary-foreground/80 mb-2 block">Email *</label>
                <Input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  placeholder="email@example.com"
                  className="font-body bg-white/[0.05] border-white/[0.1] text-primary-foreground placeholder:text-primary-foreground/25 rounded-xl h-12"
                  maxLength={255}
                />
              </div>
            </div>
            <div>
              <label className="font-body text-xs font-medium text-primary-foreground/80 mb-2 block">Направление *</label>
              <Select value={formState.direction} onValueChange={(v) => setFormState((s) => ({ ...s, direction: v }))}>
                <SelectTrigger className="font-body bg-white/[0.05] border-white/[0.1] text-primary-foreground rounded-xl h-12">
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
              <label className="font-body text-xs font-medium text-primary-foreground/80 mb-2 block">Описание проекта *</label>
              <Textarea
                value={formState.description}
                onChange={(e) => setFormState((s) => ({ ...s, description: e.target.value }))}
                placeholder="Расскажите о вашей инициативе..."
                rows={4}
                className="font-body bg-white/[0.05] border-white/[0.1] text-primary-foreground placeholder:text-primary-foreground/25 rounded-xl"
                maxLength={1000}
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full font-body rounded-xl h-13 text-base">
              <Send className="w-4 h-4 mr-2" />
              Отправить заявку
            </Button>
            <p className="font-body text-[11px] text-primary-foreground/45 text-center">
              Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ParticipantsSection;
