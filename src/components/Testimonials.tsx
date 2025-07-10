import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Heart } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria & João",
      event: "Casamento Clássico",
      date: "Outubro 2023",
      rating: 5,
      content: "A Willa fez nosso casamento ser exatamente como sonhamos! Cada detalhe foi pensado com carinho e profissionalismo. Não tivemos que nos preocupar com nada, pudemos apenas aproveitar nosso dia especial.",
      highlight: "Profissionalismo excepcional"
    },
    {
      id: 2,
      name: "Ana & Carlos",
      event: "Mini Wedding",
      date: "Setembro 2023",
      rating: 5,
      content: "Nosso mini wedding foi perfeito! A Willa conseguiu criar uma atmosfera íntima e romântica que superou todas as nossas expectativas. Sua atenção aos detalhes é impressionante.",
      highlight: "Atenção aos detalhes"
    },
    {
      id: 3,
      name: "Isabela & Rafael",
      event: "Casamento ao Ar Livre",
      date: "Novembro 2023",  
      rating: 5,
      content: "Desde o primeiro encontro, a Willa nos passou muita confiança. Ela entendeu nossa visão e transformou em realidade. O casamento ficou ainda mais lindo do que imaginávamos!",
      highlight: "Visão criativa"
    },
    {
      id: 4,
      name: "Camila & Felipe",
      event: "Destination Wedding",
      date: "Dezembro 2023",
      rating: 5,
      content: "Organizar um casamento longe de casa parecia impossível, mas a Willa tornou tudo muito fácil. Sua organização e contatos locais fizeram toda a diferença. Foi mágico!",
      highlight: "Organização impecável"
    },
    {
      id: 5,
      name: "Juliana & André",
      event: "Casamento Moderno",
      date: "Janeiro 2024",
      rating: 5,
      content: "A Willa é mais que uma cerimonialista, é uma artista! Ela criou um ambiente único que refletiu perfeitamente nossa personalidade. Todos os convidados elogiaram.",
      highlight: "Personalização única"
    },
    {
      id: 6,
      name: "Fernanda & Lucas",
      event: "Casamento Clássico",
      date: "Fevereiro 2024",
      rating: 5,
      content: "Tivemos o casamento dos nossos sonhos graças à Willa. Ela foi incansável na busca pela perfeição e nos deu total tranquilidade. Recomendamos de olhos fechados!",
      highlight: "Dedicação total"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'fill-accent text-accent' : 'text-muted-foreground/30'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Depoimentos
            </h2>
            <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A alegria dos casais que confiaram em mim é minha maior recompensa. 
              Veja o que eles têm a dizer sobre nosso trabalho juntos.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-2 border-border hover:border-primary/30 shadow-soft hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary/30 group-hover:text-primary/50 transition-colors" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Highlight */}
                  <div className="mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {testimonial.highlight}
                    </span>
                  </div>
                  
                  {/* Author Info */}
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.event} • {testimonial.date}
                        </p>
                      </div>
                      <Heart className="h-5 w-5 text-primary/50" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="bg-gradient-secondary rounded-2xl p-8 shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Casamentos Realizados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5.0</div>
                <div className="text-sm text-muted-foreground">Avaliação Média</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Casais Satisfeitos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;