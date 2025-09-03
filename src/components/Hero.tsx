import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Terminal, Code, Shield, Cloud } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "sudo master linux --expert-mode";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: Terminal, label: "26-Week Program", value: "Complete" },
    { icon: Code, label: "Hands-On Labs", value: "500+" },
    { icon: Shield, label: "Real Projects", value: "50+" },
    { icon: Cloud, label: "Cloud Ready", value: "100%" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30 animate-gradient-shift" />
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,255,100,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(20,255,100,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Terminal Window */}
          <div className="bg-card/50 backdrop-blur-sm border border-terminal-green/30 rounded-lg p-4 mx-auto max-w-2xl">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-muted-foreground ml-2">terminal</span>
            </div>
            <div className="font-mono text-terminal-green text-lg">
              <span className="text-muted-foreground">$</span> {typedText}
              <span className="cursor-blink">_</span>
            </div>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Master <span className="gradient-text">Linux</span>
              <br />
              From Zero to Hero
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Complete 26-week program to transform you from beginner to Linux expert.
              Real-world skills for System Administration & DevOps.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/curriculum">
              <Button variant="terminal" size="lg" className="group">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/labs">
              <Button variant="glow" size="lg">
                <Code className="mr-2 h-5 w-5" />
                Try Live Labs
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="gradient-border p-4 space-y-2 glow-card"
                >
                  <Icon className="h-8 w-8 text-terminal-green mx-auto" />
                  <div className="text-2xl font-bold gradient-text">{feature.value}</div>
                  <div className="text-sm text-muted-foreground">{feature.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;