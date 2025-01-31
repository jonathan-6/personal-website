import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollTracking = () => {
  const location = useLocation();

  useEffect(() => {
    let trackedPercentages = new Set();

    const trackScroll = (percentage) => {
      if (window.umami && typeof window.umami.track === 'function' && !trackedPercentages.has(percentage)) {
        window.umami.track('scroll', {
          percentage: percentage,
          url: location.pathname
        });
        trackedPercentages.add(percentage);
      }
    };

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrolled = Math.round((scrollTop + windowHeight) / documentHeight * 100);

      [25, 50, 75, 90, 100].forEach(percentage => {
        if (scrolled >= percentage) {
          trackScroll(percentage);
        }
      });
    };

    // Throttle scroll handling
    let isThrottled = false;
    const onScroll = () => {
      if (!isThrottled) {
        isThrottled = true;
        requestAnimationFrame(() => {
          handleScroll();
          isThrottled = false;
        });
      }
    };

    // Only add scroll listener once Umami is loaded
    const intervalId = setInterval(() => {
      if (window.umami && typeof window.umami.track === 'function') {
        window.addEventListener('scroll', onScroll);
        clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearInterval(intervalId);
    };
  }, [location.pathname]);
};