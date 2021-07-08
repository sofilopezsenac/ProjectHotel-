import './styles';
import React from 'react';
import { Hotel } from 'blink/icons/the-icon-of';

export default React.memo(function RoomsTag({ value }) {
    return (
        <div className="rooms-tag"><Hotel />{`${value} habitaciones`}</div>
    );
});