import { useLanguage } from "@/context/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { label: t("nav.home"), href: "/#home" },
    { label: t("nav.about"), href: "/#about" },
    { label: t("nav.services"), href: "/#services" },
    { label: t("nav.blog"), href: "/blog" },
    { label: t("nav.contact"), href: "/#contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-display text-3xl leading-tight">{t("brand.title")}</div>
            <p className="mt-4 text-primary-foreground/70 text-sm max-w-sm">
              {t("footer.tagline")}
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.22em] text-primary-foreground/60 mb-4">
              {t("footer.nav")}
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-accent transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.22em] text-primary-foreground/60 mb-4">
              {t("footer.contact")}
            </h4>
            <p className="text-sm">lppasociacija@inbox.lv</p>
            <p className="text-sm mt-1">+371 26772532</p>
          </div>
        </div>

        <div className="rule my-10 opacity-30" />

        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs text-primary-foreground/60">
          <span>© {new Date().getFullYear()} {t("brand.title")}. {t("footer.rights")}</span>
          <span>{t("footer.made")}</span>
        </div>
      </div>
    </footer>
  );
};
