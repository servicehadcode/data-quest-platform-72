
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, Users } from "lucide-react";

export interface CompetitionCardProps {
  id: string;
  title: string;
  description: string;
  prize: string;
  teams: number;
  deadline: string;
  daysLeft: number;
  category: string;
  image: string;
  featured?: boolean;
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({
  title,
  description,
  prize,
  teams,
  deadline,
  daysLeft,
  category,
  image,
  featured = false,
}) => {
  // Calculate percentage of time remaining if daysLeft is provided
  const timePercentage = daysLeft > 0 ? Math.min(100, Math.max(0, daysLeft / 60 * 100)) : null;

  return (
    <Card className={`overflow-hidden flex flex-col h-full transition-all hover:shadow-md ${featured ? 'ring-2 ring-primary/20' : ''}`}>
      <div className="relative h-40 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        {featured && (
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
            Featured
          </Badge>
        )}
        {category && (
          <Badge className="absolute bottom-2 left-2 bg-black/60 text-white hover:bg-black/70">
            {category}
          </Badge>
        )}
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-lg font-medium leading-tight">{title}</h3>
      </CardHeader>
      <CardContent className="py-0 flex-1">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        
        {prize && (
          <div className="mt-3 px-3 py-1.5 bg-secondary/60 rounded-md font-medium text-sm inline-block">
            {prize}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex-col items-start border-t p-4 gap-3">
        <div className="flex justify-between w-full items-center text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{teams} teams</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{deadline}</span>
          </div>
        </div>
        
        {daysLeft > 0 && timePercentage !== null && (
          <div className="w-full">
            <Progress value={timePercentage} className="h-1.5" />
            <p className="text-xs text-muted-foreground mt-1">{daysLeft} days left</p>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default CompetitionCard;
