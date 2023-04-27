import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
const RoomContext = createContext();
export function RoomContextProvider({ children }) {
  const [roomData, setRoomData] = useState({
    bea: [101, 102, 103, 104, 105, 106],
    culture: [101, 102, 103],
    software: [1, 2, 3, 4, 5, 6],
  });
  const [selectData, setSelectData] = useState([
    {
      room: '',
      date: '',
      start: '',
      end: '',
      people: '',
    },
  ]);
  const [reservelist, setReservelist] = useState();
  const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  const url = 'https://port-0-erica-studyroom-6g2llfs1h510.sel3.cloudtype.app';
  const [jwt, setJwt] = useState('');

  useEffect(() => {
    axios
      .post('https://port-0-erica-studyroom-6g2llfs1h510.sel3.cloudtype.app/api/auth/login', {
        username: 'test',
        password: 'test',
      })
      .then(function (response) {
        setJwt(response.data.jwtToken);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <RoomContext.Provider value={{ roomData, selectData, setSelectData, reservelist, jwt, hours, url }}>{children}</RoomContext.Provider>;
}

export function useRoomContext() {
  return useContext(RoomContext);
}
