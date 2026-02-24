import { Header } from "@/components/header/header";
import { HeroSection } from "@/components/hero/hero-section";
import { SkillsSection } from "@/components/skills/skills-section";
import { EducationSection } from "@/components/education/education-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { LeadershipSection } from "@/components/leadership/leadership-section";
import { AwardsSection } from "@/components/awards/awards-section";
import { GallerySection } from "@/components/gallery/gallery-section";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/footer/footer";
import { ScrollToTop } from "@/components/scroll-to-top/scroll-to-top";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <LeadershipSection />
      <AwardsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
