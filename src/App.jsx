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
              <Features />
              <FamilySetup />
              <Customization />
              <BuyNow />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </main>
    </>
  );
}

export default App;
