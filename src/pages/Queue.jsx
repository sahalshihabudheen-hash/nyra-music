import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockSongs } from '../lib/mockData';
import { GripVertical, Trash2, ArrowUp, ArrowDown, Play } from 'lucide-react';

const Queue = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold">Queue</h1>
            <p className="text-muted-foreground mt-1">24 songs • 1hr 45min remaining</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-destructive/50 text-destructive hover:bg-destructive/10">Clear Queue</Button>
            <Button className="bg-primary text-black hover:bg-primary/90">Shuffle Play</Button>
          </div>
        </div>

        <Card className="bg-card/50 border-white/5">
          <CardContent className="p-0">
            <div className="divide-y divide-white/5">
              {mockSongs.map((song, index) => (
                <div key={song.id} className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors group">
                  <div className="text-muted-foreground cursor-grab active:cursor-grabbing">
                    <GripVertical className="h-5 w-5" />
                  </div>
                  
                  <div className="relative w-12 h-12 shrink-0">
                    <img src={song.thumbnail} alt="" className="w-full h-full rounded object-cover" />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="h-5 w-5 text-white fill-current" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate group-hover:text-primary transition-colors">{song.title}</h4>
                    <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
                  </div>

                  <div className="text-sm font-mono text-muted-foreground hidden sm:block">
                    {song.duration}
                  </div>

                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                      <ArrowUp className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                      <ArrowDown className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive hover:bg-destructive/10">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              {/* Duplicate for scroll effect */}
              {mockSongs.map((song, index) => (
                <div key={`${song.id}-dup`} className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors group">
                  <div className="text-muted-foreground cursor-grab active:cursor-grabbing">
                    <GripVertical className="h-5 w-5" />
                  </div>
                  
                  <div className="relative w-12 h-12 shrink-0">
                    <img src={song.thumbnail} alt="" className="w-full h-full rounded object-cover" />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="h-5 w-5 text-white fill-current" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate group-hover:text-primary transition-colors">{song.title}</h4>
                    <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
                  </div>

                  <div className="text-sm font-mono text-muted-foreground hidden sm:block">
                    {song.duration}
                  </div>

                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                      <ArrowUp className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                      <ArrowDown className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive hover:bg-destructive/10">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Queue;
