"use client";

import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, CreditCard, Copy, Check, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface DonationModalProps {
  open: boolean;
  onClose: () => void;
}

const bankDetails = [
  { label: "Наименование", value: 'ФОНД ПОДДЕРЖКИ СОЦИАЛЬНО-КУЛЬТУРНЫХ ИНИЦИАТИВ И БИЗНЕС ПРОЕКТОВ' },
  { label: "ИНН", value: "9710098737" },
  { label: "КПП", value: "771001001" },
  { label: "ОГРН", value: "1237700576986" },
  { label: "Расчётный счёт", value: "40703810338000013498" },
  { label: "Банк", value: 'ПАО "СБЕРБАНК"' },
  { label: "БИК", value: "044525225" },
  { label: "Корр. счёт", value: "30101810400000000225" },
];

const DonationModal = ({ open, onClose }: DonationModalProps) => {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [showOffer, setShowOffer] = useState(false);

  const copyToClipboard = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    toast.success("Скопировано!");
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <AnimatePresence>
      {open && (
        <Fragment>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="bg-card rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto border border-border">
              {/* Header */}
              <div className="sticky top-0 bg-card/95 backdrop-blur-xl rounded-t-3xl border-b border-border px-6 py-5 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-bold text-foreground">Поддержать фонд</h2>
                    <p className="text-xs text-muted-foreground font-body">Благотворительное пожертвование</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-xl hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-6 space-y-6">
                {/* Info text */}
                <div className="bg-accent/5 border border-accent/15 rounded-2xl p-4">
                  <p className="font-body text-sm text-foreground/80 leading-relaxed">
                    Вы можете поддержать деятельность фонда, сделав благотворительное пожертвование по реквизитам ниже.
                    Все средства направляются на реализацию социально-культурных проектов.
                  </p>
                </div>

                {/* Bank details */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CreditCard className="w-4 h-4 text-muted-foreground" />
                    <h3 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider">Реквизиты</h3>
                  </div>
                  <div className="space-y-2">
                    {bankDetails.map((item, idx) => (
                      <div
                        key={item.label}
                        className="group flex items-start justify-between gap-3 bg-muted/50 hover:bg-muted rounded-xl px-4 py-3 transition-colors"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="font-body text-[11px] text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</p>
                          <p className="font-body text-sm text-foreground font-medium break-all leading-snug">{item.value}</p>
                        </div>
                        <button
                          onClick={() => copyToClipboard(item.value, idx)}
                          className="mt-1 shrink-0 w-8 h-8 rounded-lg hover:bg-background flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                          title="Копировать"
                        >
                          {copiedIdx === idx ? (
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Назначение платежа */}
                <div className="bg-muted/50 rounded-2xl p-4">
                  <p className="font-body text-[11px] text-muted-foreground uppercase tracking-wider mb-1">Назначение платежа</p>
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    Благотворительное пожертвование на уставные цели фонда. НДС не облагается.
                  </p>
                </div>

                {/* Public offer agreement */}
                <div className="border-t border-border pt-4">
                  <button
                    onClick={() => setShowOffer(!showOffer)}
                    className="flex items-center gap-2 text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors w-full text-left"
                  >
                    {showOffer ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    Договор публичной оферты
                  </button>
                  <AnimatePresence>
                    {showOffer && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 bg-muted/30 rounded-xl p-4 text-xs font-body text-muted-foreground leading-relaxed space-y-2 max-h-[200px] overflow-y-auto">
                          <p className="font-semibold text-foreground/80">ДОГОВОР ПУБЛИЧНОЙ ОФЕРТЫ О БЛАГОТВОРИТЕЛЬНОМ ПОЖЕРТВОВАНИИ</p>
                          <p>
                            Фонд поддержки социально-культурных инициатив и бизнес проектов (далее — «Фонд»),
                            в лице Директора, действующего на основании Устава, предлагает физическим и юридическим лицам
                            (далее — «Благотворитель») заключить Договор о благотворительном пожертвовании на нижеследующих условиях.
                          </p>
                          <p>
                            <strong>1. Предмет Договора.</strong> Благотворитель безвозмездно передаёт денежные средства (пожертвование)
                            на уставные цели Фонда: поддержку социально-культурных инициатив и бизнес проектов.
                          </p>
                          <p>
                            <strong>2. Порядок заключения.</strong> Акцептом оферты является перечисление денежных средств на расчётный счёт Фонда
                            с указанием «Благотворительное пожертвование». Договор считается заключённым с момента поступления средств.
                          </p>
                          <p>
                            <strong>3. Использование пожертвования.</strong> Фонд обязуется использовать полученные средства в соответствии
                            с уставными целями и действующим законодательством Российской Федерации. Фонд вправе самостоятельно определять
                            направления расходования средств в рамках уставной деятельности.
                          </p>
                          <p>
                            <strong>4. Возврат пожертвования.</strong> Благотворительное пожертвование возврату не подлежит,
                            за исключением случаев, предусмотренных законодательством РФ.
                          </p>
                          <p>
                            <strong>5. Прочие условия.</strong> Настоящий Договор действует бессрочно. Фонд вправе изменить условия оферты
                            в одностороннем порядке, разместив новую редакцию на сайте.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6">
                <Button
                  variant="default"
                  className="w-full rounded-xl font-body"
                  onClick={onClose}
                >
                  Закрыть
                </Button>
              </div>
            </div>
          </motion.div>
        </Fragment>
      )}
    </AnimatePresence>
  );
};

export default DonationModal;
