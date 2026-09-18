import { PhoneIcon, MessageCircleIcon, MailIcon, MapPinIcon, ArrowUpRightIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';
import { project } from '../data/site';

const methods = [
{
  icon: PhoneIcon,
  label: 'Direct Phone Call',
  value: project.phone,
  href: project.phoneHref,
  action: 'Call now'
},
{
  icon: MessageCircleIcon,
  label: 'WhatsApp Chat',
  value: project.phone,
  href: project.whatsappHref,
  action: 'Open WhatsApp',
  external: true
},
{
  icon: MailIcon,
  label: 'Official Email',
  value: project.email,
  href: project.emailHref,
  action: 'Send email'
},
{
  icon: MapPinIcon,
  label: 'Sales Experience Centre',
  value: 'Beside NH-161, Near MIDC Growth Zone, Hingoli, Maharashtra — 431513',
  href: project.directionsHref,
  action: 'Get directions',
  external: true
}];


export function Contact() {
  return (
    <section id="contact" className="bg-sand py-16 sm:py-24 lg:py-[120px]">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <SectionHeader
          index="12"
          eyebrow="Contact"
          title="Speak Directly With The Developer"
          subtitle="No intermediaries. Our Hingoli advisory desk responds on call, WhatsApp and email during working hours." />
        

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {methods.map((method, i) => {
            const Icon = method.icon;
            return (
              <Reveal key={method.label} delay={i * 0.06}>
                <a
                  href={method.href}
                  target={method.external ? '_blank' : undefined}
                  rel={method.external ? 'noreferrer' : undefined}
                  className="group flex h-full flex-col rounded-[22px] border border-line bg-white p-7 transition-[transform,border-color] duration-300 ease-lux hover:-translate-y-1 hover:border-ink/15">
                  
                  <Icon aria-hidden="true" className="h-5 w-5 stroke-[1.25] text-forest" />
                  <p className="eyebrow mt-6 text-muted">{method.label}</p>
                  <p className="mt-3 flex-1 text-[15px] font-medium leading-snug text-ink">{method.value}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 border-t border-line pt-5 text-[12.5px] font-medium text-forest">
                    {method.action}
                    <ArrowUpRightIcon
                      aria-hidden="true"
                      className="h-3.5 w-3.5 transition-transform duration-200 ease-lux group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    
                  </span>
                </a>
              </Reveal>);

          })}
        </div>

        <Reveal delay={0.1} className="mt-6">
          <p className="text-[12.5px] text-muted">Working hours — {project.workingHours}</p>
        </Reveal>
      </div>
    </section>);

}
