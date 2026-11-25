import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import type { PublicPlatformTestimonial } from '../shared';
import { landingApi } from '../services/api';

const ROLE_LABEL: Record<PublicPlatformTestimonial['authorRole'], string> = {
  PSICOLOGO_TITULAR: 'Psicólogo(a)',
  PACIENTE: 'Paciente'
};

const monthYear = new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric', timeZone: 'America/Sao_Paulo' });

function formatMonth(iso: string): string {
  const label = monthYear.format(new Date(iso)).replace(' de ', ' ');
  return label.charAt(0).toUpperCase() + label.slice(1);
}

/** "Beatriz S." -> "BS"; "MSO" -> "MS" */
function avatarLetters(name: string): string {
  const words = name.replace(/\./g, '').trim().split(/\s+/).filter(Boolean);
  return (words.length > 1 ? words.map((w) => w[0]).join('') : words[0] ?? '').slice(0, 2).toUpperCase();
}

/**
 * Depoimentos de psicólogos e pacientes sobre a plataforma, aprovados pelo Admin no painel.
 * A seção some enquanto não houver depoimento aprovado (ou se a API não responder).
 */
export function TestimonialsSection() {
  const [items, setItems] = useState<PublicPlatformTestimonial[]>([]);

  useEffect(() => {
    landingApi.listTestimonials().then(setItems);
  }, []);

  if (items.length === 0) return null;

  return (
    <section id="depoimentos" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Quem usa, conta
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Psicólogos e pacientes falam sobre o TerapiaInFoco.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {items.map((t) => (
            <figure key={t.id} className="w-full md:w-[calc(50%-0.625rem)] lg:w-[calc((100%-2.5rem)/3)] p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-4">
              <Quote className="w-6 h-6 text-teal-500" aria-hidden="true" />
              <blockquote className="flex-1 text-sm text-slate-700 leading-relaxed whitespace-pre-line break-words">
                {t.content}
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <span aria-hidden="true" className="w-10 h-10 shrink-0 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center text-sm font-bold">
                  {avatarLetters(t.authorName)}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-slate-900">{t.authorName}</span>
                  <span className="block text-xs text-slate-500">{ROLE_LABEL[t.authorRole]} · {formatMonth(t.submittedAt)}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          Publicados com autorização dos autores. Pacientes aparecem só com as iniciais.
        </p>
      </div>
    </section>
  );
}
