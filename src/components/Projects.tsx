import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
}

interface ProjectsProps {
  projects: Project[];
  title: string;
}

const Projects = ({ projects, title }: ProjectsProps) => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text">
          {title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={project.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
