import { Users } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import berryBasket from '@/assets/berry-basket.jpeg';

const BoardSection = () => {
  return (
    <section id="om-oss" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {siteContent.board.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {siteContent.board.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 lg:gap-4 max-w-6xl mx-auto">
          {siteContent.board.members.map((member, index) => (
            <div
              key={member.name}
              className="flex flex-col items-center justify-center text-center p-6 md:p-8 rounded-3xl bg-card hover:shadow-card transition-all group"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-1 group-hover:text-coral transition-colors">
                {member.name}
              </h3>
              <p className="text-coral font-medium text-sm mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.description}</p>
            </div>
          ))}
        </div>

        {/* About section */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-card">
            <img
              src={berryBasket}
              alt="Korg med lingon plockade i naturen"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">
              {siteContent.about.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {siteContent.about.intro}
            </p>
            <div className="space-y-4">
              {siteContent.about.features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-coral">
                    <span className="text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardSection;
