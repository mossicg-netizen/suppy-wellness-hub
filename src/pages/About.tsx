import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, Award, Users, Leaf, CheckCircle, Target } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Marco Santini",
      role: "Fondatore & CEO",
      bio: "Ex-atleta professionista con 15 anni di esperienza nel settore degli integratori",
      avatar: "MS"
    },
    {
      name: "Dr.ssa Elena Rossi",
      role: "Direttore Scientifico",
      bio: "Nutrizionista e ricercatrice specializzata in supplementazione sportiva",
      avatar: "ER"
    },
    {
      name: "Luca Ferrari",
      role: "Head of Quality",
      bio: "Esperto in controllo qualità con certificazioni internazionali",
      avatar: "LF"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passione per il Benessere",
      description: "Crediamo che ogni persona meriti di sentirsi al meglio della propria forma fisica e mentale"
    },
    {
      icon: Award,
      title: "Qualità Senza Compromessi",
      description: "Utilizziamo solo ingredienti premium certificati e processi produttivi all'avanguardia"
    },
    {
      icon: Leaf,
      title: "Naturale e Sostenibile",
      description: "Rispettiamo l'ambiente con ingredienti naturali e packaging eco-friendly"
    },
    {
      icon: Users,
      title: "Community First",
      description: "La nostra community è al centro di tutto quello che facciamo"
    }
  ];

  const certifications = [
    "ISO 22000 - Sicurezza Alimentare",
    "GMP - Good Manufacturing Practice",
    "HACCP - Hazard Analysis",
    "Biologico Certificato",
    "Vegan Society Approved",
    "Made in Italy"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-wellness">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Chi Siamo: La Nostra Storia
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Nata dalla passione per il benessere e l'innovazione, Suppy è il risultato di anni di ricerca 
              e dedizione nel settore degli integratori alimentari di qualità premium.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-6 bg-primary text-primary-foreground">La Nostra Missione</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Dalla Passione per lo Sport alla Creazione di Suppy
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Tutto è iniziato nel 2018, quando Marco Santini, ex-atleta professionista di ciclismo, 
                    ha iniziato a cercare integratori che potessero davvero fare la differenza nelle sue performance 
                    senza compromettere la sua salute a lungo termine.
                  </p>
                  <p>
                    Frustrato dalla qualità spesso mediocre dei prodotti disponibili sul mercato, ha deciso di 
                    creare qualcosa di diverso: integratori formulati con ingredienti premium, trasparenza totale 
                    e un approccio scientifico rigoroso.
                  </p>
                  <p>
                    Oggi, Suppy è cresciuta fino a diventare un punto di riferimento per atleti, professionisti 
                    e chiunque voglia prendersi cura del proprio benessere con prodotti di qualità superiore.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
                      <div className="text-sm text-muted-foreground">Clienti Soddisfatti</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Prodotti Premium</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">6</div>
                      <div className="text-sm text-muted-foreground">Anni di Esperienza</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">100%</div>
                      <div className="text-sm text-muted-foreground">Made in Italy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 bg-gradient-wellness">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-wellness text-wellness-foreground">I Nostri Valori</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ciò in cui Crediamo
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                I nostri valori guidano ogni decisione che prendiamo, dalla selezione degli ingredienti 
                al servizio clienti che offriamo ogni giorno.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-primary text-primary-foreground">Il Nostro Team</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Le Persone Dietro Suppy
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Un team di esperti appassionati, uniti dalla missione comune di portare 
                il benessere di qualità nella vita di ogni persona.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <Avatar className="w-24 h-24 mx-auto mb-6">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quality & Certifications */}
        <section className="py-24 bg-gradient-wellness">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-6 bg-wellness text-wellness-foreground">Qualità & Certificazioni</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Il Nostro Impegno per la Qualità
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  La qualità non è negoziabile per noi. Ogni prodotto Suppy passa attraverso rigorosi 
                  controlli di qualità e rispetta i più alti standard internazionali di sicurezza e efficacia.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Target className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Ricerca Scientifica</h4>
                      <p className="text-muted-foreground text-sm">
                        Collaboriamo con università e laboratori di ricerca per sviluppare formule innovative
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Test di Terze Parti</h4>
                      <p className="text-muted-foreground text-sm">
                        Ogni lotto viene testato da laboratori indipendenti per purezza e potenza
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Leaf className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Sostenibilità</h4>
                      <p className="text-muted-foreground text-sm">
                        Packaging eco-friendly e filiera sostenibile per rispettare l'ambiente
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                      Le Nostre Certificazioni
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {certifications.map((cert, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-natural">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground font-medium">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;