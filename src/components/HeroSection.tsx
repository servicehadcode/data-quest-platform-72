
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Database, Code } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-accent/20 blur-3xl"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]" style={{ 
        backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)",
        backgroundSize: "40px 40px" 
      }}></div>

      <div className="container px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-background/80 mb-4 text-sm font-medium animate-fade-in" style={{ "--index": "0" } as React.CSSProperties}>
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
            <span>Now with advanced AI competition features</span>
          </div>
          
          <h1 className="font-semibold leading-tight text-balance mb-6 animate-fade-in" style={{ "--index": "1" } as React.CSSProperties}>
            Compete. Learn. <br className="md:hidden" />
            <span className="text-primary">Win with Data</span>
          </h1>
          
          <p className="max-w-[42rem] text-xl text-muted-foreground mb-8 text-balance animate-fade-in" style={{ "--index": "2" } as React.CSSProperties}>
            Join the world's largest data science community and compete in challenges, discover datasets, build your portfolio, and launch your career.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ "--index": "3" } as React.CSSProperties}>
            <Button size="lg" asChild>
              <Link to="/signup">
                Get started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/competitions">Explore competitions</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {[
              {
                icon: <TrendingUp className="h-10 w-10 text-primary" />,
                title: "Real-world Challenges",
                description: "Solve complex problems from leading organizations and compete for prizes and recognition."
              },
              {
                icon: <Database className="h-10 w-10 text-primary" />,
                title: "Rich Datasets",
                description: "Access unique datasets from various domains to train and test your machine learning models."
              },
              {
                icon: <Code className="h-10 w-10 text-primary" />,
                title: "Learning Environment",
                description: "Collaborate with peers, share insights, and learn from top practitioners in the field."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="glass rounded-xl p-6 flex flex-col items-center text-center animate-scale-in"
                style={{ "--index": index + 4 } as React.CSSProperties}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
