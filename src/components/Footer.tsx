import { Github, Linkedin, ExternalLink, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              Amol Saini
            </h3>
            <p className="text-muted-foreground text-sm">
              Software Developer passionate about system architecture, 
              modern technologies, and building scalable solutions.
            </p>
            <p className="text-xs text-muted-foreground">
              Based in Noida, India 🇮🇳
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <div>
                <button
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Experience
                </button>
              </div>
              <div>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Me
                </button>
              </div>
              <div>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </button>
              </div>
              <div>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>

          {/* Social & Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-2">
              <Button asChild variant="outline" size="icon">
                <a href="https://github.com/amolsr" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="https://www.linkedin.com/in/amolsr/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="https://leetcode.com/u/amolsr/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              💻 Currently learning Airflow & Kafka<br/>
              🚀 Available for paid projects<br/>
              ⚡ Marvel fan & tech enthusiast
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Amol Saini. Built with React, TypeScript & Tailwind CSS.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> for the dev community
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;