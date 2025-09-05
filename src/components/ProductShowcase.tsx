import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight } from "lucide-react";
import productsImage from "@/assets/products-showcase.jpg";

const ProductShowcase = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Whey Protein Premium",
      category: "Sport",
      price: "€45,99",
      originalPrice: "€52,99",
      rating: 4.8,
      reviews: 1247,
      description: "Proteine del siero del latte isolate di alta qualità",
      badge: "Bestseller",
      badgeColor: "bg-primary"
    },
    {
      id: 2,
      name: "Multivitamin Complete",
      category: "Benessere",
      price: "€29,99",
      originalPrice: null,
      rating: 4.9,
      reviews: 892,
      description: "Complesso vitaminico completo per il benessere quotidiano",
      badge: "Nuovo",
      badgeColor: "bg-wellness"
    },
    {
      id: 3,
      name: "Omega-3 Ultra Pure",
      category: "Salute",
      price: "€35,99",
      originalPrice: "€39,99",
      rating: 4.7,
      reviews: 634,
      description: "Acidi grassi essenziali per cuore e cervello",
      badge: "Offerta",
      badgeColor: "bg-destructive"
    }
  ];

  return (
    <section className="py-24 bg-gradient-wellness">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Prodotti in Evidenza
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I nostri integratori più amati, scelti da migliaia di clienti soddisfatti 
            per la loro qualità e efficacia comprovata
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-wellness transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={productsImage} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-4 left-4 ${product.badgeColor} text-white`}>
                    {product.badge}
                  </Badge>
                  {product.originalPrice && (
                    <div className="absolute top-4 right-4 bg-background/90 text-foreground px-2 py-1 rounded text-sm font-medium">
                      Risparmia €{(parseFloat(product.originalPrice.slice(1)) - parseFloat(product.price.slice(1))).toFixed(2)}
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="bg-gradient-primary hover:opacity-90 transition-opacity"
                    >
                      Aggiungi al Carrello
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto"
          >
            Vedi Tutti i Prodotti
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;