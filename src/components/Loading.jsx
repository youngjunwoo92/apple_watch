import { FaApple } from 'react-icons/fa';
import Header from './Header';

export default function Loading() {
  return (
    <div className="flex h-[100dvh] w-screen flex-col">
      <Header />
      <div className="flex h-full w-full items-center justify-center">
        <FaApple style={{ width: 80, height: 80 }} />
      </div>
    </div>
  );
}
