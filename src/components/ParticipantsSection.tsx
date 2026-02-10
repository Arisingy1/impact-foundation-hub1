import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, FileText, Search, Award, Send } from "lucide-react";
import { toast } from "sonner";

const steps = [
  { icon: FileText, title: "Подайте заявку", desc: "Заполните форму с описанием проекта" },
  { icon: Search, title: "Экспертиза", desc: "Наши эксперты оценят инициативу" },
  { icon: CheckCircle, title: "Согласование", desc: "Обсуждаем детали и план реализации" },
  { icon: Award, title: "Реализация", desc: "Запуск проекта при поддержке фонда" },
];

const ParticipantsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
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
    <section id="participants" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Участникам
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Подайте свой проект
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы поддерживаем инициативы в сфере культуры, образования, социального
            предпринимательства и международного сотрудничества.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-3">
                <s.icon className="w-5 h-5 text-accent" />
              </div>
              <h4 className="font-display text-sm font-semibold text-foreground mb-1">{s.title}</h4>
              <p className="font-body text-xs text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-8 shadow-sm"
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">
            Форма заявки
          </h3>
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-1 block">
                  Имя <span className="text-destructive">*</span>
                </label>
                <Input
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  placeholder="Ваше имя"
                  className="font-body"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-1 block">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  placeholder="email@example.com"
                  className="font-body"
                  maxLength={255}
                />
              </div>
            </div>
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1 block">
                Направление <span className="text-destructive">*</span>
              </label>
              <Select
                value={formState.direction}
                onValueChange={(v) => setFormState((s) => ({ ...s, direction: v }))}
              >
                <SelectTrigger className="font-body">
                  <SelectValue placeholder="Выберите направление" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="culture">Культура и искусство</SelectItem>
                  <SelectItem value="social">Социальные инициативы</SelectItem>
                  <SelectItem value="business">Бизнес и социальное воздействие</SelectItem>
                  <SelectItem value="international">Международные проекты</SelectItem>
                  <SelectItem value="events">Фестивали и события</SelectItem>
                  <SelectItem value="education">Образование</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1 block">
                Описание проекта <span className="text-destructive">*</span>
              </label>
              <Textarea
                value={formState.description}
                onChange={(e) => setFormState((s) => ({ ...s, description: e.target.value }))}
                placeholder="Расскажите о вашей инициативе..."
                rows={5}
                className="font-body"
                maxLength={1000}
              />
            </div>
            <Button type="submit" className="w-full font-body" size="lg">
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
