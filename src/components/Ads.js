import React from 'react';
import AdSense from 'react-adsense'

export const Ads = () => {
  return (
    <AdSense.Google
      client='ca-pub-5785569447311216'
      slot='2509254784'
      style={{ display: 'inline-block', width: '728px', height: '90px' }}
    />
  );
}