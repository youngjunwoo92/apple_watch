import SectionWrapper from '../hoc/SectionWrapper';

function Features({ isVisible }) {
  return (
    <div className={`flex h-full flex-col ${isVisible ? 'fade-in' : 'fade-out'}`}>
      <div className={`flex translate-y-[8rem] flex-col items-center p-4 text-center`}>
        <h2 className="mt-4 text-center text-3xl  font-bold font-bold md:text-4xl">
          Advanced Features
        </h2>
        <p className="mt-2 text-xl font-bold text-slate-200 md:text-2xl">
          Empowering Your Lifestyle with Cutting-Edge Technology.
        </p>
        <p className="text-md mt-4 md:text-xl">A safety feature we hope you’ll never need.</p>
      </div>
    </div>
  );
}

export default SectionWrapper(Features);
