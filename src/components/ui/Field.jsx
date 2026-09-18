import { ChevronDownIcon } from 'lucide-react';

function labelCls(tone) {
  return [
  'eyebrow block mb-2',
  tone === 'dark' ? 'text-bone/55' : 'text-muted'].
  join(' ');
}

function controlCls(tone, invalid) {
  return [
  'w-full rounded-xl px-4 text-[15px] transition-[border-color,background-color] duration-200 ease-lux placeholder:text-muted/55',
  tone === 'dark' ?
  'bg-white/[0.04] border text-bone placeholder:text-bone/35 focus:bg-white/[0.07]' :
  'bg-white border text-ink',
  invalid ?
  'border-[#9a3b2f]' :
  tone === 'dark' ?
  'border-white/12 focus:border-champagne/70' :
  'border-line focus:border-forest/60',
  'outline-none'].
  join(' ');
}

export function TextField({
  id,
  label,
  tone = 'light',
  required,
  optionalHint,
  error,
  className = '',
  type = 'text',
  value,
  onChange,
  placeholder,
  inputMode,
  autoComplete







}) {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelCls(tone)}>
        {label}
        {required && <span className="ml-1 text-champagne">*</span>}
        {optionalHint && <span className="ml-1.5 normal-case tracking-normal opacity-70">(optional)</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${controlCls(tone, !!error)} h-[52px]`} />
      
      {error &&
      <p id={`${id}-error`} className="mt-2 text-xs text-[#9a3b2f]">
          {error}
        </p>
      }
    </div>);

}

export function TextAreaField({
  id,
  label,
  tone = 'light',
  required,
  className = '',
  value,
  onChange,
  placeholder,
  rows = 3





}) {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelCls(tone)}>
        {label}
        {required && <span className="ml-1 text-champagne">*</span>}
      </label>
      <textarea
        id={id}
        name={id}
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`${controlCls(tone)} py-3.5 resize-none`} />
      
    </div>);

}

export function SelectField({
  id,
  label,
  tone = 'light',
  required,
  className = '',
  value,
  onChange,
  options




}) {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelCls(tone)}>
        {label}
        {required && <span className="ml-1 text-champagne">*</span>}
      </label>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`premium ${controlCls(tone)} h-[52px] pr-11`}>
          
          {options.map((opt) =>
          <option key={opt} value={opt} className="text-ink">
              {opt}
            </option>
          )}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className={[
          'pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2',
          tone === 'dark' ? 'text-bone/50' : 'text-muted'].
          join(' ')} />
        
      </div>
    </div>);

}
