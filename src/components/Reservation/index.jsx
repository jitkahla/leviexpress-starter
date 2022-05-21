import React from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Reservation = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    fetch(`https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setReservation(data.results);
        console.log(data.results);
      });
  }, []);
  return reservation !== null ? (
    <div className="reservation container">
      <h2>Vaše e-jízdenka č. {reservation.reservationId}</h2>
      <div className="reservation__body">
        <div className="reservation__headings">
          <p>Datum cesty:</p>
          <p>Odjezd:</p>
          <p>Příjezd:</p>
          <p>Sedadlo:</p>
        </div>
        <div className="reservation__info">
          <p>{reservation.date}</p>
          <p>
            {reservation.fromCity.name}, {reservation.fromCity.time}
          </p>
          <p>
            {reservation.toCity.name}, {reservation.toCity.time}
          </p>
          <p>{reservation.seatNumber}</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default Reservation;
