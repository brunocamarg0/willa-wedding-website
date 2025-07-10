import { Heart, Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <Heart className="h-8 w-8 text-primary fill-primary" />
                <div>
                  <h3 className="font-serif text-2xl font-bold">Willa Cerimoniais</h3>
                  <p className="text-sm text-background/70">Cerimonialista de Casamentos</p>
                </div>
              </div>
              <p className="text-background/80 text-sm leading-relaxed">
                Transformando sonhos em realidade há mais de 5 anos. 
                Cada casamento é uma história única e especial.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
              <nav className="space-y-2">
                <a href="#home" className="block text-background/80 hover:text-primary transition-colors text-sm">
                  Início
                </a>
                <a href="#about" className="block text-background/80 hover:text-primary transition-colors text-sm">
                  Sobre Mim
                </a>
                <a href="#services" className="block text-background/80 hover:text-primary transition-colors text-sm">
                  Serviços
                </a>
                <a href="#gallery" className="block text-background/80 hover:text-primary transition-colors text-sm">
                  Galeria
                </a>
                <a href="#testimonials" className="block text-background/80 hover:text-primary transition-colors text-sm">
                  Depoimentos
                </a>
                <a href="#contact" className="block text-background/80 hover:text-primary transition-colors text-sm">
                  Contato
                </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold text-lg mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-end space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-background/80 text-sm">(11) 99999-9999</span>
                </div>
                <div className="flex items-center justify-center md:justify-end space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-background/80 text-sm">contato@willacerimoniais.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-end space-x-2">
                  <Instagram className="h-4 w-4 text-primary" />
                  <span className="text-background/80 text-sm">@willacerimoniais</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-background/60 text-sm text-center md:text-left">
                © 2024 Willa Cerimoniais. Todos os direitos reservados.
              </p>
              
              <div className="flex items-center space-x-4">
                <span className="text-background/60 text-sm">Siga-me:</span>
                <a 
                  href="https://instagram.com/willacerimoniais" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;