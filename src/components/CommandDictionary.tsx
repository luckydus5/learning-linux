import { useState, useMemo } from 'react';
import { Search, Terminal, Copy, Check, Filter, BookOpen, Shield, Clock, ChevronRight, Hash, User, Network, Package, Lock, Archive, Activity, Cloud, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { commands, commandCategories, type Command } from '@/data/commandDictionary';
import { toast } from '@/components/ui/use-toast';

const categoryIcons: Record<string, any> = {
  'File Management': BookOpen,
  'Directory Navigation': ChevronRight,
  'Text Processing': Hash,
  'Process Management': Activity,
  'User Management': User,
  'Network': Network,
  'System Information': AlertCircle,
  'Package Management': Package,
  'Permissions': Lock,
  'Security': Shield,
  'Shell Features': Terminal,
  'Archive & Compression': Archive,
  'System Monitoring': Activity,
  'Cybersecurity': Shield,
  'DevOps': Cloud,
};

const difficultyColors = {
  beginner: 'bg-green-500/10 text-green-700 dark:text-green-400',
  intermediate: 'bg-blue-500/10 text-blue-700 dark:text-blue-400',
  advanced: 'bg-orange-500/10 text-orange-700 dark:text-orange-400',
  expert: 'bg-red-500/10 text-red-700 dark:text-red-400',
};

export function CommandDictionary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredCommands = useMemo(() => {
    return commands.filter(cmd => {
      const matchesSearch = !searchQuery || 
        cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cmd.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cmd.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || cmd.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'all' || cmd.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  const commandsByCategory = useMemo(() => {
    const grouped: Record<string, Command[]> = {};
    filteredCommands.forEach(cmd => {
      if (!grouped[cmd.category]) {
        grouped[cmd.category] = [];
      }
      grouped[cmd.category].push(cmd);
    });
    return grouped;
  }, [filteredCommands]);

  const copyToClipboard = async (text: string, commandName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCommand(commandName);
      toast({
        title: 'Copied!',
        description: `Command "${text}" copied to clipboard`,
      });
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to copy to clipboard',
        variant: 'destructive',
      });
    }
  };

  const CommandCard = ({ command }: { command: Command }) => (
    <Card className="h-full hover:shadow-lg transition-all duration-200">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-primary" />
            <CardTitle className="text-xl font-mono">{command.name}</CardTitle>
          </div>
          <Badge className={difficultyColors[command.difficulty]}>
            {command.difficulty}
          </Badge>
        </div>
        <CardDescription>{command.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold mb-1">Syntax:</h4>
          <code className="text-xs bg-muted p-2 rounded block">{command.syntax}</code>
        </div>

        {command.options && command.options.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold mb-2">Common Options:</h4>
            <div className="space-y-1">
              {command.options.slice(0, 3).map((opt, idx) => (
                <div key={idx} className="flex gap-2 text-xs">
                  <code className="bg-muted px-2 py-0.5 rounded font-mono">{opt.flag}</code>
                  <span className="text-muted-foreground">{opt.description}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h4 className="text-sm font-semibold mb-2">Examples:</h4>
          <div className="space-y-1">
            {command.examples.slice(0, 2).map((example, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <code className="text-xs bg-muted p-1 rounded flex-1 font-mono">
                  {example}
                </code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0"
                  onClick={() => copyToClipboard(example, `${command.name}-${idx}`)}
                >
                  {copiedCommand === `${command.name}-${idx}` ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t">
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold">Use Case:</span> {command.useCase}
          </p>
        </div>

        {command.relatedCommands && command.relatedCommands.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {command.relatedCommands.map((related, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {related}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto py-8 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          <Terminal className="h-10 w-10 text-primary" />
          Linux Command Dictionary
        </h1>
        <p className="text-muted-foreground text-lg">
          Complete reference with {commands.length}+ commands from beginner to expert
        </p>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search commands, descriptions, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {commandCategories.map(cat => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
                <SelectItem value="expert">Expert</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>{filteredCommands.length} commands found</span>
            </div>
            <div className="flex gap-2">
              <Badge className={difficultyColors.beginner}>
                {commands.filter(c => c.difficulty === 'beginner').length} Beginner
              </Badge>
              <Badge className={difficultyColors.intermediate}>
                {commands.filter(c => c.difficulty === 'intermediate').length} Intermediate
              </Badge>
              <Badge className={difficultyColors.advanced}>
                {commands.filter(c => c.difficulty === 'advanced').length} Advanced
              </Badge>
              <Badge className={difficultyColors.expert}>
                {commands.filter(c => c.difficulty === 'expert').length} Expert
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Commands Display */}
      {viewMode === 'grid' ? (
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-4 lg:grid-cols-8 gap-1 h-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="beginner">Beginner</TabsTrigger>
            <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
            <TabsTrigger value="file">Files</TabsTrigger>
            <TabsTrigger value="network">Network</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="devops">DevOps</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredCommands.map((command) => (
                <CommandCard key={command.name} command={command} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="beginner" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredCommands.filter(c => c.difficulty === 'beginner').map((command) => (
                <CommandCard key={command.name} command={command} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="intermediate" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredCommands.filter(c => c.difficulty === 'intermediate').map((command) => (
                <CommandCard key={command.name} command={command} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredCommands.filter(c => c.difficulty === 'advanced' || c.difficulty === 'expert').map((command) => (
                <CommandCard key={command.name} command={command} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="file" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredCommands.filter(c => c.category === 'File Management' || c.category === 'Directory Navigation').map((command) => (
                <CommandCard key={command.name} command={command} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="network" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredCommands.filter(c => c.category === 'Network').map((command) => (
                <CommandCard key={command.name} command={command} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="security" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredCommands.filter(c => c.category === 'Security' || c.category === 'Cybersecurity').map((command) => (
                <CommandCard key={command.name} command={command} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="devops" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredCommands.filter(c => c.category === 'DevOps').map((command) => (
                <CommandCard key={command.name} command={command} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      ) : (
        <ScrollArea className="h-[70vh]">
          <Accordion type="single" collapsible className="w-full">
            {Object.entries(commandsByCategory).map(([category, categoryCommands]) => {
              const IconComponent = categoryIcons[category] || Terminal;
              return (
                <AccordionItem key={category} value={category}>
                  <AccordionTrigger className="text-lg">
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5" />
                      {category}
                      <Badge variant="secondary">{categoryCommands.length}</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-4">
                      {categoryCommands.map((command) => (
                        <Card key={command.name}>
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-mono text-lg font-semibold">{command.name}</h3>
                                <p className="text-sm text-muted-foreground">{command.description}</p>
                              </div>
                              <Badge className={difficultyColors[command.difficulty]}>
                                {command.difficulty}
                              </Badge>
                            </div>
                            
                            <div className="grid gap-3 mt-3">
                              <div>
                                <span className="text-sm font-semibold">Syntax: </span>
                                <code className="text-sm bg-muted px-2 py-1 rounded">
                                  {command.syntax}
                                </code>
                              </div>
                              
                              <div>
                                <span className="text-sm font-semibold">Example: </span>
                                <div className="flex items-center gap-2 mt-1">
                                  <code className="text-sm bg-muted px-2 py-1 rounded flex-1">
                                    {command.examples[0]}
                                  </code>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => copyToClipboard(command.examples[0], command.name)}
                                  >
                                    {copiedCommand === command.name ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                  </Button>
                                </div>
                              </div>

                              <div>
                                <span className="text-sm font-semibold">Use Case: </span>
                                <span className="text-sm text-muted-foreground">{command.useCase}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </ScrollArea>
      )}

      {filteredCommands.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Terminal className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-lg font-semibold">No commands found</p>
            <p className="text-muted-foreground">Try adjusting your filters or search query</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}