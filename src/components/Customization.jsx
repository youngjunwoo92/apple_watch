import SectionWrapper from '../hoc/SectionWrapper';

function Customization({ isVisible }) {
  return (
    <div className={`flex h-full w-full p-2 ${isVisible ? 'fade-in' : 'fade-out'}`}>
      <div className="xs:w-1/2 w-1/3" />
      <div className="xs:w-1/2 flex w-2/3 flex-col justify-center">
        <div>
          <h1 className="text-lg font-bold sm:text-xl">Customization Options</h1>
          <div className="mt-2">
            <h2 className="text-2xl font-bold sm:text-3xl">Any case. Any band.</h2>
            <h2 className="text-2xl font-bold sm:text-3xl">Any style you want.</h2>
          </div>
          <p className="text-md mt-4 text-slate-200 text-slate-300 md:text-xl">
            Craft your unique Apple Watch style effortlessly. Your case, your band, your way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(Customization);
