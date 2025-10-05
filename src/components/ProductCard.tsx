import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  image: string;
  colors?: string[];
  sizes?: string[];
  category: string;
}

const ProductCard = ({ name, image, colors, sizes, category }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="aspect-square overflow-hidden bg-muted/30">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-4">
        <Badge variant="secondary" className="mb-2 text-xs">
          {category}
        </Badge>
        <h3 className="font-semibold text-base mb-3 line-clamp-2">{name}</h3>
        
        {colors && colors.length > 0 && (
          <div className="mb-2">
            <p className="text-xs text-muted-foreground mb-1">Available Colors:</p>
            <div className="flex gap-1">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="w-5 h-5 rounded-full border-2 border-border"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
        )}
        
        {sizes && sizes.length > 0 && (
          <div>
            <p className="text-xs text-muted-foreground">Sizes: {sizes.join(", ")}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
