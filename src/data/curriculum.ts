export interface Phase {
  id: string;
  title: string;
  duration: string;
  description: string;
  topics: string[];
  labs: string[];
  projects: string[];
  assessments: string[];
  icon: string;
}

export const curriculum: Phase[] = [
  {
    id: "foundation",
    title: "Linux Foundation",
    duration: "Weeks 1-3",
    description: "Master the fundamentals of Linux, from installation to basic navigation",
    icon: "🏗️",
    topics: [
      "Linux history, philosophy, and ecosystem",
      "Distribution comparison (Ubuntu, CentOS, Debian, Red Hat, Arch)",
      "Installation methods: bare metal, VMs, cloud, containers",
      "Desktop environments vs CLI focus",
      "File System Hierarchy Standard (FHS)",
      "Essential commands and navigation",
      "Getting help (man pages, info, documentation)"
    ],
    labs: [
      "Multi-environment Linux setup",
      "System exploration exercises",
      "File system navigation challenges",
      "Distribution comparison lab"
    ],
    projects: [
      "Set up three different Linux distributions",
      "Create a personal Linux environment",
      "Document system configuration"
    ],
    assessments: [
      "Linux fundamentals quiz",
      "Practical navigation test",
      "Distribution selection assessment"
    ]
  },
  {
    id: "cli-mastery",
    title: "Command Line Mastery",
    duration: "Weeks 3-6",
    description: "Become a command line expert with advanced text processing and shell techniques",
    icon: "⌨️",
    topics: [
      "Shell basics (bash, zsh configuration)",
      "File and directory operations",
      "Text processing (grep, sed, awk, cut, sort)",
      "Regular expressions mastery",
      "I/O redirection and pipes",
      "Command history and shortcuts",
      "Wildcards and glob patterns",
      "Process and command substitution",
      "Vim editor mastery"
    ],
    labs: [
      "Daily file management scenarios",
      "Log analysis exercises",
      "Text processing challenges",
      "Vim mastery drills",
      "Shell efficiency techniques"
    ],
    projects: [
      "Build a log analysis tool",
      "Create text processing scripts",
      "Develop a file management system"
    ],
    assessments: [
      "Command line proficiency test",
      "Regular expression challenges",
      "Vim editing speed test"
    ]
  },
  {
    id: "filesystem",
    title: "File System & Permissions",
    duration: "Weeks 6-8",
    description: "Deep dive into Linux file systems, permissions, and storage management",
    icon: "📁",
    topics: [
      "File types and attributes",
      "Permission system (standard, SUID, SGID, sticky)",
      "Access Control Lists (ACL)",
      "File system types (ext4, xfs, btrfs, zfs)",
      "Mounting and unmounting",
      "Disk partitioning",
      "Symbolic and hard links",
      "Archiving and compression"
    ],
    labs: [
      "Complex permission scenarios",
      "File system creation",
      "Backup and restore operations",
      "Security permission audits"
    ],
    projects: [
      "Implement multi-user file sharing",
      "Create automated backup system",
      "Design secure file structure"
    ],
    assessments: [
      "Permission troubleshooting test",
      "File system management exam",
      "Security audit challenge"
    ]
  },
  {
    id: "process-system",
    title: "Process & System Management",
    duration: "Weeks 8-10",
    description: "Master process control, system monitoring, and performance optimization",
    icon: "⚙️",
    topics: [
      "Process lifecycle and states",
      "Process monitoring (ps, top, htop)",
      "Process control and signals",
      "Job control and background processes",
      "Process priorities (nice, renice)",
      "System monitoring tools",
      "Memory management",
      "Performance analysis",
      "Cron jobs and scheduling",
      "Systemd and init systems"
    ],
    labs: [
      "Performance troubleshooting",
      "Process management challenges",
      "System monitoring setup",
      "Automation scripting"
    ],
    projects: [
      "Build system monitoring dashboard",
      "Create process manager tool",
      "Develop automated maintenance system"
    ],
    assessments: [
      "Process management exam",
      "Performance optimization test",
      "System troubleshooting scenarios"
    ]
  },
  {
    id: "user-admin",
    title: "User & Group Administration",
    duration: "Weeks 10-12",
    description: "Learn comprehensive user management and access control strategies",
    icon: "👥",
    topics: [
      "User account lifecycle",
      "Group management",
      "Password policies and aging",
      "sudo configuration",
      "User environment management",
      "PAM (Pluggable Authentication)",
      "LDAP integration basics",
      "User quota management",
      "Login monitoring and security"
    ],
    labs: [
      "Multi-user environment setup",
      "Security policy implementation",
      "User onboarding procedures",
      "Access control scenarios"
    ],
    projects: [
      "Design user management system",
      "Implement security policies",
      "Create automated user provisioning"
    ],
    assessments: [
      "User administration exam",
      "Security configuration test",
      "Access control challenge"
    ]
  },
  {
    id: "package-mgmt",
    title: "Package Management",
    duration: "Weeks 12-13",
    description: "Master software installation, updates, and dependency management",
    icon: "📦",
    topics: [
      "Package management concepts",
      "APT (Debian/Ubuntu)",
      "YUM/DNF (Red Hat/CentOS)",
      "RPM package management",
      "Snap and Flatpak",
      "Compiling from source",
      "Dependency management",
      "Repository configuration",
      "Version management",
      "Package security"
    ],
    labs: [
      "Custom repository setup",
      "Software compilation",
      "Dependency resolution",
      "Security updates"
    ],
    projects: [
      "Create package repository",
      "Build custom packages",
      "Automate updates system"
    ],
    assessments: [
      "Package management test",
      "Compilation challenge",
      "Repository management exam"
    ]
  },
  {
    id: "networking",
    title: "Network Configuration",
    duration: "Weeks 13-15",
    description: "Configure and troubleshoot network services and security",
    icon: "🌐",
    topics: [
      "Network fundamentals (TCP/IP, OSI)",
      "Interface configuration",
      "Routing and routing tables",
      "DNS configuration",
      "DHCP client setup",
      "Troubleshooting tools",
      "Firewall management",
      "Network services (SSH, FTP, HTTP)",
      "Network security",
      "VPN configuration"
    ],
    labs: [
      "Network troubleshooting",
      "Service configuration",
      "Security hardening",
      "Multi-host setup"
    ],
    projects: [
      "Design network infrastructure",
      "Implement secure services",
      "Create network monitor"
    ],
    assessments: [
      "Network configuration exam",
      "Troubleshooting test",
      "Security assessment"
    ]
  },
  {
    id: "services",
    title: "System Services",
    duration: "Weeks 15-16",
    description: "Master system services, logging, and performance optimization",
    icon: "🔧",
    topics: [
      "Service management concepts",
      "Systemd units and targets",
      "Service creation",
      "Logging (journalctl, rsyslog)",
      "Log rotation",
      "System monitoring",
      "Performance tuning",
      "Resource limits",
      "System hardening"
    ],
    labs: [
      "Custom service creation",
      "Log analysis projects",
      "Performance optimization",
      "Security hardening"
    ],
    projects: [
      "Build custom services",
      "Create monitoring system",
      "Optimize system performance"
    ],
    assessments: [
      "Service management exam",
      "Performance tuning test",
      "Logging challenge"
    ]
  },
  {
    id: "scripting",
    title: "Shell Scripting & Automation",
    duration: "Weeks 16-19",
    description: "Develop advanced scripting skills for system automation",
    icon: "📜",
    topics: [
      "Bash scripting advanced",
      "Variables and arrays",
      "Control structures",
      "Functions and organization",
      "Error handling",
      "Regular expressions",
      "Script security",
      "Configuration management",
      "API integration",
      "Database interaction"
    ],
    labs: [
      "System monitoring scripts",
      "Backup automation",
      "User management tools",
      "Log analysis automation"
    ],
    projects: [
      "Infrastructure automation suite",
      "System health monitor",
      "Automated deployment tool"
    ],
    assessments: [
      "Scripting proficiency test",
      "Automation challenge",
      "Code review exercise"
    ]
  },
  {
    id: "advanced",
    title: "Advanced Administration",
    duration: "Weeks 19-22",
    description: "Expert-level system administration and infrastructure management",
    icon: "🚀",
    topics: [
      "Kernel management",
      "System compilation",
      "Advanced storage (LVM, RAID)",
      "High availability",
      "Load balancing",
      "Virtualization (KVM, Xen)",
      "Backup strategies",
      "Disaster recovery",
      "Performance optimization"
    ],
    labs: [
      "Kernel customization",
      "Storage solutions",
      "HA implementation",
      "DR simulations"
    ],
    projects: [
      "Build HA infrastructure",
      "Implement backup solution",
      "Create virtualization platform"
    ],
    assessments: [
      "Advanced admin exam",
      "Infrastructure design test",
      "Troubleshooting scenarios"
    ]
  },
  {
    id: "security",
    title: "Security & Hardening",
    duration: "Weeks 22-24",
    description: "Implement comprehensive security measures and compliance",
    icon: "🔒",
    topics: [
      "Linux security model",
      "SELinux/AppArmor",
      "Intrusion detection",
      "Vulnerability assessment",
      "Security monitoring",
      "Incident response",
      "Cryptography",
      "Secure protocols",
      "Compliance frameworks",
      "Penetration testing"
    ],
    labs: [
      "Security audits",
      "Hardening projects",
      "Incident response",
      "Compliance assessment"
    ],
    projects: [
      "Security implementation plan",
      "Monitoring system setup",
      "Incident response procedures"
    ],
    assessments: [
      "Security certification exam",
      "Penetration test",
      "Compliance audit"
    ]
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    duration: "Weeks 24-26",
    description: "Modern DevOps practices and cloud infrastructure management",
    icon: "☁️",
    topics: [
      "Docker containerization",
      "Kubernetes orchestration",
      "Infrastructure as Code",
      "CI/CD pipelines",
      "Cloud platforms (AWS, Azure, GCP)",
      "Monitoring (Prometheus, Grafana)",
      "Configuration management",
      "Version control (Git)",
      "Microservices architecture"
    ],
    labs: [
      "Container deployment",
      "Infrastructure automation",
      "CI/CD implementation",
      "Monitoring setup"
    ],
    projects: [
      "Full stack deployment",
      "Kubernetes cluster setup",
      "Complete CI/CD pipeline"
    ],
    assessments: [
      "DevOps practices exam",
      "Cloud deployment test",
      "Automation challenge"
    ]
  }
];