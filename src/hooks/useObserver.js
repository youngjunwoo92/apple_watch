import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export default function useObserver(inView) {
  const animation = useAnimation();
  const { ref } = useInView();

  useEffect(() => {
    if (inView) {
      animation.start('show');
    } else {
      animation.start('hidden');
    }
  }, [animation, inView]);

  return { ref, animation };
}
