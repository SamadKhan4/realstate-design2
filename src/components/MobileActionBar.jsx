import { PhoneIcon, MessageCircleIcon, FileTextIcon } from 'lucide-react';
import { project } from '../data/site';

export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bone/95 backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      
      <div className="grid h-[64px] grid-cols-3 divide-x divide-line">
        <a
          href={project.phoneHref}
          className="flex flex-col items-center justify-center gap-1 text-ink active:bg-sand">
          
          <PhoneIcon aria-hidden="true" className="h-[18px] w-[18px] text-forest" />
          <span className="text-[11px] font-medium tracking-tight">Call</span>
        </a>
        <a
          href={project.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-ink active:bg-sand">
          
          <MessageCircleIcon aria-hidden="true" className="h-[18px] w-[18px] text-forest" />
          <span className="text-[11px] font-medium tracking-tight">WhatsApp</span>
        </a>
        <a
          href="#register"
          className="flex flex-col items-center justify-center gap-1 bg-forest text-bone">
          
          <FileTextIcon aria-hidden="true" className="h-[18px] w-[18px]" />
          <span className="text-[11px] font-medium tracking-tight">Price Sheet</span>
        </a>
      </div>
    </div>);

}
