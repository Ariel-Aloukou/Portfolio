import Link from "next/link";
import { ArrowDownRight, Mail, GraduationCap, MapPin, Languages } from "lucide-react";
import { HeroScene } from "@/app/components/three/HeroScene";

export function PortfolioHero() {
  return (
    <section id="accueil" className="relative overflow-hidden border-b border-foreground/10 bg-background">
      {/* Scène 3D — torus et particules, en arrière-plan décoratif */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-60" aria-hidden>
        <HeroScene />
      </div>

      {/* Halos radiaux */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,rgba(34,197,94,0.14),transparent_35%),radial-gradient(circle_at_15%_80%,rgba(59,130,246,0.1),transparent_30%)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-16 px-6 py-24 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
        <div>
          <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300">
            <span className="h-2 w-2 rounded-full bg-green-400" /> Disponible pour de nouvelles opportunités
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-foreground sm:text-7xl lg:text-[clamp(4.5rem,8vw,8rem)]">
            Je construis des systèmes numériques <span className="text-green-400">fiables.</span>
          </h1>
          <p id="positionnement" className="mt-8 max-w-2xl text-lg leading-8 text-foreground/60 md:text-xl">
            Étudiant en réseaux et télécommunications, orienté infrastructures,
            cybersécurité et développement logiciel.
          </p>

          {/* Repères factuels */}
          <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/45">
            <li className="inline-flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-green-400/70" strokeWidth={1.8} aria-hidden />
              IIT — L3 réseaux &amp; télécoms, Grand-Bassam
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-green-400/70" strokeWidth={1.8} aria-hidden />
              Abidjan, Côte d&apos;Ivoire
            </li>
            <li className="inline-flex items-center gap-2">
              <Languages className="h-4 w-4 text-green-400/70" strokeWidth={1.8} aria-hidden />
              FR courant · EN moyen
            </li>
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#projets" className="inline-flex items-center gap-2 rounded-full bg-green-400 px-6 py-3 font-semibold text-black transition hover:bg-green-300">
              Voir mes projets <ArrowDownRight className="h-4 w-4" />
            </Link>
            <a href="mailto:ariel.aloukou@iit.ci" className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 font-semibold text-foreground transition hover:border-green-400/60 hover:text-green-300">
              Me contacter <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Carte terminal — profil en quelques lignes de code */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="aspect-square rounded-[2rem] border border-green-400/20 bg-foreground/[0.04] p-5 shadow-2xl shadow-green-950/30">
            <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-foreground/10 bg-black/30 p-6 font-mono text-sm text-foreground/70">
              <div className="flex items-center gap-2 text-xs text-foreground/35">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span className="ml-auto">~/ariel-aloukou</span>
              </div>
              <div className="space-y-3 text-base leading-7">
                <p><span className="text-green-400">const</span> profile = {'{'}</p>
                <p className="pl-5">nom: <span className="text-blue-300">&quot;Ariel Aloukou&quot;</span>,</p>
                <p className="pl-5">focus: <span className="text-blue-300">&quot;infrastructure&quot;</span>,</p>
                <p className="pl-5">security: <span className="text-blue-300">true</span>,</p>
                <p className="pl-5">certifie: <span className="text-blue-300">&quot;Cisco · Cybersecurity&quot;</span>,</p>
                <p className="pl-5">build: [<span className="text-blue-300">&quot;web&quot;</span>, <span className="text-blue-300">&quot;data&quot;</span>, <span className="text-blue-300">&quot;networks&quot;</span>]</p>
                <p>{'}'}</p>
              </div>
              <p className="text-green-400">$ ready to build<span className="animate-pulse">_</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none" aria-hidden>
        <span className="text-[9px] font-medium tracking-[0.25em] uppercase text-foreground/25">
          Défiler
        </span>
        <div className="h-10 w-px bg-gradient-to-b from-green-500/40 to-transparent" />
      </div>
    </section>
  );
}
