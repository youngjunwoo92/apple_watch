import { ScrollControls, useScroll } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { getProject, val } from '@theatre/core';

import {
  PerspectiveCamera,
  useCurrentSheet,
  SheetProvider,
} from '@theatre/r3f';

import Header from './components/Header';
import Watch from './models/Watch';

function App() {
  const sheet = getProject('Product').sheet('Scene');
  return (
    <>
      <Header />
      <main className='h-full bg-yellow-500'>
        <Canvas gl={{ preserveDrawingBuffer: true }}>
          <ScrollControls pages={5}>
            <SheetProvider sheet={sheet}>
              <Scene />
            </SheetProvider>
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
      <color attach='background' args={['black']} />
      <PerspectiveCamera
        theatreKey='Camera'
        makeDefault
        fov={75}
        position={[0, 0, 2]}
        near={0.1}
        far={100}
      />
      <ambientLight intensity={1} />
      <directionalLight intensity={3} />
      <Watch />
    </>
  );
};
