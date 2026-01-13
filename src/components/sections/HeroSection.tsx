import { Shield, Home, Leaf, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteContent } from '@/data/siteContent';
import heroBg from '@/assets/hero-bg.png';

const HeroSection = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'Utbildad personal i Barn HLR': <Shield className="w-5 h-5" />,
    'Hemlik och trygg miljö': <Home className="w-5 h-5" />,
    'Waldorfpedagogik sedan 1994': <Leaf className="w-5 h-5" />,
  };

  return (
    <section id="hem" className="min-h-screen flex items-center pt-20 relative" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-secondary/50 text-primary px-4 py-2 rounded-full mb-6">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">Waldorfpedagogik sedan 1994</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6 text-balance">
              {siteContent.hero.title}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl font-bold">
              {siteContent.hero.subtitle}
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-10">
              {siteContent.hero.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft"
                >
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
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop"
                alt="Barn som leker utomhus i naturen"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-card p-4 md:p-6 rounded-2xl shadow-card animate-float">
              <p className="font-serif text-2xl md:text-3xl font-bold text-coral">30+</p>
              <p className="text-sm text-muted-foreground">år av omsorg</p>
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
