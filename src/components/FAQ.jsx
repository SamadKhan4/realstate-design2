import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { PlusIcon, MinusIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';
import { faqs, project } from '../data/site';

export function FAQ() {
  const [open, setOpen] = useState(0);
  const reduced = useReducedMotion();

  return (
    <section id="faq" className="bg-bone py-16 sm:py-24 lg:py-[120px]">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeader index="13" eyebrow="FAQ" title="Everything You Need to Know Before Buying" />
            <Reveal delay={0.08}>
              <div className="mt-10 rounded-[22px] border border-line bg-white p-7">
                <p className="text-[14px] leading-relaxed text-ink">
                  Talk to our Hingoli project advisory team
                </p>
                <p className="mt-2 text-[12.5px] text-muted">{project.workingHours}</p>
                <div className="mt-6 grid gap-2.5">
                  <a
                    href={project.phoneHref}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-forest px-5 text-[13px] font-medium text-bone transition-colors duration-200 ease-lux hover:bg-night">
                    
                    <PhoneIcon aria-hidden="true" className="h-4 w-4" /> {project.phone}
                  </a>
                  <a
                    href={project.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-ink/20 px-5 text-[13px] font-medium text-ink transition-colors duration-200 ease-lux hover:border-ink/45">
                    
                    <MessageCircleIcon aria-hidden="true" className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <dl className="border-t border-line">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div key={faq.q} className="border-b border-line">
                    <dt>
                      <button
                        type="button"
                        id={`faq-button-${i}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-start justify-between gap-6 py-6 text-left">
                        
                        <span className="font-serif text-[21px] leading-[1.3] text-ink sm:text-[25px]">
                          {faq.q}
                        </span>
                        <span
                          aria-hidden="true"
                          className={[
                          'mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ease-lux',
                          isOpen ? 'border-forest bg-forest text-bone' : 'border-line text-ink'].
                          join(' ')}>
                          
                          {isOpen ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
                        </span>
                      </button>
                    </dt>
                    <AnimatePresence initial={false}>
                      {isOpen &&
                      <motion.dd
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-button-${i}`}
                        initial={reduced ? undefined : { height: 0, opacity: 0 }}
                        animate={reduced ? undefined : { height: 'auto', opacity: 1 }}
                        exit={reduced ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden">
                        
                          <p className="max-w-2xl pb-7 pr-12 text-[14.5px] leading-[1.85] text-muted">
                            {faq.a}
                          </p>
                        </motion.dd>
                      }
                    </AnimatePresence>
                  </div>);

              })}
            </dl>
          </div>
        </div>
      </div>
    </section>);

}
