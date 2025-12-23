import { motion } from "framer-motion";
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

const TestimonialsSection = () => {
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
            What Our <span className="gradient-text">Members Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from industry leaders and community members about their TechNexus experience
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-6 md:p-8 rounded-3xl h-full relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>

                {/* Quote */}
                <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-4">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden bg-muted">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 0 1px hsl(var(--primary) / 0.2), 0 0 30px hsl(var(--primary) / 0.1)'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
