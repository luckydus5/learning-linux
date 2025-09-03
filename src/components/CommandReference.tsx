import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Copy, Check, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Command {
  command: string;
  description: string;
  category: string;
  examples: string[];
  flags?: string[];
}

const commands: Command[] = [
  {
    command: "ls",
    description: "List directory contents",
    category: "File System",
    examples: ["ls -la", "ls -lh /var/log", "ls -R ~/Documents"],
    flags: ["-l", "-a", "-h", "-R", "-t"]
  },
  {
    command: "cd",
    description: "Change directory",
    category: "Navigation",
    examples: ["cd /home/user", "cd ..", "cd ~", "cd -"]
  },
  {
    command: "grep",
    description: "Search text patterns",
    category: "Text Processing",
    examples: ["grep 'error' /var/log/syslog", "grep -r 'TODO' .", "grep -i 'warning' file.txt"],
    flags: ["-r", "-i", "-v", "-n", "-c"]
  },
  {
    command: "find",
    description: "Find files and directories",
    category: "File System",
    examples: ["find / -name '*.log'", "find . -type d -mtime -7", "find /home -size +100M"],
    flags: ["-name", "-type", "-mtime", "-size", "-exec"]
  },
  {
    command: "chmod",
    description: "Change file permissions",
    category: "Permissions",
    examples: ["chmod 755 script.sh", "chmod +x file", "chmod -R 644 /var/www"],
    flags: ["-R", "+x", "-x", "+r", "-w"]
  },
  {
    command: "ps",
    description: "Display running processes",
    category: "Process Management",
    examples: ["ps aux", "ps -ef", "ps -u username"],
    flags: ["aux", "-ef", "-u", "-p", "-C"]
  },
  {
    command: "systemctl",
    description: "Control systemd services",
    category: "Services",
    examples: ["systemctl status nginx", "systemctl restart sshd", "systemctl enable docker"],
    flags: ["status", "start", "stop", "restart", "enable", "disable"]
  },
  {
    command: "awk",
    description: "Pattern scanning and processing",
    category: "Text Processing",
    examples: ["awk '{print $1}' file.txt", "awk -F: '{print $1,$3}' /etc/passwd", "awk 'NR>1'"],
    flags: ["-F", "-v", "-f"]
  },
  {
    command: "sed",
    description: "Stream editor for text manipulation",
    category: "Text Processing",
    examples: ["sed 's/old/new/g' file.txt", "sed -n '5,10p' file.txt", "sed -i 's/foo/bar/g' *.txt"],
    flags: ["-i", "-n", "-e", "-r"]
  },
  {
    command: "tar",
    description: "Archive files",
    category: "File System",
    examples: ["tar -czf archive.tar.gz /path", "tar -xzf archive.tar.gz", "tar -tvf archive.tar"],
    flags: ["-c", "-x", "-z", "-v", "-f", "-t"]
  },
  {
    command: "ssh",
    description: "Secure shell connection",
    category: "Networking",
    examples: ["ssh user@server", "ssh -p 2222 server", "ssh -i key.pem user@host"],
    flags: ["-p", "-i", "-v", "-X", "-L"]
  },
  {
    command: "docker",
    description: "Container management",
    category: "DevOps",
    examples: ["docker ps -a", "docker run -d nginx", "docker logs container_id"],
    flags: ["ps", "run", "exec", "logs", "build"]
  }
];

const CommandReference = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const categories = Array.from(new Set(commands.map(cmd => cmd.category)));
  
  const filteredCommands = commands.filter(cmd => {
    const matchesSearch = cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cmd.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || cmd.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyToClipboard = (text: string, commandName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(commandName);
    toast.success(`Copied: ${text}`);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Command Reference</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quick reference for essential Linux commands with examples
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search commands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? "terminal" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "terminal" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Commands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommands.map((cmd) => (
            <Card key={cmd.command} className="p-6 hover:shadow-hover transition-all duration-300 group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-terminal-green" />
                  <h3 className="font-mono text-lg font-bold text-terminal-green">
                    {cmd.command}
                  </h3>
                </div>
                <Badge variant="outline" className="text-xs">
                  {cmd.category}
                </Badge>
              </div>
              
              <p className="text-muted-foreground mb-4">{cmd.description}</p>
              
              {cmd.flags && (
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">Common flags:</p>
                  <div className="flex flex-wrap gap-1">
                    {cmd.flags.map(flag => (
                      <code key={flag} className="text-xs bg-muted px-2 py-1 rounded">
                        {flag}
                      </code>
                    ))}
                  </div>
                </div>
              )}
              
              <div>
                <p className="text-sm font-semibold mb-2">Examples:</p>
                <div className="space-y-2">
                  {cmd.examples.map((example, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-muted/50 rounded px-3 py-2 group/example hover:bg-muted transition-colors"
                    >
                      <code className="text-xs text-terminal-green">{example}</code>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 opacity-0 group-hover/example:opacity-100 transition-opacity"
                        onClick={() => copyToClipboard(example, cmd.command)}
                      >
                        {copiedCommand === cmd.command ? (
                          <Check className="h-3 w-3 text-terminal-green" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredCommands.length === 0 && (
          <div className="text-center py-12">
            <Terminal className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No commands found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CommandReference;