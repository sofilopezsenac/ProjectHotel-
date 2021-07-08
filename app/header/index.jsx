import './style';
import React from 'react';
import { format } from 'fecha';

const formatDate = (dateISO) => {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    return format(new Date(dateISO.replace(/-/gi, '/')), 'dddd[,] DD [de] MMMM [de] YYYY', {
        monthNames: months,
        dayNames: days
    });
};

export default function Header({ fromDate, toDate }) {
    return (
        <div id="header">
            <div className="bg">
                <h1>Hoteles</h1>
                <p>desde el {formatDate(fromDate)} hasta el {formatDate(toDate)}</p>
            </div>
        </div>
    );
}