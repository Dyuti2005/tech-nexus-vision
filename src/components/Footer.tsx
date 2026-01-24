import { Linkedin, Instagram, Users } from "lucide-react";
import { Link } from "react-router-dom";
import footerLogo from "@/assets/technexus-logo-transparent.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "About", href: "/about" },
  { name: "Sponsors", href: "/sponsors" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/technexuscommunity/posts/?feedView=all",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/p/DTo2_1-CHuX/",
    icon: Instagram,
  },
  {
    name: "Meetup",
    href: "https://www.meetup.com/technexus-community/",
    icon: Users,
  },
];

const Footer = () => {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden bg-muted/30">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-10">
        {/* Main Footer Content - 3 Column Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* LEFT: Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src={footerLogo} 
                alt="TechNexus Community" 
                className="h-[50px] w-auto object-contain mix-blend-multiply dark:mix-blend-screen"
                style={{ background: 'transparent' }}
              />
            </Link>
          </div>

          {/* CENTER: Navigation Links */}
          <nav className="flex items-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT: Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-foreground/5 hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border">
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
