import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GallerySectionProps {
  gallery: string[];
  title: string;
  imageMap: Record<string, string>;
}

const GallerySection = ({ gallery, title, imageMap }: GallerySectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const displayedImages = isExpanded ? gallery : gallery.slice(0, 3);
  const remainingCount = gallery.length - 3;
  const hasMoreImages = gallery.length > 3;

  const getImageSrc = (img: string) => imageMap[img] || img;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Event <span className="gradient-text-reverse">Gallery</span>
      </h2>
      
      {/* Gallery Grid - responsive: 1 / 2 / 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {displayedImages.map((img, index) => {
            const isLastVisible = index === 2 && hasMoreImages && !isExpanded;
            
            return (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => {
                  if (isLastVisible) {
                    setIsExpanded(true);
                  } else {
                    openLightbox(index);
                  }
                }}
              >
                <img
                  src={getImageSrc(img)}
                  alt={`${title} - Photo ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Photo number badge */}
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-xl text-white text-sm font-medium">
                    Photo {index + 1}
                  </span>
                </div>
                
                {/* +X overlay on 3rd image */}
                {isLastVisible && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center transition-all group-hover:bg-black/70">
                    <div className="text-center">
                      <span className="text-white text-4xl md:text-5xl font-bold">
                        +{remainingCount}
                      </span>
                      <p className="text-white/80 text-sm mt-2 font-medium">View More</p>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Collapse button when expanded */}
      {isExpanded && hasMoreImages && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-center"
        >
          <button
            onClick={() => setIsExpanded(false)}
            className="px-6 py-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary font-semibold transition-all border border-primary/30"
          >
            Show Less
          </button>
        </motion.div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="max-w-[90vw] max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={getImageSrc(gallery[currentImageIndex])}
                alt={`${title} - Photo ${currentImageIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl text-white text-sm font-medium">
                  {currentImageIndex + 1} / {gallery.length}
                </span>
              </div>
            </motion.div>

            {/* Thumbnail strip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[80vw] overflow-x-auto pb-2 hidden md:flex">
              {gallery.map((img, index) => (
                <button
                  key={img}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all ${
                    index === currentImageIndex 
                      ? "ring-2 ring-primary scale-110" 
                      : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <img
                    src={getImageSrc(img)}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GallerySection;
