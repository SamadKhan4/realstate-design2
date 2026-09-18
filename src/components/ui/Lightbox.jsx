import { useCallback, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

export function Lightbox({ images, index, onClose, onChange, label = 'Image viewer' }) {
  const closeRef = useRef(null);
  const open = index !== null;

  const step = useCallback(
    (delta) => {
      if (index === null) return;
      onChange((index + delta + images.length) % images.length);
    },
    [index, images.length, onChange]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose, step]);

  const current = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {open && current &&
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="fixed inset-0 z-[100] flex flex-col bg-night/96 backdrop-blur-sm">
        
          <div className="flex items-center justify-between px-5 py-5 sm:px-8">
            <p className="eyebrow text-bone/60">
              {index !== null ? `${index + 1} / ${images.length}` : ''}
            </p>
            <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-bone transition-colors duration-200 ease-lux hover:bg-white/10">
            
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-6 sm:px-14">
            <motion.img
            key={current.src + String(index)}
            src={current.src}
            alt={current.alt}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="max-h-full max-w-full rounded-lg object-contain" />
          

            {images.length > 1 &&
          <>
                <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-night/60 text-bone transition-colors duration-200 ease-lux hover:bg-white/10 sm:left-4">
              
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>
                <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next image"
              className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-night/60 text-bone transition-colors duration-200 ease-lux hover:bg-white/10 sm:right-4">
              
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </>
          }
          </div>

          <p className="px-5 pb-8 text-center text-[13px] text-bone/60 sm:px-8">{current.alt}</p>
        </motion.div>
      }
    </AnimatePresence>);

}
