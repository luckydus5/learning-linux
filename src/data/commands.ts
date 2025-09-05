export interface Command {
  name: string;
  syntax: string;
  description: string;
  options: { flag: string; description: string; example?: string }[];
  examples: { command: string; description: string }[];
  relatedCommands?: string[];
  tips?: string[];
  commonErrors?: string[];
}

export interface PhaseCommands {
  phaseId: string;
  phaseName: string;
  commands: Command[];
  practices: {
    title: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    tasks: string[];
    solution?: string;
  }[];
  projects: {
    title: string;
    description: string;
    skills: string[];
    steps: string[];
    expectedOutcome: string;
  }[];
}

export const linuxCommands: PhaseCommands[] = [
  {
    phaseId: "foundation",
    phaseName: "Linux Foundation",
    commands: [
      {
        name: "pwd",
        syntax: "pwd [options]",
        description: "Print Working Directory - Shows the current directory path",
        options: [
          { flag: "-L", description: "Print logical path (default)", example: "pwd -L" },
          { flag: "-P", description: "Print physical path, resolving symbolic links", example: "pwd -P" }
        ],
        examples: [
          { command: "pwd", description: "Show current directory" },
          { command: "echo $PWD", description: "Alternative using environment variable" }
        ],
        tips: ["Use pwd frequently to know your location", "Combine with cd to navigate efficiently"],
        commonErrors: ["No common errors - pwd is very reliable"]
      },
      {
        name: "ls",
        syntax: "ls [options] [directory]",
        description: "List directory contents",
        options: [
          { flag: "-l", description: "Long format with permissions, owner, size", example: "ls -l" },
          { flag: "-a", description: "Show all files including hidden", example: "ls -a" },
          { flag: "-h", description: "Human-readable file sizes", example: "ls -lh" },
          { flag: "-R", description: "Recursive listing", example: "ls -R" },
          { flag: "-t", description: "Sort by modification time", example: "ls -lt" },
          { flag: "-S", description: "Sort by file size", example: "ls -lS" },
          { flag: "-r", description: "Reverse order", example: "ls -lr" },
          { flag: "-d", description: "List directory itself, not contents", example: "ls -ld /home" }
        ],
        examples: [
          { command: "ls -la", description: "List all files with details" },
          { command: "ls -lah", description: "List all with human-readable sizes" },
          { command: "ls -lt | head -10", description: "Show 10 most recently modified files" },
          { command: "ls *.txt", description: "List only txt files" },
          { command: "ls -ld */", description: "List only directories" }
        ],
        relatedCommands: ["dir", "tree", "find"],
        tips: ["Alias 'll' is often set to 'ls -l'", "Use colors for better readability"],
        commonErrors: ["Forgetting -a to see hidden files", "Not using -h for readable sizes"]
      },
      {
        name: "cd",
        syntax: "cd [directory]",
        description: "Change directory",
        options: [
          { flag: "~", description: "Go to home directory", example: "cd ~" },
          { flag: "-", description: "Go to previous directory", example: "cd -" },
          { flag: "..", description: "Go to parent directory", example: "cd .." },
          { flag: "../..", description: "Go up two levels", example: "cd ../.." }
        ],
        examples: [
          { command: "cd /etc", description: "Go to /etc directory" },
          { command: "cd", description: "Go to home directory (shortcut)" },
          { command: "cd ~/Documents", description: "Go to Documents in home" },
          { command: "cd -", description: "Toggle between last two directories" },
          { command: "cd /var/log && ls", description: "Change directory and list contents" }
        ],
        relatedCommands: ["pushd", "popd", "dirs"],
        tips: ["Use tab completion to avoid typos", "cd without arguments goes home"],
        commonErrors: ["Spaces in directory names need quotes or escaping"]
      },
      {
        name: "mkdir",
        syntax: "mkdir [options] directory",
        description: "Make directories",
        options: [
          { flag: "-p", description: "Create parent directories as needed", example: "mkdir -p /path/to/dir" },
          { flag: "-m", description: "Set permissions", example: "mkdir -m 755 newdir" },
          { flag: "-v", description: "Verbose output", example: "mkdir -v newdir" }
        ],
        examples: [
          { command: "mkdir project", description: "Create single directory" },
          { command: "mkdir -p src/main/java", description: "Create nested directories" },
          { command: "mkdir {test,docs,src}", description: "Create multiple directories" },
          { command: "mkdir -m 700 private", description: "Create with specific permissions" },
          { command: "mkdir -p ~/work/{project1,project2}/{src,docs,tests}", description: "Complex structure" }
        ],
        relatedCommands: ["rmdir", "rm -rf", "touch"],
        tips: ["Use -p to avoid errors", "Brace expansion saves time"],
        commonErrors: ["Forgetting -p for nested directories", "Permission denied in system directories"]
      },
      {
        name: "cp",
        syntax: "cp [options] source destination",
        description: "Copy files or directories",
        options: [
          { flag: "-r", description: "Recursive copy for directories", example: "cp -r dir1 dir2" },
          { flag: "-i", description: "Interactive mode, ask before overwrite", example: "cp -i file1 file2" },
          { flag: "-v", description: "Verbose, show what's being copied", example: "cp -v file1 file2" },
          { flag: "-p", description: "Preserve attributes", example: "cp -p file1 file2" },
          { flag: "-u", description: "Update, copy only newer files", example: "cp -u source dest" },
          { flag: "-a", description: "Archive mode, preserve everything", example: "cp -a source dest" }
        ],
        examples: [
          { command: "cp file.txt backup.txt", description: "Simple file copy" },
          { command: "cp -r /source/dir /dest/", description: "Copy entire directory" },
          { command: "cp *.jpg ~/Pictures/", description: "Copy all jpg files" },
          { command: "cp -ri source/ dest/", description: "Interactive recursive copy" },
          { command: "cp -av /source/* /backup/", description: "Archive copy with verbose" }
        ],
        relatedCommands: ["mv", "rsync", "dd"],
        tips: ["Use -i to prevent accidental overwrites", "cp -a is best for backups"],
        commonErrors: ["Forgetting -r for directories", "Overwriting important files without -i"]
      },
      {
        name: "mv",
        syntax: "mv [options] source destination",
        description: "Move or rename files and directories",
        options: [
          { flag: "-i", description: "Interactive mode", example: "mv -i old new" },
          { flag: "-f", description: "Force, don't prompt", example: "mv -f old new" },
          { flag: "-n", description: "No overwrite", example: "mv -n old new" },
          { flag: "-v", description: "Verbose", example: "mv -v old new" },
          { flag: "-u", description: "Update only", example: "mv -u source dest" }
        ],
        examples: [
          { command: "mv oldname.txt newname.txt", description: "Rename a file" },
          { command: "mv file.txt /other/directory/", description: "Move to another directory" },
          { command: "mv *.log /var/log/old/", description: "Move multiple files" },
          { command: "mv -i important.txt backup/", description: "Interactive move" },
          { command: "mv dir1 dir2", description: "Rename directory" }
        ],
        relatedCommands: ["cp", "rename", "mmv"],
        tips: ["mv is both move and rename", "Use -i for important files"],
        commonErrors: ["Moving files to non-existent directories", "Accidentally overwriting"]
      },
      {
        name: "rm",
        syntax: "rm [options] file",
        description: "Remove files or directories",
        options: [
          { flag: "-i", description: "Interactive, ask before each removal", example: "rm -i file" },
          { flag: "-f", description: "Force, ignore errors", example: "rm -f file" },
          { flag: "-r", description: "Recursive, for directories", example: "rm -r directory" },
          { flag: "-v", description: "Verbose", example: "rm -v file" },
          { flag: "-d", description: "Remove empty directories", example: "rm -d emptydir" }
        ],
        examples: [
          { command: "rm file.txt", description: "Remove single file" },
          { command: "rm -r directory/", description: "Remove directory and contents" },
          { command: "rm -rf /tmp/junk/", description: "Force remove directory" },
          { command: "rm -i *.tmp", description: "Interactive remove temp files" },
          { command: "rm -rv logs/", description: "Verbose recursive removal" }
        ],
        relatedCommands: ["rmdir", "unlink", "shred"],
        tips: ["Always use -i for important data", "rm -rf is irreversible!"],
        commonErrors: ["rm -rf / is catastrophic", "No undo for rm command"]
      },
      {
        name: "cat",
        syntax: "cat [options] [file]",
        description: "Concatenate and display files",
        options: [
          { flag: "-n", description: "Number lines", example: "cat -n file.txt" },
          { flag: "-b", description: "Number non-blank lines", example: "cat -b file.txt" },
          { flag: "-s", description: "Squeeze blank lines", example: "cat -s file.txt" },
          { flag: "-E", description: "Show line endings", example: "cat -E file.txt" },
          { flag: "-T", description: "Show tabs", example: "cat -T file.txt" }
        ],
        examples: [
          { command: "cat file.txt", description: "Display file contents" },
          { command: "cat file1 file2 > combined", description: "Concatenate files" },
          { command: "cat -n script.sh", description: "Show with line numbers" },
          { command: "cat << EOF > file.txt", description: "Create file with heredoc" },
          { command: "cat /etc/passwd | grep user", description: "Pipe to grep" }
        ],
        relatedCommands: ["less", "more", "head", "tail", "tac"],
        tips: ["Use less for large files", "cat is great for small files"],
        commonErrors: ["Using cat for large files", "cat binary files shows garbage"]
      },
      {
        name: "chmod",
        syntax: "chmod [options] mode file",
        description: "Change file permissions",
        options: [
          { flag: "-R", description: "Recursive", example: "chmod -R 755 directory" },
          { flag: "-c", description: "Report changes", example: "chmod -c 644 file" },
          { flag: "-v", description: "Verbose", example: "chmod -v 755 script.sh" },
          { flag: "--reference", description: "Copy permissions from file", example: "chmod --reference=file1 file2" }
        ],
        examples: [
          { command: "chmod 755 script.sh", description: "rwxr-xr-x (typical for scripts)" },
          { command: "chmod 644 file.txt", description: "rw-r--r-- (typical for files)" },
          { command: "chmod u+x script.sh", description: "Add execute for user" },
          { command: "chmod go-w file.txt", description: "Remove write for group/others" },
          { command: "chmod -R 755 /var/www", description: "Recursive permission change" }
        ],
        relatedCommands: ["chown", "chgrp", "umask"],
        tips: ["755 for executables, 644 for regular files", "Understand octal notation"],
        commonErrors: ["777 is usually too permissive", "Forgetting executable bit for scripts"]
      },
      {
        name: "man",
        syntax: "man [section] command",
        description: "Display manual pages",
        options: [
          { flag: "-k", description: "Search by keyword", example: "man -k network" },
          { flag: "-f", description: "Short description", example: "man -f ls" },
          { flag: "1-8", description: "Section numbers", example: "man 5 passwd" }
        ],
        examples: [
          { command: "man ls", description: "Show manual for ls command" },
          { command: "man -k copy", description: "Search for copy-related commands" },
          { command: "man 5 crontab", description: "Show crontab file format (section 5)" },
          { command: "man man", description: "Learn about man itself" },
          { command: "man -f printf", description: "Brief description of printf" }
        ],
        relatedCommands: ["info", "help", "--help", "apropos", "whatis"],
        tips: ["Press / to search, q to quit", "Man sections: 1=commands, 5=file formats, 8=admin"],
        commonErrors: ["Not knowing about sections", "Not using search features"]
      }
    ],
    practices: [
      {
        title: "Basic Navigation Practice",
        difficulty: "beginner",
        tasks: [
          "Navigate to your home directory using 3 different methods",
          "Create a directory structure: ~/practice/level1/level2/level3",
          "Navigate to level3 and print your current directory",
          "Return to home using relative path only",
          "List all hidden files in your home directory"
        ]
      },
      {
        title: "File Operations Challenge",
        difficulty: "intermediate",
        tasks: [
          "Create 10 files named file1.txt through file10.txt using a single command",
          "Copy all even-numbered files to a new directory called 'even'",
          "Rename all .txt files to .bak using a loop",
          "Remove all files modified more than 7 days ago",
          "Create a backup of your entire home directory structure (directories only)"
        ]
      },
      {
        title: "Permission Management",
        difficulty: "advanced",
        tasks: [
          "Create a shared directory where your group can read/write but others can only read",
          "Set up a directory where new files automatically inherit group ownership",
          "Create a script that only you can execute, others can read",
          "Set up a 'drop box' directory where others can add files but not see contents",
          "Implement a backup script with proper permission preservation"
        ]
      }
    ],
    projects: [
      {
        title: "System Information Dashboard",
        description: "Create a script that generates a comprehensive system report",
        skills: ["Command chaining", "Output redirection", "System commands"],
        steps: [
          "Use uname to get kernel information",
          "Extract CPU info from /proc/cpuinfo",
          "Display memory usage with free",
          "Show disk usage with df",
          "List all users from /etc/passwd",
          "Format output into a readable report"
        ],
        expectedOutcome: "A formatted text report showing system specifications, resource usage, and user information"
      },
      {
        title: "Automated Backup System",
        description: "Build a backup script with rotation and compression",
        skills: ["File operations", "Compression", "Date handling", "Scripting"],
        steps: [
          "Create script to backup specified directories",
          "Implement date-stamped backup names",
          "Add compression using tar and gzip",
          "Implement rotation to keep only last 7 backups",
          "Add logging of backup operations",
          "Set up as a cron job for daily execution"
        ],
        expectedOutcome: "Automated daily backups with compression, rotation, and logging"
      }
    ]
  },
  {
    phaseId: "cli-mastery",
    phaseName: "Command Line Mastery",
    commands: [
      {
        name: "grep",
        syntax: "grep [options] pattern [file]",
        description: "Search text patterns in files",
        options: [
          { flag: "-i", description: "Case insensitive search", example: "grep -i 'error' log.txt" },
          { flag: "-r", description: "Recursive search", example: "grep -r 'TODO' ." },
          { flag: "-n", description: "Show line numbers", example: "grep -n 'function' script.js" },
          { flag: "-v", description: "Invert match", example: "grep -v 'debug' log.txt" },
          { flag: "-c", description: "Count matches", example: "grep -c 'error' *.log" },
          { flag: "-l", description: "List files with matches", example: "grep -l 'import' *.py" },
          { flag: "-E", description: "Extended regex", example: "grep -E 'error|warning' log.txt" },
          { flag: "-w", description: "Match whole words", example: "grep -w 'log' file.txt" },
          { flag: "-A", description: "Lines after match", example: "grep -A 2 'error' log.txt" },
          { flag: "-B", description: "Lines before match", example: "grep -B 2 'error' log.txt" }
        ],
        examples: [
          { command: "grep 'error' /var/log/syslog", description: "Find errors in system log" },
          { command: "ps aux | grep python", description: "Find Python processes" },
          { command: "grep -r 'TODO' --include='*.js' .", description: "Find TODOs in JS files" },
          { command: "grep -E '^[0-9]+' file.txt", description: "Lines starting with numbers" },
          { command: "grep -v '^#' config.conf", description: "Exclude comment lines" }
        ],
        relatedCommands: ["egrep", "fgrep", "ack", "ag", "ripgrep"],
        tips: ["Use -F for fixed strings (faster)", "Combine with find for powerful searches"],
        commonErrors: ["Forgetting quotes around patterns with spaces", "Not escaping special regex characters"]
      },
      {
        name: "sed",
        syntax: "sed [options] 'command' file",
        description: "Stream editor for text transformation",
        options: [
          { flag: "-i", description: "Edit file in place", example: "sed -i 's/old/new/g' file.txt" },
          { flag: "-e", description: "Multiple commands", example: "sed -e 's/a/A/g' -e 's/b/B/g'" },
          { flag: "-n", description: "Suppress output", example: "sed -n '10p' file.txt" },
          { flag: "-r", description: "Extended regex", example: "sed -r 's/[0-9]+/NUM/g'" }
        ],
        examples: [
          { command: "sed 's/old/new/g' file.txt", description: "Replace all occurrences" },
          { command: "sed '5d' file.txt", description: "Delete line 5" },
          { command: "sed -n '10,20p' file.txt", description: "Print lines 10-20" },
          { command: "sed -i.bak 's/foo/bar/g' *.txt", description: "Replace with backup" },
          { command: "sed '/^#/d' config.conf", description: "Remove comment lines" }
        ],
        relatedCommands: ["awk", "perl", "tr", "cut"],
        tips: ["Always test without -i first", "Use -i.bak for safety"],
        commonErrors: ["Forgetting g flag for global replacement", "Wrong delimiter with paths"]
      },
      {
        name: "awk",
        syntax: "awk 'pattern {action}' file",
        description: "Pattern scanning and processing language",
        options: [
          { flag: "-F", description: "Field separator", example: "awk -F: '{print $1}' /etc/passwd" },
          { flag: "-v", description: "Set variable", example: "awk -v n=10 '{if(NR==n) print}'" },
          { flag: "-f", description: "Read program from file", example: "awk -f script.awk data.txt" }
        ],
        examples: [
          { command: "awk '{print $1}' file.txt", description: "Print first column" },
          { command: "awk -F: '{print $1,$7}' /etc/passwd", description: "Print username and shell" },
          { command: "awk '{sum+=$1} END {print sum}'", description: "Sum first column" },
          { command: "awk 'NR==5' file.txt", description: "Print line 5" },
          { command: "awk '$3 > 100 {print $1,$3}'", description: "Conditional printing" }
        ],
        relatedCommands: ["sed", "cut", "perl", "gawk"],
        tips: ["NR is line number, NF is field count", "$0 is entire line"],
        commonErrors: ["Confusing awk and shell variables", "Wrong field separator"]
      },
      {
        name: "find",
        syntax: "find [path] [expression]",
        description: "Search for files and directories",
        options: [
          { flag: "-name", description: "Search by name", example: "find . -name '*.txt'" },
          { flag: "-type", description: "File type (f/d/l)", example: "find . -type d" },
          { flag: "-size", description: "File size", example: "find . -size +10M" },
          { flag: "-mtime", description: "Modified time", example: "find . -mtime -7" },
          { flag: "-exec", description: "Execute command", example: "find . -name '*.log' -exec rm {} \\;" },
          { flag: "-perm", description: "Permissions", example: "find . -perm 755" },
          { flag: "-user", description: "Owner", example: "find . -user john" }
        ],
        examples: [
          { command: "find . -name '*.pdf'", description: "Find all PDF files" },
          { command: "find /tmp -type f -mtime +30 -delete", description: "Delete old temp files" },
          { command: "find . -type d -empty", description: "Find empty directories" },
          { command: "find . -name '*.sh' -exec chmod +x {} \\;", description: "Make scripts executable" },
          { command: "find . -size +100M -size -500M", description: "Files between 100-500MB" }
        ],
        relatedCommands: ["locate", "which", "whereis", "fd"],
        tips: ["Use -print0 with xargs -0 for spaces", "Combine multiple conditions"],
        commonErrors: ["Forgetting quotes around patterns", "Wrong -exec syntax"]
      },
      {
        name: "xargs",
        syntax: "xargs [options] [command]",
        description: "Build and execute commands from input",
        options: [
          { flag: "-0", description: "Null separator", example: "find . -print0 | xargs -0 rm" },
          { flag: "-n", description: "Max arguments", example: "echo 1 2 3 | xargs -n 1 echo" },
          { flag: "-I", description: "Replace string", example: "ls | xargs -I {} mv {} {}.bak" },
          { flag: "-p", description: "Prompt before execution", example: "ls | xargs -p rm" },
          { flag: "-t", description: "Print commands", example: "ls | xargs -t rm" }
        ],
        examples: [
          { command: "find . -name '*.tmp' | xargs rm", description: "Remove all tmp files" },
          { command: "cat urls.txt | xargs -n 1 curl -O", description: "Download multiple URLs" },
          { command: "ls *.jpg | xargs -I {} convert {} {}.png", description: "Convert images" },
          { command: "ps aux | grep zombie | awk '{print $2}' | xargs kill", description: "Kill zombie processes" },
          { command: "find . -type f | xargs -n 1 -P 4 gzip", description: "Parallel compression" }
        ],
        relatedCommands: ["parallel", "find -exec", "for loop"],
        tips: ["Use -0 for filenames with spaces", "-P for parallel execution"],
        commonErrors: ["Not handling spaces in filenames", "Command line too long"]
      },
      {
        name: "sort",
        syntax: "sort [options] [file]",
        description: "Sort lines in text files",
        options: [
          { flag: "-n", description: "Numeric sort", example: "sort -n numbers.txt" },
          { flag: "-r", description: "Reverse order", example: "sort -r file.txt" },
          { flag: "-k", description: "Sort by field", example: "sort -k2 data.txt" },
          { flag: "-u", description: "Unique lines only", example: "sort -u file.txt" },
          { flag: "-t", description: "Field separator", example: "sort -t: -k3 /etc/passwd" },
          { flag: "-h", description: "Human numeric sort", example: "du -h | sort -h" }
        ],
        examples: [
          { command: "sort file.txt", description: "Alphabetical sort" },
          { command: "sort -n -r numbers.txt", description: "Reverse numeric sort" },
          { command: "sort -t: -k3n /etc/passwd", description: "Sort by UID" },
          { command: "ls -l | sort -k5 -n", description: "Sort by file size" },
          { command: "sort -u file.txt | wc -l", description: "Count unique lines" }
        ],
        relatedCommands: ["uniq", "comm", "join"],
        tips: ["Combine with uniq for unique sorted", "Use -h for human-readable numbers"],
        commonErrors: ["Forgetting -n for numbers", "Wrong field number with -k"]
      },
      {
        name: "cut",
        syntax: "cut [options] [file]",
        description: "Extract columns from files",
        options: [
          { flag: "-f", description: "Select fields", example: "cut -f1,3 data.txt" },
          { flag: "-d", description: "Delimiter", example: "cut -d: -f1 /etc/passwd" },
          { flag: "-c", description: "Character positions", example: "cut -c1-10 file.txt" },
          { flag: "-b", description: "Byte positions", example: "cut -b1-10 file.txt" },
          { flag: "--complement", description: "Invert selection", example: "cut -d, -f2 --complement" }
        ],
        examples: [
          { command: "cut -d: -f1 /etc/passwd", description: "Extract usernames" },
          { command: "cut -f2- data.tsv", description: "All fields except first" },
          { command: "echo 'hello world' | cut -d' ' -f2", description: "Extract second word" },
          { command: "cut -c1-3,7-9 file.txt", description: "Extract specific characters" },
          { command: "ps aux | cut -c1-80", description: "Limit output width" }
        ],
        relatedCommands: ["awk", "sed", "column"],
        tips: ["Default delimiter is tab", "Use awk for complex extractions"],
        commonErrors: ["Wrong delimiter", "Field counting starts at 1"]
      },
      {
        name: "tr",
        syntax: "tr [options] SET1 [SET2]",
        description: "Translate or delete characters",
        options: [
          { flag: "-d", description: "Delete characters", example: "tr -d ' ' < file.txt" },
          { flag: "-s", description: "Squeeze repeats", example: "tr -s ' ' < file.txt" },
          { flag: "-c", description: "Complement", example: "tr -cd '[:print:]' < file.txt" }
        ],
        examples: [
          { command: "tr 'a-z' 'A-Z' < file.txt", description: "Convert to uppercase" },
          { command: "tr -d '\\r' < windows.txt > unix.txt", description: "Remove carriage returns" },
          { command: "tr -s ' ' < file.txt", description: "Squeeze multiple spaces" },
          { command: "tr '[:lower:]' '[:upper:]'", description: "Using character classes" },
          { command: "tr -cd '[:alnum:]' < file.txt", description: "Keep only alphanumeric" }
        ],
        relatedCommands: ["sed", "awk", "fold"],
        tips: ["Use character classes for portability", "Input from stdin or redirection"],
        commonErrors: ["Forgetting input redirection", "Wrong character range syntax"]
      },
      {
        name: "head",
        syntax: "head [options] [file]",
        description: "Display first lines of file",
        options: [
          { flag: "-n", description: "Number of lines", example: "head -n 20 file.txt" },
          { flag: "-c", description: "Number of bytes", example: "head -c 100 file.txt" },
          { flag: "-q", description: "Quiet mode", example: "head -q file1 file2" },
          { flag: "-v", description: "Verbose mode", example: "head -v file.txt" }
        ],
        examples: [
          { command: "head file.txt", description: "First 10 lines (default)" },
          { command: "head -n 5 file.txt", description: "First 5 lines" },
          { command: "head -n -5 file.txt", description: "All except last 5 lines" },
          { command: "ps aux | head -20", description: "Top 20 processes" },
          { command: "head -c 1024 binary.dat", description: "First 1KB of file" }
        ],
        relatedCommands: ["tail", "sed", "less"],
        tips: ["Negative -n excludes from end", "Combine with tail for middle extraction"],
        commonErrors: ["Confusing with tail syntax", "Using on binary files"]
      },
      {
        name: "tail",
        syntax: "tail [options] [file]",
        description: "Display last lines of file",
        options: [
          { flag: "-n", description: "Number of lines", example: "tail -n 20 file.txt" },
          { flag: "-f", description: "Follow file changes", example: "tail -f /var/log/syslog" },
          { flag: "-F", description: "Follow with retry", example: "tail -F rotating.log" },
          { flag: "-c", description: "Number of bytes", example: "tail -c 100 file.txt" },
          { flag: "--pid", description: "Stop when process dies", example: "tail -f --pid=$$ log" }
        ],
        examples: [
          { command: "tail file.txt", description: "Last 10 lines (default)" },
          { command: "tail -f /var/log/syslog", description: "Monitor log in real-time" },
          { command: "tail -n +10 file.txt", description: "From line 10 to end" },
          { command: "tail -f access.log | grep 404", description: "Monitor for 404 errors" },
          { command: "journalctl | tail -50", description: "Last 50 journal entries" }
        ],
        relatedCommands: ["head", "less", "journalctl"],
        tips: ["Use -F for log rotation", "Ctrl+C to stop -f"],
        commonErrors: ["Forgetting -f for monitoring", "Not using -F for rotating logs"]
      }
    ],
    practices: [
      {
        title: "Log Analysis Mastery",
        difficulty: "intermediate",
        tasks: [
          "Extract all ERROR lines from a log file and count occurrences by hour",
          "Find the top 10 IP addresses in an access log",
          "Calculate average response time from Apache logs",
          "Extract all unique email addresses from a text file",
          "Monitor a log file and alert when specific pattern appears"
        ]
      },
      {
        title: "Text Processing Pipeline",
        difficulty: "advanced",
        tasks: [
          "Create a pipeline to process CSV: sort by column 3, remove duplicates, format output",
          "Build a script to analyze code files: count functions, find TODOs, check style",
          "Process system logs to generate daily summary report",
          "Create a data transformation pipeline using sed, awk, and sort",
          "Build a real-time monitoring script using tail, grep, and notifications"
        ]
      }
    ],
    projects: [
      {
        title: "Log Analysis System",
        description: "Build a comprehensive log analysis tool",
        skills: ["grep", "awk", "sed", "sort", "uniq"],
        steps: [
          "Parse multiple log formats (Apache, Nginx, syslog)",
          "Extract key metrics (errors, response times, status codes)",
          "Generate hourly and daily summaries",
          "Create alerts for anomalies",
          "Output formatted reports and visualizations",
          "Implement log rotation handling"
        ],
        expectedOutcome: "Automated log analysis with reports, metrics, and alerting"
      },
      {
        title: "Data Processing Pipeline",
        description: "Create a ETL pipeline for text data",
        skills: ["Text processing", "Regular expressions", "Shell scripting"],
        steps: [
          "Extract data from multiple sources",
          "Transform data formats (CSV, JSON, XML)",
          "Clean and validate data",
          "Aggregate and summarize information",
          "Generate reports in multiple formats",
          "Implement error handling and logging"
        ],
        expectedOutcome: "Robust data processing pipeline with error handling and reporting"
      }
    ]
  },
  {
    phaseId: "filesystem",
    phaseName: "File System & Permissions",
    commands: [
      {
        name: "mount",
        syntax: "mount [options] device directory",
        description: "Mount a filesystem",
        options: [
          { flag: "-t", description: "Filesystem type", example: "mount -t ext4 /dev/sdb1 /mnt" },
          { flag: "-o", description: "Mount options", example: "mount -o ro,noexec /dev/sdb1 /mnt" },
          { flag: "-a", description: "Mount all in fstab", example: "mount -a" },
          { flag: "-r", description: "Read-only mount", example: "mount -r /dev/sdb1 /mnt" },
          { flag: "-v", description: "Verbose", example: "mount -v /dev/sdb1 /mnt" }
        ],
        examples: [
          { command: "mount", description: "Show all mounted filesystems" },
          { command: "mount /dev/sdb1 /mnt/usb", description: "Mount USB drive" },
          { command: "mount -t iso9660 -o loop disk.iso /mnt/iso", description: "Mount ISO file" },
          { command: "mount -o remount,rw /", description: "Remount root as read-write" },
          { command: "mount --bind /source /target", description: "Bind mount directory" }
        ],
        relatedCommands: ["umount", "findmnt", "lsblk", "df"],
        tips: ["Check /etc/fstab for permanent mounts", "Use findmnt for tree view"],
        commonErrors: ["Mount point doesn't exist", "Filesystem type mismatch"]
      },
      {
        name: "df",
        syntax: "df [options] [file]",
        description: "Display disk space usage",
        options: [
          { flag: "-h", description: "Human readable", example: "df -h" },
          { flag: "-T", description: "Show filesystem type", example: "df -T" },
          { flag: "-i", description: "Show inodes", example: "df -i" },
          { flag: "-a", description: "Show all filesystems", example: "df -a" },
          { flag: "-x", description: "Exclude filesystem type", example: "df -x tmpfs" }
        ],
        examples: [
          { command: "df -h", description: "Human readable disk usage" },
          { command: "df -h /home", description: "Check specific directory" },
          { command: "df -Th", description: "Show with filesystem types" },
          { command: "df -i", description: "Check inode usage" },
          { command: "df -h | grep -v tmpfs", description: "Exclude temporary filesystems" }
        ],
        relatedCommands: ["du", "lsblk", "findmnt"],
        tips: ["Use -h for readable output", "Check inodes with -i"],
        commonErrors: ["Confusing df with du", "Not checking inode exhaustion"]
      },
      {
        name: "du",
        syntax: "du [options] [directory]",
        description: "Display directory space usage",
        options: [
          { flag: "-h", description: "Human readable", example: "du -h" },
          { flag: "-s", description: "Summary only", example: "du -sh /var" },
          { flag: "-a", description: "All files", example: "du -ah" },
          { flag: "-c", description: "Grand total", example: "du -ch *" },
          { flag: "--max-depth", description: "Limit depth", example: "du --max-depth=1" }
        ],
        examples: [
          { command: "du -sh *", description: "Size of all items in current directory" },
          { command: "du -h --max-depth=1 /", description: "Top-level directory sizes" },
          { command: "du -ah . | sort -rh | head -20", description: "Find 20 largest files" },
          { command: "du -sh /var/log/*", description: "Size of each log file" },
          { command: "du -cb *.txt | tail -1", description: "Total size of text files" }
        ],
        relatedCommands: ["df", "ncdu", "tree"],
        tips: ["Use ncdu for interactive view", "Combine with sort for largest files"],
        commonErrors: ["Takes long on large directories", "Permission denied errors"]
      },
      {
        name: "ln",
        syntax: "ln [options] target link_name",
        description: "Create links between files",
        options: [
          { flag: "-s", description: "Symbolic link", example: "ln -s /path/to/file link" },
          { flag: "-f", description: "Force", example: "ln -f file link" },
          { flag: "-i", description: "Interactive", example: "ln -i file link" },
          { flag: "-v", description: "Verbose", example: "ln -sv file link" },
          { flag: "-r", description: "Relative symlink", example: "ln -sr file link" }
        ],
        examples: [
          { command: "ln -s /usr/bin/python3 /usr/bin/python", description: "Create symbolic link" },
          { command: "ln file.txt hardlink.txt", description: "Create hard link" },
          { command: "ln -s ../config/app.conf .", description: "Relative symbolic link" },
          { command: "ln -sf new_target existing_link", description: "Update symbolic link" },
          { command: "find . -type l -ls", description: "Find all symbolic links" }
        ],
        relatedCommands: ["readlink", "realpath", "unlink"],
        tips: ["Use -s for symlinks (most common)", "Hard links share same inode"],
        commonErrors: ["Hard links can't cross filesystems", "Broken symlinks"]
      },
      {
        name: "tar",
        syntax: "tar [options] archive files",
        description: "Archive files",
        options: [
          { flag: "-c", description: "Create archive", example: "tar -cf archive.tar files" },
          { flag: "-x", description: "Extract archive", example: "tar -xf archive.tar" },
          { flag: "-z", description: "Gzip compression", example: "tar -czf archive.tar.gz files" },
          { flag: "-j", description: "Bzip2 compression", example: "tar -cjf archive.tar.bz2 files" },
          { flag: "-v", description: "Verbose", example: "tar -xvf archive.tar" },
          { flag: "-t", description: "List contents", example: "tar -tf archive.tar" },
          { flag: "-C", description: "Change directory", example: "tar -xf archive.tar -C /tmp" }
        ],
        examples: [
          { command: "tar -czf backup.tar.gz /home/user", description: "Create compressed backup" },
          { command: "tar -xzf archive.tar.gz", description: "Extract compressed archive" },
          { command: "tar -tf archive.tar", description: "List archive contents" },
          { command: "tar -czf - /source | ssh remote 'tar -xzf - -C /dest'", description: "Transfer over SSH" },
          { command: "tar --exclude='*.log' -czf backup.tar.gz .", description: "Exclude files" }
        ],
        relatedCommands: ["gzip", "bzip2", "zip", "7z"],
        tips: ["Remember: -c create, -x extract, -t list", "Use -z for gzip, -j for bzip2"],
        commonErrors: ["Forgetting - for stdin/stdout", "Wrong compression flag"]
      },
      {
        name: "chown",
        syntax: "chown [options] user:group file",
        description: "Change file ownership",
        options: [
          { flag: "-R", description: "Recursive", example: "chown -R user:group directory" },
          { flag: "-c", description: "Report changes", example: "chown -c user file" },
          { flag: "-v", description: "Verbose", example: "chown -v user:group file" },
          { flag: "--reference", description: "Copy ownership", example: "chown --reference=file1 file2" },
          { flag: "-h", description: "Affect symlinks", example: "chown -h user link" }
        ],
        examples: [
          { command: "chown user file.txt", description: "Change owner only" },
          { command: "chown user:group file.txt", description: "Change owner and group" },
          { command: "chown :group file.txt", description: "Change group only" },
          { command: "chown -R www-data:www-data /var/www", description: "Recursive ownership" },
          { command: "chown --reference=file1 file2", description: "Copy ownership" }
        ],
        relatedCommands: ["chmod", "chgrp", "ls -l"],
        tips: ["Use : to separate user and group", "Needs root for most changes"],
        commonErrors: ["Permission denied", "User/group doesn't exist"]
      },
      {
        name: "umask",
        syntax: "umask [options] [mode]",
        description: "Set default file permissions",
        options: [
          { flag: "-S", description: "Symbolic output", example: "umask -S" },
          { flag: "-p", description: "Output in form for reuse", example: "umask -p" }
        ],
        examples: [
          { command: "umask", description: "Show current umask" },
          { command: "umask 022", description: "Set umask (755 for dirs, 644 for files)" },
          { command: "umask 077", description: "Private files (700 for dirs, 600 for files)" },
          { command: "umask -S", description: "Show in symbolic form" },
          { command: "umask 002", description: "Group writable by default" }
        ],
        relatedCommands: ["chmod", "chown", "touch"],
        tips: ["Umask subtracts from 777/666", "Set in ~/.bashrc for permanence"],
        commonErrors: ["Confusion with chmod", "Not understanding subtraction"]
      },
      {
        name: "lsattr",
        syntax: "lsattr [options] [file]",
        description: "List file attributes",
        options: [
          { flag: "-a", description: "Show all files", example: "lsattr -a" },
          { flag: "-d", description: "List directory", example: "lsattr -d /tmp" },
          { flag: "-R", description: "Recursive", example: "lsattr -R" },
          { flag: "-v", description: "Show version", example: "lsattr -v file" }
        ],
        examples: [
          { command: "lsattr file.txt", description: "Show file attributes" },
          { command: "lsattr -a /etc", description: "Show all in /etc" },
          { command: "lsattr -R /home", description: "Recursive attribute listing" },
          { command: "lsattr | grep i", description: "Find immutable files" }
        ],
        relatedCommands: ["chattr", "ls", "stat"],
        tips: ["i = immutable, a = append only", "Requires ext2/3/4 filesystem"],
        commonErrors: ["Not supported on all filesystems", "Need root for some attributes"]
      },
      {
        name: "chattr",
        syntax: "chattr [options] [attributes] file",
        description: "Change file attributes",
        options: [
          { flag: "+", description: "Add attribute", example: "chattr +i file" },
          { flag: "-", description: "Remove attribute", example: "chattr -i file" },
          { flag: "=", description: "Set exact attributes", example: "chattr =ia file" },
          { flag: "-R", description: "Recursive", example: "chattr -R +i directory" }
        ],
        examples: [
          { command: "chattr +i important.conf", description: "Make file immutable" },
          { command: "chattr +a logfile.log", description: "Append only" },
          { command: "chattr -i file.txt", description: "Remove immutable" },
          { command: "chattr +S file.db", description: "Synchronous updates" },
          { command: "chattr -R +i /etc/critical/", description: "Protect directory" }
        ],
        relatedCommands: ["lsattr", "chmod", "chown"],
        tips: ["i = immutable (can't modify/delete)", "a = append only"],
        commonErrors: ["Forgetting to remove immutable", "Not having root privileges"]
      },
      {
        name: "setfacl",
        syntax: "setfacl [options] file",
        description: "Set file access control lists",
        options: [
          { flag: "-m", description: "Modify ACL", example: "setfacl -m u:user:rwx file" },
          { flag: "-x", description: "Remove ACL", example: "setfacl -x u:user file" },
          { flag: "-b", description: "Remove all ACL", example: "setfacl -b file" },
          { flag: "-R", description: "Recursive", example: "setfacl -R -m u:user:rx directory" },
          { flag: "-d", description: "Default ACL", example: "setfacl -d -m u:user:rwx directory" }
        ],
        examples: [
          { command: "setfacl -m u:john:rw file.txt", description: "Give john read-write" },
          { command: "setfacl -m g:developers:rwx project/", description: "Group access" },
          { command: "setfacl -d -m u:alice:rx directory/", description: "Default ACL for new files" },
          { command: "setfacl -x u:john file.txt", description: "Remove john's ACL" },
          { command: "setfacl -b file.txt", description: "Remove all ACLs" }
        ],
        relatedCommands: ["getfacl", "chmod", "chown"],
        tips: ["ACLs override standard permissions", "Use getfacl to view"],
        commonErrors: ["Filesystem doesn't support ACL", "Forgetting -d for defaults"]
      }
    ],
    practices: [
      {
        title: "Filesystem Management",
        difficulty: "intermediate",
        tasks: [
          "Create and mount a loop device filesystem",
          "Set up a shared directory with proper ACLs for team collaboration",
          "Implement disk quota for users",
          "Create automated backup with compression and rotation",
          "Monitor disk usage and send alerts when threshold reached"
        ]
      },
      {
        title: "Advanced Permissions",
        difficulty: "advanced",
        tasks: [
          "Set up a directory with SGID for shared project",
          "Implement immutable configuration files",
          "Create ACLs for complex multi-user access",
          "Set up a secure upload directory with sticky bit",
          "Build permission audit script"
        ]
      }
    ],
    projects: [
      {
        title: "Automated Backup System",
        description: "Enterprise-grade backup solution",
        skills: ["tar", "compression", "cron", "rotation", "encryption"],
        steps: [
          "Create incremental backup system",
          "Implement compression and encryption",
          "Set up rotation policy (daily, weekly, monthly)",
          "Add integrity checking with checksums",
          "Create restore procedures and testing",
          "Implement off-site backup transfer"
        ],
        expectedOutcome: "Complete backup solution with automation, encryption, and disaster recovery"
      },
      {
        title: "Storage Management System",
        description: "Comprehensive storage monitoring and management",
        skills: ["LVM", "monitoring", "quotas", "performance"],
        steps: [
          "Set up LVM for flexible storage",
          "Implement user and group quotas",
          "Create storage monitoring dashboard",
          "Build automatic cleanup policies",
          "Set up storage performance monitoring",
          "Implement storage expansion procedures"
        ],
        expectedOutcome: "Enterprise storage management with monitoring, quotas, and automation"
      }
    ]
  },
  {
    phaseId: "process-system",
    phaseName: "Process & System Management",
    commands: [
      {
        name: "ps",
        syntax: "ps [options]",
        description: "Display information about running processes",
        options: [
          { flag: "aux", description: "All processes with details", example: "ps aux" },
          { flag: "-ef", description: "Full format listing", example: "ps -ef" },
          { flag: "-p", description: "Select by PID", example: "ps -p 1234" },
          { flag: "-u", description: "Select by user", example: "ps -u username" },
          { flag: "-C", description: "Select by command", example: "ps -C nginx" },
          { flag: "--forest", description: "Tree view", example: "ps auxf" }
        ],
        examples: [
          { command: "ps aux", description: "Show all processes" },
          { command: "ps -ef | grep python", description: "Find Python processes" },
          { command: "ps -u $USER", description: "Your processes" },
          { command: "ps auxf", description: "Process tree" },
          { command: "ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%mem | head", description: "Top memory users" }
        ],
        relatedCommands: ["top", "htop", "pgrep", "pidof"],
        tips: ["aux is BSD style, -ef is System V", "Use pgrep for simpler searches"],
        commonErrors: ["Confusing BSD and System V options", "Not using grep efficiently"]
      },
      {
        name: "top",
        syntax: "top [options]",
        description: "Display real-time process information",
        options: [
          { flag: "-d", description: "Update delay", example: "top -d 1" },
          { flag: "-u", description: "Show user's processes", example: "top -u username" },
          { flag: "-p", description: "Monitor specific PIDs", example: "top -p 1234,5678" },
          { flag: "-n", description: "Number of iterations", example: "top -n 1" },
          { flag: "-b", description: "Batch mode", example: "top -b -n 1" }
        ],
        examples: [
          { command: "top", description: "Interactive process monitor" },
          { command: "top -u postgres", description: "Monitor postgres user" },
          { command: "top -b -n 1 > processes.txt", description: "Save snapshot" },
          { command: "top -p $(pgrep -d',' python)", description: "Monitor Python processes" }
        ],
        relatedCommands: ["htop", "atop", "iotop", "vmstat"],
        tips: ["Press h for help, k to kill, r to renice", "Use htop for better interface"],
        commonErrors: ["Not knowing keyboard shortcuts", "Not using batch mode for scripts"]
      },
      {
        name: "kill",
        syntax: "kill [options] PID",
        description: "Send signals to processes",
        options: [
          { flag: "-9", description: "SIGKILL (force kill)", example: "kill -9 1234" },
          { flag: "-15", description: "SIGTERM (graceful)", example: "kill -15 1234" },
          { flag: "-l", description: "List signals", example: "kill -l" },
          { flag: "-s", description: "Specify signal", example: "kill -s HUP 1234" }
        ],
        examples: [
          { command: "kill 1234", description: "Send SIGTERM (default)" },
          { command: "kill -9 1234", description: "Force kill process" },
          { command: "kill -HUP 1234", description: "Reload configuration" },
          { command: "killall firefox", description: "Kill all Firefox processes" },
          { command: "pkill -f 'python script.py'", description: "Kill by pattern" }
        ],
        relatedCommands: ["killall", "pkill", "xkill", "fuser"],
        tips: ["Try SIGTERM before SIGKILL", "Use pkill for pattern matching"],
        commonErrors: ["Using -9 immediately", "Wrong PID"]
      },
      {
        name: "nice",
        syntax: "nice [options] command",
        description: "Run command with modified priority",
        options: [
          { flag: "-n", description: "Set niceness", example: "nice -n 10 command" },
          { flag: "--adjustment", description: "Priority adjustment", example: "nice --adjustment=10 command" }
        ],
        examples: [
          { command: "nice -n 19 backup.sh", description: "Lowest priority" },
          { command: "nice -n -20 critical.sh", description: "Highest priority (root)" },
          { command: "nice tar -czf backup.tar.gz /data", description: "Default nice 10" },
          { command: "renice -n 10 -p 1234", description: "Change running process" }
        ],
        relatedCommands: ["renice", "ionice", "chrt"],
        tips: ["Range -20 (highest) to 19 (lowest)", "Negative values need root"],
        commonErrors: ["Permission denied for negative nice", "Confusing nice with renice"]
      },
      {
        name: "systemctl",
        syntax: "systemctl [command] [unit]",
        description: "Control systemd services",
        options: [
          { flag: "start", description: "Start service", example: "systemctl start nginx" },
          { flag: "stop", description: "Stop service", example: "systemctl stop nginx" },
          { flag: "restart", description: "Restart service", example: "systemctl restart nginx" },
          { flag: "status", description: "Show status", example: "systemctl status nginx" },
          { flag: "enable", description: "Enable at boot", example: "systemctl enable nginx" },
          { flag: "disable", description: "Disable at boot", example: "systemctl disable nginx" }
        ],
        examples: [
          { command: "systemctl status nginx", description: "Check nginx status" },
          { command: "systemctl list-units --type=service", description: "List all services" },
          { command: "systemctl --failed", description: "Show failed units" },
          { command: "systemctl daemon-reload", description: "Reload systemd configuration" },
          { command: "systemctl cat nginx.service", description: "Show service file" }
        ],
        relatedCommands: ["service", "journalctl", "systemd-analyze"],
        tips: ["Use tab completion", "Check logs with journalctl"],
        commonErrors: ["Forgetting sudo", "Not reloading after config change"]
      },
      {
        name: "crontab",
        syntax: "crontab [options]",
        description: "Schedule tasks",
        options: [
          { flag: "-e", description: "Edit crontab", example: "crontab -e" },
          { flag: "-l", description: "List crontab", example: "crontab -l" },
          { flag: "-r", description: "Remove crontab", example: "crontab -r" },
          { flag: "-u", description: "Specify user", example: "crontab -u username -l" }
        ],
        examples: [
          { command: "crontab -e", description: "Edit your crontab" },
          { command: "0 2 * * * /backup.sh", description: "Daily at 2 AM" },
          { command: "*/5 * * * * /monitor.sh", description: "Every 5 minutes" },
          { command: "0 0 * * 0 /weekly.sh", description: "Weekly on Sunday" },
          { command: "@reboot /startup.sh", description: "Run at boot" }
        ],
        relatedCommands: ["at", "anacron", "systemd-timer"],
        tips: ["Use crontab.guru for syntax", "Redirect output to avoid mail"],
        commonErrors: ["Wrong PATH in cron", "Not handling output"]
      },
      {
        name: "journalctl",
        syntax: "journalctl [options]",
        description: "Query systemd journal",
        options: [
          { flag: "-u", description: "Show unit logs", example: "journalctl -u nginx" },
          { flag: "-f", description: "Follow logs", example: "journalctl -f" },
          { flag: "-n", description: "Number of lines", example: "journalctl -n 50" },
          { flag: "--since", description: "Time filter", example: "journalctl --since '1 hour ago'" },
          { flag: "-p", description: "Priority filter", example: "journalctl -p err" }
        ],
        examples: [
          { command: "journalctl -u nginx -f", description: "Follow nginx logs" },
          { command: "journalctl --since today", description: "Today's logs" },
          { command: "journalctl -p err -n 20", description: "Last 20 errors" },
          { command: "journalctl -b", description: "Current boot logs" },
          { command: "journalctl --disk-usage", description: "Check journal size" }
        ],
        relatedCommands: ["systemctl", "dmesg", "logger"],
        tips: ["Use -f like tail -f", "Filter by priority for errors"],
        commonErrors: ["Not using time filters", "Journal rotation issues"]
      },
      {
        name: "htop",
        syntax: "htop [options]",
        description: "Interactive process viewer",
        options: [
          { flag: "-u", description: "Show user processes", example: "htop -u username" },
          { flag: "-p", description: "Show specific PIDs", example: "htop -p 1234,5678" },
          { flag: "-t", description: "Tree view", example: "htop -t" },
          { flag: "-C", description: "No color", example: "htop -C" }
        ],
        examples: [
          { command: "htop", description: "Interactive process monitor" },
          { command: "htop -u www-data", description: "Monitor web server" },
          { command: "htop -t", description: "Process tree view" }
        ],
        relatedCommands: ["top", "atop", "glances"],
        tips: ["F5 for tree, F6 to sort, F9 to kill", "Better than top for interaction"],
        commonErrors: ["Not installed by default", "Not knowing shortcuts"]
      },
      {
        name: "vmstat",
        syntax: "vmstat [options] [delay [count]]",
        description: "Report virtual memory statistics",
        options: [
          { flag: "-a", description: "Active/inactive memory", example: "vmstat -a" },
          { flag: "-d", description: "Disk statistics", example: "vmstat -d" },
          { flag: "-s", description: "Summary statistics", example: "vmstat -s" },
          { flag: "-w", description: "Wide output", example: "vmstat -w 1 5" }
        ],
        examples: [
          { command: "vmstat 1", description: "Update every second" },
          { command: "vmstat -s", description: "Memory summary" },
          { command: "vmstat 1 10", description: "10 samples, 1 second apart" },
          { command: "vmstat -d", description: "Disk I/O stats" }
        ],
        relatedCommands: ["iostat", "mpstat", "sar"],
        tips: ["First line is average since boot", "Watch si/so for swapping"],
        commonErrors: ["Misinterpreting first line", "Not checking swap activity"]
      }
    ],
    practices: [
      {
        title: "Process Management Mastery",
        difficulty: "intermediate",
        tasks: [
          "Find and kill all zombie processes",
          "Monitor system load and identify bottlenecks",
          "Set up process limits for users",
          "Create process monitoring script with alerts",
          "Implement automatic restart for critical services"
        ]
      },
      {
        title: "System Performance Tuning",
        difficulty: "advanced",
        tasks: [
          "Optimize system for database workload",
          "Implement CPU affinity for processes",
          "Set up memory limits and swap management",
          "Create performance baseline and monitoring",
          "Build automated performance reporting system"
        ]
      }
    ],
    projects: [
      {
        title: "System Monitoring Dashboard",
        description: "Real-time system monitoring solution",
        skills: ["Process monitoring", "Resource tracking", "Alerting", "Logging"],
        steps: [
          "Monitor CPU, memory, disk, network in real-time",
          "Track process resource consumption",
          "Implement threshold-based alerting",
          "Create historical trending graphs",
          "Build web-based dashboard interface",
          "Add predictive analysis for capacity planning"
        ],
        expectedOutcome: "Complete monitoring system with dashboard, alerts, and trending"
      },
      {
        title: "Service Management Framework",
        description: "Automated service management and recovery",
        skills: ["systemd", "scripting", "monitoring", "automation"],
        steps: [
          "Create service health checking system",
          "Implement automatic service recovery",
          "Build service dependency management",
          "Add rolling restart capabilities",
          "Create service deployment automation",
          "Implement rollback procedures"
        ],
        expectedOutcome: "Robust service management with automation and self-healing"
      }
    ]
  }
];

// Additional phases would continue with the same detailed structure for:
// - User & Group Administration
// - Package Management
// - Network Configuration
// - System Services
// - Shell Scripting & Automation
// - Advanced Administration
// - Security & Hardening
// - DevOps & Cloud

export const getCommandsByPhase = (phaseId: string): PhaseCommands | undefined => {
  return linuxCommands.find(phase => phase.phaseId === phaseId);
};

export const getAllCommands = (): Command[] => {
  return linuxCommands.flatMap(phase => phase.commands);
};

export const searchCommands = (query: string): Command[] => {
  const lowerQuery = query.toLowerCase();
  return getAllCommands().filter(cmd => 
    cmd.name.toLowerCase().includes(lowerQuery) ||
    cmd.description.toLowerCase().includes(lowerQuery)
  );
};