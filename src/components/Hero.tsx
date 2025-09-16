import heroImage from '@/assets/hero-tupperware.jpg';

const Hero = () => {
  return (
    <section id="home" className="py-16 md:py-24 bg-gradient-to-br from-background via-secondary/20 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-hero">
                Designed for life.{' '}
                <span className="text-primary">Kept for generations.</span>
              </h1>
              <p className="text-subtitle max-w-lg">
                Experience premium Tupperware products crafted with precision. 
                Durable, elegant, and eco-friendly solutions for your modern kitchen.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-hero">
                Shop Now
              </button>
              <button className="btn-secondary">
                Contact Us
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">75+</div>
                <div className="text-sm text-muted-foreground">Years Legacy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Eco-Friendly</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Premium Tupperware products showcasing elegant food storage containers"
                className="w-full h-auto rounded-3xl shadow-xl"
                loading="eager"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;