import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const bannerImages = [
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1472851294608-415522f96313?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2000"
];

export function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  return (
    <div className="bg-gradient-to-b from-[#fff159] via-[#f7f7f7] to-gray-100 pb-8">
      <div className="container mx-auto max-w-[1200px] px-4 lg:px-0">
        <div className="relative overflow-hidden rounded shadow-sm">
          <div className="relative h-[250px] w-full bg-gray-200 lg:h-[340px]">
             <img 
               src={bannerImages[currentIndex]} 
               alt="Banner Promocional" 
               className="h-full w-full object-cover transition-opacity duration-500"
             />
             <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-gray-100 to-transparent"></div>
             
             <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 flex h-16 w-8 -translate-y-1/2 items-center justify-center rounded-r-full bg-white/50 shadow-md hover:bg-white transition-colors"
             >
                <ChevronLeft className="text-blue-500" />
             </button>
             
             <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 flex h-16 w-8 -translate-y-1/2 items-center justify-center rounded-l-full bg-white/50 shadow-md hover:bg-white transition-colors"
             >
                <ChevronRight className="text-blue-500" />
             </button>

             <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
               {bannerImages.map((_, index) => (
                 <button
                   key={index}
                   onClick={() => setCurrentIndex(index)}
                   className={`h-2 w-2 rounded-full shadow-sm transition-colors ${
                     index === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white"
                   }`}
                 />
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}