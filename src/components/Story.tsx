import React from 'react';

const Story: React.FC = () => {
  return (
    <section className="plain" id="story">
      <div className="section-head reveal">
        <div className="section-eyebrow">Our Story</div>
        <h2 className="section-title">How it began</h2>
        <div className="divider"></div>
      </div>
      <div className="story-card reveal">
        <p className="story-text">
          It began quietly two colleagues, one a senior, one a junior, sharing the same office days. But there was something about his eyes and his quiet kindness that I couldn’t stop noticing.
          Then, one day, courage spoke louder than hesitation. A brave step turned a simple hello into the beginning of us.
          From there, we learned to love gently, patiently. We learned to care through the good days and the harder ones. We tried, we stumbled, and we found our way forward, together.
          And now, hand in hand, we take the next step from two colleagues, to two hearts, to one family.
        </p>
        <div className="story-sign">Ponlork &amp; Neathaya</div>
      </div>
    </section>
  );
};

export default Story;
