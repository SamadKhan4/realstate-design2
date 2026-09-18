import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon, PhoneIcon, MessageCircleIcon, ArrowRightIcon } from 'lucide-react';
import { navLinks, project } from '../data/site';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.
        filter((e) => e.isIntersecting).
        sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0.01, 0.2, 0.5] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={[
      'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ease-lux',
      scrolled || open ?
      'border-b border-line bg-bone/85 backdrop-blur-xl' :
      'border-b border-transparent bg-transparent'].
      join(' ')}>
      
      <div className="mx-auto flex h-[72px] max-w-shell items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" className="group flex items-center gap-3" aria-label="Azgari Real Estate — home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-forest transition-[transform,box-shadow] duration-300 ease-lux group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-soft">
            <span className="font-serif text-[17px] leading-none text-bone">A</span>
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-[19px] tracking-[0.02em] text-ink">AZGARI</span>
            <span className="block text-[9px] font-medium uppercase tracking-[0.34em] text-muted">
              Real Estate
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className="relative px-3 py-2 text-[13px] font-medium text-ink/75 transition-colors duration-200 ease-lux hover:text-ink">
                
                {link.label}
                {isActive &&
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-3 -bottom-0.5 h-px bg-forest"
                  transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }} />

                }
              </a>);

          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={project.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 text-[13px] font-medium text-ink transition-[border-color,background-color,transform] duration-300 ease-lux hover:-translate-y-0.5 hover:border-ink/25 hover:bg-white lg:flex">
            
            <PhoneIcon aria-hidden="true" className="h-3.5 w-3.5 text-forest" />
            {project.phone}
          </a>
          <a
            href="#register"
            className="group hidden h-11 items-center gap-2 rounded-full bg-forest px-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-bone transition-[background-color,transform,box-shadow] duration-300 ease-lux hover:-translate-y-0.5 hover:bg-night hover:shadow-soft active:translate-y-0 sm:inline-flex">
            
            Register
            <ArrowRightIcon
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-200 ease-lux group-hover:translate-x-1" />
            
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/70 text-ink xl:hidden">
            
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open &&
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-line bg-bone px-5 pb-8 pt-4 sm:px-8 xl:hidden">
          
            <nav aria-label="Mobile" className="divide-y divide-line">
              {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-3.5 font-serif text-[22px] text-ink">
              
                  {link.label}
                  <ArrowRightIcon aria-hidden="true" className="h-4 w-4 text-muted" />
                </a>
            )}
            </nav>
            <div className="mt-6 grid gap-2.5">
              <a
              href="#register"
              onClick={() => setOpen(false)}
              className="flex h-[52px] items-center justify-center rounded-xl bg-forest text-[13px] font-semibold uppercase tracking-[0.14em] text-bone">
              
                Register Interest
              </a>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                href={project.phoneHref}
                className="flex h-[52px] items-center justify-center gap-2 rounded-xl border border-ink/20 text-[13px] font-medium text-ink">
                
                  <PhoneIcon aria-hidden="true" className="h-4 w-4" /> Call
                </a>
                <a
                href={project.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex h-[52px] items-center justify-center gap-2 rounded-xl border border-ink/20 text-[13px] font-medium text-ink">
                
                  <MessageCircleIcon aria-hidden="true" className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}
