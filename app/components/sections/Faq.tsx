"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Flame } from "lucide-react";
import { cn } from "@/app/lib/utils";

const FAQ_ITEMS = [
  {
    question: "Quel est ton profil exact ?",
    answer:
      "Je m'appelle Ariel Jean Levi ALOUKOU. Je suis actuellement en Licence 3, filière réseaux et télécommunications, à l'Institut Ivoirien de Technologie (IIT), campus de Grand-Bassam en Côte d'Ivoire. Je m'oriente vers la cybersécurité et les infrastructures, et je développe en parallèle des compétences en programmation — Python, SQL, développement web.",
  },
  {
    question: "Quelles compétences pratiques as-tu ?",
    answer:
      "En réseaux : adressage IP, routage, conception de topologies et configuration de routeurs et switches, avec Cisco Packet Tracer, GNS3 et VirtualBox. En données : PostgreSQL, MySQL et SQL Server. En développement : Python, langage C, HTML/CSS/JavaScript, React et Angular, modélisation MERISE et UML, et l'usage régulier de GitHub. J'ai aussi des bases en maintenance et en diagnostic de pannes.",
  },
  {
    question: "As-tu des certifications ?",
    answer:
      "Une, vérifiable : le certificat « Introduction to Cybersecurity » de la Cisco Networking Academy, obtenu en octobre 2025. Il couvre les fondamentaux de la sécurité informatique. Je ne revendique rien d'autre — les autres compétences listées sur ce site viennent de ma formation et de mes projets.",
  },
  {
    question: "Quelles langues parles-tu ?",
    answer:
      "Le français couramment et l'anglais à niveau moyen — suffisant pour suivre la documentation technique et progresser au quotidien.",
  },
  {
    question: "Où es-tu situé et comment te contacter ?",
    answer:
      "Je suis basé à Abidjan, en Côte d'Ivoire, et j'étudie à l'IIT (Grand-Bassam, zone VITIB). Le moyen le plus simple de me joindre est l'email : ariel.aloukou@iit.ci. Je suis aussi présent sur LinkedIn, et mon GitHub (github.com/Ariel-Aloukou) complète ce portfolio avec le code source de mes projets.",
  },
];

export function Faq() {
  const id = useId();

  return (
    <section
      id="faq"
      aria-labelledby={`${id}-title`}
      className="relative py-28 md:py-40 bg-background overflow-hidden"
    >
      {/* Fond */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <div
          className="absolute bottom-[15%] left-[-20%] w-[550px] h-[550px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(22,163,74,0.07) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-green-500/40" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-green-500/80">
              Questions fréquentes
            </span>
            <div className="h-px w-8 bg-green-500/40" />
          </div>

          <h2
            id={`${id}-title`}
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight mb-5"
          >
            <span className="text-foreground">Vous avez des questions ? </span>
            <span className="bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent">
              Voici les réponses
            </span>
          </h2>

          <p className="text-base md:text-lg text-foreground/45 max-w-[500px] mx-auto leading-relaxed">
            Mon profil, mes compétences et mes projets — présentés sans
            enjolivement.
          </p>
        </motion.div>

        {/* Accordéon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Accordion.Root
            type="single"
            collapsible
            className="flex flex-col gap-3"
          >
            {FAQ_ITEMS.map((item, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className={cn(
                  "group rounded-[1.2rem] border border-foreground/[0.07] bg-foreground/[0.02]",
                  "transition-all duration-300",
                  "data-[state=open]:border-green-500/25 data-[state=open]:bg-green-950/15"
                )}
              >
                <Accordion.Header>
                  <Accordion.Trigger
                    className={cn(
                      "flex items-center justify-between w-full px-6 py-5 md:px-7 md:py-5",
                      "text-left cursor-pointer",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/40 rounded-[1.2rem]"
                    )}
                  >
                    <span className="text-sm md:text-base font-semibold text-foreground/80 group-data-[state=open]:text-foreground transition-colors duration-300 pr-4">
                      {item.question}
                    </span>
                    <motion.div
                      className="shrink-0 w-6 h-6 rounded-lg border border-foreground/[0.1] flex items-center justify-center group-data-[state=open]:border-green-500/30 group-data-[state=open]:bg-green-500/10 transition-all duration-300"
                    >
                      <Plus className="w-3.5 h-3.5 text-foreground/40 group-data-[state=open]:text-green-400 group-data-[state=open]:rotate-45 transition-all duration-300" />
                    </motion.div>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <div className="px-6 pb-6 md:px-7 md:pb-6 pt-0">
                    <p className="text-sm md:text-[0.95rem] text-foreground/50 leading-[1.8] max-w-[680px]">
                      {item.answer}
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>

          {/* Pied de section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-3 mt-12"
          >
            <Flame className="w-4 h-4 text-green-500/50" strokeWidth={1.6} />
            <p className="text-[13px] text-foreground/35 text-center">
              Pas de réponse à votre question ? Écrivez-moi à{" "}
              <a
                href="mailto:ariel.aloukou@iit.ci"
                className="text-green-400/70 hover:text-green-400 underline underline-offset-2 transition-colors"
              >
                ariel.aloukou@iit.ci
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Keyframes pour les animations slideUp/slideDown */}
      <style>{`
        @keyframes slideDown {
          from { height: 0; opacity: 0; }
          to { height: var(--radix-accordion-content-height); opacity: 1; }
        }
        @keyframes slideUp {
          from { height: var(--radix-accordion-content-height); opacity: 1; }
          to { height: 0; opacity: 0; }
        }
        [data-state="open"] { animation: slideDown 0.35s cubic-bezier(0.22, 1, 0.36, 1); }
        [data-state="closed"] { animation: slideUp 0.25s cubic-bezier(0.22, 1, 0.36, 1); }
      `}</style>
    </section>
  );
}
