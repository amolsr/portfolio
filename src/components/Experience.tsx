import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, Award, Users, TrendingUp } from "lucide-react";

const Experience = () => {
  const workExperience = [
    {
      company: "Info Edge India Ltd",
      positions: [
        {
          title: "Lead Engineer",
          period: "Apr 2025 – Present",
          current: true
        },
        {
          title: "Senior Software Engineer",
          period: "Mar 2023 – Mar 2025",
          current: false
        }
      ],
      location: "Noida, India",
      description: "Leading engineering initiatives in distributed systems and real-time analytics. Built high-throughput Kafka pipelines processing 15k+ messages per second.",
      achievements: [
        "Architected real-time analytics pipeline with Kafka + ClickHouse",
        "Led distributed systems design and implementation",
        "Mentored junior engineers and drove technical decisions"
      ],
      tech: ["Kafka", "ClickHouse", "Debezium", "Microservices", "Spring Boot"],
      icon: "🏢"
    },
    {
      company: "HashedIn by Deloitte",
      positions: [
        {
          title: "Software Engineer II",
          period: "Aug 2022 – Mar 2023",
          current: false
        },
        {
          title: "Software Engineer I",
          period: "Sep 2021 – Aug 2022",
          current: false
        }
      ],
      location: "Bangalore, India",
      description: "Developed scalable backend systems and won internal hackathons. Built HU-Pariksha quiz platform during company hackathon.",
      achievements: [
        "Won HashedIn internal hackathon with HU-Pariksha",
        "Built microservices using Node.js and Spring Boot",
        "Implemented CDC solutions with Debezium"
      ],
      tech: ["Node.js", "Spring Boot", "Microservices", "Debezium"],
      icon: "⚡"
    },
    {
      company: "MAQ Software",
      positions: [
        {
          title: "Associate Software Engineer (Intern)",
          period: "2021",
          current: false
        }
      ],
      location: "Hyderabad, India",
      description: "Gained hands-on experience in software development and data processing pipelines.",
      achievements: [
        "Developed data processing solutions",
        "Learned enterprise software development practices"
      ],
      tech: ["Data Processing", "Software Development"],
      icon: "📊"
    }
  ];

  const mentoring = {
    platform: "Topmate.io",
    role: "Tech Mentor",
    description: "Mentoring tech professionals and students in system design, career growth, and technical skills development.",
    topics: ["System Design", "Career Guidance", "Technical Skills", "Interview Preparation"],
    icon: "🧑‍🏫"
  };

  const leadership = {
    role: "Head Coordinator",
    organization: "Blockchain Research Lab",
    period: "College Years",
    description: "Led a 9-member team building useful college tools including registration portal and e-notice board.",
    achievements: [
      "Led team of 9 members",
      "Built registration portal for college",
      "Developed e-notice board system",
      "Coordinated multiple tech projects"
    ],
    icon: "👥"
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            4+ years of experience building scalable systems, leading teams, and mentoring the next generation of developers.
          </p>
        </div>

        {/* Work Experience */}
        <div className="space-y-8 mb-16">
          {workExperience.map((job, index) => (
            <Card key={index} className="card-gradient border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{job.icon}</div>
                    <div>
                      <CardTitle className="text-xl lg:text-2xl">{job.company}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    {job.positions.map((position, posIndex) => (
                      <div key={posIndex} className="mb-2">
                        <div className="flex items-center gap-2 justify-end">
                          <span className="font-semibold">{position.title}</span>
                          {position.current && (
                            <Badge variant="default" className="text-xs">Current</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>{position.period}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {job.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4 text-accent" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {job.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mentoring & Leadership */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mentoring */}
          <Card className="card-gradient border-border/50 hover:border-accent/30 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{mentoring.icon}</span>
                <div>
                  <CardTitle className="text-xl">Tech Mentoring</CardTitle>
                  <p className="text-muted-foreground">{mentoring.platform}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                {mentoring.description}
              </p>
              <div>
                <h4 className="font-semibold mb-2">Mentoring Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {mentoring.topics.map((topic, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leadership */}
          <Card className="card-gradient border-border/50 hover:border-tech-secondary/30 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{leadership.icon}</span>
                <div>
                  <CardTitle className="text-xl">Team Leadership</CardTitle>
                  <p className="text-muted-foreground">{leadership.organization}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                {leadership.description}
              </p>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-tech-secondary" />
                  Leadership Achievements
                </h4>
                <ul className="space-y-1">
                  {leadership.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-tech-secondary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Career Stats */}
        <div className="mt-16">
          <Card className="card-gradient border-border/50">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Companies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-tech-secondary mb-2">9</div>
                  <div className="text-sm text-muted-foreground">Team Members Led</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15k+</div>
                  <div className="text-sm text-muted-foreground">Msg/Sec Pipeline</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;