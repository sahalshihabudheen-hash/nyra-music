import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play, Pause, SkipForward, Volume2, Search } from 'lucide-react';
import { mockSongs, mockServers } from '../lib/mockData';

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const currentSong = mockSongs[0];

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Section - 2 Columns */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Server Selector & Search */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <Select defaultValue="1">
              <SelectTrigger className="w-[250px] bg-card border-border/50 h-12 text-lg font-medium">
                <SelectValue placeholder="Select Server" />
              </SelectTrigger>
              <SelectContent>
                {mockServers.map(server => (
                  <SelectItem key={server.id} value={server.id.toString()}>
                    <div className="flex items-center gap-2">
                      <img src={server.icon} alt="" className="w-5 h-5 rounded-full" />
                      {server.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Song Searcher */}
            <div className="relative flex-1 w-full sm:max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search for songs or paste URL..." 
                  className="pl-10 h-12 bg-card/50 border-white/10 focus-visible:ring-primary/50 focus-visible:border-primary transition-all"
                />
              </div>
            </div>
          </div>

          {/* Now Playing Card */}
          <Card className="border-none bg-gradient-to-br from-card to-background border border-white/5 overflow-hidden relative group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Album Art */}
                <div className="relative w-48 h-48 shrink-0">
                  <div className="absolute inset-0 bg-primary blur-2xl opacity-20 animate-pulse-glow"></div>
                  <img 
                    src={currentSong.thumbnail} 
                    alt="Album Art" 
                    className="relative w-full h-full object-cover rounded-xl shadow-2xl border border-white/10"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur px-2 py-1 rounded text-xs font-mono border border-white/10">
                    {currentSong.duration}
                  </div>
                </div>

                {/* Song Info & Controls */}
                <div className="flex-1 text-center md:text-left space-y-6 w-full">
                  <div>
                    <h3 className="text-primary font-mono text-sm tracking-wider mb-1">NOW PLAYING</h3>
                    <h1 className="text-3xl md:text-4xl font-heading font-bold leading-tight truncate">{currentSong.title}</h1>
                    <p className="text-xl text-muted-foreground mt-1">{currentSong.artist}</p>
                  </div>

                  {/* Waveform Animation Mock */}
                  <div className="h-12 flex items-center justify-center md:justify-start gap-1">
                    {[...Array(20)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-1.5 bg-primary rounded-full animate-pulse"
                        style={{ 
                          height: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.05}s`,
                          opacity: isPlaying ? 1 : 0.3
                        }}
                      ></div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <Button 
                      size="lg" 
                      className="h-14 w-14 rounded-full bg-primary text-black hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,212,0,0.3)]"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause className="h-6 w-6 fill-current" /> : <Play className="h-6 w-6 fill-current ml-1" />}
                    </Button>
                    <Button size="lg" variant="outline" className="h-14 w-14 rounded-full border-white/10 hover:bg-white/5">
                      <SkipForward className="h-6 w-6" />
                    </Button>
                    <div className="ml-auto hidden md:flex items-center gap-2 text-muted-foreground">
                      <Volume2 className="h-5 w-5" />
                      <div className="w-24 h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full w-[70%] bg-primary"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Sidebar Section - 1 Column */}
        <div className="space-y-8">
          {/* Quick Queue */}
          <Card className="bg-card/50 border-white/5 h-full">
            <CardHeader>
              <CardTitle className="font-heading text-lg flex items-center justify-between">
                Up Next
                <Button variant="link" className="text-primary text-xs h-auto p-0">View All</Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockSongs.slice(1, 5).map((song, index) => (
                <div key={song.id} className="flex items-center gap-3 group p-2 rounded-lg hover:bg-white/5 transition-colors">
                  <span className="text-muted-foreground font-mono text-sm w-4">{index + 1}</span>
                  <img src={song.thumbnail} alt="" className="w-10 h-10 rounded object-cover" />
                  <div className="flex-1 overflow-hidden">
                    <p className="font-medium truncate text-sm group-hover:text-primary transition-colors">{song.title}</p>
                    <p className="text-xs text-muted-foreground truncate">{song.artist}</p>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">{song.duration}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

      </div>
    </Layout>
  );
};

export default Home;
