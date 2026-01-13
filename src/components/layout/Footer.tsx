import { Heart, Phone, MapPin } from 'lucide-react';
import { siteContent } from '@/data/siteContent';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <span className="font-serif font-bold text-primary text-xl">R</span>
              </div>
              <span className="font-serif font-semibold text-xl">
                Riala Waldorfförskola
              </span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              En trygg och kärleksfull miljö där barn får växa i sin egen takt sedan 1994.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <a
                href={`tel:${siteContent.meta.phone.replace(/-/g, '')}`}
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Phone className="w-5 h-5" />
                {siteContent.meta.phone}
              </a>
              <a
                href={`tel:${siteContent.meta.rectorMobile.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Phone className="w-5 h-5" />
                {siteContent.meta.rectorMobile} (Rektor)
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>{siteContent.meta.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Snabblänkar</h3>
            <div className="space-y-2">
              {siteContent.navigation.slice(0, 5).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            {siteContent.footer.copyright}
          </p>
          <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
            Skapad med <Heart className="w-4 h-4 text-coral" /> för våra barn
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
