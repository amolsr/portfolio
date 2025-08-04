import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Kafka + ClickHouse Pipeline",
      description: "Real-time analytics pipeline processing 15k+ messages per second. Built with Kafka for event streaming and ClickHouse for analytical queries, enabling sub-second query performance on massive datasets.",
      tech: ["Kafka", "ClickHouse", "Real-time Analytics", "Distributed Systems"],
      github: "https://github.com/amolsr",
      stars: 0,
      forks: 0,
      featured: true,
      icon: "⚡",
      highlight: "15k msg/sec throughput"
    },
    {
      title: "Debezium CDC Implementation",
      description: "Change Data Capture implementation for seamless microservices data replication. Enables real-time data synchronization across distributed services with guaranteed delivery and fault tolerance.",
      tech: ["Debezium", "CDC", "Microservices", "Data Replication"],
      github: "https://github.com/amolsr",
      stars: 0,
      forks: 0,
      featured: true,
      icon: "🔄",
      highlight: "Zero-downtime migration"
    },
    {
      title: "HU-Pariksha Quiz Platform",
      description: "Technical assessment platform developed during HashedIn Hackathon. Features real-time quiz management, automated scoring, and comprehensive analytics for technical evaluations.",
      tech: ["JavaScript", "Node.js", "Real-time", "Assessment"],
      github: "https://github.com/amolsr/pariksha",
      stars: 3,
      forks: 3,
      featured: true,
      icon: "🏆",
      highlight: "Hackathon Winner"
    },
    {
      title: "Late Entry System",
      description: "Employee late entry management system built with Node.js, Express.js, and MongoDB. Features automated reporting, analytics dashboard, and integration with HR systems.",
      tech: ["Node.js", "Express.js", "MongoDB", "Dashboard"],
      github: "https://github.com/amolsr",
      stars: 0,
      forks: 0,
      featured: false,
      icon: "📊"
    },
    {
      title: "College Registration Portal",
      description: "Part of Blockchain Research Lab initiative - comprehensive registration system for college students. Led 9-member team to build useful college tools including e-notice board.",
      tech: ["Full Stack", "Team Leadership", "College Tools"],
      github: "https://github.com/amolsr",
      stars: 0,
      forks: 0,
      featured: false,
      icon: "🎓"
    },
    {
      title: "Web Scraping Toolkit",
      description: "Comprehensive web scraping examples using Beautiful Soup in Python. Features multiple scraping techniques, data cleaning methods, and best practices for ethical scraping.",
      tech: ["Python", "Beautiful Soup", "Data Processing"],
      github: "https://github.com/amolsr/web-scrapping",
      stars: 14,
      forks: 14,
      featured: false,
      icon: "🕷️"
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world projects showcasing expertise in distributed systems, real-time analytics, 
            and scalable architecture. From 15k+ msg/sec Kafka pipelines to hackathon-winning platforms.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                  {project.highlight && (
                    <span className="block text-sm text-accent font-medium mt-1">
                      {project.highlight}
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary hover:bg-primary/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <Button 
                    asChild 
                    size="sm" 
                    className="flex-1"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-muted-foreground">
            Additional Projects & Tools
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index} 
                className="card-gradient border-border/50 hover:border-accent/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{project.icon}</span>
                      <h4 className="font-semibold text-lg">{project.title}</h4>
                    </div>
                    <Button asChild variant="ghost" size="sm">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Stats */}
        <div className="mt-16 text-center">
          <Card className="inline-block card-gradient border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">15k+</div>
                  <div className="text-sm text-muted-foreground">Msg/Sec Pipeline</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-tech-secondary">9</div>
                  <div className="text-sm text-muted-foreground">Team Members Led</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Hackathon Wins</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
