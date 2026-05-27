import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Lang } from "@/i18n/translations";

const langOptions: { code: Lang; label: string }[] = [
  { code: "lv", label: "LAT" },
  { code: "en", label: "ENG" },
  { code: "ru", label: "RUS" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const links = [
    { href: "/#home", label: t("nav.home") },
    { href: "/#about", label: t("nav.about") },
    { href: "/#services", label: t("nav.services") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/90 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
          <span className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full border border-primary/80 font-display text-base sm:text-lg text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            LP
          </span>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-base text-primary">{t("brand.navLine1")}</span>
            <span className="text-[10px] tracking-[0.2em] text-muted-foreground">
              {t("brand.navLine2")}
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-500"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div className="hidden sm:flex items-center rounded-sm border border-border/60 overflow-hidden text-xs">
            {langOptions.map((o, i) => (
              <button
                key={o.code}
                onClick={() => setLang(o.code)}
                className={`px-2.5 py-1.5 transition-colors duration-200 ${
                  i < langOptions.length - 1 ? "border-r border-border/60" : ""
                } ${
                  lang === o.code
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden grid place-items-center h-10 w-10 -mr-2 text-primary"
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container pb-8 pt-2">
          <nav className="flex flex-col divide-y divide-border/60">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-4 font-display text-2xl text-primary flex items-center justify-between group"
              >
                <span>{l.label}</span>
                <span className="text-accent transition-transform group-hover:translate-x-1">→</span>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 mt-6 text-xs">
            {langOptions.map((o) => (
              <button
                key={o.code}
                onClick={() => setLang(o.code)}
                className={`px-3 py-1.5 border transition-colors ${
                  lang === o.code
                    ? "border-primary bg-primary text-primary-foreground font-medium"
                    : "border-border text-muted-foreground hover:border-foreground/60"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
