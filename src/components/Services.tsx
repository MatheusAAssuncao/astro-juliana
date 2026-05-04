import { Reveal } from "./Reveal";
import { ArrowUpRight, Globe2, Sun, Star, Sparkles, Compass, Moon, Heart, type LucideIcon } from "lucide-react";

interface Servico {
  icone: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  href: string;
}

interface ServicesProps {
  servicos?: Servico[];
}

// Mapeamento de ícones (string do Directus -> componente Lucide)
const iconeMap: Record<string, LucideIcon> = {
  'Globe2': Globe2,
  'Sun': Sun,
  'Star': Star,
  'Sparkles': Sparkles,
  'Compass': Compass,
  'Moon': Moon,
  'Heart': Heart,
};

// Serviços padrão (fallback caso não venha do Directus)
const servicosPadrao = [
  {
    icone: "Globe2",
    titulo: "Mapa Astral",
    subtitulo: "Sua jornada de vida",
    descricao:
      "Uma leitura profunda da sua configuração natal: identidade, emoções, vocação e os ciclos que sustentam sua trajetória.",
    href: "#mapa-astral",
  },
  {
    icone: "Sun",
    titulo: "Revolução Solar",
    subtitulo: "Seu novo ano astrológico",
    descricao:
      "O mapa do seu próximo ciclo. Tendências, focos de atenção e portais que se abrem do seu aniversário ao próximo.",
    href: "#revolucao-solar",
  },
];

export function Services({ servicos = servicosPadrao }: ServicesProps) {
  return (
    <section id="servicos" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Serviços</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Consultas para diferentes <span className="text-gradient-gold italic">momentos</span> da sua jornada
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {servicos.map((s, i) => {
            const IconComponent = iconeMap[s.icone] || Star; // Fallback para Star se o ícone não for encontrado
            
            return (
              <Reveal key={s.titulo} delay={i * 0.1}>
                <a
                  href={s.href}
                  className="group relative block h-full glass-strong rounded-3xl p-8 md:p-10 border border-gold/15 hover:border-gold/50 transition-all duration-500 overflow-hidden hover:-translate-y-1"
                >
                  <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-8">
                      <div className="h-14 w-14 rounded-2xl glass flex items-center justify-center">
                        <IconComponent className="h-7 w-7 text-gold" />
                      </div>
                      <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-gold group-hover:rotate-12 transition-all" />
                    </div>
                    <h3 className="font-display text-3xl mb-1">{s.titulo}</h3>
                    <p className="text-gold text-sm italic mb-5">{s.subtitulo}</p>
                    <p className="text-muted-foreground leading-relaxed">{s.descricao}</p>
                    <div className="mt-8 inline-flex items-center gap-2 text-sm text-foreground/80 border-b border-gold/30 pb-1">
                      Saber mais
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
