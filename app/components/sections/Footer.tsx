"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, GraduationCap, BadgeCheck } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { GitHubIcon, LinkedInIcon } from "@/app/components/ui/BrandIcons";

const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Parcours", href: "#parcours" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "FAQ", href: "#faq" },
];

const CONTACT_LINKS: {
  label: string;
  value: string;
  href: string;
  external: boolean;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}[] = [
  {
    label: "Email",
    value: "ariel.aloukou@iit.ci",
    href: "mailto:ariel.aloukou@iit.ci",
    external: false,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ariel-aloukou",
    href: "https://www.linkedin.com/in/ariel-aloukou-53a949322",
    external: true,
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: "github.com/Ariel-Aloukou",
    href: "https://github.com/Ariel-Aloukou",
    external: true,
    icon: GitHubIcon,
  },
];

const FORMATION_LINKS = [
  { label: "IIT — Licence Computer Science, réseaux & télécoms", sub: "Grand-Bassam, VITIB · Licence 3 en cours" },
  { label: "Cisco Networking Academy", sub: "Introduction to Cybersecurity · 10/2025" },
  { label: "Lycée Moderne de Bonoua", sub: "Baccalauréat C · 2023–2024" },
];

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-background border-t border-foreground/[0.06] overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Marque + présentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-1 flex flex-col gap-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-sm font-black tracking-[-0.08em] text-background">
                  AA
                </span>
                <span className="text-sm font-semibold tracking-[-0.02em] text-foreground">
                  Ariel Aloukou
                  <span className="ml-2 font-mono text-[10px] font-normal uppercase tracking-[0.16em] text-foreground/40">Portfolio</span>
                </span>
              </div>
              <p className="text-sm text-foreground/40 leading-relaxed">
                Étudiant en réseaux et télécommunications, orienté
                infrastructures, cybersécurité et développement logiciel.
                Ce site présente mon parcours, mes compétences et mes projets.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[12px] text-foreground/35">
              <MapPin className="w-3.5 h-3.5 text-green-500/60" strokeWidth={1.8} />
              Abidjan, Côte d&apos;Ivoire
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-[13px] font-semibold tracking-[0.15em] uppercase text-foreground/50 mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm text-foreground/35 hover:text-foreground/70",
                      "transition-colors duration-200"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-[13px] font-semibold tracking-[0.15em] uppercase text-foreground/50 mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-2.5">
              {CONTACT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={cn(
                      "flex items-center gap-2 text-sm text-foreground/35 hover:text-foreground/70",
                      "transition-colors duration-200"
                    )}
                  >
                    <link.icon className="w-3.5 h-3.5 shrink-0 text-green-500/50" strokeWidth={1.8} />
                    <span className="truncate">{link.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Formation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-[13px] font-semibold tracking-[0.15em] uppercase text-foreground/50 mb-4">
              Formation
            </h3>
            <ul className="flex flex-col gap-3">
              {FORMATION_LINKS.map((item) => (
                <li key={item.label}>
                  <div className="flex items-start gap-2">
                    {item.label.includes("Cisco") ? (
                      <BadgeCheck className="w-3.5 h-3.5 mt-0.5 shrink-0 text-green-500/60" strokeWidth={1.8} />
                    ) : (
                      <GraduationCap className="w-3.5 h-3.5 mt-0.5 shrink-0 text-green-500/50" strokeWidth={1.8} />
                    )}
                    <div className="min-w-0">
                      <p className="text-[12.5px] text-foreground/45 leading-tight">{item.label}</p>
                      <p className="text-[11px] text-foreground/25 leading-tight mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Barre inférieure */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={cn(
            "pt-8 mt-8 border-t border-foreground/[0.06]",
            "flex flex-col md:flex-row items-center justify-between gap-4"
          )}
        >
          <p className="text-xs text-foreground/25">
            &copy; {new Date().getFullYear()} Ariel Aloukou — Portfolio.
            Conçu et développé avec Next.js, Tailwind CSS, Three.js et GSAP.
          </p>

          <a
            href="https://github.com/Ariel-Aloukou"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-foreground/25 hover:text-foreground/50 transition-colors duration-200"
          >
            <GitHubIcon className="w-3.5 h-3.5" />
            github.com/Ariel-Aloukou
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
