import { motion } from 'framer-motion';

import { staggerContainer } from './../utilities/motion';

export default function SectionWrapper(Component, styles = '') {
  return function HOC() {
    return (
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="shoow"
        viewport={{ once: true, amount: 0.25 }}
        className={`h-screen w-full pt-[44px] ${styles}`}>
        <Component />
      </motion.div>
    );
  };
}
