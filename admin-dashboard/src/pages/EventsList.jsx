import { useState, useEffect } from 'react';

export default function EventsList() {
  const [events, setEvents] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('nexasphere_events_cache')) || [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        localStorage.setItem('nexasphere_events_cache', JSON.stringify(data));
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
}
