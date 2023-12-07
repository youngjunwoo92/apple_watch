import { PerspectiveCamera, useCurrentSheet } from '@theatre/r3f';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { val } from '@theatre/core';
import { useAtom } from 'jotai';
import debounce from 'lodash/debounce';

import SpotLightWithHelper from '../helper/SpotLightWithHelper';
import Watch from '../models/Watch';

import { currentPageAtom, currentSceneOffsetAtom } from './../atom/atom';
import { useEffect } from 'react';

export default function Scene() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [currentSceneOffset, setCurrentSceneOffset] = useAtom(currentSceneOffsetAtom);

  const sequenceLength = val(sheet.sequence.pointer.length);

  function logCurrentPage(offset, pages, callback) {
    const currentPage = Math.floor(offset * pages) + 1;
    const positionWithinPage = (offset * pages) % 1;
    const sceneOffset = Math.floor(positionWithinPage * 4) + 1;

    callback(currentPage);
    setCurrentSceneOffset(sceneOffset);
  }

  useFrame(() => {
    if (scroll) {
      const offset = scroll.offset;
      const pages = scroll.pages;
      // console.log({ offset, pages, sequenceLength });
      logCurrentPage(offset, pages, setCurrentPage);
      sheet.sequence.position = offset * sequenceLength;
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
