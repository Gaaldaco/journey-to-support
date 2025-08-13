import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Users, Target } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Providing empathetic support with genuine understanding and respect for each individual's unique journey."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building stronger communities by connecting individuals and families with resources and support systems."
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Working collaboratively to identify and achieve meaningful, sustainable outcomes for those I serve."
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Committed to ongoing professional development and staying current with best practices in social work."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-trust-navy mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey is rooted in a deep commitment to social justice, 
              mental health advocacy, and empowering individuals to overcome challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Personal Story */}
            <div>
              <h3 className="font-heading text-2xl font-semibold text-trust-navy mb-6">
                My Journey in Social Work
              </h3>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  As a newly graduated Master of Social Work from Wayne State University, 
                  I bring a unique blend of academic knowledge and hands-on experience 
                  gained through diverse practice settings.
                </p>
                <p>
                  My path has taken me from school social work, where I supported students 
                  and families navigate educational challenges, to behavioral health settings 
                  where I witnessed the transformative power of compassionate intervention.
                </p>
                <p>
                  Currently serving as an LLMSW Case Manager in a medical hospital, 
                  I continue to develop my skills in complex case coordination while 
                  exploring opportunities for future growth, including potential private practice.
                </p>
              </div>
            </div>

            {/* Professional Photo Placeholder */}
            <div className="relative">
              <Card className="bg-gradient-card shadow-card border-healing-blue-light">
                <CardContent className="p-8">
                  <div className="aspect-square bg-healing-blue-light rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center text-healing-blue">
                      <Users size={64} />
                      <p className="mt-4 font-medium">Professional Photo</p>
                      <p className="text-sm">Coming Soon</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-trust-navy mb-2">
                      Ready to Make a Difference
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Combining education, experience, and passion for helping others
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-card transition-all duration-300 border-growth-green-soft bg-gradient-to-br from-background to-growth-green-soft/20"
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-healing-blue-light rounded-lg mb-4">
                    <value.icon className="w-6 h-6 text-healing-blue" />
                  </div>
                  <h4 className="font-semibold text-trust-navy mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;