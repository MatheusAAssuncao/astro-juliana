/**
 * Processa texto convertendo palavras entre asteriscos em spans com estilo
 * Exemplo: "texto *destacado* aqui" → "texto <span class='...'>destacado</span> aqui"
 */
export function processarTitulo(texto: string): React.ReactNode[] {
  const partes = texto.split(/(\*[^*]+\*)/g);
  
  return partes.map((parte, index) => {
    if (parte.startsWith('*') && parte.endsWith('*')) {
      const textoDestacado = parte.slice(1, -1);
      return (
        <span key={index} className="text-gradient-gold italic">
          {textoDestacado}
        </span>
      );
    }
    return parte;
  });
}

/**
 * Converte texto com \n em parágrafos <p>
 * Exemplo: "parágrafo 1\nparágrafo 2" → <p>parágrafo 1</p><p>parágrafo 2</p>
 */
export function processarConteudo(texto: string): React.ReactNode[] {
  // Remove \n extras e divide o texto em parágrafos
  const paragrafos = texto
    .split('\n')
    .map(p => p.trim())
    .filter(p => p.length > 0);
  
  return paragrafos.map((paragrafo, index) => (
    <p key={index}>{paragrafo}</p>
  ));
}

/**
 * Gera URL completa do WhatsApp com DDI brasileiro e mensagem opcional
 * @param telefone - Número de telefone (apenas dígitos)
 * @param mensagem - Mensagem pré-preenchida (opcional)
 * @returns URL completa do WhatsApp
 */
export function getWhatsAppUrl(telefone?: string, mensagem?: string): string {
  const numero = telefone ? `55${telefone}` : '5519998425623';
  const texto = mensagem ? `?text=${encodeURIComponent(mensagem)}` : '';
  return `https://wa.me/${numero}${texto}`;
}

// URLs do WhatsApp com mensagens padrão
export const WHATSAPP_URLS = {
  agendarConsulta: getWhatsAppUrl('19998425623', 'Olá Juliana, gostaria de agendar uma consulta'),
  mapaComJoia: getWhatsAppUrl('19998425623', 'Olá Juliana, quero o Mapa Astral Completo com a joia exclusiva'),
  contato: (telefone?: string) => getWhatsAppUrl(telefone),
};

/**
 * Gera slug a partir de um título
 * Remove acentos, converte para minúsculas e substitui espaços por hífens
 * @param titulo - Título a ser convertido
 * @returns Slug formatado
 */
export function gerarSlug(titulo: string): string {
  return titulo
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
    .replace(/[\s_-]+/g, '-') // Substitui espaços por hífens
    .replace(/^-+|-+$/g, ''); // Remove hífens no início/fim
}

/**
 * Processa conteúdo HTML convertendo quebras de linha em parágrafos
 * Se o conteúdo já tem tags <p>, mantém como está
 * Se não, converte \n em tags <p>
 * @param texto - Conteúdo a ser processado
 * @returns HTML formatado
 */
export function processarConteudoHTML(texto: string): string {
  // Se já tem tags <p>, retorna como está
  if (texto.includes('<p>') || texto.includes('<p ')) {
    return texto;
  }
  
  // Converte quebras de linha em parágrafos
  const paragrafos = texto
    .split('\n')
    .map(p => p.trim())
    .filter(p => p.length > 0)
    .map(p => `<p style="font-size: 1.2rem; line-height: 1.4; margin-bottom: 1.5rem;">${p}</p>`)
    .join('\n');
  
  return paragrafos;
}
