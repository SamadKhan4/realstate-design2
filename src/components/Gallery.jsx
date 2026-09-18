import { useState } from 'react';
import { ExpandIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';
import { Lightbox } from './ui/Lightbox';
import { gallery, galleryMeta } from '../data/site';

const spans = [
'sm:col-span-2 sm:row-span-2',
'sm:col-span-2',
'sm:row-span-2',
'sm:col-span-1',
'sm:col-span-2',
'sm:col-span-1',
'sm:col-span-1',
'sm:col-span-2',
'sm:col-span-1',
'sm:col-span-1',
'sm:col-span-1',
'sm:col-span-2'];


export function Gallery() {
  const [open, setOpen] = useState(null);

  return (
    <section id="gallery" className="bg-sand py-16 sm:py-24 lg:py-[120px]">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            index="08"
            eyebrow="Project Gallery"
            title="The Development, Photographed On Site"
            className="lg:max-w-2xl" />
          
          <Reveal delay={0.06}>
            <p className="text-[12.5px] uppercase tracking-[0.14em] text-muted">{galleryMeta.count}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-1 gap-3 sm:grid-cols-4 sm:auto-rows-[200px] lg:mt-16 lg:auto-rows-[230px]">
          {gallery.map((image, i) =>
          <Reveal
            key={`${image.src}-${i}`}
            delay={i % 4 * 0.05}
            className={`${spans[i] ?? ''} min-h-0`}>
            
              <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Open image ${i + 1} of ${gallery.length}: ${image.alt}`}
              className="group relative h-full w-full overflow-hidden rounded-[18px] border border-line bg-white">
              
                <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-lux group-hover:scale-[1.04]" />
              
                <span
                aria-hidden="true"
                className="absolute inset-0 bg-night/0 transition-colors duration-300 ease-lux group-hover:bg-night/45" />
              
                <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-4 text-[12px] font-medium text-bone opacity-0 transition-opacity duration-300 ease-lux group-hover:opacity-100">
                
                  <ExpandIcon className="h-4 w-4" /> View Image
                </span>
              </button>
            </Reveal>
          )}
        </div>
      </div>

      <Lightbox
        images={gallery}
        index={open}
        onChange={setOpen}
        onClose={() => setOpen(null)}
        label="Project gallery viewer" />
      
    </section>);

}
