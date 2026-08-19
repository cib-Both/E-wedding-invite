import React, { useRef, useEffect, useState } from 'react';

const GALLERY_ITEM_COUNT = 6;

const slides = Array.from({ length: GALLERY_ITEM_COUNT }).map((_, index) => (
  <div className="gallery-slide reveal" key={index}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="M21 16l-5-5-4 4-3-3-6 6" />
    </svg>
    <span>Add photo</span>
  </div>
));

const Gallery: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const scrollToNext = () => {
      if (isHovered) {
        timeoutId = setTimeout(scrollToNext, 4000);
        return;
      }

      const slideWidth = scroller.clientWidth;
      const singleSetWidth = slideWidth * GALLERY_ITEM_COUNT;

      scroller.scrollTo({ left: scroller.scrollLeft + slideWidth, behavior: 'smooth' });

      const onScrollEnd = () => {
        scroller.removeEventListener('scrollend', onScrollEnd);
        if (scroller.scrollLeft >= singleSetWidth) {
          scroller.scrollTo({ left: scroller.scrollLeft - singleSetWidth, behavior: 'instant' });
        }
      };

      scroller.addEventListener('scrollend', onScrollEnd, { once: true });
      timeoutId = setTimeout(onScrollEnd, 600);

      timeoutId = setTimeout(scrollToNext, 4000);
    };

    timeoutId = setTimeout(scrollToNext, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isHovered]);

  return (
    <section className="gallery-section" id="gallery">
      <div className="section-head reveal">
        <div className="section-eyebrow">Memories</div>
        <h2 className="section-title">Our Gallery</h2>
        <div className="divider"></div>
      </div>
      <div
        className="gallery-scroller"
        ref={scrollerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {slides}
        {slides}
      </div>
    </section>
  );
};

export default Gallery;
