import HeroSection from "../../components/heroSection";
import ProfileOverview from "../../components/profileOverview";
import WorkProcess from "../../components/workProcess";
import DevelopmentTools from "../../components/developmentTools";
import WorkTogether from "../../components/workTogether";
import ExperienceSection from "../../components/experienceSection";
import WhatIDoSection from "../../components/whatIDoSection";
import ContactForm from "../../components/contactForm";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ProfileOverview />
      <WorkProcess />
      <DevelopmentTools />
      <WorkTogether />
      <ExperienceSection />
      <WhatIDoSection />
      <ContactForm />
    </div>
  );
}
