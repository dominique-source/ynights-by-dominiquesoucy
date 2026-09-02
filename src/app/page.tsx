import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LiveTicker } from "@/components/LiveTicker";
import { Footer } from "@/components/Footer";
import { EventIntro } from "@/components/sections/EventIntro";
import { YBoard } from "@/components/board/YBoard";
import { ExperienceMosaic } from "@/components/sections/ExperienceMosaic";
import { SquashSection } from "@/components/sections/SquashSection";
import { BaseballSection } from "@/components/sections/BaseballSection";
import { SprintSection } from "@/components/sections/SprintSection";
import { SledSection } from "@/components/sections/SledSection";
import { ColdSection } from "@/components/sections/ColdSection";
import { FoodSection } from "@/components/sections/FoodSection";
import { MusicSection } from "@/components/sections/MusicSection";
import { ParentsSection } from "@/components/sections/ParentsSection";
import { SocialLoopSection } from "@/components/sections/SocialLoopSection";
import { FutureSection } from "@/components/sections/FutureSection";
import { SignupSection } from "@/components/sections/SignupSection";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <LiveTicker />
        <EventIntro />
        <YBoard />
        <ExperienceMosaic />
        <SquashSection />
        <BaseballSection />
        <SprintSection />
        <SledSection />
        <ColdSection />
        <FoodSection />
        <MusicSection />
        <ParentsSection />
        <SocialLoopSection />
        <FutureSection />
        <SignupSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
