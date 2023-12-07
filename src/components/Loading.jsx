import { FaApple } from 'react-icons/fa';

export default function Loading() {
  return (
    <div className="fix flex h-[100dvh] w-screen items-center justify-center">
      <FaApple style={{ width: 80, height: 80 }} />
    </div>
  );
}
