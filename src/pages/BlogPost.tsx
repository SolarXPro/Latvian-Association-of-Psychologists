import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { getPosts } from "@/data/posts";
import { useLanguage } from "@/context/LanguageContext";

const BlogPost = () => {
  const { lang, t } = useLanguage();
  const posts = getPosts(lang);
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const idx = posts.findIndex((p) => p.slug === slug);
  const next = idx >= 0 ? posts[(idx + 1) % posts.length] : null;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | LPPA`;
      document.documentElement.lang = lang;
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", post.excerpt);
    }
  }, [post, lang, t]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 grid place-items-center pt-32 pb-20">
          <div className="text-center container">
            <p className="text-muted-foreground mb-6">{t("blogPost.notFound")}</p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] border-b border-primary/40 pb-1"
            >
              {t("blogPost.allPosts")}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-32 md:pt-40 pb-20 md:pb-32">
        <article className="container max-w-3xl">
          <Link
            to="/blog"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors"
          >
            {t("blogPost.allPosts")}
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="text-accent">{post.cat}</span>
            <span className="h-px w-8 bg-border" />
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readMin} {t("blog.minutesRead")}</span>
          </div>

          <h1 className="mt-5 font-display text-[2.25rem] leading-[1.08] sm:text-5xl md:text-6xl text-primary text-balance">
            {post.title}
          </h1>
          <p className="mt-5 sm:mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
            {post.excerpt}
          </p>
        </article>

        <div className="container max-w-5xl mt-10 sm:mt-14">
          <div className="aspect-[16/10] overflow-hidden shadow-soft">
            <img
              src={post.image}
              alt={post.title}
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <article className="container max-w-3xl mt-12 sm:mt-16 prose-content">
          <div className="space-y-6 text-foreground/85 text-base sm:text-[17px] leading-[1.75] text-pretty">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="rule my-12 sm:my-16" />

          {next && (
            <Link
              to={`/blog/${next.slug}`}
              className="group block bg-secondary/40 p-6 sm:p-8 hover:bg-secondary/60 transition-colors"
            >
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
                {t("blogPost.nextArticle")}
              </p>
              <h3 className="font-display text-xl sm:text-2xl text-primary group-hover:text-accent transition-colors">
                {next.title} →
              </h3>
            </Link>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
