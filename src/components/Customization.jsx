import { motion } from 'framer-motion';

import SectionWrapper from '../hoc/SectionWrapper';
import useObserver from '../hooks/useObserver';
import { fadeIn } from '../utilities/motion';

function Customization() {
  const { ref, animation } = useObserver();

  return (
    <div className="flex h-full p-2">
      <div className="w-1/2" />
      <div className="flex grow flex-col justify-center">
        <motion.div initial="hidden" animate={animation} variants={fadeIn()} ref={ref}>
          <h1 className="text-xl font-bold">Customization Options</h1>
          <div className="mt-2">
            <h2 className="text-3xl font-bold">Any case. Any band.</h2>
            <h2 className="text-3xl font-bold">Any style you want.</h2>
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
