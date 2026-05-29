import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Pillars } from "@/components/site/Pillars";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Blog } from "@/components/site/Blog";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const { lang, t } = useLanguage();

  useEffect(() => {
    document.title = t("meta.homeTitle");
    document.documentElement.lang = lang;
    const desc = t("meta.homeDescription");
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, [lang, t]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Services />
        <About />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
