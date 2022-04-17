import { useEffect } from 'react';

export const useScrollToTop = () => {
  useEffect(() => {
    window.scroll({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });
  }, []);
};
