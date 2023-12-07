import { PerspectiveCamera, useCurrentSheet } from '@theatre/r3f';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { val } from '@theatre/core';

import SpotLightWithHelper from '../helper/SpotLightWithHelper';
import Watch from '../models/Watch';
import { useAtom } from 'jotai';
import { currentPageAtom, currentSceneOffsetAtom } from './../atom/atom';

export default function Scene() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [currentSceneOffset, setCurrentSceneOffset] = useAtom(currentSceneOffsetAtom);

  const sequenceLength = val(sheet.sequence.pointer.length);

  function logCurrentPage(scroll, callback) {
    const currentPage = Math.floor(scroll.offset * scroll.pages) + 1;
    const positionWithinPage = (scroll.offset * scroll.pages) % 1;
    const sceneOffset = Math.floor(positionWithinPage * 4) + 1;

    callback(currentPage);
    setCurrentSceneOffset(sceneOffset);
  }

  useFrame(() => {
    // const sequenceLength = val(sheet.sequence.pointer.length);
    // sheet.sequence.position = scroll.offset * sequenceLength;
    if (scroll) {
      logCurrentPage(scroll, setCurrentPage);
      sheet.sequence.position = scroll.offset * sequenceLength;
    }
  });

  return (
    <>
      <color attach="background" args={['#121212']} />
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
}
