import './styles';
import React from 'react';
import { Card } from 'src/components';

export default function ListCards({ cards = [] }) {
    return (
        <div id="list">
            {
                cards.length > 0
                    ? cards.map((item) => <Card key={item.slug} info={item} />)
                    : <div className="empty-list"><Conifer />No hay hoteles disponibles con los parametros de búsqueda seleccionados</div>
            }
        </div>
    );
}