import { createContext, useContext, useEffect, useState } from "react";


const RoomContext = createContext();



export function RoomContextProvider({ children }) {
    const [roomData, setRoomData] = useState(
        {
            "bea" : [101,102,103,104,105,106],
            "culture" : [101,102,103]
        }
    );
    const [selectData, setSelectData] = useState({
        "room": '',
        "date": '',
        "start": '',
        "end": '',
        "people": '',
    });
    return (
        <RoomContext.Provider value={{roomData,selectData,setSelectData}}>
            {children}
        </RoomContext.Provider>)
}

export function useRoomContext() {
    return useContext(RoomContext);
}
