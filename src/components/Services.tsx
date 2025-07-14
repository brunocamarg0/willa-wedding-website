import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  MapPin, 
  Flower, 
  Camera, 
  Music, 
  Crown,
  Sparkles,
  Heart
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Crown,
      title: "Cerimonial Completo",
      description: "Planejamento completo do seu casamento, desde a organização até a execução no grande dia.",
      features: ["Timeline personalizada", "Coordenação de fornecedores", "Supervisão no dia do casamento"],
      popular: true
    },
    {
      icon: Calendar,
      title: "Wedding Planner",
      description: "Planejamento detalhado com até 12 meses de antecedência para o casamento dos seus sonhos.",
      features: ["Planejamento completo", "Orçamento detalhado", "Cronograma de atividades"]
    },
    {
      icon: Sparkles,
      title: "Day Wedding",
      description: "Coordenação especializada para casamentos durante o dia com charme e elegância únicos.",
      features: ["Ambientação diurna", "Timeline otimizada"]
    },
    {
      icon: MapPin,
      title: "Assessoria no Local",
      description: "Supervisão e coordenação apenas no dia do casamento para garantir que tudo saia perfeito.",
      features: ["Coordenação do dia", "Gestão de fornecedores", "Suporte aos noivos"]
    },
    {
      icon: Heart,
      title: "Cerimônia Religiosa",
      description: "Coordenação especializada para cerimônias religiosas com todo respeito e tradição.",
      features: ["Protocolos religiosos", "Coordenação liturgica", "Organização familiar"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meus Serviços
            </h2>
            <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofereço soluções completas para tornar seu casamento único e inesquecível
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`relative border-2 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 ${
                  service.popular ? 'border-primary/50 bg-gradient-hero' : 'border-border hover:border-primary/30'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-xs font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center justify-center">
                        <Sparkles className="h-3 w-3 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={service.popular ? "default" : "outline"}
                    className={service.popular ? "bg-gradient-primary hover:opacity-90" : ""}
                    size="sm"
                  >
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-secondary rounded-2xl p-8 shadow-soft">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Não encontrou o serviço ideal?
            </h3>
            <p className="text-muted-foreground mb-6">
              Cada casamento é único! Vamos conversar sobre suas necessidades específicas 
              e criar um pacote personalizado para você.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              <Heart className="mr-2 h-5 w-5" />
              Solicitar Orçamento Personalizado
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;