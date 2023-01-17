import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function DepartmentCard({ item, text, title }) {
    const navigate = useNavigate();
    const [depart, setDepart] = useState(
        {
            '국제문화대학' : 'culture',
            '언론정보대학' : 'media',
            '과학기술융합대학' : 'science',
            '디자인대학' : 'design',
            '예체능대학' : 'art',
            '약학대학' : 'pharmacy',
            '공학대학' : 'engineering',
            '경상대학' : 'bea',
            '소프트웨어융합대학' : 'software',
        }
    );
    
    return (
        <div className='text-center' onClick={() => navigate(`${depart[item]}`)}>
            <img className='rounded-xl' src={`/images/하냥이_${item}.png`} alt={title} />
            <h3>{text}</h3>
        </div>
    );
}

export default DepartmentCard;