import './styles';
import React from 'react';
import { PriceRank, RoomsTag, LocationTag, AvailabilityTag } from './components';

export default function Card({ info }) {
    return (
        <div className="card">
            <img src={info.photo} alt={info.name} />
            <div className="info">
                <LocationTag city={info.city} country={info.country} />
                <h2>{info.name}</h2>
                <p>{info.description}</p>
                <div className="details">
                    <RoomsTag value={info.rooms} />
                    <PriceRank value={info.price} />
                </div>
                <AvailabilityTag from={info.availabilityFrom} to={info.availabilityTo} />
                <button type="button">Reservar</button>
            </div>
        </div>
    );
}