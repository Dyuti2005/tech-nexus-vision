import { Linkedin, Twitter, Youtube, MessageCircle, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import footerLogo from "@/assets/technexus-footer-logo.png";

const footerLinks = {
  community: [
    { name: "About Us", href: "/about" },
    { name: "Our Events", href: "/events" },
    { name: "Sponsors", href: "/sponsors" },
  ],
  resources: [
    { name: "AZ-900 Prep", href: "/skill-up#az-900" },
    { name: "AI-900 Prep", href: "/skill-up#ai-900" },
    { name: "Microsoft Learn", href: "https://learn.microsoft.com", external: true },
  ],
  connect: [
    { name: "WhatsApp Group", href: "https://chat.whatsapp.com/yourlink", external: true },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/technexuscommunity/", external: true },
    { name: "Contact Us", href: "mailto:hello@technexuscommunity.com" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/technexuscommunity/", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: MessageCircle, href: "https://chat.whatsapp.com/yourlink", label: "WhatsApp" },
];

const Footer = () => {
  return (
    <footer className="relative pt-24 pb-8 overflow-hidden bg-muted/30">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img src={footerLogo} alt="TechNexus Community" className="h-10 mb-6" />
            <p className="text-muted-foreground mb-6 leading-relaxed">
              India's premier Microsoft AI & Cloud technology community. Learn, connect, and grow with 5000+ tech professionals.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-foreground/5 hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="font-bold mb-6">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-6">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Locations */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Bengaluru • Chennai • Hyderabad</span>
              </div>
            </div>
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
