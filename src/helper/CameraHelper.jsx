import { PerspectiveCamera } from 'three';

export default function CameraHelper() {
  const camera = new PerspectiveCamera(60, 1, 1, 3);
  return (
    <group position={[0, 0, 2]}>
      <cameraHelper args={[camera]} />
      CameraHelper
    </group>
  );
}
