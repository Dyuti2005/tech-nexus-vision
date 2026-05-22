import { motion } from "framer-motion";
import { useState } from "react";
import { Quote } from "lucide-react";
import abhilekhImg from "@/assets/speakers/abhilekh-verma.png";
import prasannaImg from "@/assets/speakers/prasanna-nagarajan.jpg";
import prateekImg from "@/assets/speakers/prateek-singh.png";
import priyanshiImg from "@/assets/speakers/priyanshi-verma.jpg";

const testimonials = [
  {
    name: "Abhilekh Verma",
    role: "Founder - Abhilekh Verma Consultancy",
    image: abhilekhImg,
    quote: "I am very happy to share that I had a great time as a speaker with the TechNexus Community in Microsoft Bengaluru. Excellent hospitality by the organizers and a great community with top notch networking opportunities. Highly recommended for everyone to be part of such a vibrant tech community.",
  },
  {
    name: "Prasanna V Nagarajan",
    role: "Principal Software Engineer",
    image: prasannaImg,
    quote: "Having recently presented at a TechNexus Community-organized conference, I was thoroughly impressed by their promptness and professionalism. This community excels at fostering a vibrant tech thought process across all demographics.",
  },
  {
    name: "Prateek Singh",
    role: "Founder, Ganak AI Labs",
    image: prateekImg,
    quote: "TechNexus is one of the most well-run, high-energy communities I've engaged with. I had the opportunity to speak at the Microsoft Global AI Tour in Bengaluru, hosted by TechNexus, and the experience was exceptional.",
  },
  {
    name: "Priyanshi Verma",
    role: "Community Member",
    image: priyanshiImg,
    quote: "TechNexus has been instrumental in my growth as a tech professional. The workshops and networking opportunities have opened doors I never knew existed.",
  },
];

// Duplicate testimonials for seamless infinite scroll
const duplicatedTestimonials = [...testimonials, ...testimonials];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[350px] mx-3">
    <div className="glass-card p-6 md:p-8 rounded-3xl h-full relative group/card">
      {/* Quote Icon */}
      <div className="absolute top-6 right-6">
        <Quote className="w-8 h-8 text-primary/20" />
      </div>

      {/* Quote */}
      <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-4 text-sm md:text-base">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-muted ring-2 ring-primary/20">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-sm md:text-base">{testimonial.name}</h4>
          <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 0 1px hsl(var(--primary) / 0.2), 0 0 30px hsl(var(--primary) / 0.1)'
        }}
      />
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            What Our <span className="gradient-text">Experts Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from industry leaders and community members about their TechNexus experience
          </p>
        </motion.div>
      </div>

      {/* Marquee Container - Full Width */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Small screens: horizontal scroll */}
      <div className="md:hidden overflow-x-auto px-4 py-4">
        <div className="flex gap-4">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Desktop/tablet marquee */}
      <div className="hidden md:block">
        <div
          role="button"
          tabIndex={0}
          aria-pressed={isPaused}
          onClick={() => setIsPaused((p) => !p)}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIsPaused(p => !p); } }}
          className="relative w-full overflow-hidden cursor-pointer"
        >
          <div
            className="flex gap-4 animate-marquee"
            style={{
              minWidth: '200%',
              animationPlayState: isPaused ? 'paused' : 'running',
              animationDuration: '60s'
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
            ))}
          </div>

          <div className="absolute right-3 top-3 text-xs text-muted-foreground z-10 select-none">
            {isPaused ? 'Paused — click to resume' : 'Click to pause'}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
