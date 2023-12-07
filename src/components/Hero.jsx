import { FaApple } from 'react-icons/fa';

import SectionWrapper from './../hoc/SectionWrapper';

function Hero({ isVisible }) {
  return (
    <div className={`flex h-full flex-col ${isVisible ? 'fade-in' : 'fade-out'}`}>
      <div
        className={`flex translate-y-[4rem] flex-col items-center text-center sm:translate-y-[10rem]`}>
        <div className="flex items-start">
          <FaApple color="white" size={32} />
          <h1 className="text-3xl">WATCH</h1>
        </div>
        <p className="text-sm font-bold tracking-widest text-red-500">SERIES 9</p>
        <h2 className="mt-4 text-center text-2xl font-bold sm:text-4xl">
          Smarter. Brighter. Mightier.
        </h2>
      </div>
    </div>
  );
}

export default SectionWrapper(Hero);
