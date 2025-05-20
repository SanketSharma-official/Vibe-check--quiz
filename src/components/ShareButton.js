// ShareButton.js
import React, { useState } from 'react';
import icons from './Icons';

export default function ShareButton({ dominantVibe }) {
  const [showShareOptions, setShowShareOptions] = useState(false);

  const shareText = `My dominant vibe is ${dominantVibe}! Take the vibe check quiz yourself!`;

  const shareUrls = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(shareText)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
    instagram: '', // will handle separately
  };

  const shareToInstagram = () => {
    navigator.clipboard.writeText(shareText).then(() => {
      alert('Text copied! Now open Instagram and paste it in your story or DM.');
      setShowShareOptions(false);
    });
  };

  return (
    <div style={{ position: 'relative', marginTop: 24 }}>
      <button
        onClick={() => setShowShareOptions(!showShareOptions)}
        style={{
          padding: '10px 20px',
          borderRadius: 8,
          cursor: 'pointer',
          backgroundColor: '#4A90E2',
          color: 'white',
          border: 'none',
          fontWeight: 'bold',
        }}
      >
        Share
      </button>

      {showShareOptions && (
        <div
          style={{
            position: 'absolute',
            top: '110%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            display: 'flex',
            gap: 10,
            padding: 10,
            zIndex: 100,
          }}
        >
          <a href={shareUrls.whatsapp} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#25D366' }}>
            {icons.whatsapp} WhatsApp
          </a>
          <button onClick={shareToInstagram} style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#E1306C', border: 'none', background: 'none', fontWeight: 'bold' }}>
            {icons.instagram} Instagram
          </button>
          <a href={shareUrls.facebook} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#1877F2' }}>
            {icons.facebook} Facebook
          </a>
          <a href={shareUrls.twitter} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#1DA1F2' }}>
            {icons.twitter} Twitter
          </a>
        </div>
      )}
    </div>
  );
}
