import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from "react";
import Slider from 'react-slick'


export default function EventCarousel()
{
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    

    useEffect(()=>{
        function handleWindowChange()
        {
            setWindowSize({
                width : window.innerWidth,
                height : window.innerHeight
            })
        }


        window.addEventListener('resize', handleWindowChange)
    }, [])
    const showOnDesktop = windowSize.width < 650
    return (
        <Slider arrows={false} className="relative z-0">
            {
                showOnDesktop ?
                <div>
                <img src="https://placehold.co/1080x300" alt=""/>
                </div> :
                <div>
                <img src="https://placehold.co/1920x300" alt="" />
                </div>
            }
            {
                showOnDesktop ?
                <div>
                <img src="https://placehold.co/1080x300" alt=""/>
                </div> :
                <div>
                <img src="https://placehold.co/1920x300" alt="" />
                </div>
            }
        </Slider>
    )
}