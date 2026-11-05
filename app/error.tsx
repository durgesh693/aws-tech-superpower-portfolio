"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Runtime Error Captured:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 text-center">
      <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 mb-4">
        <AlertTriangle className="w-8 h-8" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight mb-2">
        Something unexpected occurred
      </h2>
      <p className="text-sm text-muted-foreground max-w-md mb-6">
        An error was intercepted by the application boundary. You can attempt to restore the component state below.
      </p>
      <Button onClick={() => reset()} className="gap-2">
        <RotateCcw className="w-4 h-4" />
        <span>Re-initialize Page</span>
      </Button>
    </div>
  );
}