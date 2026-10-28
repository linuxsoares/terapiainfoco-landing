import { ArrowLeft } from 'lucide-react';
import { LEGAL_TERMS_VERSION, PRIVACY_CONTACT_EMAIL, PRIVACY_NOTICE, TERMS_OF_USE } from '../shared';

export type LegalPageKind = 'termos' | 'privacidade';

/** Âncoras da URL que abrem as páginas legais (links do rodapé e do cadastro) */
export const LEGAL_HASHES: Record<string, LegalPageKind> = { '#termos': 'termos', '#privacidade': 'privacidade' };

const [year, month, day] = LEGAL_TERMS_VERSION.split('-');

/** Termos de Uso ou Aviso de Privacidade, com o mesmo texto aceito no cadastro do painel */
export function LegalPage({ kind }: { kind: LegalPageKind }) {
  const document = kind === 'termos' ? TERMS_OF_USE : PRIVACY_NOTICE;
  return (
    <main className="flex-1 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8">
        <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Voltar ao início
        </a>
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900">{document.title}</h1>
          <p className="text-sm text-slate-600">{document.summary}</p>
          <p className="text-xs text-slate-500">Versão de {day}/{month}/{year} · Dúvidas: {PRIVACY_CONTACT_EMAIL}</p>
        </header>
        <div className="space-y-6">
          {document.sections.map((section) => (
            <section key={section.heading} className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-slate-700">{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
        <p className="text-sm text-slate-600">
          {kind === 'termos'
            ? <>Veja também o <a href="#privacidade" className="font-semibold text-teal-700 hover:underline">Aviso de Privacidade</a>.</>
            : <>Veja também os <a href="#termos" className="font-semibold text-teal-700 hover:underline">Termos de Uso</a>.</>}
        </p>
      </div>
    </main>
  );
}
