import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  liveUrl?: string;
  image?: string;
}

const ProjectCard = ({ title, description, technologies, github, liveUrl, image }: ProjectCardProps) => {
  return (
    <div className="glass-card p-6 rounded-lg space-y-4 hover:border-primary/50 transition-all duration-300 group animate-fade-in">
      {image && (
        <div className="aspect-video rounded-md overflow-hidden bg-muted">
          <img src={image} alt={title} className="w-full h-full object-fill" />
        </div>
      )}
      
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {github && (
            <Button variant="outline" size="sm" asChild className="glass-card">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
