import productStorage from '@/assets/product-storage-set.jpg';
import productBottles from '@/assets/product-bottles.jpg';
import productUtensils from '@/assets/product-utensils.jpg';
import { ShoppingCart, Eye } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Storage Set',
      price: '₹2,999',
      image: productStorage,
      description: 'Complete food storage solution with airtight seals',
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Eco Water Bottles',
      price: '₹1,499',
      image: productBottles,
      description: 'BPA-free bottles in beautiful pastel colors',
      badge: 'New'
    },
    {
      id: 3,
      name: 'Kitchen Utensil Set',
      price: '₹1,799',
      image: productUtensils,
      description: 'Essential tools for your modern kitchen',
      badge: 'Popular'
    }
  ];

  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section-title">
            Featured <span className="text-primary">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Discover our most popular products, carefully selected for their quality, 
            design, and functionality to enhance your kitchen experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card-premium group">
              <div className="relative overflow-hidden rounded-xl mb-6">
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-heading text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {product.description}
                  </p>
                  <div className="text-2xl font-bold text-primary">
                    {product.price}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button className="flex-1 btn-hero flex items-center justify-center gap-2 py-3">
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                  <button className="btn-secondary px-4 py-3 flex items-center justify-center">
                    <Eye size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;