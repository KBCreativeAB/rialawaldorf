import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Utensils, Heart, Clock } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import foodBg from '@/assets/food-bg.png';
import vegetableHarvest from '@/assets/vegetable-harvest.jpeg';
const iconMap: Record<string, React.ReactNode> = {
  Leaf: <Leaf className="w-6 h-6" />,
  Utensils: <Utensils className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />
};
const FoodSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Subtle parallax: background moves 20% slower than scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  return <section id="maten" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 -top-[10%] -bottom-[10%] z-0" style={{
      y: backgroundY
    }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${foodBg})`
      }} />
      </motion.div>

      {/* Content Container */}
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-card">
              <img src={vegetableHarvest} alt="Färska grönsaker från skörden" className="w-full h-auto object-cover aspect-[4/3]" />
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
              {siteContent.food.highlights.map(item => <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl bg-card hover:bg-secondary/30 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center text-coral">
                    {iconMap[item.icon]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>)}
            </div>

            {/* Meal schedule */}
            
          </div>
        </div>
      </div>
    </section>;
};
export default FoodSection;