import React, { useEffect } from 'react';

export const Ads = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, [])

  return (
    <></>
    // <ins className="adsbygoogle"
    //   style={{ display: 'block' }}
    //   data-ad-client="ca-pub-5785569447311216"
    //   data-ad-slot="2509254784"
    //   data-ad-format="auto"
    //   data-full-width-responsive="true"></ins>
  );
}