import { Heart, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-trust-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-healing-blue" />
                <h3 className="font-heading text-xl font-bold">MSW Portfolio</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                Dedicated to empowering lives through compassionate social work practice 
                and community support.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <a href="#about" className="block text-white/80 hover:text-healing-blue transition-gentle">
                  About Me
                </a>
                <a href="#experience" className="block text-white/80 hover:text-healing-blue transition-gentle">
                  Experience
                </a>
                <a href="#services" className="block text-white/80 hover:text-healing-blue transition-gentle">
                  Services
                </a>
                <a href="#contact" className="block text-white/80 hover:text-healing-blue transition-gentle">
                  Contact
                </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-healing-blue" />
                  <span className="text-white/80">professional@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-healing-blue" />
                  <span className="text-white/80">LinkedIn Profile</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">
                © {currentYear} MSW Professional Portfolio. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-healing-blue" />
                <span>for social impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;