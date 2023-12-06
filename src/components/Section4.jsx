import SectionWrapper from './../hoc/SectionWrapper';
import Grid from './Grid';

function Section4() {
  return (
    <div className="flex h-full flex-col items-center">
      <h1 className="text-3xl text-white">Section 4</h1>
    </div>
  );
}

export default SectionWrapper(Section4);
