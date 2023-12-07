import { motion } from 'framer-motion';

import SectionWrapper from '../hoc/SectionWrapper';
import useObserver from '../hooks/useObserver';
import { fadeIn } from '../utilities/motion';

function FamilySetup() {
  const { ref, animation } = useObserver();

  return (
    <div className="flex h-full items-center p-2">
      <motion.div
        initial="hidden"
        animate={animation}
        variants={fadeIn()}
        ref={ref}
        className="flex w-full max-w-[256px] flex-col justify-center">
        <h1 className="text-xl font-bold">Family Setup</h1>
        <h2 className="mt-2 text-3xl font-bold">Your family joined at the wrist.</h2>
        <p className="mt-4 text-lg font-bold text-slate-300">
          Now family members who don’t have an iPhone can stay in touch with Apple Watch.
        </p>
        <div>
          <button className="mt-4 rounded-lg border-2 border-blue-700 px-4 py-2 transition-colors hover:bg-blue-700">
            Learn more
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default SectionWrapper(FamilySetup);
