import {
  BuildingIcon,
  WavesIcon,
  CctvIcon,
  CableIcon,
  TreesIcon,
  DropletsIcon,
  DumbbellIcon,
  SunIcon,
  BlocksIcon,
  CompassIcon } from
'lucide-react';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';
import { amenities, images } from '../data/site';

const icons = [
BuildingIcon,
WavesIcon,
CctvIcon,
CableIcon,
TreesIcon,
DropletsIcon,
DumbbellIcon,
SunIcon,
BlocksIcon,
CompassIcon];


export function Amenities() {
  return (
    <section id="amenities" className="bg-bone py-16 sm:py-24 lg:py-[120px]">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            index="07"
            eyebrow="Amenities"
            title="A Lifestyle Planned Around 40% Open Space"
            className="lg:max-w-2xl" />
          
          <Reveal delay={0.06}>
            <span className="inline-flex items-center rounded-full border border-line bg-white px-4 py-2 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-muted">
              Standard In Layout
            </span>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-6">
            <figure className="overflow-hidden rounded-[24px] border border-line">
              <img
                src={images.amenity}
                alt="15,000 sq.ft clubhouse with swimming pool and kids deck at dusk"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover lg:aspect-[3/4]" />
              
            </figure>
            <figcaption className="mt-4 flex items-baseline gap-3 text-[12.5px] text-muted">
              <span className="eyebrow text-champagne">Clubhouse</span>
              <span>15,000 Sq.Ft. of curated community space</span>
            </figcaption>
          </Reveal>

          <div className="lg:col-span-6">
            <ul className="grid grid-cols-1 border-t border-line sm:grid-cols-2">
              {amenities.map((item, i) => {
                const Icon = icons[i];
                return (
                  <Reveal
                    as="li"
                    key={item}
                    delay={i % 4 * 0.04}
                    className="flex items-center gap-4 border-b border-line py-5 sm:odd:pr-6 sm:even:border-l sm:even:pl-6">
                    
                    <Icon aria-hidden="true" className="h-5 w-5 shrink-0 stroke-[1.2] text-forest" />
                    <span className="text-[14px] leading-snug text-ink">{item}</span>
                  </Reveal>);

              })}
            </ul>
          </div>
        </div>
      </div>
    </section>);

}
