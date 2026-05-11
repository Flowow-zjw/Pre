import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, X } from 'lucide-react';

interface ExpandableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ExpandableImage({ src, alt, className = '' }: ExpandableImageProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div 
        className={`relative group cursor-zoom-in flex items-center justify-center ${className}`} 
        onClick={() => setIsExpanded(true)}
      >
        <img src={src} alt={alt} className={`w-full h-full object-contain rounded-inherit`} />
        
        {/* Hover overlay with button */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all rounded-inherit flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 bg-black/60 p-3 rounded-full backdrop-blur-sm pointer-events-none">
              <ZoomIn className="w-6 h-6 text-white" />
            </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
          >
            <motion.img 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={src} 
              alt={alt} 
              className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl" 
            />
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 bg-black/50 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
            >
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
