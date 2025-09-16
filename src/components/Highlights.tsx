import { Shield, Palette, Leaf } from 'lucide-react';

const Highlights = () => {
  const features = [
    {
      icon: Shield,
      title: 'Durability',
      description: 'Built to last a lifetime with premium materials and innovative design that withstands daily use.'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Modern, elegant products that fit perfectly in every kitchen while maintaining timeless appeal.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Eco-friendly, reusable solutions made from safe materials that protect both your family and environment.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section-title">
            Why Choose <span className="text-primary">Tupperware</span>?
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Trusted by millions worldwide for over 75 years, Tupperware continues to innovate 
            with premium kitchen solutions that make your life better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="card-premium text-center group hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;