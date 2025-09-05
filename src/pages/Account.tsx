import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Profile {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  city: string;
  postal_code: string;
  country: string;
}

interface Order {
  id: string;
  status: string;
  total_amount: number;
  currency: string;
  created_at: string;
  order_items: {
    quantity: number;
    price: number;
    product: {
      name: string;
    };
  }[];
}

const Account = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [loadingOrders, setLoadingOrders] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
      return;
    }
    
    if (user) {
      fetchProfile();
      fetchOrders();
    }
  }, [user, loading, navigate]);

  const fetchProfile = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoadingProfile(false);
    }
  };

  const fetchOrders = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          order_items (
            quantity,
            price,
            product:products (name)
          )
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoadingOrders(false);
    }
  };

  const updateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;

    const formData = new FormData(e.currentTarget);
    const profileData = {
      user_id: user.id,
      first_name: formData.get('firstName') as string,
      last_name: formData.get('lastName') as string,
      phone: formData.get('phone') as string,
      address: formData.get('address') as string,
      city: formData.get('city') as string,
      postal_code: formData.get('postalCode') as string,
      country: formData.get('country') as string,
    };

    try {
      const { error } = await supabase
        .from('profiles')
        .upsert(profileData);

      if (error) throw error;
      
      await fetchProfile();
      toast({
        title: "Profilo aggiornato",
        description: "Le tue informazioni sono state salvate con successo"
      });
    } catch (error: any) {
      toast({
        title: "Errore",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  if (loading || !user) {
    return null;
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary">In Attesa</Badge>;
      case 'processing':
        return <Badge className="bg-wellness">In Elaborazione</Badge>;
      case 'shipped':
        return <Badge className="bg-primary">Spedito</Badge>;
      case 'delivered':
        return <Badge className="bg-primary">Consegnato</Badge>;
      case 'cancelled':
        return <Badge variant="destructive">Annullato</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Il Mio Account
            </h1>
            <p className="text-muted-foreground">
              Gestisci il tuo profilo e visualizza i tuoi ordini
            </p>
          </div>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="profile">Profilo</TabsTrigger>
              <TabsTrigger value="orders">Ordini</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Informazioni Personali</CardTitle>
                  <CardDescription>
                    Aggiorna i tuoi dati personali e di contatto
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {loadingProfile ? (
                    <div className="space-y-4">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="h-10 bg-muted animate-pulse rounded"></div>
                      ))}
                    </div>
                  ) : (
                    <form onSubmit={updateProfile} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Nome</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            defaultValue={profile?.first_name || ''}
                            placeholder="Nome"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Cognome</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            defaultValue={profile?.last_name || ''}
                            placeholder="Cognome"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefono</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          defaultValue={profile?.phone || ''}
                          placeholder="+39 123 456 7890"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Indirizzo</Label>
                        <Input
                          id="address"
                          name="address"
                          defaultValue={profile?.address || ''}
                          placeholder="Via Roma 123"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">Città</Label>
                          <Input
                            id="city"
                            name="city"
                            defaultValue={profile?.city || ''}
                            placeholder="Milano"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="postalCode">CAP</Label>
                          <Input
                            id="postalCode"
                            name="postalCode"
                            defaultValue={profile?.postal_code || ''}
                            placeholder="20100"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Paese</Label>
                        <Input
                          id="country"
                          name="country"
                          defaultValue={profile?.country || 'Italia'}
                          placeholder="Italia"
                        />
                      </div>
                      <Button type="submit" className="bg-gradient-primary hover:opacity-90">
                        Salva Modifiche
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>I Tuoi Ordini</CardTitle>
                  <CardDescription>
                    Visualizza la cronologia dei tuoi ordini
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {loadingOrders ? (
                    <div className="space-y-4">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="h-20 bg-muted animate-pulse rounded"></div>
                      ))}
                    </div>
                  ) : orders.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground mb-4">
                        Non hai ancora effettuato ordini
                      </p>
                      <Button className="bg-gradient-primary hover:opacity-90" onClick={() => navigate('/shop')}>
                        Inizia a Fare Shopping
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <p className="font-medium">Ordine #{order.id.slice(0, 8)}</p>
                              <p className="text-sm text-muted-foreground">
                                {new Date(order.created_at).toLocaleDateString('it-IT')}
                              </p>
                            </div>
                            <div className="text-right">
                              {getStatusBadge(order.status)}
                              <p className="text-lg font-bold text-primary mt-1">
                                €{order.total_amount.toFixed(2)}
                              </p>
                            </div>
                          </div>
                          <div className="space-y-1">
                            {order.order_items.map((item, index) => (
                              <p key={index} className="text-sm text-muted-foreground">
                                {item.quantity}x {item.product.name} - €{item.price.toFixed(2)}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Account;