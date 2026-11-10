"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Code2 } from "lucide-react";
import { cn } from "@/app/lib/utils";

const PROJECTS = [
  {
    name: "GreenGas",
    label: "Vitrine — méthanisation",
    description:
      "Site vitrine de GreenGas, la chaîne d'approvisionnement numérique de la méthanisation : hero 3D animé, processus en quatre étapes piloté par le scroll, suivi du biodigesteur et tableau de bord citoyen interactif. Prototype construit avec l'équipe DEDSEC (IIT) pour le concours SIREXE 2026.",
    stack: "Next.js · TypeScript · Three.js",
    href: "https://github.com/Ariel-Aloukou/greenloop",
    live: "https://greengaz-jet-eta.vercel.app",
    accent: "#4ade80",
  },
  {
    name: "Academic Watch",
    label: "Veille automatisée",
    description:
      "Programme Python qui collecte chaque jour des programmes de Master et des bourses sur des sources officielles, les classe selon un profil et envoie un bulletin par email et Discord. Sur 110 opportunités collectées, 12 correspondaient au profil.",
    stack: "Python · GitHub Actions",
    href: "https://github.com/Ariel-Aloukou/academic-watch",
    accent: "#60a5fa",
  },
  {
    name: "Skillswap",
    label: "Application mobile",
    description:
      "Application mobile de mise en relation entre porteurs de projets et collaborateurs : découverte par swipe, matchs et messagerie temps réel. Le backend Supabase gère l'authentification, le stockage et les flux en temps réel.",
    stack: "Flutter · Supabase",
    href: "https://github.com/Ariel-Aloukou/Skillswap",
    accent: "#86efac",
  },
  {
    name: "Finexa",
    label: "Comptabilité PME",
    description:
      "Application web de comptabilité pour petites entreprises : recettes, dépenses, clients, fournisseurs, TVA et rapports financiers. Projet académique de Licence 2 (génie logiciel), fonctionne entièrement en local.",
    stack: "JavaScript · SQL.js",
    href: "https://github.com/Ariel-Aloukou/Finexa",
    accent: "#facc15",
  },
  {
    name: "Simulation Méthanisation 3D",
    label: "Simulation interactive",
    description:
      "Simulation pédagogique en 3D du processus de méthanisation : exploration interactive des étapes, de la réception des déchets organiques jusqu'à la production de biogaz. Réalisée en préparation d'un hackathon sur la valorisation des déchets.",
    stack: "Three.js · JavaScript",
    href: "https://github.com/Ariel-Aloukou/simulation-methanisation-3d",
    accent: "#22d3ee",
  },
  {
    name: "cofinance_ci",
    label: "API REST — microfinance",
    description:
      "Backend Django REST pour une plateforme de microcrédits, d'assurance mobile et de support client : authentification JWT, chat en temps réel via Django Channels et documentation Swagger.",
    stack: "Python · Django REST · Channels",
    href: "https://github.com/Ariel-Aloukou/cofinance_ci",
    accent: "#22c55e",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projets"
      aria-labelledby="projects-title"
      className="relative overflow-hidden bg-background py-24 md:py-32"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-[-12%] top-[20%] h-[420px] w-[420px] rounded-full bg-green-500/[0.06] blur-[110px]" />
        <div className="absolute right-[-10%] bottom-[5%] h-[360px] w-[360px] rounded-full bg-emerald-400/[0.05] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-2xl"
        >
          <div className="mb-5 flex items-center gap-2">
            <div className="h-px w-8 bg-green-500/50" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-green-400/80">
              Projets sélectionnés
            </span>
          </div>
          <h2 id="projects-title" className="text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-tight">
            Des idées transformées en
            <span className="block bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent">
              expériences utiles.
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/45 md:text-lg">
            Une sélection de réalisations qui reflète mon approche : comprendre le besoin, construire une base solide et soigner l’expérience.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "group relative flex min-h-[270px] flex-col overflow-hidden rounded-[1.35rem] border p-6",
                "border-foreground/[0.08] bg-foreground/[0.025] backdrop-blur-xl",
                "transition-all duration-500 hover:-translate-y-1 hover:border-foreground/[0.16]"
              )}
            >
              <div
                className="absolute inset-x-0 top-0 h-px opacity-70"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
                aria-hidden
              />
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color: project.accent }}>
                    {project.label}
                  </p>
                  <h3 className="text-2xl font-semibold text-foreground">{project.name}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-foreground/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <p className="text-sm leading-relaxed text-foreground/50">{project.description}</p>
              <div className="mt-auto flex items-center justify-between gap-3 pt-8">
                <span className="text-[11px] text-foreground/30">{project.stack}</span>
                <div className="flex items-center gap-2">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Voir le site ${project.name}`} className="rounded-lg border border-foreground/[0.08] p-2 text-foreground/45 transition-colors hover:border-green-500/30 hover:text-green-400">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Voir le dépôt GitHub de ${project.name}`} className="rounded-lg border border-foreground/[0.08] p-2 text-foreground/45 transition-colors hover:border-green-500/30 hover:text-green-400">
                    <Code2 className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
