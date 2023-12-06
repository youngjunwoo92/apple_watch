import SectionWrapper from '../hoc/SectionWrapper';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from './../utilities/motion';

function About() {
  return (
    <motion.div className="flex h-full items-center justify-center">
      <div className="w-1/3">
        <h2 className="mt-4 text-center text-4xl font-bold text-white">
          Experience Innovation on Your Wrist!
        </h2>
      </div>
    </motion.div>
  );
}

export default SectionWrapper(About);
