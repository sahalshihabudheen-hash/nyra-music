import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  ListMusic, 
  Library, 
  Disc3, 
  ScrollText, 
  Settings, 
  LogOut,
  Music2,
  Activity
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Layout = ({ children }) => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: ListMusic, label: "Queue", path: "/queue" },
    { icon: Library, label: "Playlists", path: "/playlists" },
    { icon: Disc3, label: "Player", path: "/player" },
    { icon: ScrollText, label: "Logs", path: "/logs" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border/40 bg-card/30 backdrop-blur-xl flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(255,212,0,0.4)]">
            <Music2 className="h-6 w-6 text-black" />
          </div>
          <div>
            <h1 className="font-heading font-bold text-xl tracking-tight">VIBE<span className="text-primary">BOT</span></h1>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs text-muted-foreground font-medium">Online</span>
            </div>
          </div>
        </div>

        <div className="px-4 py-2">
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link to={item.path} key={item.path}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start gap-3 font-medium transition-all duration-200 ${
                      isActive 
                        ? "bg-primary/10 text-primary border-r-2 border-primary rounded-none rounded-l-md" 
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    <item.icon className={`h-5 w-5 ${isActive ? "text-primary" : ""}`} />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-4">
          <div className="glass-card rounded-xl p-4 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="h-10 w-10 border border-primary/20">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div className="overflow-hidden">
                <p className="text-sm font-bold truncate">Admin User</p>
                <p className="text-xs text-muted-foreground truncate">#1234</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full border-border/50 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/50 transition-colors">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Top Navbar */}
        <header className="h-16 border-b border-border/40 bg-background/50 backdrop-blur-md flex items-center justify-between px-8 z-10">
          <div className="flex items-center gap-4">
            <h2 className="font-heading text-2xl font-bold capitalize">
              {location.pathname === "/" ? "Dashboard" : location.pathname.substring(1)}
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-white/5">
              <Activity className="h-4 w-4 text-primary" />
              <span className="text-xs font-mono text-muted-foreground">PING: 24ms</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8 relative">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"></div>
          </div>
          
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
