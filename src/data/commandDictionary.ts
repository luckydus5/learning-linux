export interface Command {
  name: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  description: string;
  syntax: string;
  examples: string[];
  options?: { flag: string; description: string }[];
  useCase: string;
  relatedCommands?: string[];
  tags?: string[];
}

export const commandCategories = [
  'File Management',
  'Directory Navigation',
  'Text Processing',
  'Process Management',
  'User Management',
  'Network',
  'System Information',
  'Package Management',
  'Permissions',
  'Security',
  'Shell Features',
  'Archive & Compression',
  'System Monitoring',
  'Cybersecurity',
  'DevOps',
] as const;

export const commands: Command[] = [
  // File Management
  {
    name: 'ls',
    category: 'File Management',
    difficulty: 'beginner',
    description: 'List directory contents',
    syntax: 'ls [OPTIONS] [FILE/DIR]',
    examples: [
      'ls',
      'ls -la',
      'ls -lh /var/log',
      'ls -lt',
      'ls -R'
    ],
    options: [
      { flag: '-l', description: 'Long format with details' },
      { flag: '-a', description: 'Show hidden files' },
      { flag: '-h', description: 'Human readable sizes' },
      { flag: '-t', description: 'Sort by modification time' },
      { flag: '-R', description: 'Recursive listing' }
    ],
    useCase: 'View files and directories with permissions, sizes, and timestamps',
    relatedCommands: ['dir', 'tree', 'find'],
    tags: ['basic', 'essential']
  },
  {
    name: 'cp',
    category: 'File Management',
    difficulty: 'beginner',
    description: 'Copy files or directories',
    syntax: 'cp [OPTIONS] SOURCE DEST',
    examples: [
      'cp file.txt backup.txt',
      'cp -r dir1/ dir2/',
      'cp -p file.txt /backup/',
      'cp -i *.txt /backup/'
    ],
    options: [
      { flag: '-r', description: 'Copy directories recursively' },
      { flag: '-p', description: 'Preserve attributes' },
      { flag: '-i', description: 'Interactive (prompt before overwrite)' },
      { flag: '-v', description: 'Verbose output' }
    ],
    useCase: 'Create backups, duplicate files, or copy to different locations',
    relatedCommands: ['mv', 'rsync', 'dd']
  },
  {
    name: 'mv',
    category: 'File Management',
    difficulty: 'beginner',
    description: 'Move or rename files and directories',
    syntax: 'mv [OPTIONS] SOURCE DEST',
    examples: [
      'mv oldname.txt newname.txt',
      'mv file.txt /home/user/',
      'mv -i *.log /var/log/old/'
    ],
    options: [
      { flag: '-i', description: 'Interactive mode' },
      { flag: '-f', description: 'Force (no prompt)' },
      { flag: '-v', description: 'Verbose' }
    ],
    useCase: 'Rename files or reorganize directory structure',
    relatedCommands: ['cp', 'rename']
  },
  {
    name: 'rm',
    category: 'File Management',
    difficulty: 'beginner',
    description: 'Remove files or directories',
    syntax: 'rm [OPTIONS] FILE/DIR',
    examples: [
      'rm file.txt',
      'rm -r directory/',
      'rm -rf /tmp/cache/',
      'rm -i *.tmp'
    ],
    options: [
      { flag: '-r', description: 'Recursive (for directories)' },
      { flag: '-f', description: 'Force removal' },
      { flag: '-i', description: 'Interactive confirmation' }
    ],
    useCase: 'Delete unwanted files or clean up directories',
    relatedCommands: ['rmdir', 'unlink', 'shred']
  },
  {
    name: 'touch',
    category: 'File Management',
    difficulty: 'beginner',
    description: 'Create empty file or update timestamp',
    syntax: 'touch [OPTIONS] FILE',
    examples: [
      'touch newfile.txt',
      'touch -t 202401011200 file.txt',
      'touch file{1..10}.txt'
    ],
    options: [
      { flag: '-t', description: 'Set specific timestamp' },
      { flag: '-a', description: 'Change access time only' },
      { flag: '-m', description: 'Change modification time only' }
    ],
    useCase: 'Create placeholder files or update timestamps for scripts',
    relatedCommands: ['mkdir', 'echo >']
  },

  // Directory Navigation
  {
    name: 'pwd',
    category: 'Directory Navigation',
    difficulty: 'beginner',
    description: 'Print working directory',
    syntax: 'pwd [OPTIONS]',
    examples: [
      'pwd',
      'pwd -P'
    ],
    options: [
      { flag: '-P', description: 'Show physical path (resolve symlinks)' },
      { flag: '-L', description: 'Show logical path' }
    ],
    useCase: 'Know your current location in the filesystem',
    relatedCommands: ['cd', 'dirs']
  },
  {
    name: 'cd',
    category: 'Directory Navigation',
    difficulty: 'beginner',
    description: 'Change directory',
    syntax: 'cd [DIRECTORY]',
    examples: [
      'cd /var/log',
      'cd ~',
      'cd ..',
      'cd -',
      'cd'
    ],
    useCase: 'Navigate through the filesystem',
    relatedCommands: ['pushd', 'popd']
  },
  {
    name: 'mkdir',
    category: 'Directory Navigation',
    difficulty: 'beginner',
    description: 'Make directories',
    syntax: 'mkdir [OPTIONS] DIRECTORY',
    examples: [
      'mkdir newdir',
      'mkdir -p /path/to/nested/dir',
      'mkdir -m 755 public',
      'mkdir {dir1,dir2,dir3}'
    ],
    options: [
      { flag: '-p', description: 'Create parent directories as needed' },
      { flag: '-m', description: 'Set permissions' },
      { flag: '-v', description: 'Verbose output' }
    ],
    useCase: 'Organize files into folder structure',
    relatedCommands: ['rmdir', 'touch']
  },

  // Text Processing
  {
    name: 'cat',
    category: 'Text Processing',
    difficulty: 'beginner',
    description: 'Concatenate and display files',
    syntax: 'cat [OPTIONS] [FILE...]',
    examples: [
      'cat file.txt',
      'cat file1.txt file2.txt > combined.txt',
      'cat -n script.sh',
      'cat /etc/passwd'
    ],
    options: [
      { flag: '-n', description: 'Number lines' },
      { flag: '-b', description: 'Number non-blank lines' },
      { flag: '-s', description: 'Squeeze blank lines' }
    ],
    useCase: 'View file contents or combine multiple files',
    relatedCommands: ['less', 'more', 'head', 'tail']
  },
  {
    name: 'grep',
    category: 'Text Processing',
    difficulty: 'intermediate',
    description: 'Search text patterns in files',
    syntax: 'grep [OPTIONS] PATTERN [FILE...]',
    examples: [
      'grep "error" /var/log/syslog',
      'grep -r "TODO" .',
      'grep -i "warning" *.log',
      'ps aux | grep nginx',
      'grep -E "^[0-9]+$" data.txt'
    ],
    options: [
      { flag: '-i', description: 'Case insensitive' },
      { flag: '-r', description: 'Recursive search' },
      { flag: '-n', description: 'Show line numbers' },
      { flag: '-v', description: 'Invert match' },
      { flag: '-E', description: 'Extended regex' }
    ],
    useCase: 'Find specific text in logs, code, or config files',
    relatedCommands: ['egrep', 'fgrep', 'ack', 'ag']
  },
  {
    name: 'sed',
    category: 'Text Processing',
    difficulty: 'advanced',
    description: 'Stream editor for text manipulation',
    syntax: 'sed [OPTIONS] SCRIPT [FILE]',
    examples: [
      'sed "s/old/new/g" file.txt',
      'sed -i "s/localhost/192.168.1.1/g" config.conf',
      'sed -n "10,20p" file.txt',
      'sed "/^#/d" script.sh'
    ],
    options: [
      { flag: '-i', description: 'Edit file in place' },
      { flag: '-n', description: 'Suppress output' },
      { flag: '-e', description: 'Add script' }
    ],
    useCase: 'Find and replace text, remove lines, or transform data',
    relatedCommands: ['awk', 'perl', 'tr']
  },
  {
    name: 'awk',
    category: 'Text Processing',
    difficulty: 'advanced',
    description: 'Pattern scanning and processing language',
    syntax: 'awk [OPTIONS] "PROGRAM" [FILE]',
    examples: [
      'awk "{print $1}" file.txt',
      'awk -F: "{print $1}" /etc/passwd',
      'df -h | awk "{print $5}"',
      'awk "NR>1 {sum+=$3} END {print sum}" data.csv'
    ],
    options: [
      { flag: '-F', description: 'Field separator' },
      { flag: '-f', description: 'Read program from file' }
    ],
    useCase: 'Extract columns, calculate sums, or process structured data',
    relatedCommands: ['sed', 'cut', 'perl']
  },
  {
    name: 'head',
    category: 'Text Processing',
    difficulty: 'beginner',
    description: 'Display first lines of file',
    syntax: 'head [OPTIONS] [FILE]',
    examples: [
      'head file.txt',
      'head -n 20 /var/log/syslog',
      'head -c 100 binary.dat'
    ],
    options: [
      { flag: '-n', description: 'Number of lines' },
      { flag: '-c', description: 'Number of bytes' }
    ],
    useCase: 'Preview file contents or check file headers',
    relatedCommands: ['tail', 'cat', 'less']
  },
  {
    name: 'tail',
    category: 'Text Processing',
    difficulty: 'beginner',
    description: 'Display last lines of file',
    syntax: 'tail [OPTIONS] [FILE]',
    examples: [
      'tail file.txt',
      'tail -n 50 /var/log/syslog',
      'tail -f /var/log/apache2/access.log',
      'tail -f -n 100 app.log'
    ],
    options: [
      { flag: '-n', description: 'Number of lines' },
      { flag: '-f', description: 'Follow file (real-time)' },
      { flag: '-F', description: 'Follow with retry' }
    ],
    useCase: 'Monitor logs in real-time or check recent entries',
    relatedCommands: ['head', 'less', 'journalctl']
  },

  // Process Management
  {
    name: 'ps',
    category: 'Process Management',
    difficulty: 'intermediate',
    description: 'Display running processes',
    syntax: 'ps [OPTIONS]',
    examples: [
      'ps',
      'ps aux',
      'ps -ef',
      'ps aux | grep nginx',
      'ps -u username'
    ],
    options: [
      { flag: 'aux', description: 'All processes with details' },
      { flag: '-ef', description: 'Full format listing' },
      { flag: '-u', description: 'By user' }
    ],
    useCase: 'Find process IDs, check resource usage, or debug issues',
    relatedCommands: ['top', 'htop', 'pgrep']
  },
  {
    name: 'kill',
    category: 'Process Management',
    difficulty: 'intermediate',
    description: 'Terminate processes by PID',
    syntax: 'kill [OPTIONS] PID',
    examples: [
      'kill 1234',
      'kill -9 5678',
      'kill -TERM 9012',
      'kill -l'
    ],
    options: [
      { flag: '-9', description: 'Force kill (SIGKILL)' },
      { flag: '-15', description: 'Graceful termination (SIGTERM)' },
      { flag: '-l', description: 'List signals' }
    ],
    useCase: 'Stop unresponsive programs or clean up processes',
    relatedCommands: ['killall', 'pkill', 'xkill']
  },
  {
    name: 'top',
    category: 'Process Management',
    difficulty: 'intermediate',
    description: 'Real-time process viewer',
    syntax: 'top [OPTIONS]',
    examples: [
      'top',
      'top -u username',
      'top -p 1234,5678'
    ],
    options: [
      { flag: '-u', description: 'Show user processes' },
      { flag: '-p', description: 'Monitor specific PIDs' },
      { flag: '-n', description: 'Number of iterations' }
    ],
    useCase: 'Monitor CPU, memory usage and system performance',
    relatedCommands: ['htop', 'atop', 'glances']
  },
  {
    name: 'jobs',
    category: 'Process Management',
    difficulty: 'intermediate',
    description: 'List active jobs in shell',
    syntax: 'jobs [OPTIONS]',
    examples: [
      'jobs',
      'jobs -l',
      'jobs -p'
    ],
    options: [
      { flag: '-l', description: 'Show PIDs' },
      { flag: '-p', description: 'PIDs only' }
    ],
    useCase: 'Manage background tasks in current shell session',
    relatedCommands: ['bg', 'fg', 'nohup']
  },

  // User Management
  {
    name: 'useradd',
    category: 'User Management',
    difficulty: 'intermediate',
    description: 'Create new user account',
    syntax: 'useradd [OPTIONS] USERNAME',
    examples: [
      'useradd john',
      'useradd -m -s /bin/bash alice',
      'useradd -G sudo,docker bob'
    ],
    options: [
      { flag: '-m', description: 'Create home directory' },
      { flag: '-s', description: 'Set shell' },
      { flag: '-G', description: 'Add to groups' }
    ],
    useCase: 'Set up new user accounts on the system',
    relatedCommands: ['usermod', 'userdel', 'adduser']
  },
  {
    name: 'passwd',
    category: 'User Management',
    difficulty: 'beginner',
    description: 'Change user password',
    syntax: 'passwd [OPTIONS] [USERNAME]',
    examples: [
      'passwd',
      'passwd alice',
      'passwd -l bob',
      'passwd -e charlie'
    ],
    options: [
      { flag: '-l', description: 'Lock account' },
      { flag: '-u', description: 'Unlock account' },
      { flag: '-e', description: 'Expire password' }
    ],
    useCase: 'Update passwords or manage account security',
    relatedCommands: ['chpasswd', 'usermod']
  },
  {
    name: 'sudo',
    category: 'User Management',
    difficulty: 'intermediate',
    description: 'Execute as superuser',
    syntax: 'sudo [OPTIONS] COMMAND',
    examples: [
      'sudo apt update',
      'sudo -i',
      'sudo -u postgres psql',
      'sudo !!',
      'sudo -l'
    ],
    options: [
      { flag: '-i', description: 'Interactive root shell' },
      { flag: '-u', description: 'Run as specific user' },
      { flag: '-l', description: 'List allowed commands' }
    ],
    useCase: 'Perform administrative tasks with elevated privileges',
    relatedCommands: ['su', 'visudo', 'polkit']
  },
  {
    name: 'whoami',
    category: 'User Management',
    difficulty: 'beginner',
    description: 'Display current username',
    syntax: 'whoami',
    examples: [
      'whoami'
    ],
    useCase: 'Verify current user context',
    relatedCommands: ['id', 'who', 'w']
  },

  // Network
  {
    name: 'ping',
    category: 'Network',
    difficulty: 'beginner',
    description: 'Test network connectivity',
    syntax: 'ping [OPTIONS] HOST',
    examples: [
      'ping google.com',
      'ping -c 4 192.168.1.1',
      'ping -i 2 8.8.8.8'
    ],
    options: [
      { flag: '-c', description: 'Count (number of pings)' },
      { flag: '-i', description: 'Interval between pings' },
      { flag: '-s', description: 'Packet size' }
    ],
    useCase: 'Troubleshoot network issues or check host availability',
    relatedCommands: ['ping6', 'traceroute', 'mtr']
  },
  {
    name: 'curl',
    category: 'Network',
    difficulty: 'intermediate',
    description: 'Transfer data from/to servers',
    syntax: 'curl [OPTIONS] URL',
    examples: [
      'curl https://api.github.com',
      'curl -O https://example.com/file.zip',
      'curl -X POST -d "data=value" https://api.example.com',
      'curl -H "Authorization: Bearer TOKEN" https://api.com'
    ],
    options: [
      { flag: '-O', description: 'Save with remote filename' },
      { flag: '-X', description: 'HTTP method' },
      { flag: '-d', description: 'Send data' },
      { flag: '-H', description: 'Add header' }
    ],
    useCase: 'Test APIs, download files, or debug web services',
    relatedCommands: ['wget', 'httpie', 'fetch']
  },
  {
    name: 'ssh',
    category: 'Network',
    difficulty: 'intermediate',
    description: 'Secure shell remote login',
    syntax: 'ssh [OPTIONS] [USER@]HOST',
    examples: [
      'ssh user@server.com',
      'ssh -p 2222 admin@192.168.1.100',
      'ssh -i ~/.ssh/key.pem ubuntu@aws-instance',
      'ssh -L 8080:localhost:80 user@remote'
    ],
    options: [
      { flag: '-p', description: 'Port number' },
      { flag: '-i', description: 'Identity file (key)' },
      { flag: '-L', description: 'Local port forwarding' }
    ],
    useCase: 'Remote server administration and secure file transfer',
    relatedCommands: ['scp', 'sftp', 'rsync']
  },
  {
    name: 'netstat',
    category: 'Network',
    difficulty: 'intermediate',
    description: 'Network statistics and connections',
    syntax: 'netstat [OPTIONS]',
    examples: [
      'netstat -tulnp',
      'netstat -an',
      'netstat -r'
    ],
    options: [
      { flag: '-t', description: 'TCP connections' },
      { flag: '-u', description: 'UDP connections' },
      { flag: '-l', description: 'Listening ports' },
      { flag: '-n', description: 'Numerical addresses' },
      { flag: '-p', description: 'Show process' }
    ],
    useCase: 'Check open ports, connections, and network troubleshooting',
    relatedCommands: ['ss', 'lsof', 'nmap']
  },

  // System Information
  {
    name: 'uname',
    category: 'System Information',
    difficulty: 'beginner',
    description: 'System information',
    syntax: 'uname [OPTIONS]',
    examples: [
      'uname -a',
      'uname -r',
      'uname -m'
    ],
    options: [
      { flag: '-a', description: 'All information' },
      { flag: '-r', description: 'Kernel release' },
      { flag: '-m', description: 'Machine hardware' }
    ],
    useCase: 'Check kernel version or system architecture',
    relatedCommands: ['hostnamectl', 'lsb_release']
  },
  {
    name: 'df',
    category: 'System Information',
    difficulty: 'beginner',
    description: 'Disk space usage',
    syntax: 'df [OPTIONS] [FILE/DIR]',
    examples: [
      'df -h',
      'df -i',
      'df -T'
    ],
    options: [
      { flag: '-h', description: 'Human readable' },
      { flag: '-i', description: 'Show inodes' },
      { flag: '-T', description: 'Show filesystem type' }
    ],
    useCase: 'Monitor disk space and prevent full filesystems',
    relatedCommands: ['du', 'lsblk', 'fdisk']
  },
  {
    name: 'free',
    category: 'System Information',
    difficulty: 'beginner',
    description: 'Display memory usage',
    syntax: 'free [OPTIONS]',
    examples: [
      'free -h',
      'free -m',
      'free -s 5'
    ],
    options: [
      { flag: '-h', description: 'Human readable' },
      { flag: '-m', description: 'Show in MB' },
      { flag: '-s', description: 'Continuous display' }
    ],
    useCase: 'Check RAM and swap usage',
    relatedCommands: ['vmstat', 'top', 'htop']
  },
  {
    name: 'uptime',
    category: 'System Information',
    difficulty: 'beginner',
    description: 'System uptime and load',
    syntax: 'uptime [OPTIONS]',
    examples: [
      'uptime',
      'uptime -p',
      'uptime -s'
    ],
    options: [
      { flag: '-p', description: 'Pretty format' },
      { flag: '-s', description: 'Since when' }
    ],
    useCase: 'Check system stability and load average',
    relatedCommands: ['w', 'who', 'last']
  },

  // Package Management
  {
    name: 'apt',
    category: 'Package Management',
    difficulty: 'intermediate',
    description: 'Debian/Ubuntu package manager',
    syntax: 'apt [OPTIONS] COMMAND',
    examples: [
      'apt update',
      'apt upgrade',
      'apt install nginx',
      'apt remove apache2',
      'apt search docker'
    ],
    useCase: 'Install, update, and manage software packages',
    relatedCommands: ['apt-get', 'dpkg', 'snap']
  },
  {
    name: 'yum',
    category: 'Package Management',
    difficulty: 'intermediate',
    description: 'RedHat/CentOS package manager',
    syntax: 'yum [OPTIONS] COMMAND',
    examples: [
      'yum update',
      'yum install httpd',
      'yum remove mysql',
      'yum list installed',
      'yum history'
    ],
    useCase: 'Manage RPM packages on RHEL-based systems',
    relatedCommands: ['dnf', 'rpm', 'yum-config-manager']
  },

  // Permissions
  {
    name: 'chmod',
    category: 'Permissions',
    difficulty: 'intermediate',
    description: 'Change file permissions',
    syntax: 'chmod [OPTIONS] MODE FILE',
    examples: [
      'chmod 755 script.sh',
      'chmod +x file.sh',
      'chmod u+w,g-w file.txt',
      'chmod -R 644 /var/www'
    ],
    options: [
      { flag: '-R', description: 'Recursive' },
      { flag: '-v', description: 'Verbose' }
    ],
    useCase: 'Control who can read, write, or execute files',
    relatedCommands: ['chown', 'chgrp', 'umask']
  },
  {
    name: 'chown',
    category: 'Permissions',
    difficulty: 'intermediate',
    description: 'Change file ownership',
    syntax: 'chown [OPTIONS] USER[:GROUP] FILE',
    examples: [
      'chown john file.txt',
      'chown alice:developers project/',
      'chown -R www-data:www-data /var/www'
    ],
    options: [
      { flag: '-R', description: 'Recursive' },
      { flag: '-v', description: 'Verbose' }
    ],
    useCase: 'Fix permission issues or transfer file ownership',
    relatedCommands: ['chmod', 'chgrp']
  },

  // Security Tools
  {
    name: 'iptables',
    category: 'Security',
    difficulty: 'advanced',
    description: 'Configure Linux firewall',
    syntax: 'iptables [OPTIONS] [CHAIN] [RULE]',
    examples: [
      'iptables -L',
      'iptables -A INPUT -p tcp --dport 22 -j ACCEPT',
      'iptables -A INPUT -s 192.168.1.0/24 -j ACCEPT',
      'iptables -D INPUT 5'
    ],
    options: [
      { flag: '-L', description: 'List rules' },
      { flag: '-A', description: 'Append rule' },
      { flag: '-D', description: 'Delete rule' },
      { flag: '-F', description: 'Flush rules' }
    ],
    useCase: 'Configure firewall rules for network security',
    relatedCommands: ['ufw', 'firewalld', 'nftables']
  },
  {
    name: 'fail2ban',
    category: 'Security',
    difficulty: 'advanced',
    description: 'Intrusion prevention system',
    syntax: 'fail2ban-client [COMMAND]',
    examples: [
      'fail2ban-client status',
      'fail2ban-client status sshd',
      'fail2ban-client set sshd unbanip 192.168.1.100'
    ],
    useCase: 'Protect against brute force attacks',
    relatedCommands: ['denyhosts', 'sshguard']
  },

  // Shell Features
  {
    name: 'alias',
    category: 'Shell Features',
    difficulty: 'beginner',
    description: 'Create command shortcuts',
    syntax: 'alias NAME="COMMAND"',
    examples: [
      'alias ll="ls -la"',
      'alias gs="git status"',
      'alias ..="cd .."',
      'alias'
    ],
    useCase: 'Save time with frequently used commands',
    relatedCommands: ['unalias', 'function']
  },
  {
    name: 'history',
    category: 'Shell Features',
    difficulty: 'beginner',
    description: 'Command history',
    syntax: 'history [OPTIONS]',
    examples: [
      'history',
      'history 20',
      'history | grep ssh',
      '!100',
      '!!'
    ],
    options: [
      { flag: '-c', description: 'Clear history' },
      { flag: '-d', description: 'Delete entry' }
    ],
    useCase: 'Recall and reuse previous commands',
    relatedCommands: ['fc', 'Ctrl+R']
  },
  {
    name: 'export',
    category: 'Shell Features',
    difficulty: 'intermediate',
    description: 'Set environment variables',
    syntax: 'export VARIABLE=VALUE',
    examples: [
      'export PATH=$PATH:/usr/local/bin',
      'export EDITOR=vim',
      'export JAVA_HOME=/usr/lib/jvm/java-11'
    ],
    useCase: 'Configure environment for applications',
    relatedCommands: ['env', 'set', 'unset']
  },

  // Archive & Compression
  {
    name: 'tar',
    category: 'Archive & Compression',
    difficulty: 'intermediate',
    description: 'Archive files',
    syntax: 'tar [OPTIONS] ARCHIVE FILES',
    examples: [
      'tar -czf backup.tar.gz /home/user',
      'tar -xzf archive.tar.gz',
      'tar -tvf archive.tar',
      'tar -xzf archive.tar.gz -C /opt'
    ],
    options: [
      { flag: '-c', description: 'Create archive' },
      { flag: '-x', description: 'Extract' },
      { flag: '-z', description: 'Gzip compression' },
      { flag: '-f', description: 'File name' },
      { flag: '-v', description: 'Verbose' }
    ],
    useCase: 'Backup files or distribute software packages',
    relatedCommands: ['gzip', 'zip', 'bzip2']
  },
  {
    name: 'zip',
    category: 'Archive & Compression',
    difficulty: 'beginner',
    description: 'Create ZIP archives',
    syntax: 'zip [OPTIONS] ARCHIVE FILES',
    examples: [
      'zip archive.zip file1 file2',
      'zip -r backup.zip directory/',
      'zip -e secure.zip sensitive.txt'
    ],
    options: [
      { flag: '-r', description: 'Recursive' },
      { flag: '-e', description: 'Encrypt' },
      { flag: '-9', description: 'Maximum compression' }
    ],
    useCase: 'Create compressed archives for sharing',
    relatedCommands: ['unzip', 'tar', '7z']
  },

  // System Monitoring
  {
    name: 'htop',
    category: 'System Monitoring',
    difficulty: 'intermediate',
    description: 'Interactive process viewer',
    syntax: 'htop [OPTIONS]',
    examples: [
      'htop',
      'htop -u username',
      'htop -t'
    ],
    options: [
      { flag: '-u', description: 'Show user processes' },
      { flag: '-t', description: 'Tree view' }
    ],
    useCase: 'Monitor system resources interactively',
    relatedCommands: ['top', 'atop', 'glances']
  },
  {
    name: 'iostat',
    category: 'System Monitoring',
    difficulty: 'intermediate',
    description: 'I/O statistics',
    syntax: 'iostat [OPTIONS] [INTERVAL]',
    examples: [
      'iostat',
      'iostat -x 2',
      'iostat -m 5'
    ],
    options: [
      { flag: '-x', description: 'Extended stats' },
      { flag: '-m', description: 'Display in MB' },
      { flag: '-p', description: 'Per device' }
    ],
    useCase: 'Monitor disk I/O performance',
    relatedCommands: ['iotop', 'vmstat', 'dstat']
  },
  {
    name: 'vmstat',
    category: 'System Monitoring',
    difficulty: 'intermediate',
    description: 'Virtual memory statistics',
    syntax: 'vmstat [OPTIONS] [INTERVAL]',
    examples: [
      'vmstat',
      'vmstat 2',
      'vmstat -s'
    ],
    options: [
      { flag: '-s', description: 'Display summary' },
      { flag: '-d', description: 'Disk stats' }
    ],
    useCase: 'Monitor memory, processes, and CPU',
    relatedCommands: ['free', 'iostat', 'mpstat']
  },

  // Cybersecurity Tools
  {
    name: 'nmap',
    category: 'Cybersecurity',
    difficulty: 'advanced',
    description: 'Network exploration and security auditing',
    syntax: 'nmap [OPTIONS] TARGET',
    examples: [
      'nmap 192.168.1.0/24',
      'nmap -sV -p 1-1000 target.com',
      'nmap -A -T4 192.168.1.1',
      'nmap -sn 10.0.0.0/8',
      'nmap --script vuln target.com'
    ],
    options: [
      { flag: '-sV', description: 'Service version detection' },
      { flag: '-A', description: 'Aggressive scan' },
      { flag: '-p', description: 'Port range' },
      { flag: '-sn', description: 'Ping scan' },
      { flag: '--script', description: 'Run NSE scripts' }
    ],
    useCase: 'Network discovery, port scanning, and vulnerability assessment',
    relatedCommands: ['masscan', 'zmap', 'netcat'],
    tags: ['security', 'pentesting']
  },
  {
    name: 'tcpdump',
    category: 'Cybersecurity',
    difficulty: 'advanced',
    description: 'Network packet analyzer',
    syntax: 'tcpdump [OPTIONS] [EXPRESSION]',
    examples: [
      'tcpdump -i eth0',
      'tcpdump -w capture.pcap',
      'tcpdump -r capture.pcap',
      'tcpdump port 80',
      'tcpdump -i any -c 100 host 192.168.1.1'
    ],
    options: [
      { flag: '-i', description: 'Interface' },
      { flag: '-w', description: 'Write to file' },
      { flag: '-r', description: 'Read from file' },
      { flag: '-c', description: 'Capture count' },
      { flag: '-n', description: 'No DNS resolution' }
    ],
    useCase: 'Capture and analyze network traffic for troubleshooting',
    relatedCommands: ['wireshark', 'tshark', 'netstat'],
    tags: ['security', 'networking']
  },
  {
    name: 'metasploit',
    category: 'Cybersecurity',
    difficulty: 'expert',
    description: 'Penetration testing framework',
    syntax: 'msfconsole',
    examples: [
      'msfconsole',
      'use exploit/windows/smb/ms17_010_eternalblue',
      'set RHOSTS 192.168.1.100',
      'exploit'
    ],
    useCase: 'Penetration testing and vulnerability exploitation',
    relatedCommands: ['armitage', 'cobalt strike'],
    tags: ['security', 'pentesting']
  },
  {
    name: 'john',
    category: 'Cybersecurity',
    difficulty: 'advanced',
    description: 'Password cracker (John the Ripper)',
    syntax: 'john [OPTIONS] PASSWORD_FILE',
    examples: [
      'john passwd.txt',
      'john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt',
      'john --show cracked.txt',
      'john --format=md5 hashes.txt'
    ],
    options: [
      { flag: '--wordlist', description: 'Dictionary attack' },
      { flag: '--show', description: 'Show cracked passwords' },
      { flag: '--format', description: 'Hash format' }
    ],
    useCase: 'Test password strength and crack weak passwords',
    relatedCommands: ['hashcat', 'hydra', 'medusa'],
    tags: ['security', 'password']
  },
  {
    name: 'aircrack-ng',
    category: 'Cybersecurity',
    difficulty: 'expert',
    description: 'WiFi security auditing',
    syntax: 'aircrack-ng [OPTIONS] CAP_FILE',
    examples: [
      'airmon-ng start wlan0',
      'airodump-ng wlan0mon',
      'aircrack-ng -w wordlist.txt capture.cap',
      'aireplay-ng -0 10 -a BSSID wlan0mon'
    ],
    useCase: 'Test WiFi network security',
    relatedCommands: ['airmon-ng', 'airodump-ng', 'aireplay-ng'],
    tags: ['security', 'wireless']
  },
  {
    name: 'hydra',
    category: 'Cybersecurity',
    difficulty: 'advanced',
    description: 'Network login cracker',
    syntax: 'hydra [OPTIONS] TARGET PROTOCOL',
    examples: [
      'hydra -l admin -P passwords.txt ssh://192.168.1.1',
      'hydra -L users.txt -P pass.txt ftp://192.168.1.1',
      'hydra -l root -P /usr/share/wordlists/rockyou.txt 192.168.1.1 ssh'
    ],
    options: [
      { flag: '-l', description: 'Single username' },
      { flag: '-L', description: 'Username list' },
      { flag: '-p', description: 'Single password' },
      { flag: '-P', description: 'Password list' }
    ],
    useCase: 'Test authentication security on various services',
    relatedCommands: ['medusa', 'ncrack', 'patator'],
    tags: ['security', 'bruteforce']
  },
  {
    name: 'nikto',
    category: 'Cybersecurity',
    difficulty: 'intermediate',
    description: 'Web server vulnerability scanner',
    syntax: 'nikto [OPTIONS]',
    examples: [
      'nikto -h http://target.com',
      'nikto -h 192.168.1.1 -p 80,443',
      'nikto -h target.com -o report.html -Format htm'
    ],
    options: [
      { flag: '-h', description: 'Target host' },
      { flag: '-p', description: 'Port(s)' },
      { flag: '-o', description: 'Output file' }
    ],
    useCase: 'Scan web servers for vulnerabilities',
    relatedCommands: ['dirb', 'gobuster', 'wpscan'],
    tags: ['security', 'web']
  },
  {
    name: 'sqlmap',
    category: 'Cybersecurity',
    difficulty: 'advanced',
    description: 'SQL injection tool',
    syntax: 'sqlmap [OPTIONS] -u URL',
    examples: [
      'sqlmap -u "http://site.com/page.php?id=1"',
      'sqlmap -u URL --dbs',
      'sqlmap -u URL -D database --tables',
      'sqlmap -u URL -D db -T users --dump'
    ],
    options: [
      { flag: '--dbs', description: 'List databases' },
      { flag: '--tables', description: 'List tables' },
      { flag: '--dump', description: 'Dump data' }
    ],
    useCase: 'Test for SQL injection vulnerabilities',
    relatedCommands: ['burpsuite', 'owasp-zap'],
    tags: ['security', 'web', 'database']
  },
  {
    name: 'burpsuite',
    category: 'Cybersecurity',
    difficulty: 'expert',
    description: 'Web application security testing',
    syntax: 'burpsuite',
    examples: [
      'java -jar burpsuite.jar',
      'Configure proxy: 127.0.0.1:8080'
    ],
    useCase: 'Comprehensive web application penetration testing',
    relatedCommands: ['owasp-zap', 'sqlmap', 'nikto'],
    tags: ['security', 'web']
  },
  {
    name: 'wireshark',
    category: 'Cybersecurity',
    difficulty: 'advanced',
    description: 'Network protocol analyzer GUI',
    syntax: 'wireshark [OPTIONS]',
    examples: [
      'wireshark',
      'wireshark -i eth0',
      'wireshark -r capture.pcap',
      'wireshark -k -i wlan0'
    ],
    options: [
      { flag: '-i', description: 'Interface' },
      { flag: '-r', description: 'Read file' },
      { flag: '-k', description: 'Start capturing' }
    ],
    useCase: 'Deep packet inspection and protocol analysis',
    relatedCommands: ['tcpdump', 'tshark', 'ettercap'],
    tags: ['security', 'networking']
  },

  // DevOps Tools
  {
    name: 'docker',
    category: 'DevOps',
    difficulty: 'intermediate',
    description: 'Container platform',
    syntax: 'docker [COMMAND] [OPTIONS]',
    examples: [
      'docker ps',
      'docker run -d -p 80:80 nginx',
      'docker build -t myapp .',
      'docker exec -it container_id bash',
      'docker-compose up -d'
    ],
    useCase: 'Deploy and manage containerized applications',
    relatedCommands: ['podman', 'kubectl', 'docker-compose'],
    tags: ['containers', 'devops']
  },
  {
    name: 'kubectl',
    category: 'DevOps',
    difficulty: 'advanced',
    description: 'Kubernetes CLI',
    syntax: 'kubectl [COMMAND] [OPTIONS]',
    examples: [
      'kubectl get pods',
      'kubectl apply -f deployment.yaml',
      'kubectl describe pod pod-name',
      'kubectl logs pod-name',
      'kubectl exec -it pod-name -- bash'
    ],
    useCase: 'Manage Kubernetes clusters and deployments',
    relatedCommands: ['helm', 'minikube', 'k9s'],
    tags: ['kubernetes', 'orchestration']
  },
  {
    name: 'terraform',
    category: 'DevOps',
    difficulty: 'advanced',
    description: 'Infrastructure as Code',
    syntax: 'terraform [COMMAND]',
    examples: [
      'terraform init',
      'terraform plan',
      'terraform apply',
      'terraform destroy'
    ],
    useCase: 'Provision and manage cloud infrastructure',
    relatedCommands: ['ansible', 'pulumi', 'cloudformation'],
    tags: ['iac', 'cloud']
  },
  {
    name: 'ansible',
    category: 'DevOps',
    difficulty: 'advanced',
    description: 'Automation and configuration management',
    syntax: 'ansible [OPTIONS] PATTERN -m MODULE',
    examples: [
      'ansible all -m ping',
      'ansible-playbook playbook.yml',
      'ansible-vault encrypt secrets.yml',
      'ansible-galaxy install role-name'
    ],
    useCase: 'Automate IT infrastructure and deployments',
    relatedCommands: ['puppet', 'chef', 'saltstack'],
    tags: ['automation', 'configuration']
  },
  {
    name: 'git',
    category: 'DevOps',
    difficulty: 'intermediate',
    description: 'Version control system',
    syntax: 'git [COMMAND] [OPTIONS]',
    examples: [
      'git init',
      'git clone https://github.com/user/repo.git',
      'git add .',
      'git commit -m "message"',
      'git push origin main',
      'git pull',
      'git branch feature',
      'git checkout -b new-feature'
    ],
    useCase: 'Track code changes and collaborate on projects',
    relatedCommands: ['svn', 'mercurial', 'gh'],
    tags: ['vcs', 'collaboration']
  },
  {
    name: 'jenkins',
    category: 'DevOps',
    difficulty: 'advanced',
    description: 'CI/CD automation server',
    syntax: 'jenkins [COMMAND]',
    examples: [
      'java -jar jenkins.war',
      'jenkins-cli build job-name',
      'jenkins-cli install-plugin plugin-name'
    ],
    useCase: 'Automate build, test, and deployment pipelines',
    relatedCommands: ['gitlab-ci', 'circleci', 'github-actions'],
    tags: ['ci/cd', 'automation']
  },

  // Additional Essential Commands
  {
    name: 'find',
    category: 'File Management',
    difficulty: 'intermediate',
    description: 'Search for files and directories',
    syntax: 'find [PATH] [OPTIONS] [EXPRESSION]',
    examples: [
      'find . -name "*.txt"',
      'find /home -user john',
      'find . -type d -mtime -7',
      'find . -size +100M',
      'find . -name "*.log" -exec rm {} \\;'
    ],
    options: [
      { flag: '-name', description: 'Search by name' },
      { flag: '-type', description: 'File type (f/d/l)' },
      { flag: '-user', description: 'By owner' },
      { flag: '-size', description: 'By size' },
      { flag: '-exec', description: 'Execute command' }
    ],
    useCase: 'Locate files based on various criteria',
    relatedCommands: ['locate', 'which', 'whereis']
  },
  {
    name: 'xargs',
    category: 'Text Processing',
    difficulty: 'intermediate',
    description: 'Build and execute commands from input',
    syntax: 'COMMAND | xargs [OPTIONS] COMMAND',
    examples: [
      'find . -name "*.txt" | xargs rm',
      'echo "file1 file2" | xargs touch',
      'find . -name "*.log" | xargs -I {} mv {} {}.bak'
    ],
    options: [
      { flag: '-I', description: 'Replace string' },
      { flag: '-n', description: 'Max arguments' },
      { flag: '-P', description: 'Parallel processes' }
    ],
    useCase: 'Process multiple files or arguments efficiently',
    relatedCommands: ['parallel', 'find -exec']
  },
  {
    name: 'rsync',
    category: 'File Management',
    difficulty: 'intermediate',
    description: 'Remote/local file synchronization',
    syntax: 'rsync [OPTIONS] SOURCE DEST',
    examples: [
      'rsync -av /source/ /destination/',
      'rsync -avz user@remote:/path/ /local/',
      'rsync --delete -av /source/ /dest/',
      'rsync -avP large-file.iso remote:/backup/'
    ],
    options: [
      { flag: '-a', description: 'Archive mode' },
      { flag: '-v', description: 'Verbose' },
      { flag: '-z', description: 'Compression' },
      { flag: '--delete', description: 'Delete extra files' },
      { flag: '-P', description: 'Show progress' }
    ],
    useCase: 'Efficient backup and file synchronization',
    relatedCommands: ['scp', 'rclone', 'unison']
  },
  {
    name: 'cron',
    category: 'System Management',
    difficulty: 'intermediate',
    description: 'Schedule tasks',
    syntax: 'crontab [OPTIONS]',
    examples: [
      'crontab -e',
      'crontab -l',
      '0 2 * * * /backup.sh',
      '*/5 * * * * /monitor.sh'
    ],
    options: [
      { flag: '-e', description: 'Edit crontab' },
      { flag: '-l', description: 'List jobs' },
      { flag: '-r', description: 'Remove crontab' }
    ],
    useCase: 'Automate recurring tasks',
    relatedCommands: ['at', 'systemd-timer', 'anacron']
  },
  {
    name: 'systemctl',
    category: 'System Management',
    difficulty: 'intermediate',
    description: 'Control systemd services',
    syntax: 'systemctl [COMMAND] [SERVICE]',
    examples: [
      'systemctl status nginx',
      'systemctl start docker',
      'systemctl enable ssh',
      'systemctl restart apache2',
      'systemctl daemon-reload'
    ],
    useCase: 'Manage system services and daemons',
    relatedCommands: ['service', 'init.d', 'journalctl']
  },
  {
    name: 'journalctl',
    category: 'System Management',
    difficulty: 'intermediate',
    description: 'Query systemd journal',
    syntax: 'journalctl [OPTIONS]',
    examples: [
      'journalctl -xe',
      'journalctl -u nginx',
      'journalctl -f',
      'journalctl --since "1 hour ago"'
    ],
    options: [
      { flag: '-x', description: 'Add explanations' },
      { flag: '-e', description: 'Jump to end' },
      { flag: '-f', description: 'Follow (tail)' },
      { flag: '-u', description: 'Specific unit' }
    ],
    useCase: 'View and analyze system logs',
    relatedCommands: ['dmesg', 'tail -f', 'logger']
  },
  {
    name: 'lsof',
    category: 'System Monitoring',
    difficulty: 'intermediate',
    description: 'List open files and processes',
    syntax: 'lsof [OPTIONS]',
    examples: [
      'lsof -i :80',
      'lsof -u username',
      'lsof /var/log/syslog',
      'lsof -p 1234'
    ],
    options: [
      { flag: '-i', description: 'Network connections' },
      { flag: '-u', description: 'By user' },
      { flag: '-p', description: 'By PID' }
    ],
    useCase: 'Find what process is using a file or port',
    relatedCommands: ['fuser', 'netstat', 'ss']
  },
  {
    name: 'screen',
    category: 'Shell Features',
    difficulty: 'intermediate',
    description: 'Terminal multiplexer',
    syntax: 'screen [OPTIONS] [COMMAND]',
    examples: [
      'screen',
      'screen -S session-name',
      'screen -r',
      'screen -ls',
      'Ctrl+a d (detach)'
    ],
    useCase: 'Maintain persistent terminal sessions',
    relatedCommands: ['tmux', 'byobu', 'nohup']
  },
  {
    name: 'tmux',
    category: 'Shell Features',
    difficulty: 'intermediate',
    description: 'Terminal multiplexer',
    syntax: 'tmux [COMMAND]',
    examples: [
      'tmux',
      'tmux new -s session-name',
      'tmux attach',
      'tmux ls',
      'Ctrl+b d (detach)'
    ],
    useCase: 'Manage multiple terminal sessions',
    relatedCommands: ['screen', 'byobu']
  },
  {
    name: 'nc',
    category: 'Network',
    difficulty: 'intermediate',
    description: 'Netcat - networking utility',
    syntax: 'nc [OPTIONS] HOST PORT',
    examples: [
      'nc -l 1234',
      'nc target.com 80',
      'nc -zv target.com 1-1000',
      'echo "test" | nc target.com 1234'
    ],
    options: [
      { flag: '-l', description: 'Listen mode' },
      { flag: '-z', description: 'Port scan' },
      { flag: '-v', description: 'Verbose' }
    ],
    useCase: 'Test connectivity, transfer files, or debug',
    relatedCommands: ['telnet', 'socat', 'ncat']
  },
  {
    name: 'dd',
    category: 'System Management',
    difficulty: 'advanced',
    description: 'Convert and copy files',
    syntax: 'dd if=INPUT of=OUTPUT [OPTIONS]',
    examples: [
      'dd if=/dev/sda of=disk.img bs=4M',
      'dd if=/dev/zero of=file.img bs=1G count=1',
      'dd if=/dev/urandom of=random.dat bs=1M count=100'
    ],
    options: [
      { flag: 'if=', description: 'Input file' },
      { flag: 'of=', description: 'Output file' },
      { flag: 'bs=', description: 'Block size' },
      { flag: 'count=', description: 'Number of blocks' }
    ],
    useCase: 'Create disk images, wipe drives, or generate files',
    relatedCommands: ['cp', 'pv', 'dcfldd']
  },
  {
    name: 'strace',
    category: 'System Monitoring',
    difficulty: 'advanced',
    description: 'Trace system calls',
    syntax: 'strace [OPTIONS] COMMAND',
    examples: [
      'strace ls',
      'strace -p 1234',
      'strace -e open,read,write cat file.txt',
      'strace -o output.txt command'
    ],
    options: [
      { flag: '-p', description: 'Attach to PID' },
      { flag: '-e', description: 'Filter calls' },
      { flag: '-o', description: 'Output to file' }
    ],
    useCase: 'Debug programs and analyze system calls',
    relatedCommands: ['ltrace', 'ptrace', 'dtrace']
  },
  {
    name: 'sar',
    category: 'System Monitoring',
    difficulty: 'advanced',
    description: 'System activity reporter',
    syntax: 'sar [OPTIONS] [INTERVAL]',
    examples: [
      'sar',
      'sar -u 2 5',
      'sar -r',
      'sar -n DEV'
    ],
    options: [
      { flag: '-u', description: 'CPU usage' },
      { flag: '-r', description: 'Memory usage' },
      { flag: '-n', description: 'Network stats' }
    ],
    useCase: 'Collect and report system activity',
    relatedCommands: ['mpstat', 'pidstat', 'iostat']
  }
];

// Helper function to search commands
export function searchCommands(query: string, category?: string, difficulty?: string): Command[] {
  return commands.filter(cmd => {
    const matchesQuery = !query || 
      cmd.name.toLowerCase().includes(query.toLowerCase()) ||
      cmd.description.toLowerCase().includes(query.toLowerCase()) ||
      cmd.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
    
    const matchesCategory = !category || cmd.category === category;
    const matchesDifficulty = !difficulty || cmd.difficulty === difficulty;
    
    return matchesQuery && matchesCategory && matchesDifficulty;
  });
}

// Get commands by difficulty level
export function getCommandsByDifficulty(difficulty: Command['difficulty']): Command[] {
  return commands.filter(cmd => cmd.difficulty === difficulty);
}

// Get related commands
export function getRelatedCommands(commandName: string): Command[] {
  const command = commands.find(cmd => cmd.name === commandName);
  if (!command?.relatedCommands) return [];
  
  return commands.filter(cmd => command.relatedCommands?.includes(cmd.name));
}