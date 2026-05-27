import heroImage from "@/assets/hero-room.jpg";
import abstractImage from "@/assets/abstract.jpg";
import { useLanguage } from "@/context/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative pt-28 sm:pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Abstract decorative shape */}
      <div
        className="absolute -top-20 -right-40 w-[55%] h-[120%] opacity-70 pointer-events-none hidden lg:block"
        style={{
          backgroundImage: `url(${abstractImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(ellipse at left, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at left, black 40%, transparent 75%)",
        }}
        aria-hidden
      />

      <div className="container relative">
        <div className="max-w-3xl">
          <h1 className="fade-up fade-up-delay-1 font-display text-[2.5rem] leading-[1.05] sm:text-5xl md:text-7xl lg:text-[5.5rem] md:leading-[1.02] text-primary text-balance">
            {t("brand.title")}
          </h1>
          <p className="fade-up fade-up-delay-2 mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl text-pretty leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="fade-up fade-up-delay-3 mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-6 sm:px-7 py-3.5 text-xs sm:text-sm uppercase tracking-[0.18em] hover:bg-accent transition-colors duration-500"
            >
              {t("hero.cta1")}
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-2 py-3 sm:py-3.5 text-xs sm:text-sm uppercase tracking-[0.18em] text-foreground/80 border-b border-foreground/30 hover:border-foreground transition-colors self-start sm:self-auto"
            >
              {t("hero.cta2")}
            </a>
          </div>
        </div>

        <div className="fade-up fade-up-delay-3 mt-12 sm:mt-16 md:mt-24 relative">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] overflow-hidden shadow-lift">
            <img
              src={heroImage}
              alt={t("hero.imageAlt")}
              className="h-full w-full object-cover"
              width={1800}
              height={1200}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />

            {/* Mobile-only mini quote inside image */}
            <div className="md:hidden absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-primary/85 to-transparent">
              <p className="font-display text-lg italic leading-snug text-primary-foreground">
                {t("hero.quoteMobile")}
              </p>
            </div>
          </div>

          {/* Overlayed quote card — desktop */}
          <div className="hidden md:block absolute -bottom-10 left-8 max-w-sm bg-background/95 backdrop-blur p-8 shadow-soft border-l-2 border-accent">
            <p className="font-display text-xl italic leading-snug text-primary">
              {t("hero.quoteDesktop")}
            </p>
            <div className="rule my-4" />
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {t("hero.mission")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
