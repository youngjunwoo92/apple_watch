import { Scroll, ScrollControls, useScroll } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { getProject, val } from '@theatre/core';

import { PerspectiveCamera, useCurrentSheet, SheetProvider, editable as e } from '@theatre/r3f';

import SectionContainer from './components/SectionContainer';
import Header from './components/Header';
import Watch from './models/Watch';
import SpotLightWithHelper from './helper/SpotLightWithHelper';
import Hero from './components/Hero';

function App() {
  const sheet = getProject('Product').sheet('Scene');
  return (
    <>
      <Header />
      <main className="h-full">
        <Canvas gl={{ preserveDrawingBuffer: true }}>
          <ScrollControls pages={5}>
            <SheetProvider sheet={sheet}>
              <Scene />
            </SheetProvider>
            <Scroll html>
              <Hero />
              <SectionContainer>
                <h1 className="text-3xl text-white">Experience Innovation on Your Wrist!</h1>
              </SectionContainer>
              <SectionContainer>
                <h1 className="text-3xl text-white">Experience Innovation on Your Wrist!</h1>
              </SectionContainer>
              <SectionContainer>
                <h1 className="text-3xl text-white">Experience Innovation on Your Wrist!</h1>
              </SectionContainer>
              <SectionContainer>
                <h1 className="text-3xl text-white">Experience Innovation on Your Wrist!</h1>
              </SectionContainer>
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
        showHelper={true}
      />
      <SpotLightWithHelper
        theatreKey="Spot Light 2"
        position={[0, 0, 0]}
        intensity={1}
        showHelper={true}
      />
      <Watch />
    </>
  );
};
