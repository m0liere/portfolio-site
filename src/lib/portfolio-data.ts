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
      description: "Certified AWS Solutions Architect\n Certified AWS AI Practitioner \n Managing company infrastructure with code, primarily terraform. Deployed infra for Okta, AWS, GCP, Confluent Cloud, Google Workspace.",
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
      period: "June 2024 — December 2024",
      description:
        "Built Terraform modules for Google Workspace and managed terraform resources with Okta, handled access reviews/compliance, and trained junior engineers on IaC concepts.",
    },
    {
      title: "Platform Engineer (Flow)",
      period: "August 2022 - January 2024",
      description:
        "Managed dev, staging and prod environments for payments system in AWS, deployed cloud infrastructure via Terraform to AWS/GCP/Confluent, built CI/CD pipelines, and created internal tooling with low-code platforms.",
    },
    {
      title: "Senior IAM IT Systems Engineer (Coinbase)",
      period: "October 2020 - June 2022",
      description:
        "Primary Okta administrator for 13,000+ user environment handling SSO integrations and automation via Okta Workflows, plus T3 support across the IT stack. Prepped IT evironment for DPO.",
    },
    {
      title: "IT Systems Engineer (Compass)",
      period: "June 2017 - October 2019",
      description:
        "IAM Engineer for OneLogin (15,000+ users), built Ruby CLI and NoCode/Low Code tooling to automate and programmatically manage onboarding/offboarding and M&A migrations during hypergrowth.",
    },
  ],
  skills: [
    { name: "Learning Quickly", level: 100 },
    { name: "IAM & IDP Systems Administration", level: 95 },
    { name: "T3 IT Support", level: 95 },
    { name: "Terraform", level: 90 },
    { name: "Cloud Resource Managament", level: 85 },
    { name: "AI Prompting", level: 85 },
  ],
}

export const portfolioData = [
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
    learnings: [
      "Application System design development with AI partner",
      "Using Claude code to create PRs via detailed prompts",
      "End to end serverless infrastructure build out in AWS",
      "Python function development",
      "Surgical repair of terraform state with imports and local tf commands",
      "Building integration to LLM APIs with RAG context",
      "Slack Bot setup managing users, messages, and button actions",
    ],
    videoUrl: "https://youtu.be/oQHJRi0so4w",
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
    learnings: [
      "Designing React Site with v0 editor",
      "Use Cursor to refactor to Astro site",
      "Website deployment with Netlify",
      "Integrate Web3forms for contact",
    ],
  },
  {
    id: "astro-2",
    title: "Portfolio Site",
    description: "The site you're on now showcasing my work. Built with v0, Astro, Cursor, and Gemini, hosted on Netlify.",
    projectUrl: "https://roeihoory.com",
    githubRepos: [
      {
        name: "/portfolio-site",
        url: "https://github.com/m0liere/portfolio-site",
      },
    ],
  },
];