import SectionWrapper from './../hoc/SectionWrapper';
import Grid from './Grid';

function Section4() {
  return (
    <div className="flex h-full p-2">
      <div className="w-1/2" />
      <div className="flex grow flex-col justify-center">
        <h1 className="text-3xl">Customization Options</h1>
        <p className="mt-4 text-xl font-bold text-slate-300">
          Express Yourself: Tailor Your Apple Watch Experience.
        </p>
      </div>
    </div>
  );
}

export default SectionWrapper(Section4);
