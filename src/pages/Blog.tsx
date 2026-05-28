import { useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { getPosts } from "@/data/posts";
import { useLanguage } from "@/context/LanguageContext";

const PAGE_SIZE = 6;

const Blog = () => {
  const [params, setParams] = useSearchParams();
  const { lang, t } = useLanguage();
  const posts = useMemo(() => getPosts(lang), [lang]);
  const category = params.get("cat") ?? "all";
  const page = Math.max(1, parseInt(params.get("page") ?? "1", 10) || 1);

  useEffect(() => {
    const desc = t("meta.blogDescription");
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, [lang, t]);

  const categories = useMemo(
    () => [
      { id: "all", label: t("blog.allCategory") },
      ...Array.from(new Map(posts.map((post) => [post.categoryId, post.cat])).entries()).map(
        ([id, label]) => ({ id, label }),
      ),
    ],
    [posts, t],
  );

  const filtered = useMemo(
    () => (category === "all" ? posts : posts.filter((post) => post.categoryId === category)),
    [category, posts],
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const visible = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const setPage = (p: number) => {
    const next = new URLSearchParams(params);
    next.set("page", String(p));
    setParams(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const setCat = (categoryId: string) => {
    const next = new URLSearchParams();
    if (categoryId !== "all") next.set("cat", categoryId);
    setParams(next);
  };

  const [hero, ...rest] = visible;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="container">
          {/* Header */}
          <header className="max-w-3xl">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-muted-foreground mb-4 sm:mb-5">
              {t("blog.pageTag")}
            </p>
            <h1 className="font-display text-[2.25rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-primary text-balance">
              {t("blog.pageHeadingMain")}{" "}
              <em className="italic text-accent font-light">{t("blog.pageHeadingEm")}</em>.
            </h1>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl text-pretty leading-relaxed">
              {t("blog.pageBody")}
            </p>
          </header>

          {/* Categories */}
          <div className="mt-10 sm:mt-12 -mx-5 sm:mx-0 px-5 sm:px-0 overflow-x-auto">
            <div className="flex items-center gap-2 sm:gap-3 min-w-max sm:flex-wrap">
              {categories.map((c) => {
                const active = c.id === category;
                return (
                  <button
                    key={c.id}
                    onClick={() => setCat(c.id)}
                    className={`px-4 py-2 text-xs uppercase tracking-[0.18em] border transition-colors ${
                      active
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-transparent text-foreground/70 border-border hover:border-primary hover:text-primary"
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rule my-10 sm:my-14" />

          {/* Featured (page 1 only, when no category filter or with results) */}
          {hero && safePage === 1 && (
            <Link
              to={`/blog/${hero.slug}`}
              className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24 group"
            >
              <div className="aspect-[4/3] md:aspect-[5/4] overflow-hidden shadow-soft">
                <img
                  src={hero.image}
                  alt={hero.title}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-muted-foreground mb-5">
                  <span className="text-accent">{hero.cat}</span>
                  <span className="h-px w-8 bg-border" />
                  <span>{hero.date}</span>
                  <span>·</span>
                  <span>{hero.readMin} {t("blog.minutesShort")}</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary leading-[1.1] text-balance group-hover:text-accent transition-colors duration-500">
                  {hero.title}
                </h2>
                <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed text-pretty">
                  {hero.excerpt}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-primary border-b border-primary/40 pb-1 self-start group-hover:border-accent group-hover:text-accent transition-colors">
                  {t("blog.readArticle")}
                </span>
              </div>
            </Link>
          )}

          {/* Grid */}
          {visible.length === 0 ? (
            <p className="text-muted-foreground text-center py-20">
              {t("blog.noPosts")}
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-x-10 md:gap-y-16">
              {(safePage === 1 ? rest : visible).map((p) => (
                <article key={p.slug} className="group">
                  <Link to={`/blog/${p.slug}`} className="block">
                    <div className="aspect-[4/3] overflow-hidden mb-5 sm:mb-6 shadow-soft">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        width={1200}
                        height={800}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
                      <span className="text-accent">{p.cat}</span>
                      <span className="h-px w-6 bg-border" />
                      <span>{p.readMin} {t("blog.minutesShort")}</span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl text-primary leading-snug group-hover:text-accent transition-colors duration-500">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground text-[15px] leading-relaxed text-pretty">
                      {p.excerpt}
                    </p>
                    <div className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {p.date}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              className="mt-16 sm:mt-20 flex items-center justify-between gap-4 border-t border-border pt-8"
              aria-label={t("blog.pagination")}
            >
              <button
                onClick={() => setPage(safePage - 1)}
                disabled={safePage === 1}
                className="text-xs sm:text-sm uppercase tracking-[0.18em] text-foreground/80 hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                {t("blog.prev")}
              </button>

              <div className="flex items-center gap-1 sm:gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    aria-current={n === safePage ? "page" : undefined}
                    className={`h-9 w-9 sm:h-10 sm:w-10 grid place-items-center text-sm transition-colors ${
                      n === safePage
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/70 hover:bg-secondary"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setPage(safePage + 1)}
                disabled={safePage === totalPages}
                className="text-xs sm:text-sm uppercase tracking-[0.18em] text-foreground/80 hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                {t("blog.next")}
              </button>
            </nav>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
