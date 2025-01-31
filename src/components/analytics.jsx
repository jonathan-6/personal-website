import { useEffect } from 'react';

const Analytics = () => {
  const isDevelopment = import.meta.env.DEV;
  const WEBSITE_ID = isDevelopment 
    ? import.meta.env.VITE_DEV_UMAMI_WEBSITE_ID
    : import.meta.env.VITE_PROD_UMAMI_WEBSITE_ID;
  const UMAMI_URL = isDevelopment
    ? import.meta.env.VITE_DEV_UMAMI_URL
    : import.meta.env.VITE_PROD_UMAMI_URL;

  useEffect(() => {
    if (!WEBSITE_ID || !UMAMI_URL) {
      console.warn('Analytics environment variables not configured');
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.setAttribute('data-website-id', WEBSITE_ID);
    script.src = UMAMI_URL;

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector(`script[src="${UMAMI_URL}"]`);
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [WEBSITE_ID, UMAMI_URL]);

  return null;
};

export default Analytics;