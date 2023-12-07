import { motion } from 'framer-motion';

import SectionWrapper from '../hoc/SectionWrapper';
import useObserver from '../hooks/useObserver';
import { fadeIn } from '../utilities/motion';

function Customization({ page, offset }) {
  const { ref, animation } = useObserver(
    page === 4 && (offset === 2 || offset === 3 || offset === 4)
  );

  return (
    <div className="relative flex h-full p-2">
      <div className="w-1/3 sm:w-1/2" />
      <div className="flex grow flex-col justify-center">
        <motion.div initial="hidden" animate={animation} variants={fadeIn()} ref={ref}>
          <h1 className="text-lg font-bold sm:text-xl">Customization Options</h1>
          <div className="mt-2">
            <h2 className="text-2xl font-bold sm:text-3xl">Any case. Any band.</h2>
            <h2 className="text-2xl font-bold sm:text-3xl">Any style you want.</h2>
          </div>
          <div>
            <button className="mt-4 rounded-lg border-2 border-blue-700 px-4 py-2 transition-colors hover:bg-blue-700">
              Create your style
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SectionWrapper(Customization);
