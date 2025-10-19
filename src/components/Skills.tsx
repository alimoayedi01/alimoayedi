import { Badge } from "./ui/badge";

interface SkillsProps {
  skills: string[];
  title: string;
}

const Skills = ({ skills, title }: SkillsProps) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text">
          {title}
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
          {skills.map((skill, index) => (
            <Badge 
              key={skill} 
              variant="outline" 
              className="text-base py-2 px-4 glass-card hover:border-primary transition-colors cursor-default"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
