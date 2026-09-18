import {
  RouteIcon,
  ScrollTextIcon,
  MilestoneIcon,
  TrendingUpIcon,
  LandmarkIcon,
  TreesIcon,
  ShieldIcon,
  HammerIcon,
  BadgeCheckIcon } from
'lucide-react';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';
import { advantages } from '../data/site';

const icons = [
RouteIcon,
ScrollTextIcon,
MilestoneIcon,
TrendingUpIcon,
LandmarkIcon,
TreesIcon,
ShieldIcon,
HammerIcon];


export function Advantages() {
  const featured = advantages.filter((a) => a.featured);
  const rest = advantages.filter((a) => !a.featured);

  return (
    <section id="highlights" className="bg-bone py-16 sm:py-24 lg:py-[120px]">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            index="04"
            eyebrow="Why Choose This Project"
            title="Strategic Advantages, Verified on Paper"
            className="lg:max-w-2xl" />
          
          <Reveal delay={0.08}>
            <span className="inline-flex items-center gap-2 rounded-full border border-forest/25 bg-forest/[0.06] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-forest">
              <BadgeCheckIcon aria-hidden="true" className="h-3.5 w-3.5" />
              Verified Advantage
            </span>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-2">
          {featured.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal
                key={item.title}
                delay={i * 0.06}
                as="article"
                className="group flex flex-col justify-between rounded-[24px] border border-line bg-white p-8 transition-[transform,border-color] duration-300 ease-lux hover:-translate-y-1 hover:border-ink/15 sm:p-10">
                
                <div>
                  <Icon aria-hidden="true" className="h-7 w-7 stroke-[1.25] text-forest" />
                  <h3 className="mt-7 font-serif text-[28px] leading-[1.12] text-ink sm:text-[32px]">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[14.5px] leading-[1.8] text-muted">{item.description}</p>
                </div>
                <div className="mt-8 flex items-center gap-2 border-t border-line pt-6">
                  <span className="eyebrow text-champagne">Key Differentiator</span>
                </div>
              </Reveal>);

          })}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((item, i) => {
            const Icon = icons[i + 2];
            return (
              <Reveal
                key={item.title}
                delay={i % 3 * 0.05}
                as="article"
                className="group rounded-[20px] border border-line bg-white/60 p-7 transition-[transform,background-color,border-color] duration-300 ease-lux hover:-translate-y-1 hover:border-ink/15 hover:bg-white">
                
                <Icon aria-hidden="true" className="h-5 w-5 stroke-[1.25] text-forest" />
                <h3 className="mt-6 text-[17px] font-medium leading-snug text-ink">{item.title}</h3>
                <p className="mt-3 text-[13.5px] leading-[1.75] text-muted">{item.description}</p>
              </Reveal>);

          })}
        </div>
      </div>
    </section>);

}
