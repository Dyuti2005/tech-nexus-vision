import { Linkedin, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import footerLogo from "@/assets/technexus-footer-logo.png";

const footerLinks = {
  community: [
    { name: "About Us", href: "/about" },
    { name: "Our Events", href: "/events" },
    { name: "Sponsors", href: "/sponsors" },
  ],
};

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-muted/30">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-16 lg:gap-24 mb-16">
          {/* Brand Column */}
          <div className="max-w-sm text-center lg:text-left">
            <img src={footerLogo} alt="TechNexus Community" className="h-16 mb-6 mx-auto lg:mx-0" />
            <p className="text-muted-foreground mb-6 leading-relaxed text-base">
              India's premier Microsoft AI & Cloud technology community. Learn, connect, and grow with 5000+ tech professionals.
            </p>
            
            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Bengaluru • Chennai</span>
            </div>
          </div>

          {/* Community Links */}
          <div className="text-center lg:text-left">
            <h4 className="font-bold text-lg mb-6">Community</h4>
            <ul className="space-y-4">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="text-center lg:text-left">
            <h4 className="font-bold text-lg mb-6">Connect</h4>
            <a
              href="https://www.linkedin.com/company/technexuscommunity/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-base group"
            >
              <span className="w-10 h-10 rounded-xl bg-foreground/5 group-hover:bg-primary/10 group-hover:text-primary flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TechNexus Community. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
