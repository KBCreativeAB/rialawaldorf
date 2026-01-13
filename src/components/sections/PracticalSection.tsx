import { MapPin, Clock, MessageCircle } from 'lucide-react';
import { siteContent } from '@/data/siteContent';

const iconMap: Record<string, React.ReactNode> = {
  'hitta-hit': <MapPin className="w-6 h-6" />,
  'oppettider': <Clock className="w-6 h-6" />,
  'klagomal': <MessageCircle className="w-6 h-6" />,
};

const PracticalSection = () => {
  return (
    <section id="praktiskt" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {siteContent.practical.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {siteContent.practical.sections.map((section) => (
            <div
              key={section.id}
              className="p-6 md:p-8 rounded-3xl bg-background border border-border hover:border-secondary hover:shadow-card transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/50 flex items-center justify-center text-coral mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all">
                {iconMap[section.id]}
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4 group-hover:text-coral transition-colors">
                {section.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Google Map */}
        <div className="rounded-3xl overflow-hidden shadow-card h-[300px] md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2018.5!2d18.5267!3d59.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9a8d7e8b9c3d%3A0x1234567890abcdef!2sRiala%20Kyrkv%C3%A4g%206%2C%20761%2073%20Riala!5e0!3m2!1ssv!2sse!4v1704067200000!5m2!1ssv!2sse"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Riala Waldorfförskola location"
          />
        </div>
      </div>
    </section>
  );
};

export default PracticalSection;
