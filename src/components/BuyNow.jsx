import { FaApple } from 'react-icons/fa';

import SectionWrapper from '../hoc/SectionWrapper';

function BuyNow({ isVisible }) {
  return (
    <div
      className={`flex h-full flex-col items-center justify-center ${
        isVisible ? 'fade-in' : 'fade-out'
      }`}>
      <div className={`fade-in flex  flex-col items-center text-center`}>
        <div className="flex items-start">
          <FaApple color="white" size={32} />
          <h1 className="text-3xl">WATCH</h1>
        </div>
        <p className="text-sm font-bold tracking-widest text-red-500">SERIES 9</p>
        <p className="mt-4 text-2xl">From $399</p>
      </div>
    </div>
  );
}

export default SectionWrapper(BuyNow);
