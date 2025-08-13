import { Card, CardContent } from "@/components/ui/card";
import schoolIcon from "@/assets/school-social-worker-icon.png";
import caseManagerIcon from "@/assets/case-manager-icon.png";
import behavioralIcon from "@/assets/behavioral-health-icon.png";
import llmswIcon from "@/assets/llmsw-icon.png";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "School Social Worker Intern",
      organization: "Anchor Bay School District",
      period: "Internship",
      icon: schoolIcon,
      description: "Provided support services to students and families, conducted assessments, and facilitated connections to community resources.",
      skills: ["Student Assessment", "Family Engagement", "Crisis Intervention", "Resource Coordination"]
    },
    {
      id: 2,
      title: "Case Manager",
      organization: "Medical Hospital",
      period: "Internship & Current Role",
      icon: caseManagerIcon,
      description: "Coordinate comprehensive care plans for patients, facilitate discharge planning, and connect patients with community resources.",
      skills: ["Discharge Planning", "Care Coordination", "Medical Social Work", "Interdisciplinary Collaboration"]
    },
    {
      id: 3,
      title: "Behavioral Health Technician",
      organization: "Acute Psychiatric Hospital",
      period: "During Graduate Studies",
      icon: behavioralIcon,
      description: "Provided direct patient care in acute psychiatric setting, assisted with therapeutic interventions and crisis management.",
      skills: ["Crisis Management", "Mental Health Support", "Therapeutic Communication", "Patient Safety"]
    },
    {
      id: 4,
      title: "LLMSW Case Manager",
      organization: "Medical Hospital",
      period: "Current Position",
      icon: llmswIcon,
      description: "Licensed Limited Master Social Worker providing advanced case management services in medical setting.",
      skills: ["Licensed Practice", "Complex Case Management", "Clinical Assessment", "Professional Supervision"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-trust-navy mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse foundation of experience across educational, medical, and behavioral health settings
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card 
                key={experience.id}
                className={`overflow-hidden hover:shadow-card transition-all duration-500 border-healing-blue-light/30 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Icon Section */}
                    <div className={`lg:w-1/3 bg-gradient-hero p-8 flex items-center justify-center ${
                      index % 2 === 0 ? 'lg:rounded-r-none' : 'lg:rounded-l-none'
                    }`}>
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                          <img 
                            src={experience.icon} 
                            alt={`${experience.title} icon`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-white">
                          <h3 className="font-semibold text-lg mb-1">{experience.title}</h3>
                          <p className="text-white/80 text-sm">{experience.period}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-2/3 p-8">
                      <div className="mb-4">
                        <h4 className="font-heading text-xl font-semibold text-trust-navy mb-2">
                          {experience.organization}
                        </h4>
                        <p className="text-foreground leading-relaxed mb-6">
                          {experience.description}
                        </p>
                      </div>

                      {/* Skills */}
                      <div>
                        <h5 className="font-medium text-trust-navy mb-3">Key Skills & Responsibilities:</h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className="px-3 py-1 bg-healing-blue-light text-healing-blue text-sm rounded-full font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;