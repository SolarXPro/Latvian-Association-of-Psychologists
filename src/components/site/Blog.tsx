import { Link } from "react-router-dom";
import { getPosts } from "@/data/posts";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const Blog = () => {
  const { lang, t } = useLanguage();
  const featured = getPosts(lang).slice(0, 3);

  return (
    <section
      id="blog"
      className="py-20 sm:py-24 md:py-40 bg-primary text-primary-foreground relative overflow-hidden"
    >
      <div className="container relative">
        <Reveal from="bottom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-12 sm:mb-16">
          <div>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-primary-foreground/60 mb-4 sm:mb-5">
              {t("blog.tag")}
            </p>
            <h2 className="font-display text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl md:leading-[1.05] max-w-2xl text-balance">
              {t("blog.headingMain")}{" "}
              <em className="italic text-accent font-light">{t("blog.headingEm")}</em>.
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.18em] border-b border-primary-foreground/40 pb-1 hover:border-accent hover:text-accent transition-colors self-start"
          >
            {t("blog.all")}
          </Link>
        </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-foreground/10">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80} className="bg-primary">
            <Link
              to={`/blog/${p.slug}`}
              className="group hover:bg-primary-foreground/[0.04] transition-colors duration-500 flex flex-col h-full"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6 sm:p-8 md:p-10 flex flex-col flex-1">
                <div className="flex items-center justify-between text-[11px] sm:text-xs uppercase tracking-[0.18em] text-primary-foreground/60 mb-5 sm:mb-6">
                  <span className="text-accent">{p.cat}</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl md:text-[1.6rem] leading-snug mb-3 sm:mb-4 group-hover:text-accent transition-colors duration-500">
                  {p.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed text-pretty mb-6 flex-1">
                  {p.excerpt}
                </p>
                <span className="text-sm inline-flex items-center gap-2 transition-transform duration-500 group-hover:translate-x-1">
                  {t("blog.read")} <span>→</span>
                </span>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
