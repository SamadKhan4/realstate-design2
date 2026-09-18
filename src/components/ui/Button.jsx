import { ArrowRightIcon } from 'lucide-react';

const base =
'group inline-flex items-center justify-center gap-2.5 rounded-xl font-medium tracking-tight transition-[background-color,color,border-color,transform,box-shadow] duration-300 ease-lux hover:-translate-y-0.5 hover:shadow-soft active:translate-y-0 active:shadow-none disabled:translate-y-0 disabled:opacity-60 disabled:pointer-events-none';

const variants = {
  primary: 'bg-forest text-bone hover:bg-night border border-transparent',
  secondary: 'bg-transparent text-ink border border-ink/20 hover:border-ink/45 hover:bg-ink/[0.03]',
  light: 'bg-bone text-ink border border-transparent hover:bg-white'
};

const sizes = {
  md: 'h-11 px-5 text-[13px]',
  lg: 'h-[52px] px-7 text-sm'
};

function classes({ variant = 'primary', size = 'lg', fullWidth, className = '' }) {
  return [base, variants[variant], sizes[size], fullWidth ? 'w-full' : '', className].
  filter(Boolean).
  join(' ');
}

function Inner({ children, withArrow }) {
  return (
    <>
      <span>{children}</span>
      {withArrow &&
      <ArrowRightIcon
        aria-hidden="true"
        className="h-4 w-4 shrink-0 transition-transform duration-200 ease-lux group-hover:translate-x-1" />

      }
    </>);

}

export function Button({
  type = 'button',
  onClick,
  ...props



}) {
  return (
    <button type={type} onClick={onClick} className={classes(props)}>
      <Inner withArrow={props.withArrow}>{props.children}</Inner>
    </button>);

}

export function ButtonLink({
  href,
  target,
  rel,
  ...props
}) {
  return (
    <a href={href} target={target} rel={rel} className={classes(props)}>
      <Inner withArrow={props.withArrow}>{props.children}</Inner>
    </a>);

}
