import React, { useState } from 'react';
import { CheckCircle2, Mail } from 'lucide-react';
import { NEWSLETTER_CONSENT_TEXT, NEWSLETTER_CONSENT_VERSION, PRIVACY_CONTACT_EMAIL } from '../shared';
import { landingApi } from '../services/api';

/**
 * Inscrição na newsletter com dupla confirmação: a pessoa só entra na lista depois de clicar no
 * link enviado por e-mail. A caixa de consentimento começa desmarcada.
 */
export const NewsletterSection: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', consent: false, website: '' });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.consent) {
      setError('Marque a autorização para receber os e-mails.');
      return;
    }
    try {
      setSending(true);
      const message = await landingApi.subscribeNewsletter({
        email: form.email,
        name: form.name || undefined,
        source: 'landing',
        consent: true,
        consentVersion: NEWSLETTER_CONSENT_VERSION,
        website: form.website
      });
      setDone(message);
    } catch (err: any) {
      setError(err.message || 'Não foi possível concluir a inscrição.');
    } finally {
      setSending(false);
    }
  };

  const inputClass = 'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500';

  return (
    <section id="newsletter" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold">
          <Mail className="w-3.5 h-3.5 text-teal-600" />
          <span>Newsletter</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Novidades e conteúdo para o seu consultório</h2>
        <p className="text-slate-600 text-base">
          Gestão de consultório, LGPD e prontuário eletrônico na prática, e o que muda no TerapiaInFoco. Sem excesso de e-mails.
        </p>

        {done ? (
          <div role="status" className="p-5 rounded-2xl bg-white border border-teal-200 text-left flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
            <div className="text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Falta só confirmar</p>
              <p>{done} Não chegou? Veja a caixa de spam ou promoções.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} className="relative text-left space-y-3" noValidate>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                aria-label="Nome (opcional)"
                placeholder="Nome (opcional)"
                maxLength={120}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              <input
                type="email"
                required
                aria-label="E-mail"
                placeholder="seu@email.com.br"
                maxLength={160}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="newsletter-consent"
                checked={form.consent}
                onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                className="mt-0.5 rounded text-teal-600 focus:ring-teal-500 cursor-pointer"
              />
              <label htmlFor="newsletter-consent" className="text-xs text-slate-600 leading-snug">
                {NEWSLETTER_CONSENT_TEXT}
              </label>
            </div>

            {/* Honeypot fora da tela (não aparece para pessoas nem para leitores de tela) */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
              className="absolute w-px h-px opacity-0 pointer-events-none overflow-hidden"
            />

            {error && <p className="text-xs text-rose-600">{error}</p>}

            <button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-sm font-bold transition-colors cursor-pointer disabled:opacity-60"
            >
              {sending ? 'Enviando...' : 'Quero receber'}
            </button>

            <p className="text-[11px] text-slate-500 leading-snug">
              Usamos seu e-mail (e o nome, se informar) só para enviar a newsletter. Você recebe um link para confirmar a
              inscrição; sem a confirmação, o endereço é apagado em 7 dias. Para sair, use o link no fim de qualquer e-mail
              ou escreva para {PRIVACY_CONTACT_EMAIL}.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
