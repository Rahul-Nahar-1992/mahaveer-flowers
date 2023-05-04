import React, { useEffect, useState } from 'react';

export const Ads = () => {
  const [googleAdLoaded, setGoogleAdLoaded] = useState(false)

  useEffect(() => {
    if (window.adsbygoogle && window.adsbygoogle.loaded) {
      setGoogleAdLoaded(true)
    }
  }, [window.adsbygoogle])

  return (
    googleAdLoaded ?
      (<ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5785569447311216"
        data-ad-slot="2831159739"></ins>)
      : <></>
  );
}