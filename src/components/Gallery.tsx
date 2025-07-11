import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Camera, Eye } from "lucide-react";

const Gallery = () => {
  // Placeholder gallery items
  const galleryItems = [
    {
      id: 1,
      title: "Casamento Clássico",
      category: "Cerimônia Religiosa",
      description: "Elegância atemporal em uma cerimônia emocionante"
    },
    {
      id: 2,
      title: "Casamento no Jardim",
      category: "Cerimônia ao Ar Livre",
      description: "Romance natural em meio à natureza"
    },
    {
      id: 3,
      title: "Casamento Moderno",
      category: "Contemporâneo",
      description: "Sofisticação moderna com toques únicos"
    },
    {
      id: 4,
      title: "Mini Wedding",
      category: "Cerimônia Íntima",
      description: "Intimidade e charme em cada detalhe"
    },
    {
      id: 5,
      title: "Casamento Vintage",
      category: "Clássico",
      description: "Nostalgia romântica em cada elemento"
    },
    {
      id: 6,
      title: "Destination Wedding",
      category: "Destino",
      description: "Aventura romântica em local paradisíaco"
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
            {galleryItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                {/* Image Placeholder */}
                <div className="relative aspect-[4/3] bg-gradient-secondary overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="h-12 w-12 text-primary/50 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">{item.title}</p>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white">
                      <Eye className="h-4 w-4 mr-2" />
                      Ver Detalhes
                    </Button>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
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