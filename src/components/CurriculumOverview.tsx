import { curriculum } from "@/data/curriculum";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, BookOpen, CheckCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const CurriculumOverview = () => {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);
  const [completedPhases, setCompletedPhases] = useState<Set<string>>(new Set());

  const togglePhaseCompletion = (phaseId: string) => {
    const newCompleted = new Set(completedPhases);
    if (newCompleted.has(phaseId)) {
      newCompleted.delete(phaseId);
    } else {
      newCompleted.add(phaseId);
    }
    setCompletedPhases(newCompleted);
  };

  const progressPercentage = (completedPhases.size / curriculum.length) * 100;

  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Structured <span className="gradient-text">Learning Path</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow our comprehensive curriculum designed to take you from Linux basics to expert-level administration
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Overall Progress</span>
            <span className="text-sm font-mono text-terminal-green">
              {completedPhases.size}/{curriculum.length} Phases
            </span>
          </div>
          <Progress value={progressPercentage} className="h-3" />
        </div>

        {/* Curriculum Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curriculum.map((phase, index) => {
            const isCompleted = completedPhases.has(phase.id);
            const isSelected = selectedPhase === phase.id;
            
            return (
              <Card
                key={phase.id}
                className={cn(
                  "relative overflow-hidden transition-all duration-300 hover:shadow-hover cursor-pointer",
                  isSelected && "ring-2 ring-terminal-green shadow-glow",
                  isCompleted && "border-terminal-green/50"
                )}
                onClick={() => setSelectedPhase(isSelected ? null : phase.id)}
              >
                {/* Phase Number */}
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-background font-bold">
                  {index + 1}
                </div>

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{phase.icon}</div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePhaseCompletion(phase.id);
                      }}
                      className={cn(
                        "h-8 w-8",
                        isCompleted && "text-terminal-green"
                      )}
                    >
                      <CheckCircle className={cn(
                        "h-5 w-5",
                        isCompleted && "fill-current"
                      )} />
                    </Button>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Clock className="h-4 w-4" />
                    <span>{phase.duration}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{phase.description}</p>

                  {/* Expanded Content */}
                  {isSelected && (
                    <div className="space-y-4 pt-4 border-t border-border animate-in slide-in-from-top-2">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-terminal-green" />
                          Topics Covered
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {phase.topics.slice(0, 3).map((topic, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-terminal-green mr-2">▸</span>
                              {topic}
                            </li>
                          ))}
                          {phase.topics.length > 3 && (
                            <li className="text-terminal-green">
                              +{phase.topics.length - 3} more topics
                            </li>
                          )}
                        </ul>
                      </div>

                      <Link to={`/phase/${phase.id}`}>
                        <Button variant="glow" size="sm" className="w-full group">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Completion Indicator */}
                {isCompleted && (
                  <div className="absolute inset-0 bg-gradient-to-t from-terminal-green/10 to-transparent pointer-events-none" />
                )}
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link to="/curriculum">
            <Button variant="terminal" size="lg" className="group">
              Explore Full Curriculum
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CurriculumOverview;