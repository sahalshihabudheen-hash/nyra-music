import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Save, Shield, Volume2, Radio } from 'lucide-react';

const Settings = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-heading font-bold">Settings</h1>
          <p className="text-muted-foreground mt-1">Configure bot behavior and permissions</p>
        </div>

        <div className="space-y-6">
          {/* General Settings */}
          <Card className="bg-card/50 border-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-primary" />
                Audio Defaults
              </CardTitle>
              <CardDescription>Set default playback behavior</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Default Volume</Label>
                  <span className="text-sm font-mono text-muted-foreground">80%</span>
                </div>
                <Slider defaultValue={[80]} max={100} step={1} />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-Play</Label>
                  <p className="text-sm text-muted-foreground">Automatically play recommended songs when queue ends</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>24/7 Mode</Label>
                  <p className="text-sm text-muted-foreground">Keep bot in voice channel when idle</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          {/* Permissions */}
          <Card className="bg-card/50 border-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Permissions
              </CardTitle>
              <CardDescription>Manage who can control the bot</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="dj-role">DJ Role Name</Label>
                <Input id="dj-role" placeholder="e.g. DJ" defaultValue="DJ" className="bg-background/50" />
                <p className="text-xs text-muted-foreground">Users with this role can skip, stop, and manage queue</p>
              </div>
            </CardContent>
          </Card>

          {/* Channels */}
          <Card className="bg-card/50 border-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Radio className="h-5 w-5 text-primary" />
                Channels
              </CardTitle>
              <CardDescription>Restrict bot to specific channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="music-channel">Music Text Channel ID</Label>
                <Input id="music-channel" placeholder="Channel ID" className="bg-background/50" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="voice-channel">Restricted Voice Channel ID</Label>
                <Input id="voice-channel" placeholder="Channel ID" className="bg-background/50" />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button variant="ghost">Discard Changes</Button>
            <Button className="bg-primary text-black hover:bg-primary/90 gap-2">
              <Save className="h-4 w-4" /> Save Configuration
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
