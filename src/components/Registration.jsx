import { useState } from 'react';
import { CheckIcon, CheckCircle2Icon, CarIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';
import { TextField, SelectField, TextAreaField } from './ui/Field';
import { registration, plotSizeOptions, project } from '../data/site';

export function Registration() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [plotSize, setPlotSize] = useState(plotSizeOptions[1]);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!name.trim()) next.name = 'Please enter your full name.';
    if (!/^[0-9+\s-]{10,15}$/.test(mobile.trim())) next.mobile = 'Please enter a valid 10-digit mobile number.';
    if (!consent) next.consent = 'Please provide your authorization to continue.';
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  return (
    <section id="register" className="bg-night py-16 text-bone sm:py-24 lg:py-[120px]">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-3 text-champagne">
                <span className="eyebrow opacity-70">11</span>
                <span className="h-px w-8 bg-champagne/40" />
                <span className="eyebrow">{registration.eyebrow}</span>
              </div>
              <h2 className="mt-6 max-w-xl font-serif text-[36px] leading-[1.05] tracking-[-0.01em] text-bone sm:text-[48px] lg:text-[56px]">
                {registration.heading}
              </h2>
              <p className="mt-6 max-w-lg text-[15px] leading-[1.85] text-bone/60">{registration.copy}</p>
            </Reveal>

            <Reveal delay={0.08}>
              <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
                {registration.perks.map((perk) =>
                <li key={perk} className="flex items-center gap-2.5 text-[14px] text-bone/85">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-champagne/40">
                      <CheckIcon aria-hidden="true" className="h-3 w-3 text-champagne" />
                    </span>
                    {perk}
                  </li>
                )}
              </ul>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <CarIcon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-champagne" />
                <p className="text-[14px] leading-relaxed text-bone/80">{registration.chauffeur}</p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 border-t border-white/12 pt-8">
                <p className="eyebrow text-bone/45">Advisory Hotline</p>
                <a
                  href={project.phoneHref}
                  className="mt-3 block font-serif text-[30px] leading-none text-bone transition-colors duration-200 ease-lux hover:text-champagne">
                  
                  {project.phone}
                </a>
                <p className="mt-3 text-[13px] text-bone/50">MahaRERA: {project.rera}</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 sm:p-9">
              {submitted ?
              <div role="status" className="py-10 text-center">
                  <CheckCircle2Icon aria-hidden="true" className="mx-auto h-8 w-8 text-champagne" />
                  <p className="mt-5 font-serif text-[28px] leading-snug text-bone">Registration Received</p>
                  <p className="mx-auto mt-3 max-w-sm text-[14px] leading-relaxed text-bone/60">
                    Thank you, {name.split(' ')[0]}. Our advisory team will contact you on {mobile} with the
                    price sheet for {plotSize}.
                  </p>
                </div> :

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <TextField
                  id="reg-name"
                  tone="dark"
                  label="Full Name"
                  required
                  value={name}
                  onChange={setName}
                  placeholder="e.g. Ramesh Deshmukh"
                  autoComplete="name"
                  error={errors.name} />
                
                  <div className="grid gap-5 sm:grid-cols-2">
                    <TextField
                    id="reg-mobile"
                    tone="dark"
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
                    id="reg-plot-size"
                    tone="dark"
                    label="Preferred Plot Size"
                    required
                    value={plotSize}
                    onChange={setPlotSize}
                    options={plotSizeOptions} />
                  
                  </div>
                  <TextField
                  id="reg-email"
                  tone="dark"
                  label="Email Address"
                  optionalHint
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={email}
                  onChange={setEmail}
                  placeholder="e.g. ramesh@example.com" />
                
                  <TextAreaField
                  id="reg-message"
                  tone="dark"
                  label="Message / Requirements"
                  value={message}
                  onChange={setMessage}
                  placeholder="Tell us your preferred facing, budget or site visit date"
                  rows={4} />
                

                  <div>
                    <label htmlFor="reg-consent" className="flex cursor-pointer items-start gap-3">
                      <input
                      id="reg-consent"
                      name="reg-consent"
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      aria-describedby={errors.consent ? 'reg-consent-error' : undefined}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/30 bg-transparent text-forest accent-champagne" />
                    
                      <span className="text-[12.5px] leading-relaxed text-bone/60">
                        {registration.authorization}
                      </span>
                    </label>
                    {errors.consent &&
                  <p id="reg-consent-error" className="mt-2 text-xs text-champagne">
                        {errors.consent}
                      </p>
                  }
                  </div>

                  <Button type="submit" variant="light" fullWidth withArrow>
                    <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em]">
                      Submit Registration
                    </span>
                  </Button>
                  <p className="text-center text-[11.5px] text-bone/45">
                    100% Privacy Guaranteed. Zero Brokerage Direct Developer Pricing.
                  </p>
                </form>
              }
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}
