import React from 'react';

const petals = [
  { left: '8%', width: 16, driftX: 60, duration: 16, delay: 0, color: '#EAD9B6', shape: 'ellipse' as const, rot: 0 },
  { left: '75%', width: 13, driftX: -40, duration: 13, delay: 2, color: '#DCEEF6', shape: 'circle' as const, rot: 45 },
  { left: '45%', width: 11, driftX: 25, duration: 15, delay: 4, color: '#EAD9B6', shape: 'ellipse' as const, rot: -20 },
  { left: '25%', width: 9, driftX: -30, duration: 18, delay: 1, color: '#DCEEF6', shape: 'circle' as const, rot: 90 },
  { left: '60%', width: 14, driftX: 45, duration: 14, delay: 6, color: '#EAD9B6', shape: 'ellipse' as const, rot: 15 },
  { left: '85%', width: 10, driftX: -55, duration: 20, delay: 3, color: '#DCEEF6', shape: 'circle' as const, rot: -45 },
  { left: '35%', width: 12, driftX: -20, duration: 17, delay: 8, color: '#EAD9B6', shape: 'ellipse' as const, rot: 60 },
  { left: '50%', width: 8, driftX: 35, duration: 19, delay: 5, color: '#DCEEF6', shape: 'circle' as const, rot: -90 },
];

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <img src="/demopic.jpg" alt="" loading="eager" />
      </div>

      <div className="hero-content">
        <div className="eyebrow" data-hero="eyebrow">We're getting married</div>
        <h1 className="names" data-hero="names">
          Ponlork <span className="amp">&amp;</span> Neathaya
        </h1>
        <div className="hero-date" data-hero="date">19 · 04 · 2027</div>
        <img className="ring-icon" src="/love.png" alt="Rings" data-hero="ring" />
      </div>

      <div className="scroll-cue" data-hero="scroll">
        <span>Scroll</span>
        <div className="line"></div>
      </div>

      {petals.map((petal, index) => (
        <div
          key={index}
          className="petal"
          style={{
            left: petal.left,
            width: `${petal.width}px`,
            height: petal.shape === 'circle' ? `${petal.width}px` : `${petal.width * 1.6}px`,
            '--drift-x': `${petal.driftX}px`,
            '--petal-rot': `${petal.rot}deg`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
          } as React.CSSProperties}
        >
          {petal.shape === 'ellipse' ? (
            <svg viewBox="0 0 20 28" fill={petal.color}><ellipse cx="10" cy="14" rx="7" ry="12" /></svg>
          ) : (
            <svg viewBox="0 0 20 20" fill={petal.color}><circle cx="10" cy="10" r="8" /></svg>
          )}
        </div>
      ))}
    </section>
  );
};

export default Hero;
