import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marco Rossi",
      role: "Atleta Professionista",
      avatar: "MR",
      rating: 5,
      content: "Suppy ha trasformato il mio approccio agli integratori. La qualità è incredibile e i risultati si vedono subito. Il recovery post-allenamento è migliorato drasticamente!",
      verified: true
    },
    {
      id: 2,
      name: "Giulia Ferrari",
      role: "Nutrizionista",
      avatar: "GF",
      rating: 5,
      content: "Consiglio Suppy ai miei clienti da oltre un anno. Gli ingredienti sono di prima qualità e le formulazioni sono scientificamente accurate. Risultati eccellenti!",
      verified: true
    },
    {
      id: 3,
      name: "Luca Bianchi",
      role: "Manager & Padre",
      avatar: "LB",
      rating: 5,
      content: "Con i ritmi frenetici di lavoro e famiglia, gli integratori Suppy mi danno l'energia che serve ogni giorno. Servizio clienti fantastico e spedizioni velocissime.",
      verified: true
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cosa Dicono i Nostri Clienti
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Migliaia di persone hanno già trasformato il loro benessere con Suppy. 
            Ecco cosa raccontano della loro esperienza
          </p>
          <div className="flex items-center justify-center mt-8 space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">da oltre 5,000 recensioni</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <Quote className="w-8 h-8 text-primary/20" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <blockquote className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={`/api/placeholder/48/48`} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      {testimonial.verified && (
                        <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-primary-foreground text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15,000+</div>
              <div className="text-sm text-muted-foreground">Clienti Soddisfatti</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Valutazione Media</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Ingredienti Naturali</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">48h</div>
              <div className="text-sm text-muted-foreground">Spedizione Veloce</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;