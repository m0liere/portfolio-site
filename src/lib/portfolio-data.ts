export const profileData = {
  name: "Roei H.",
  title: "IT Systems and Cloud Engineer",
  avatar: "/roei-square.png",
  email: "hoory@protonmail.com",
  location: "New York City, NY, USA",
  social: {
    github: "https://github.com/m0liere",
    linkedin: "https://linkedin.com/in/roeihoory",
  },
}

export const aboutData = {
  description: [
    "I'm an IT Systems and Cloud engineer from NYC, specializing in IAM, Cloud Infrastructure management, and IT Systems Administration.",
    "My job is to build and maintain a foundation for engineers to build apps on and for organizations to operate on. I have operated in hypergrowth and early stage startups and participated in Coinbases pre-post IPO journey. Most of my experience is with Okta, Google Workspace, Terraform, and AWS but I have exposure to GCP and Azure and have administered many other applications in the modern IT stack. I also have a lot of experience building tools in low code/no code platforms and now building internal tooling with AI. I am reliable, thorough, and honest.",
  ],
  services: [
    {
      icon: "ServerCog",
      title: "IT Systems Administration",
      description: "Managing systems your business operates on, identity and device management. Okta, Google Workspace, Slack, Jira/Confluence, Duo, 1Password, JAMF and more.",
    },
    {
      icon: "FileCode",
      title: "Infrastructure Management",
      description: "Managing company infrastructure with code, primarily terraform. Deployed infra for Okta, AWS, GCP, Confluent Cloud, Google Workspace. Certified AWS Solutions Architect.",
    },
    {
      icon: "Sparkles",
      title: "Building Internal Tools",
      description: "Building tools/agents with AI (ClaudeCode, Cursor, ChatGPT, Gemini) and NoCode/low code tools like Zapier, Okta workflows, Superblocks, Retool etc.",
    },
    {
      icon: "Flower",
      title: "Yoga and Mindfulness",
      description: "I am starting to bring the tools of movement, breathwork, mindfulness and meditation to my teams to help prevent injury and burnout and reduce stress.",
    },
  ],
}

export const resumeData = {
  education: [
    {
      title: "Carnegie Mellon University",
      period: "Aug 2012 — Dec 2015",
      description: "Studied Information Systems and Business Administration. Focused on all stages of system development lifecycle.",
    },
  ],
  experience: [
    {
      title: "Sabbatical",
      period: "2025",
      description:
        "Took the year off to travel and focus on self development.",
    },
    {
      title: "IT IAM Engineer Sub-Contractor (EverOps)",
      period: "June 2024 — Dec 2024",
      description:
        "Built Terraform modules for Google Workspace and managed terraform resources with Okta, handled access reviews/compliance, and trained junior engineers on IaC concepts.",
    },
    {
      title: "Platform Engineer (Flow)",
      period: "Aug 2023 - Jan 2024",
      description:
        "Managed dev, staging and prod environments for payments system in AWS, deployed cloud infrastructure via Terraform to AWS/GCP/Confluent, built CI/CD pipelines, and created internal tooling with low-code platforms.",
    },
    {
      title: "Senior IAM IT Systems Engineer (Coinbase)",
      period: "Aug 2023 - Jan 2024",
      description:
        "Primary Okta administrator for 13,000+ user environment handling SSO integrations and automation via Okta Workflows, plus T3 support across the IT stack. Prepped IT evironment for DPO.",
    },
    {
      title: "IT Systems Engineer (Compass)",
      period: "Aug 2023 - Jan 2024",
      description:
        "IAM Engineer for OneLogin (15,000+ users), automated onboarding/offboarding workflows, and built Ruby CLI and NoCode/Low Code tooling for onboarding/offboarding and M&A migrations during hypergrowth.",
    },
  ],
  skills: [
    { name: "IAM Systems Administration", level: 95 },
    { name: "T3 IT Support", level: 95 },
    { name: "Terraform", level: 90 },
    { name: "Cloud Resource Managament", level: 80 },
  ],
}



export const portfolioData = {
  categories: ["all", "web design", "applications", "web development"],
  projects: [
    {
      id: "astro-1",
      title: "Astro Project 1",
      description: "Your first Astro site description",
      type: "astro",
      projectUrl: "https://example.com",
    },
    {
      id: "astro-2",
      title: "Astro Project 2",
      description: "Your second Astro site description",
      type: "astro",
      projectUrl: "https://example.com",
    },
    {
      id: "ai-agent",
      title: "AI Agent Project",
      description: "AI agent with multiple GitHub repositories",
      type: "ai-agent",
      githubRepos: [
        { name: "Repo 1", url: "https://github.com/username/repo1" },
        { name: "Repo 2", url: "https://github.com/username/repo2" },
        { name: "Repo 3", url: "https://github.com/username/repo3" },
      ],
    },
  ],
}
