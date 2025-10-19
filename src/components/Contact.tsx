import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

interface ContactProps {
  title: string;
  email?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

const Contact = ({ title, email, github, linkedin, twitter }: ContactProps) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto space-y-8 text-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">
          {title}
        </h2>
        
        <p className="text-lg text-muted-foreground">
          I'm always interested in hearing about new projects and opportunities.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          {email && (
            <Button asChild size="lg" className="shadow-glow">
              <a href={`mailto:${email}`}>
                <Mail className="h-5 w-5 mr-2" />
                Email Me
              </a>
            </Button>
          )}
          {github && (
            <Button variant="outline" size="lg" asChild className="glass-card hover:border-primary">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
            </Button>
          )}
          {linkedin && (
            <Button variant="outline" size="lg" asChild className="glass-card hover:border-primary">
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          )}
          {twitter && (
            <Button variant="outline" size="lg" asChild className="glass-card hover:border-primary">
              <a href={twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 mr-2" />
                Twitter
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
