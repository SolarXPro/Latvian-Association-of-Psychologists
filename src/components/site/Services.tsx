import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";

const SERVICE_COUNT = 6;

export const Services = () => {
  const { t } = useLanguage();

  const services = Array.from({ length: SERVICE_COUNT }, (_, i) => ({
    title: t(`services.${i}.title`),
    desc: t(`services.${i}.desc`),
    tags: t(`services.${i}.tags`).split(","),
  }));

  return (
    <section id="services" className="py-20 sm:py-24 md:py-40 bg-secondary/40 relative grain">
      <div className="container relative">
        <Reveal from="bottom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-12 sm:mb-16">
          <div>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-muted-foreground mb-4 sm:mb-5">
              {t("services.tag")}
            </p>
            <h2 className="font-display text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl text-primary md:leading-[1.05] max-w-2xl text-balance">
              {t("services.headingMain")}{" "}
              <em className="italic text-accent font-light">{t("services.headingEm")}</em>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            {t("services.subheading")}
          </p>
        </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 70} className="bg-background">
            <article
              className="p-6 sm:p-8 md:p-10 group hover:bg-card transition-colors duration-500 relative h-full"
            >
              <div className="flex items-start justify-between mb-5 sm:mb-6">
                <span className="font-display text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-muted-foreground transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-primary mb-3 sm:mb-4 leading-snug">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-[15px] sm:text-sm mb-5 sm:mb-6 text-pretty leading-relaxed">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground border border-border px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
