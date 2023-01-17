import React, { useState, useEffect } from 'react';
import StepBar from '../components/StepBar';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Coverflow from 'react-coverflow';
import { Fade } from 'react-reveal';
function Reserve(props) {
    const [department, setdepartment] = useState([
        '경상대학',
        '공학대학',
        '소프트웨어융합대학',
        '국제문화대학',
        '언론정보대학',
        '과학기술융합대학',
        '디자인대학',
        '예체능대학',
        '약학대학'
    ]);
    const [carousel, setCarousel] = useState(0);
    const params = {
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    }
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <StepBar step={1} />
                <h1 className='text-2xl text-primary tracking-widest'>"어떤 유형을 선택하시겠어요?</h1>
            </div>

            <Coverflow
                width={960} 
                height={600}
                displayQuantityOfSide={2}
                navigation={false}
                enableScroll={true}
                clickable={true}
                active={0}
                infiniteScroll
                enableHeading

            >
                {department.map((item, index) => {
                    return (
                            <img key={index} className='rounded-xl' src={`/images/하냥이_${item}.png`} alt={item} />
                    )
                })}
            </Coverflow>
        </>
    );
}

export default Reserve;