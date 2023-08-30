import { useEffect, useState } from 'react';

export const useScrollDetection = () => {
  const [position, setPosition] = useState({
    isTop: true,
    isBottom: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollBottom = scrollHeight - clientHeight - scrollTop;

      setPosition({
        isTop: scrollTop <= 0,
        isBottom: scrollBottom < 0,
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return position;
};
