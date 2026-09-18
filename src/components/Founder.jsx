import { PhoneIcon, MessageCircleIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { founder, project, images } from '../data/site';

export function Founder() {
  return (
    <section className="bg-night text-bone py-16 sm:py-24 lg:py-[120px]">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-[24px] border border-white/10">
              <img
                src={images.founder}
                alt={`${founder.name}, ${founder.designation} of Azgari Real Estate`}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover" />
              
            </div>
          </Reveal>

          <div className="flex flex-col justify-center lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 text-champagne">
                <span className="eyebrow opacity-70">02</span>
                <span className="h-px w-8 bg-champagne/40" />
                <span className="eyebrow">{founder.eyebrow}</span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="relative mt-7">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-2 -top-12 select-none font-serif text-[150px] leading-none text-champagne/12 sm:-left-5 sm:text-[200px]">
                  
                  “
                </span>
                <blockquote className="relative font-serif text-[27px] leading-[1.28] tracking-[-0.01em] text-bone sm:text-[38px] lg:text-[42px]">
                  {founder.quote}
                </blockquote>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-[15px] leading-[1.85] text-bone/60">{founder.paragraph}</p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-10 border-t border-white/12 pt-8">
                <p className="font-serif text-[26px] leading-none text-bone">{founder.name}</p>
                <p className="eyebrow mt-3 text-champagne">{founder.designation}</p>
                <p className="mt-2 text-[13px] text-bone/55">
                  {founder.company} · {founder.location}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div>
                  <p className="eyebrow text-bone/45">{founder.hotlineLabel}</p>
                  <a
                    href={project.phoneHref}
                    className="mt-2 block font-serif text-[26px] leading-none text-bone transition-colors duration-200 ease-lux hover:text-champagne">
                    
                    {project.phone}
                  </a>
                </div>
                <div className="flex flex-col gap-2.5 sm:flex-row">
                  <a
                    href={project.phoneHref}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-bone px-6 text-[13px] font-medium text-ink transition-colors duration-200 ease-lux hover:bg-white">
                    
                    <PhoneIcon aria-hidden="true" className="h-4 w-4" /> Call Wasim Ji
                  </a>
                  <a
                    href={project.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/25 px-6 text-[13px] font-medium text-bone transition-colors duration-200 ease-lux hover:border-champagne/60 hover:text-champagne">
                    
                    <MessageCircleIcon aria-hidden="true" className="h-4 w-4" /> WhatsApp Direct
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}
