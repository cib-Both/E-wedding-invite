import React, { useState } from 'react';

const petals = [
  { left: '6%', width: 15, driftX: 45, duration: 15, delay: 0, color: '#EAD9B6' },
  { left: '30%', width: 11, driftX: -35, duration: 12, delay: 3, color: '#DCEEF6' },
  { left: '62%', width: 14, driftX: 30, duration: 17, delay: 1.5, color: '#EAD9B6' },
  { left: '88%', width: 12, driftX: -25, duration: 13, delay: 5, color: '#DCEEF6' },
];

const days = [
  {
    id: 1,
    label: 'Day 1',
    events: [
      { time: '2:00 PM', name: 'Wedding Ceremony', location: 'Venue to be announced' },
      { time: '4:00 PM', name: 'Photo Session', location: 'Garden grounds' },
      { time: '6:00 PM', name: 'Cocktail Hour', location: 'Reception hall' },
      { time: '7:00 PM', name: 'Dinner Reception', location: 'Main ballroom' },
    ],
  },
  {
    id: 2,
    label: 'Day 2',
    events: [
      { time: '10:00 AM', name: 'Brunch', location: 'Garden patio' },
      { time: '2:00 PM', name: 'Spa & Wellness', location: 'Resort spa' },
      { time: '6:00 PM', name: 'Welcome Dinner', location: 'Beachfront restaurant' },
    ],
  },
  {
    id: 3,
    label: 'Day 3',
    events: [
      { time: '9:00 AM', name: 'Yoga Session', location: 'Ocean view deck' },
      { time: '1:00 PM', name: 'Lunch', location: 'Poolside' },
      { time: '4:00 PM', name: 'Farewell Tea', location: 'Lobby lounge' },
    ],
  },
];

const Schedule: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const currentDay = days.find((d) => d.id === selectedDay)!;

  return (
    <section className="schedule">
      {petals.map((petal, index) => (
        <div
          key={index}
          className="petal"
          style={{
            left: petal.left,
            width: `${petal.width}px`,
            ['--drift-x' as string]: `${petal.driftX}px`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          <svg viewBox="0 0 20 20" fill={petal.color}><ellipse cx="10" cy="10" rx="6" ry="10" /></svg>
        </div>
      ))}

      <div className="schedule-inner">
        <div>
          <div className="day-tabs">
            {days.map((day) => (
              <button
                key={day.id}
                className={`day-tab ${selectedDay === day.id ? 'active' : ''}`}
                onClick={() => setSelectedDay(day.id)}
              >
                {day.label}
              </button>
            ))}
          </div>

          <h3 className="schedule-title reveal">Wedding Day Schedule</h3>
          <div className="timeline">
            <div className="timeline-line"></div>
            {currentDay.events.map((item) => (
              <div key={item.time + item.name} className="t-item">
                <div className="t-time">{item.time}</div>
                <div className="t-name">{item.name}</div>
                <div className="t-loc">{item.location}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
