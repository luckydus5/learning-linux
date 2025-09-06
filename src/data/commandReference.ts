export interface Command {
  name: string;
  description: string;
  syntax: string;
  examples: string[];
  options?: string[];
  relatedCommands?: string[];
  phase: string;
}

export interface PhaseCommands {
  phaseId: string;
  title: string;
  icon: string;
  description: string;
  commands: Command[];
  practiceExercises: string[];
  projects: string[];
}

export const phaseCommands: PhaseCommands[] = [
  {
    phaseId: "foundation",
    title: "Linux Foundation",
    icon: "🏗️",
    description: "Master the fundamentals of Linux with essential navigation and system commands",
    commands: [
      {
        name: "pwd",
        description: "Print working directory - shows your current location in the filesystem",
        syntax: "pwd",
        examples: [
          "pwd                  # Shows current directory",
          "pwd -P               # Shows physical path (resolves symlinks)"
        ],
        phase: "foundation"
      },
      {
        name: "ls",
        description: "List directory contents with detailed file information",
        syntax: "ls [options] [path]",
        examples: [
          "ls                   # List files in current directory",
          "ls -la               # List all files with details",
          "ls -lh               # Human-readable file sizes",
          "ls -ltr              # Sort by time, reverse order",
          "ls *.txt             # List only .txt files"
        ],
        options: ["-l (long format)", "-a (show hidden)", "-h (human-readable)", "-t (sort by time)", "-r (reverse)"],
        relatedCommands: ["dir", "tree", "find"],
        phase: "foundation"
      },
      {
        name: "cd",
        description: "Change directory - navigate through the filesystem",
        syntax: "cd [directory]",
        examples: [
          "cd /home/user       # Go to specific path",
          "cd ~                # Go to home directory",
          "cd ..               # Go up one level",
          "cd -                # Go to previous directory",
          "cd /                # Go to root directory"
        ],
        relatedCommands: ["pwd", "pushd", "popd"],
        phase: "foundation"
      },
      {
        name: "man",
        description: "Display manual pages for commands",
        syntax: "man [command]",
        examples: [
          "man ls              # Show manual for ls",
          "man -k keyword      # Search for commands",
          "man 5 passwd        # Show specific section"
        ],
        relatedCommands: ["info", "help", "--help"],
        phase: "foundation"
      },
      {
        name: "clear",
        description: "Clear the terminal screen",
        syntax: "clear",
        examples: ["clear", "Ctrl+L  # Keyboard shortcut"],
        phase: "foundation"
      },
      {
        name: "whoami",
        description: "Display current username",
        syntax: "whoami",
        examples: ["whoami"],
        relatedCommands: ["id", "who", "w"],
        phase: "foundation"
      },
      {
        name: "uname",
        description: "Display system information",
        syntax: "uname [options]",
        examples: [
          "uname -a            # All system info",
          "uname -r            # Kernel version",
          "uname -n            # Hostname"
        ],
        options: ["-a (all)", "-r (kernel)", "-n (hostname)", "-m (machine)"],
        phase: "foundation"
      },
      {
        name: "date",
        description: "Display or set system date and time",
        syntax: "date [options]",
        examples: [
          "date                # Current date/time",
          "date '+%Y-%m-%d'   # Custom format",
          "date -u             # UTC time"
        ],
        phase: "foundation"
      },
      {
        name: "mkdir",
        description: "Create directories",
        syntax: "mkdir [options] directory",
        examples: [
          "mkdir mydir         # Create directory",
          "mkdir -p a/b/c      # Create parent directories",
          "mkdir -m 755 dir    # Set permissions"
        ],
        options: ["-p (parents)", "-m (mode)", "-v (verbose)"],
        phase: "foundation"
      },
      {
        name: "rmdir",
        description: "Remove empty directories",
        syntax: "rmdir [directory]",
        examples: [
          "rmdir emptydir      # Remove empty directory",
          "rmdir -p a/b/c      # Remove parent directories"
        ],
        relatedCommands: ["rm -r"],
        phase: "foundation"
      }
    ],
    practiceExercises: [
      "Navigate to /etc, list all config files, return home",
      "Create a directory tree: projects/2024/linux/exercises",
      "Find and read the manual page for the 'grep' command",
      "Display system information and save to a file",
      "List all hidden files in your home directory"
    ],
    projects: [
      "System Information Script: Create a script that collects and displays comprehensive system information",
      "Directory Navigator: Build a menu-driven directory navigation tool",
      "File Explorer: Create a text-based file manager with basic operations"
    ]
  },
  {
    phaseId: "cli-mastery",
    title: "Command Line Mastery",
    icon: "⌨️",
    description: "Become proficient with file operations, text processing, and command-line efficiency",
    commands: [
      {
        name: "cat",
        description: "Concatenate and display files",
        syntax: "cat [options] [file...]",
        examples: [
          "cat file.txt        # Display file content",
          "cat file1 file2     # Concatenate files",
          "cat -n file.txt     # Show line numbers",
          "cat > newfile       # Create new file"
        ],
        options: ["-n (number lines)", "-b (number non-blank)", "-E (show ends)"],
        relatedCommands: ["less", "more", "head", "tail"],
        phase: "cli-mastery"
      },
      {
        name: "less",
        description: "View file content page by page",
        syntax: "less [file]",
        examples: [
          "less largefile.txt  # View large file",
          "less +F logfile     # Follow mode like tail -f",
          "less -N file.txt    # Show line numbers"
        ],
        relatedCommands: ["more", "cat", "view"],
        phase: "cli-mastery"
      },
      {
        name: "head",
        description: "Display first lines of a file",
        syntax: "head [options] [file]",
        examples: [
          "head file.txt       # First 10 lines",
          "head -n 20 file     # First 20 lines",
          "head -c 100 file    # First 100 bytes"
        ],
        options: ["-n (lines)", "-c (bytes)"],
        relatedCommands: ["tail", "cat"],
        phase: "cli-mastery"
      },
      {
        name: "tail",
        description: "Display last lines of a file",
        syntax: "tail [options] [file]",
        examples: [
          "tail file.txt       # Last 10 lines",
          "tail -n 20 file     # Last 20 lines",
          "tail -f logfile     # Follow file changes",
          "tail -f -n 50 log   # Follow with 50 lines"
        ],
        options: ["-n (lines)", "-f (follow)", "-c (bytes)"],
        relatedCommands: ["head", "cat"],
        phase: "cli-mastery"
      },
      {
        name: "cp",
        description: "Copy files and directories",
        syntax: "cp [options] source destination",
        examples: [
          "cp file1 file2      # Copy file",
          "cp -r dir1 dir2     # Copy directory",
          "cp -i file1 file2   # Interactive mode",
          "cp -p file1 file2   # Preserve attributes",
          "cp *.txt backup/    # Copy multiple files"
        ],
        options: ["-r (recursive)", "-i (interactive)", "-p (preserve)", "-v (verbose)"],
        relatedCommands: ["mv", "rsync"],
        phase: "cli-mastery"
      },
      {
        name: "mv",
        description: "Move or rename files and directories",
        syntax: "mv [options] source destination",
        examples: [
          "mv old.txt new.txt  # Rename file",
          "mv file.txt dir/    # Move to directory",
          "mv -i file1 file2   # Interactive mode",
          "mv *.log archive/   # Move multiple files"
        ],
        options: ["-i (interactive)", "-f (force)", "-v (verbose)"],
        relatedCommands: ["cp", "rename"],
        phase: "cli-mastery"
      },
      {
        name: "rm",
        description: "Remove files and directories",
        syntax: "rm [options] file",
        examples: [
          "rm file.txt         # Remove file",
          "rm -r directory/    # Remove directory",
          "rm -i *.tmp         # Interactive removal",
          "rm -rf dir/         # Force remove (CAREFUL!)"
        ],
        options: ["-r (recursive)", "-f (force)", "-i (interactive)", "-v (verbose)"],
        relatedCommands: ["rmdir", "unlink"],
        phase: "cli-mastery"
      },
      {
        name: "touch",
        description: "Create empty files or update timestamps",
        syntax: "touch [options] file",
        examples: [
          "touch newfile.txt   # Create empty file",
          "touch -d '2 days ago' file  # Set specific date",
          "touch file{1..10}.txt  # Create multiple files"
        ],
        phase: "cli-mastery"
      },
      {
        name: "echo",
        description: "Display text or variables",
        syntax: "echo [options] [string]",
        examples: [
          "echo 'Hello World'  # Print text",
          "echo $HOME          # Print variable",
          "echo -e '\\n\\t'    # Enable escape sequences",
          "echo text > file    # Redirect to file"
        ],
        options: ["-e (escape sequences)", "-n (no newline)"],
        phase: "cli-mastery"
      },
      {
        name: "find",
        description: "Search for files and directories",
        syntax: "find [path] [options] [expression]",
        examples: [
          "find . -name '*.txt'     # Find .txt files",
          "find / -size +100M       # Files over 100MB",
          "find . -type d           # Find directories",
          "find . -mtime -7         # Modified in last 7 days",
          "find . -exec ls -l {} \\; # Execute command on results"
        ],
        options: ["-name", "-type", "-size", "-mtime", "-exec"],
        relatedCommands: ["locate", "which", "whereis"],
        phase: "cli-mastery"
      },
      {
        name: "grep",
        description: "Search text patterns in files",
        syntax: "grep [options] pattern [file]",
        examples: [
          "grep 'error' log.txt     # Search for 'error'",
          "grep -i 'Error' file     # Case insensitive",
          "grep -r 'TODO' ./        # Recursive search",
          "grep -n 'pattern' file   # Show line numbers",
          "grep -v 'exclude' file   # Inverse match"
        ],
        options: ["-i (ignore case)", "-r (recursive)", "-n (line numbers)", "-v (inverse)", "-c (count)"],
        relatedCommands: ["egrep", "fgrep", "ack", "ag"],
        phase: "cli-mastery"
      },
      {
        name: "sed",
        description: "Stream editor for text manipulation",
        syntax: "sed [options] 'command' [file]",
        examples: [
          "sed 's/old/new/' file    # Replace first occurrence",
          "sed 's/old/new/g' file   # Replace all occurrences",
          "sed -i 's/old/new/g' file # Edit in-place",
          "sed '5d' file            # Delete line 5",
          "sed -n '10,20p' file     # Print lines 10-20"
        ],
        relatedCommands: ["awk", "tr", "cut"],
        phase: "cli-mastery"
      },
      {
        name: "awk",
        description: "Pattern scanning and processing language",
        syntax: "awk 'pattern {action}' [file]",
        examples: [
          "awk '{print $1}' file    # Print first column",
          "awk -F: '{print $1}' /etc/passwd  # Custom delimiter",
          "awk 'NR>1' file          # Skip first line",
          "awk '{sum+=$1} END {print sum}' file  # Sum column"
        ],
        relatedCommands: ["sed", "cut", "perl"],
        phase: "cli-mastery"
      },
      {
        name: "sort",
        description: "Sort lines in text files",
        syntax: "sort [options] [file]",
        examples: [
          "sort file.txt            # Sort alphabetically",
          "sort -n numbers.txt      # Numeric sort",
          "sort -r file.txt         # Reverse order",
          "sort -k2 file.txt        # Sort by 2nd field",
          "sort -u file.txt         # Remove duplicates"
        ],
        options: ["-n (numeric)", "-r (reverse)", "-k (key)", "-u (unique)"],
        relatedCommands: ["uniq", "comm"],
        phase: "cli-mastery"
      },
      {
        name: "uniq",
        description: "Report or omit repeated lines",
        syntax: "uniq [options] [file]",
        examples: [
          "sort file | uniq         # Remove duplicates",
          "uniq -c file             # Count occurrences",
          "uniq -d file             # Show only duplicates"
        ],
        options: ["-c (count)", "-d (duplicates)", "-u (unique)"],
        relatedCommands: ["sort", "comm"],
        phase: "cli-mastery"
      },
      {
        name: "wc",
        description: "Word, line, and byte count",
        syntax: "wc [options] [file]",
        examples: [
          "wc file.txt              # Lines, words, bytes",
          "wc -l file.txt           # Line count only",
          "wc -w file.txt           # Word count only",
          "ls | wc -l               # Count files"
        ],
        options: ["-l (lines)", "-w (words)", "-c (bytes)", "-m (characters)"],
        phase: "cli-mastery"
      },
      {
        name: "cut",
        description: "Extract columns from text",
        syntax: "cut [options] [file]",
        examples: [
          "cut -d: -f1 /etc/passwd  # First field, : delimiter",
          "cut -c1-10 file          # Characters 1-10",
          "cut -f2,4 file           # Fields 2 and 4"
        ],
        options: ["-d (delimiter)", "-f (fields)", "-c (characters)"],
        relatedCommands: ["awk", "paste"],
        phase: "cli-mastery"
      },
      {
        name: "tr",
        description: "Translate or delete characters",
        syntax: "tr [options] SET1 [SET2]",
        examples: [
          "tr 'a-z' 'A-Z' < file    # Convert to uppercase",
          "tr -d '0-9' < file       # Delete digits",
          "tr -s ' ' < file         # Squeeze spaces"
        ],
        options: ["-d (delete)", "-s (squeeze)", "-c (complement)"],
        phase: "cli-mastery"
      }
    ],
    practiceExercises: [
      "Extract all email addresses from a log file using grep",
      "Count unique IP addresses in an access log",
      "Replace all occurrences of a word in multiple files",
      "Sort a CSV file by the third column numerically",
      "Find all files modified in the last 24 hours larger than 1MB",
      "Create a pipeline to process log files: filter, sort, count",
      "Use awk to calculate the average of numbers in a file"
    ],
    projects: [
      "Log Analyzer: Build a comprehensive log analysis tool using grep, awk, and sed",
      "File Organizer: Create a script that organizes files by type, date, or size",
      "Text Processing Pipeline: Develop a multi-stage text processing system",
      "Duplicate Finder: Build a tool to find and manage duplicate files"
    ]
  },
  {
    phaseId: "filesystem",
    title: "File System & Permissions",
    icon: "📁",
    description: "Master Linux file systems, permissions, and storage management",
    commands: [
      {
        name: "chmod",
        description: "Change file permissions",
        syntax: "chmod [options] mode file",
        examples: [
          "chmod 755 script.sh      # rwxr-xr-x",
          "chmod u+x file           # Add execute for user",
          "chmod g-w file           # Remove write for group",
          "chmod -R 644 dir/        # Recursive change",
          "chmod a+r file           # Add read for all"
        ],
        options: ["-R (recursive)", "-v (verbose)"],
        relatedCommands: ["chown", "chgrp", "umask"],
        phase: "filesystem"
      },
      {
        name: "chown",
        description: "Change file ownership",
        syntax: "chown [options] user[:group] file",
        examples: [
          "chown user file          # Change owner",
          "chown user:group file    # Change owner and group",
          "chown -R user dir/       # Recursive change",
          "chown :group file        # Change group only"
        ],
        options: ["-R (recursive)", "-v (verbose)"],
        relatedCommands: ["chmod", "chgrp"],
        phase: "filesystem"
      },
      {
        name: "chgrp",
        description: "Change group ownership",
        syntax: "chgrp [options] group file",
        examples: [
          "chgrp developers file    # Change group",
          "chgrp -R staff dir/      # Recursive change"
        ],
        options: ["-R (recursive)", "-v (verbose)"],
        relatedCommands: ["chown", "chmod"],
        phase: "filesystem"
      },
      {
        name: "umask",
        description: "Set default file permissions",
        syntax: "umask [mask]",
        examples: [
          "umask                    # Show current mask",
          "umask 022                # Default 755 for dirs, 644 for files",
          "umask 077                # Private files (700/600)"
        ],
        relatedCommands: ["chmod"],
        phase: "filesystem"
      },
      {
        name: "df",
        description: "Display filesystem disk space usage",
        syntax: "df [options] [filesystem]",
        examples: [
          "df -h                    # Human-readable sizes",
          "df -T                    # Show filesystem type",
          "df -i                    # Show inode information",
          "df /home                 # Specific filesystem"
        ],
        options: ["-h (human-readable)", "-T (type)", "-i (inodes)"],
        relatedCommands: ["du", "mount"],
        phase: "filesystem"
      },
      {
        name: "du",
        description: "Display directory space usage",
        syntax: "du [options] [directory]",
        examples: [
          "du -sh /home            # Summary, human-readable",
          "du -h --max-depth=1     # One level deep",
          "du -a                   # Include files",
          "du -c *.log             # Total of files"
        ],
        options: ["-s (summary)", "-h (human-readable)", "-a (all)", "-c (total)"],
        relatedCommands: ["df", "ls"],
        phase: "filesystem"
      },
      {
        name: "mount",
        description: "Mount filesystems",
        syntax: "mount [options] device directory",
        examples: [
          "mount                    # Show mounted filesystems",
          "mount /dev/sdb1 /mnt    # Mount device",
          "mount -t ext4 /dev/sdb1 /mnt  # Specify filesystem",
          "mount -o ro /dev/sdb1 /mnt     # Read-only mount"
        ],
        options: ["-t (type)", "-o (options)", "-a (all in fstab)"],
        relatedCommands: ["umount", "df"],
        phase: "filesystem"
      },
      {
        name: "umount",
        description: "Unmount filesystems",
        syntax: "umount [options] directory|device",
        examples: [
          "umount /mnt             # Unmount directory",
          "umount /dev/sdb1        # Unmount device",
          "umount -l /mnt          # Lazy unmount"
        ],
        options: ["-l (lazy)", "-f (force)"],
        relatedCommands: ["mount"],
        phase: "filesystem"
      },
      {
        name: "ln",
        description: "Create links between files",
        syntax: "ln [options] target link_name",
        examples: [
          "ln -s /path/to/file link    # Symbolic link",
          "ln file hardlink            # Hard link",
          "ln -sf new_target link      # Force update symlink"
        ],
        options: ["-s (symbolic)", "-f (force)", "-v (verbose)"],
        phase: "filesystem"
      },
      {
        name: "tar",
        description: "Archive files",
        syntax: "tar [options] archive files",
        examples: [
          "tar -czf archive.tar.gz dir/   # Create compressed archive",
          "tar -xzf archive.tar.gz        # Extract compressed archive",
          "tar -tvf archive.tar           # List contents",
          "tar -czf - dir/ | ssh user@host 'tar -xzf -'  # Transfer over network"
        ],
        options: ["-c (create)", "-x (extract)", "-z (gzip)", "-f (file)", "-v (verbose)"],
        relatedCommands: ["gzip", "zip", "bzip2"],
        phase: "filesystem"
      },
      {
        name: "gzip",
        description: "Compress files",
        syntax: "gzip [options] file",
        examples: [
          "gzip file.txt           # Compress file",
          "gzip -d file.gz         # Decompress",
          "gzip -k file            # Keep original",
          "gzip -9 file            # Maximum compression"
        ],
        options: ["-d (decompress)", "-k (keep)", "-9 (best compression)"],
        relatedCommands: ["gunzip", "tar", "bzip2"],
        phase: "filesystem"
      },
      {
        name: "zip",
        description: "Create ZIP archives",
        syntax: "zip [options] archive files",
        examples: [
          "zip archive.zip file1 file2    # Create archive",
          "zip -r archive.zip dir/        # Recursive",
          "zip -e secure.zip files        # Encrypted"
        ],
        options: ["-r (recursive)", "-e (encrypt)", "-u (update)"],
        relatedCommands: ["unzip", "tar"],
        phase: "filesystem"
      }
    ],
    practiceExercises: [
      "Set up a shared directory with proper group permissions",
      "Create a backup script using tar with compression",
      "Monitor disk usage and alert when above 80%",
      "Implement a file permission audit system",
      "Create symbolic links for a development environment",
      "Set up automatic mounting of external drives",
      "Build a file compression comparison tool"
    ],
    projects: [
      "Backup System: Create an automated backup solution with rotation",
      "Permission Manager: Build a tool to manage and audit file permissions",
      "Disk Monitor: Develop a disk usage monitoring and alerting system",
      "Archive Manager: Create a comprehensive archive management tool"
    ]
  },
  {
    phaseId: "process-system",
    title: "Process & System Management",
    icon: "⚙️",
    description: "Control processes, monitor system performance, and manage system resources",
    commands: [
      {
        name: "ps",
        description: "Display process status",
        syntax: "ps [options]",
        examples: [
          "ps aux                  # All processes, detailed",
          "ps -ef                  # Full format listing",
          "ps -u username          # Processes by user",
          "ps -p 1234              # Specific process",
          "ps aux | grep nginx     # Find specific process"
        ],
        options: ["aux (all users)", "-e (all)", "-f (full)", "-u (user)"],
        relatedCommands: ["top", "pgrep", "pidof"],
        phase: "process-system"
      },
      {
        name: "top",
        description: "Dynamic process viewer",
        syntax: "top [options]",
        examples: [
          "top                     # Interactive process viewer",
          "top -u username         # Show user's processes",
          "top -p 1234,5678        # Monitor specific PIDs",
          "top -n 1 -b             # Batch mode, one iteration"
        ],
        relatedCommands: ["htop", "ps", "vmstat"],
        phase: "process-system"
      },
      {
        name: "htop",
        description: "Interactive process viewer (enhanced)",
        syntax: "htop [options]",
        examples: [
          "htop                    # Interactive viewer",
          "htop -u username        # Filter by user",
          "htop -t                 # Tree view"
        ],
        relatedCommands: ["top", "ps"],
        phase: "process-system"
      },
      {
        name: "kill",
        description: "Terminate processes",
        syntax: "kill [signal] PID",
        examples: [
          "kill 1234               # Send TERM signal",
          "kill -9 1234            # Force kill (SIGKILL)",
          "kill -15 1234           # Graceful termination",
          "kill -l                 # List all signals",
          "kill -HUP 1234          # Send HUP signal"
        ],
        options: ["-9 (SIGKILL)", "-15 (SIGTERM)", "-HUP (SIGHUP)"],
        relatedCommands: ["killall", "pkill", "xkill"],
        phase: "process-system"
      },
      {
        name: "killall",
        description: "Kill processes by name",
        syntax: "killall [options] name",
        examples: [
          "killall firefox         # Kill all firefox processes",
          "killall -9 chrome       # Force kill chrome",
          "killall -u user         # Kill user's processes"
        ],
        relatedCommands: ["kill", "pkill"],
        phase: "process-system"
      },
      {
        name: "jobs",
        description: "List active jobs",
        syntax: "jobs [options]",
        examples: [
          "jobs                    # List jobs",
          "jobs -l                 # List with PIDs",
          "jobs -p                 # PIDs only"
        ],
        relatedCommands: ["fg", "bg", "nohup"],
        phase: "process-system"
      },
      {
        name: "fg",
        description: "Bring job to foreground",
        syntax: "fg [job_spec]",
        examples: [
          "fg                      # Bring last job to foreground",
          "fg %1                   # Bring job 1 to foreground",
          "fg %vi                  # Bring vi job to foreground"
        ],
        relatedCommands: ["bg", "jobs"],
        phase: "process-system"
      },
      {
        name: "bg",
        description: "Send job to background",
        syntax: "bg [job_spec]",
        examples: [
          "bg                      # Continue last job in background",
          "bg %1                   # Continue job 1 in background",
          "command &               # Start in background"
        ],
        relatedCommands: ["fg", "jobs", "nohup"],
        phase: "process-system"
      },
      {
        name: "nice",
        description: "Run command with modified priority",
        syntax: "nice [options] command",
        examples: [
          "nice -n 10 command      # Lower priority",
          "nice -n -5 command      # Higher priority (needs root)",
          "nice command            # Default nice value"
        ],
        options: ["-n (niceness value)"],
        relatedCommands: ["renice", "ionice"],
        phase: "process-system"
      },
      {
        name: "renice",
        description: "Change priority of running process",
        syntax: "renice priority [options] PID",
        examples: [
          "renice 10 -p 1234       # Change priority of PID",
          "renice 5 -u username    # Change user's processes",
          "renice -5 -p 1234       # Increase priority (needs root)"
        ],
        relatedCommands: ["nice", "top"],
        phase: "process-system"
      },
      {
        name: "uptime",
        description: "Show system uptime and load",
        syntax: "uptime [options]",
        examples: [
          "uptime                  # Show uptime and load",
          "uptime -p               # Pretty format",
          "uptime -s               # System up since"
        ],
        relatedCommands: ["w", "top"],
        phase: "process-system"
      },
      {
        name: "free",
        description: "Display memory usage",
        syntax: "free [options]",
        examples: [
          "free -h                 # Human-readable",
          "free -m                 # Display in MB",
          "free -g                 # Display in GB",
          "free -s 5               # Update every 5 seconds"
        ],
        options: ["-h (human)", "-m (megabytes)", "-g (gigabytes)"],
        relatedCommands: ["vmstat", "top"],
        phase: "process-system"
      },
      {
        name: "vmstat",
        description: "Virtual memory statistics",
        syntax: "vmstat [options] [delay] [count]",
        examples: [
          "vmstat                  # One-time statistics",
          "vmstat 2                # Update every 2 seconds",
          "vmstat 2 5              # 5 updates, 2 sec interval",
          "vmstat -d               # Disk statistics"
        ],
        relatedCommands: ["iostat", "mpstat", "sar"],
        phase: "process-system"
      },
      {
        name: "iostat",
        description: "I/O statistics",
        syntax: "iostat [options] [interval] [count]",
        examples: [
          "iostat                  # Basic I/O stats",
          "iostat -x               # Extended statistics",
          "iostat 2 5              # 5 reports, 2 sec interval",
          "iostat -p sda           # Specific device"
        ],
        relatedCommands: ["vmstat", "iotop", "sar"],
        phase: "process-system"
      },
      {
        name: "crontab",
        description: "Schedule tasks",
        syntax: "crontab [options]",
        examples: [
          "crontab -e              # Edit crontab",
          "crontab -l              # List crontab",
          "crontab -r              # Remove crontab",
          "0 2 * * * /backup.sh    # Daily at 2 AM",
          "*/5 * * * * /check.sh   # Every 5 minutes"
        ],
        options: ["-e (edit)", "-l (list)", "-r (remove)"],
        relatedCommands: ["at", "systemd-timer"],
        phase: "process-system"
      }
    ],
    practiceExercises: [
      "Monitor system resources and identify top consumers",
      "Create a process monitoring script",
      "Set up automatic task scheduling with cron",
      "Implement process priority management",
      "Build a system load alerting mechanism",
      "Practice job control with background processes",
      "Create a resource usage reporting tool"
    ],
    projects: [
      "Process Monitor: Build a comprehensive process monitoring dashboard",
      "Resource Manager: Create a tool for managing system resources",
      "Task Scheduler: Develop an advanced task scheduling system",
      "Performance Analyzer: Build a system performance analysis tool"
    ]
  },
  {
    phaseId: "user-admin",
    title: "User & Group Administration",
    icon: "👥",
    description: "Manage users, groups, and access control",
    commands: [
      {
        name: "id",
        description: "Display user and group IDs",
        syntax: "id [options] [username]",
        examples: [
          "id                      # Current user info",
          "id username             # Specific user info",
          "id -u                   # User ID only",
          "id -g                   # Group ID only",
          "id -Gn                  # Group names"
        ],
        options: ["-u (user)", "-g (group)", "-G (groups)", "-n (names)"],
        relatedCommands: ["whoami", "groups"],
        phase: "user-admin"
      },
      {
        name: "who",
        description: "Show who is logged on",
        syntax: "who [options]",
        examples: [
          "who                     # List logged in users",
          "who -b                  # Last boot time",
          "who -q                  # Quick list and count",
          "who -u                  # Show idle time"
        ],
        relatedCommands: ["w", "users", "last"],
        phase: "user-admin"
      },
      {
        name: "w",
        description: "Show who is logged on and what they're doing",
        syntax: "w [options] [user]",
        examples: [
          "w                       # All logged in users",
          "w username              # Specific user",
          "w -h                    # No header",
          "w -s                    # Short format"
        ],
        relatedCommands: ["who", "users"],
        phase: "user-admin"
      },
      {
        name: "su",
        description: "Switch user",
        syntax: "su [options] [username]",
        examples: [
          "su                      # Switch to root",
          "su - username           # Switch with login shell",
          "su -c 'command' user    # Run command as user",
          "su -s /bin/bash user    # Specify shell"
        ],
        options: ["- (login)", "-c (command)", "-s (shell)"],
        relatedCommands: ["sudo", "runuser"],
        phase: "user-admin"
      },
      {
        name: "sudo",
        description: "Execute as another user",
        syntax: "sudo [options] command",
        examples: [
          "sudo command            # Run as root",
          "sudo -u user command    # Run as specific user",
          "sudo -i                 # Root shell",
          "sudo -l                 # List privileges",
          "sudo -k                 # Forget password"
        ],
        options: ["-u (user)", "-i (login)", "-l (list)", "-k (kill)"],
        relatedCommands: ["su", "visudo"],
        phase: "user-admin"
      },
      {
        name: "useradd",
        description: "Create new user account",
        syntax: "useradd [options] username",
        examples: [
          "useradd john            # Basic user creation",
          "useradd -m -s /bin/bash john  # With home and shell",
          "useradd -g users -G sudo john  # With groups",
          "useradd -e 2024-12-31 temp    # Expiry date"
        ],
        options: ["-m (home)", "-s (shell)", "-g (group)", "-G (groups)"],
        relatedCommands: ["adduser", "usermod"],
        phase: "user-admin"
      },
      {
        name: "usermod",
        description: "Modify user account",
        syntax: "usermod [options] username",
        examples: [
          "usermod -aG sudo john   # Add to sudo group",
          "usermod -l newname old  # Change username",
          "usermod -L john         # Lock account",
          "usermod -U john         # Unlock account",
          "usermod -s /bin/zsh john # Change shell"
        ],
        options: ["-a (append)", "-G (groups)", "-l (login)", "-L (lock)"],
        relatedCommands: ["useradd", "userdel"],
        phase: "user-admin"
      },
      {
        name: "userdel",
        description: "Delete user account",
        syntax: "userdel [options] username",
        examples: [
          "userdel john            # Delete user",
          "userdel -r john         # Delete with home directory",
          "userdel -f john         # Force deletion"
        ],
        options: ["-r (remove home)", "-f (force)"],
        relatedCommands: ["useradd", "usermod"],
        phase: "user-admin"
      },
      {
        name: "passwd",
        description: "Change user password",
        syntax: "passwd [options] [username]",
        examples: [
          "passwd                  # Change own password",
          "passwd john             # Change john's password",
          "passwd -l john          # Lock account",
          "passwd -u john          # Unlock account",
          "passwd -e john          # Force password change"
        ],
        options: ["-l (lock)", "-u (unlock)", "-e (expire)", "-d (delete)"],
        relatedCommands: ["chpasswd", "usermod"],
        phase: "user-admin"
      },
      {
        name: "groupadd",
        description: "Create new group",
        syntax: "groupadd [options] groupname",
        examples: [
          "groupadd developers     # Create group",
          "groupadd -g 1500 staff  # With specific GID",
          "groupadd -r system      # System group"
        ],
        options: ["-g (GID)", "-r (system)"],
        relatedCommands: ["groupmod", "groupdel"],
        phase: "user-admin"
      },
      {
        name: "groupmod",
        description: "Modify group",
        syntax: "groupmod [options] groupname",
        examples: [
          "groupmod -n newname old # Rename group",
          "groupmod -g 1501 group  # Change GID"
        ],
        options: ["-n (name)", "-g (GID)"],
        relatedCommands: ["groupadd", "groupdel"],
        phase: "user-admin"
      },
      {
        name: "groupdel",
        description: "Delete group",
        syntax: "groupdel groupname",
        examples: [
          "groupdel developers     # Delete group"
        ],
        relatedCommands: ["groupadd", "groupmod"],
        phase: "user-admin"
      },
      {
        name: "groups",
        description: "Display group memberships",
        syntax: "groups [username]",
        examples: [
          "groups                  # Current user's groups",
          "groups john             # John's groups"
        ],
        relatedCommands: ["id", "getent"],
        phase: "user-admin"
      },
      {
        name: "visudo",
        description: "Edit sudoers file safely",
        syntax: "visudo [options]",
        examples: [
          "visudo                  # Edit sudoers",
          "visudo -c               # Check syntax",
          "john ALL=(ALL:ALL) ALL  # Full sudo access",
          "%sudo ALL=(ALL:ALL) ALL # Group sudo access"
        ],
        relatedCommands: ["sudo", "sudoers"],
        phase: "user-admin"
      }
    ],
    practiceExercises: [
      "Create a multi-user development environment",
      "Set up sudo access with specific permissions",
      "Implement password policies and aging",
      "Create user onboarding/offboarding scripts",
      "Set up group-based access control",
      "Monitor user login activity",
      "Implement user quotas and limits"
    ],
    projects: [
      "User Management System: Build a comprehensive user administration tool",
      "Access Control Manager: Create a sudo and permission management system",
      "User Audit System: Develop user activity monitoring and reporting",
      "Automated Provisioning: Build user onboarding automation"
    ]
  },
  {
    phaseId: "package-mgmt",
    title: "Package Management",
    icon: "📦",
    description: "Install, update, and manage software packages",
    commands: [
      {
        name: "apt",
        description: "Advanced Package Tool (Debian/Ubuntu)",
        syntax: "apt [command] [options] [package]",
        examples: [
          "apt update              # Update package list",
          "apt upgrade             # Upgrade all packages",
          "apt install nginx       # Install package",
          "apt remove nginx        # Remove package",
          "apt search keyword      # Search packages",
          "apt show package        # Package information"
        ],
        relatedCommands: ["apt-get", "aptitude", "dpkg"],
        phase: "package-mgmt"
      },
      {
        name: "apt-get",
        description: "APT package handling utility",
        syntax: "apt-get [command] [options] [package]",
        examples: [
          "apt-get update          # Update package list",
          "apt-get dist-upgrade    # Distribution upgrade",
          "apt-get autoremove      # Remove unused packages",
          "apt-get clean           # Clean cache"
        ],
        relatedCommands: ["apt", "dpkg"],
        phase: "package-mgmt"
      },
      {
        name: "dpkg",
        description: "Debian package manager",
        syntax: "dpkg [options] [package.deb]",
        examples: [
          "dpkg -i package.deb     # Install .deb file",
          "dpkg -r package         # Remove package",
          "dpkg -l                 # List installed packages",
          "dpkg -L package         # List package files",
          "dpkg -S /path/to/file   # Find package owning file"
        ],
        options: ["-i (install)", "-r (remove)", "-l (list)", "-L (list files)"],
        relatedCommands: ["apt", "apt-get"],
        phase: "package-mgmt"
      },
      {
        name: "yum",
        description: "Yellowdog Updater Modified (Red Hat/CentOS)",
        syntax: "yum [command] [package]",
        examples: [
          "yum update              # Update all packages",
          "yum install httpd       # Install package",
          "yum remove httpd        # Remove package",
          "yum search keyword      # Search packages",
          "yum info package        # Package information",
          "yum history             # Transaction history"
        ],
        relatedCommands: ["dnf", "rpm"],
        phase: "package-mgmt"
      },
      {
        name: "dnf",
        description: "Dandified Yum (Fedora/RHEL 8+)",
        syntax: "dnf [command] [package]",
        examples: [
          "dnf update              # Update packages",
          "dnf install package     # Install package",
          "dnf remove package      # Remove package",
          "dnf autoremove          # Remove unused",
          "dnf history             # View history",
          "dnf group install 'Development Tools'"
        ],
        relatedCommands: ["yum", "rpm"],
        phase: "package-mgmt"
      },
      {
        name: "rpm",
        description: "RPM Package Manager",
        syntax: "rpm [options] [package.rpm]",
        examples: [
          "rpm -ivh package.rpm    # Install package",
          "rpm -e package          # Erase package",
          "rpm -qa                 # Query all packages",
          "rpm -qf /path/to/file   # Find package for file",
          "rpm -ql package         # List package files"
        ],
        options: ["-i (install)", "-e (erase)", "-q (query)", "-v (verbose)"],
        relatedCommands: ["yum", "dnf"],
        phase: "package-mgmt"
      },
      {
        name: "snap",
        description: "Universal package manager",
        syntax: "snap [command] [package]",
        examples: [
          "snap install package    # Install snap",
          "snap list               # List installed snaps",
          "snap remove package     # Remove snap",
          "snap refresh            # Update snaps",
          "snap info package       # Package information"
        ],
        relatedCommands: ["flatpak", "appimage"],
        phase: "package-mgmt"
      },
      {
        name: "wget",
        description: "Download files from the web",
        syntax: "wget [options] URL",
        examples: [
          "wget https://example.com/file.tar.gz",
          "wget -O newname.tar.gz URL  # Save with different name",
          "wget -c URL             # Continue partial download",
          "wget -r -l 2 URL        # Recursive download"
        ],
        options: ["-O (output)", "-c (continue)", "-r (recursive)"],
        relatedCommands: ["curl", "fetch"],
        phase: "package-mgmt"
      },
      {
        name: "curl",
        description: "Transfer data from/to servers",
        syntax: "curl [options] URL",
        examples: [
          "curl https://example.com",
          "curl -o file.tar.gz URL # Save to file",
          "curl -I URL             # Headers only",
          "curl -X POST -d 'data' URL # POST request"
        ],
        options: ["-o (output)", "-I (head)", "-X (request)"],
        relatedCommands: ["wget", "fetch"],
        phase: "package-mgmt"
      }
    ],
    practiceExercises: [
      "Set up a local package repository",
      "Automate system updates with scripts",
      "Build packages from source code",
      "Manage package dependencies",
      "Create a package installation checklist",
      "Compare package versions across systems",
      "Set up automatic security updates"
    ],
    projects: [
      "Package Manager: Build a unified package management interface",
      "Update Automation: Create an intelligent update system",
      "Dependency Resolver: Develop a dependency management tool",
      "Package Builder: Create custom packages from source"
    ]
  },
  {
    phaseId: "networking",
    title: "Network Configuration",
    icon: "🌐",
    description: "Configure and troubleshoot network services",
    commands: [
      {
        name: "ip",
        description: "Show/manipulate routing, network devices",
        syntax: "ip [options] object command",
        examples: [
          "ip a                    # Show all interfaces",
          "ip addr show            # Show IP addresses",
          "ip route show           # Show routing table",
          "ip link set eth0 up     # Bring interface up",
          "ip addr add 192.168.1.10/24 dev eth0"
        ],
        relatedCommands: ["ifconfig", "route"],
        phase: "networking"
      },
      {
        name: "ifconfig",
        description: "Configure network interface (legacy)",
        syntax: "ifconfig [interface] [options]",
        examples: [
          "ifconfig                # Show all interfaces",
          "ifconfig eth0           # Show specific interface",
          "ifconfig eth0 up        # Bring interface up",
          "ifconfig eth0 192.168.1.10 netmask 255.255.255.0"
        ],
        relatedCommands: ["ip", "iwconfig"],
        phase: "networking"
      },
      {
        name: "ping",
        description: "Test network connectivity",
        syntax: "ping [options] host",
        examples: [
          "ping google.com         # Ping hostname",
          "ping -c 4 8.8.8.8       # Ping 4 times",
          "ping -i 2 host          # 2 second interval",
          "ping -s 1000 host       # 1000 byte packets"
        ],
        options: ["-c (count)", "-i (interval)", "-s (size)"],
        relatedCommands: ["ping6", "traceroute"],
        phase: "networking"
      },
      {
        name: "traceroute",
        description: "Trace packet route to host",
        syntax: "traceroute [options] host",
        examples: [
          "traceroute google.com   # Trace route",
          "traceroute -n host      # No DNS resolution",
          "traceroute -m 10 host   # Max 10 hops"
        ],
        options: ["-n (numeric)", "-m (max hops)"],
        relatedCommands: ["tracepath", "mtr"],
        phase: "networking"
      },
      {
        name: "netstat",
        description: "Network statistics (legacy)",
        syntax: "netstat [options]",
        examples: [
          "netstat -tulnp          # TCP/UDP listening ports",
          "netstat -anp            # All connections",
          "netstat -r              # Routing table",
          "netstat -i              # Interface statistics"
        ],
        options: ["-t (TCP)", "-u (UDP)", "-l (listening)", "-n (numeric)"],
        relatedCommands: ["ss", "lsof"],
        phase: "networking"
      },
      {
        name: "ss",
        description: "Socket statistics (modern)",
        syntax: "ss [options]",
        examples: [
          "ss -tulnp               # TCP/UDP listening",
          "ss -anp                 # All sockets",
          "ss -s                   # Summary statistics",
          "ss dst 192.168.1.1      # Filter by destination"
        ],
        options: ["-t (TCP)", "-u (UDP)", "-l (listening)", "-n (numeric)"],
        relatedCommands: ["netstat", "lsof"],
        phase: "networking"
      },
      {
        name: "nslookup",
        description: "DNS lookup",
        syntax: "nslookup [host] [server]",
        examples: [
          "nslookup google.com     # Lookup domain",
          "nslookup 8.8.8.8        # Reverse lookup",
          "nslookup domain 8.8.8.8 # Use specific DNS"
        ],
        relatedCommands: ["dig", "host"],
        phase: "networking"
      },
      {
        name: "dig",
        description: "DNS lookup tool",
        syntax: "dig [options] [host]",
        examples: [
          "dig google.com          # DNS lookup",
          "dig @8.8.8.8 google.com # Use specific DNS",
          "dig +short google.com   # Brief output",
          "dig -x 8.8.8.8          # Reverse lookup",
          "dig ANY google.com      # All records"
        ],
        options: ["+short", "+trace", "-x (reverse)"],
        relatedCommands: ["nslookup", "host"],
        phase: "networking"
      },
      {
        name: "nmcli",
        description: "NetworkManager CLI",
        syntax: "nmcli [options] object command",
        examples: [
          "nmcli dev status        # Device status",
          "nmcli con show          # Show connections",
          "nmcli con up 'Wired'    # Activate connection",
          "nmcli dev wifi list     # List WiFi networks"
        ],
        relatedCommands: ["nmtui", "networkctl"],
        phase: "networking"
      },
      {
        name: "ufw",
        description: "Uncomplicated Firewall",
        syntax: "ufw [command]",
        examples: [
          "ufw enable              # Enable firewall",
          "ufw status              # Show status",
          "ufw allow 22            # Allow SSH",
          "ufw allow from 192.168.1.0/24  # Allow subnet",
          "ufw deny 80             # Deny HTTP"
        ],
        relatedCommands: ["iptables", "firewalld"],
        phase: "networking"
      },
      {
        name: "iptables",
        description: "IPv4 packet filter administration",
        syntax: "iptables [options] [chain] [rule]",
        examples: [
          "iptables -L             # List rules",
          "iptables -A INPUT -p tcp --dport 22 -j ACCEPT",
          "iptables -A INPUT -s 192.168.1.0/24 -j ACCEPT",
          "iptables -D INPUT 1     # Delete rule"
        ],
        relatedCommands: ["ufw", "firewalld", "nftables"],
        phase: "networking"
      }
    ],
    practiceExercises: [
      "Configure static IP addresses on multiple interfaces",
      "Set up port forwarding and NAT",
      "Troubleshoot network connectivity issues",
      "Configure firewall rules for a web server",
      "Monitor network traffic and connections",
      "Set up a simple VPN connection",
      "Implement network security best practices"
    ],
    projects: [
      "Network Monitor: Build a comprehensive network monitoring tool",
      "Firewall Manager: Create an advanced firewall configuration system",
      "Network Troubleshooter: Develop automated network diagnostics",
      "Connection Manager: Build a network connection management tool"
    ]
  },
  {
    phaseId: "services",
    title: "System Services",
    icon: "🔧",
    description: "Manage system services and daemons",
    commands: [
      {
        name: "systemctl",
        description: "Control systemd services",
        syntax: "systemctl [command] [unit]",
        examples: [
          "systemctl status nginx   # Check service status",
          "systemctl start nginx    # Start service",
          "systemctl stop nginx     # Stop service",
          "systemctl restart nginx  # Restart service",
          "systemctl enable nginx   # Enable at boot",
          "systemctl list-units     # List all units"
        ],
        relatedCommands: ["service", "journalctl"],
        phase: "services"
      },
      {
        name: "service",
        description: "Run service scripts (legacy)",
        syntax: "service name command",
        examples: [
          "service nginx status    # Check status",
          "service nginx start     # Start service",
          "service nginx stop      # Stop service",
          "service --status-all    # All services status"
        ],
        relatedCommands: ["systemctl", "init"],
        phase: "services"
      },
      {
        name: "journalctl",
        description: "View systemd logs",
        syntax: "journalctl [options]",
        examples: [
          "journalctl              # View all logs",
          "journalctl -xe          # End of log with explanation",
          "journalctl -u nginx     # Service logs",
          "journalctl -f           # Follow log",
          "journalctl --since today # Today's logs"
        ],
        options: ["-x (explain)", "-e (end)", "-f (follow)", "-u (unit)"],
        relatedCommands: ["systemctl", "dmesg"],
        phase: "services"
      },
      {
        name: "systemd-analyze",
        description: "Analyze system boot performance",
        syntax: "systemd-analyze [command]",
        examples: [
          "systemd-analyze         # Boot time",
          "systemd-analyze blame   # Service startup times",
          "systemd-analyze critical-chain  # Critical path"
        ],
        relatedCommands: ["systemctl", "bootchart"],
        phase: "services"
      },
      {
        name: "timedatectl",
        description: "Control system time and date",
        syntax: "timedatectl [command]",
        examples: [
          "timedatectl             # Show current settings",
          "timedatectl set-timezone America/New_York",
          "timedatectl set-ntp true # Enable NTP"
        ],
        relatedCommands: ["date", "hwclock"],
        phase: "services"
      },
      {
        name: "hostnamectl",
        description: "Control system hostname",
        syntax: "hostnamectl [command]",
        examples: [
          "hostnamectl             # Show hostname info",
          "hostnamectl set-hostname newname",
          "hostnamectl set-hostname server.domain.com"
        ],
        relatedCommands: ["hostname", "domainname"],
        phase: "services"
      },
      {
        name: "loginctl",
        description: "Control systemd login manager",
        syntax: "loginctl [command]",
        examples: [
          "loginctl list-sessions  # List sessions",
          "loginctl show-user john # User info",
          "loginctl terminate-session ID"
        ],
        relatedCommands: ["who", "w"],
        phase: "services"
      }
    ],
    practiceExercises: [
      "Create custom systemd service units",
      "Configure service dependencies and ordering",
      "Set up automatic service recovery",
      "Analyze and optimize boot performance",
      "Implement log rotation and management",
      "Monitor service health and alerts",
      "Create timer units for scheduled tasks"
    ],
    projects: [
      "Service Manager: Build a comprehensive service management interface",
      "Log Analyzer: Create an advanced log analysis system",
      "Boot Optimizer: Develop boot performance optimization tool",
      "Service Monitor: Build real-time service monitoring dashboard"
    ]
  },
  {
    phaseId: "scripting",
    title: "Shell Scripting & Automation",
    icon: "📜",
    description: "Master bash scripting for automation",
    commands: [
      {
        name: "bash",
        description: "Bourne Again Shell",
        syntax: "bash [options] [script]",
        examples: [
          "bash script.sh          # Run script",
          "bash -x script.sh       # Debug mode",
          "bash -n script.sh       # Syntax check",
          "#!/bin/bash             # Shebang line"
        ],
        options: ["-x (debug)", "-n (noexec)", "-e (exit on error)"],
        relatedCommands: ["sh", "zsh", "dash"],
        phase: "scripting"
      },
      {
        name: "if",
        description: "Conditional statement",
        syntax: "if condition; then commands; fi",
        examples: [
          'if [ "$var" = "value" ]; then echo "Match"; fi',
          'if [ -f file.txt ]; then echo "File exists"; fi',
          'if [ $num -gt 10 ]; then echo "Greater"; fi',
          'if command; then echo "Success"; else echo "Failed"; fi'
        ],
        relatedCommands: ["test", "[", "case"],
        phase: "scripting"
      },
      {
        name: "for",
        description: "For loop",
        syntax: "for var in list; do commands; done",
        examples: [
          'for i in 1 2 3; do echo $i; done',
          'for file in *.txt; do echo $file; done',
          'for ((i=0; i<10; i++)); do echo $i; done',
          'for user in $(cat users.txt); do echo $user; done'
        ],
        relatedCommands: ["while", "until"],
        phase: "scripting"
      },
      {
        name: "while",
        description: "While loop",
        syntax: "while condition; do commands; done",
        examples: [
          'while [ $count -lt 10 ]; do echo $count; ((count++)); done',
          'while read line; do echo $line; done < file.txt',
          'while true; do echo "Running..."; sleep 1; done'
        ],
        relatedCommands: ["for", "until"],
        phase: "scripting"
      },
      {
        name: "case",
        description: "Case statement",
        syntax: "case expression in pattern) commands ;; esac",
        examples: [
          'case $option in',
          '  start) echo "Starting..." ;;',
          '  stop) echo "Stopping..." ;;',
          '  *) echo "Unknown option" ;;',
          'esac'
        ],
        relatedCommands: ["if", "select"],
        phase: "scripting"
      },
      {
        name: "function",
        description: "Define functions",
        syntax: "function name() { commands; }",
        examples: [
          'function greet() { echo "Hello, $1"; }',
          'greet() { echo "Hello, $1"; }',
          'greet "World"  # Call function'
        ],
        phase: "scripting"
      },
      {
        name: "read",
        description: "Read user input",
        syntax: "read [options] variable",
        examples: [
          'read -p "Enter name: " name',
          'read -s password  # Silent (no echo)',
          'read -t 10 input  # 10 second timeout',
          'read -a array     # Read into array'
        ],
        options: ["-p (prompt)", "-s (silent)", "-t (timeout)"],
        phase: "scripting"
      },
      {
        name: "export",
        description: "Export variables",
        syntax: "export variable=value",
        examples: [
          'export PATH=$PATH:/new/path',
          'export EDITOR=vim',
          'export -f function_name  # Export function'
        ],
        relatedCommands: ["env", "set"],
        phase: "scripting"
      },
      {
        name: "source",
        description: "Execute script in current shell",
        syntax: "source script.sh",
        examples: [
          'source ~/.bashrc',
          '. ~/.bashrc  # Dot notation',
          'source config.sh  # Load configuration'
        ],
        relatedCommands: [".", "exec"],
        phase: "scripting"
      },
      {
        name: "trap",
        description: "Trap signals",
        syntax: "trap command signal",
        examples: [
          'trap "echo Interrupted" INT',
          'trap cleanup EXIT',
          'trap "" TERM  # Ignore signal'
        ],
        phase: "scripting"
      }
    ],
    practiceExercises: [
      "Create a backup script with rotation",
      "Build a system monitoring script",
      "Develop a user management automation tool",
      "Create a log analysis script",
      "Build a deployment automation script",
      "Develop a security audit script",
      "Create a performance monitoring tool"
    ],
    projects: [
      "Automation Framework: Build a comprehensive automation system",
      "Script Library: Create reusable script modules",
      "Deployment Tool: Develop automated deployment system",
      "Monitoring Suite: Build complete monitoring automation"
    ]
  },
  {
    phaseId: "advanced",
    title: "Advanced Administration",
    icon: "🚀",
    description: "Master advanced system administration",
    commands: [
      {
        name: "rsync",
        description: "Remote/local file synchronization",
        syntax: "rsync [options] source destination",
        examples: [
          "rsync -av source/ dest/  # Archive mode, verbose",
          "rsync -avz user@host:/path/ /local/  # Over SSH",
          "rsync --delete source/ dest/  # Mirror (delete extras)",
          "rsync --exclude='*.log' source/ dest/"
        ],
        options: ["-a (archive)", "-v (verbose)", "-z (compress)", "--delete"],
        relatedCommands: ["scp", "sftp"],
        phase: "advanced"
      },
      {
        name: "lvm",
        description: "Logical Volume Manager commands",
        syntax: "lvm [command]",
        examples: [
          "pvcreate /dev/sdb1      # Create physical volume",
          "vgcreate vg0 /dev/sdb1  # Create volume group",
          "lvcreate -L 10G -n lv0 vg0  # Create logical volume",
          "lvextend -L +5G /dev/vg0/lv0  # Extend volume"
        ],
        relatedCommands: ["fdisk", "parted"],
        phase: "advanced"
      },
      {
        name: "mdadm",
        description: "RAID management",
        syntax: "mdadm [options] [devices]",
        examples: [
          "mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb1 /dev/sdc1",
          "mdadm --detail /dev/md0  # RAID details",
          "mdadm --manage /dev/md0 --add /dev/sdd1"
        ],
        phase: "advanced"
      },
      {
        name: "sysctl",
        description: "Configure kernel parameters",
        syntax: "sysctl [options] [parameter]",
        examples: [
          "sysctl -a               # Show all parameters",
          "sysctl net.ipv4.ip_forward  # Show specific",
          "sysctl -w net.ipv4.ip_forward=1  # Set parameter",
          "sysctl -p               # Load from /etc/sysctl.conf"
        ],
        options: ["-a (all)", "-w (write)", "-p (load)"],
        phase: "advanced"
      },
      {
        name: "strace",
        description: "Trace system calls",
        syntax: "strace [options] command",
        examples: [
          "strace ls               # Trace ls command",
          "strace -p 1234          # Attach to process",
          "strace -e open ls       # Trace only open calls",
          "strace -c ls            # Summary statistics"
        ],
        options: ["-p (pid)", "-e (expression)", "-c (count)"],
        relatedCommands: ["ltrace", "ptrace"],
        phase: "advanced"
      },
      {
        name: "lsof",
        description: "List open files",
        syntax: "lsof [options]",
        examples: [
          "lsof                    # All open files",
          "lsof -u username        # Files by user",
          "lsof -i :80             # Process using port 80",
          "lsof /var/log/syslog    # Process using file"
        ],
        options: ["-u (user)", "-i (internet)", "-p (pid)"],
        phase: "advanced"
      },
      {
        name: "tcpdump",
        description: "Packet analyzer",
        syntax: "tcpdump [options]",
        examples: [
          "tcpdump -i eth0         # Capture on interface",
          "tcpdump -n port 80      # Capture port 80",
          "tcpdump -w capture.pcap # Write to file",
          "tcpdump host 192.168.1.1 # Specific host"
        ],
        options: ["-i (interface)", "-n (numeric)", "-w (write)"],
        relatedCommands: ["wireshark", "tshark"],
        phase: "advanced"
      }
    ],
    practiceExercises: [
      "Set up LVM with dynamic volume management",
      "Configure RAID arrays for redundancy",
      "Optimize kernel parameters for performance",
      "Implement advanced backup strategies",
      "Set up high availability clusters",
      "Configure load balancing",
      "Implement disaster recovery procedures"
    ],
    projects: [
      "Infrastructure Manager: Build complete infrastructure management system",
      "HA Cluster: Set up high availability cluster",
      "Storage Manager: Create advanced storage management solution",
      "Performance Tuner: Develop system optimization tool"
    ]
  },
  {
    phaseId: "security",
    title: "Security & Hardening",
    icon: "🔒",
    description: "Implement comprehensive security measures",
    commands: [
      {
        name: "selinux",
        description: "SELinux management commands",
        syntax: "various SELinux commands",
        examples: [
          "getenforce              # Get SELinux mode",
          "setenforce 0            # Set permissive",
          "sestatus                # SELinux status",
          "semanage port -l        # List port contexts",
          "restorecon -Rv /path    # Restore contexts"
        ],
        relatedCommands: ["apparmor", "grsecurity"],
        phase: "security"
      },
      {
        name: "fail2ban",
        description: "Intrusion prevention",
        syntax: "fail2ban-client [command]",
        examples: [
          "fail2ban-client status  # Show status",
          "fail2ban-client status sshd  # SSH jail status",
          "fail2ban-client set sshd banip 1.2.3.4",
          "fail2ban-client reload  # Reload configuration"
        ],
        phase: "security"
      },
      {
        name: "gpg",
        description: "GNU Privacy Guard",
        syntax: "gpg [options] [file]",
        examples: [
          "gpg --gen-key           # Generate key pair",
          "gpg -e -r user file     # Encrypt for user",
          "gpg -d file.gpg         # Decrypt file",
          "gpg --list-keys         # List public keys",
          "gpg --sign file         # Sign file"
        ],
        options: ["-e (encrypt)", "-d (decrypt)", "-r (recipient)"],
        phase: "security"
      },
      {
        name: "openssl",
        description: "OpenSSL cryptography toolkit",
        syntax: "openssl command [options]",
        examples: [
          "openssl genrsa -out key.pem 2048  # Generate RSA key",
          "openssl req -new -key key.pem -out cert.csr  # Create CSR",
          "openssl x509 -in cert.pem -text  # View certificate",
          "openssl enc -aes256 -in file -out file.enc  # Encrypt file"
        ],
        phase: "security"
      },
      {
        name: "nmap",
        description: "Network exploration and security auditing",
        syntax: "nmap [options] target",
        examples: [
          "nmap 192.168.1.0/24     # Scan network",
          "nmap -sV host           # Version detection",
          "nmap -p 1-1000 host     # Port range scan",
          "nmap -sS host           # SYN stealth scan",
          "nmap -O host            # OS detection"
        ],
        options: ["-sV (version)", "-p (ports)", "-O (OS)"],
        phase: "security"
      },
      {
        name: "auditd",
        description: "Linux audit daemon",
        syntax: "auditctl [options]",
        examples: [
          "auditctl -l             # List rules",
          "auditctl -w /etc/passwd -p wa  # Watch file",
          "aureport                # Generate reports",
          "ausearch -f /etc/passwd # Search audit logs"
        ],
        relatedCommands: ["aureport", "ausearch"],
        phase: "security"
      },
      {
        name: "chroot",
        description: "Change root directory",
        syntax: "chroot newroot [command]",
        examples: [
          "chroot /mnt/sysroot     # Enter chroot",
          "chroot /jail /bin/bash  # Chroot jail"
        ],
        relatedCommands: ["jail", "container"],
        phase: "security"
      }
    ],
    practiceExercises: [
      "Implement SELinux policies",
      "Set up fail2ban for intrusion prevention",
      "Configure SSL/TLS certificates",
      "Perform security audits with nmap",
      "Implement file integrity monitoring",
      "Set up encrypted communications",
      "Create security hardening checklist"
    ],
    projects: [
      "Security Scanner: Build comprehensive security scanning tool",
      "Audit System: Create security audit and compliance system",
      "Encryption Manager: Develop encryption management solution",
      "IDS/IPS: Implement intrusion detection/prevention system"
    ]
  },
  {
    phaseId: "devops",
    title: "DevOps & Cloud",
    icon: "☁️",
    description: "Modern DevOps practices and cloud management",
    commands: [
      {
        name: "docker",
        description: "Container management",
        syntax: "docker [command] [options]",
        examples: [
          "docker ps               # List running containers",
          "docker images           # List images",
          "docker run -d nginx     # Run container",
          "docker exec -it container bash  # Enter container",
          "docker build -t app .   # Build image",
          "docker-compose up -d    # Start services"
        ],
        relatedCommands: ["podman", "containerd"],
        phase: "devops"
      },
      {
        name: "kubectl",
        description: "Kubernetes control",
        syntax: "kubectl [command] [resource]",
        examples: [
          "kubectl get pods        # List pods",
          "kubectl get services    # List services",
          "kubectl apply -f app.yaml  # Deploy application",
          "kubectl describe pod name  # Pod details",
          "kubectl logs pod-name   # View logs",
          "kubectl exec -it pod -- bash  # Enter pod"
        ],
        relatedCommands: ["helm", "kubeadm"],
        phase: "devops"
      },
      {
        name: "git",
        description: "Version control",
        syntax: "git [command] [options]",
        examples: [
          "git init                # Initialize repository",
          "git clone URL           # Clone repository",
          "git add .               # Stage changes",
          "git commit -m 'message' # Commit changes",
          "git push origin main    # Push to remote",
          "git pull                # Pull changes"
        ],
        relatedCommands: ["svn", "mercurial"],
        phase: "devops"
      },
      {
        name: "terraform",
        description: "Infrastructure as Code",
        syntax: "terraform [command]",
        examples: [
          "terraform init          # Initialize",
          "terraform plan          # Plan changes",
          "terraform apply         # Apply changes",
          "terraform destroy       # Destroy infrastructure",
          "terraform validate      # Validate configuration"
        ],
        relatedCommands: ["ansible", "pulumi"],
        phase: "devops"
      },
      {
        name: "ansible",
        description: "Configuration management",
        syntax: "ansible [options] [pattern]",
        examples: [
          "ansible all -m ping     # Ping all hosts",
          "ansible-playbook site.yml  # Run playbook",
          "ansible-vault encrypt file  # Encrypt secrets",
          "ansible-galaxy install role # Install role"
        ],
        relatedCommands: ["puppet", "chef"],
        phase: "devops"
      },
      {
        name: "vagrant",
        description: "Development environments",
        syntax: "vagrant [command]",
        examples: [
          "vagrant init            # Initialize",
          "vagrant up              # Start VM",
          "vagrant ssh             # SSH into VM",
          "vagrant halt            # Stop VM",
          "vagrant destroy         # Remove VM"
        ],
        phase: "devops"
      },
      {
        name: "prometheus",
        description: "Monitoring commands",
        syntax: "promtool [command]",
        examples: [
          "promtool check config prometheus.yml",
          "promtool query instant http://localhost:9090 'up'"
        ],
        relatedCommands: ["grafana", "alertmanager"],
        phase: "devops"
      }
    ],
    practiceExercises: [
      "Deploy applications with Docker",
      "Set up Kubernetes cluster",
      "Implement CI/CD pipelines",
      "Automate infrastructure with Terraform",
      "Configure monitoring with Prometheus/Grafana",
      "Implement GitOps workflows",
      "Set up cloud infrastructure (AWS/Azure/GCP)"
    ],
    projects: [
      "Container Platform: Build complete container orchestration platform",
      "CI/CD Pipeline: Create full CI/CD automation system",
      "Infrastructure Automation: Develop IaC solution",
      "Cloud Manager: Build multi-cloud management tool"
    ]
  }
];