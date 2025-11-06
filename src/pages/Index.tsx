import { Github, Linkedin, Award, Briefcase, Code2, Rocket, Users, Target } from 'lucide-react';
import Starfield from '@/components/Starfield';
import ProjectCard from '@/components/ProjectCard';
import SkillBadge from '@/components/SkillBadge';
import { Button } from '@/components/ui/button';

const Index = () => {
  const projects = [
    {
      title: "Quantum Machine Learning for Exoplanet Characterization",
      description: "GSoC'25 project developing a quantum-classical hybrid pipeline for analyzing exoplanet atmospheres using Pennylane, TensorFlow, and PyTorch. Achieved R² = 0.82 benchmarking hybrid models against classical baselines.",
      techStack: ["Python", "Pennylane", "TensorFlow", "PyTorch", "Quantum ML"],
      links: {
        github: "https://github.com/sourishphate/QML_For_Exoplanet_Characterization_EXXA_GSoC_2025",
        demo: "https://summerofcode.withgoogle.com/programs/2025/projects/xIJEvndL",
        blog: "https://medium.com/@sourishphate/quantum-machine-learning-for-exoplanet-characterization-gsoc-25-ml4sci-c6c6cb4590b9"
      }
    },
    {
      title: "Lip Reading",
      description: "Built a 3D CNN + LSTM model to interpret speech from lip movements using deep learning and computer vision techniques.",
      techStack: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
      links: {
        github: "https://github.com/sourishphate/Project-X-Lip-Reading"
      }
    },
    {
      title: "Captcha 2.0",
      description: "Created an AI-driven CAPTCHA alternative that improves both accessibility and security using machine learning.",
      techStack: ["Python", "JavaScript", "TensorFlow", "OpenCV"],
      links: {
        github: "https://github.com/KrishShah3011/Captcha"
      }
    },
    {
      title: "Voice2English (Multilingual Speech to Text)",
      description: "Developed a multilingual voice-to-text translation pipeline under Project X, VJTI, leveraging NLP and ML technologies.",
      techStack: ["Python", "ML", "NLP", "Speech Recognition"],
      links: {
        github: "https://github.com/harsh-sankhe/Voice2English"
      }
    }
  ];

  const skills = {
    languages: ["C/C++", "Python", "HTML/CSS"],
    frameworks: ["TensorFlow", "PyTorch", "OpenCV", "Keras", "Pennylane"],
    tools: ["VS Code", "Google Colab", "Git/GitHub", "Jupyter Notebook"],
    concepts: ["Quantum ML", "Deep Learning", "Computer Vision", "Algorithms", "AI Systems"]
  };

  const achievements = [
    "Selected GSoC'25 Developer with ML4SCI (Top <1% globally)",
    "3rd Place – Turing Test, Codeverse'25 (COC VJTI)",
    "Completed Hacktoberfest'24 (All 4 badges)",
    "Bronze Medal – International English Olympiad (IEO)"
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Starfield />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow-pulse">
              SOURISH PHATE
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold mb-2">
              Aspiring Quantum & AI Researcher
            </p>
            <p className="text-lg text-foreground/80">
              Upcoming Software Developer Intern @ <span className="text-secondary">Citi</span> | GSoC'25 Developer @ <span className="text-accent">ML4SCI</span>
            </p>
          </div>
          
          <div className="glass-panel p-8 rounded-2xl max-w-3xl mx-auto mb-8 animate-slide-in">
            <p className="text-foreground/90 leading-relaxed text-left">
              I'm Sourish Phate, a third-year Computer Engineering student at <strong className="text-primary">Veermata Jijabai Technological Institute (VJTI), Mumbai</strong>, pursuing a minor in Entrepreneurship. I'm passionate about AI, Quantum Machine Learning, and cutting-edge software systems that bridge science and innovation. As an upcoming Software Developer Intern at Citi and a Google Summer of Code 2025 developer with ML4SCI, I thrive at the intersection of research and real-world impact.
            </p>
            <p className="text-foreground/90 leading-relaxed text-left mt-4">
              During GSoC, I worked on a <strong className="text-secondary">quantum–classical hybrid pipeline for exoplanet atmosphere characterisation</strong>, integrating Pennylane, TensorFlow, and PyTorch. My work demonstrated the potential of quantum-enhanced learning for astrophysical data analysis — achieving near-classical accuracy while leveraging quantum encodings.
            </p>
            <div className="mt-6 p-4 bg-accent/10 border border-accent/30 rounded-lg">
              <p className="text-accent text-sm">
                💡 <strong>Fun fact:</strong> Google Summer of Code selects around 1,200 contributors globally out of tens of thousands of applicants each year — being part of it is a rare distinction in open-source innovation.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary/20 border-2 border-primary text-primary hover:bg-primary hover:text-background glow-teal font-semibold"
              asChild
            >
              <a href="https://www.linkedin.com/in/sourish-phate-066952288/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-secondary/20 border-2 border-secondary text-secondary hover:bg-secondary hover:text-background glow-purple font-semibold"
              asChild
            >
              <a href="https://github.com/sourishphate" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4" id="projects">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Code2 className="w-8 h-8 text-primary animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-primary">
                PROJECTS
              </h2>
              <Code2 className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <p className="text-foreground/70 text-lg">Quantum meets classical in cutting-edge research</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4" id="skills">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Rocket className="w-8 h-8 text-secondary animate-float" />
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-secondary">
                SKILLS
              </h2>
              <Rocket className="w-8 h-8 text-secondary animate-float" />
            </div>
          </div>
          
          <div className="glass-panel p-8 rounded-2xl space-y-8">
            <div>
              <h3 className="text-xl font-orbitron font-bold text-primary mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} category="language" />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-orbitron font-bold text-secondary mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow" />
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.frameworks.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} category="framework" />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-orbitron font-bold text-accent mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
                Developer Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} category="tool" />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-orbitron font-bold text-blue-400 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse-glow" />
                Concepts
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.concepts.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} category="concept" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4" id="experience">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-accent animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-accent">
                EXPERIENCE
              </h2>
              <Briefcase className="w-8 h-8 text-accent animate-pulse" />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="glass-panel p-8 rounded-2xl hover-glow border-l-4 border-primary">
              <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                <div>
                  <h3 className="text-2xl font-orbitron font-bold text-primary">Google Summer of Code 2025</h3>
                  <p className="text-foreground/80 font-medium">ML4SCI | Open Source Software Developer</p>
                </div>
                <span className="text-primary font-semibold px-3 py-1 bg-primary/10 rounded-full border border-primary/30">2025</span>
              </div>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Designed quantum ML pipeline for exoplanet analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Benchmarked hybrid models vs classical baselines achieving R² = 0.82</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-panel p-8 rounded-2xl hover-glow border-l-4 border-secondary">
              <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                <div>
                  <h3 className="text-2xl font-orbitron font-bold text-secondary">Software Developer Intern</h3>
                  <p className="text-foreground/80 font-medium">Citi</p>
                </div>
                <span className="text-secondary font-semibold px-3 py-1 bg-secondary/10 rounded-full border border-secondary/30">Summer 2026</span>
              </div>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">▹</span>
                  <span>Will contribute to backend systems and AI-driven analytics modules</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4" id="achievements">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-primary animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                ACHIEVEMENTS
              </h2>
              <Award className="w-8 h-8 text-accent animate-pulse" />
            </div>
          </div>
          
          <div className="glass-panel p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 hover:border-primary/50 transition-all hover-glow"
                >
                  <Award className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground/90">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Section */}
      <section className="py-20 px-4" id="extracurricular">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-secondary animate-float" />
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-secondary">
                LEADERSHIP
              </h2>
              <Users className="w-8 h-8 text-secondary animate-float" />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="glass-panel p-8 rounded-2xl hover-glow">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-orbitron font-bold text-primary mb-2">Department Manager | Enthusia, VJTI</h3>
                  <p className="text-foreground/80">
                    Managed operations and execution of inter-college sports events, coordinating teams and ensuring seamless event delivery.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-8 rounded-2xl hover-glow">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-orbitron font-bold text-secondary mb-2">Mentor & Execution Head | Project X, VJTI</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">▹</span>
                      <span>Mentored juniors in ML fundamentals and project workflows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">▹</span>
                      <span>Managed execution of multilingual Speech-to-Text project</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-panel p-8 rounded-2xl mb-8 animate-pulse-glow">
            <p className="text-2xl md:text-3xl font-orbitron font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              "Engineering the future, one qubit and neuron at a time."
            </p>
          </div>
          
          <div className="flex gap-6 justify-center mb-6">
            <a
              href="https://www.linkedin.com/in/sourish-phate-066952288/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/sourishphate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors hover:scale-110 transform duration-200"
            >
              <Github className="w-8 h-8" />
            </a>
          </div>
          
          <p className="text-foreground/60 text-sm">
            © 2025 Sourish Phate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
