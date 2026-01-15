import { Sun, Heart, Leaf, Users } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import gallery1 from '@/assets/gallery-1.jpeg';
import gallery2 from '@/assets/gallery-2.jpeg';
import gallery3 from '@/assets/gallery-3.jpeg';
import gallery4 from '@/assets/gallery-4.jpeg';
import gallery5 from '@/assets/gallery-5.jpeg';
import gallery6 from '@/assets/gallery-6.jpeg';

const iconMap: Record<string, React.ReactNode> = {
  Sun: <Sun className="w-8 h-8" />,
  Heart: <Heart className="w-8 h-8" />,
  Leaf: <Leaf className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
};

const PedagogySection = () => {
  return (
    <section id="verksamheten" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {siteContent.pedagogy.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {siteContent.pedagogy.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {siteContent.pedagogy.sections.map((section, index) => (
            <div
              key={section.title}
              className="group p-6 md:p-8 rounded-3xl bg-background hover:bg-secondary/30 transition-all duration-300 border border-border hover:border-secondary hover:shadow-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center text-coral group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  {iconMap[section.icon]}
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold mb-3 group-hover:text-coral transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image gallery */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-card">
            <img
              src={gallery4}
              alt="Barn som leker utomhus på stockar"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-soft">
            <img
              src={gallery1}
              alt="Torkade blommor på bambufat"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-soft">
            <img
              src={gallery2}
              alt="Färgglada garnnystan i korg"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-soft">
            <img
              src={gallery3}
              alt="Waldorfdockor och leksaker av ull"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-soft">
            <img
              src={gallery5}
              alt="Korg med lingon"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="rounded-3xl overflow-hidden shadow-soft">
            <img
              src={gallery6}
              alt="Barn som bakar med deg"
              className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PedagogySection;
