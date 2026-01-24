import { Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import footerLogo from "@/assets/technexus-logo-transparent.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "About", href: "/about" },
  { name: "Sponsors", href: "/sponsors" },
];

// Custom Meetup icon component
const MeetupIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M6.98 13.82c.15.56.24 1.08.37 1.58.26 1.04.65 2.04 1.2 2.95.19.32.46.58.83.68.53.15 1-.14 1.13-.69.09-.38.04-.77.05-1.16 0-.33.03-.66.05-.99.04-.46.28-.72.68-.79.44-.07.78.17.89.63.04.15.05.31.08.46.21 1.02.57 1.97 1.11 2.85.17.28.41.54.68.72.49.32 1.09.15 1.38-.35.18-.31.27-.67.35-1.01.12-.48.2-.97.3-1.46.15-.7.53-.99 1.22-.97.65.02 1.08.42 1.21 1.06.11.55.2 1.1.28 1.65.06.43.09.87.17 1.3.12.6.52.95 1.03.97.58.02 1.04-.36 1.1-.99.05-.5.01-1.01-.06-1.51-.35-2.44-1.05-4.77-2.08-7-.15-.32-.34-.52-.71-.54-.42-.03-.72.18-.92.55-.4.73-.79 1.46-1.16 2.21-.18.36-.41.43-.74.27-.28-.14-.38-.38-.3-.73.26-1.07.53-2.13.77-3.2.3-1.32.57-2.64.85-3.96.08-.38.13-.77.21-1.15.11-.53-.09-.98-.52-1.25-.46-.29-1.02-.22-1.42.2-.24.26-.4.6-.52.93-.47 1.3-.93 2.6-1.38 3.91-.24.69-.47 1.38-.72 2.06-.12.33-.38.5-.7.45-.3-.05-.51-.27-.53-.61-.05-.71.08-1.4.22-2.08.24-1.15.54-2.29.7-3.45.14-.98-.35-1.69-1.12-1.87-.83-.19-1.48.2-1.84 1.11-.39.99-.64 2.02-.9 3.05-.32 1.25-.59 2.51-.92 3.76-.13.49-.42.76-.9.78-.54.02-.93-.33-.97-.9-.04-.57.05-1.13.16-1.69.21-.97.44-1.94.67-2.91.13-.56.23-1.13.4-1.68.2-.64-.02-1.2-.55-1.57-.58-.41-1.28-.3-1.73.27-.3.38-.47.84-.59 1.31-.51 1.95-.89 3.93-1.05 5.94-.1 1.23 0 2.46.21 3.68.06.34.16.67.3.99z"/>
  </svg>
);

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
    icon: MeetupIcon,
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
