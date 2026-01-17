import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Home, Leaf, ArrowDown, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/siteContent";
import heroBg from "@/assets/hero-bg.png";
import preschoolBuilding from "@/assets/preschool-building.jpeg";
const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const iconMap: Record<string, React.ReactNode> = {
    "Personal utbildad i Barn-HLR": <Shield className="w-5 h-5" />,
    "Hemlik och trygg miljö": <Home className="w-5 h-5" />,
    "Vegetarisk mat": <Leaf className="w-5 h-5" />,
    "Waldorfpedagogik": <Pencil className="w-5 h-5" />,
  };
  return (
    <section id="hem" ref={sectionRef} className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 -top-[10%] -bottom-[10%] z-0"
        style={{
          y: backgroundY,
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6 text-balance">
              {siteContent.hero.title}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              {siteContent.hero.subtitle}
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-10">
              {siteContent.hero.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft">
                  <span className="text-coral">{iconMap[highlight]}</span>
                  <span className="text-sm font-medium text-primary">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#intresseanmalan">{siteContent.hero.ctaText}</a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#verksamheten">{siteContent.hero.secondaryCtaText}</a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src={preschoolBuilding}
                alt="Riala Waldorfförskola - röd stuga med trädgård"
                className="w-full h-auto object-cover object-center aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-8 left-[10%] md:-bottom-6 md:-left-10 bg-card px-6 py-4 rounded-2xl shadow-card animate-float md:py-[20px] md:px-[30px] mx-0 my-0">
              <p className="text-xl text-muted-foreground">Waldorfpedagogik sedan</p>
              <p className="font-serif text-2xl md:text-3xl font-bold text-coral">1994</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex justify-center mt-16">
          <a
            href="#verksamheten"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Läs mer</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
