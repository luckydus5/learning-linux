import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Terminal, 
  Play, 
  Code, 
  Clock, 
  Users, 
  CheckCircle,
  AlertCircle,
  Search,
  Filter,
  Zap,
  Target,
  BookOpen
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface Lab {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: string;
  skills: string[];
  completed: boolean;
  popularity: number;
  scenario: string;
  objectives: string[];
}

const labs: Lab[] = [
  {
    id: "lab-001",
    title: "Linux Installation & Setup",
    description: "Install and configure multiple Linux distributions in virtual environments",
    category: "Foundation",
    difficulty: "beginner",
    duration: "45 min",
    skills: ["Installation", "VirtualBox", "Basic Configuration"],
    completed: false,
    popularity: 95,
    scenario: "Set up a development environment with Ubuntu, CentOS, and Debian",
    objectives: [
      "Install Ubuntu 22.04 LTS in VirtualBox",
      "Configure network settings",
      "Set up SSH access",
      "Install essential packages"
    ]
  },
  {
    id: "lab-002",
    title: "File System Deep Dive",
    description: "Master file system navigation, permissions, and management",
    category: "File System",
    difficulty: "beginner",
    duration: "30 min",
    skills: ["Navigation", "Permissions", "File Management"],
    completed: false,
    popularity: 88,
    scenario: "Organize a complex project directory structure with proper permissions",
    objectives: [
      "Create nested directory structures",
      "Set appropriate permissions for different user groups",
      "Create symbolic links",
      "Implement file archiving"
    ]
  },
  {
    id: "lab-003",
    title: "Process Management Mastery",
    description: "Monitor, control, and optimize system processes",
    category: "System",
    difficulty: "intermediate",
    duration: "60 min",
    skills: ["Process Control", "Performance", "Monitoring"],
    completed: false,
    popularity: 76,
    scenario: "Troubleshoot a slow server and optimize performance",
    objectives: [
      "Identify resource-hungry processes",
      "Manage process priorities",
      "Kill zombie processes",
      "Set up monitoring alerts"
    ]
  },
  {
    id: "lab-004",
    title: "Network Configuration & Troubleshooting",
    description: "Configure network interfaces and diagnose connectivity issues",
    category: "Networking",
    difficulty: "intermediate",
    duration: "90 min",
    skills: ["Networking", "Troubleshooting", "Security"],
    completed: false,
    popularity: 92,
    scenario: "Debug network issues in a multi-server environment",
    objectives: [
      "Configure static IP addresses",
      "Set up routing tables",
      "Troubleshoot DNS issues",
      "Configure firewall rules"
    ]
  },
  {
    id: "lab-005",
    title: "Shell Scripting Automation",
    description: "Build automation scripts for common administrative tasks",
    category: "Scripting",
    difficulty: "intermediate",
    duration: "120 min",
    skills: ["Bash", "Automation", "Scripting"],
    completed: false,
    popularity: 85,
    scenario: "Automate daily backup and maintenance tasks",
    objectives: [
      "Create backup automation script",
      "Implement error handling",
      "Schedule with cron",
      "Send email notifications"
    ]
  },
  {
    id: "lab-006",
    title: "Docker Container Deployment",
    description: "Deploy and manage containerized applications",
    category: "DevOps",
    difficulty: "advanced",
    duration: "90 min",
    skills: ["Docker", "Containers", "Deployment"],
    completed: false,
    popularity: 94,
    scenario: "Deploy a microservices application with Docker",
    objectives: [
      "Build custom Docker images",
      "Create docker-compose configurations",
      "Manage container networks",
      "Implement container orchestration"
    ]
  },
  {
    id: "lab-007",
    title: "Security Hardening Workshop",
    description: "Implement comprehensive security measures on Linux systems",
    category: "Security",
    difficulty: "advanced",
    duration: "120 min",
    skills: ["Security", "Hardening", "Compliance"],
    completed: false,
    popularity: 91,
    scenario: "Secure a production server against common vulnerabilities",
    objectives: [
      "Configure SELinux/AppArmor",
      "Set up intrusion detection",
      "Implement security policies",
      "Perform security audit"
    ]
  },
  {
    id: "lab-008",
    title: "Performance Tuning Lab",
    description: "Optimize system performance for high-load scenarios",
    category: "Performance",
    difficulty: "advanced",
    duration: "90 min",
    skills: ["Optimization", "Monitoring", "Tuning"],
    completed: false,
    popularity: 78,
    scenario: "Optimize a web server handling 10,000 concurrent connections",
    objectives: [
      "Tune kernel parameters",
      "Optimize memory usage",
      "Configure swap settings",
      "Implement caching strategies"
    ]
  }
];

const Labs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [completedLabs, setCompletedLabs] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState("browse");

  const categories = ["all", "Foundation", "File System", "System", "Networking", "Scripting", "DevOps", "Security", "Performance"];
  const difficulties = ["all", "beginner", "intermediate", "advanced"];

  const filteredLabs = labs.filter(lab => {
    const matchesSearch = lab.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lab.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || lab.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "all" || lab.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const startLab = (labId: string) => {
    toast.success("Lab environment starting...");
    // In a real implementation, this would launch the lab environment
  };

  const markComplete = (labId: string) => {
    setCompletedLabs(new Set([...completedLabs, labId]));
    toast.success("Lab marked as complete!");
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "text-green-500 border-green-500/30";
      case "intermediate": return "text-yellow-500 border-yellow-500/30";
      case "advanced": return "text-red-500 border-red-500/30";
      default: return "";
    }
  };

  const progress = (completedLabs.size / labs.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hands-On <span className="gradient-text">Linux Labs</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Practice real-world scenarios in our interactive lab environment
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4">
                <div className="text-2xl font-bold text-terminal-green">{labs.length}</div>
                <div className="text-sm text-muted-foreground">Total Labs</div>
              </Card>
              <Card className="p-4">
                <div className="text-2xl font-bold text-terminal-green">{completedLabs.size}</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </Card>
              <Card className="p-4">
                <div className="text-2xl font-bold text-terminal-green">{Math.round(progress)}%</div>
                <div className="text-sm text-muted-foreground">Progress</div>
              </Card>
              <Card className="p-4">
                <div className="text-2xl font-bold text-terminal-green">500+</div>
                <div className="text-sm text-muted-foreground">Hours Content</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="browse">Browse Labs</TabsTrigger>
              <TabsTrigger value="sandbox">Sandbox</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
            </TabsList>

            <TabsContent value="browse" className="space-y-6">
              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search labs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="flex gap-2">
                  <select
                    className="px-4 py-2 rounded-md bg-card border border-border text-sm"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  
                  <select
                    className="px-4 py-2 rounded-md bg-card border border-border text-sm"
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                  >
                    {difficulties.map(diff => (
                      <option key={diff} value={diff}>{diff}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Labs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLabs.map((lab) => {
                  const isCompleted = completedLabs.has(lab.id);
                  
                  return (
                    <Card key={lab.id} className={cn(
                      "p-6 hover:shadow-hover transition-all",
                      isCompleted && "border-terminal-green/50"
                    )}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Terminal className="h-5 w-5 text-terminal-green" />
                          <Badge variant="outline" className={getDifficultyColor(lab.difficulty)}>
                            {lab.difficulty}
                          </Badge>
                        </div>
                        {isCompleted && (
                          <CheckCircle className="h-5 w-5 text-terminal-green fill-current" />
                        )}
                      </div>

                      <h3 className="text-lg font-bold mb-2">{lab.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{lab.description}</p>

                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {lab.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {lab.popularity}% popular
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {lab.skills.map(skill => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button
                          variant="terminal"
                          size="sm"
                          className="flex-1"
                          onClick={() => startLab(lab.id)}
                        >
                          <Play className="mr-2 h-3 w-3" />
                          Start Lab
                        </Button>
                        {!isCompleted && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => markComplete(lab.id)}
                          >
                            <CheckCircle className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="sandbox" className="space-y-6">
              <Card className="p-8 text-center max-w-2xl mx-auto">
                <Terminal className="h-16 w-16 text-terminal-green mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Linux Sandbox Environment</h2>
                <p className="text-muted-foreground mb-6">
                  Practice Linux commands in a safe, isolated environment with no risk to your system
                </p>
                <Button variant="terminal" size="lg">
                  <Zap className="mr-2 h-5 w-5" />
                  Launch Sandbox
                </Button>
              </Card>
            </TabsContent>

            <TabsContent value="challenges" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Weekly Challenges</h2>
                <p className="text-muted-foreground">Test your skills with time-based challenges</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card className="p-6 gradient-border">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="h-6 w-6 text-terminal-green" />
                    <h3 className="text-lg font-bold">This Week's Challenge</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Build a monitoring script that tracks system resources and sends alerts
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-terminal-green">
                      Prize: Certificate
                    </Badge>
                    <Button variant="glow" size="sm">
                      Join Challenge
                    </Button>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="h-6 w-6 text-terminal-cyan" />
                    <h3 className="text-lg font-bold">Past Challenges</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Review solutions and learn from previous weekly challenges
                  </p>
                  <Button variant="outline" size="sm">
                    <BookOpen className="mr-2 h-3 w-3" />
                    View Archive
                  </Button>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Labs;