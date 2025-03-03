
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Award, Users, Clock } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export interface CompetitionCardProps {
  id: string;
  title: string;
  description: string;
  prize: string;
  teams: number;
  deadline: string;
  daysLeft: number;
  category: string;
  image?: string;
  featured?: boolean;
}

const CompetitionCard = ({
  id,
  title,
  description,
  prize,
  teams,
  deadline,
  daysLeft,
  category,
  image,
  featured = false,
}: CompetitionCardProps) => {
  const progressValue = Math.max(0, Math.min(100, (daysLeft / 30) * 100));
  const progressColor = daysLeft <= 7 ? "bg-destructive" : daysLeft <= 14 ? "bg-amber-500" : "bg-primary";

  return (
    <Link to={`/competitions/${id}`}>
      <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${featured ? 'ring-1 ring-primary/50' : ''}`}>
        {image && (
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {featured && (
              <Badge className="absolute top-3 right-3" variant="default">
                Featured
              </Badge>
            )}
          </div>
        )}
        <CardHeader className="p-4 pb-0">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="text-xs font-normal">
              {category}
            </Badge>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="mr-1 h-3 w-3" />
              {deadline}
            </div>
          </div>
          <h3 className="text-xl font-semibold line-clamp-2">{title}</h3>
        </CardHeader>
        <CardContent className="p-4 pt-2">
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {description}
          </p>
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-muted-foreground">Time remaining</span>
            <span className="font-medium flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              {daysLeft} days
            </span>
          </div>
          <Progress 
            value={progressValue} 
            className="h-1.5 mb-4" 
            indicatorClassName={progressColor} 
          />
        </CardContent>
        <CardFooter className="p-4 pt-0 grid grid-cols-2 gap-2">
          <div className="flex items-center">
            <Award className="h-4 w-4 text-amber-500 mr-2" />
            <span className="text-sm font-medium">{prize}</span>
          </div>
          <div className="flex items-center justify-end">
            <Users className="h-4 w-4 text-muted-foreground mr-2" />
            <span className="text-sm text-muted-foreground">{teams} teams</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CompetitionCard;
