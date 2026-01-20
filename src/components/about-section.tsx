import { PenTool, Code, Smartphone, Zap, ServerCog, FileCode, Sparkles, Flower, HelpCircle } from "lucide-react"
import { aboutData } from "../lib/portfolio-data"

const iconMap = {
  Code,
  Zap,
  Smartphone,
  PenTool,
  ServerCog,
  FileCode,
  Sparkles,
  Flower,
}

interface AboutSectionProps {
  data?: typeof aboutData
}

export function AboutSection({ data = aboutData }: AboutSectionProps) {
  return (
    <div className="space-y-8 md:space-y-10">
      {/* About Me */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">About Me</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
        <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
          {data.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* What I'm Doing */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">What I'm Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {data.services.map((service, index) => {
            // Fallback to HelpCircle if icon name is missing or misspelled
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || HelpCircle
            
            return (
              <div
                key={index}
                className="flex gap-3 md:gap-4 p-4 md:p-6 bg-secondary rounded-xl md:rounded-2xl border border-border hover:border-accent transition-colors">
                <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center">
                <IconComponent 
                  size={40}
                  stroke="currentColor" 
                  fill="none"
                  style={{ 
                    display: 'block', 
                    opacity: 1, 
                    visibility: 'visible',
                    color: '#3b82f6' // Hardcoded Blue for a 10-second test
                  }} 
                />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}