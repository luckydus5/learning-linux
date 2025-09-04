import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Terminal, 
  BookOpen, 
  Code, 
  FileText,
  AlertCircle,
  CheckCircle,
  ChevronRight,
  Copy
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const LinuxFoundation = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({ code, id }: { code: string; id: string }) => (
    <div className="relative group">
      <pre className="bg-muted/50 border border-border rounded-lg p-4 overflow-x-auto">
        <code className="text-sm font-mono text-terminal-green">{code}</code>
      </pre>
      <Button
        size="sm"
        variant="ghost"
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => copyToClipboard(code, id)}
      >
        {copiedCode === id ? (
          <CheckCircle className="h-4 w-4 text-terminal-green" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4" variant="outline">Phase 1 • Weeks 1-3</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Linux Foundation – Complete Curriculum
            </h1>
            <p className="text-xl text-muted-foreground">
              Master the fundamentals of Linux, from installation to basic navigation and system understanding
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="content" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="content">Learning Content</TabsTrigger>
                <TabsTrigger value="exercises">Exercises</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="assessment">Assessment</TabsTrigger>
              </TabsList>

              {/* Learning Content Tab */}
              <TabsContent value="content" className="space-y-8">
                {/* Topic 1: Introduction to Linux */}
                <Card className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <Terminal className="h-8 w-8 text-terminal-green flex-shrink-0" />
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4">1. Introduction to Linux</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-terminal-green">What is Linux?</h3>
                          <p className="text-muted-foreground mb-4">
                            Linux is an open-source operating system kernel created by Linus Torvalds in 1991. 
                            It's the foundation of countless distributions that power everything from servers 
                            and supercomputers to embedded devices and smartphones (Android).
                          </p>
                          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li><strong>Kernel:</strong> The core that manages hardware, memory, and processes</li>
                            <li><strong>GNU Tools:</strong> Command-line utilities that make Linux usable</li>
                            <li><strong>Shell:</strong> Interface between user and kernel (bash, zsh, etc.)</li>
                            <li><strong>Desktop Environment:</strong> Optional GUI (GNOME, KDE, XFCE)</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-terminal-green">Why Linux Matters</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-muted/30 rounded-lg">
                              <h4 className="font-medium mb-2">✅ Stability</h4>
                              <p className="text-sm text-muted-foreground">
                                Servers run for years without rebooting. No forced updates or random crashes.
                              </p>
                            </div>
                            <div className="p-4 bg-muted/30 rounded-lg">
                              <h4 className="font-medium mb-2">🔒 Security</h4>
                              <p className="text-sm text-muted-foreground">
                                Built-in security features, no viruses, transparent code review by community.
                              </p>
                            </div>
                            <div className="p-4 bg-muted/30 rounded-lg">
                              <h4 className="font-medium mb-2">🎨 Flexibility</h4>
                              <p className="text-sm text-muted-foreground">
                                Customize everything from kernel to desktop. Run on any hardware.
                              </p>
                            </div>
                            <div className="p-4 bg-muted/30 rounded-lg">
                              <h4 className="font-medium mb-2">👥 Community</h4>
                              <p className="text-sm text-muted-foreground">
                                Millions of users, extensive documentation, free support forums.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-terminal-green">Linux Distributions</h3>
                          <div className="space-y-4">
                            <div className="border-l-4 border-terminal-green pl-4">
                              <h4 className="font-medium">Ubuntu/Debian Family</h4>
                              <p className="text-sm text-muted-foreground">
                                <strong>Use Case:</strong> Beginners, desktops, web servers<br/>
                                <strong>Package Manager:</strong> APT (.deb packages)<br/>
                                <strong>Examples:</strong> Ubuntu 22.04 LTS, Debian 12, Linux Mint
                              </p>
                            </div>
                            <div className="border-l-4 border-yellow-500 pl-4">
                              <h4 className="font-medium">Red Hat Family</h4>
                              <p className="text-sm text-muted-foreground">
                                <strong>Use Case:</strong> Enterprise servers, commercial support<br/>
                                <strong>Package Manager:</strong> YUM/DNF (.rpm packages)<br/>
                                <strong>Examples:</strong> RHEL, CentOS, Fedora, Rocky Linux
                              </p>
                            </div>
                            <div className="border-l-4 border-blue-500 pl-4">
                              <h4 className="font-medium">Arch Family</h4>
                              <p className="text-sm text-muted-foreground">
                                <strong>Use Case:</strong> Advanced users, bleeding edge software<br/>
                                <strong>Package Manager:</strong> Pacman<br/>
                                <strong>Examples:</strong> Arch Linux, Manjaro, EndeavourOS
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Topic 2: Linux Installation */}
                <Card className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <FileText className="h-8 w-8 text-terminal-green flex-shrink-0" />
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4">2. Linux Installation</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-terminal-green">Installation Methods</h3>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium mb-2">🖥️ Virtual Machine (Recommended for Learning)</h4>
                              <p className="text-sm text-muted-foreground mb-3">
                                Install Linux in VirtualBox or VMware without affecting your main OS.
                              </p>
                              <CodeBlock 
                                code={`# VirtualBox Setup for Ubuntu
1. Download VirtualBox from virtualbox.org
2. Download Ubuntu ISO from ubuntu.com
3. Create New VM:
   - Name: Ubuntu-Learning
   - Type: Linux
   - Version: Ubuntu (64-bit)
   - Memory: 2048 MB (minimum)
   - Storage: 20 GB (dynamic)
4. Settings → Storage → Add ISO
5. Start VM and follow installer`}
                                id="vm-setup"
                              />
                            </div>

                            <div>
                              <h4 className="font-medium mb-2">💿 Dual Boot</h4>
                              <p className="text-sm text-muted-foreground mb-3">
                                Install Linux alongside Windows/macOS. Requires disk partitioning.
                              </p>
                              <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg mb-3">
                                <div className="flex items-start gap-2">
                                  <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                                  <p className="text-sm">
                                    <strong>Warning:</strong> Back up your data before dual-booting. 
                                    Incorrect partitioning can cause data loss.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-medium mb-2">🌊 WSL (Windows Subsystem for Linux)</h4>
                              <CodeBlock 
                                code={`# Enable WSL on Windows 10/11
wsl --install                    # Install default Ubuntu
wsl --list --online             # See available distros
wsl --install -d Ubuntu-22.04   # Install specific version
wsl --set-default-version 2     # Use WSL 2 (recommended)`}
                                id="wsl-setup"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-terminal-green">Partitioning Basics</h3>
                          <p className="text-muted-foreground mb-4">
                            Linux uses a different partition scheme than Windows. Understanding it is crucial:
                          </p>
                          <CodeBlock 
                            code={`# Typical Linux Partition Scheme
/dev/sda1  /boot  500MB   # Boot files (optional)
/dev/sda2  /      15GB    # Root filesystem
/dev/sda3  /home  Rest    # User data
/dev/sda4  swap   2GB     # Virtual memory

# Check current partitions
sudo fdisk -l              # List all disks and partitions
sudo lsblk                 # Tree view of block devices
df -h                      # Show mounted filesystems

# Create filesystem
sudo mkfs.ext4 /dev/sda2  # Format as ext4
sudo mkfs.xfs /dev/sda3   # Format as XFS`}
                            id="partitioning"
                          />
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-terminal-green">File System Types</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-muted/30 rounded-lg">
                              <h4 className="font-medium mb-2">ext4 (Default for most distros)</h4>
                              <p className="text-sm text-muted-foreground">
                                Stable, fast, supports files up to 16TB, journaling for crash recovery
                              </p>
                            </div>
                            <div className="p-4 bg-muted/30 rounded-lg">
                              <h4 className="font-medium mb-2">XFS (Red Hat default)</h4>
                              <p className="text-sm text-muted-foreground">
                                High performance, good for large files, parallel I/O operations
                              </p>
                            </div>
                            <div className="p-4 bg-muted/30 rounded-lg">
                              <h4 className="font-medium mb-2">Btrfs (Next generation)</h4>
                              <p className="text-sm text-muted-foreground">
                                Snapshots, compression, self-healing, copy-on-write
                              </p>
                            </div>
                            <div className="p-4 bg-muted/30 rounded-lg">
                              <h4 className="font-medium mb-2">ZFS (Advanced)</h4>
                              <p className="text-sm text-muted-foreground">
                                Enterprise features, data integrity, built-in RAID
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Topic 3: File System Hierarchy */}
                <Card className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <BookOpen className="h-8 w-8 text-terminal-green flex-shrink-0" />
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4">3. File System Hierarchy Standard (FHS)</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-terminal-green">Linux Directory Structure</h3>
                          <p className="text-muted-foreground mb-4">
                            Unlike Windows with drive letters (C:\, D:\), Linux has a single root (/) with everything mounted under it.
                          </p>
                          <CodeBlock 
                            code={`# Navigate the filesystem
cd /                    # Go to root directory
ls -la /               # List root contents
tree -L 1 /            # Show directory tree (install: sudo apt install tree)

# Key directories exploration
ls /bin                # Essential user commands
ls /etc                # System configuration files
ls /home               # User home directories
ls /var                # Variable data (logs, cache)
ls /usr                # User programs and data`}
                            id="filesystem-nav"
                          />
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-terminal-green">Essential Directories Explained</h3>
                          <div className="space-y-3">
                            <div className="border-l-4 border-terminal-green pl-4">
                              <code className="font-mono text-terminal-green">/</code> <strong>Root Directory</strong>
                              <p className="text-sm text-muted-foreground">
                                Top of the filesystem tree. Everything starts here.
                              </p>
                            </div>
                            <div className="border-l-4 border-terminal-green pl-4">
                              <code className="font-mono text-terminal-green">/home</code> <strong>User Home Directories</strong>
                              <p className="text-sm text-muted-foreground">
                                Each user has a folder here: /home/username. Store personal files here.
                              </p>
                            </div>
                            <div className="border-l-4 border-terminal-green pl-4">
                              <code className="font-mono text-terminal-green">/etc</code> <strong>Configuration Files</strong>
                              <p className="text-sm text-muted-foreground">
                                System-wide settings. Edit files here to configure services.
                              </p>
                            </div>
                            <div className="border-l-4 border-terminal-green pl-4">
                              <code className="font-mono text-terminal-green">/var</code> <strong>Variable Data</strong>
                              <p className="text-sm text-muted-foreground">
                                Logs (/var/log), websites (/var/www), databases, cache files.
                              </p>
                            </div>
                            <div className="border-l-4 border-terminal-green pl-4">
                              <code className="font-mono text-terminal-green">/usr</code> <strong>User Programs</strong>
                              <p className="text-sm text-muted-foreground">
                                Installed software, libraries, documentation. Not for users despite the name!
                              </p>
                            </div>
                            <div className="border-l-4 border-terminal-green pl-4">
                              <code className="font-mono text-terminal-green">/bin, /sbin</code> <strong>System Binaries</strong>
                              <p className="text-sm text-muted-foreground">
                                Essential commands. /bin for all users, /sbin for system admin.
                              </p>
                            </div>
                            <div className="border-l-4 border-terminal-green pl-4">
                              <code className="font-mono text-terminal-green">/tmp</code> <strong>Temporary Files</strong>
                              <p className="text-sm text-muted-foreground">
                                Cleared on reboot. Any user can write here but can't see others' files.
                              </p>
                            </div>
                            <div className="border-l-4 border-terminal-green pl-4">
                              <code className="font-mono text-terminal-green">/dev</code> <strong>Device Files</strong>
                              <p className="text-sm text-muted-foreground">
                                Hardware represented as files. /dev/sda = first hard drive.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Topic 4: Essential Commands */}
                <Card className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <Code className="h-8 w-8 text-terminal-green flex-shrink-0" />
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4">4. Essential Commands & Navigation</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-terminal-green">Navigation Commands</h3>
                          <CodeBlock 
                            code={`# Where am I?
pwd                     # Print working directory

# List files
ls                      # Basic listing
ls -l                   # Long format (permissions, size, date)
ls -la                  # Include hidden files (start with .)
ls -lh                  # Human readable sizes
ls -lt                  # Sort by modification time
ls -R                   # Recursive listing

# Change directory
cd /path/to/dir        # Go to specific path
cd ..                  # Go up one level
cd ~                   # Go to home directory
cd -                   # Go to previous directory
cd                     # Also goes home

# Tips
cd /ho<TAB>            # Tab completion - press TAB to autocomplete
ls *.txt               # Wildcards - list all .txt files
ls [ab]*               # Files starting with a or b
ls photo?.jpg          # ? matches single character`}
                            id="navigation-commands"
                          />
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-terminal-green">File Operations</h3>
                          <CodeBlock 
                            code={`# Create files and directories
touch file.txt          # Create empty file
mkdir dirname          # Create directory
mkdir -p a/b/c         # Create nested directories

# Copy files
cp source dest         # Copy file
cp -r sourcedir dest   # Copy directory recursively
cp -i source dest      # Interactive (ask before overwrite)
cp -v source dest      # Verbose (show what's being done)

# Move/rename
mv oldname newname     # Rename file
mv file.txt /path/     # Move to different directory
mv -i source dest      # Interactive mode

# Remove (DANGEROUS!)
rm file.txt            # Delete file (no recycle bin!)
rm -i file.txt         # Ask confirmation
rm -r directory        # Delete directory and contents
rm -rf directory       # Force delete (VERY DANGEROUS)

# Safety tip: Use -i flag
alias rm='rm -i'       # Add to ~/.bashrc for safety
alias cp='cp -i'
alias mv='mv -i'`}
                            id="file-operations"
                          />
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-terminal-green">Viewing Files</h3>
                          <CodeBlock 
                            code={`# Display file contents
cat file.txt           # Show entire file
less file.txt          # Page through file (q to quit)
more file.txt          # Similar to less (older)
head file.txt          # Show first 10 lines
head -n 20 file.txt    # Show first 20 lines
tail file.txt          # Show last 10 lines
tail -f /var/log/syslog # Follow file in real-time

# File information
file document.pdf      # Identify file type
wc file.txt           # Word count (lines, words, chars)
wc -l file.txt        # Just line count
du -h file.txt        # File size (human readable)
stat file.txt         # Detailed file info`}
                            id="viewing-files"
                          />
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-terminal-green">Getting Help</h3>
                          <CodeBlock 
                            code={`# Manual pages (detailed documentation)
man ls                 # Manual for ls command
man -k keyword        # Search all manuals for keyword
man 5 passwd          # Section 5 (file formats) for passwd

# Quick help
ls --help             # Brief help for command
help cd               # Help for shell builtins
which ls              # Show command location
type cd               # Show command type

# Info pages (more detailed than man)
info coreutils        # GNU utilities documentation

# Online resources
curl cheat.sh/ls      # Get cheat sheet (needs internet)`}
                            id="getting-help"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Exercises Tab */}
              <TabsContent value="exercises" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Practice Exercises</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-terminal-green">
                        Exercise 1: System Exploration
                      </h3>
                      <div className="bg-muted/30 p-4 rounded-lg mb-4">
                        <p className="mb-3">Complete these tasks on your Linux system:</p>
                        <ol className="list-decimal pl-6 space-y-2">
                          <li>List 3 Linux distributions and explain their primary use cases</li>
                          <li>Install a Linux VM (VirtualBox or VMware) and boot it up</li>
                          <li>Identify your distribution and kernel version</li>
                          <li>Find out how much RAM and disk space your system has</li>
                        </ol>
                      </div>
                      <CodeBlock 
                        code={`# Commands to complete the exercise
uname -a               # Show kernel version
lsb_release -a        # Distribution info (Ubuntu/Debian)
cat /etc/os-release   # Distribution info (most distros)
free -h               # Memory information
df -h                 # Disk usage
lscpu                 # CPU information
hostnamectl           # System information (systemd)`}
                        id="exercise-1"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-terminal-green">
                        Exercise 2: Directory Navigation Challenge
                      </h3>
                      <div className="bg-muted/30 p-4 rounded-lg mb-4">
                        <p className="mb-3">Navigate to these locations using cd and verify with pwd:</p>
                        <ol className="list-decimal pl-6 space-y-2">
                          <li>Your home directory (3 different ways)</li>
                          <li>The system log directory</li>
                          <li>The system configuration directory</li>
                          <li>Create this structure: ~/practice/level1/level2/level3</li>
                          <li>Navigate between levels using relative and absolute paths</li>
                        </ol>
                      </div>
                      <CodeBlock 
                        code={`# Solution hints
cd ~                   # Method 1: home
cd $HOME              # Method 2: home
cd                    # Method 3: home

cd /var/log           # System logs
cd /etc               # System config

mkdir -p ~/practice/level1/level2/level3
cd ~/practice/level1/level2/level3
cd ../..              # Go up 2 levels (relative)
cd /home/$USER/practice/level1  # Absolute path`}
                        id="exercise-2"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-terminal-green">
                        Exercise 3: File Operations Mastery
                      </h3>
                      <div className="bg-muted/30 p-4 rounded-lg mb-4">
                        <p className="mb-3">Practice safe file operations:</p>
                        <ol className="list-decimal pl-6 space-y-2">
                          <li>Create 10 files named file1.txt through file10.txt</li>
                          <li>Create directories: documents, images, backups</li>
                          <li>Copy all .txt files to documents/</li>
                          <li>Move files 6-10 to backups/</li>
                          <li>Create a backup of your entire practice directory</li>
                        </ol>
                      </div>
                      <CodeBlock 
                        code={`# Solution
touch file{1..10}.txt              # Create files 1-10
mkdir documents images backups     # Create directories
cp *.txt documents/                # Copy all txt files
mv file{6..10}.txt backups/        # Move files 6-10
cp -r ~/practice ~/practice_backup # Backup entire directory

# Verify your work
ls -la documents/
ls -la backups/
tree ~/practice                    # See directory structure`}
                        id="exercise-3"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Projects Tab */}
              <TabsContent value="projects" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Mini Projects</h2>
                  
                  <div className="space-y-6">
                    <div className="p-6 bg-muted/30 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3 text-terminal-green">
                        Project 1: Multi-Distribution Comparison
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Install 3 different Linux distributions in VirtualBox and document their differences.
                      </p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium mb-2">Requirements:</h4>
                          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                            <li>Install Ubuntu, CentOS, and Debian in separate VMs</li>
                            <li>Document package manager differences (apt vs yum)</li>
                            <li>Compare default installed software</li>
                            <li>Note filesystem layout differences</li>
                            <li>Test same commands on each and note variations</li>
                          </ul>
                        </div>
                        <CodeBlock 
                          code={`# Commands to run on each distro
# Package management
Ubuntu:  sudo apt update && sudo apt list --installed | wc -l
CentOS:  sudo yum list installed | wc -l
Debian:  dpkg -l | wc -l

# System information
cat /etc/os-release
uname -r
systemctl status | head -20

# Create comparison script
#!/bin/bash
echo "Distribution: $(lsb_release -d)"
echo "Kernel: $(uname -r)"
echo "Package Manager: $(which apt yum 2>/dev/null)"
echo "Init System: $(ps -p 1 -o comm=)"
echo "Default Shell: $SHELL"`}
                          id="project-1"
                        />
                      </div>
                    </div>

                    <div className="p-6 bg-muted/30 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3 text-terminal-green">
                        Project 2: System Information Dashboard
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Create a bash script that generates a comprehensive system report.
                      </p>
                      <CodeBlock 
                        code={`#!/bin/bash
# system_info.sh - System Information Dashboard

echo "======================================="
echo "     SYSTEM INFORMATION DASHBOARD      "
echo "======================================="
echo ""

echo "🖥️  SYSTEM INFO"
echo "-------------------"
echo "Hostname: $(hostname)"
echo "OS: $(lsb_release -d | cut -f2)"
echo "Kernel: $(uname -r)"
echo "Architecture: $(uname -m)"
echo "Uptime:$(uptime -p)"
echo ""

echo "💾 HARDWARE INFO"
echo "-------------------"
echo "CPU: $(lscpu | grep 'Model name' | cut -d':' -f2 | xargs)"
echo "Cores: $(nproc)"
echo "Memory: $(free -h | awk '/^Mem:/ {print $2}')"
echo "Disk: $(df -h / | awk 'NR==2 {print $2}')"
echo ""

echo "🌐 NETWORK INFO"
echo "-------------------"
echo "IP Address: $(ip -4 addr show | grep inet | grep -v 127.0.0.1 | awk '{print $2}')"
echo "Gateway: $(ip route | grep default | awk '{print $3}')"
echo "DNS: $(grep nameserver /etc/resolv.conf | awk '{print $2}')"
echo ""

echo "👤 USER INFO"
echo "-------------------"
echo "Current User: $USER"
echo "Home Directory: $HOME"
echo "Shell: $SHELL"
echo "Groups: $(groups)"

# Save to file
echo ""
echo "Report saved to: ~/system_report_$(date +%Y%m%d).txt"`}
                        id="project-2"
                      />
                    </div>

                    <div className="p-6 bg-muted/30 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3 text-terminal-green">
                        Project 3: File Organization System
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Create an organized directory structure for a development environment.
                      </p>
                      <CodeBlock 
                        code={`#!/bin/bash
# organize_files.sh - Create organized dev environment

# Create main structure
mkdir -p ~/Development/{projects,scripts,documents,backups,temp}
mkdir -p ~/Development/projects/{web,python,bash,learning}
mkdir -p ~/Development/documents/{notes,references,tutorials}
mkdir -p ~/Development/backups/$(date +%Y/%m)

# Create README files
cat > ~/Development/README.md << EOF
# Development Environment Structure

## Directories:
- **projects/**: Active development projects
  - web/: Web development projects
  - python/: Python scripts and projects
  - bash/: Shell scripts
  - learning/: Tutorial and practice code
  
- **scripts/**: Utility scripts
- **documents/**: Documentation and notes
- **backups/**: Project backups organized by date
- **temp/**: Temporary files (cleaned weekly)

## Usage:
Place all new projects in appropriate subdirectory.
Run backup_projects.sh weekly to archive completed work.
EOF

# Create useful scripts
cat > ~/Development/scripts/backup_projects.sh << 'EOF'
#!/bin/bash
BACKUP_DIR="$HOME/Development/backups/$(date +%Y/%m/%d)"
mkdir -p "$BACKUP_DIR"
tar -czf "$BACKUP_DIR/projects_$(date +%H%M%S).tar.gz" ~/Development/projects/
echo "Backup saved to: $BACKUP_DIR"
EOF

chmod +x ~/Development/scripts/backup_projects.sh

# Set permissions
chmod 755 ~/Development/projects
chmod 755 ~/Development/scripts
chmod 700 ~/Development/backups  # Private backups

echo "Development environment created at ~/Development"
tree ~/Development -L 2`}
                        id="project-3"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Assessment Tab */}
              <TabsContent value="assessment" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Self-Assessment</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-terminal-green">
                        Knowledge Check Quiz
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-muted/30 rounded-lg">
                          <p className="font-medium mb-2">1. What is the Linux kernel?</p>
                          <p className="text-sm text-muted-foreground">
                            Answer: The core component that manages hardware resources, memory, and processes. Created by Linus Torvalds in 1991.
                          </p>
                        </div>
                        <div className="p-4 bg-muted/30 rounded-lg">
                          <p className="font-medium mb-2">2. What's the difference between /home and /root?</p>
                          <p className="text-sm text-muted-foreground">
                            Answer: /home contains regular user directories (/home/username), while /root is the home directory for the root (admin) user.
                          </p>
                        </div>
                        <div className="p-4 bg-muted/30 rounded-lg">
                          <p className="font-medium mb-2">3. Which command would you use to see hidden files?</p>
                          <p className="text-sm text-muted-foreground">
                            Answer: ls -la (the -a flag shows all files including hidden ones that start with .)
                          </p>
                        </div>
                        <div className="p-4 bg-muted/30 rounded-lg">
                          <p className="font-medium mb-2">4. What does chmod 755 filename do?</p>
                          <p className="text-sm text-muted-foreground">
                            Answer: Sets permissions to rwxr-xr-x (owner: read/write/execute, group: read/execute, others: read/execute)
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-terminal-green">
                        Practical Skills Test
                      </h3>
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <p className="mb-4">Complete these tasks without looking at notes:</p>
                        <ol className="list-decimal pl-6 space-y-3">
                          <li>
                            <strong>Navigation Speed Run</strong>
                            <p className="text-sm text-muted-foreground">
                              Navigate to /var/log, then /etc, then home, then /usr/bin in under 30 seconds
                            </p>
                          </li>
                          <li>
                            <strong>File Operations Challenge</strong>
                            <p className="text-sm text-muted-foreground">
                              Create 5 files, organize them into 3 directories, then create a backup
                            </p>
                          </li>
                          <li>
                            <strong>System Information</strong>
                            <p className="text-sm text-muted-foreground">
                              Find your kernel version, distribution name, and available disk space using commands
                            </p>
                          </li>
                          <li>
                            <strong>Help System</strong>
                            <p className="text-sm text-muted-foreground">
                              Use man pages to find out what the -R flag does for ls, cp, and chmod
                            </p>
                          </li>
                        </ol>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-terminal-green">
                        Common Mistakes to Avoid
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Never use rm -rf / </p>
                            <p className="text-sm text-muted-foreground">
                              This will delete your entire system. Always double-check rm commands.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                          <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Don't run commands as root unnecessarily</p>
                            <p className="text-sm text-muted-foreground">
                              Use sudo for specific commands, not for general work.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                          <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Always use -i flag with destructive commands</p>
                            <p className="text-sm text-muted-foreground">
                              Add alias rm='rm -i' to your .bashrc for safety.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-terminal-green/10 to-cyan-500/10 rounded-lg border border-terminal-green/30">
                      <h3 className="text-lg font-semibold mb-3">✅ Ready for Next Phase?</h3>
                      <p className="text-muted-foreground mb-4">
                        Before moving to Command Line Mastery, ensure you can:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
                        <li>Navigate the filesystem confidently without GUI</li>
                        <li>Understand the purpose of major directories</li>
                        <li>Perform basic file operations safely</li>
                        <li>Use man pages and help systems</li>
                        <li>Have at least one Linux system ready for practice</li>
                      </ul>
                      <Button className="mt-4" variant="terminal">
                        Continue to Command Line Mastery
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinuxFoundation;