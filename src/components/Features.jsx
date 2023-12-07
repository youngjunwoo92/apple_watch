import { motion } from 'framer-motion';

import SectionWrapper from '../hoc/SectionWrapper';
import useObserver from './../hooks/useObserver';
import { fadeIn } from '../utilities/motion';

function Features() {
  const { ref, animation } = useObserver();

  return (
    <div className="flex h-full items-center justify-center text-center">
      <motion.div
        ref={ref}
        variants={fadeIn()}
        animate={animation}
        className="w-full max-w-xs translate-y-[15rem] px-4">
        <h2 className="mt-4 text-center text-4xl font-bold font-bold">Advanced Features</h2>
        <p className="mt-2 text-xl font-bold text-slate-300">
          Empowering Your Lifestyle with Cutting-Edge Technology.
        </p>
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Features);
