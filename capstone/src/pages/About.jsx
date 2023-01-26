import React from 'react';
import { useRoomContext } from '../context/Roomdata';

function About(props) {
    const {selectData} = useRoomContext();
    console.log(selectData);
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
        </div>
    );
}

export default About;