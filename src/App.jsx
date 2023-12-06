import { Scroll, ScrollControls, useScroll } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { getProject, val } from '@theatre/core';

import { PerspectiveCamera, useCurrentSheet, SheetProvider } from '@theatre/r3f';

import SpotLightWithHelper from './helper/SpotLightWithHelper';
import Header from './components/Header';
import Watch from './models/Watch';
import Hero from './components/Hero';
import About from './components/About';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';

import scrollAnimation from './scrollAnimation.json';

function App() {
  const sheet = getProject('Product', { state: scrollAnimation }).sheet('Scene');
  return (
    <>
      <Header />
      <main className="h-full w-full pt-[44px]">
        <Canvas gl={{ preserveDrawingBuffer: true }}>
          <ScrollControls pages={5}>
            <SheetProvider sheet={sheet}>
              <Scene />
            </SheetProvider>
            <Scroll html className="w-full">
              <Hero />
              <About />
              <Section3 />
              <Section4 />
              <Section5 />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </main>
    </>
  );
}

export default App;

const Scene = () => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  return (
    <>
      <color attach="background" args={['black']} />
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        fov={75}
        position={[0, 0, 2]}
        near={0.1}
        far={100}
      />
      <SpotLightWithHelper
        theatreKey="Spot Light 1"
        position={[0, 0, 0]}
        intensity={1}
        showHelper={false}
      />
      <SpotLightWithHelper
        theatreKey="Spot Light 2"
        position={[0, 0, 0]}
        intensity={1}
        showHelper={false}
      />
      <Watch />
    </>
  );
};
