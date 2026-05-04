import { Reveal } from "./Reveal";
import { Sparkles } from "lucide-react";
import { processarTitulo, processarConteudo } from "../lib/helpers.tsx";

interface AboutProps {
  imagem?: string;
  titulo?: string;
  conteudo?: string;
}

export function About({ imagem, titulo, conteudo }: AboutProps = {}) {
  return (
    <section id="sobre" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative mx-auto w-full max-w-md aspect-[4/5]">
              <div className="absolute -inset-4 bg-gradient-violet rounded-[40%_60%_55%_45%/45%_50%_50%_55%] blur-2xl opacity-40" />
              <div className="relative h-full w-full rounded-[40%_60%_55%_45%/45%_50%_50%_55%] glass-strong overflow-hidden border border-gold/30 shadow-violet">
                <div className="absolute inset-0 starfield opacity-50" />
                {imagem && (
                  <img
                    src={imagem}
                    alt="Juliana Tardivo - Astróloga"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="absolute -top-3 -right-3 glass rounded-full px-4 py-2 text-xs uppercase tracking-widest text-gold">
                <Sparkles className="inline h-3 w-3 mr-1" /> Astróloga
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Sobre</p>
              <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
                {titulo && processarTitulo(titulo)}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {conteudo && processarConteudo(conteudo)}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
