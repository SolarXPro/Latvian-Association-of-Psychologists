import portrait from "@/assets/portrait.jpg";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 sm:py-24 md:py-40">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10 sm:gap-12 md:gap-16 items-center">
          <Reveal className="md:col-span-4 relative flex justify-center md:justify-end" from="scale">
            <div className="relative aspect-[3/4] overflow-hidden shadow-soft w-full max-w-[260px] sm:max-w-[300px] md:max-w-[300px]">
              <img
                src={portrait}
                alt={t("about.imageAlt")}
                loading="lazy"
                width={900}
                height={1125}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 sm:-right-6 hidden sm:block bg-accent text-accent-foreground px-6 py-4 sm:px-8 sm:py-5 w-[240px] sm:w-[270px] text-center shadow-md">
              <p className="font-display text-xl sm:text-2xl italic leading-tight tracking-wide">
                Viktorija Petļak
              </p>
              <div className="mt-2 mx-auto h-px w-10 bg-accent-foreground/40" />
            </div>
          </Reveal>

          <Reveal className="md:col-span-8" from="bottom" delay={200}>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-muted-foreground mb-4 sm:mb-5">
              {t("about.tag")}
            </p>
            <p className="mt-0 text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {t("about.role")}
            </p>

            <div className="mt-6 sm:mt-8 space-y-5 text-foreground/85 text-pretty leading-relaxed text-base">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p className="font-display text-lg sm:text-xl italic text-primary border-l-2 border-accent pl-4 sm:pl-5">
                {t("about.quote")}
              </p>
            </div>


          </Reveal>
        </div>
      </div>
    </section>
  );
};
