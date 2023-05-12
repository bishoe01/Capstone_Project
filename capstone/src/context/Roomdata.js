import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const RoomContext = createContext();
export function RoomContextProvider({ children }) {
    const [roomData, setRoomData] = useState(
        {
            "bea": [101, 102, 103, 104, 105, 106],
            "culture": [101, 102, 103],
            'software': [1, 2, 3, 4, 5, 6]
        }
    );
    const [building, setBuilding] = useState({
        "bea": "경상대학",
        "culture": "국제문화대학",
        'software': "소프트웨어융합대학"
    })
    const [selectData, setSelectData] = useState([{
        "room": '',
        "date": '',
        "start": '',
        "end": '',
        "people": '',
    }]);
    const [reservelist, setReservelist] = useState();
    const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    const now = new Date();
    const hoursNow = now.getHours();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // month는 0부터 시작하기 때문에 +1 해줍니다.
    const day = String(now.getDate()).padStart(2, '0');

    const currentDate = `${year}-${month}-${day}`;
    const url = 'https://port-0-erica-studyroom-6g2llfs1h510.sel3.cloudtype.app';
    const [jwt, setJwt] = useState(localStorage.getItem("JWT"));
    const [reactionArray, setReactionArray] = useState([]); //예약할 수 있는 6일치 날짜
    const newReactionArray = [];
    const filteredHours = hours.filter(hour => hour >= hoursNow);
    useEffect(() => {
        for (let i = 0; i < 6; i++) {
            const day = new Date();
            day.setDate(day.getDate() + i);
            day.setMonth(day.getMonth() + Math.floor(day.getDate() / 31));
            newReactionArray.push({ date: day.toISOString().slice(0, 10) });
        }
        setReactionArray(newReactionArray);
    }, []);
    // useEffect(() => {
    //     console.log("jwt 변경 " + jwt);
    // }, [jwt]);
    return (
        <RoomContext.Provider value={{ roomData, selectData, setSelectData, building, currentDate, reservelist, jwt, hours, url, reactionArray, setReactionArray, filteredHours }}>
            {children}
        </RoomContext.Provider>)
}

export function useRoomContext() {
    return useContext(RoomContext);
}
