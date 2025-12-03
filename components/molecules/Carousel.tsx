import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode;
  title: string;
}

export const Carousel: React.FC<CarouselProps> = ({ children, title }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.8;
      
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full my-6 group relative">
      <div className="flex justify-between items-center mb-4 px-1">
        <h3 className="font-bold text-xl text-sky-700 dark:text-sky-400">{title}</h3>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-sm hover:bg-sky-50 dark:hover:bg-gray-700 text-sky-600 dark:text-sky-400 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-sm hover:bg-sky-50 dark:hover:bg-gray-700 text-sky-600 dark:text-sky-400 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory scrollbar-hide px-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {React.Children.map(children, (child) => (
          <div className="flex-none w-[260px] md:w-[280px] snap-center">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
