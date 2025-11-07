import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

interface ProjectCardProps {
  title: string;
  description: string | string[];
  techStack: string[];
  links: {
    github?: string;
    demo?: string;
    blog?: string;
  };
}

const ProjectCard = ({ title, description, techStack, links }: ProjectCardProps) => {
  const descriptionArray = Array.isArray(description) ? description : [description];
  return (
    <div className="glass-panel p-6 rounded-xl hover-glow group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <h3 className="text-xl font-orbitron font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
          {title}
        </h3>
        
        <ul className="space-y-2 mb-4">
          {descriptionArray.map((point, index) => (
            <li key={index} className="flex items-start gap-2 text-foreground/80">
              <span className="text-primary mt-1 flex-shrink-0">▹</span>
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30 glow-teal"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {links.github && (
            <Button
              variant="outline"
              size="sm"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary hover:glow-teal"
              asChild
            >
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          )}
          {links.demo && (
            <Button
              variant="outline"
              size="sm"
              className="border-secondary/50 text-secondary hover:bg-secondary/10 hover:border-secondary hover:glow-purple"
              asChild
            >
              <a href={links.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Project Page
              </a>
            </Button>
          )}
          {links.blog && (
            <Button
              variant="outline"
              size="sm"
              className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent hover:glow-magenta"
              asChild
            >
              <a href={links.blog} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Blog Post
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
