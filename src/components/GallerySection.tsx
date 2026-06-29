import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Brothers together
import brothersKotaInterview from "@/assets/brothers-kota-interview.jpg";
import brothersHelmetsPortrait from "@/assets/brothers-helmets-portrait.jpg";
import brothersTrophies from "@/assets/brothers-trophies.jpg";
import brothersDivisionBoard from "@/assets/brothers-division-board.jpg";

// Lorenzo photos
import lorenzoVictory from "@/assets/lorenzo-victory.jpg";
import lorenzoMegaloop from "@/assets/lorenzo-megaloop-podium.jpg";
import lorenzoTarifa1 from "@/assets/lorenzo-tarifa-1.jpg";
import lorenzoTarifa2 from "@/assets/lorenzo-tarifa-2.jpg";
import lorenzoTrick from "@/assets/lorenzo-trick.jpg";
import lorenzoCelebration from "@/assets/lorenzo-celebration.jpg";

// Leonardo photos
import leonardoPortrait from "@/assets/leonardo-portrait-bw.jpg";
import leonardoBigair1 from "@/assets/leonardo-bigair-1.jpg";
import leonardoBigair2 from "@/assets/leonardo-bigair-2.jpg";
import leonardoCompetition from "@/assets/leonardo-competition.jpg";
import leonardoLaunch from "@/assets/leonardo-launch.jpg";
import leonardoBeach from "@/assets/leonardo-beach.jpg";

// Gallery images - balanced mix of brothers, Lorenzo, and Leonardo
const defaultImages = [
  { src: brothersKotaInterview, alt: "Lorenzo e Leonardo - Red Bull KOTA Interview" },
  { src: lorenzoVictory, alt: "Lorenzo Casati - Victory Celebration" },
  { src: leonardoPortrait, alt: "Leonardo Casati - Portrait" },
  { src: brothersHelmetsPortrait, alt: "Casati Brothers - Mystic Helmets" },
  { src: leonardoBigair1, alt: "Leonardo Casati - Big Air" },
  { src: lorenzoMegaloop, alt: "Lorenzo Casati - Megaloop Podium" },
  { src: brothersTrophies, alt: "Casati Brothers - Trophies on Beach" },
  { src: lorenzoTarifa1, alt: "Lorenzo Casati - Tarifa Action" },
  { src: leonardoCompetition, alt: "Leonardo Casati - Competition" },
  { src: brothersDivisionBoard, alt: "Casati Brothers - Competition Board" },
  { src: lorenzoTrick, alt: "Lorenzo Casati - Trick" },
  { src: leonardoBigair2, alt: "Leonardo Casati - Big Air Jump" },
  { src: lorenzoTarifa2, alt: "Lorenzo Casati - Tarifa Sunset" },
  { src: leonardoLaunch, alt: "Leonardo Casati - Launch" },
  { src: lorenzoCelebration, alt: "Lorenzo Casati - Celebration" },
  { src: leonardoBeach, alt: "Leonardo Casati - Beach Session" },
];

interface GallerySectionProps {
  images?: { src: string; alt: string }[];
}

const GallerySection = ({ images = defaultImages }: GallerySectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const goToPrevious = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1);
    }
  };
  
  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            EPIC <span className="text-primary">MOMENTS</span>
          </h2>
        </motion.div>

        {/* Gallery Grid - Dynamic layout based on image count */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.4) }}
              onClick={() => openLightbox(index)}
              className="cursor-pointer group relative overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover grayscale-img group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox with navigation */}
      {lightboxIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          
          {/* Previous button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 md:left-8 text-foreground hover:text-primary transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>
          
          {/* Image */}
          <img
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 md:right-8 text-foreground hover:text-primary transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>
          
          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground text-sm">
            {lightboxIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
