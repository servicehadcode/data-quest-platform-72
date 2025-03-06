
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Layout } from "lucide-react";

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "E-commerce Frontend",
      category: "Web Development",
      icon: <Layout className="h-10 w-10 text-primary" />,
      description: "Build a responsive e-commerce interface with product listings, cart functionality, and checkout process.",
      skills: ["React", "CSS", "State Management"],
      difficulty: "Intermediate"
    },
    {
      id: 2,
      title: "Data Visualization Dashboard",
      category: "Data Science",
      icon: <Database className="h-10 w-10 text-primary" />,
      description: "Create an interactive dashboard to visualize and analyze complex datasets using modern chart libraries.",
      skills: ["JavaScript", "D3.js", "Data Analysis"],
      difficulty: "Intermediate"
    },
    {
      id: 3,
      title: "API Development",
      category: "Backend",
      icon: <Code className="h-10 w-10 text-primary" />,
      description: "Design and implement RESTful APIs with authentication, data validation, and proper error handling.",
      skills: ["Node.js", "Express", "MongoDB"],
      difficulty: "Advanced"
    },
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            Enhance your skills with these carefully selected hands-on projects designed to boost your portfolio and technical abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="glass rounded-xl overflow-hidden flex flex-col h-full transition-transform hover:scale-[1.02]">
              <div className="p-6 flex-1">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-background/80 mb-4 text-sm font-medium">
                  {project.difficulty}
                </div>
                <div className="mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.skills.map((skill, index) => (
                    <span key={index} className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4 border-t border-border">
                <Button variant="ghost" className="w-full justify-between" asChild>
                  <Link href={`/projects`}>
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button size="lg" asChild>
            <Link href="/projects">
              Explore All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
