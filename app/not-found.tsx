import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-6">
        <Compass className="w-8 h-8 animate-spin" />
      </div>
      <span className="font-mono text-xs font-semibold text-sky-400 uppercase tracking-widest mb-2">
        404 — Page Not Found
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
        Resource Does Not Exist
      </h1>
      <p className="text-sm text-muted-foreground max-w-md mb-8">
        The requested route could not be resolved. Please return to the portfolio home page.
      </p>
      <Link href="/">
        <Button className="gap-2">
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Button>
      </Link>
    </div>
  );
}