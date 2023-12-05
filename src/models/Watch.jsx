import { useGLTF, useAnimations } from '@react-three/drei';

export default function Watch() {
  const model = useGLTF('./appleWatch.glb');

  return (
    <mesh>
      <primitive object={model.scene} />
    </mesh>
  );
}
