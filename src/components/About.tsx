interface AboutProps {
  bio: string;
  title: string;
}

const About = ({ bio, title }: AboutProps) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text">
          {title}
        </h2>
        
        <div className="glass-card p-8 rounded-lg">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {bio}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
