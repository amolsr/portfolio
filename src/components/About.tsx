import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, Settings, GitBranch, Terminal } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Kafka", category: "realtime", icon: "📡" },
    { name: "ClickHouse", category: "realtime", icon: "⚡" },
    { name: "Debezium", category: "realtime", icon: "🔄" },
    { name: "Spring Boot", category: "backend", icon: "🍃" },
    { name: "Node.js", category: "backend", icon: "🟢" },
    { name: "Java", category: "language", icon: "☕" },
    { name: "React.js", category: "frontend", icon: "⚛️" },
    { name: "Angular", category: "frontend", icon: "🅰️" },
    { name: "Kubernetes", category: "devops", icon: "☸️" },
    { name: "AWS", category: "devops", icon: "☁️" },
    { name: "Docker", category: "devops", icon: "🐳" },
    { name: "Terraform", category: "devops", icon: "🏗️" },
    { name: "ArgoCD", category: "devops", icon: "🚀" },
    { name: "Prometheus", category: "monitoring", icon: "📊" },
    { name: "Grafana", category: "monitoring", icon: "📈" },
  ];

  const achievements = [
    { name: "Lead Engineer", description: "Info Edge India Ltd (2025-Present)", icon: "👨‍💼" },
    { name: "AWS Certified", description: "Cloud Practitioner Certification", icon: "☁️" },
    { name: "Tech Speaker", description: "ClickHouse & CDC Meetups", icon: "🎤" },
    { name: "Mentor", description: "Topmate.io Platform", icon: "🧑‍🏫" },
    { name: "Team Lead", description: "Blockchain Research Lab (9 members)", icon: "👥" },
    { name: "Hackathon Winner", description: "HashedIn & Smart India Hackathon", icon: "🏆" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Lead Engineer with expertise in real-time analytics, distributed systems, and data-driven development. 
            Passionate about building scalable solutions and sharing technical knowledge through mentoring and speaking.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Experience & Focus */}
          <div className="space-y-6">
            <Card className="card-gradient border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Current Focus</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>👨‍💼 <strong>Lead Engineer</strong> at Info Edge India Ltd</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span>🧑‍🏫 <strong>Mentor</strong> on Topmate.io platform</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-tech-secondary rounded-full"></span>
                    <span>🎤 <strong>Tech Speaker</strong> at meetups & conferences</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span>📚 <strong>Content Creator</strong> - Technical articles & posts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>🏆 <strong>Hackathon Winner</strong> - Smart India & HashedIn</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient border-border/50 hover:border-accent/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GitBranch className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-semibold">Professional Achievements</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                      <span className="text-lg">{achievement.icon}</span>
                      <div>
                        <span className="font-medium">{achievement.name}</span>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <Card className="card-gradient border-border/50 hover:border-tech-accent/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Code2 className="w-6 h-6 text-tech-accent" />
                  <h3 className="text-xl font-semibold">Skills & Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className={`
                        px-3 py-2 text-sm font-medium cursor-default transition-all duration-300 hover:scale-105
                        ${skill.category === 'realtime' ? 'bg-primary/20 text-primary border-primary/30' : ''}
                        ${skill.category === 'backend' ? 'bg-accent/20 text-accent border-accent/30' : ''}
                        ${skill.category === 'frontend' ? 'bg-tech-secondary/20 text-tech-secondary border-tech-secondary/30' : ''}
                        ${skill.category === 'devops' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' : ''}
                        ${skill.category === 'monitoring' ? 'bg-green-500/20 text-green-400 border-green-500/30' : ''}
                        ${skill.category === 'language' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' : ''}
                      `}
                    >
                      <span className="mr-2">{skill.icon}</span>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Terminal className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">What I Do</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Lead Engineer at Info Edge India Ltd with 4+ years of experience in building scalable, 
                    data-driven systems. Expert in real-time analytics using Kafka, ClickHouse, and Debezium 
                    for processing 15k+ messages per second.
                  </p>
                  <p>
                    Active in the tech community as a mentor on Topmate.io, tech speaker at meetups, 
                    and content creator sharing insights on distributed systems and real-time data processing. 
                    AWS Certified Cloud Practitioner with strong DSA problem-solving skills.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;