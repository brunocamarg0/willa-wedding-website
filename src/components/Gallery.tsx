import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Camera, Eye } from "lucide-react";

const Gallery = () => {
  // Placeholder gallery items
  const portfolioImages = [
    {
      src: "/portfolio/dog.jpg",
      alt: "Cachorro fofo vestido para casamento"
    },
    {
      src: "/portfolio/bouquet.jpg",
      alt: "Noiva jogando buquê para madrinhas"
    },
    {
      src: "/portfolio/hug.jpg",
      alt: "Abraço emocionante entre pai e filho no casamento"
    },
    {
      src: "/portfolio/flowerboy.jpg",
      alt: "Rapaz jogando pétalas no corredor do casamento"
    },
    {
      src: "/portfolio/blessing.jpg",
      alt: "Momento de bênção durante a cerimônia de casamento"
    },
    {
      src: "/portfolio/cake.jpg",
      alt: "Mesa de bolo e doces decorada para casamento"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Galeria de Momentos
            </h2>
            <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada casamento conta uma história única. Veja alguns dos momentos especiais 
              que tive o privilégio de organizar
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioImages.map((img, idx) => (
              <Card key={idx} className="group overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="relative aspect-[4/3] bg-gradient-secondary overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white">
                      <Eye className="h-4 w-4 mr-2" />
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-secondary rounded-2xl p-8 shadow-soft">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Quer ver mais do meu trabalho?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Siga-me nas redes sociais para acompanhar os bastidores e mais detalhes 
                dos casamentos que organizo com tanto carinho.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-primary hover:opacity-90">
                  <Camera className="mr-2 h-4 w-4" />
                  Ver Instagram
                </Button>
                <Button variant="outline">
                  Ver Portfolio Completo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;