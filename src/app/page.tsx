import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { StatsBar } from '@/components/StatsBar';
import { ProblemCards } from '@/components/ProblemCards';
import { LicenseBenefits } from '@/components/LicenseBenefits';
import { LicenseSection } from '@/components/LicenseSection';
import { MusicPreview } from '@/components/MusicPreview';
import { HowItWorks } from '@/components/HowItWorks';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { QuoteForm } from '@/components/QuoteForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <ProblemCards />
      <LicenseBenefits />
      <LicenseSection />
      <MusicPreview />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
      <QuoteForm />
      <Footer />
    </main>
  );
}
