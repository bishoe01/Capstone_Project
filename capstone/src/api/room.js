import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RoomData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/data/room_data.json')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);
    const reservation = data.reservation;
    console.log(reservation);
    return (
        <ul>
            <li>{`${reservation[0].month}월 ${reservation[0].date}일`}</li>
        </ul>
    );
};

export default RoomData;
