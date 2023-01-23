import { createContext, useContext, useEffect, useState } from "react";


const RoomContext = createContext();



export function RoomContextProvider({ children }) {
    const [roomData, setRoomData] = useState(
        {
            "bea" : [101,102,103,104,105,106],
            "culture" : [101,102,103]
        }
    );
    
    return (
        <RoomContext.Provider value={{roomData}}>
            {children}
        </RoomContext.Provider>)
}

export function useRoomContext() {
    return useContext(RoomContext);
}
