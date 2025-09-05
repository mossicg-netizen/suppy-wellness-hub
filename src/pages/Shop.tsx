import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Star, Filter, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import productsImage from "@/assets/products-showcase.jpg";

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      name: "Whey Protein Premium",
      category: "Sport",
      price: 45.99,
      originalPrice: 52.99,
      rating: 4.8,
      reviews: 1247,
      description: "Proteine del siero del latte isolate di alta qualità per il recupero muscolare",
      inStock: true,
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Multivitamin Complete",
      category: "Benessere",
      price: 29.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 892,
      description: "Complesso vitaminico completo per il benessere quotidiano",
      inStock: true,
      badge: "Nuovo"
    },
    {
      id: 3,
      name: "Omega-3 Ultra Pure",
      category: "Salute",
      price: 35.99,
      originalPrice: 39.99,
      rating: 4.7,
      reviews: 634,
      description: "Acidi grassi essenziali per cuore e cervello",
      inStock: true,
      badge: "Offerta"
    },
    {
      id: 4,
      name: "BCAA Energy Boost",
      category: "Sport",
      price: 24.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 543,
      description: "Aminoacidi ramificati per energia durante l'allenamento",
      inStock: true,
      badge: null
    },
    {
      id: 5,
      name: "Collagene Anti-Age",
      category: "Bellezza",
      price: 39.99,
      originalPrice: 45.99,
      rating: 4.8,
      reviews: 412,
      description: "Collagene idrolizzato per pelle, capelli e articolazioni",
      inStock: false,
      badge: "Esaurito"
    },
    {
      id: 6,
      name: "Magnesio + Zinco",
      category: "Benessere",
      price: 19.99,
      originalPrice: null,
      rating: 4.5,
      reviews: 367,
      description: "Supporto per muscoli, sistema nervoso e sistema immunitario",
      inStock: true,
      badge: null
    }
  ];

  const categories = ["Tutti", "Sport", "Benessere", "Salute", "Bellezza", "Energia"];
  const objectives = ["Tutti", "Recupero", "Energia", "Perdita Peso", "Detox", "Anti-età"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trova gli Integratori che Ti Servono
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esplora la nostra gamma completa di integratori premium, formulati per ogni esigenza di benessere e performance
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Filtri</h3>
                </div>

                {/* Search */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-2 block">Cerca Prodotto</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Nome prodotto..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-3 block">Categoria</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleziona categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Objective Filter */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-3 block">Obiettivo</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleziona obiettivo" />
                    </SelectTrigger>
                    <SelectContent>
                      {objectives.map((objective) => (
                        <SelectItem key={objective} value={objective.toLowerCase()}>
                          {objective}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-3 block">Fascia di Prezzo</label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-1" />
                      <label htmlFor="price-1" className="text-sm">€0 - €25</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-2" />
                      <label htmlFor="price-2" className="text-sm">€25 - €50</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-3" />
                      <label htmlFor="price-3" className="text-sm">€50+</label>
                    </div>
                  </div>
                </div>

                {/* Special Features */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-3 block">Caratteristiche</label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="natural" />
                      <label htmlFor="natural" className="text-sm">100% Naturale</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="vegan" />
                      <label htmlFor="vegan" className="text-sm">Vegan</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="gluten-free" />
                      <label htmlFor="gluten-free" className="text-sm">Senza Glutine</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="sugar-free" />
                      <label htmlFor="sugar-free" className="text-sm">Senza Zucchero</label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Sort and Results */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <p className="text-muted-foreground mb-4 md:mb-0">
                Mostrando {products.length} prodotti
              </p>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Ordina per" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Più Popolari</SelectItem>
                  <SelectItem value="price-low">Prezzo: Basso → Alto</SelectItem>
                  <SelectItem value="price-high">Prezzo: Alto → Basso</SelectItem>
                  <SelectItem value="rating">Valutazione</SelectItem>
                  <SelectItem value="newest">Più Recenti</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    {/* Product Image */}
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={productsImage} 
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.badge && (
                        <Badge className={`absolute top-3 left-3 ${
                          product.badge === "Bestseller" ? "bg-primary" :
                          product.badge === "Nuovo" ? "bg-wellness" :
                          product.badge === "Offerta" ? "bg-destructive" :
                          "bg-muted"
                        } text-white`}>
                          {product.badge}
                        </Badge>
                      )}
                      {product.originalPrice && (
                        <div className="absolute top-3 right-3 bg-background/90 text-foreground px-2 py-1 rounded text-xs font-medium">
                          -€{(product.originalPrice - product.price).toFixed(2)}
                        </div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-primary text-primary" />
                          <span className="text-xs font-medium">{product.rating}</span>
                          <span className="text-xs text-muted-foreground">({product.reviews})</span>
                        </div>
                      </div>

                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      
                      <p className="text-muted-foreground mb-3 text-xs leading-relaxed">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-primary">€{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-xs text-muted-foreground line-through">
                              €{product.originalPrice}
                            </span>
                          )}
                        </div>
                        
                        <Button 
                          size="sm" 
                          className={`${product.inStock ? "bg-gradient-primary hover:opacity-90" : "bg-muted cursor-not-allowed"}`}
                          disabled={!product.inStock}
                        >
                          {product.inStock ? (
                            <>
                              <ShoppingCart className="w-3 h-3 mr-1" />
                              Aggiungi
                            </>
                          ) : (
                            "Esaurito"
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Carica Altri Prodotti
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;