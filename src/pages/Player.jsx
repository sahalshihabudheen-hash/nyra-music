import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { mockSongs } from '../lib/mockData';
import { 
  Play, Pause, SkipBack, SkipForward, 
  Repeat, Shuffle, Volume2, VolumeX,
  Mic2, ListMusic
} from 'lucide-react';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([80]);
  const [progress, setProgress] = useState([33]);
  const currentSong = mockSongs[0];

  return (
    <Layout>
      <div className="h-full flex flex-col justify-center max-w-4xl mx-auto">
        <Card className="bg-card/50 border-white/5 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-8 md:p-12">
            
            {/* Top Info */}
            <div className="flex justify-between items-center mb-8">
              <div className="text-sm font-mono text-primary tracking-widest">NOW PLAYING</div>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-foreground">
                  <ListMusic className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Main Visual */}
            <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
              <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0 group">
                <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity animate-pulse-glow"></div>
                <img 
                  src={currentSong.thumbnail} 
                  alt="Album Art" 
                  className={`w-full h-full object-cover rounded-full border-4 border-card shadow-2xl ${isPlaying ? 'animate-[spin_10s_linear_infinite]' : ''}`}
                />
                <div className="absolute inset-0 rounded-full border border-white/10"></div>
                <div className="absolute inset-[45%] bg-card rounded-full border border-white/5 flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left space-y-2 w-full">
                <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">{currentSong.title}</h1>
                <p className="text-2xl text-muted-foreground">{currentSong.artist}</p>
                <div className="flex items-center justify-center md:justify-start gap-2 mt-4">
                  <span className="px-2 py-1 rounded bg-white/5 text-xs font-mono text-muted-foreground">HQ AUDIO</span>
                  <span className="px-2 py-1 rounded bg-white/5 text-xs font-mono text-muted-foreground">STEREO</span>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="space-y-2 mb-8">
              <Slider 
                value={progress} 
                onValueChange={setProgress} 
                max={100} 
                step={1}
                className="cursor-pointer"
              />
              <div className="flex justify-between text-xs font-mono text-muted-foreground">
                <span>1:15</span>
                <span>{currentSong.duration}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-center gap-8">
                <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary">
                  <Shuffle className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="h-12 w-12 text-foreground hover:text-primary hover:bg-white/5">
                  <SkipBack className="h-8 w-8 fill-current" />
                </Button>
                <Button 
                  size="icon" 
                  className="h-20 w-20 rounded-full bg-primary text-black hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,212,0,0.4)]"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="h-10 w-10 fill-current" /> : <Play className="h-10 w-10 fill-current ml-1" />}
                </Button>
                <Button size="icon" variant="ghost" className="h-12 w-12 text-foreground hover:text-primary hover:bg-white/5">
                  <SkipForward className="h-8 w-8 fill-current" />
                </Button>
                <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary">
                  <Repeat className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center justify-center gap-4 max-w-xs mx-auto w-full">
                <VolumeX className="h-4 w-4 text-muted-foreground" />
                <Slider 
                  value={volume} 
                  onValueChange={setVolume} 
                  max={100} 
                  step={1}
                />
                <Volume2 className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Player;
