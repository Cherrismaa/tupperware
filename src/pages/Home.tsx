import { Container, Package, Utensils, Coffee, Baby, ChefHat } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const categories = [
    {
      title: "Food Storage",
      description: "Dry, freezer, and fridge storage solutions",
      icon: <Container className="h-8 w-8" />,
      link: "/products?category=food-storage",
      image: "../assets/dry-storage.jpeg",
    },
    {
      title: "Kitchenware",
      description: "Food prep, microwave, and premium tools",
      icon: <Utensils className="h-8 w-8" />,
      link: "/products?category=kitchenware",
    },
    {
      title: "Serverware",
      description: "Elegant serving dishes and bowls",
      icon: <ChefHat className="h-8 w-8" />,
      link: "/products?category=serverware",
    },
    {
      title: "Lunch & Drinks",
      description: "Lunch boxes and drink bottles",
      icon: <Coffee className="h-8 w-8" />,
      link: "/products?category=lunch-drinks",
    },
    {
      title: "Kids Range",
      description: "Fun and safe products for children",
      icon: <Baby className="h-8 w-8" />,
      link: "/products?category=kids",
    },
    {
      title: "Bakeware",
      description: "Premium baking essentials",
      icon: <Package className="h-8 w-8" />,
      link: "/products?category=bakeware",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Our <span className="text-gradient-pink">Collections</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover premium quality products designed to make your life easier and more organized
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
            {categories.map((category, index) => (
              <div key={category.title} style={{ animationDelay: `${index * 100}ms` }}>
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-gradient-pink">Tupperware</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For decades, Tupperware has been synonymous with quality, innovation, and sustainability. 
              Our products are designed to keep your food fresh longer, reduce waste, and make your 
              kitchen more organized. Every product is backed by our lifetime warranty, ensuring you 
              invest in quality that lasts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Learn More About Us
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lifetime Warranty</h3>
              <p className="text-muted-foreground">
                Quality you can trust with our comprehensive warranty
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Recyclable</h3>
              <p className="text-muted-foreground">
                Eco-friendly materials that protect our planet
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">BPA Free & Safe</h3>
              <p className="text-muted-foreground">
                Food-grade materials safe for the whole family
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
