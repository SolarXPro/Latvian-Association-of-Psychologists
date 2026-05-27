import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: "bottom" | "left" | "right" | "scale";
}

export const Reveal = ({
  children,
  className = "",
  delay = 0,
  from = "bottom",
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const hiddenMap: Record<NonNullable<RevealProps["from"]>, string> = {
    bottom: "opacity-0 translate-y-8",
    left:   "opacity-0 -translate-x-10",
    right:  "opacity-0 translate-x-10",
    scale:  "opacity-0 scale-[0.96]",
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: "800ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        ...(delay ? { transitionDelay: `${delay}ms` } : {}),
      }}
      className={cn(
        "transition-[opacity,transform] will-change-transform",
        visible
          ? "opacity-100 translate-y-0 translate-x-0 scale-100"
          : hiddenMap[from],
        className
      )}
    >
      {children}
    </div>
  );
};
