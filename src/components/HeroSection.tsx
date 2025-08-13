import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-section overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Supportive community representing social work values"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-healing-blue-light rounded-full mb-8">
            <Heart className="w-8 h-8 text-healing-blue" />
          </div>
          
          {/* Main Content */}
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-trust-navy mb-6 leading-tight">
            Empowering Lives Through
            <span className="text-healing-blue block">Compassionate Care</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Dedicated Master of Social Work graduate specializing in case management, 
            behavioral health, and supporting individuals and families on their journey 
            toward healing and growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              Learn About My Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="gentle" size="lg">
              View My Experience
            </Button>
          </div>
          
          {/* Credentials */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-healing-blue rounded-full"></div>
                <span>MSW Graduate - Wayne State University</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-growth-green rounded-full"></div>
                <span>LLMSW Case Manager</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-compassion-amber rounded-full"></div>
                <span>Behavioral Health Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;