"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { gsap } from "gsap";
import { Mail, Menu, X } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { ThemeToggle } from "@/app/components/layout/ThemeToggle";
import { GitHubIcon, LinkedInIcon } from "@/app/components/ui/BrandIcons";

const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Parcours", href: "#parcours" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "FAQ", href: "#faq" },
];

function MagneticButton({
  children,
  className,
  wrapperClassName,
  onClick,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  onClick?: () => void;
  href?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      gsap.to(el, {
        x: (e.clientX - cx) * 0.35,
        y: (e.clientY - cy) * 0.35,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const classes = cn(
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm cursor-pointer",
    "bg-green-600 hover:bg-green-500 text-white",
    "shadow-[0_0_24px_rgba(22,163,74,0.3)] hover:shadow-[0_0_36px_rgba(22,163,74,0.5)]",
    "border border-green-500/25 transition-colors duration-300",
    className
  );

  // Un `mailto:` ne doit pas porter `target="_blank"` : certains navigateurs
  // bloquent alors l'ouverture du client de messagerie. Seuls les liens
  // externes (http/https) s'ouvrent dans un nouvel onglet.
  const isExternalLink = href?.startsWith("http") ?? false;

  return (
    <div ref={ref} className={cn("inline-block", wrapperClassName)}>
      {href ? (
        <a
          href={href}
          {...(isExternalLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={classes}
        >
          {children}
        </a>
      ) : (
        <button onClick={onClick} className={classes}>
          {children}
        </button>
      )}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const links = NAV_LINKS;

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 50);
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-foreground/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20"
        aria-label="Navigation principale"
      >
        {/* Personal portfolio mark */}
        <Link
          href="#accueil"
          className="group flex items-center gap-3 shrink-0"
          aria-label="Ariel Aloukou — Accueil"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-sm font-black tracking-[-0.08em] text-background transition-transform group-hover:rotate-[-6deg]">
            AA
          </span>
          <span className="hidden text-sm font-semibold tracking-[-0.02em] text-foreground sm:block">
            Ariel Aloukou
            <span className="ml-2 font-mono text-[10px] font-normal uppercase tracking-[0.16em] text-foreground/40">Portfolio</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                  "text-foreground/50 hover:text-foreground hover:bg-foreground/[0.05]"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Ariel-Aloukou"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub d'Ariel Aloukou"
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-foreground/50 hover:text-foreground hover:bg-foreground/[0.06] transition-all duration-200"
          >
            <GitHubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ariel-aloukou-53a949322"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn d'Ariel Aloukou"
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-foreground/50 hover:text-foreground hover:bg-foreground/[0.06] transition-all duration-200"
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <ThemeToggle />
          <MagneticButton href="mailto:ariel.aloukou@iit.ci">
            <Mail className="w-4 h-4" strokeWidth={1.8} />
            Me contacter
          </MagneticButton>
        </div>

        {/* Actions mobile */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-xl text-foreground/60 hover:text-foreground hover:bg-foreground/[0.06] transition-all duration-200"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{
          height: mobileOpen ? "auto" : 0,
          opacity: mobileOpen ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-foreground/[0.06]"
      >
        <div className="px-6 py-6 flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-medium text-foreground/60 hover:text-foreground hover:bg-foreground/[0.05] transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 pt-4 border-t border-foreground/[0.06] flex flex-col gap-3">
            <MagneticButton
              href="mailto:ariel.aloukou@iit.ci"
              wrapperClassName="w-full"
              className="w-full justify-center"
            >
              <Mail className="w-4 h-4" strokeWidth={1.8} />
              Me contacter
            </MagneticButton>
            <a
              href="https://github.com/Ariel-Aloukou"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-xl border border-foreground/15 text-sm font-semibold text-foreground/60 hover:text-foreground hover:border-foreground/30 transition-all duration-300"
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ariel-aloukou-53a949322"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-xl border border-foreground/15 text-sm font-semibold text-foreground/60 hover:text-foreground hover:border-foreground/30 transition-all duration-300"
            >
              <LinkedInIcon className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
