import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    mass: 0.25,
  });

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-champagne shadow-[0_0_12px_rgba(196,168,107,0.55)]"
      style={{ scaleX }}
    />
  );
}
