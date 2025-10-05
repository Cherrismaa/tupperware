import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample product data - in real app, this would come from API or props
  const products = [
    {
      id: 1,
      name: "FreezerMate Medium Container",
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=400&fit=crop",
      colors: ["#E91E63", "#FFFFFF", "#000000"],
      sizes: ["500ml", "1L", "2L"],
      category: "Food Storage",
    },
    {
      id: 2,
      name: "Modular Mates Square Set",
      image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=400&h=400&fit=crop",
      colors: ["#FFFFFF", "#E91E63"],
      sizes: ["1L", "2L", "3L"],
      category: "Food Storage",
    },
    {
      id: 3,
      name: "Smart Multi Chef",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      colors: ["#E91E63", "#FFFFFF"],
      sizes: ["One Size"],
      category: "Kitchenware",
    },
    {
      id: 4,
      name: "Quick Shake Container",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=400&fit=crop",
      colors: ["#E91E63", "#4CAF50", "#2196F3"],
      sizes: ["500ml", "700ml"],
      category: "Lunch & Drinks",
    },
    {
      id: 5,
      name: "Crystal Wave Bowl",
      image: "https://images.unsplash.com/photo-1591983777554-59bde87fa4f5?w=400&h=400&fit=crop",
      colors: ["#FFFFFF"],
      sizes: ["400ml", "600ml", "900ml"],
      category: "Kitchenware",
    },
    {
      id: 6,
      name: "Serving Center Large",
      image: "https://images.unsplash.com/photo-1587899897387-091ebd01a6b2?w=400&h=400&fit=crop",
      colors: ["#FFFFFF", "#E91E63"],
      sizes: ["2.5L", "4L"],
      category: "Serverware",
    },
    {
      id: 7,
      name: "Kids Lunch Box Set",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=400&fit=crop",
      colors: ["#E91E63", "#9C27B0", "#FFC107"],
      sizes: ["350ml"],
      category: "Kids Range",
    },
    {
      id: 8,
      name: "UltraPro Square Pan",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      colors: ["#000000"],
      sizes: ["2L", "3L"],
      category: "Bakeware",
    },
    {
      id: 9,
      name: "Eco Water Bottle",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
      colors: ["#E91E63", "#4CAF50", "#2196F3", "#FFC107"],
      sizes: ["500ml", "750ml", "1L"],
      category: "Lunch & Drinks",
    },
  ];

  const categories = [
    "All Categories",
    "Food Storage",
    "Kitchenware",
    "Serverware",
    "Lunch & Drinks",
    "Kids Range",
    "Bakeware",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || 
      product.category === categories[parseInt(selectedCategory)];
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient-pink">Products</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our complete catalog of premium food storage and kitchenware solutions
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 animate-slide-up">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[250px]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent className="bg-popover">
              {categories.map((category, index) => (
                <SelectItem key={index} value={index === 0 ? "all" : index.toString()}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-scale-in">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No products found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
