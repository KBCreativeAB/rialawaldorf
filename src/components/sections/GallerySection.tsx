import outdoorPlay from '@/assets/outdoor-play.jpeg';
import yarnBasket from '@/assets/yarn-basket.jpeg';
import woolScene from '@/assets/wool-scene.jpeg';
import doughKneading from '@/assets/dough-kneading.jpeg';
import flowerPetals from '@/assets/flower-petals.jpeg';
import galleryFoodPlate from '@/assets/gallery-food-plate.jpeg';
import galleryCarrots from '@/assets/gallery-carrots.jpeg';
import galleryGrating from '@/assets/gallery-grating.jpeg';
import galleryArtwork from '@/assets/gallery-artwork.jpeg';
import galleryLeafCrown from '@/assets/gallery-leaf-crown.jpeg';
import galleryPainting from '@/assets/gallery-painting.jpeg';
import galleryHandsWool from '@/assets/gallery-hands-wool.jpeg';

const galleryImages = [
  { src: outdoorPlay, alt: 'Barn som leker utomhus på stockar', size: 'large' },
  { src: yarnBasket, alt: 'Korg med färgglada garnnystan', size: 'small' },
  { src: woolScene, alt: 'Kreativt skapande med ull och naturmaterial', size: 'tall' },
  { src: doughKneading, alt: 'Barnhänder som knådar deg', size: 'small' },
  { src: flowerPetals, alt: 'Torkade blommor på flätade korgar', size: 'wide' },
  { src: galleryFoodPlate, alt: 'Hemlagad lunch med grönsaker', size: 'small' },
  { src: galleryCarrots, alt: 'Nypplockade morötter på höstlöv', size: 'tall' },
  { src: galleryGrating, alt: 'Barn river morötter', size: 'small' },
  { src: galleryArtwork, alt: 'Årshjul med barnens aktiviteter', size: 'large' },
  { src: galleryLeafCrown, alt: 'Lövkrona gjord av höstlöv', size: 'small' },
  { src: galleryPainting, alt: 'Barn målar med vattenfärger', size: 'wide' },
  { src: galleryHandsWool, alt: 'Barn tovar ull tillsammans', size: 'small' },
];

const sizeClasses: Record<string, string> = {
  small: 'col-span-1 row-span-1 aspect-square',
  large: 'col-span-2 row-span-2 aspect-square',
  tall: 'col-span-1 row-span-2 aspect-[3/4]',
  wide: 'col-span-2 row-span-1 aspect-[16/9]',
};

const GallerySection = () => {
  return (
    <section id="galleri" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Galleri
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[150px] md:auto-rows-[180px] lg:auto-rows-[200px] gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden shadow-soft ${sizeClasses[image.size]} hover:shadow-card transition-shadow duration-300`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
