import { motion, useReducedMotion } from 'framer-motion';

const tags = {
  div: motion.div,
  li: motion.li,
  section: motion.section,
  article: motion.article,
  span: motion.span
};

export function Reveal({ children, delay = 0, className, as = 'div' }) {
  const reduced = useReducedMotion();
  const MotionTag = tags[as];

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 26, scale: 0.992, filter: 'blur(7px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.18, margin: '0px 0px -48px' }}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay }}>
      
      {children}
    </MotionTag>);

}
