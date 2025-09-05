import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "Chi Siamo" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contatti" },
    { href: "/faq", label: "FAQ" }
  ];

  const categories = [
    { href: "/shop?category=sport", label: "Sport" },
    { href: "/shop?category=benessere", label: "Benessere" },
    { href: "/shop?category=perdita-peso", label: "Perdita Peso" },
    { href: "/shop?category=energia", label: "Energia" },
    { href: "/shop?category=immune", label: "Sistema Immunitario" },
    { href: "/shop?category=antieta", label: "Anti-età" }
  ];

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Termini e Condizioni" },
    { href: "/shipping", label: "Spedizioni e Resi" },
    { href: "/warranty", label: "Garanzia Qualità" }
  ];

  return (
    <footer className="bg-wellness text-wellness-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-wellness-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Rimani Aggiornato con Suppy
            </h3>
            <p className="text-wellness-foreground/80 mb-8">
              Iscriviti alla nostra newsletter e ricevi il <strong>10% di sconto</strong> sul tuo primo ordine, 
              oltre a consigli esclusivi su benessere e nuove uscite!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="La tua email"
                className="flex-1 bg-wellness-foreground/10 border-wellness-foreground/20 text-wellness-foreground placeholder:text-wellness-foreground/60"
              />
              <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
                <Mail className="w-4 h-4 mr-2" />
                Iscriviti
              </Button>
            </div>
            <p className="text-xs text-wellness-foreground/60 mt-4">
              Rispettiamo la tua privacy. Niente spam, solo contenuti di valore.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">Suppy</span>
            </div>
            <p className="text-wellness-foreground/80 mb-6 leading-relaxed">
              Il tuo partner per un benessere completo. Integratori di qualità premium 
              per supportare ogni aspetto della tua salute e performance.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Milano, Italia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+39 02 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">info@suppy.it</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Link Rapidi</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-wellness-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Categorie</h4>
            <nav className="space-y-3">
              {categories.map((category) => (
                <Link
                  key={category.href}
                  to={category.href}
                  className="block text-wellness-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  {category.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Supporto & Legal</h4>
            <nav className="space-y-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-wellness-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-wellness-foreground/10">
              <p className="text-sm text-wellness-foreground/80 mb-4">Orari di apertura:</p>
              <p className="text-sm text-wellness-foreground/60">
                Lun - Ven: 9:00 - 18:00<br />
                Sab: 10:00 - 16:00<br />
                Dom: Chiuso
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-wellness-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-wellness-foreground/60 mb-4 md:mb-0">
              © 2024 Suppy. Tutti i diritti riservati. P.IVA 12345678901
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-wellness-foreground/80 mr-2">Seguici:</span>
              <a 
                href="#" 
                className="w-8 h-8 bg-wellness-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-wellness-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-wellness-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-wellness-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;