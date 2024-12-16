import { useEffect } from 'react';

export const usePullToRefresh = () => {
  useEffect(() => {
    let touchstartY = 0;
    let touchendY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchstartY = e.touches[0].screenY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchendY = e.changedTouches[0].screenY;
      if (touchendY - touchstartY > 100 && window.scrollY === 0) {
        window.location.reload();
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);
}; 