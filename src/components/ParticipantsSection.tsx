import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Search, CheckCircle, Award, Send } from "lucide-react";
import { toast } from "sonner";

const steps = [
  { icon: FileText, num: "01", title: "Заявка", desc: "Заполните форму" },
  { icon: Search, num: "02", title: "Экспертиза", desc: "Оценка инициативы" },
  { icon: CheckCircle, num: "03", title: "Согласование", desc: "Детали и план" },
  { icon: Award, num: "04", title: "Запуск", desc: "Поддержка фонда" },
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
    <section id="participants" ref={ref} className="bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="h-[2px] w-12 bg-accent mb-6" />
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary-foreground/40 mb-3">Участникам</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Подайте свой проект
          </h2>
          <p className="font-body text-base text-primary-foreground/50 max-w-xl">
            Мы поддерживаем инициативы в сфере культуры, образования, социального
            предпринимательства и международного сотрудничества.
          </p>
        </motion.div>

        {/* Steps — horizontal timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-0 mb-16"
        >
          {steps.map((s, i) => (
            <div key={s.num} className="flex-1 flex items-start gap-3 sm:flex-col sm:items-center sm:text-center relative">
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-5 left-1/2 w-full h-[1px] bg-primary-foreground/10" />
              )}
              <div className="relative z-10 w-10 h-10 rounded-full border border-accent/40 flex items-center justify-center bg-primary flex-shrink-0">
                <span className="font-body text-xs font-bold text-accent">{s.num}</span>
              </div>
              <div className="sm:mt-3">
                <p className="font-body text-sm font-semibold text-primary-foreground">{s.title}</p>
                <p className="font-body text-xs text-primary-foreground/40">{s.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="max-w-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8"
        >
          <h3 className="font-display text-lg font-semibold text-primary-foreground mb-6">
            Форма заявки
          </h3>
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="font-body text-xs font-medium text-primary-foreground/60 mb-1.5 block">Имя *</label>
                <Input
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  placeholder="Ваше имя"
                  className="font-body bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="font-body text-xs font-medium text-primary-foreground/60 mb-1.5 block">Email *</label>
                <Input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  placeholder="email@example.com"
                  className="font-body bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30"
                  maxLength={255}
                />
              </div>
            </div>
            <div>
              <label className="font-body text-xs font-medium text-primary-foreground/60 mb-1.5 block">Направление *</label>
              <Select value={formState.direction} onValueChange={(v) => setFormState((s) => ({ ...s, direction: v }))}>
                <SelectTrigger className="font-body bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground">
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
              <label className="font-body text-xs font-medium text-primary-foreground/60 mb-1.5 block">Описание проекта *</label>
              <Textarea
                value={formState.description}
                onChange={(e) => setFormState((s) => ({ ...s, description: e.target.value }))}
                placeholder="Расскажите о вашей инициативе..."
                rows={4}
                className="font-body bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30"
                maxLength={1000}
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full font-body">
              <Send className="w-4 h-4 mr-2" />
              Отправить заявку
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ParticipantsSection;
