import { useState } from 'react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/SectionTitle';
import { useLenis } from '@/hooks/useLenis';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { galleryImages } from '@/data/gymData';

import heroGym from '@/assets/hero-gym.jpg';
import gymInterior from '@/assets/gym-interior.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';

const allImages = [
  { id: '1', src: gallery1, alt: 'Weight training area', category: 'equipment' },
  { id: '2', src: gallery2, alt: 'Group fitness class', category: 'classes' },
  { id: '3', src: gallery3, alt: 'Boxing area', category: 'equipment' },
  { id: '4', src: gymInterior, alt: 'Main gym floor', category: 'facility' },
  { id: '5', src: heroGym, alt: 'Power training', category: 'training' },
  { id: '6', src: gallery1, alt: 'Equipment zone', category: 'equipment' },
  { id: '7', src: gallery2, alt: 'Cardio session', category: 'classes' },
  { id: '8', src: gallery3, alt: 'Combat training', category: 'training' },
];

const categories = ['all', 'equipment', 'classes', 'facility', 'training'];

const Gallery = () => {
  useLenis();
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const gridRef = useScrollAnimation<HTMLDivElement>({ animation: 'stagger', staggerAmount: 0.1 });

  const filteredImages = activeCategory === 'all'
    ? allImages
    : allImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroGym}
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Space
          </span>
          <h1 className="text-5xl md:text-7xl font-heading text-foreground mb-4">
            THE <span className="text-primary">POWERFIT</span> EXPERIENCE
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a virtual tour of our state-of-the-art facility.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-gym">
          <SectionTitle
            subtitle="Gallery"
            title="See Our Facility"
            description="Premium equipment, spacious layouts, and an atmosphere built for results."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-muted-foreground hover:text-foreground border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {filteredImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className={`img-zoom cursor-pointer group relative overflow-hidden rounded-lg ${
                  index % 5 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    index % 5 === 0 ? 'h-[500px]' : 'h-64'
                  }`}
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-500 flex items-center justify-center">
                  <span className="text-foreground font-heading text-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground text-4xl font-light hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
