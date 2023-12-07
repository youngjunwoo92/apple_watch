import { useEffect, useState } from 'react';

export default function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const positionY = window.scrollY;
    setScrollY(positionY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY };
}
