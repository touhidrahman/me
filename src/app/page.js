import HeroSection from "../../components/heroSection";
import ProfileOverview from "../../components/profileOverview";
import WorkProcess from "../../components/workProcess";
import DevelopmentTools from "../../components/developmentTools";
import WorkTogether from "../../components/workTogether";
import ExperienceSection from "../../components/experienceSection";
import WhatIDoSection from "../../components/whatIDoSection";
import ProjectsSection from "../../components/projectsSection";
import EducationSection from "../../components/educationSection";
import ContactForm from "../../components/contactForm";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProfileOverview />
      <WorkProcess />
      <DevelopmentTools />
      <WhatIDoSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <WorkTogether />
      <ContactForm />
    </main>
  );
}
