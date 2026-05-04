import { Reveal } from "./Reveal";
import { Gem, MessageCircle } from "lucide-react";
import { WHATSAPP_URLS } from "../lib/helpers.tsx";

export function Diferencial() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] glass-strong border border-gold/30 p-10 md:p-16 shadow-glow">
            <div className="absolute inset-0 starfield opacity-40" />
            <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-primary/25 blur-[100px]" />
            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-accent/25 blur-[100px]" />

            <div className="relative grid md:grid-cols-[auto,1fr,auto] items-center gap-10">
              <div className="mx-auto md:mx-0">
                <div className="relative h-24 w-24 rounded-full bg-gradient-gold flex items-center justify-center shadow-glow">
                  <Gem className="h-11 w-11 text-primary-foreground" />
                  <span className="absolute -inset-2 rounded-full border border-gold/40 animate-pulse" />
                </div>
              </div>

              <div className="text-center md:text-left">
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Diferencial Exclusivo</p>
                <h3 className="font-display text-3xl md:text-4xl leading-tight mb-3">
                  Uma <span className="text-gradient-gold italic">joia única</span>, criada a partir do seu céu.
                </h3>
                <p className="text-muted-foreground max-w-xl">
                  Ao contratar o Mapa Astral Completo, você recebe uma joia
                  exclusiva personalizada com base no seu desenho astrológico —
                  um símbolo material da sua jornada.
                </p>
              </div>

              <a
                href={WHATSAPP_URLS.mapaComJoia}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 font-medium text-primary-foreground shadow-glow hover:scale-[1.04] transition-transform whitespace-nowrap"
              >
                <MessageCircle className="h-5 w-5" /> Quero meu mapa
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
