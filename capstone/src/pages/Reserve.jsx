import React from 'react';
import StepBar from '../components/StepBar';
import { Fade } from 'react-reveal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import DepartmentCard from '../components/DepartmentCard';
function Reserve(props) {
    const department = [
        '경상대학',
        '공학대학',
        '소프트웨어융합대학',
        '국제문화대학',
        '언론정보대학',
        '과학기술융합대학',
        '디자인대학',
        '예체능대학',
        '약학대학'
    ];
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <Fade>
            <div className='flex flex-col justify-center items-center'>
                <StepBar step={1} />
                <h1 className='text-2xl text-primary tracking-widest'>"어떤 유형을 선택하시겠어요?</h1>
            </div>
            <Slider {...settings}>
                {department.map((item, index) => {
                    return (
                        <DepartmentCard key={index} item={item} text={item} title={item} />
                    )
                })}
            </Slider>
        </Fade>
    );
}

export default Reserve;