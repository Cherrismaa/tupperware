import { Shield, Recycle, Heart, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "BPA Free & Safe",
      description: "All our products are made from food-grade materials that are completely safe for you and your family.",
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "100% Recyclable",
      description: "We're committed to sustainability. Every product is designed to be fully recyclable and eco-friendly.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Lifetime Warranty",
      description: "We stand behind our quality with a comprehensive lifetime warranty on all products.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Trusted by Millions",
      description: "For over 75 years, families worldwide have trusted Tupperware for their food storage needs.",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient-pink">Tupperware India</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since 1946, Tupperware has been revolutionizing how people store, serve, and prepare food. 
            Our innovative products combine functionality with style, making kitchen organization effortless and enjoyable.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-slide-up">
          <Card className="shadow-medium">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Tupperware was founded by Earl Tupper, who introduced a revolutionary new material to the 
                  market—durable, lightweight, and airtight plastic containers. His innovation transformed 
                  food storage and sparked a global phenomenon.
                </p>
                <p>
                  In India, Tupperware has become synonymous with quality and reliability. Our products are 
                  designed to meet the unique needs of Indian households, from storing spices and lentils to 
                  preserving leftovers and preparing meals.
                </p>
                <p>
                  Located in Hyderabad, our store serves customers across the region with the full range of 
                  Tupperware products. We're committed to providing exceptional quality and customer service 
                  that reflects the values our brand was built on.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="text-gradient-pink">Tupperware</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-scale-in">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-medium hover:shadow-large transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Materials Section */}
        <div className="max-w-4xl mx-auto animate-fade-in">
          <Card className="shadow-medium bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Premium Quality Materials</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Every Tupperware product is crafted from the highest quality food-grade plastic. Our materials 
                  are carefully selected to ensure they're:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>BPA-free and completely safe for food contact</li>
                  <li>Resistant to stains and odors</li>
                  <li>Microwave, dishwasher, and freezer safe (specific products)</li>
                  <li>Durable enough to last for generations</li>
                  <li>100% recyclable at end of life</li>
                </ul>
                <p>
                  Our commitment to quality means you can trust Tupperware products to keep your food fresh, 
                  safe, and delicious for longer—all while reducing food waste and protecting the environment.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
