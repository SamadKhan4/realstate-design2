import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { CheckIcon, MapPinIcon, ShieldCheckIcon } from 'lucide-react';
import { ButtonLink } from './ui/Button';
import { LeadForm } from './LeadForm';
import { project, heroTrust, heroStats, images } from '../data/site';

export function Hero() {
  const heroRef = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 54]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.86], [1, 0.25]);
  const rise = (delay) =>
  reduced ?
  {} :
  {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1], delay }
  };

  return (
    <section ref={heroRef} id="top" className="relative isolate overflow-hidden bg-night">
      <motion.div
        className="absolute -inset-x-4 -inset-y-10"
        style={reduced ? undefined : { y: imageY, scale: imageScale }}>
        <img
          src={images.hero}
          alt="Aerial view of the Azgari Real Estate 25-acre gated plotted community in Hingoli, Maharashtra"
          className="h-full w-full object-cover" />
        
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,23,19,0.92),rgba(17,23,19,0.72)_45%,rgba(17,23,19,0.35))]" />
        
      </motion.div>
      <div aria-hidden="true" className="hero-orb hero-orb-one" />
      <div aria-hidden="true" className="hero-orb hero-orb-two" />

      <motion.div
        className="relative mx-auto max-w-shell px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-24 lg:pt-36"
        style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7 lg:min-h-[62vh]">
            <motion.div {...rise(0.05)} className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-champagne/35 bg-white/[0.06] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.12em] text-champagne backdrop-blur-sm">
                <ShieldCheckIcon aria-hidden="true" className="h-3.5 w-3.5" />
                {project.reraLabel}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.12em] text-bone/80 backdrop-blur-sm">
                <MapPinIcon aria-hidden="true" className="h-3.5 w-3.5" />
                {project.locationBadge}
              </span>
            </motion.div>

            <motion.h1
              {...rise(0.12)}
              className="mt-7 font-serif text-[46px] leading-[0.98] tracking-[-0.015em] text-bone sm:text-[68px] lg:text-[84px]">
              
              Azgari Real Estate
            </motion.h1>

            <motion.p
              {...rise(0.18)}
              className="mt-5 max-w-xl font-serif text-[22px] leading-[1.25] text-champagne sm:text-[28px]">
              
              {project.positioning}
            </motion.p>

            <motion.p {...rise(0.22)} className="mt-5 flex items-center gap-2 text-[13px] text-bone/70">
              <MapPinIcon aria-hidden="true" className="h-4 w-4 text-champagne/80" />
              {project.corridor}
            </motion.p>

            <motion.p
              {...rise(0.26)}
              className="mt-6 max-w-xl text-[15px] leading-[1.8] text-bone/70">
              
              {project.description}
            </motion.p>

            <motion.ul
              {...rise(0.32)}
              className="mt-8 grid max-w-xl grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              
              {heroTrust.map((item) =>
              <li key={item} className="flex items-center gap-2.5 text-[13.5px] text-bone/85">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-champagne/40">
                    <CheckIcon aria-hidden="true" className="h-3 w-3 text-champagne" />
                  </span>
                  {item}
                </li>
              )}
            </motion.ul>

            <motion.div {...rise(0.38)} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#register" variant="light" withArrow className="sm:w-auto">
                Get Launch Price &amp; Sheet
              </ButtonLink>
              <ButtonLink
                href="#layout"
                variant="secondary"
                withArrow
                className="!border-white/25 !text-bone hover:!border-white/50 hover:!bg-white/[0.06]">
                
                View Master Layout
              </ButtonLink>
            </motion.div>

            <motion.dl
              {...rise(0.44)}
              className="mt-12 grid max-w-2xl grid-cols-1 border-t border-white/12 sm:grid-cols-3">
              
              {heroStats.map((stat) =>
              <div
                key={stat.label}
                className="border-b border-white/12 py-5 sm:border-b-0 sm:border-r sm:pr-6 sm:last:border-r-0 sm:[&+div]:pl-6">
                
                  <dd className="font-serif text-[30px] leading-none text-bone sm:text-[34px]">
                    {stat.value}
                  </dd>
                  <dt className="eyebrow mt-3 text-bone/50">{stat.label}</dt>
                </div>
              )}
            </motion.dl>
          </div>

          <motion.div
            {...reduced ?
            {} :
            {
              initial: { opacity: 0, y: 28 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.2 }
            }}
            className="lg:col-span-5">
            
            <LeadForm />
          </motion.div>
        </div>
      </motion.div>
    </section>);

}
