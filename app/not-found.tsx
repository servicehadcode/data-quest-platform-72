
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route"
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 py-16 text-center">
          <div className="relative mx-auto mb-8 w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-5xl font-bold text-primary">404</span>
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping opacity-75" style={{ animationDuration: '3s' }}></div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Page not found</h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
          
          <Button size="lg" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
