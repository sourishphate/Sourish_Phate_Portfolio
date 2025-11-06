interface SkillBadgeProps {
  skill: string;
  category: 'language' | 'framework' | 'tool' | 'concept';
}

const SkillBadge = ({ skill, category }: SkillBadgeProps) => {
  const getCategoryStyles = () => {
    switch (category) {
      case 'language':
        return 'bg-primary/20 text-primary border-primary/40 glow-teal hover:bg-primary/30';
      case 'framework':
        return 'bg-secondary/20 text-secondary border-secondary/40 glow-purple hover:bg-secondary/30';
      case 'tool':
        return 'bg-accent/20 text-accent border-accent/40 glow-magenta hover:bg-accent/30';
      case 'concept':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/40 hover:bg-blue-500/30';
    }
  };

  return (
    <div
      className={`px-4 py-2 rounded-lg border font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-default ${getCategoryStyles()}`}
    >
      {skill}
    </div>
  );
};

export default SkillBadge;
