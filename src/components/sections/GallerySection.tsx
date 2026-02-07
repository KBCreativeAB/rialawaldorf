import OptimizedImage from '@/components/OptimizedImage';
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
import galleryPlanting from '@/assets/gallery-planting.jpeg';

const galleryImages = [
  { src: outdoorPlay, alt: 'Barn som leker utomhus på stockar' },
  { src: yarnBasket, alt: 'Korg med färgglada garnnystan' },
  { src: woolScene, alt: 'Kreativt skapande med ull och naturmaterial' },
  { src: doughKneading, alt: 'Barnhänder som knådar deg' },
  { src: flowerPetals, alt: 'Torkade blommor på flätade korgar' },
  { src: galleryFoodPlate, alt: 'Hemlagad lunch med grönsaker' },
  { src: galleryCarrots, alt: 'Nypplockade morötter på höstlöv' },
  { src: galleryGrating, alt: 'Barn river morötter' },
  { src: galleryArtwork, alt: 'Årshjul med barnens aktiviteter' },
  { src: galleryLeafCrown, alt: 'Lövkrona gjord av höstlöv' },
  { src: galleryPainting, alt: 'Barn målar med vattenfärger' },
  { src: galleryHandsWool, alt: 'Barn tovar ull tillsammans' },
  { src: galleryPlanting, alt: 'Barn planterar frön i jorden' },
];

const GallerySection = () => {
  return (
    <section id="galleri" className="section-padding pb-4 md:pb-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Galleri
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-soft ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                widths={index === 0 ? [400, 700, 1000] : [300, 500]}
                sizes={index === 0 ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
                quality={75}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
