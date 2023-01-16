import React, { useState } from 'react';
import { BsBook } from 'react-icons/bs';
import { Link } from 'react-router-dom';
function Header(props) {
    const [links, setLinks] = useState(['Home','About','Contact']);
    return (
        <header className='flex justify-between items-center p-6 border-b-2 mb-4 border-sub text-2xl text-primary'>
            <div className='flex items-center'>
            <BsBook/>
            <p className='ml-4'>HY-TOGETHER</p>
            </div>
            <ul className='flex gap-5 text-xl'>
                {links.map((link,index) => {
                    return (
                        <li className=' hover:text-emphasize' key={index}>
                            <Link to={`/${link.toLowerCase()}`}>{link}</Link>
                        </li>
                    )
                })}
            </ul>
        </header>
    );
}

export default Header;