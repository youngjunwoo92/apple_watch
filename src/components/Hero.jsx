import SectionWrapper from './../hoc/SectionWrapper';
import { FaApple } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.div className="flex h-full flex-col">
      <div className="flex translate-y-[5rem] flex-col items-center text-center">
        <div className="flex items-start">
          <FaApple color="white" size={32} />
          <h1 className="text-3xl">WATCH</h1>
        </div>
        <p className="text-sm font-bold tracking-widest text-red-500">SERIES 9</p>
        <h2 className="mt-4 text-center text-4xl font-bold">Smarter. Brighter. Mightier.</h2>
      </div>
    </motion.div>
  );
}

export default SectionWrapper(Hero);
