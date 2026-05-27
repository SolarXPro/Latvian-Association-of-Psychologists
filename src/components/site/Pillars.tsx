import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";

const PILLAR_NUMS = ["01", "02", "03", "04"];

export const Pillars = () => {
  const { t } = useLanguage();

  const pillars = PILLAR_NUMS.map((n, i) => ({
    n,
    title: t(`pillars.${i}.title`),
    body: t(`pillars.${i}.body`),
  }));

  return (
    <section className="py-20 sm:py-24 md:py-40 relative">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-5" from="left">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-muted-foreground mb-4 sm:mb-5">
              {t("pillars.tag")}
            </p>
            <h2 className="font-display text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl text-primary md:leading-[1.05] text-balance">
              {t("pillars.headingMain")}{" "}
              <em className="italic text-accent font-light">{t("pillars.headingEm")}</em>.
            </h2>
            <p className="mt-6 sm:mt-8 text-muted-foreground text-base sm:text-lg max-w-md text-pretty leading-relaxed">
              {t("pillars.body")}
            </p>
          </Reveal>

          <div className="md:col-span-7 grid sm:grid-cols-2 gap-x-8 sm:gap-x-10 gap-y-10 sm:gap-y-12">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
              <article className="group">
                <div className="flex items-baseline gap-4 mb-3 sm:mb-4">
                  <span className="font-display text-2xl text-accent">{p.n}</span>
                  <span className="h-px flex-1 bg-border group-hover:bg-accent transition-colors duration-500" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-primary mb-2 sm:mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">{p.body}</p>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
