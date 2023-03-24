import axios from "axios";

import { useState } from "react";
export const [roomlist, setRoomlist] = useState(['']);

axios.defaults.headers.common['ngrok-skip-browser-warning'] = 'any value';
axios.post('http://1f54-218-37-109-50.ngrok.io/api/auth/login', {
    username: 'test',
    password: 'test'
})
    .then(response => {
        // 로그인이 성공하면, JWT 토큰을 저장한다
        const jwtToken = response.data.jwtToken;
        localStorage.setItem('jwtToken', jwtToken);

        // JWT 토큰을 설정한다
        axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;

        // studyroom 데이터를 요청한다
        axios.get('http://1f54-218-37-109-50.ngrok.io/api/studyroom/1')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    })
    .catch(error => {
        console.error(error);
    });