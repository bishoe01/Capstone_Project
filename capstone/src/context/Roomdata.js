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
    const [selectData, setSelectData] = useState([{
        "room": '',
        "date": '',
        "start": '',
        "end": '',
        "people": '',
    }]);
    const [reservelist, setReservelist] = useState();
    useEffect(() => {
        axios.get(`/api/studyroom/1.json`)
            .then((res) => {
                setReservelist(res.data.reservation);

            })
    }, []);

    return (
        <RoomContext.Provider value={{ roomData, selectData, setSelectData, reservelist }}>
            {children}
        </RoomContext.Provider>)
}

export function useRoomContext() {
    return useContext(RoomContext);
}
