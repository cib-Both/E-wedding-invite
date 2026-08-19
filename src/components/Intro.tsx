import React from 'react';

const Intro: React.FC = () => {
  return (
    <section className="intro">
      <div className="intro-photo reveal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="9" cy="10" r="1.6" />
          <path d="M21 16l-5-5-4 4-3-3-6 6" />
        </svg>
        <span>Add photo</span>
      </div>
      <div className="intro-text reveal">
        <div className="section-eyebrow">A little love note</div>
        <div className="intro-title">
          Let's celebrate love,<br />laughter, and happily ever after.
        </div>
        <p className="intro-body">
          Together with our families, we — Ponlork and Neathaya — joyfully invite you to celebrate our union in marriage.
        </p>
        <div className="intro-datebox">
          <div className="day">Monday</div>
          19th of April 2027<br />
          Ceremony starts at 2:00 PM<br />
          <span style={{ opacity: 0.7 }}>Venue: to be announced</span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
