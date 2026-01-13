import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteContent } from '@/data/siteContent';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hem" className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary flex items-center justify-center">
              <span className="font-serif font-bold text-primary text-lg md:text-xl">R</span>
            </div>
            <span className="font-serif font-semibold text-primary text-lg md:text-xl hidden sm:block">
              Riala Waldorf
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {siteContent.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-primary font-medium hover:text-coral transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            <Button
              variant="cta"
              size="sm"
              className="hidden sm:flex"
              asChild
            >
              <a href="#intresseanmalan">Intresseanmälan</a>
            </Button>
            <Button
              variant="cta"
              size="sm"
              className="flex items-center gap-2"
              asChild
            >
              <a href={`tel:${siteContent.meta.phone.replace(/-/g, '')}`}>
                <Phone className="w-4 h-4" />
                <span className="hidden md:inline">Sjukanmälan</span>
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {siteContent.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-primary font-medium hover:bg-secondary/50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#intresseanmalan"
                className="mx-4 mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="cta" className="w-full">
                  Intresseanmälan
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
