import React, { useEffect, useState } from 'react';

const OPEN_DELAY = 700;
const TRANSITION_DURATION = 1600;
const FLASH_DELAY = 320;

const CurtainReveal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [flash, setFlash] = useState(false);
  const [whiteOut, setWhiteOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setHidden(true);
      return;
    }

    document.body.style.overflow = 'hidden';

    const openTimer = window.setTimeout(() => setOpen(true), OPEN_DELAY);
    const flashTimer = window.setTimeout(() => setFlash(true), OPEN_DELAY - FLASH_DELAY);
    const hideTimer = window.setTimeout(() => {
      setHidden(true);
      document.body.style.overflow = '';
      window.dispatchEvent(new CustomEvent('curtain:opened'));
    }, OPEN_DELAY + TRANSITION_DURATION);

    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(flashTimer);
      window.clearTimeout(hideTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`curtain${open ? ' curtain-open' : ''}`} aria-hidden="true">
      <div className="curtain-white-bg" />
      <div className="curtain-panel curtain-panel-left" />
      <div className="curtain-panel curtain-panel-right" />
      <div className={`curtain-flash${flash ? ' curtain-flash-active' : ''}`} aria-hidden="true" />
      <div className="curtain-mark">
        <span className="curtain-initial">P</span>
        <span className="curtain-amp">&amp;</span>
        <span className="curtain-initial">N</span>
      </div>
    </div>
  );
};

export default CurtainReveal;
