import React, { useEffect, useId, useRef, useState } from 'react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeId = useId();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const handlePlayMusic = () => {
    if (iframeRef.current) return;

    const musicPlayer = document.createElement('iframe');
    musicPlayer.id = iframeId;
    musicPlayer.src = 'https://www.youtube.com/embed/NZGHXy1IAHM?autoplay=1&loop=1&playlist=NZGHXy1IAHM&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1';
    musicPlayer.style.display = 'none';
    musicPlayer.allow = 'autoplay';
    document.body.appendChild(musicPlayer);
    iframeRef.current = musicPlayer;
    setIsPlaying(true);
  };

  const handleStopMusic = () => {
    if (iframeRef.current) {
      iframeRef.current.remove();
      iframeRef.current = null;
    }

    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      handleStopMusic();
    } else {
      handlePlayMusic();
    }
  };

  const triggerAutoplay = () => {
    handlePlayMusic();
    window.removeEventListener('click', triggerAutoplay);
    window.removeEventListener('touchstart', triggerAutoplay);
  };

  useEffect(() => {
    window.addEventListener('click', triggerAutoplay);
    window.addEventListener('touchstart', triggerAutoplay);

    return () => {
      window.removeEventListener('click', triggerAutoplay);
      window.removeEventListener('touchstart', triggerAutoplay);
      handleStopMusic();
    };
  }, []);

  return (
    <button onClick={toggleMusic} className="music-toggle">
      {isPlaying ? 'Stop Song' : 'Play Song'}
    </button>
  );
};

export default MusicPlayer;
