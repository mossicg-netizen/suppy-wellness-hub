import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Come Scegliere le Proteine Giuste per i Tuoi Obiettivi",
      excerpt: "Guida completa alla scelta delle proteine in polvere: whey, caseina, vegetali. Scopri quale si adatta meglio alle tue esigenze di allenamento e recupero.",
      category: "Sport",
      author: "Dr.ssa Elena Rossi",
      date: "2024-01-15",
      readTime: "8 min",
      featured: true
    },
    {
      id: 2,
      title: "Integratori per il Sistema Immunitario: Cosa Funziona Davvero",
      excerpt: "Vitamina C, Zinco, Vitamina D: la scienza dietro gli integratori che supportano realmente le tue difese naturali.",
      category: "Benessere",
      author: "Marco Santini",
      date: "2024-01-12",
      readTime: "6 min",
      featured: false
    },
    {
      id: 3,
      title: "Omega-3: Perché Sono Essenziali per Cervello e Cuore",
      excerpt: "Tutto quello che devi sapere sugli acidi grassi Omega-3: benefici, dosaggio ottimale e come scegliere un integratore di qualità.",
      category: "Salute",
      author: "Dr.ssa Elena Rossi",
      date: "2024-01-10",
      readTime: "10 min",
      featured: true
    },
    {
      id: 4,
      title: "Recupero Post-Allenamento: La Strategia Completa",
      excerpt: "Nutrizione, supplementazione e riposo: la combinazione perfetta per massimizzare il recupero muscolare dopo l'allenamento intenso.",
      category: "Sport",
      author: "Luca Ferrari",
      date: "2024-01-08",
      readTime: "12 min",
      featured: false
    },
    {
      id: 5,
      title: "Collagene: Il Segreto per Pelle Giovane e Articolazioni Forti",
      excerpt: "Scopri come il collagene idrolizzato può migliorare l'elasticità della pelle e supportare la salute delle articolazioni.",
      category: "Bellezza",
      author: "Dr.ssa Elena Rossi",
      date: "2024-01-05",
      readTime: "7 min",
      featured: false
    },
    {
      id: 6,
      title: "Energia Naturale: Alternative Sane alla Caffeina",
      excerpt: "Esplora integratori naturali che possono aumentare la tua energia senza gli effetti collaterali della caffeina eccessiva.",
      category: "Energia",
      author: "Marco Santini",
      date: "2024-01-03",
      readTime: "5 min",
      featured: false
    }
  ];

  const categories = ["Tutti", "Sport", "Benessere", "Salute", "Bellezza", "Energia"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-wellness">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Il Blog di Suppy
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Consigli per un Benessere Ottimale: guide scientifiche, ricerche e strategie 
              per massimizzare la tua salute e performance
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Cerca articoli..."
                className="pl-10 h-12"
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Tutti" ? "default" : "outline"}
                  className={category === "Tutti" ? "bg-gradient-primary hover:opacity-90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Articoli in Evidenza</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {blogPosts.filter(post => post.featured).map((post) => (
                <Card key={post.id} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Featured Image Placeholder */}
                    <div className="h-64 bg-gradient-wellness relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        In Evidenza
                      </Badge>
                      <Badge className="absolute top-4 right-4 bg-wellness text-wellness-foreground">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('it-IT')}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      
                      <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Leggi Articolo
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* All Posts Grid */}
            <h2 className="text-3xl font-bold text-foreground mb-8">Tutti gli Articoli</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    {/* Article Image Placeholder */}
                    <div className="h-48 bg-gradient-card relative overflow-hidden">
                      <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {new Date(post.date).toLocaleDateString('it-IT')}
                        </span>
                        <Button size="sm" variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
                          Leggi
                          <ArrowRight className="ml-1 w-3 h-3" />
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
                Carica Altri Articoli
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-wellness">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Non Perdere i Nostri Aggiornamenti
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Iscriviti alla newsletter per ricevere i migliori consigli su benessere, 
              nutrizione e supplementazione direttamente nella tua casella email
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4 h-auto">
              Iscriviti alla Newsletter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;