import React from 'react';
import Slide from 'react-reveal/Slide';
import { useNavigate } from 'react-router-dom';
function SectionCard({ text, direction }) {
    const SECTION_STYLE = 'w-full bg-gradient-to-r from-primary to-black text-center text-white p-16 rounded-xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-emphasize cursor-pointer'
    const navigate = useNavigate();
    return (
        <>
            {direction === 'left' ?
                <Slide left>
                    <div className={SECTION_STYLE} onClick={() => navigate('/reserve')}>
                        <h1 className='text-3xl'>
                            {text}</h1>
                    </div>
                </Slide>
                :
                <Slide right>
                    <div className={SECTION_STYLE}>
                        <h1 className='text-3xl'>
                            {text}</h1>
                    </div>
                </Slide>
            }</>
    );
}

export default SectionCard;