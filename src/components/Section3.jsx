import SectionWrapper from './../hoc/SectionWrapper';
import { FaApple } from 'react-icons/fa';

function Section3() {
  return (
    <div className="flex h-full items-center p-2">
      <div className="flex w-full max-w-sm max-w-xs flex-col justify-center">
        <h1 className="text-3xl">Fitness and Health</h1>
        <p className="mt-4 text-xl font-bold text-slate-300">
          Your Wellness Companion – Track, Achieve, Thrive.
        </p>
      </div>
    </div>
  );
}

export default SectionWrapper(Section3);
