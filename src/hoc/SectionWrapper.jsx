export default function SectionWrapper(Component) {
  return function HOC(props) {
    return (
      <section className={`pointer-events-none absolute z-10 h-screen w-screen pt-[44px]`}>
        <div className="mx-auto h-full max-w-5xl">
          <Component {...props} />
        </div>
      </section>
    );
  };
}
