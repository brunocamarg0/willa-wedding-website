import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Users, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça a história por trás de cada casamento perfeito
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-semibold text-foreground">
                Olá, eu sou a Willa!
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                Há mais de 5 anos, dedico minha vida a tornar sonhos em realidade. Como cerimonialista 
                especializada em casamentos, acredito que cada casal tem uma história única para contar, 
                e meu trabalho é garantir que essa história seja celebrada da forma mais bela e especial possível.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Minha paixão vai além da organização de eventos - é sobre criar momentos mágicos, 
                cuidar de cada detalhe com carinho e proporcionar tranquilidade aos noivos para que 
                possam viver plenamente o dia mais importante de suas vidas.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Formada em Eventos e com especializações em Wedding Planning, trago não apenas 
                experiência técnica, mas também sensibilidade artística e um olhar atento às 
                tendências mais elegantes do universo dos casamentos.
              </p>

              {/* Values */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Amor pelos detalhes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Excelência no atendimento</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Relacionamento próximo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Qualidade garantida</span>
                </div>
              </div>
            </div>

            {/* Image Placeholder & Stats */}
            <div className="space-y-8">
              {/* Profile Image Placeholder */}
              <div className="relative">
                <div className="w-full h-96 bg-gradient-secondary rounded-2xl shadow-soft flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Foto da Willa</p>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20"></div>
              </div>

              {/* Achievement Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-primary/20 shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">200+</div>
                    <div className="text-sm text-muted-foreground">Casamentos</div>
                  </CardContent>
                </Card>
                <Card className="border-primary/20 shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Anos</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;