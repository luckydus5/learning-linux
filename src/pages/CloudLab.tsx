import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Server, 
  Terminal, 
  Zap,
  Database,
  Globe,
  Lock,
  Cpu,
  HardDrive,
  Activity,
  Play,
  Settings
} from "lucide-react";
import { toast } from "sonner";

const CloudLab = () => {
  const handleLaunchLab = () => {
    toast.success("Cloud lab environment launching...");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 border-b border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Cloud Lab</span> Environment
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Practice Linux in the cloud with pre-configured environments
            </p>

            <Card className="p-8 gradient-border">
              <Cloud className="h-16 w-16 text-terminal-green mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Launch Your Linux Instance</h2>
              <p className="text-muted-foreground mb-6">
                Get instant access to a fully configured Linux environment in the cloud
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <Cpu className="h-8 w-8 text-terminal-cyan mx-auto mb-2" />
                  <div className="font-bold">2 vCPU</div>
                </div>
                <div className="text-center">
                  <HardDrive className="h-8 w-8 text-terminal-purple mx-auto mb-2" />
                  <div className="font-bold">4GB RAM</div>
                </div>
                <div className="text-center">
                  <Database className="h-8 w-8 text-terminal-orange mx-auto mb-2" />
                  <div className="font-bold">20GB SSD</div>
                </div>
                <div className="text-center">
                  <Globe className="h-8 w-8 text-terminal-green mx-auto mb-2" />
                  <div className="font-bold">Public IP</div>
                </div>
              </div>
              
              <Button variant="terminal" size="lg" onClick={handleLaunchLab}>
                <Zap className="mr-2 h-5 w-5" />
                Launch Cloud Lab
              </Button>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6">
                <Server className="h-10 w-10 text-terminal-green mb-3" />
                <h3 className="font-bold mb-2">Multiple Distros</h3>
                <p className="text-sm text-muted-foreground">
                  Choose from Ubuntu, CentOS, Debian, and more
                </p>
              </Card>
              <Card className="p-6">
                <Lock className="h-10 w-10 text-terminal-cyan mb-3" />
                <h3 className="font-bold mb-2">Secure & Isolated</h3>
                <p className="text-sm text-muted-foreground">
                  Your own private environment with root access
                </p>
              </Card>
              <Card className="p-6">
                <Activity className="h-10 w-10 text-terminal-purple mb-3" />
                <h3 className="font-bold mb-2">Pre-configured</h3>
                <p className="text-sm text-muted-foreground">
                  Tools and packages pre-installed for learning
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudLab;