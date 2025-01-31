import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const trackPageView = () => {
      // Check specifically for Umami's page view method
      if (window.umami && typeof window.umami.track === 'function') {
        window.umami.track('pageview', {
          url: location.pathname + location.search,
          referrer: document.referrer,
          website: window.location.hostname
        });
        return true;
      }
      return false;
    };

    // Try to track immediately
    let tracked = trackPageView();

    // If not tracked, retry a few times
    let attempts = 0;
    const maxAttempts = 3;
    const interval = setInterval(() => {
      if (tracked || attempts >= maxAttempts) {
        clearInterval(interval);
        return;
      }
      tracked = trackPageView();
      attempts++;
    }, 1000);

    return () => clearInterval(interval);
  }, [location.pathname, location.search]);
};