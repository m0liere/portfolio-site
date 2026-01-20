import { Github, ExternalLink, Play } from "lucide-react";
import { portfolioData } from "../lib/portfolio-data";

interface GithubRepo {
  url: string;
  name: string;
}

interface ProjectTile {
  id: string;
  title: string;
  description: string;
  projectUrl?: string;
  githubRepos?: GithubRepo[];
  learnings?: string[];
  videoUrl?: string;
}

interface PortfolioSectionProps {
  data?: ProjectTile[];
}

export function PortfolioSection({ data = portfolioData }: PortfolioSectionProps) {
  return (
    <section className="space-y-8 md:space-y-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Portfolio</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
        
        {/* items-start allows cards to have different heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {data.map((project) => (
            <div
              key={project.id}
              className="flex flex-col gap-4 p-4 md:p-6 bg-secondary rounded-xl md:rounded-2xl border border-border hover:border-accent transition-colors shadow-sm"
            >
              <div>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons: Centered and dynamic */}
              {(project.projectUrl || project.videoUrl) && (
                <div className="flex flex-wrap justify-center gap-3">
                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit px-4 py-2 bg-accent text-accent-foreground text-xs md:text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Visit Site
                    </a>
                  )}
                  {project.videoUrl && (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 w-fit px-4 py-2 bg-primary/10 text-primary text-xs md:text-sm font-medium rounded-lg hover:bg-primary/20 transition-colors"
                    >
                      <Play className="w-3.5 h-3.5" />
                      Watch Demo
                    </a>
                  )}
                </div>
              )}

              {/* GitHub Repositories */}
              {project.githubRepos && project.githubRepos.length > 0 && (
                <div className="space-y-2">
                  <p className="text-[10px] font-semibold text-foreground uppercase tracking-wide">
                    GitHub Repositories
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.githubRepos.map((repo) => (
                      <a
                        key={repo.url}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 bg-background/50 border border-border hover:border-accent text-muted-foreground hover:text-foreground rounded-lg transition-colors text-[11px] font-medium w-fit"
                      >
                        <Github className="w-3.5 h-3.5" />
                        {repo.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Learnings: Conditional List */}
              {project.learnings && project.learnings.length > 0 && (
                <div className="pt-4 border-t border-border/50">
                  <p className="text-[10px] font-semibold text-foreground uppercase tracking-widest mb-2">
                    Key Learnings
                  </p>
                  <ul className="list-disc pl-4 space-y-1">
                    {project.learnings.map((learning, index) => (
                      <li
                        key={index}
                        className="text-xs text-muted-foreground leading-snug"
                      >
                        {learning}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}