import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RoomData() {
    const [data, setData] = useState([]);
    function getData(){
        axios.get('/data/room_data.json')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }
    
    return (
        
        <ul>
            <button onClick={getData}>
                데이터 불러오기
            </button>
            {data ? console.log(data.reservation) : ""}
            {/* {data && data.reservation.map((item, index) => (
                <li key={index}>
                    {item.month}월
                    {item.date}일
                </li>
            ))} */}
            {/* <li>{`${month}월 ${date}일`}</li> */}
        </ul>
    );
};

export default RoomData;
