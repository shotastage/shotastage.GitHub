import { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { GA_KEYS } from '../env-values';

function removeExistingTag(): void {
  document.getElementById('gtag')?.remove();
  document.getElementById('gtagScript')?.remove();
}

export const initGA = () => {
  const gaID: string = GA_KEYS.gaID!;

  removeExistingTag();

  if (gaID === '') return;

  const gtagjs = document.createElement('script');
  gtagjs.id = 'gtag';
  gtagjs.src = `https://www.googletagmanager.com/gtag/js?id=${gaID}`;
  gtagjs.async = true;
  document.head.appendChild(gtagjs);

  const gtagScript = document.createElement('script');
  gtagScript.id = 'gtagScript';
  gtagScript.text = `window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', '${gaID}');`;
  document.head.appendChild(gtagScript);
};

declare global {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  interface Window {
    gtag?: (
      key: string,
      trackingId: string,
      // eslint-disable-next-line camelcase
      config: { page_path: string }
    ) => void;
  }
}

export const useTracking = (): void => {
  const gaID: string = GA_KEYS.gaID!;

  const { listen } = useHistory();
  useEffect(() => {
    const unlisten = listen((location) => {
      if (!window.gtag) return;
      if (gaID === '') return;
      window.gtag('config', gaID, { page_path: location.pathname });
    });

    return unlisten;
  }, [gaID, listen]);
};
