import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Users, 
  MessageSquare, 
  Heart,
  Share2,
  Trophy,
  Star,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Send,
  ThumbsUp,
  Award,
  Calendar,
  MapPin,
  Code,
  BookOpen,
  HelpCircle
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    level: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  tags: string[];
  liked?: boolean;
}

interface Member {
  id: string;
  name: string;
  avatar: string;
  role: string;
  level: string;
  contributions: number;
  joinedDate: string;
  skills: string[];
  location?: string;
  github?: string;
  linkedin?: string;
}

const posts: Post[] = [
  {
    id: "post-001",
    author: {
      name: "Alex Chen",
      avatar: "AC",
      role: "System Administrator",
      level: "Expert"
    },
    content: "Just passed my RHCE exam! Thanks to this community for all the help and resources. The shell scripting section was particularly challenging, but the practice labs here really prepared me well. Happy to answer any questions about the exam!",
    timestamp: "2 hours ago",
    likes: 45,
    comments: 12,
    tags: ["certification", "RHCE", "success"],
    liked: false
  },
  {
    id: "post-002",
    author: {
      name: "Sarah Johnson",
      avatar: "SJ",
      role: "DevOps Engineer",
      level: "Advanced"
    },
    content: "Here's a bash script I wrote for automated backup with rotation. Feel free to use and improve it! [Code snippet attached] It handles incremental backups, compression, and automatic cleanup of old backups.",
    timestamp: "5 hours ago",
    likes: 78,
    comments: 23,
    tags: ["scripting", "backup", "automation"],
    liked: true
  },
  {
    id: "post-003",
    author: {
      name: "Mike Williams",
      avatar: "MW",
      role: "Linux Enthusiast",
      level: "Intermediate"
    },
    content: "Question: What's the best way to monitor system performance in real-time? I've been using top and htop, but wondering if there are better alternatives for production servers.",
    timestamp: "1 day ago",
    likes: 15,
    comments: 31,
    tags: ["question", "monitoring", "performance"],
    liked: false
  }
];

const topContributors: Member[] = [
  {
    id: "member-001",
    name: "David Kumar",
    avatar: "DK",
    role: "Senior SysAdmin",
    level: "Expert",
    contributions: 234,
    joinedDate: "Jan 2023",
    skills: ["Linux", "Docker", "Kubernetes", "Python"],
    location: "San Francisco, CA",
    github: "davidkumar",
    linkedin: "davidkumar"
  },
  {
    id: "member-002",
    name: "Emily Rodriguez",
    avatar: "ER",
    role: "Cloud Architect",
    level: "Expert",
    contributions: 189,
    joinedDate: "Mar 2023",
    skills: ["AWS", "Linux", "Terraform", "Ansible"],
    location: "Austin, TX",
    github: "emilyrod",
    linkedin: "emilyrodriguez"
  },
  {
    id: "member-003",
    name: "James Park",
    avatar: "JP",
    role: "Security Engineer",
    level: "Advanced",
    contributions: 156,
    joinedDate: "Feb 2023",
    skills: ["Security", "Linux", "Bash", "Python"],
    location: "New York, NY",
    github: "jamespark"
  }
];

const events = [
  {
    id: "event-001",
    title: "Linux Basics Workshop",
    date: "Dec 15, 2024",
    time: "2:00 PM EST",
    type: "workshop",
    attendees: 45
  },
  {
    id: "event-002",
    title: "Monthly Q&A Session",
    date: "Dec 20, 2024",
    time: "6:00 PM EST",
    type: "qa",
    attendees: 128
  },
  {
    id: "event-003",
    title: "Shell Scripting Hackathon",
    date: "Jan 5, 2025",
    time: "10:00 AM EST",
    type: "hackathon",
    attendees: 67
  }
];

const Community = () => {
  const [activeTab, setActiveTab] = useState("feed");
  const [postContent, setPostContent] = useState("");
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set(["post-002"]));

  const handlePost = () => {
    if (postContent.trim()) {
      toast.success("Post published successfully!");
      setPostContent("");
    }
  };

  const toggleLike = (postId: string) => {
    const newLiked = new Set(likedPosts);
    if (newLiked.has(postId)) {
      newLiked.delete(postId);
    } else {
      newLiked.add(postId);
      toast.success("Post liked!");
    }
    setLikedPosts(newLiked);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Linux <span className="gradient-text">Community</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with fellow Linux enthusiasts, share knowledge, and grow together
            </p>

            {/* Community Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4">
                <Users className="h-8 w-8 text-terminal-green mx-auto mb-2" />
                <div className="text-2xl font-bold">5,420</div>
                <div className="text-sm text-muted-foreground">Members</div>
              </Card>
              <Card className="p-4">
                <MessageSquare className="h-8 w-8 text-terminal-cyan mx-auto mb-2" />
                <div className="text-2xl font-bold">1,234</div>
                <div className="text-sm text-muted-foreground">Discussions</div>
              </Card>
              <Card className="p-4">
                <Trophy className="h-8 w-8 text-terminal-purple mx-auto mb-2" />
                <div className="text-2xl font-bold">456</div>
                <div className="text-sm text-muted-foreground">Contributors</div>
              </Card>
              <Card className="p-4">
                <HelpCircle className="h-8 w-8 text-terminal-orange mx-auto mb-2" />
                <div className="text-2xl font-bold">890</div>
                <div className="text-sm text-muted-foreground">Solutions</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="feed">Feed</TabsTrigger>
              <TabsTrigger value="members">Members</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            </TabsList>

            <TabsContent value="feed" className="space-y-6 max-w-4xl mx-auto">
              {/* Create Post */}
              <Card className="p-6">
                <div className="flex gap-4">
                  <Avatar className="h-10 w-10 bg-gradient-primary text-background flex items-center justify-center">
                    <span className="text-sm font-bold">YU</span>
                  </Avatar>
                  <div className="flex-1 space-y-4">
                    <Textarea
                      placeholder="Share your Linux knowledge, ask questions, or help others..."
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
                      className="min-h-[100px]"
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Code className="h-4 w-4 mr-2" />
                          Add Code
                        </Button>
                        <Button variant="outline" size="sm">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Add Resource
                        </Button>
                      </div>
                      <Button variant="terminal" onClick={handlePost}>
                        <Send className="h-4 w-4 mr-2" />
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Posts Feed */}
              {posts.map((post) => (
                <Card key={post.id} className="p-6 hover:shadow-hover transition-all">
                  <div className="flex gap-4">
                    <Avatar className="h-10 w-10 bg-gradient-primary text-background flex items-center justify-center">
                      <span className="text-sm font-bold">{post.author.avatar}</span>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-bold">{post.author.name}</h3>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{post.author.role}</span>
                            <Badge variant="outline" className="text-xs">
                              {post.author.level}
                            </Badge>
                            <span>• {post.timestamp}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="mb-4">{post.content}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleLike(post.id)}
                          className={likedPosts.has(post.id) ? "text-terminal-green" : ""}
                        >
                          <ThumbsUp className={`h-4 w-4 mr-1 ${likedPosts.has(post.id) ? "fill-current" : ""}`} />
                          {post.likes + (likedPosts.has(post.id) && !post.liked ? 1 : 0)}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          {post.comments}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4 mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="members" className="space-y-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {topContributors.map((member) => (
                  <Card key={member.id} className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12 bg-gradient-primary text-background flex items-center justify-center">
                        <span className="font-bold">{member.avatar}</span>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                        
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          {member.location && (
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {member.location}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Joined {member.joinedDate}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2 mt-3">
                          <Badge variant="outline" className="text-xs">
                            {member.level}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {member.contributions} contributions
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mt-3">
                          {member.skills.slice(0, 3).map(skill => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-2 mt-4">
                          {member.github && (
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Github className="h-4 w-4" />
                            </Button>
                          )}
                          {member.linkedin && (
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Linkedin className="h-4 w-4" />
                            </Button>
                          )}
                          <Button variant="glow" size="sm" className="ml-auto">
                            Follow
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events" className="space-y-6 max-w-4xl mx-auto">
              <div className="grid gap-6">
                {events.map((event) => (
                  <Card key={event.id} className="p-6 gradient-border">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {event.date}
                          </span>
                          <span>{event.time}</span>
                          <Badge variant="outline">{event.type}</Badge>
                        </div>
                        <div className="flex items-center gap-2 mt-3">
                          <Users className="h-4 w-4 text-terminal-green" />
                          <span className="text-sm">{event.attendees} attending</span>
                        </div>
                      </div>
                      <Button variant="terminal">
                        Register
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="leaderboard" className="space-y-6 max-w-4xl mx-auto">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Top Contributors This Month</h2>
                <div className="space-y-4">
                  {topContributors.map((member, index) => (
                    <div key={member.id} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                      <div className="text-2xl font-bold text-terminal-green">
                        {index === 0 && "🥇"}
                        {index === 1 && "🥈"}
                        {index === 2 && "🥉"}
                        {index > 2 && `#${index + 1}`}
                      </div>
                      <Avatar className="h-10 w-10 bg-gradient-primary text-background flex items-center justify-center">
                        <span className="font-bold">{member.avatar}</span>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-bold">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-terminal-green">{member.contributions}</div>
                        <div className="text-xs text-muted-foreground">contributions</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Community;