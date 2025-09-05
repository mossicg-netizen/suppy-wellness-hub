import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-wellness">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="text-8xl font-bold text-primary mb-4">404</div>
          <h1 className="text-3xl font-bold text-foreground mb-4">Pagina Non Trovata</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Oops! La pagina che stai cercando non esiste o è stata spostata.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link to="/">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 w-full">
              <Home className="mr-2 h-5 w-5" />
              Torna alla Home
            </Button>
          </Link>
          
          <Link to="/shop">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full">
              <Search className="mr-2 h-5 w-5" />
              Esplora i Prodotti
            </Button>
          </Link>
          
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="text-muted-foreground hover:text-foreground w-full"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Torna Indietro
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
