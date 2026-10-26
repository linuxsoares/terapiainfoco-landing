import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureModules } from './components/FeatureModules';
import { AiSoapSimulator } from './components/AiSoapSimulator';
import { SecurityArchitecture } from './components/SecurityArchitecture';
import { DocumentSection } from './components/DocumentSection';
import { RoiCalculator } from './components/RoiCalculator';
import { ComparisonTable } from './components/ComparisonTable';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { FindTherapistSection } from './components/FindTherapistSection';
import { ValidationPortal } from './components/ValidationPortal';
import { LEGAL_HASHES, LegalPage, type LegalPageKind } from './components/LegalPage';


export function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  // Páginas legais por âncora (#termos, #privacidade): o site é estático e de página única
  const [legalPage, setLegalPage] = useState<LegalPageKind | null>(() => LEGAL_HASHES[window.location.hash] ?? null);

  useEffect(() => {
    const onHashChange = () => {
      const next = LEGAL_HASHES[window.location.hash] ?? null;
      setLegalPage(next);
      if (next) window.scrollTo(0, 0);
      // Âncora de seção vinda de uma página legal: a seção só existe depois de renderizar
      else if (window.location.hash) setTimeout(() => document.getElementById(window.location.hash.slice(1))?.scrollIntoView());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleOpenDemo = () => setIsDemoModalOpen(true);
  const handleCloseDemo = () => setIsDemoModalOpen(false);

  const handleScrollToSimulator = () => {
    const el = document.getElementById('simulador-ia');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-teal-500/20 selection:text-teal-900">
      {/* Sticky Header */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {legalPage ? <LegalPage kind={legalPage} /> : (
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenDemo={handleOpenDemo}
          onExploreSimulator={handleScrollToSimulator}
        />

        {/* Entrada do paciente: busca de psicólogos e agendamento no painel */}
        <FindTherapistSection />

        {/* 5 Functional RFC Modules */}
        <FeatureModules />

        {/* Interactive Showstopper: AI SOAP & Diarization Simulator */}
        <AiSoapSimulator />

        {/* Security & Envelope Encryption / LGPD Section */}
        <SecurityArchitecture />

        {/* Official CFP Documents (Res. 006/2019) */}
        <DocumentSection />

        {/* Public Zero-Knowledge Document Verification Portal (QR Code target) */}
        <ValidationPortal />


        {/* Time & Financial ROI Calculator */}
        <RoiCalculator onOpenDemo={handleOpenDemo} />

        {/* Comparison Matrix: TerapiaInFoco vs Generic Tools */}
        <ComparisonTable />

        {/* Transparent Pricing Plans */}
        <PricingSection onOpenDemo={handleOpenDemo} />

        {/* Regulatory & Technical FAQ */}
        <FaqSection onOpenDemo={handleOpenDemo} />
      </main>
      )}

      {/* Footer with Compliance & Whitepaper Notices */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* Lead Capture & Early Access Modal */}
      <LeadModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
}

export default App;
