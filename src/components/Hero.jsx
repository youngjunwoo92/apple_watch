import SectionWrapper from './../hoc/SectionWrapper';
import { FaApple } from 'react-icons/fa';

function Hero() {
  return (
    <div className="flex h-full flex-col items-center justify-center p-2 md:p-4">
      <div className="flex items-start">
        <FaApple color="white" size={32} />
        <h1 className="text-3xl text-white">WATCH</h1>
      </div>
      <p className="text-sm font-bold tracking-widest text-red-500">SERIES 9</p>
      <h2 className="mt-4 text-center text-4xl font-bold text-white">
        Smarter. Brighter. Mightier.
      </h2>
    </div>
  );
}

export default SectionWrapper(Hero);
