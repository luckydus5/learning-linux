import { curriculum } from "@/data/curriculum";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { 
  Clock, 
  BookOpen, 
  Code, 
  Target, 
  CheckCircle,
  Download,
  FileText,
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Curriculum = () => {
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());

  const toggleTopic = (topicId: string) => {
    const newCompleted = new Set(completedTopics);
    if (newCompleted.has(topicId)) {
      newCompleted.delete(topicId);
    } else {
      newCompleted.add(topicId);
    }
    setCompletedTopics(newCompleted);
  };

  const totalTopics = curriculum.reduce((acc, phase) => acc + phase.topics.length, 0);
  const progressPercentage = (completedTopics.size / totalTopics) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Complete <span className="gradient-text">Linux Mastery</span> Curriculum
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              26-week comprehensive program from beginner to expert
            </p>
            
            {/* Overall Progress */}
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Course Progress</span>
                <span className="text-sm font-mono text-terminal-green">
                  {completedTopics.size}/{totalTopics} Topics
                </span>
              </div>
              <Progress value={progressPercentage} className="h-4" />
              <p className="text-xs text-muted-foreground mt-2">
                {Math.round(progressPercentage)}% Complete
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-terminal-green">12</div>
                <div className="text-sm text-muted-foreground">Phases</div>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-terminal-green">26</div>
                <div className="text-sm text-muted-foreground">Weeks</div>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-terminal-green">500+</div>
                <div className="text-sm text-muted-foreground">Labs</div>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-terminal-green">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Phases */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-8">
            {curriculum.map((phase, phaseIndex) => (
              <Card 
                key={phase.id}
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  expandedPhase === phase.id && "ring-2 ring-terminal-green shadow-glow"
                )}
              >
                {/* Phase Header */}
                <div 
                  className="p-6 cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-background font-bold text-lg">
                          {phaseIndex + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold">{phase.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {phase.duration}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{phase.description}</p>
                        
                        {/* Quick Stats */}
                        <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4" />
                            {phase.topics.length} Topics
                          </span>
                          <span className="flex items-center gap-1">
                            <Code className="h-4 w-4" />
                            {phase.labs.length} Labs
                          </span>
                          <span className="flex items-center gap-1">
                            <Target className="h-4 w-4" />
                            {phase.projects.length} Projects
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-3xl">{phase.icon}</div>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedPhase === phase.id && (
                  <div className="border-t border-border">
                    <Tabs defaultValue="topics" className="p-6">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="topics">Topics</TabsTrigger>
                        <TabsTrigger value="labs">Labs</TabsTrigger>
                        <TabsTrigger value="projects">Projects</TabsTrigger>
                        <TabsTrigger value="assessment">Assessment</TabsTrigger>
                      </TabsList>

                      <TabsContent value="topics" className="mt-6 space-y-3">
                        <h4 className="font-semibold mb-4">Topics Covered</h4>
                        {phase.topics.map((topic, index) => {
                          const topicId = `${phase.id}-topic-${index}`;
                          const isCompleted = completedTopics.has(topicId);
                          
                          return (
                            <div
                              key={index}
                              className={cn(
                                "flex items-center justify-between p-3 rounded-lg border transition-all",
                                isCompleted ? "bg-terminal-green/10 border-terminal-green/30" : "border-border hover:bg-muted/50"
                              )}
                            >
                              <div className="flex items-center gap-3">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleTopic(topicId);
                                  }}
                                >
                                  <CheckCircle className={cn(
                                    "h-4 w-4",
                                    isCompleted && "text-terminal-green fill-current"
                                  )} />
                                </Button>
                                <span className={cn(
                                  "text-sm",
                                  isCompleted && "line-through text-muted-foreground"
                                )}>
                                  {topic}
                                </span>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                Module {index + 1}
                              </Badge>
                            </div>
                          );
                        })}
                      </TabsContent>

                      <TabsContent value="labs" className="mt-6 space-y-3">
                        <h4 className="font-semibold mb-4">Hands-On Labs</h4>
                        {phase.labs.map((lab, index) => (
                          <div key={index} className="p-4 rounded-lg border border-border hover:border-terminal-green/50 transition-colors">
                            <div className="flex items-start justify-between">
                              <div className="flex items-start gap-3">
                                <Code className="h-5 w-5 text-terminal-green mt-0.5" />
                                <div>
                                  <p className="font-medium">{lab}</p>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    Estimated time: 30-45 minutes
                                  </p>
                                </div>
                              </div>
                              <Button variant="outline" size="sm">
                                Start Lab
                                <ArrowRight className="ml-2 h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </TabsContent>

                      <TabsContent value="projects" className="mt-6 space-y-3">
                        <h4 className="font-semibold mb-4">Real-World Projects</h4>
                        {phase.projects.map((project, index) => (
                          <div key={index} className="p-4 rounded-lg border border-border hover:border-terminal-green/50 transition-colors">
                            <div className="flex items-start justify-between">
                              <div className="flex items-start gap-3">
                                <Target className="h-5 w-5 text-terminal-green mt-0.5" />
                                <div>
                                  <p className="font-medium">{project}</p>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    Project difficulty: Intermediate
                                  </p>
                                </div>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                2-3 hours
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </TabsContent>

                      <TabsContent value="assessment" className="mt-6 space-y-3">
                        <h4 className="font-semibold mb-4">Assessment & Validation</h4>
                        {phase.assessments.map((assessment, index) => (
                          <div key={index} className="p-4 rounded-lg border border-border">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <FileText className="h-5 w-5 text-terminal-green" />
                                <span className="font-medium">{assessment}</span>
                              </div>
                              <Button variant="glow" size="sm">
                                Take Assessment
                              </Button>
                            </div>
                          </div>
                        ))}
                      </TabsContent>
                    </Tabs>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Download Resources */}
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <Card className="p-8 gradient-border">
              <Download className="h-12 w-12 text-terminal-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Download Complete Curriculum</h3>
              <p className="text-muted-foreground mb-6">
                Get the full curriculum as a PDF with all exercises, labs, and reference materials
              </p>
              <Button variant="terminal" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download PDF (12MB)
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Curriculum;