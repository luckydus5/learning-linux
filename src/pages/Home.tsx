import { ArrowRight, BookOpen, Code, Trophy, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Home() {
  const features = [
    {
      icon: Terminal,
      title: "200+ Commands",
      description: "Master essential Linux commands from basics to advanced",
    },
    {
      icon: BookOpen,
      title: "Hands-on Practice",
      description: "Learn by doing with practical exercises for every command",
    },
    {
      icon: Code,
      title: "Real Projects",
      description: "Build real-world projects to solidify your skills",
    },
    {
      icon: Trophy,
      title: "Track Progress",
      description: "Monitor your learning journey and celebrate achievements",
    },
  ];

  const learningPath = [
    { week: "1-3", title: "Foundation", topics: "Basic navigation, file operations, help system" },
    { week: "3-6", title: "Command Mastery", topics: "Text processing, pipes, redirection" },
    { week: "6-8", title: "File System", topics: "Permissions, ownership, disk management" },
    { week: "8-10", title: "Process Management", topics: "Process control, monitoring, performance" },
    { week: "10-12", title: "User Administration", topics: "Users, groups, sudo, security" },
    { week: "12-13", title: "Package Management", topics: "Installing, updating, managing software" },
    { week: "13-15", title: "Networking", topics: "Network configuration, troubleshooting" },
    { week: "15-16", title: "System Services", topics: "Systemd, service management, logs" },
    { week: "16-19", title: "Shell Scripting", topics: "Bash scripting, automation" },
    { week: "19-22", title: "Advanced Admin", topics: "Cron, backups, kernel tuning" },
    { week: "22-24", title: "Security", topics: "Hardening, firewalls, SELinux" },
    { week: "24-26", title: "DevOps & Cloud", topics: "Docker, Kubernetes, cloud CLI" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Master <span className="gradient-text">Linux Commands</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your complete guide to learning Linux commands through hands-on practice and real-world projects
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/commands">
              <Button size="lg" className="group">
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/practice">
              <Button size="lg" variant="outline">
                Practice Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all hover:shadow-glow group"
                >
                  <Icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            26-Week <span className="gradient-text">Learning Path</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningPath.map((phase, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-primary font-mono">Week {phase.week}</span>
                  <span className="text-xs text-muted-foreground">Phase {index + 1}</span>
                </div>
                <h3 className="font-semibold mb-1">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.topics}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Master Linux?</h2>
          <p className="text-muted-foreground mb-8">
            Start your journey today with practical exercises and real-world projects
          </p>
          <Link to="/commands">
            <Button size="lg" className="group">
              Explore Commands
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}