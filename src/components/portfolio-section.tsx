import { Github } from "lucide-react";

interface GithubRepo {
  url: string
  name: string
}

interface ProjectTile {
  id: string
  title: string
  description: string
  projectUrl?: string
  githubRepos?: GithubRepo[]
}

interface PortfolioSectionProps {
  data?: any
}

export function PortfolioSection({ data }: PortfolioSectionProps) {
  const projects: ProjectTile[] = [
    {
      id: "ai-agent",
      title: "Hagrid Slack AI Agent for App Access",
      description: "An AI agent allowing users to conversationally ask for access to apps in Okta with approval flows in Slack.",
      githubRepos: [
        {
          name: "/hagrid-lambdas",
          url: "https://github.com/tavern-labs/hagrid-lambdas",
        },
        {
          name: "/hagrid-aws-terraform",
          url: "https://github.com/tavern-labs/hagrid-aws-terraform",
        },
        {
          name: "/hagrid-okta-terraform",
          url: "https://github.com/tavern-labs/hagrid-okta-terraform",
        },
      ],
    },
    {
      id: "astro-1",
      title: "Unplug Wellness Site",
      description: "Website for my wellness business offering yoga, wellness workshops and ergonomics for companies and desk workers. Built with v0, Astro, Cursor, and Gemini, hosted on Netlify.",
      projectUrl: "https://unplugwellness.health",
      githubRepos: [
        {
          name: "/unplugwellness-site",
          url: "https://github.com/m0liere/unplugwellness-site",
        },
      ],
    },
    {
      id: "astro-2",
      title: "Portfolio Site",
      description: "The site you're on now showcasing my work. Built with v0, Astro, Cursor, and Gemini, hosted on Netlify.",
      projectUrl: "https://roeihoory.com",
    },
  ]

  return (
    <section className="space-y-8 md:space-y-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Portfolio</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col gap-3 md:gap-4 p-4 md:p-6 bg-secondary rounded-xl md:rounded-2xl border border-border hover:border-accent transition-colors"
            >
              <div>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>

              {/* Links Section */}
              <div className="space-y-2">
                {/* External Links use standard <a> tags in Astro */}
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full px-4 py-2 bg-accent text-accent-foreground text-center text-xs md:text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Visit Site
                  </a>
                )}

                {project.githubRepos && (
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide">GitHub Repositories</p>
                    {project.githubRepos.map((repo) => (
                      <a
                        key={repo.url}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors text-xs md:text-sm font-medium"
                      >
                        <Github className="w-4 h-4" />
                        {repo.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}