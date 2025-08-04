import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink, ChevronDown } from "lucide-react";
import amolAvatar from "@/assets/amol-avatar.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Lead Engineer at Info Edge India Ltd";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 34, 55, 0.8), rgba(34, 34, 55, 0.9)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Avatar */}
          <div className="flex-shrink-0 slide-up">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden tech-glow ring-4 ring-primary/20">
                <img
                  src={amolAvatar}
                  alt="Amol Saini"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center accent-glow">
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left space-y-6 fade-in max-w-2xl">
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-7xl font-bold bg-hero-gradient bg-clip-text text-transparent leading-tight">
                Amol Saini
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                Lead Engineer • Mentor • Tech Speaker
              </p>
            </div>

            <div className="h-12 flex items-center justify-center lg:justify-start">
              <span className="text-lg lg:text-xl text-tech-accent font-mono">
                {typedText}
                <span className="typing-animation ml-1"></span>
              </span>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Skilled software engineer specializing in 
                <span className="text-primary font-semibold"> real-time analytics</span>, 
                <span className="text-accent font-semibold"> distributed systems</span>, and 
                <span className="text-tech-secondary font-semibold"> Kafka-ClickHouse pipelines</span>. 
                Currently leading engineering initiatives at Info Edge India Ltd.
              </p>
              
              <div className="flex gap-4 justify-center lg:justify-start pt-4">
                <Button asChild variant="default" size="lg" className="tech-glow">
                  <a href="https://github.com/amolsr" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <a href="https://www.linkedin.com/in/amolsr/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="https://topmate.io/amolsr" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Mentoring
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;