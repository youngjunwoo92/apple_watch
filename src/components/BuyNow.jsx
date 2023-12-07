import { motion } from 'framer-motion';

import SectionWrapper from '../hoc/SectionWrapper';
import useObserver from '../hooks/useObserver';
import { fadeIn } from '../utilities/motion';

function BuyNow({ page, offset }) {
  const { ref, animation } = useObserver(page === 5 && offset === 4);

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <motion.div
        initial="hidden"
        animate={animation}
        variants={fadeIn()}
        ref={ref}
        className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold md:text-3xl">From $399</h2>
        <button className="mt-4 rounded bg-blue-600 px-4 py-2 text-lg transition-colors hover:bg-blue-700">
          Buy now
        </button>
      </motion.div>
    </div>
  );
}

export default SectionWrapper(BuyNow);
