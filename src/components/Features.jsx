import { motion } from 'framer-motion';

import SectionWrapper from '../hoc/SectionWrapper';
import useObserver from './../hooks/useObserver';
import { fadeIn } from '../utilities/motion';

function Features({ page, offset }) {
  const { ref, animation } = useObserver(page === 2 && (offset === 1 || offset === 2));
  // const { ref, animation } = useObserver(true);

  return (
    <div className="relative flex h-full justify-center text-center">
      <motion.div
        ref={ref}
        variants={fadeIn()}
        animate={animation}
        className="w-full max-w-xs translate-y-[10rem] px-4 md:translate-y-[15rem]">
        <h2 className="mt-4 text-center text-3xl  font-bold font-bold md:text-4xl">
          Advanced Features
        </h2>
        <p className="mt-2 text-lg font-bold text-slate-300 md:text-xl">
          Empowering Your Lifestyle with Cutting-Edge Technology.
        </p>
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Features);
