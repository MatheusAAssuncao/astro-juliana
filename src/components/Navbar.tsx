import { useEffect, useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import { WHATSAPP_URLS } from "../lib/helpers.tsx";

const links = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#mapa", label: "Mapa Astral" },
  { href: "/#metodologia", label: "Atendimento" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-elegant" : "glass"
          }`}
        >
          <a href="/" className="flex items-center gap-2 group">
            <Sparkles className="h-5 w-5 text-gold transition-transform group-hover:rotate-12" />
            <span className="font-display text-xl tracking-wide">
              Juliana <span className="text-gradient-gold">Tardivo</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_URLS.agendarConsulta}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
          >
            Agendar Consulta
          </a>

          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-5 animate-fade-in">
            <ul className="flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-foreground/90"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={WHATSAPP_URLS.agendarConsulta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center rounded-full bg-gradient-gold px-5 py-2.5 font-medium text-primary-foreground"
                >
                  Agendar Consulta
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
