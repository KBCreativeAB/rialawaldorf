import { Phone } from 'lucide-react';
import { siteContent } from '@/data/siteContent';

const FloatingCTA = () => {
  return (
    <a
      href={`tel:${siteContent.meta.phone.replace(/-/g, '')}`}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-cta text-cta-foreground px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 lg:hidden"
      aria-label="Ring för sjukanmälan"
    >
      <Phone className="w-5 h-5" />
      <span className="font-semibold">Sjukanmälan</span>
    </a>
  );
};

export default FloatingCTA;
