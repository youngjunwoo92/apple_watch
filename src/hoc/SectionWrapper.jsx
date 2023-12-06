import { motion } from 'framer-motion';

import { staggerContainer } from './../utilities/motion';

export default function SectionWrapper(Component, styles = '') {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="shoow"
        viewport={{ once: true, amount: 0.25 }}
        className={`h-[calc(100vh-44px)] ${styles}`}>
        <div className="mx-auto h-full max-w-5xl">
          <Component />
        </div>
      </motion.section>
    );
  };
}
