import { useState } from "react";
import { Search, Copy, Check, ChevronRight, Terminal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { commands, categories } from "@/data/linuxCommands";

export default function Commands() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedCommand, setExpandedCommand] = useState<string | null>(null);
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const filteredCommands = commands.filter((cmd) => {
    const matchesSearch =
      cmd.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || cmd.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyToClipboard = (text: string, commandName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(commandName);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Linux <span className="gradient-text">Command Reference</span>
        </h1>
        <p className="text-muted-foreground">
          Master {commands.length}+ essential Linux commands with detailed explanations
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search commands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {filteredCommands.map((command) => (
          <Card
            key={command.name}
            className="p-6 hover:border-primary/50 transition-all cursor-pointer"
            onClick={() => setExpandedCommand(expandedCommand === command.name ? null : command.name)}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-mono font-bold text-primary">{command.name}</h3>
                  <Badge variant="outline">{command.difficulty}</Badge>
                </div>
                <p className="text-muted-foreground">{command.description}</p>
                <code className="block mt-2 p-2 bg-muted rounded text-sm font-mono">
                  {command.syntax}
                </code>
              </div>
              <ChevronRight
                className={`h-5 w-5 text-muted-foreground transition-transform ${
                  expandedCommand === command.name ? "rotate-90" : ""
                }`}
              />
            </div>

            {expandedCommand === command.name && (
              <div className="mt-4 space-y-4 border-t pt-4">
                <Tabs defaultValue="examples" className="w-full">
                  <TabsList>
                    <TabsTrigger value="examples">Examples</TabsTrigger>
                    <TabsTrigger value="practice">Practice</TabsTrigger>
                  </TabsList>

                  <TabsContent value="examples" className="mt-4">
                    <div className="space-y-3">
                      {command.examples.map((example, idx) => (
                        <div key={idx} className="p-3 bg-muted rounded">
                          <div className="flex items-start justify-between gap-2">
                            <code className="font-mono text-sm text-primary">
                              $ {example.command}
                            </code>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={(e) => {
                                e.stopPropagation();
                                copyToClipboard(example.command, `${command.name}-${idx}`);
                              }}
                            >
                              {copiedCommand === `${command.name}-${idx}` ? (
                                <Check className="h-3 w-3" />
                              ) : (
                                <Copy className="h-3 w-3" />
                              )}
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground">{example.description}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="practice" className="mt-4">
                    <div className="space-y-2">
                      {command.practiceExercises.map((exercise, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Terminal className="h-4 w-4 text-primary mt-0.5" />
                          <p className="text-sm">{exercise}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}