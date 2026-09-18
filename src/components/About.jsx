import { CheckIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { ButtonLink } from './ui/Button';
import { about, images, project } from '../data/site';

export function About() {
  return (
    <section id="overview" className="bg-bone py-16 sm:py-24 lg:py-[120px]">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="overflow-hidden rounded-[24px] border border-line">
                <img
                  src={images.about}
                  alt="Modern luxury villa architecture within the Azgari gated community"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover" />
                
              </div>
              <div className="absolute -right-3 bottom-8 hidden rounded-xl border border-line bg-bone/95 px-5 py-4 shadow-soft backdrop-blur-sm lg:block">
                <p className="eyebrow text-muted">Plot Sizes</p>
                <p className="mt-1.5 font-serif text-[22px] leading-none text-ink">150–300 Sq. Yards</p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 text-forest">
                <span className="eyebrow opacity-70">01</span>
                <span className="h-px w-8 bg-forest/30" />
                <span className="eyebrow">{about.eyebrow}</span>
              </div>
              <h2 className="mt-5 max-w-xl font-serif text-[34px] leading-[1.05] tracking-[-0.01em] text-ink sm:text-[46px] lg:text-[56px]">
                {about.heading}
              </h2>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-muted">{about.description}</p>
            </Reveal>

            <Reveal delay={0.08} className="mt-10 border-t border-line pt-8">
              <div className="grid gap-6 sm:grid-cols-2">
                {about.trust.map((item) =>
                <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest/10">
                      <CheckIcon aria-hidden="true" className="h-3.5 w-3.5 text-forest" />
                    </span>
                    <div>
                      <p className="text-[15px] font-medium text-ink">{item}</p>
                      <p className="mt-1 text-[12.5px] text-muted">
                        {item === '100% Clear Title' ?
                      `MahaRERA ${project.rera}` :
                      'At our Hingoli sales experience centre'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.12} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#register" withArrow>
                Schedule a Private Site Tour
              </ButtonLink>
              <ButtonLink href="#layout" variant="secondary" withArrow>
                View Master Layout
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}
