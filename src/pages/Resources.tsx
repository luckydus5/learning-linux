import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Book, 
  Download, 
  ExternalLink, 
  FileText, 
  Youtube,
  Github,
  Globe,
  Search,
  Star,
  Clock,
  BookOpen,
  Video,
  Code,
  Terminal,
  Bookmark,
  Copy,
  Check
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: "book" | "video" | "article" | "tool" | "repository" | "cheatsheet";
  url?: string;
  difficulty?: string;
  rating?: number;
  duration?: string;
  author?: string;
  tags: string[];
}

const resources: Resource[] = [
  {
    id: "res-001",
    title: "The Linux Command Line",
    description: "A complete introduction to the Linux command line by William Shotts",
    category: "Books",
    type: "book",
    url: "https://linuxcommand.org/tlcl.php",
    difficulty: "beginner",
    rating: 4.8,
    author: "William Shotts",
    tags: ["CLI", "Basics", "Free"]
  },
  {
    id: "res-002",
    title: "Linux Bible",
    description: "Comprehensive guide covering all aspects of Linux administration",
    category: "Books",
    type: "book",
    difficulty: "intermediate",
    rating: 4.7,
    author: "Christopher Negus",
    tags: ["Administration", "Complete Guide"]
  },
  {
    id: "res-003",
    title: "Linux Journey",
    description: "Interactive online tutorial for learning Linux from scratch",
    category: "Tutorials",
    type: "article",
    url: "https://linuxjourney.com",
    difficulty: "beginner",
    rating: 4.6,
    tags: ["Interactive", "Free", "Beginner"]
  },
  {
    id: "res-004",
    title: "Bash Scripting Cheat Sheet",
    description: "Comprehensive bash scripting reference with examples",
    category: "Cheat Sheets",
    type: "cheatsheet",
    url: "#",
    tags: ["Bash", "Scripting", "Reference"]
  },
  {
    id: "res-005",
    title: "Linux System Administration",
    description: "Complete video course on Linux system administration",
    category: "Videos",
    type: "video",
    url: "#",
    duration: "12 hours",
    difficulty: "intermediate",
    rating: 4.5,
    tags: ["Video", "SysAdmin", "Course"]
  },
  {
    id: "res-006",
    title: "Awesome Linux",
    description: "Curated list of awesome Linux software and resources",
    category: "Repositories",
    type: "repository",
    url: "https://github.com/awesome-linux",
    rating: 4.9,
    tags: ["GitHub", "Collection", "Tools"]
  },
  {
    id: "res-007",
    title: "Vim Tutor",
    description: "Interactive Vim tutorial built into Vim itself",
    category: "Tools",
    type: "tool",
    difficulty: "beginner",
    tags: ["Vim", "Editor", "Interactive"]
  },
  {
    id: "res-008",
    title: "Linux Performance",
    description: "Systems performance analysis and tools by Brendan Gregg",
    category: "Books",
    type: "book",
    difficulty: "advanced",
    rating: 4.9,
    author: "Brendan Gregg",
    tags: ["Performance", "Advanced", "Analysis"]
  }
];

const cheatSheets = [
  { name: "Basic Commands", commands: 20, downloads: 5420 },
  { name: "File Permissions", commands: 15, downloads: 3200 },
  { name: "Network Commands", commands: 25, downloads: 4100 },
  { name: "Process Management", commands: 18, downloads: 2800 },
  { name: "Package Management", commands: 12, downloads: 2300 },
  { name: "System Administration", commands: 30, downloads: 6100 }
];

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [savedResources, setSavedResources] = useState<Set<string>>(new Set());
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const categories = ["all", "Books", "Videos", "Tutorials", "Cheat Sheets", "Tools", "Repositories"];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleSave = (resourceId: string) => {
    const newSaved = new Set(savedResources);
    if (newSaved.has(resourceId)) {
      newSaved.delete(resourceId);
      toast.success("Resource removed from saved");
    } else {
      newSaved.add(resourceId);
      toast.success("Resource saved!");
    }
    setSavedResources(newSaved);
  };

  const copyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    toast.success(`Copied: ${command}`);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "book": return <Book className="h-5 w-5" />;
      case "video": return <Video className="h-5 w-5" />;
      case "article": return <FileText className="h-5 w-5" />;
      case "tool": return <Terminal className="h-5 w-5" />;
      case "repository": return <Github className="h-5 w-5" />;
      case "cheatsheet": return <Code className="h-5 w-5" />;
      default: return <Globe className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Learning <span className="gradient-text">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Curated collection of books, tutorials, tools, and references for Linux mastery
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4">
                <BookOpen className="h-8 w-8 text-terminal-green mx-auto mb-2" />
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">Books</div>
              </Card>
              <Card className="p-4">
                <Video className="h-8 w-8 text-terminal-cyan mx-auto mb-2" />
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-muted-foreground">Videos</div>
              </Card>
              <Card className="p-4">
                <Code className="h-8 w-8 text-terminal-purple mx-auto mb-2" />
                <div className="text-2xl font-bold">30+</div>
                <div className="text-sm text-muted-foreground">Cheat Sheets</div>
              </Card>
              <Card className="p-4">
                <Terminal className="h-8 w-8 text-terminal-orange mx-auto mb-2" />
                <div className="text-2xl font-bold">40+</div>
                <div className="text-sm text-muted-foreground">Tools</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="browse" className="space-y-6">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="browse">Browse</TabsTrigger>
              <TabsTrigger value="cheatsheets">Cheat Sheets</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
            </TabsList>

            <TabsContent value="browse" className="space-y-6">
              {/* Search and Filters */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="flex gap-2 flex-wrap">
                  {categories.map(cat => (
                    <Button
                      key={cat}
                      variant={selectedCategory === cat ? "terminal" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Resources Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource) => (
                  <Card key={resource.id} className="p-6 hover:shadow-hover transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2 text-terminal-green">
                        {getTypeIcon(resource.type)}
                        <Badge variant="outline" className="text-xs">
                          {resource.category}
                        </Badge>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => toggleSave(resource.id)}
                      >
                        <Bookmark className={savedResources.has(resource.id) ? "fill-current text-terminal-green" : ""} />
                      </Button>
                    </div>

                    <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>

                    {resource.author && (
                      <p className="text-xs text-muted-foreground mb-2">By {resource.author}</p>
                    )}

                    {resource.rating && (
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(resource.rating!) ? "fill-terminal-green text-terminal-green" : "text-muted"
                            }`}
                          />
                        ))}
                        <span className="text-xs text-muted-foreground ml-1">({resource.rating})</span>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1 mb-4">
                      {resource.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {resource.url && (
                      <Button variant="glow" size="sm" className="w-full">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        View Resource
                      </Button>
                    )}
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cheatsheets" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Command Cheat Sheets</h2>
                <p className="text-muted-foreground">Quick reference guides for common Linux commands</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cheatSheets.map((sheet) => (
                  <Card key={sheet.name} className="p-6 hover:shadow-hover transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <FileText className="h-8 w-8 text-terminal-green" />
                      <Badge variant="outline" className="text-xs">
                        PDF
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2">{sheet.name}</h3>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Terminal className="h-3 w-3" />
                        {sheet.commands} commands
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        {sheet.downloads.toLocaleString()}
                      </span>
                    </div>
                    
                    <Button variant="terminal" size="sm" className="w-full">
                      <Download className="mr-2 h-3 w-3" />
                      Download PDF
                    </Button>
                  </Card>
                ))}
              </div>

              {/* Quick Commands Reference */}
              <Card className="p-6 mt-8">
                <h3 className="text-xl font-bold mb-4">Quick Command Reference</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { cmd: "ls -la", desc: "List all files with details" },
                    { cmd: "chmod 755 file", desc: "Change file permissions" },
                    { cmd: "ps aux", desc: "Show all running processes" },
                    { cmd: "grep 'pattern' file", desc: "Search for pattern in file" },
                    { cmd: "tar -czf archive.tar.gz dir/", desc: "Create compressed archive" },
                    { cmd: "find / -name '*.log'", desc: "Find all log files" }
                  ].map((item) => (
                    <div key={item.cmd} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg group">
                      <div>
                        <code className="text-terminal-green font-mono">{item.cmd}</code>
                        <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => copyCommand(item.cmd)}
                      >
                        {copiedCommand === item.cmd ? (
                          <Check className="h-4 w-4 text-terminal-green" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="saved" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Saved Resources</h2>
                <p className="text-muted-foreground">Your bookmarked learning materials</p>
              </div>

              {savedResources.size === 0 ? (
                <Card className="p-12 text-center">
                  <Bookmark className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No saved resources yet</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Click the bookmark icon on resources to save them here
                  </p>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resources
                    .filter(r => savedResources.has(r.id))
                    .map((resource) => (
                      <Card key={resource.id} className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-2 text-terminal-green">
                            {getTypeIcon(resource.type)}
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => toggleSave(resource.id)}
                          >
                            <Bookmark className="fill-current text-terminal-green" />
                          </Button>
                        </div>
                        <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                      </Card>
                    ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Resources;