import { Outlet, NavLink } from "react-router-dom";
import { Terminal, Command, BookOpen, TrendingUp } from "lucide-react";

export default function Layout() {
  const navLinks = [
    { path: "/", label: "Home", icon: Terminal },
    { path: "/commands", label: "Commands", icon: Command },
    { path: "/practice", label: "Practice", icon: BookOpen },
    { path: "/progress", label: "Progress", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Terminal className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold gradient-text">LinuxMaster</span>
              </div>
              <div className="hidden md:flex space-x-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`
                      }
                    >
                      <Icon className="h-4 w-4" />
                      <span>{link.label}</span>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}