import { motion } from "framer-motion";
import { MessageCircle, Moon, Star } from "lucide-react";
import { WHATSAPP_URLS } from "../lib/helpers.tsx";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      {/* starfield + glows */}
      <div className="absolute inset-0 starfield opacity-70 pointer-events-none" />
      <div className="absolute -top-40 -left-32 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold mb-8"
          >
            <Star className="h-3 w-3" /> Astrologia Humanizada
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] mb-6"
          >
            Autoconhecimento <br />
            escrito nos <span className="text-gradient-gold italic">astros</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Uma jornada profunda pelo seu mapa astral, conduzida com escuta,
            sensibilidade e a precisão dos ciclos do céu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 font-medium hover:border-gold/50 transition-colors"
            >
              <Moon className="h-4 w-4 text-gold" />
              Conhecer serviços
            </a>
          </motion.div>

          {/* orbit decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="relative mx-auto mt-20 w-64 h-64 hidden sm:block"
          >
            <div className="absolute inset-0 rounded-full border border-gold/20" />
            <div className="absolute inset-6 rounded-full border border-accent/20" />
            <div className="absolute inset-12 rounded-full border border-gold/15" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-gold shadow-glow" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6"
            >
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-accent shadow-violet" />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Star className="h-8 w-8 text-gold" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
