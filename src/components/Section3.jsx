import SectionWrapper from './../hoc/SectionWrapper';
import { FaApple } from 'react-icons/fa';

function Section3() {
  return (
    <div className="flex h-full items-center">
      <div className="h-full w-1/2">
        <h1 className="text-3xl text-white">Section3</h1>
      </div>
    </div>
  );
}

export default SectionWrapper(Section3);
