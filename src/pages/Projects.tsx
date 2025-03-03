
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { Search, Code, Database, Layers } from "lucide-react";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const projectsByCategory = {
    beginner: [
      {
        id: 1,
        title: "Personal Portfolio Website",
        description: "Build a responsive portfolio website using HTML, CSS, and JavaScript to showcase your projects and skills.",
        difficulty: "Beginner",
        technologies: ["HTML", "CSS", "JavaScript"],
        estimatedTime: "2-3 days",
        image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 2,
        title: "To-Do List Application",
        description: "Create a simple task management application with the ability to add, edit, and delete tasks.",
        difficulty: "Beginner",
        technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
        estimatedTime: "1-2 days",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 3,
        title: "Weather App",
        description: "Build a weather application that fetches and displays weather data from a public API.",
        difficulty: "Beginner",
        technologies: ["HTML", "CSS", "JavaScript", "API"],
        estimatedTime: "2-3 days",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000&auto=format&fit=crop"
      },
    ],
    intermediate: [
      {
        id: 4,
        title: "E-commerce Product Page",
        description: "Design and implement a responsive product page with filtering, sorting, and cart functionality.",
        difficulty: "Intermediate",
        technologies: ["React", "CSS", "State Management"],
        estimatedTime: "3-5 days",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 5,
        title: "Social Media Dashboard",
        description: "Create a dashboard that displays various social media metrics and statistics with interactive charts.",
        difficulty: "Intermediate",
        technologies: ["React", "Chart.js", "API Integration"],
        estimatedTime: "4-6 days",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 6,
        title: "Blog Platform",
        description: "Build a blog platform with article listing, categories, and a simple content management system.",
        difficulty: "Intermediate",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        estimatedTime: "1-2 weeks",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop"
      },
    ],
    advanced: [
      {
        id: 7,
        title: "Real-time Chat Application",
        description: "Develop a real-time chat application with private messaging, group chats, and notification features.",
        difficulty: "Advanced",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
        estimatedTime: "2-3 weeks",
        image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 8,
        title: "Project Management System",
        description: "Create a comprehensive project management tool with task tracking, team collaboration, and progress monitoring.",
        difficulty: "Advanced",
        technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
        estimatedTime: "3-4 weeks",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 9,
        title: "E-learning Platform",
        description: "Build an interactive learning platform with course creation, user progress tracking, and assessment features.",
        difficulty: "Advanced",
        technologies: ["React", "Node.js", "Express", "MongoDB", "AWS"],
        estimatedTime: "4-6 weeks",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop"
      },
    ]
  };

  const filterProjects = (projects) => {
    if (!searchTerm) return projects;
    return projects.filter(project => 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const projectIcons = {
    beginner: <Code className="h-5 w-5" />,
    intermediate: <Database className="h-5 w-5" />,
    advanced: <Layers className="h-5 w-5" />
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container px-4 py-12 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Learn & Build Projects</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Enhance your skills by working on real-world projects. Choose from different difficulty levels and technologies to match your learning goals.
          </p>
        </div>

        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="beginner" className="w-full">
          <TabsList className="glass mb-8 mx-auto">
            <TabsTrigger value="beginner" className="flex items-center gap-2">
              {projectIcons.beginner} Beginner
            </TabsTrigger>
            <TabsTrigger value="intermediate" className="flex items-center gap-2">
              {projectIcons.intermediate} Intermediate
            </TabsTrigger>
            <TabsTrigger value="advanced" className="flex items-center gap-2">
              {projectIcons.advanced} Advanced
            </TabsTrigger>
          </TabsList>
          
          {Object.entries(projectsByCategory).map(([category, projects]) => (
            <TabsContent key={category} value={category} className="space-y-8">
              {filterProjects(projects).length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterProjects(projects).map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No projects found matching your search criteria.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => setSearchTerm("")}
                    className="mt-4"
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
