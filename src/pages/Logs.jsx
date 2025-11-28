import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockLogs } from '../lib/mockData';
import { Terminal, Info, AlertTriangle, CheckCircle2 } from 'lucide-react';

const Logs = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'success': return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      default: return <Info className="h-4 w-4 text-blue-500" />;
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-heading font-bold">System Logs</h1>
          <p className="text-muted-foreground mt-1">Monitor bot activity and events</p>
        </div>

        <Card className="bg-black border border-white/10 font-mono text-sm shadow-2xl">
          <CardHeader className="border-b border-white/10 bg-white/5 py-3">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">console_output.log</span>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="max-h-[600px] overflow-y-auto p-4 space-y-1">
              {mockLogs.map((log) => (
                <div key={log.id} className="flex gap-3 hover:bg-white/5 p-1 rounded transition-colors">
                  <span className="text-muted-foreground shrink-0 w-24 text-xs pt-0.5">{log.time}</span>
                  <div className="shrink-0 pt-0.5">{getIcon(log.type)}</div>
                  <div className="flex-1 break-all">
                    <span className="text-primary">[{log.user}]</span> {log.action}
                  </div>
                </div>
              ))}
              {/* Fill with more mock data for effect */}
              {[...Array(10)].map((_, i) => (
                <div key={`fill-${i}`} className="flex gap-3 hover:bg-white/5 p-1 rounded transition-colors opacity-50">
                  <span className="text-muted-foreground shrink-0 w-24 text-xs pt-0.5">1 hr ago</span>
                  <div className="shrink-0 pt-0.5"><Info className="h-4 w-4 text-muted-foreground" /></div>
                  <div className="flex-1 break-all">
                    <span className="text-muted-foreground">[System]</span> Keep-alive ping sent to gateway
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

export default Logs;
