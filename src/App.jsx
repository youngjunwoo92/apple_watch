import { Scroll, ScrollControls } from '@react-three/drei';
import { SheetProvider } from '@theatre/r3f';
import { Canvas } from '@react-three/fiber';
import { getProject } from '@theatre/core';

import Customization from './components/Customization';
import FamilySetup from './components/FamilySetup';
import Features from './components/Features';
import Header from './components/Header';
import BuyNow from './components/BuyNow';
import Scene from './components/Scene';
import Hero from './components/Hero';

import scrollAnimation from './scrollAnimation.json';
import { useAtom } from 'jotai';
import { currentPageAtom, currentSceneOffsetAtom } from './atom/atom';

function App() {
  const sheet = getProject('Product', { state: scrollAnimation }).sheet('Scene');
  const [offset] = useAtom(currentSceneOffsetAtom);
  const [page] = useAtom(currentPageAtom);

  return (
    <>
      <Header />
      <Hero isVisible={page === 1 && (offset === 1 || offset === 2)} />
      <Features isVisible={page === 2 && (offset === 1 || offset === 2)} />
      <FamilySetup isVisible={page === 3 && (offset === 2 || offset === 3)} />
      <Customization isVisible={page === 4 && (offset === 2 || offset === 3)} />
      <BuyNow isVisible={(page === 5 && offset === 4) || page === 6} />
      <Canvas gl={{ physicallCorrectLights: true, preserveDrawingBuffer: true }}>
        <ScrollControls pages={5} damping={0.5} maxSpeed={0.5}>
          <SheetProvider sheet={sheet}>
            <Scene />
          </SheetProvider>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
