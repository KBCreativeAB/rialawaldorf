import { Leaf, Utensils, Heart, Clock } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import foodBg from '@/assets/food-bg.png';

const iconMap: Record<string, React.ReactNode> = {
  Leaf: <Leaf className="w-6 h-6" />,
  Utensils: <Utensils className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
};

const FoodSection = () => {
  return (
    <section id="maten" className="section-padding relative" style={{ backgroundImage: `url(${foodBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-card">
              <img
                src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=700&h=500&fit=crop"
                alt="Färska ekologiska grönsaker"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Ekologiskt</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {siteContent.food.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {siteContent.food.intro}
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-10">
              {siteContent.food.highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-card hover:bg-secondary/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center text-coral">
                    {iconMap[item.icon]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Meal schedule */}
            <div className="bg-secondary/30 rounded-2xl p-6">
              <h3 className="font-serif text-lg font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-coral" />
                Måltidsschema
              </h3>
              <div className="flex flex-wrap gap-4">
                {siteContent.food.meals.map((meal) => (
                  <div key={meal.meal} className="flex items-center gap-2 bg-card px-4 py-2 rounded-full">
                    <span className="font-semibold text-coral">{meal.time}</span>
                    <span className="text-primary">{meal.meal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodSection;
