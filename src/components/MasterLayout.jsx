import { useState } from 'react';
import { MaximizeIcon, MapPinIcon, ShieldCheckIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';
import { Lightbox } from './ui/Lightbox';
import { ButtonLink } from './ui/Button';
import { images, masterLayoutLegend, project } from '../data/site';

const toneClass = {
  forest: 'bg-forest',
  green: 'bg-[#7C8B5E]',
  ink: 'bg-ink/70',
  champagne: 'bg-champagne'
};

const layoutImages = [
{ src: images.masterplan, alt: '25-acre architectural master layout plan of Azgari Real Estate, Hingoli' }];


export function MasterLayout() {
  const [open, setOpen] = useState(null);

  return (
    <section id="layout" className="bg-bone py-16 sm:py-24 lg:py-[120px]">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <SectionHeader
          index="05"
          eyebrow="Strategic Location & Master Layout"
          title="National Connectivity & 25-Acre Architectural Master Plan" />
        

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <figure className="group relative overflow-hidden rounded-[24px] border border-line bg-sand">
              <img
                src={images.masterplan}
                alt="Master layout plan showing residential plots, parks, road grid and entrance gate"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-lux group-hover:scale-[1.02]" />
              
              <button
                type="button"
                onClick={() => setOpen(0)}
                className="absolute bottom-4 right-4 inline-flex h-11 items-center gap-2 rounded-xl border border-line bg-bone/95 px-4 text-[12.5px] font-medium text-ink shadow-soft backdrop-blur-sm transition-colors duration-200 ease-lux hover:bg-white">
                
                <MaximizeIcon aria-hidden="true" className="h-4 w-4" />
                Open Full Screen
              </button>
            </figure>

            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
              {masterLayoutLegend.map((item) =>
              <li key={item.label} className="flex items-center gap-2.5 text-[12.5px] text-muted">
                  <span
                  aria-hidden="true"
                  className={`h-2 w-2 shrink-0 rounded-full ${toneClass[item.tone]}`} />
                
                  {item.label}
                </li>
              )}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-[22px] border border-line bg-white p-7">
                <p className="eyebrow text-muted">Selected State</p>
                <h3 className="mt-3 font-serif text-[32px] leading-none text-ink">Maharashtra</h3>
                <p className="mt-4 text-[13.5px] leading-[1.8] text-muted">
                  Active project: {project.brand} — {project.positioning}
                </p>

                <dl className="mt-7 divide-y divide-line border-t border-line">
                  {[
                  ['Project', 'Azgari Real Estate'],
                  ['District', 'Hingoli, Maharashtra'],
                  ['Corridor', 'NH-161 Growth Corridor, Near MIDC'],
                  ['Scale', '25 Acres · 280 Units'],
                  ['Status', 'Ready for Registration']].
                  map(([k, v]) =>
                  <div key={k} className="flex items-baseline justify-between gap-6 py-3.5">
                      <dt className="eyebrow text-muted">{k}</dt>
                      <dd className="text-right text-[13.5px] font-medium text-ink">{v}</dd>
                    </div>
                  )}
                </dl>

                <div className="mt-6 flex items-center gap-2 rounded-xl bg-sand px-4 py-3">
                  <ShieldCheckIcon aria-hidden="true" className="h-4 w-4 shrink-0 text-forest" />
                  <p className="text-[12.5px] text-ink">MahaRERA Registered · RERA No: {project.rera}</p>
                </div>
              </div>

              <div className="rounded-[22px] border border-line bg-sand/70 p-7">
                <p className="eyebrow text-muted">India Availability</p>
                <ul className="mt-5 space-y-3.5">
                  <li className="flex items-center justify-between gap-4 border-b border-line pb-3.5">
                    <span className="flex items-center gap-2.5 text-[14px] font-medium text-ink">
                      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-forest" />
                      Available Project Locations
                    </span>
                    <span className="text-[12.5px] text-muted">Maharashtra</span>
                  </li>
                  <li className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-2.5 text-[14px] font-medium text-muted">
                      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-champagne" />
                      Upcoming Locations
                    </span>
                    <span className="text-[12.5px] text-muted">To be announced</span>
                  </li>
                </ul>
                <div className="mt-6 flex items-center gap-2 text-[12.5px] text-muted">
                  <MapPinIcon aria-hidden="true" className="h-4 w-4 text-forest" />
                  {project.corridor}
                </div>
                <ButtonLink href="#register" variant="secondary" withArrow size="md" className="mt-6">
                  Request Layout Copy
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Lightbox
        images={layoutImages}
        index={open}
        onChange={setOpen}
        onClose={() => setOpen(null)}
        label="Master layout plan viewer" />
      
    </section>);

}
