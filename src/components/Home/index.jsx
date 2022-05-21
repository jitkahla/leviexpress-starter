import React from 'react';
import { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = ({ onJourneyChange }) => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (data) => setJourney(data);
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey !== null ? (
        <p>Nalezeno spojení s id {journey.journeyId}</p>
      ) : null}
    </main>
  );
};
