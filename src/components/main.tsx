import { useState } from "react"
import { ProfileSidebar } from "./profile-sidebar"
import { AboutSection } from "./about-section"
import { ResumeSection } from "./resume-section"
import { PortfolioSection } from "./portfolio-section"
import { ThemeToggle } from "./theme-toggle"
import { profileData, aboutData, resumeData, portfolioData } from "../lib/portfolio-data"

export default function MainPortfolio() {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 md:p-6 lg:p-12">
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6">
          <ProfileSidebar data={profileData} />

          {/* Main Content Area */}
          <main className="flex-1 bg-card rounded-xl md:rounded-2xl border border-border overflow-hidden">
            {/* Navigation Bar */}
            <nav className="flex gap-1 sm:gap-2 md:gap-4 p-3 sm:p-4 md:p-6 border-b border-border overflow-x-auto scrollbar-hide">
              {["about", "portfolio", "resume"].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium capitalize transition-colors whitespace-nowrap flex-shrink-0 ${
                    activeSection === section
                      ? "text-foreground bg-accent/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>

            {/* Dynamic Content Rendering */}
            <div className="p-4 sm:p-5 md:p-6 lg:p-8">
              {activeSection === "about" && <AboutSection data={aboutData} />}
              {activeSection === "resume" && <ResumeSection data={resumeData} />}
              {activeSection === "portfolio" && <PortfolioSection data={portfolioData} />}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}