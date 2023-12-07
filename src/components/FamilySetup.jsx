import SectionWrapper from '../hoc/SectionWrapper';

function FamilySetup({ isVisible }) {
  return (
    <div className={`relative flex h-full items-center p-2 ${isVisible ? 'fade-in' : 'fade-out'}`}>
      <div className="flex w-2/3 flex-col justify-center px-4 sm:w-1/2">
        <h1 className="text-xl font-bold">Family Setup</h1>
        <h2 className="mt-2 text-3xl font-bold">Your family joined at the wrist.</h2>
        <p className="mt-4 text-lg font-bold text-slate-200">
          Now family members who don’t have an iPhone can stay in touch with Apple Watch.
        </p>
      </div>
    </div>
  );
}

export default SectionWrapper(FamilySetup);
