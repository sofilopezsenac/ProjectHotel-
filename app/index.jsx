import './styles';
import React, { useEffect, useState } from 'react';
import { format } from 'fecha';
import hotelsData from './data.js';
import Filters from './filters';
import ListCards from './listCards';

const getSize = (size) => {
    if (size <= 10) return 1;
    if (size > 10 && size <= 20) return 2;
    if (size > 20) return 3;
    return 0;
};

const validDate = (availabilityFrom, from, availabilityTo, to) => {
    if (
        to >= from
        && from >= availabilityFrom
        && from <= availabilityTo
        && to >= availabilityFrom
        && to <= availabilityTo
    ) return true;
    return false;
};

export default function Main() {
    const [list, setList] = useState(hotelsData);
    const [filter, setFilter] = useState({
        fromDate: format(Date.now(), 'isoDate'),
        toDate: format(new Date(Date.now().valueOf() + 864000000), 'isoDate'),
        country: '-',
        price: 0,
        size: 0
    });

    useEffect(() => {
        const newList = hotelsData.filter((item) => {
            return (
                validDate(
                    new Date(format(new Date(item.availabilityFrom), 'YYYY[/]MM[/]DD')).valueOf(),
                    new Date(filter.fromDate.replace(/-/gi, '/')).valueOf(),
                    new Date(format(new Date(item.availabilityTo), 'YYYY[/]MM[/]DD')).valueOf(),
                    new Date(filter.toDate.replace(/-/gi, '/')).valueOf()
                )
                && ((item.country === filter.country) || filter.country === '-')
                && ((item.price === filter.price) || filter.price === 0)
                && ((getSize(item.rooms) === filter.size) || filter.size === 0)
            );
        });

        setList(newList);
    }, [filter]);

    const handleFilter = (e) => {
        let { value } = e.target;
        if (e.target.name === 'price' || e.target.name === 'size') value = parseInt(value, 10);
        if ((e.target.type === 'date') && value === '') value = format(new Date(), 'isoDate');

        setFilter({
            ...filter,
            [e.target.name]: value
        });
    };

    return (
        <div id="main">
            <Header fromDate={filter.fromDate} toDate={filter.toDate} />
            <Filters
                onFilterChange={handleFilter}
                fromDate={filter.fromDate}
                toDate={filter.toDate}
                country={filter.country}
                price={filter.price}
                size={filter.size}
            />
            <ListCards cards={list} />
        </div>
    );
}