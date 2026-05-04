import { Reveal } from "./Reveal";
import { Compass, Heart, Briefcase, Flame, Sparkle, Infinity as InfinityIcon } from "lucide-react";

const areas = [
  { icon: Compass, title: "Identidade e Valores", desc: "Sol, Lua e ascendente — a base do seu eu." },
  { icon: Heart, title: "Mente e Base Emocional", desc: "Mercúrio e Lua: como você pensa e sente." },
  { icon: Briefcase, title: "Expressão e Rotina", desc: "Vênus, Marte e a casa do trabalho." },
  { icon: Flame, title: "Relacionamentos e Transformação", desc: "Vínculos, Plutão e ciclos de mudança." },
  { icon: Sparkle, title: "Expansão e Propósito", desc: "Júpiter, Saturno e seu chamado maior." },
  { icon: InfinityIcon, title: "Coletivo e Espiritualidade", desc: "Urano, Netuno e o seu lugar no mundo." },
];

export function MapaAreas() {
  return (
    <section id="mapa" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Mapa Astral Completo</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Seis camadas para se <span className="text-gradient-gold italic">enxergar inteira</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Cada modalidade aprofunda uma área específica do seu desenho astrológico.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <div className="group h-full glass rounded-2xl p-6 border border-border hover:border-gold/40 transition-all hover:-translate-y-1">
                <div className="h-12 w-12 rounded-xl bg-gradient-violet/30 flex items-center justify-center mb-5 group-hover:shadow-violet transition-shadow">
                  <a.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-display text-xl mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
