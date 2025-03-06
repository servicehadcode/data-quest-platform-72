
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, Briefcase } from "lucide-react";

const Hero = () => {
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
            <span>Empowering Students for Success</span>
          </div>
          
          <h1 className="font-semibold leading-tight text-balance mb-6 animate-fade-in" style={{ "--index": "1" } as React.CSSProperties}>
            Welcome to <br className="md:hidden" />
            <span className="text-primary">XYZ Education</span>
          </h1>
          
          <p className="max-w-[42rem] text-xl text-muted-foreground mb-8 text-balance animate-fade-in" style={{ "--index": "2" } as React.CSSProperties}>
            Your gateway to career opportunities, project-based learning, and professional development. Connect with industry experts, build your portfolio, and showcase your skills.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ "--index": "3" } as React.CSSProperties}>
            <Button size="lg" asChild>
              <Link href="/interviews">
                Request Interview
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">Explore Projects</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {[
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Industry Interviews",
                description: "Connect with leading companies and professionals for interview opportunities tailored to your skills and interests."
              },
              {
                icon: <GraduationCap className="h-10 w-10 text-primary" />,
                title: "Project-Based Learning",
                description: "Gain practical experience through hands-on projects designed to enhance your technical and soft skills."
              },
              {
                icon: <Briefcase className="h-10 w-10 text-primary" />,
                title: "Professional Profiles",
                description: "Build and showcase your professional profile to highlight your accomplishments, skills, and projects."
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

export default Hero;
