import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Users, 
  Brain, 
  Heart, 
  Target, 
  BookOpen,
  ArrowRight 
} from "lucide-react";

const ServicesSection = () => {
  const currentServices = [
    {
      icon: Briefcase,
      title: "Medical Case Management",
      description: "Comprehensive care coordination for patients in medical settings, including discharge planning and resource connection.",
      highlight: "Current Focus"
    },
    {
      icon: Users,
      title: "Family Support Services",
      description: "Supporting families through crisis situations and connecting them with community resources and support systems.",
      highlight: "Active Practice"
    },
    {
      icon: Brain,
      title: "Behavioral Health Support",
      description: "Mental health advocacy and support services drawing from experience in acute psychiatric settings.",
      highlight: "Specialized Experience"
    }
  ];

  const futureInterests = [
    {
      icon: Heart,
      title: "Private Practice Therapy",
      description: "Future goal to provide individual and family therapy services in a private practice setting.",
      timeline: "Future Goal"
    },
    {
      icon: Target,
      title: "Specialized Clinical Work",
      description: "Developing expertise in specific therapeutic modalities and specialized populations.",
      timeline: "In Development"
    },
    {
      icon: BookOpen,
      title: "Training & Consultation",
      description: "Sharing knowledge through training programs and consultation services for other social work professionals.",
      timeline: "Long-term Vision"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-trust-navy mb-4">
              Services & Areas of Interest
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Current practice areas and future aspirations in social work
            </p>
          </div>

          {/* Current Services */}
          <div className="mb-16">
            <h3 className="font-heading text-2xl font-semibold text-trust-navy mb-8 text-center">
              Current Practice Areas
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {currentServices.map((service, index) => (
                <Card 
                  key={index}
                  className="text-center hover:shadow-card transition-all duration-300 border-healing-blue-light/30 bg-gradient-to-br from-background to-healing-blue-light/10"
                >
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-healing-blue rounded-xl mb-4 shadow-gentle">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-growth-green-soft text-growth-green text-xs font-medium rounded-full mb-2">
                        {service.highlight}
                      </span>
                    </div>
                    <h4 className="font-semibold text-trust-navy mb-3 text-lg">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Future Interests */}
          <div className="mb-12">
            <h3 className="font-heading text-2xl font-semibold text-trust-navy mb-8 text-center">
              Future Aspirations
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {futureInterests.map((interest, index) => (
                <Card 
                  key={index}
                  className="text-center hover:shadow-card transition-all duration-300 border-growth-green-soft bg-gradient-to-br from-background to-growth-green-soft/20"
                >
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-growth-green rounded-xl mb-4 shadow-gentle">
                      <interest.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-compassion-amber-light text-trust-navy text-xs font-medium rounded-full mb-2">
                        {interest.timeline}
                      </span>
                    </div>
                    <h4 className="font-semibold text-trust-navy mb-3 text-lg">
                      {interest.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {interest.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-hero rounded-2xl p-8 shadow-hero">
            <h3 className="font-heading text-2xl font-semibold text-white mb-4">
              Let's Connect
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Whether you're interested in collaboration, have opportunities to discuss, 
              or would like to learn more about my work, I'd love to hear from you.
            </p>
            <Button variant="outline" size="lg" className="group bg-white/10 border-white/30 text-white hover:bg-white hover:text-healing-blue">
              Start a Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;