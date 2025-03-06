
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  technologies: string[];
  estimatedTime: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-2">
          <Badge variant={
            project.difficulty === "Beginner" ? "outline" : 
            project.difficulty === "Intermediate" ? "secondary" : 
            "default"
          }>
            {project.difficulty}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-1 h-3 w-3" />
            {project.estimatedTime}
          </div>
        </div>
        <CardTitle className="text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-foreground/80">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-1 mt-4">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-background/50 text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button variant="ghost" className="w-full justify-between">
          View Project Details
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
