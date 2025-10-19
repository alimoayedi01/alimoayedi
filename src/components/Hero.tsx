import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  email?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  heroBackground?: string;
}

const Hero = ({ name, title, tagline, email, github, linkedin, twitter, heroBackground }: HeroProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {heroBackground && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBackground})` }}
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </>
      )}
      {!heroBackground && (
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      )}
      
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in relative z-10">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            {name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {tagline}
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          {github && (
            <Button variant="outline" size="icon" asChild className="glass-card hover:border-primary transition-colors">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          )}
          {linkedin && (
            <Button variant="outline" size="icon" asChild className="glass-card hover:border-primary transition-colors">
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          )}
          {twitter && (
            <Button variant="outline" size="icon" asChild className="glass-card hover:border-primary transition-colors">
              <a href={twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
          )}
          {email && (
            <Button variant="outline" size="icon" asChild className="glass-card hover:border-primary transition-colors">
              <a href={`mailto:${email}`}>
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          )}
        </div>

        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
