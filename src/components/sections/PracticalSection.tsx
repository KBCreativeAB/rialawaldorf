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

        {/* Map placeholder */}
        <div className="rounded-3xl overflow-hidden shadow-card bg-secondary/30 h-[300px] md:h-[400px] flex items-center justify-center">
          <div className="text-center p-8">
            <MapPin className="w-12 h-12 text-coral mx-auto mb-4" />
            <h3 className="font-serif text-xl font-semibold mb-2">Riala Kyrkväg 6</h3>
            <p className="text-muted-foreground">761 73 Riala, Norrtälje kommun</p>
            <a
              href="https://maps.google.com/?q=Riala+Kyrkväg+6,+761+73+Riala"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-coral hover:text-coral/80 font-medium underline underline-offset-4"
            >
              Öppna i Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalSection;
