import { Sparkles, MessageCircle } from "lucide-react";
import { WHATSAPP_URLS } from "../lib/helpers.tsx";

interface FooterProps {
  telefone?: string;
  instagram?: string;
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer({ telefone, instagram }: FooterProps) {
  return (
    <footer className="relative py-12 border-t border-border/50 mt-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="font-display text-lg">
              Juliana <span className="text-gradient-gold">Tardivo</span>
            </span>
            <span className="text-muted-foreground text-sm ml-2">
              · Astrologia Humanizada
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URLS.contato(telefone)}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-gold/50 transition"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4 text-gold" />
            </a>
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-gold/50 transition"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4 text-gold" />
              </a>
            )}
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Juliana Tardivo · Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
