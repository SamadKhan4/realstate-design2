import { Reveal } from './Reveal';

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  index,
  align = 'left',
  tone = 'light',
  headingLevel = 'h2',
  className = ''
}) {
  const Heading = headingLevel;
  const dark = tone === 'dark';

  return (
    <Reveal
      className={[
      align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl',
      className].
      join(' ')}>
      
      <div
        className={[
        'flex items-center gap-3',
        align === 'center' ? 'justify-center' : '',
        dark ? 'text-champagne' : 'text-forest'].
        join(' ')}>
        
        {index && <span className="eyebrow opacity-70">{index}</span>}
        {index && <span className={['h-px w-8', dark ? 'bg-champagne/40' : 'bg-forest/30'].join(' ')} />}
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <Heading
        className={[
        'mt-5 font-serif text-[34px] leading-[1.06] tracking-[-0.01em] sm:text-[44px] lg:text-[54px]',
        dark ? 'text-bone' : 'text-ink'].
        join(' ')}>
        
        {title}
      </Heading>
      {subtitle &&
      <p
        className={[
        'mt-5 text-[15px] leading-[1.75]',
        dark ? 'text-bone/65' : 'text-muted'].
        join(' ')}>
        
          {subtitle}
        </p>
      }
    </Reveal>);

}
