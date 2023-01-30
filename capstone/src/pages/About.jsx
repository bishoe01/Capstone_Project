import React from 'react';
import RoomData from '../api/room';
import { useRoomContext } from '../context/Roomdata';

function About(props) {
    const {selectData} = useRoomContext();
    return (
        <div>
            {selectData.map((data,index) => {
                return (
                    <div key={index}>
                        <p>room{data.room}</p>
                        <p>date{data.date}</p>
                        <p>start{data.start}</p>
                        <p>end{data.end}</p>
                        <p>data{data.people}</p>
                    </div>
                )
            }
            )}
        <RoomData/>
        </div>
    );
}

export default About;