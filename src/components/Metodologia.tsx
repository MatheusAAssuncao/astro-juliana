import { Reveal } from "./Reveal";
import { Video, FileText, MessageCircle } from "lucide-react";
import { WHATSAPP_URLS } from "../lib/helpers.tsx";

export function Metodologia() {
  return (
    <section id="metodologia" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Como funciona</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Atendimento <span className="text-gradient-gold italic">acolhedor</span>, do começo ao fim
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-strong rounded-3xl p-8 md:p-12 border border-gold/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-5">
                <div className="shrink-0 h-14 w-14 rounded-2xl bg-gradient-violet flex items-center justify-center shadow-violet">
                  <Video className="h-7 w-7 text-pearl" />
                </div>
                <div>
                  <h3 className="font-display text-2xl mb-2">Consulta online via Zoom</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Encontros tranquilos, no conforto da sua casa, em qualquer
                    lugar do mundo. Sem pressa, com espaço para perguntas.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="shrink-0 h-14 w-14 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-glow">
                  <FileText className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl mb-2">Documentação completa em PDF</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Você recebe um material detalhado para reler no seu tempo,
                    transformando a consulta em estudo contínuo.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-5">
              <p className="text-muted-foreground text-sm text-center sm:text-left">
                Pronta para iniciar sua jornada? O contato é todo pelo WhatsApp.
              </p>
              <a
                href={WHATSAPP_URLS.agendarConsulta}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 font-medium text-primary-foreground shadow-glow hover:scale-[1.04] transition-transform"
              >
                <MessageCircle className="h-5 w-5" /> Falar com Juliana
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
