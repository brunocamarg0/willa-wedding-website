import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-pulse">
          <Sparkles className="h-6 w-6 text-primary" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-1000">
          <Heart className="h-8 w-8 text-accent" />
        </div>
        <div className="absolute bottom-32 left-20 animate-pulse delay-2000">
          <Sparkles className="h-4 w-4 text-primary" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-500">
          <Heart className="h-6 w-6 text-accent" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Seu Casamento{" "}
            <span className="text-primary relative">
              Perfeito
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary rounded-full"></div>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light leading-relaxed">
            Transformamos seu sonho em realidade com elegância, sofisticação e cada detalhe
            pensado especialmente para vocês
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Sou Willa, cerimonialista especializada em criar momentos únicos e inesquecíveis.
            Cada casamento é uma história única, e eu estou aqui para tornar a sua perfeita.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white font-medium px-8 py-3 shadow-elegant"
            >
              <Heart className="mr-2 h-5 w-5" />
              Vamos Conversar
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
            >
              Ver Meu Trabalho
            </Button>
          </div>

          {/* Stats or highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Casamentos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Casais Satisfeitos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;