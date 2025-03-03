
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Trophy, Lightbulb, PieChart, Layers, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <HeroSection />

        <FeatureSection />

        {/* Community Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-background/80 text-sm font-medium">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <span>Join a global community</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-semibold">Connect with data scientists worldwide</h2>
                <p className="text-lg text-muted-foreground">
                  Share insights, collaborate on solutions, and learn from a diverse community of professionals and enthusiasts passionate about data science.
                </p>
                <ul className="space-y-3">
                  {[
                    { icon: <Globe className="h-5 w-5 text-primary" />, text: "Connect with over 500,000 data scientists" },
                    { icon: <Trophy className="h-5 w-5 text-primary" />, text: "Participate in weekly community challenges" },
                    { icon: <Lightbulb className="h-5 w-5 text-primary" />, text: "Get feedback from industry experts" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-3 mt-1">{item.icon}</div>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-2" asChild>
                  <a href="/community">
                    Join the community
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-xl glass relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Data science community" 
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
                <div className="absolute top-0 right-0 -mt-6 -mr-6 bg-background shadow-lg rounded-lg p-4 z-20 glass">
                  <PieChart className="h-12 w-12 text-primary" />
                </div>
                <div className="absolute bottom-0 left-0 -mb-6 -ml-6 bg-background shadow-lg rounded-lg p-4 z-20 glass">
                  <Layers className="h-12 w-12 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 container px-4 sm:px-6">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4">Impact at Scale</h2>
            <p className="text-muted-foreground text-lg">
              Our platform brings together the brightest minds to solve the world's most challenging data problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "1.2M+", label: "Data Scientists", icon: <TrendingUp className="h-8 w-8 text-primary" /> },
              { value: "5K+", label: "Competitions", icon: <Trophy className="h-8 w-8 text-primary" /> },
              { value: "$25M+", label: "Prizes Awarded", icon: <PieChart className="h-8 w-8 text-primary" /> },
              { value: "150+", label: "Countries", icon: <Globe className="h-8 w-8 text-primary" /> },
            ].map((stat, i) => (
              <div key={i} className="glass rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Ready to start your data science journey?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Join our platform today and connect with a global community of data scientists, access unique datasets, and participate in exciting competitions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="/signup">Create free account</a>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10" asChild>
                  <a href="/competitions">View competitions</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
