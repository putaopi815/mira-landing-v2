import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PainPoint } from "@/components/PainPoint";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
import { Technology } from "@/components/Technology";
import { SocialProof } from "@/components/SocialProof";
import { DigitalTwin } from "@/components/DigitalTwin";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoint />
        <Solution />
        <HowItWorks />
        <Technology />
        <SocialProof />
        <DigitalTwin />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
