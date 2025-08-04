import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lead Engineer at Info Edge India Ltd, Tech Mentor on Topmate.io, and AWS Certified professional. 
            Available for technical consulting, mentoring, and speaking opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="card-gradient border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Let's Connect
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Lead Engineer with 4+ years of experience in distributed systems and real-time analytics. 
                    Currently mentoring tech professionals and students on Topmate.io while leading engineering initiatives 
                    at Info Edge India Ltd. Open to technical consulting and speaking opportunities.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>Noida, India</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail className="w-4 h-4 text-accent" />
                      <span>B.Tech Computer Science (8.4 CGPA)</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail className="w-4 h-4 text-accent" />
                      <span>AWS Certified Cloud Practitioner</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border/50 hover:border-accent/30 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Current Status</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-muted-foreground">Currently Lead Engineer at Info Edge</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">Available for mentoring on Topmate.io</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span className="text-muted-foreground">Open to speaking engagements</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-tech-secondary rounded-full"></span>
                      <span className="text-muted-foreground">Technical consulting available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <Card className="card-gradient border-border/50 hover:border-tech-accent/30 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                  <div className="space-y-4">
                    <Button 
                      asChild 
                      className="w-full justify-start text-left h-auto p-4 tech-glow"
                      variant="default"
                    >
                      <a href="https://github.com/amolsr" target="_blank" rel="noopener noreferrer">
                        <Github className="w-6 h-6 mr-4" />
                        <div className="text-left">
                          <div className="font-semibold">GitHub</div>
                          <div className="text-sm text-primary-foreground/80">Check out my code and contributions</div>
                        </div>
                      </a>
                    </Button>

                    <Button 
                      asChild 
                      className="w-full justify-start text-left h-auto p-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      variant="outline"
                    >
                      <a href="https://www.linkedin.com/in/amolsr/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-6 h-6 mr-4" />
                        <div className="text-left">
                          <div className="font-semibold">LinkedIn</div>
                          <div className="text-sm opacity-80">Professional network and experience</div>
                        </div>
                      </a>
                    </Button>

                    <Button 
                      asChild 
                      className="w-full justify-start text-left h-auto p-4"
                      variant="secondary"
                    >
                      <a href="https://topmate.io/amolsr" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-6 h-6 mr-4" />
                        <div className="text-left">
                          <div className="font-semibold">Topmate.io</div>
                          <div className="text-sm text-secondary-foreground/80">Book 1:1 mentoring sessions</div>
                        </div>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border/50">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2">Speaking & Content</h3>
                  <p className="text-muted-foreground mb-4">
                    Shared insights on ClickHouse & CDC at tech meetups. 
                    Writing detailed technical articles on Kafka-ClickHouse integration 
                    and Debezium pipelines. 📝
                  </p>
                  <div className="flex justify-center gap-2 text-2xl">
                    🎤 📚 💡
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="card-gradient border-border/50 text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="card-gradient border-border/50 text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-accent">Lead</div>
                <div className="text-sm text-muted-foreground">Engineer Role</div>
              </CardContent>
            </Card>
            <Card className="card-gradient border-border/50 text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-tech-secondary">15k+</div>
                <div className="text-sm text-muted-foreground">Msg/Sec Pipeline</div>
              </CardContent>
            </Card>
            <Card className="card-gradient border-border/50 text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary">AWS</div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;