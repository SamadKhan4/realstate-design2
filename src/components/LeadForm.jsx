import { useState } from 'react';
import { CheckCircle2Icon, LockIcon, SendIcon } from 'lucide-react';
import { TextField, SelectField } from './ui/Field';
import { Button } from './ui/Button';
import { plotSizeOptions } from '../data/site';

export function LeadForm() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [plotSize, setPlotSize] = useState(plotSizeOptions[1]);
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!name.trim()) next.name = 'Please enter your full name.';
    if (!/^[0-9+\s-]{10,15}$/.test(mobile.trim())) next.mobile = 'Please enter a valid 10-digit mobile number.';
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  return (
    <div className="rounded-[22px] border border-line bg-white/95 p-6 shadow-panel backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-500 ease-lux hover:border-white/70 hover:shadow-[0_30px_80px_-35px_rgba(17,23,19,0.55)] lg:hover:-translate-y-1 sm:p-8">
      <p className="eyebrow text-forest">Quick Price &amp; Availability Check</p>
      <h2 className="mt-3 font-serif text-[28px] leading-[1.1] text-ink sm:text-[32px]">
        Get Launch Pricing &amp; Brochure
      </h2>
      <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
        Enter your contact details to receive full layout map and pricing sheet for Hingoli plots.
      </p>

      {submitted ?
      <div
        role="status"
        className="mt-7 rounded-2xl border border-forest/20 bg-sand/70 p-6 text-center">
        
          <CheckCircle2Icon aria-hidden="true" className="mx-auto h-7 w-7 text-forest" />
          <p className="mt-4 font-serif text-[22px] leading-snug text-ink">Thank you, {name.split(' ')[0]}.</p>
          <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
            Our Hingoli advisory team will share the pricing sheet and master layout for {plotSize} shortly.
          </p>
        </div> :

      <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
          <TextField
          id="lead-name"
          label="Full Name"
          required
          value={name}
          onChange={setName}
          placeholder="e.g. Ramesh Deshmukh"
          autoComplete="name"
          error={errors.name} />
        
          <div className="grid gap-5 sm:grid-cols-2">
            <TextField
            id="lead-mobile"
            label="Mobile Number"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={mobile}
            onChange={setMobile}
            placeholder="e.g. 9876543210"
            error={errors.mobile} />
          
            <SelectField
            id="lead-plot-size"
            label="Plot Size"
            required
            value={plotSize}
            onChange={setPlotSize}
            options={plotSizeOptions} />
          
          </div>
          <TextField
          id="lead-email"
          label="Email Address"
          optionalHint
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={setEmail}
          placeholder="e.g. ramesh@example.com" />
        
          <Button type="submit" fullWidth className="mt-1">
            <span className="flex items-center gap-2.5 text-[12.5px] font-semibold uppercase tracking-[0.14em]">
              Check Availability &amp; Get Price
              <SendIcon aria-hidden="true" className="h-4 w-4" />
            </span>
          </Button>
          <p className="flex items-center justify-center gap-2 text-center text-[11.5px] text-muted">
            <LockIcon aria-hidden="true" className="h-3 w-3 text-champagne" />
            100% Privacy Guaranteed. Zero Brokerage Direct Developer Pricing.
          </p>
        </form>
      }
    </div>);

}
