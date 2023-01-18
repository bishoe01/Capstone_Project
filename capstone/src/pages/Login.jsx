import React, { useEffect, useState } from 'react';

function Login(props) {
    const INPUT_STYLE = "p-2 text-xl border-[1px] border-sub rounded-xl placeholder:text-center placeholder:text-gray-300"
    const [id, setId] = useState();
    const [pw, setPw] = useState();
    const [jwt, setJwt] = useState();
    async function getJWT() {
        const body = { username: "test", password: "test" };
        const response = await fetch('http://d8ed-218-37-109-50.ngrok.io/api/login', {
            method: 'POST',
            body: JSON.stringify(body),
        }).catch((error) => {
            console.error('Error:', error);
        });
        console.log(response);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        getJWT();
        
    }
    useEffect(() => {
        console.log(jwt);
    }, [jwt]);
    return (
        <div className='flex flex-col items-center justify-center gap-8 border-sub border-2 rounded-xl p-8 shadow-lg'>
            <h1 className='text-2xl text-primary'>LOG IN</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2" >
                <input className={INPUT_STYLE} onChange={(e) => setId(e.target.value)} type="text" placeholder='아이디 입력' />
                <input className={INPUT_STYLE} onChange={(e) => setPw(e.target.value)} type="text" placeholder='패스워드 입력' />
                <button type='submit' className='w-full text-xl bg-primary text-white p-4 rounded-xl m-2 hover:bg-emphasize'>Login</button>
            </form>
        </div>
    );
}

export default Login;
