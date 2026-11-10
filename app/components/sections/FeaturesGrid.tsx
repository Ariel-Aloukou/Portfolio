"use client";

import { useRef, useState, useId } from "react";
import { motion, useInView } from "framer-motion";
import {
  Network,
  Router,
  ShieldCheck,
  Database,
  Code2,
  BarChart3,
  Wrench,
  GraduationCap,
  BadgeCheck,
  PenTool,
  LineChart,
  HeartHandshake,
  Mail,
} from "lucide-react";
import { GlowCard } from "@/app/components/ui/GlowCard";
import { cn } from "@/app/lib/utils";

// ─── EASING PARTAGÉ ──────────────────────────────────────────────────────────
const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

// ─── ICÔNE HOVER ANIMÉE ──────────────────────────────────────────────────────
function AnimIcon({
  icon: Icon,
  color,
  bgColor,
  size = "default",
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties; strokeWidth?: number }>;
  color: string;
  bgColor: string;
  size?: "default" | "lg";
}) {
  const [hovered, setHovered] = useState(false);
  const s = size === "lg" ? "w-7 h-7" : "w-5 h-5";
  const wrap = size === "lg" ? "w-14 h-14 rounded-2xl" : "w-10 h-10 rounded-xl";

  return (
    <motion.div
      className={cn("flex items-center justify-center shrink-0 border", wrap)}
      style={{ backgroundColor: bgColor, borderColor: `${color}35` }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <motion.div
        animate={hovered ? { rotate: [0, -12, 12, 0], scale: 1.15 } : { rotate: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      >
        <Icon className={s} style={{ color }} strokeWidth={1.8} />
      </motion.div>
    </motion.div>
  );
}

// ─── LIGNE DE COMPÉTENCE ─────────────────────────────────────────────────────
function SkillRow({
  icon: Icon,
  label,
  color,
  index,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties; strokeWidth?: number }>;
  label: string;
  color: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: EASE_OUT_EXPO }}
      className={cn(
        "flex items-center gap-2.5 px-3 py-2.5 rounded-xl",
        "border border-foreground/[0.07] bg-foreground/[0.04]"
      )}
    >
      <Icon className="w-4 h-4 shrink-0" style={{ color }} strokeWidth={1.9} />
      <span className="text-[12px] text-foreground/65 font-medium leading-tight">{label}</span>
    </motion.div>
  );
}

// ─── PASTILLE D'OUTIL ────────────────────────────────────────────────────────
function ToolChip({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="px-2.5 py-1 rounded-full text-[11px] font-medium border"
      style={{ color, borderColor: `${color}40`, backgroundColor: `${color}12` }}
    >
      {label}
    </span>
  );
}

// ─── NOTE DE BAS DE CARTE ────────────────────────────────────────────────────
function CardNote({
  icon: Icon,
  children,
  color,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties; strokeWidth?: number }>;
  children: React.ReactNode;
  color: string;
}) {
  return (
    <div className="mt-auto flex items-center gap-2 text-[11px] text-foreground/35">
      <Icon className="w-3 h-3 shrink-0" style={{ color }} strokeWidth={1.8} />
      <span className="leading-relaxed">{children}</span>
    </div>
  );
}

// ─── BLOC 1 : RÉSEAUX & CYBERSÉCURITÉ (col-span-7) ───────────────────────────
function BlockNetworks() {
  return (
    <div className="flex flex-col h-full gap-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <AnimIcon icon={Network} color="#4ade80" bgColor="rgba(74,222,128,0.1)" size="lg" />
          <div>
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-green-500/70 mb-1">
              Domaine principal
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
              Réseaux &
              <br />
              <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                cybersécurité
              </span>
            </h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <SkillRow icon={Router} label="Adressage IP & routage" color="#4ade80" index={0} />
        <SkillRow icon={Network} label="Conception de topologies réseau" color="#22c55e" index={1} />
        <SkillRow icon={Wrench} label="Configuration de routeurs & switches" color="#16a34a" index={2} />
        <SkillRow icon={ShieldCheck} label="Bases de la sécurité informatique" color="#86efac" index={3} />
      </div>

      <div className="flex flex-wrap gap-1.5">
        <ToolChip label="Cisco Packet Tracer" color="#4ade80" />
        <ToolChip label="GNS3" color="#22c55e" />
        <ToolChip label="VirtualBox" color="#16a34a" />
      </div>

      <CardNote icon={BadgeCheck} color="#4ade80">
        Certificat Cisco « Introduction to Cybersecurity » — oct. 2025
      </CardNote>
    </div>
  );
}

// ─── BLOC 2 : BASES DE DONNÉES (col-span-5) ─────────────────────────────────
function BlockDatabases() {
  return (
    <div className="flex flex-col h-full gap-5">
      <div className="flex items-center gap-3">
        <AnimIcon icon={Database} color="#38bdf8" bgColor="rgba(56,189,248,0.1)" size="lg" />
        <div>
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-sky-400/70 mb-0.5">
            Données
          </p>
          <h3 className="text-xl font-bold text-foreground leading-tight">
            Bases de
            <br />
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              données
            </span>
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <SkillRow icon={Database} label="PostgreSQL" color="#38bdf8" index={0} />
        <SkillRow icon={Database} label="MySQL" color="#22d3ee" index={1} />
        <SkillRow icon={Database} label="SQL Server" color="#7dd3fc" index={2} />
        <SkillRow icon={PenTool} label="phpMyAdmin · MySQL WorkBench" color="#38bdf8" index={3} />
      </div>

      <CardNote icon={GraduationCap} color="#38bdf8">
        Projet de base de données avancées — IIT
      </CardNote>
    </div>
  );
}

// ─── BLOC 3 : DÉVELOPPEMENT (col-span-4) ────────────────────────────────────
function BlockDevelopment() {
  return (
    <div className="flex flex-col h-full gap-5">
      <div className="flex items-center gap-3">
        <AnimIcon icon={Code2} color="#818cf8" bgColor="rgba(129,140,248,0.1)" size="lg" />
        <div>
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-indigo-400/70 mb-0.5">
            Programmation
          </p>
          <h3 className="text-xl font-bold text-foreground leading-tight">
            Développement
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              & outils
            </span>
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <SkillRow icon={Code2} label="Python · Langage C" color="#818cf8" index={0} />
        <SkillRow icon={Code2} label="HTML · CSS · JavaScript" color="#a5b4fc" index={1} />
        <SkillRow icon={Code2} label="React · Angular" color="#c4b5fd" index={2} />
        <SkillRow icon={PenTool} label="Modélisation MERISE & UML" color="#818cf8" index={3} />
        <SkillRow icon={Code2} label="GitHub · Visual Studio" color="#a5b4fc" index={4} />
      </div>

      <CardNote icon={GraduationCap} color="#818cf8">
        Cours de développement web — IIT
      </CardNote>
    </div>
  );
}

// ─── BLOC 4 : ANALYSE DE DONNÉES (col-span-4) ───────────────────────────────
function BlockData() {
  return (
    <div className="flex flex-col h-full gap-5">
      <div className="flex items-center gap-3">
        <AnimIcon icon={BarChart3} color="#34d399" bgColor="rgba(52,211,153,0.1)" size="lg" />
        <div>
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-emerald-500/70 mb-0.5">
            Analyse
          </p>
          <h3 className="text-xl font-bold text-foreground leading-tight">
            Analyse de
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              données
            </span>
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <SkillRow icon={BarChart3} label="Excel" color="#34d399" index={0} />
        <SkillRow icon={LineChart} label="Tableau" color="#6ee7b7" index={1} />
        <SkillRow icon={LineChart} label="Interprétation & visualisation" color="#34d399" index={2} />
      </div>

      <CardNote icon={LineChart} color="#34d399">
        SQL et Python appliqués aux données
      </CardNote>
    </div>
  );
}

// ─── BLOC 5 : MAINTENANCE & SUPPORT (col-span-4) ─────────────────────────────
function BlockMaintenance() {
  return (
    <div className="flex flex-col h-full gap-5">
      <div className="flex items-center gap-3">
        <AnimIcon icon={Wrench} color="#fb923c" bgColor="rgba(251,146,60,0.1)" size="lg" />
        <div>
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-orange-500/70 mb-0.5">
            Terrain
          </p>
          <h3 className="text-xl font-bold text-foreground leading-tight">
            Maintenance &
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              support
            </span>
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <SkillRow icon={Wrench} label="Diagnostic de pannes" color="#fb923c" index={0} />
        <SkillRow icon={Wrench} label="Installation de logiciels & systèmes" color="#fdba74" index={1} />
        <SkillRow icon={HeartHandshake} label="Assistance technique" color="#fb923c" index={2} />
      </div>

      <CardNote icon={HeartHandshake} color="#fb923c">
        Rigueur, patience et sens du service
      </CardNote>
    </div>
  );
}

// ─── BLOC 6 : LANGUES & ATOUTS (bande pleine largeur) ────────────────────────
function BlockBanner() {
  const atouts = [
    "Bonne analyse & raisonnement technique",
    "Apprentissage rapide",
    "Esprit d'équipe",
    "Rigueur & organisation",
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 w-full">
      <div className="flex flex-col gap-3">
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-green-500/70">
          Langues & atouts
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
          Français courant · anglais moyen.{" "}
          <span className="bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent">
            Le reste se construit.
          </span>
        </h3>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {atouts.map((atout) => (
            <span
              key={atout}
              className="px-2.5 py-1 rounded-full text-[11px] font-medium border border-green-500/20 bg-green-500/[0.08] text-green-600 dark:text-green-400"
            >
              {atout}
            </span>
          ))}
        </div>
      </div>

      {/* Séparateur vertical */}
      <div className="hidden lg:block w-px self-stretch bg-foreground/[0.07]" />

      {/* CTA */}
      <motion.a
        href="mailto:ariel.aloukou@iit.ci"
        whileHover={{ scale: 1.04, y: -1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={cn(
          "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl shrink-0",
          "bg-green-600 hover:bg-green-500 text-white font-semibold text-sm",
          "shadow-[0_0_24px_rgba(22,163,74,0.35)] hover:shadow-[0_0_40px_rgba(22,163,74,0.55)]",
          "border border-green-500/25 transition-all duration-300"
        )}
      >
        <Mail className="w-4 h-4" />
        Me contacter
      </motion.a>
    </div>
  );
}

// ─── SECTION PRINCIPALE ───────────────────────────────────────────────────────
export function FeaturesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const id = useId();
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.09, delayChildren: 0.1 },
    },
  };

  const STAGGER_DELAYS = [0, 0.09, 0.18, 0.27, 0.36, 0.45];

  return (
    <section
      ref={sectionRef}
      id="competences"
      aria-labelledby={`${id}-title`}
      className="relative py-28 md:py-40 bg-background overflow-hidden"
    >
      {/* ── FOND DÉCORATIF ──────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <div
          className="absolute top-[5%] right-[-10%] w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(22,163,74,0.08) 0%, transparent 65%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute bottom-[10%] left-[-15%] w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 65%)",
            filter: "blur(100px)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* ── EN-TÊTE ─────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: EASE_OUT_EXPO }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-green-500/40" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-green-500/80">
              Compétences
            </span>
            <div className="h-px w-8 bg-green-500/40" />
          </div>

          <h2
            id={`${id}-title`}
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight mb-5"
          >
            <span className="text-foreground">Ce que je sais </span>
            <span className="bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent">
              faire aujourd&apos;hui
            </span>
          </h2>

          <p className="text-base md:text-lg text-foreground/45 max-w-[540px] mx-auto leading-relaxed">
            Des bases solides en réseaux et en données, une pratique régulière
            du développement — présentées telles quelles, sans niveau gonflé.
          </p>
        </motion.div>

        {/* ── BENTO GRID ──────────────────────────────────────────────────── */}
        {/*
          Desktop (≥ lg) : grille 12 colonnes
            Ligne 1 : Réseaux & cybersécurité (7 col) + Bases de données (5 col)
            Ligne 2 : Développement (4 col) + Analyse (4 col) + Maintenance (4 col)
            Ligne 3 : Bannière langues & atouts (12 col)
          Mobile : colonne unique pleine largeur
        */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={cn(
            "grid grid-cols-1 lg:grid-cols-12 gap-4 auto-rows-auto"
          )}
        >
          {/* ── BLOC 1 : Réseaux & cybersécurité (7 col) ─────────────────── */}
          <div className="lg:col-span-7">
            <GlowCard
              className="h-full min-h-[360px] p-7"
              glowColor="#22c55e"
              delay={STAGGER_DELAYS[0]}
            >
              <BlockNetworks />
            </GlowCard>
          </div>

          {/* ── BLOC 2 : Bases de données (5 col) ────────────────────────── */}
          <div className="lg:col-span-5">
            <GlowCard
              className="h-full min-h-[360px] p-7"
              glowColor="#38bdf8"
              delay={STAGGER_DELAYS[1]}
            >
              <BlockDatabases />
            </GlowCard>
          </div>

          {/* ── BLOC 3 : Développement (4 col) ───────────────────────────── */}
          <div className="lg:col-span-4">
            <GlowCard
              className="h-full min-h-[300px] p-7"
              glowColor="#818cf8"
              delay={STAGGER_DELAYS[2]}
            >
              <BlockDevelopment />
            </GlowCard>
          </div>

          {/* ── BLOC 4 : Analyse de données (4 col) ───────────────────────── */}
          <div className="lg:col-span-4">
            <GlowCard
              className="h-full min-h-[300px] p-7"
              glowColor="#34d399"
              delay={STAGGER_DELAYS[3]}
            >
              <BlockData />
            </GlowCard>
          </div>

          {/* ── BLOC 5 : Maintenance & support (4 col) ────────────────────── */}
          <div className="lg:col-span-4">
            <GlowCard
              className="h-full min-h-[300px] p-7"
              glowColor="#fb923c"
              delay={STAGGER_DELAYS[4]}
            >
              <BlockMaintenance />
            </GlowCard>
          </div>

          {/* ── BLOC 6 : Langues & atouts (12 col) ───────────────────────── */}
          <div className="lg:col-span-12">
            <GlowCard
              className="w-full p-6 md:p-8"
              glowColor="#16a34a"
              delay={STAGGER_DELAYS[5]}
            >
              <BlockBanner />
            </GlowCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
