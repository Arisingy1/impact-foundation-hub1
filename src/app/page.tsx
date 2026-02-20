import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import DirectionsSection from "@/components/DirectionsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";
import PartnersSection from "@/components/PartnersSection";
import ParticipantsSection from "@/components/ParticipantsSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import PartnerLogosSection from "@/components/PartnerLogosSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <TargetAudienceSection />
        <DirectionsSection />
        <ProjectsSection />
        <TeamSection />
        <PartnersSection />
        <ParticipantsSection />
        <NewsSection />
        <ContactSection />
        <PartnerLogosSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
