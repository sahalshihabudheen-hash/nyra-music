import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockPlaylists } from '../lib/mockData';
import { Plus, Music2, MoreVertical, PlayCircle } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Playlists = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold">Playlists</h1>
            <p className="text-muted-foreground mt-1">Manage your custom collections</p>
          </div>
          <Button className="bg-primary text-black hover:bg-primary/90 gap-2">
            <Plus className="h-4 w-4" /> Create Playlist
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Create New Card */}
          <Card className="bg-card/30 border-dashed border-2 border-border hover:border-primary/50 transition-colors cursor-pointer group h-full flex items-center justify-center min-h-[250px]">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                <Plus className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
              </div>
              <p className="font-medium text-muted-foreground group-hover:text-foreground">Create New Playlist</p>
            </div>
          </Card>

          {mockPlaylists.map((playlist) => (
            <Card key={playlist.id} className="bg-card/50 border-white/5 group hover:border-primary/30 transition-all hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="aspect-square bg-secondary relative overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-black">
                    <Music2 className="h-16 w-16 text-white/10" />
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <PlayCircle className="h-12 w-12 text-primary cursor-pointer hover:scale-110 transition-transform" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg truncate pr-2">{playlist.name}</h3>
                    <p className="text-sm text-muted-foreground">{playlist.songCount} songs • {playlist.duration}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Share</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Playlists;
