import { PhoneIcon, MessageCircleIcon, ArrowRightIcon, ClockIcon } from 'lucide-react';
import { navLinks, project, footer, founder } from '../data/site';

export function Footer() {
  return (
    <footer className="bg-night2 text-bone">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-bone">
                <span className="font-serif text-[17px] leading-none text-forest">A</span>
              </span>
              <span className="leading-tight">
                <span className="block font-serif text-[19px] tracking-[0.02em] text-bone">AZGARI</span>
                <span className="block text-[9px] font-medium uppercase tracking-[0.34em] text-bone/50">
                  Real Estate
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-[13.5px] leading-[1.85] text-bone/55">{footer.description}</p>
            <p className="mt-6 inline-flex items-center rounded-full border border-champagne/30 px-3.5 py-1.5 text-[11px] font-medium tracking-[0.12em] text-champagne">
              {project.reraLabel}
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
            <p className="eyebrow text-bone/40">Quick Links</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) =>
              <li key={link.href}>
                  <a
                  href={link.href}
                  className="text-[13.5px] text-bone/65 transition-colors duration-200 ease-lux hover:text-bone">
                  
                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="eyebrow text-bone/40">Leadership &amp; Advisory</p>
            <p className="mt-5 font-serif text-[22px] leading-tight text-bone">{founder.name}</p>
            <p className="mt-2 text-[12.5px] text-bone/55">{founder.designation}</p>
            <p className="mt-1 text-[12.5px] text-bone/45">
              {founder.company} · {founder.location}
            </p>
            <div className="mt-6 space-y-2.5">
              <a
                href={project.phoneHref}
                className="flex items-center gap-2.5 text-[13.5px] text-bone/75 transition-colors duration-200 ease-lux hover:text-champagne">
                
                <PhoneIcon aria-hidden="true" className="h-4 w-4" /> {project.phone}
              </a>
              <a
                href={project.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-[13.5px] text-bone/75 transition-colors duration-200 ease-lux hover:text-champagne">
                
                <MessageCircleIcon aria-hidden="true" className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={project.emailHref}
                className="block text-[13.5px] text-bone/75 transition-colors duration-200 ease-lux hover:text-champagne">
                
                {project.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-bone/40">Book Site Inspection</p>
            <p className="mt-5 text-[13.5px] leading-[1.8] text-bone/60">
              Complimentary executive chauffeur pick-and-drop for site visits to Hingoli.
            </p>
            <a
              href="#register"
              className="group mt-6 inline-flex h-12 items-center gap-2 rounded-xl bg-bone px-6 text-[13px] font-medium text-ink transition-colors duration-200 ease-lux hover:bg-white">
              
              Book Site Inspection
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 ease-lux group-hover:translate-x-1" />
              
            </a>
            <p className="mt-6 flex items-center gap-2 text-[12.5px] text-bone/50">
              <ClockIcon aria-hidden="true" className="h-3.5 w-3.5" /> {project.workingHours}
            </p>
            <address className="mt-4 not-italic text-[12.5px] leading-relaxed text-bone/45">
              {project.addressLines.slice(1).join(', ')}
            </address>
          </div>
        </div>

        <div className="mt-14 h-px bg-white/10" />

        <p className="mt-8 max-w-4xl text-[11.5px] leading-[1.8] text-bone/40">{footer.disclaimer}</p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-bone/50">{footer.copyright}</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footer.legalLinks.map((link) =>
            <li key={link.label}>
                <a
                href={link.href}
                className="text-[12px] text-bone/50 transition-colors duration-200 ease-lux hover:text-bone">
                
                  {link.label}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>);

}
