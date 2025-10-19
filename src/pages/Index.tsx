import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

interface PortfolioConfig {
  personalInfo: {
    name: string;
    title: string;
    tagline: string;
    bio: string;
    email?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    heroBackground?: string;
  };
  sections: Array<{
    id: string;
    title?: string;
    enabled: boolean;
    order: number;
  }>;
  skills: string[];
}

interface ProjectsConfig {
  projects: Array<{
    id: string;
    title: string;
    description: string;
    technologies: string[];
    github?: string;
    liveUrl?: string;
    image?: string;
    featured: boolean;
  }>;
}

const Index = () => {
  const [config, setConfig] = useState<PortfolioConfig | null>(null);
  const [projects, setProjects] = useState<ProjectsConfig | null>(null);

  useEffect(() => {
    // Load portfolio config
    fetch('/config/portfolio.json')
      .then(res => res.json())
      .then(data => setConfig(data))
      .catch(err => console.error('Failed to load portfolio config:', err));

    // Load projects config
    fetch('/config/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Failed to load projects config:', err));
  }, []);

  if (!config || !projects) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  const enabledSections = config.sections
    .filter(section => section.enabled)
    .sort((a, b) => a.order - b.order);

  return (
    <div className="min-h-screen animated-bg">
      {enabledSections.map(section => {
        switch (section.id) {
          case 'hero':
            return (
              <Hero
                key={section.id}
                name={config.personalInfo.name}
                title={config.personalInfo.title}
                tagline={config.personalInfo.tagline}
                email={config.personalInfo.email}
                github={config.personalInfo.github}
                linkedin={config.personalInfo.linkedin}
                twitter={config.personalInfo.twitter}
                heroBackground={config.personalInfo.heroBackground}
              />
            );
          case 'projects':
            return (
              <Projects
                key={section.id}
                projects={projects.projects}
                title={section.title || 'Projects'}
              />
            );
          case 'skills':
            return (
              <Skills
                key={section.id}
                skills={config.skills}
                title={section.title || 'Skills'}
              />
            );
          case 'about':
            return (
              <About
                key={section.id}
                bio={config.personalInfo.bio}
                title={section.title || 'About'}
              />
            );
          case 'contact':
            return (
              <Contact
                key={section.id}
                title={section.title || 'Contact'}
                email={config.personalInfo.email}
                github={config.personalInfo.github}
                linkedin={config.personalInfo.linkedin}
                twitter={config.personalInfo.twitter}
              />
            );
          default:
            return null;
        }
      })}
      
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} {config.personalInfo.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
