import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import CtaSection from "@/components/CtaSection";
import TrustIndicators from "@/components/TrustIndicators";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <main className="min-h-screen bg-background max-w-xl mx-auto">
      <HeroSection />
      <HowItWorks />
      <CtaSection />
      <TrustIndicators />
      <Testimonials />
      <footer className="text-center pb-8">
        <p className="text-[10px] text-muted-foreground/60">
          This is a promotional offer. Terms and conditions apply.
        </p>
      </footer>
    </main>
  );
};

export default Index;
