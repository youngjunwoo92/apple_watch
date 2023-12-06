import SectionWrapper from './../hoc/SectionWrapper';
import Grid from '../components/Grid';
function Section5() {
  return (
    <div className="flex h-full flex-col items-center">
      <h1 className="text-3xl">Section5</h1>
      {/* <Grid /> */}
    </div>
  );
}

export default SectionWrapper(Section5);
