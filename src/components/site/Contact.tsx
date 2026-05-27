import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";

type SubmitStatus = "idle" | "submitting" | "sent";

export const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const { t } = useLanguage();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    setSubmitStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error(`Status ${response.status}`);

      form.reset();
      setSubmitStatus("sent");
      toast.success(t("contact.toast"));
    } catch (error) {
      console.error("Contact form submission failed", error);
      setSubmitStatus("idle");
      toast.error(t("contact.toastError"));
    }
  };

  return (
    <section id="contact" className="py-28 md:py-40">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          <Reveal className="md:col-span-5" from="left">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-5">
              {t("contact.tag")}
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.05] text-balance">
              {t("contact.headingMain")} <em className="italic text-accent font-light">{t("contact.headingEm")}</em>.
            </h2>
            <p className="mt-6 text-muted-foreground text-pretty">
              {t("contact.body")}
            </p>

            <dl className="mt-10 space-y-6">
              {[
                { k: t("contact.email"), v: "lppasociacija@inbox.lv" },
                { k: t("contact.phone"), v: "+371 26772532" },
              ].map((item) => (
                <div key={item.k} className="grid grid-cols-[120px_1fr] gap-4 items-baseline">
                  <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {item.k}
                  </dt>
                  <dd className="text-foreground">{item.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="md:col-span-7" from="bottom" delay={150}>
          <form
            onSubmit={onSubmit}
            className="bg-card p-8 md:p-12 border border-border shadow-soft h-full"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Field name="name" label={t("contact.fieldName")} required />
              <Field name="email" label={t("contact.fieldEmail")} type="email" required />
              <Field name="phone" label={t("contact.fieldPhone")} type="tel" className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
                  {t("contact.fieldService")}
                </label>
                <select
                  name="service"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-accent focus:outline-none transition-colors"
                >
                  <option>{t("contact.opt1")}</option>
                  <option>{t("contact.opt2")}</option>
                  <option>{t("contact.opt3")}</option>
                  <option>{t("contact.opt4")}</option>
                  <option>{t("contact.opt5")}</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
                  {t("contact.fieldMessage")}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder={t("contact.placeholder")}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitStatus !== "idle"}
              className="mt-10 inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 text-sm uppercase tracking-[0.18em] hover:bg-accent transition-colors duration-500 disabled:opacity-60"
            >
              {submitStatus === "submitting"
                ? t("contact.sending")
                : submitStatus === "sent"
                  ? t("contact.sent")
                  : t("contact.send")}
              <span>→</span>
            </button>
          </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  name,
  label,
  type = "text",
  required,
  className = "",
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  className?: string;
}) => (
  <div className={className}>
    <label className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
      {label} {required && <span className="text-accent">*</span>}
    </label>
    <input
      name={name}
      type={type}
      required={required}
      className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-accent focus:outline-none transition-colors"
    />
  </div>
);
