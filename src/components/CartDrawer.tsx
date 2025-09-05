import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2, ShoppingBag, CreditCard } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import productsImage from "@/assets/products-showcase.jpg";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { cartItems, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart();
  const { user } = useAuth();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const { toast } = useToast();

  const handleCheckout = async () => {
    if (!user) {
      toast({
        title: "Login richiesto",
        description: "Effettua il login per procedere al pagamento",
        variant: "destructive"
      });
      return;
    }

    if (cartItems.length === 0) {
      toast({
        title: "Carrello vuoto",
        description: "Aggiungi alcuni prodotti al carrello prima di procedere",
        variant: "destructive"
      });
      return;
    }

    setIsCheckingOut(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          items: cartItems.map(item => ({
            product_id: item.product_id,
            quantity: item.quantity,
            price: item.product.price
          }))
        }
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, '_blank');
        onClose();
      }
    } catch (error: any) {
      toast({
        title: "Errore nel pagamento",
        description: error.message || "Impossibile procedere al pagamento",
        variant: "destructive"
      });
    } finally {
      setIsCheckingOut(false);
    }
  };

  if (!user) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="right" className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              Carrello
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col items-center justify-center h-[50%] text-center">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Effettua il login</h3>
            <p className="text-muted-foreground mb-4">
              Accedi per visualizzare i tuoi prodotti nel carrello
            </p>
            <Button className="bg-gradient-primary hover:opacity-90">
              Accedi
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[400px] sm:w-[540px] flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Carrello
            {totalItems > 0 && (
              <Badge variant="secondary" className="ml-2">
                {totalItems}
              </Badge>
            )}
          </SheetTitle>
          <SheetDescription>
            Gestisci i prodotti nel tuo carrello
          </SheetDescription>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 text-center">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Il tuo carrello è vuoto</h3>
            <p className="text-muted-foreground mb-4">
              Aggiungi alcuni prodotti per iniziare lo shopping
            </p>
            <Button 
              onClick={onClose} 
              className="bg-gradient-primary hover:opacity-90"
            >
              Continua lo Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-4 py-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <img
                    src={item.product.image_url || productsImage}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate">{item.product.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      €{item.product.price.toFixed(2)}
                    </p>
                    {!item.product.in_stock && (
                      <Badge variant="destructive" className="text-xs mt-1">
                        Esaurito
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="w-8 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      disabled={!item.product.in_stock}
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Totale:</span>
                <span>€{totalPrice.toFixed(2)}</span>
              </div>
              <Button
                onClick={handleCheckout}
                disabled={isCheckingOut || cartItems.some(item => !item.product.in_stock)}
                className="w-full bg-gradient-primary hover:opacity-90"
                size="lg"
              >
                {isCheckingOut ? (
                  "Reindirizzamento in corso..."
                ) : (
                  <>
                    <CreditCard className="w-4 h-4 mr-2" />
                    Procedi al Pagamento
                  </>
                )}
              </Button>
              {cartItems.some(item => !item.product.in_stock) && (
                <p className="text-sm text-destructive text-center">
                  Alcuni prodotti non sono disponibili
                </p>
              )}
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;