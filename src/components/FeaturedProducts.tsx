import React from 'react';
import chopper from '@/assets/chopper.jpeg';
import knife from '@/assets/knifes.jpeg';
import saver from '@/assets/saver.jpeg';
import spiceshakers from '@/assets/spice-shakers.jpeg';
import flask from '@/assets/steel-flask.jpeg';
import storer from '@/assets/super-storer.jpeg';
import tumbler from '@/assets/tumblers-bottles.jpeg';
import ricesmart from '@/assets/umami-ricesmart.jpeg';
import { ShoppingCart, Eye } from 'lucide-react';

type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
  badge?: string;
};

const FeaturedProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Chopper and Spoons',
      image: chopper,
      description: 'Handy Chopper and Spoons for your kitchen needs',
      badge: 'Bestseller',
    },
    {
      id: 2,
      name: 'Knife Set with Sharpener',
      image: knife,
      description: 'Premium Knives for precision cutting and slicing with sharpener',
      badge: 'New',
    },
    {
      id: 3,
      name: 'Dry Storage Set',
      image: saver,
      description: 'Compact and stackable containers for dry food and groceries storage',
      badge: 'Popular',
    },
    {
      id: 4,
      name: 'Spice Shakers and Oil Canisters',
      image: spiceshakers,
      description: 'Elegant spice shakers and oil canisters for your kitchen',
      badge: 'Popular',
    },
    {
      id: 5,
      name: 'Stainless Steel Insulated Flask',
      image: flask,
      description: 'Vacuum-insulated flask for keeping beverages hot or cold',
      badge: 'Popular',
    },
    {
      id: 6,
      name: 'Bottles and Tumblers',
      image: tumbler,
      description: 'BPA-free bottles in beautiful pastel colors',
      badge: 'Popular',
    },
    {
      id: 7,
      name: 'Air Tight Containers and Rice Storer',
      image: ricesmart,
      description: 'Complete food storage solution with airtight seals',
      badge: 'Popular',
    },
    {
      id: 8,
      name: 'Super Storer and Rice Keeper',
      image: storer,
      description: 'Keep your rice fresh and free from pests with our airtight rice keeper',
      badge: 'Popular',
    },
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
            <article key={product.id} className="card-premium group">
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
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-heading text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    className="flex-1 btn-hero flex items-center justify-center gap-2 py-3"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>

                  <button
                    type="button"
                    className="btn-secondary px-4 py-3 flex items-center justify-center"
                    aria-label={`View ${product.name}`}
                  >
                    <Eye size={18} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button type="button" className="btn-secondary">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
