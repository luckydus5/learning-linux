import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Terminal, CheckCircle, XCircle, RefreshCw, Play, BookOpen, Target } from "lucide-react";
import { toast } from "sonner";

interface Exercise {
  id: string;
  title: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  category: string;
  description: string;
  objective: string;
  tasks: string[];
  hints: string[];
  solution: string;
  validation: string;
}

const exercises: Exercise[] = [
  {
    id: "file-nav-1",
    title: "File System Navigation Challenge",
    difficulty: "beginner",
    category: "File System",
    description: "Practice navigating the Linux file system using basic commands",
    objective: "Navigate to specific directories and list their contents",
    tasks: [
      "Navigate to the /var/log directory",
      "List all files including hidden ones",
      "Find the size of each file in human-readable format",
      "Return to your home directory using the shortest command"
    ],
    hints: [
      "Use 'cd' to change directories",
      "The -a flag shows hidden files",
      "The -h flag makes sizes human-readable"
    ],
    solution: "cd /var/log\nls -lah\ncd ~",
    validation: "Check if user is in home directory and has viewed /var/log"
  },
  {
    id: "process-mgmt-1",
    title: "Process Management Basics",
    difficulty: "intermediate",
    category: "Process Management",
    description: "Learn to view and manage running processes",
    objective: "Monitor and control system processes effectively",
    tasks: [
      "View all running processes with full details",
      "Find all processes owned by your user",
      "Identify the top 5 CPU-consuming processes",
      "Kill a specific process by name"
    ],
    hints: [
      "ps aux shows all processes",
      "grep can filter by username",
      "top or htop can show CPU usage",
      "killall or pkill can kill by name"
    ],
    solution: "ps aux\nps -u $USER\ntop -b -n 1 | head -12\npkill process_name",
    validation: "Verify process listing and termination"
  },
  {
    id: "scripting-1",
    title: "Bash Script Automation",
    difficulty: "advanced",
    category: "Shell Scripting",
    description: "Create a bash script to automate system tasks",
    objective: "Write a script that performs system monitoring and logging",
    tasks: [
      "Create a script that checks disk usage",
      "Log the output to a file with timestamp",
      "Send an alert if usage exceeds 80%",
      "Schedule the script to run every hour"
    ],
    hints: [
      "Use df command for disk usage",
      "date command provides timestamps",
      "if statements can check conditions",
      "crontab -e for scheduling"
    ],
    solution: `#!/bin/bash
THRESHOLD=80
USAGE=$(df / | grep / | awk '{print $5}' | sed 's/%//')
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

echo "$TIMESTAMP - Disk usage: $USAGE%" >> /var/log/disk_monitor.log

if [ $USAGE -gt $THRESHOLD ]; then
    echo "Alert: Disk usage is $USAGE%"
fi`,
    validation: "Script creates log file and checks threshold"
  }
];

const LabExercise = () => {
  const [selectedExercise, setSelectedExercise] = useState<Exercise>(exercises[0]);
  const [userInput, setUserInput] = useState("");
  const [showSolution, setShowSolution] = useState(false);
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());

  const handleRunExercise = () => {
    // Simulate exercise execution
    toast.success("Exercise executed! Check the output below.");
    // In a real implementation, this would execute commands in a sandboxed environment
  };

  const handleValidate = () => {
    // Simulate validation
    const isCorrect = Math.random() > 0.3; // Mock validation
    if (isCorrect) {
      toast.success("Correct! Well done!");
      setCompletedExercises(new Set([...completedExercises, selectedExercise.id]));
    } else {
      toast.error("Not quite right. Check the hints and try again!");
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "text-green-500";
      case "intermediate": return "text-yellow-500";
      case "advanced": return "text-red-500";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Interactive <span className="gradient-text">Lab Exercises</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practice real Linux commands in a safe environment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Exercise List */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold mb-4">Available Exercises</h3>
            {exercises.map((exercise) => (
              <Card
                key={exercise.id}
                className={`p-4 cursor-pointer transition-all hover:shadow-hover ${
                  selectedExercise.id === exercise.id ? "ring-2 ring-terminal-green" : ""
                }`}
                onClick={() => {
                  setSelectedExercise(exercise);
                  setShowSolution(false);
                  setUserInput("");
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold">{exercise.title}</h4>
                  {completedExercises.has(exercise.id) && (
                    <CheckCircle className="h-5 w-5 text-terminal-green" />
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {exercise.category}
                  </Badge>
                  <span className={`text-xs ${getDifficultyColor(exercise.difficulty)}`}>
                    {exercise.difficulty}
                  </span>
                </div>
              </Card>
            ))}
          </div>

          {/* Exercise Content */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedExercise.title}</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{selectedExercise.category}</Badge>
                    <span className={`text-sm ${getDifficultyColor(selectedExercise.difficulty)}`}>
                      {selectedExercise.difficulty}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={() => setUserInput("")}>
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="exercise" className="space-y-4">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="exercise">Exercise</TabsTrigger>
                  <TabsTrigger value="hints">Hints</TabsTrigger>
                  <TabsTrigger value="terminal">Terminal</TabsTrigger>
                  <TabsTrigger value="solution">Solution</TabsTrigger>
                </TabsList>

                <TabsContent value="exercise" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-5 w-5 text-terminal-green" />
                        <h4 className="font-semibold">Description</h4>
                      </div>
                      <p className="text-muted-foreground">{selectedExercise.description}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="h-5 w-5 text-terminal-green" />
                        <h4 className="font-semibold">Objective</h4>
                      </div>
                      <p className="text-muted-foreground">{selectedExercise.objective}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Tasks</h4>
                      <ul className="space-y-2">
                        {selectedExercise.tasks.map((task, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-terminal-green mr-2">{index + 1}.</span>
                            <span className="text-muted-foreground">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="hints" className="space-y-4">
                  <h4 className="font-semibold mb-4">Helpful Hints</h4>
                  <ul className="space-y-3">
                    {selectedExercise.hints.map((hint, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-terminal-green mr-2">💡</span>
                        <span className="text-muted-foreground">{hint}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="terminal" className="space-y-4">
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <Terminal className="h-4 w-4 text-terminal-green" />
                      <span className="text-terminal-green">Linux Terminal</span>
                    </div>
                    <textarea
                      className="w-full h-64 bg-transparent text-terminal-green outline-none resize-none"
                      placeholder="$ Enter your commands here..."
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      spellCheck={false}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="terminal" onClick={handleRunExercise}>
                      <Play className="mr-2 h-4 w-4" />
                      Run Commands
                    </Button>
                    <Button variant="glow" onClick={handleValidate}>
                      Validate Solution
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="solution" className="space-y-4">
                  {!showSolution ? (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground mb-4">
                        Try to solve the exercise first!
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setShowSolution(true)}
                      >
                        Show Solution
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <h4 className="font-semibold mb-4">Solution</h4>
                      <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                        <pre className="text-terminal-green">{selectedExercise.solution}</pre>
                      </div>
                      <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>Validation:</strong> {selectedExercise.validation}
                        </p>
                      </div>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabExercise;