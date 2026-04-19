import { DistantComet } from "@/components/space/distant-comet"
import { ShootingStars } from "@/components/space/shooting-stars"
import { Starfield } from "@/components/space/starfield"
import { Navbar } from "@/components/space/navbar"
import { Hero } from "@/components/space/hero"
import { AboutSection } from "@/components/space/about-section"
import { ResidencySection } from "@/components/space/residency-section"
import { EventsSection } from "@/components/space/events-section"
import { WhyAttendSection } from "@/components/space/why-attend-section"
import { EcosystemSection } from "@/components/space/ecosystem-section"
import { GetInvolvedSection } from "@/components/space/get-involved-section"
import { EmailSignupSection } from "@/components/space/email-signup-section"
import { Footer } from "@/components/space/footer"

export default function SpaceHappyHourPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#121212]">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DistantComet />
        <Starfield />
        <ShootingStars />
      </div>

      <div className="relative z-10 w-full">
        <Navbar />
        <Hero />
        <AboutSection />
        <EventsSection />
        <ResidencySection />
        <WhyAttendSection />
        <EcosystemSection />
        <GetInvolvedSection />
        <EmailSignupSection />
        <Footer />
      </div>
    </main>
  )
}
