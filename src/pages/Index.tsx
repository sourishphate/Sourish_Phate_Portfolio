import { Github, Linkedin, Award, Briefcase, Code2, Rocket, Users, Target, Download, Mail, Phone, GraduationCap } from 'lucide-react';
import Starfield from '@/components/Starfield';
import ProjectCard from '@/components/ProjectCard';
import SkillBadge from '@/components/SkillBadge';
import { Button } from '@/components/ui/button';

const Index = () => {
  const projects = [
    {
      title: "Quantum Machine Learning for Exoplanet Characterization",
      description: [
        "Designed a quantum ML pipeline for characterizing exoplanet atmospheres using simulated transmission spectra",
        "Implemented dimensionality reduction via Autoencoder and Quantum Amplitude encoding",
        "Applied K-Means clustering for quantum vs. classical feature comparison",
        "Developed a quantum-classical hybrid model achieving R² of 0.82 vs. 0.85 classical baseline"
      ],
      techStack: ["Python", "Pennylane", "TensorFlow", "PyTorch", "Quantum ML", "K-Means"],
      links: {
        github: "https://github.com/sourishphate/QML_For_Exoplanet_Characterization_EXXA_GSoC_2025",
        demo: "https://summerofcode.withgoogle.com/programs/2025/projects/xIJEvndL",
        blog: "https://medium.com/@sourishphate/quantum-machine-learning-for-exoplanet-characterization-gsoc-25-ml4sci-c6c6cb4590b9"
      }
    },
    {
      title: "Lip Reading System",
      description: [
        "Developed a deep learning model combining 3D CNN and LSTM to interpret spoken words from lip movements",
        "Utilized Haar cascade classifier for face extraction and OpenCV for precise lip region extraction from video frames",
        "Achieved 72% accuracy through extensive hyperparameter tuning",
        "Enabled real-time detection for live use"
      ],
      techStack: ["Python", "TensorFlow", "OpenCV", "CNN", "LSTM", "Computer Vision"],
      links: {
        github: "https://github.com/sourishphate/Project-X-Lip-Reading"
      }
    },
    {
      title: "Captcha 2.0 - AI-Driven Authentication",
      description: [
        "Developed an AI-driven CAPTCHA alternative enhancing security with smoother UX",
        "Utilized browser fingerprinting with Random Forest Classifier for real-time human-bot screening",
        "Integrated OpenCV-based secondary verification for low-confidence scenarios",
        "Optimized for seamless real-time detection while maintaining accessibility"
      ],
      techStack: ["Python", "JavaScript", "TensorFlow", "OpenCV", "Random Forest", "ML"],
      links: {
        github: "https://github.com/KrishShah3011/Captcha"
      }
    },
    {
      title: "Voice2English - Multilingual Speech Translation",
      description: [
        "Advanced voice-to-English translation system converting spoken input from any language into English text",
        "Built end-to-end pipeline with ASR (BiLSTM + CTC + CNN) for transcription and Transformer-based NMT for translation",
        "Leveraged Bhaashaanuvad dataset with 88K+ samples across Indian languages",
        "Implemented dual architecture: CNN-BiLSTM-CTC + Transformer and pure Transformer-based approach"
      ],
      techStack: ["Python", "PyTorch", "Transformers", "LSTM", "CNN", "CTC", "NMT"],
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
          
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="flex gap-4 text-foreground/80">
              <a href="mailto:sourishphate@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">sourishphate@gmail.com</span>
              </a>
              <span className="text-foreground/40">|</span>
              <a href="tel:+919324530055" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 93245 30055</span>
              </a>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-accent/20 border-2 border-accent text-accent hover:bg-accent hover:text-background glow-blue font-semibold"
              asChild
            >
              <a href="/Sourish_Phate_Resume.pdf" download>
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
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

      {/* Education Section */}
      <section className="py-12 px-4" id="education">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-accent animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-accent">
                EDUCATION
              </h2>
              <GraduationCap className="w-8 h-8 text-accent animate-pulse" />
            </div>
          </div>
          
          <div className="glass-panel p-8 rounded-2xl hover-glow border-l-4 border-accent">
            <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
              <div>
                <h3 className="text-2xl font-orbitron font-bold text-accent">Bachelor of Technology in Computer Engineering</h3>
                <p className="text-foreground/80 font-medium">Veermata Jijabai Technological Institute (VJTI), Mumbai</p>
                <p className="text-sm text-accent/70 font-medium">Minor in Entrepreneurship</p>
              </div>
              <span className="text-accent font-semibold px-3 py-1 bg-accent/10 rounded-full border border-accent/30">2023 – 2027</span>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              I'm currently pursuing my undergraduate degree in Computer Engineering at Veermata Jijabai Technological Institute (VJTI), where I've developed a strong foundation in core subjects such as Data Structures and Algorithms, Operating Systems, Database Management Systems, and Computer Networks. Alongside my coursework, I've cultivated a deep interest in Artificial Intelligence, Machine Learning, and Quantum Computing. Through academic projects and independent research, I've explored the intersection of theoretical computer science and emerging technologies — from developing AI-driven applications to experimenting with quantum algorithms for complex real-world challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 px-4" id="projects">
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
      <section className="py-12 px-4" id="skills">
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
      <section className="py-12 px-4" id="experience">
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
                  <p className="text-sm text-primary/70 font-medium">Mumbai, Maharashtra | Jun 2025 – Oct 2025</p>
                </div>
                <span className="text-primary font-semibold px-3 py-1 bg-primary/10 rounded-full border border-primary/30">Jun – Oct 2025</span>
              </div>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Designed a quantum machine learning based pipeline for characterizing exoplanet atmospheres using simulated transmission spectra and benchmarking with classical machine learning methods</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Implemented dimensionality reduction of spectral data using Autoencoder and Quantum Amplitude encoding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Applied K-Means clustering and visualization to compare quantum vs. classical encoded feature representations of atmospheric gas concentrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Developed a quantum–classical hybrid model for predicting atmospheric gas concentrations, achieving an average R² of 0.82 compared to 0.85 for the classical baseline, highlighting the representational potential of quantum layers</span>
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
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">▹</span>
                  <span>Collaborate with cross-functional teams to design scalable financial technology solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 px-4" id="achievements">
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
      <section className="py-12 px-4" id="extracurricular">
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
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <h3 className="text-xl font-orbitron font-bold text-primary">Department Manager | Enthusia, VJTI</h3>
                    <span className="text-xs text-primary/70 font-medium">Sept 2023 – Feb 2025</span>
                  </div>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Responsible for organizing and overseeing sports committee operations, managing teams and executing inter-departmental and inter-college sports events as part of VJTI's annual sports fest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Coordinated logistics for 500+ participants across multiple sporting events, ensuring seamless scheduling and resource allocation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Led a team of 15+ volunteers, implementing efficient communication protocols and task delegation strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Managed budget planning and vendor negotiations, optimizing event costs while maintaining quality standards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-8 rounded-2xl hover-glow">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <h3 className="text-xl font-orbitron font-bold text-secondary">Mentor & Execution Head | Project X, VJTI</h3>
                    <span className="text-xs text-secondary/70 font-medium">Apr 2025 – Present</span>
                  </div>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">▹</span>
                      <span>Actively mentoring 20+ junior students on machine learning fundamentals and guiding them through the development of a multilingual Speech to Text Translation project, covering model design, training, and deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">▹</span>
                      <span>As Execution Head, managing overall committee operations, coordinating project timelines, delegating technical responsibilities, while ensuring smooth execution of all related activities and milestones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">▹</span>
                      <span>Conducted weekly technical workshops on deep learning architectures, ASR systems, and NMT models, enhancing team's practical ML skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">▹</span>
                      <span>Established code review processes and version control workflows, improving collaboration efficiency by 40%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">▹</span>
                      <span>Spearheaded integration of Transformer architectures and CTC decoding, driving innovation in the project's technical approach</span>
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
