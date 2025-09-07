import { useState } from "react";
import { Play, CheckCircle, XCircle, RefreshCw, BookOpen, Code, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { practiceProjects, commands } from "@/data/linuxCommands";

export default function Practice() {
  const [selectedProject, setSelectedProject] = useState(practiceProjects[0]);
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [userNotes, setUserNotes] = useState("");

  // Generate random practice exercises
  const getRandomExercises = (count: number) => {
    const allExercises = commands.flatMap(cmd => 
      cmd.practiceExercises.map(ex => ({
        command: cmd.name,
        exercise: ex,
        difficulty: cmd.difficulty,
        category: cmd.category,
      }))
    );
    return allExercises.sort(() => Math.random() - 0.5).slice(0, count);
  };

  const [dailyExercises] = useState(getRandomExercises(10));

  const toggleTaskComplete = (taskId: string) => {
    const newCompleted = new Set(completedTasks);
    if (newCompleted.has(taskId)) {
      newCompleted.delete(taskId);
    } else {
      newCompleted.add(taskId);
    }
    setCompletedTasks(newCompleted);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "intermediate":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "advanced":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Practice <span className="gradient-text">Linux Commands</span>
        </h1>
        <p className="text-muted-foreground">
          Hands-on exercises and real-world projects to master Linux
        </p>
      </div>

      <Tabs defaultValue="daily" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="daily">Daily Practice</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
        </TabsList>

        {/* Daily Practice */}
        <TabsContent value="daily" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Today's Exercises</h2>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                New Set
              </Button>
            </div>
            <p className="text-muted-foreground mb-6">
              Complete these exercises on your Linux system and check them off as you go
            </p>

            <div className="space-y-3">
              {dailyExercises.map((exercise, idx) => (
                <div
                  key={idx}
                  className="p-4 border rounded-lg hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <Button
                      size="sm"
                      variant={completedTasks.has(`daily-${idx}`) ? "default" : "outline"}
                      className="mt-1"
                      onClick={() => toggleTaskComplete(`daily-${idx}`)}
                    >
                      {completedTasks.has(`daily-${idx}`) ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <div className="h-4 w-4 rounded-full border-2" />
                      )}
                    </Button>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <code className="font-mono text-primary">{exercise.command}</code>
                        <Badge className={getDifficultyColor(exercise.difficulty)} variant="outline">
                          {exercise.difficulty}
                        </Badge>
                      </div>
                      <p className="text-sm">{exercise.exercise}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm font-semibold mb-2">Progress</p>
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-background rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{
                      width: `${(completedTasks.size / dailyExercises.length) * 100}%`,
                    }}
                  />
                </div>
                <span className="text-sm font-mono">
                  {completedTasks.size}/{dailyExercises.length}
                </span>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Projects */}
        <TabsContent value="projects" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Project List */}
            <div className="space-y-3">
              <h3 className="font-semibold mb-3">Available Projects</h3>
              {practiceProjects.map((project) => (
                <Card
                  key={project.title}
                  className={`p-4 cursor-pointer transition-all ${
                    selectedProject.title === project.title
                      ? "border-primary bg-primary/5"
                      : "hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <h4 className="font-semibold mb-1">{project.title}</h4>
                  <Badge className={getDifficultyColor(project.difficulty)} variant="outline">
                    {project.difficulty}
                  </Badge>
                </Card>
              ))}
            </div>

            {/* Project Details */}
            <div className="md:col-span-2">
              <Card className="p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl font-semibold">{selectedProject.title}</h2>
                    <Badge className={getDifficultyColor(selectedProject.difficulty)} variant="outline">
                      {selectedProject.difficulty}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>

                <div className="space-y-6">
                  {/* Tasks */}
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Tasks to Complete
                    </h3>
                    <div className="space-y-2">
                      {selectedProject.tasks.map((task, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Button
                            size="sm"
                            variant={completedTasks.has(`${selectedProject.title}-${idx}`) ? "default" : "outline"}
                            onClick={() => toggleTaskComplete(`${selectedProject.title}-${idx}`)}
                          >
                            {completedTasks.has(`${selectedProject.title}-${idx}`) ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : (
                              <div className="h-4 w-4 rounded-full border-2" />
                            )}
                          </Button>
                          <p className="text-sm">{task}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Required Commands */}
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      Commands You'll Use
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.commands.map((cmd) => (
                        <Badge key={cmd} variant="outline">
                          {cmd}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <h3 className="font-semibold mb-3">Your Notes</h3>
                    <Textarea
                      placeholder="Keep track of your solution, commands used, and lessons learned..."
                      value={userNotes}
                      onChange={(e) => setUserNotes(e.target.value)}
                      className="min-h-[150px] font-mono text-sm"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Challenges */}
        <TabsContent value="challenges" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="h-8 w-8 text-primary" />
              <div>
                <h2 className="text-2xl font-semibold">Linux Challenges</h2>
                <p className="text-muted-foreground">Test your skills with these scenarios</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "System Rescue",
                  scenario: "Your system won't boot. Use recovery mode to fix the boot loader.",
                  skills: ["GRUB", "Boot process", "Recovery mode"],
                  difficulty: "advanced",
                },
                {
                  title: "Performance Crisis",
                  scenario: "Server is running slow. Identify and fix the bottleneck.",
                  skills: ["top", "iostat", "vmstat", "Process management"],
                  difficulty: "intermediate",
                },
                {
                  title: "Security Breach",
                  scenario: "Suspicious activity detected. Investigate and secure the system.",
                  skills: ["Log analysis", "netstat", "Process inspection", "Firewall"],
                  difficulty: "advanced",
                },
                {
                  title: "Disk Full",
                  scenario: "Root partition is full. Find and clean up space without breaking the system.",
                  skills: ["du", "df", "find", "Log rotation"],
                  difficulty: "intermediate",
                },
                {
                  title: "Network Down",
                  scenario: "Can't connect to network. Troubleshoot and restore connectivity.",
                  skills: ["ip", "ping", "DNS", "Network configuration"],
                  difficulty: "intermediate",
                },
              ].map((challenge, idx) => (
                <Card key={idx} className="p-4 border-l-4 border-l-primary">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{challenge.title}</h3>
                    <Badge className={getDifficultyColor(challenge.difficulty)} variant="outline">
                      {challenge.difficulty}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{challenge.scenario}</p>
                  <div className="flex flex-wrap gap-1">
                    {challenge.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}