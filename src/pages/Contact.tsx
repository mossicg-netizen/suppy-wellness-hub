import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, HeadphonesIcon, ShoppingCart } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Telefono",
      description: "Parla direttamente con il nostro team",
      contact: "+39 02 1234 5678",
      availability: "Lun-Ven 9:00-18:00"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Scrivici per qualsiasi domanda",
      contact: "info@suppy.it",
      availability: "Risposta entro 24h"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Assistenza immediata online",
      contact: "Chat disponibile",
      availability: "Lun-Ven 9:00-18:00"
    }
  ];

  const officeHours = [
    { day: "Lunedì - Venerdì", hours: "9:00 - 18:00" },
    { day: "Sabato", hours: "10:00 - 16:00" },
    { day: "Domenica", hours: "Chiuso" }
  ];

  const departments = [
    "Informazioni Generali",
    "Supporto Prodotti",
    "Ordini e Spedizioni",
    "Resi e Rimborsi",
    "Partnership e Collaborazioni",
    "Altro"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-wellness">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Contattaci
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Il nostro team di esperti è qui per aiutarti. Che tu abbia domande sui prodotti, 
              sugli ordini o voglia semplicemente consigli personalizzati, siamo a tua disposizione.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <method.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {method.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-primary font-semibold">
                        {method.contact}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {method.availability}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-gradient-wellness">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                    <Mail className="w-6 h-6 mr-3 text-primary" />
                    Invia un Messaggio
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Compila il form sottostante e ti risponderemo il prima possibile
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Nome *</Label>
                      <Input id="firstName" placeholder="Il tuo nome" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Cognome *</Label>
                      <Input id="lastName" placeholder="Il tuo cognome" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="la-tua-email@esempio.com" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Telefono (opzionale)</Label>
                    <Input id="phone" type="tel" placeholder="+39 123 456 7890" />
                  </div>
                  
                  <div>
                    <Label htmlFor="department">Argomento *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleziona l'argomento" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept.toLowerCase().replace(/\s+/g, '-')}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="orderNumber">Numero Ordine (se applicabile)</Label>
                    <Input id="orderNumber" placeholder="es. SP-2024-001234" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Messaggio *</Label>
                    <Textarea
                      id="message"
                      placeholder="Descrivi la tua richiesta nel dettaglio..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-primary hover:opacity-90 text-lg py-6">
                    Invia Messaggio
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    I tuoi dati sono protetti e verranno utilizzati solo per rispondere alla tua richiesta. 
                    Consulta la nostra <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                  </p>
                </CardContent>
              </Card>

              {/* Company Info */}
              <div className="space-y-8">
                {/* Office Hours */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-primary" />
                      Orari di Apertura
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {officeHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                          <span className="font-medium text-foreground">{schedule.day}</span>
                          <span className="text-muted-foreground">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground flex items-center">
                      <HeadphonesIcon className="w-5 h-5 mr-3 text-primary" />
                      Hai Fretta?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-natural rounded-lg">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Chiamaci Ora</p>
                        <p className="text-sm text-muted-foreground">Assistenza immediata disponibile</p>
                        <p className="text-primary font-semibold">+39 02 1234 5678</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 bg-natural rounded-lg">
                      <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Live Chat</p>
                        <p className="text-sm text-muted-foreground">Chatta con il nostro supporto</p>
                        <Button size="sm" className="mt-2 bg-gradient-primary hover:opacity-90">
                          Inizia Chat
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Address */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground flex items-center">
                      <MapPin className="w-5 h-5 mr-3 text-primary" />
                      I Nostri Uffici
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-foreground mb-2">Sede Principale</p>
                        <p className="text-muted-foreground">
                          Via della Salute, 123<br />
                          20121 Milano (MI)<br />
                          Italia
                        </p>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                          <strong>P.IVA:</strong> 12345678901<br />
                          <strong>Email:</strong> info@suppy.it<br />
                          <strong>PEC:</strong> suppy@pec.suppy.it
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Forse Trovi Quello che Cerchi Qui
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Prima di contattarci, dai un'occhiata alle nostre domande frequenti. 
              Potresti trovare immediatamente la risposta che stai cercando.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <ShoppingCart className="mr-2 h-5 w-5" />
                FAQ Ordini e Spedizioni
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <HeadphonesIcon className="mr-2 h-5 w-5" />
                FAQ Prodotti
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;