import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProblemCards } from '@/components/ProblemCards';
import { LicenseSection } from '@/components/LicenseSection';
import { HowItWorks } from '@/components/HowItWorks';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { QuoteForm } from '@/components/QuoteForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <ProblemCards />
      <LicenseSection />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <QuoteForm />
      <Footer />
    </main>
  );
}
