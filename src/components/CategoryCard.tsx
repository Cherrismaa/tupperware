//src\components\CategoryCard.tsx

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  image?: string;
}

const CategoryCard = ({ title, description, icon, link, image}: CategoryCardProps) => {
  return (

    <Link to={link}>
      <Card className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border/50 h-full">

       {/* Background image */}
        {image && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-90 transition-all"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}

        <CardContent className="relative p-6 z-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth group-hover:scale-110">
              {icon}
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
            <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
              <span>Explore</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
