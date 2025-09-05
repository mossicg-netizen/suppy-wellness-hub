import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Persona in forma che tiene integratori Suppy" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-foreground/20 border border-primary-foreground/30 text-primary-foreground text-sm font-medium mb-8">
            <Shield className="w-4 h-4 mr-2" />
            100% Naturale · Certificato · Made in Italy
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Benvenuti su{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary-foreground bg-clip-text text-transparent">
              Suppy
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Integratori di Qualità per il Tuo Benessere
          </p>
          
          {/* Description */}
          <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Scopri il meglio per il tuo corpo e la tua mente. Supplementi naturali per ogni esigenza,
            formulati con ingredienti premium per risultati eccellenti.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-wellness hover:bg-primary-foreground/90 shadow-primary text-lg px-8 py-4 h-auto"
            >
              Acquista Ora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-4 h-auto"
            >
              Scopri i Nostri Prodotti
            </Button>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-primary-foreground/90">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Benessere Completo</h3>
              <p className="text-sm text-primary-foreground/70 text-center">
                Formule studiate per supportare ogni aspetto della tua salute
              </p>
            </div>
            
            <div className="flex flex-col items-center text-primary-foreground/90">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Energia Naturale</h3>
              <p className="text-sm text-primary-foreground/70 text-center">
                Ingredienti premium per aumentare la tua vitalità quotidiana
              </p>
            </div>
            
            <div className="flex flex-col items-center text-primary-foreground/90">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Qualità Garantita</h3>
              <p className="text-sm text-primary-foreground/70 text-center">
                Certificazioni di qualità e controlli rigorosi su ogni prodotto
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;