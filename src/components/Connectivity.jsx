import { useState } from 'react';
import { CopyIcon, CheckIcon, NavigationIcon, PhoneIcon, MaximizeIcon, ShieldCheckIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';
import { project } from '../data/site';

export function Connectivity() {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(project.addressFull);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="location" className="bg-bone py-16 sm:py-24 lg:py-[120px]">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <SectionHeader
          index="09"
          eyebrow="Location & Connectivity"
          title="Beside NH-161, Minutes From MIDC Hingoli" />
        

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[24px] border border-line bg-sand">
              <iframe
                title="Map showing Azgari Real Estate project location in Hingoli, Maharashtra"
                src={project.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[380px] w-full border-0 sm:h-[480px] lg:h-[560px]" />
              
              <a
                href={project.directionsHref}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 right-4 inline-flex h-11 items-center gap-2 rounded-xl border border-line bg-bone/95 px-4 text-[12.5px] font-medium text-ink shadow-soft backdrop-blur-sm transition-colors duration-200 ease-lux hover:bg-white">
                
                <MaximizeIcon aria-hidden="true" className="h-4 w-4" />
                Full Screen
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-[24px] border border-line bg-white p-7 sm:p-9">
              <p className="eyebrow text-forest">Project Location</p>
              <address className="mt-5 not-italic">
                {project.addressLines.map((line, i) =>
                <span
                  key={line}
                  className={
                  i === 0 ?
                  'block font-serif text-[26px] leading-tight text-ink' :
                  'mt-1.5 block text-[14px] leading-relaxed text-muted'
                  }>
                  
                    {line}
                  </span>
                )}
              </address>

              <dl className="mt-8 divide-y divide-line border-t border-line">
                {[
                ['Highway Access', 'Beside Nanded-Hingoli Highway (NH-161)'],
                ['Investment Corridor', 'Near MIDC Growth Zone, Hingoli'],
                ['Coordinates', `${project.coordinates.lat}, ${project.coordinates.lng}`]].
                map(([k, v]) =>
                <div key={k} className="py-4">
                    <dt className="eyebrow text-muted">{k}</dt>
                    <dd className="mt-2 text-[13.5px] text-ink">{v}</dd>
                  </div>
                )}
              </dl>

              <div className="mt-6 flex items-start gap-2.5 rounded-xl bg-sand px-4 py-3.5">
                <ShieldCheckIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                <p className="text-[12.5px] leading-relaxed text-ink">
                  MahaRERA Registered · RERA No: {project.rera} · 100% Clear Title, Ready for Registration
                </p>
              </div>

              <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={copyAddress}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-ink/20 px-4 text-[13px] font-medium text-ink transition-colors duration-200 ease-lux hover:border-ink/45">
                  
                  {copied ?
                  <CheckIcon aria-hidden="true" className="h-4 w-4 text-forest" /> :

                  <CopyIcon aria-hidden="true" className="h-4 w-4" />
                  }
                  {copied ? 'Address Copied' : 'Copy Full Address'}
                </button>
                <a
                  href={project.directionsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-forest px-4 text-[13px] font-medium text-bone transition-colors duration-200 ease-lux hover:bg-night">
                  
                  <NavigationIcon aria-hidden="true" className="h-4 w-4" /> Get Directions
                </a>
                <a
                  href={project.phoneHref}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-ink/20 px-4 text-[13px] font-medium text-ink transition-colors duration-200 ease-lux hover:border-ink/45 sm:col-span-2">
                  
                  <PhoneIcon aria-hidden="true" className="h-4 w-4" /> Call Site Desk
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}
