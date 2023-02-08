import { createContext, useContext, useEffect, useState } from "react";


const RoomContext = createContext();



export function RoomContextProvider({ children }) {
    const [roomData, setRoomData] = useState(
        {
            "bea": [101, 102, 103, 104, 105, 106],
            "culture": [101, 102, 103],
            'software' : [1,2,3,4,5,6,7,8]
        }
    );
    const [selectData, setSelectData] = useState([{
        "room": '',
        "date": '',
        "start": '',
        "end": '',
        "people": '',
    }]);
    return (
        <RoomContext.Provider value={{ roomData, selectData, setSelectData }}>
            {children}
        </RoomContext.Provider>)
}

export function useRoomContext() {
    return useContext(RoomContext);
}
