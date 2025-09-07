import { useState } from "react";
import { Trophy, Target, TrendingUp, Award, Calendar, Clock, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories, commands } from "@/data/linuxCommands";

export default function Progress() {
  // Mock progress data - in a real app, this would be persisted
  const [learnedCommands] = useState(new Set(["pwd", "ls", "cd", "mkdir", "cp", "mv", "cat", "grep"]));
  const [completedExercises] = useState(42);
  const [totalExercises] = useState(200);
  const [streak] = useState(7);
  const [totalTime] = useState(1250); // minutes

  const getCategoryProgress = (categoryId: string) => {
    const categoryCommands = commands.filter(cmd => cmd.category === categoryId);
    const learned = categoryCommands.filter(cmd => learnedCommands.has(cmd.name)).length;
    return {
      learned,
      total: categoryCommands.length,
      percentage: Math.round((learned / categoryCommands.length) * 100),
    };
  };

  const achievements = [
    { name: "First Command", description: "Run your first Linux command", earned: true, icon: "🎯" },
    { name: "File Master", description: "Complete all file operation exercises", earned: true, icon: "📁" },
    { name: "Week Warrior", description: "Practice for 7 days straight", earned: true, icon: "🔥" },
    { name: "Permission Pro", description: "Master file permissions", earned: false, icon: "🔐" },
    { name: "Script Wizard", description: "Write 10 bash scripts", earned: false, icon: "🧙" },
    { name: "Network Ninja", description: "Complete all networking challenges", earned: false, icon: "🥷" },
    { name: "System Admin", description: "Complete the full curriculum", earned: false, icon: "👨‍💼" },
    { name: "Linux Master", description: "Learn all 200+ commands", earned: false, icon: "👑" },
  ];

  const weeklyStats = [
    { day: "Mon", commands: 5, exercises: 8 },
    { day: "Tue", commands: 3, exercises: 6 },
    { day: "Wed", commands: 7, exercises: 10 },
    { day: "Thu", commands: 4, exercises: 5 },
    { day: "Fri", commands: 6, exercises: 9 },
    { day: "Sat", commands: 8, exercises: 12 },
    { day: "Sun", commands: 5, exercises: 7 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Your <span className="gradient-text">Learning Progress</span>
        </h1>
        <p className="text-muted-foreground">
          Track your Linux mastery journey and celebrate achievements
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <Trophy className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">{learnedCommands.size}</span>
          </div>
          <p className="text-sm text-muted-foreground">Commands Learned</p>
          <ProgressBar value={(learnedCommands.size / commands.length) * 100} className="mt-2" />
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <Target className="h-8 w-8 text-secondary" />
            <span className="text-2xl font-bold">{completedExercises}</span>
          </div>
          <p className="text-sm text-muted-foreground">Exercises Completed</p>
          <ProgressBar value={(completedExercises / totalExercises) * 100} className="mt-2" />
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <Calendar className="h-8 w-8 text-green-500" />
            <span className="text-2xl font-bold">{streak}</span>
          </div>
          <p className="text-sm text-muted-foreground">Day Streak 🔥</p>
          <div className="flex gap-1 mt-2">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded ${
                  i < streak ? "bg-green-500" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <Clock className="h-8 w-8 text-purple-500" />
            <span className="text-2xl font-bold">{Math.round(totalTime / 60)}h</span>
          </div>
          <p className="text-sm text-muted-foreground">Total Practice Time</p>
          <p className="text-xs text-muted-foreground mt-2">{totalTime} minutes</p>
        </Card>
      </div>

      <Tabs defaultValue="categories" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="statistics">Statistics</TabsTrigger>
        </TabsList>

        {/* Category Progress */}
        <TabsContent value="categories" className="space-y-4">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Progress by Category</h2>
            <div className="space-y-4">
              {categories.map((category) => {
                const progress = getCategoryProgress(category.id);
                return (
                  <div key={category.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{category.icon}</span>
                        <span className="font-medium">{category.name}</span>
                        <Badge variant="outline" className="text-xs">
                          Week {category.weeks}
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {progress.learned}/{progress.total} commands
                      </span>
                    </div>
                    <ProgressBar value={progress.percentage} className="h-2" />
                  </div>
                );
              })}
            </div>
          </Card>
        </TabsContent>

        {/* Achievements */}
        <TabsContent value="achievements" className="space-y-4">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.name}
                  className={`p-4 rounded-lg border ${
                    achievement.earned
                      ? "border-primary bg-primary/5"
                      : "border-border bg-muted/20 opacity-60"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{achievement.name}</h3>
                        {achievement.earned && (
                          <CheckCircle className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Statistics */}
        <TabsContent value="statistics" className="space-y-4">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Weekly Activity</h2>
            <div className="space-y-4">
              {weeklyStats.map((stat) => (
                <div key={stat.day} className="flex items-center gap-4">
                  <span className="w-12 text-sm font-medium">{stat.day}</span>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground w-20">Commands:</span>
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${(stat.commands / 10) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono w-8">{stat.commands}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground w-20">Exercises:</span>
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div
                          className="bg-secondary h-2 rounded-full"
                          style={{ width: `${(stat.exercises / 15) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono w-8">{stat.exercises}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">This Week</p>
                  <p className="text-xl font-bold">38 commands</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Best Day</p>
                  <p className="text-xl font-bold">Saturday</p>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}