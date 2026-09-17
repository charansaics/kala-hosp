import {
  AboutSection,
  ContactSection,
  DoctorsSection,
  FeatureBanner,
  Footer,
  Header,
  HeroSection,
  ServicesSection,
  SpecialitiesSection,
  TestimonialsSection,
} from "@/components/hospital-sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020b1a] text-slate-100">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SpecialitiesSection />
      <DoctorsSection />
      <FeatureBanner />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
