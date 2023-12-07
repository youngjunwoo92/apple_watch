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
  const [currentSceneOffset] = useAtom(currentSceneOffsetAtom);
  const [currentPage] = useAtom(currentPageAtom);

  return (
    <>
      <Header />
      <main className="h-full w-full overflow-hidden pt-[44px]">
        <Canvas gl={{ preserveDrawingBuffer: true }}>
          <ScrollControls pages={5} damping={0.1}>
            <SheetProvider sheet={sheet}>
              <Scene />
            </SheetProvider>
            <Scroll html className="w-full">
              <Hero page={currentPage} offset={currentSceneOffset} />
              <Features page={currentPage} offset={currentSceneOffset} />
              <FamilySetup page={currentPage} offset={currentSceneOffset} />
              <Customization page={currentPage} offset={currentSceneOffset} />
              <BuyNow page={currentPage} offset={currentSceneOffset} />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </main>
    </>
  );
}

export default App;
