import React from 'react';
import BusStop from '../BusStop';
import './style.css';

const JourneyDetail = ({ journey }) => {
  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {journey.stops.map((stop) => (
          <BusStop
            key={stop.code}
            name={stop.name}
            station={stop.station}
            time={stop.time}
          />
        ))}
        {/* <BusStop name="Praha" station="ÚAN Florenc" time="15:55" /> */}
      </div>
    </div>
  );
};

export default JourneyDetail;
