import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';
import { specifications } from '../data/site';

export function Specifications() {
  return (
    <section className="bg-sand py-16 sm:py-24 lg:py-[120px]">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <SectionHeader
          index="03"
          eyebrow="Project Specifications"
          title="The Measured Detail Behind 25 Acres"
          subtitle="Every figure below is registered, approved and ready for inspection at the Hingoli site office." />
        

        <div className="mt-12 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {specifications.map((spec, i) =>
          <Reveal
            key={spec.label}
            delay={i % 4 * 0.05}
            className="border-b border-line px-0 py-8 sm:px-7 sm:[&:nth-child(odd)]:pl-0 lg:px-7 lg:first:pl-0 lg:[&:nth-child(4n+1)]:pl-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0">
            
              <p className="eyebrow text-muted">{spec.label}</p>
              <p className="mt-4 font-serif text-[30px] leading-[1.1] text-ink lg:text-[32px]">
                {spec.value}
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">{spec.support}</p>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}
