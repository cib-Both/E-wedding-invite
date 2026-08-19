import React from 'react';

const MapSection: React.FC = () => {
  return (
    <>
      <section className="plain" id="map-section">
        <div className="section-head reveal">
          <div className="section-eyebrow">Find Us</div>
          <h2 className="section-title">Location</h2>
          <div className="divider"></div>
        </div>
      </section>
      <section className="map-section">
        <div className="map-frame reveal">
          <iframe
            src="https://www.google.com/maps?q=11.9932882,105.463752&hl=en&z=17&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding venue location map"
          ></iframe>
        </div>
        <p className="map-caption">Phnom Pros Hotel</p>
      </section>
    </>
  );
};

export default MapSection;
