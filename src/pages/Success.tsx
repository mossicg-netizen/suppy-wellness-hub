import { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ShoppingBag, Home } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear the cart after successful payment
    if (sessionId) {
      clearCart();
    }
  }, [sessionId, clearCart]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-primary" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">
                Ordine Completato con Successo!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Grazie per il tuo acquisto su Suppy! Il tuo ordine è stato processato con successo.
                </p>
                
                {sessionId && (
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      ID Sessione di Pagamento:
                    </p>
                    <p className="font-mono text-xs break-all">
                      {sessionId}
                    </p>
                  </div>
                )}

                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Cosa succede ora?</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 text-left max-w-md mx-auto">
                    <li>• Riceverai una email di conferma</li>
                    <li>• I tuoi prodotti verranno preparati per la spedizione</li>
                    <li>• Riceverai il codice di tracking quando l'ordine viene spedito</li>
                    <li>• Puoi seguire lo stato del tuo ordine nel tuo account</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gradient-primary hover:opacity-90">
                  <Link to="/account">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Visualizza Ordini
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" />
                    Torna alla Home
                  </Link>
                </Button>
              </div>

              <div className="pt-6 border-t">
                <p className="text-sm text-muted-foreground">
                  Hai domande sul tuo ordine?{" "}
                  <Link to="/contact" className="text-primary hover:underline">
                    Contattaci
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Success;