import { RulerIcon, CompassIcon, LandmarkIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';
import { ButtonLink } from './ui/Button';
import { plots } from '../data/site';

const badgeTone = {
  'Fast Selling': 'border-champagne/45 bg-champagne/12 text-[#8A6E2F]',
  Available: 'border-forest/25 bg-forest/[0.07] text-forest',
  'Limited Units': 'border-[#9a3b2f]/25 bg-[#9a3b2f]/[0.07] text-[#9a3b2f]',
  Exclusive: 'border-ink/20 bg-ink/[0.05] text-ink'
};

export function Plots() {
  return (
    <section id="plots" className="bg-sand py-16 sm:py-24 lg:py-[120px]">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <SectionHeader
          index="06"
          eyebrow="Plot Configurations"
          title="Four Configurations, One Address"
          subtitle="Direct developer pricing with zero brokerage. Bank loan facility available up to 75% across all configurations." />
        

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {plots.map((plot, i) =>
          <Reveal
            key={plot.name}
            delay={i * 0.06}
            as="article"
            className={[
            'group flex flex-col rounded-[22px] border bg-white p-7 transition-[transform,border-color,box-shadow] duration-300 ease-lux hover:-translate-y-1.5 hover:shadow-soft',
            plot.availability === 'Limited Units' || plot.availability === 'Exclusive' ?
            'border-ink/15' :
            'border-line'].
            join(' ')}>
            
              <span
              className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${badgeTone[plot.availability]}`}>
              
                {plot.availability}
              </span>

              <h3 className="mt-6 text-[15px] font-medium tracking-tight text-ink">{plot.name}</h3>
              <p className="mt-2 font-serif text-[34px] leading-none text-ink">{plot.size}</p>

              <dl className="mt-7 space-y-3.5 border-t border-line pt-6 text-[13px]">
                <div className="flex items-center gap-2.5">
                  <RulerIcon aria-hidden="true" className="h-4 w-4 shrink-0 stroke-[1.25] text-muted" />
                  <dt className="sr-only">Dimensions</dt>
                  <dd className="text-ink">{plot.dimensions}</dd>
                </div>
                <div className="flex items-center gap-2.5">
                  <CompassIcon aria-hidden="true" className="h-4 w-4 shrink-0 stroke-[1.25] text-muted" />
                  <dt className="sr-only">Facing</dt>
                  <dd className="text-ink">{plot.facing}</dd>
                </div>
                <div className="flex items-center gap-2.5">
                  <LandmarkIcon aria-hidden="true" className="h-4 w-4 shrink-0 stroke-[1.25] text-muted" />
                  <dt className="sr-only">Loan</dt>
                  <dd className="text-ink">{plot.loan}</dd>
                </div>
              </dl>

              <p className="mt-6 flex-1 text-[13px] leading-[1.75] text-muted">{plot.description}</p>

              <div className="mt-7 border-t border-line pt-6">
                <p className="eyebrow text-muted">Starting Price</p>
                <p className="mt-2 font-serif text-[30px] leading-none text-forest">{plot.price}</p>
                <ButtonLink href="#register" withArrow fullWidth size="md" className="mt-6">
                  Enquire This Plot
                </ButtonLink>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}
