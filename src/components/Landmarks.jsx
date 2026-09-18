import { useState } from 'react';
import { ClockIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';
import { landmarkFilters, landmarks } from '../data/site';

export function Landmarks() {
  const [filter, setFilter] = useState(landmarkFilters[0]);

  const visible =
  filter === 'All Landmarks' ? landmarks : landmarks.filter((l) => l.category === filter);

  return (
    <section className="bg-bone pb-16 sm:pb-24 lg:pb-[120px]">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            index="10"
            eyebrow="Nearby Landmarks"
            title="Everything Essential, Within Minutes"
            className="lg:max-w-xl" />
          
          <Reveal delay={0.06}>
            <div
              role="group"
              aria-label="Filter landmarks"
              className="flex flex-wrap gap-2 rounded-full border border-line bg-white p-1.5">
              
              {landmarkFilters.map((option) => {
                const active = filter === option;
                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(option)}
                    className={[
                    'rounded-full px-4 py-2 text-[12px] font-medium tracking-tight transition-colors duration-200 ease-lux',
                    active ? 'bg-forest text-bone' : 'text-muted hover:text-ink'].
                    join(' ')}>
                    
                    {option}
                  </button>);

              })}
            </div>
          </Reveal>
        </div>

        <ul className="mt-10 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((item, i) =>
          <Reveal
            as="li"
            key={item.name}
            delay={i % 4 * 0.04}
            className="border-b border-line py-7 sm:px-6 sm:[&:nth-child(odd)]:pl-0 lg:[&:nth-child(4n+1)]:pl-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0">
            
              <p className="eyebrow text-champagne">{item.category}</p>
              <p className="mt-4 min-h-[44px] text-[15px] font-medium leading-snug text-ink">{item.name}</p>
              <p className="mt-5 font-serif text-[26px] leading-none text-ink">{item.distance}</p>
              <p className="mt-3 flex items-center gap-1.5 text-[12.5px] text-muted">
                <ClockIcon aria-hidden="true" className="h-3.5 w-3.5" />
                {item.time}
              </p>
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}
