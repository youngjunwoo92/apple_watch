import { Canvas } from '@react-three/fiber';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main className='h-full bg-yellow-500'>
        <Canvas>
          <color attach='background' args={['black']} />
        </Canvas>
      </main>
    </>
  );
}

export default App;
