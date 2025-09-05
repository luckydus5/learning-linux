import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, Terminal, Book, Code, Target } from 'lucide-react';
import { linuxCommands, type Command, type PhaseCommands } from '@/data/commands';
import { Link } from 'react-router-dom';

export default function Commands() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhase, setSelectedPhase] = useState<string>('foundation');

  const currentPhase = linuxCommands.find(p => p.phaseId === selectedPhase) || linuxCommands[0];
  
  const filteredCommands = currentPhase.commands.filter(cmd =>
    cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cmd.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            Linux Command Reference
          </h1>
          <p className="text-lg text-muted-foreground">
            Master Linux commands with detailed explanations, examples, and hands-on practice
          </p>
        </div>

        {/* Phase Selection */}
        <div className="mb-6 flex flex-wrap gap-2">
          {linuxCommands.map(phase => (
            <Button
              key={phase.phaseId}
              variant={selectedPhase === phase.phaseId ? 'default' : 'outline'}
              onClick={() => setSelectedPhase(phase.phaseId)}
              className="mb-2"
            >
              {phase.phaseName}
            </Button>
          ))}
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search commands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <Tabs defaultValue="commands" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="commands">Commands</TabsTrigger>
            <TabsTrigger value="practice">Practice</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="commands" className="space-y-4">
            <ScrollArea className="h-[600px]">
              <div className="space-y-4">
                {filteredCommands.map((command, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-mono font-bold text-primary">{command.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{command.description}</p>
                      </div>
                      <Badge variant="outline">{currentPhase.phaseName}</Badge>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Syntax:</h4>
                      <code className="bg-muted px-2 py-1 rounded text-sm">{command.syntax}</code>
                    </div>

                    {command.options && command.options.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Options:</h4>
                        <div className="space-y-2">
                          {command.options.slice(0, 5).map((opt, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <code className="bg-muted px-2 py-1 rounded text-sm font-mono">{opt.flag}</code>
                              <span className="text-sm">{opt.description}</span>
                              {opt.example && (
                                <code className="bg-muted/50 px-2 py-1 rounded text-xs ml-auto">{opt.example}</code>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Examples:</h4>
                      <div className="space-y-2">
                        {command.examples.slice(0, 3).map((ex, i) => (
                          <div key={i} className="bg-muted/50 p-3 rounded">
                            <code className="text-sm font-mono text-primary">{ex.command}</code>
                            <p className="text-xs text-muted-foreground mt-1">{ex.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {command.tips && (
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Tips:</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground">
                          {command.tips.map((tip, i) => (
                            <li key={i}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {command.relatedCommands && (
                      <div className="flex gap-2 mt-4">
                        <span className="text-sm text-muted-foreground">Related:</span>
                        {command.relatedCommands.map((cmd, i) => (
                          <Badge key={i} variant="secondary">{cmd}</Badge>
                        ))}
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="practice" className="space-y-4">
            <div className="grid gap-4">
              {currentPhase.practices.map((practice, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold">{practice.title}</h3>
                    <Badge variant={
                      practice.difficulty === 'beginner' ? 'secondary' :
                      practice.difficulty === 'intermediate' ? 'default' : 'destructive'
                    }>
                      {practice.difficulty}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    {practice.tasks.map((task, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-primary font-bold">{i + 1}.</span>
                        <p className="text-sm">{task}</p>
                      </div>
                    ))}
                  </div>
                  <Button className="mt-4" variant="outline">
                    <Terminal className="mr-2 h-4 w-4" />
                    Try on Your System
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-4">
            <div className="grid gap-4">
              {currentPhase.projects.map((project, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Skills Required:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, i) => (
                        <Badge key={i} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Steps:</h4>
                    <ol className="list-decimal list-inside space-y-1">
                      {project.steps.map((step, i) => (
                        <li key={i} className="text-sm">{step}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="bg-muted p-3 rounded">
                    <p className="text-sm font-semibold mb-1">Expected Outcome:</p>
                    <p className="text-sm text-muted-foreground">{project.expectedOutcome}</p>
                  </div>

                  <Button className="mt-4" variant="default">
                    <Code className="mr-2 h-4 w-4" />
                    Start Project
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}