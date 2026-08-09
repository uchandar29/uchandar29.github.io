import { Header } from "@/components/header/header";
import { HeroSection } from "@/components/hero/hero-section";
import { AboutSection } from "@/components/about/about-section";
import { SkillsSection } from "@/components/skills/skills-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { EducationSection } from "@/components/education/education-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { GallerySection } from "@/components/gallery/gallery-section";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/footer/footer";
import { ParticleBackground } from "@/components/particle-background/particle-background";

export default function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <ParticleBackground />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <GallerySection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
