import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              {/* <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div> */}
              <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
                BVM CS
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Empowering college students with professional resumes and portfolio websites to accelerate their career journey.
            </p>
            {/* <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground transition-colors">Resume Design</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Portfolio Websites</Link></li>
              {/* <li><Link to="/services" className="hover:text-foreground transition-colors">Career Consultation</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">ATS Optimization</Link></li> */}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              {/* <li><Link to="/portfolio" className="hover:text-foreground transition-colors">Our Work</Link></li> */}
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              {/* <li><Link to="/contact" className="hover:text-foreground transition-colors">Support</Link></li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>bvmcraftersstudio@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 93844 76534</span>
                <span> (or) +91 63691 94095</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 BVMCS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;