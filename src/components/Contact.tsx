import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  MessageCircle,
  Heart,
  Clock,
  Calendar
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Vamos Conversar?
            </h2>
            <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estou aqui para tornar seu casamento único e inesquecível. 
              Entre em contato e vamos planejar o dia mais especial da sua vida!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-soft border-2 border-border">
              <CardHeader>
                <CardTitle className="font-serif text-2xl flex items-center">
                  <Heart className="h-6 w-6 text-primary mr-2" />
                  Solicite seu Orçamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome da Noiva
                    </label>
                    <Input placeholder="Seu nome" className="border-border focus:border-primary" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome do Noivo
                    </label>
                    <Input placeholder="Nome do noivo" className="border-border focus:border-primary" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      E-mail
                    </label>
                    <Input type="email" placeholder="seu@email.com" className="border-border focus:border-primary" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      WhatsApp
                    </label>
                    <Input type="tel" placeholder="(11) 99999-9999" className="border-border focus:border-primary" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Data do Casamento
                    </label>
                    <Input type="date" className="border-border focus:border-primary" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Número de Convidados
                    </label>
                    <Input type="number" placeholder="Ex: 150" className="border-border focus:border-primary" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Tipo de Cerimônia
                  </label>
                  <select className="w-full p-3 border border-border rounded-md focus:border-primary focus:outline-none bg-background">
                    <option value="">Selecione uma opção</option>
                    <option value="completo">Cerimonial Completo</option>
                    <option value="day-wedding">Day Wedding</option>
                    <option value="mini-wedding">Mini Wedding</option>
                    <option value="assessoria">Assessoria no Dia</option>
                    <option value="religiosa">Cerimônia Religiosa</option>
                    <option value="destination">Destination Wedding</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Conte-me sobre seus sonhos
                  </label>
                  <Textarea 
                    placeholder="Descreva como você imagina seu casamento ideal..."
                    className="min-h-[100px] border-border focus:border-primary"
                  />
                </div>

                <Button className="w-full bg-gradient-primary hover:opacity-90 text-white font-medium py-3">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Enviar Solicitação
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <Card className="shadow-soft border-2 border-border">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Contato Direto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">(11) 99999-9999</p>
                      <p className="text-sm text-muted-foreground">WhatsApp disponível</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">contato@willacerimoniais.com</p>
                      <p className="text-sm text-muted-foreground">Resposta em até 24h</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Instagram className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">@willacerimoniais</p>
                      <p className="text-sm text-muted-foreground">Veja meus trabalhos</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">São Paulo - SP</p>
                      <p className="text-sm text-muted-foreground">Atendo toda Grande SP</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Working Hours */}
              <Card className="shadow-soft border-2 border-border">
                <CardHeader>
                  <CardTitle className="font-serif text-xl flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    Horário de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Segunda à Sexta</span>
                    <span className="font-medium text-foreground">9h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábado</span>
                    <span className="font-medium text-foreground">9h às 14h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Domingo</span>
                    <span className="font-medium text-foreground">Sob demanda</span>
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <div className="bg-gradient-secondary rounded-2xl p-6 shadow-soft text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Vamos agendar uma conversa?
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Agende uma reunião gratuita para conversarmos sobre seus sonhos 
                  e como posso torná-los realidade.
                </p>
                <Button className="bg-gradient-primary hover:opacity-90">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Agendar Reunião
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;