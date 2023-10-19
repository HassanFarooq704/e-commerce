'use client';
import Slider from "react-slick";
import Image from 'next/image'
import bannerone from '../../../public/bannerone.jpg'
import bannertwo from '../../../public/bannertwo.jpg'
import bannerthree from '../../../public/bannerthree.jpg'
import { PiCaretLeftLight, PiCaretRightLight } from 'react-icons/pi'
import Bannertext from "./Bannertext";

const Banner = () => {
    const NextArrow = (props: any) => {
        const { onClick } = props;
        return (
            <div
                className="p-3 bg-slate-100 hover:text-orange-500 hover:bg-white rounded-full cursor-pointer
            duration-200 text-2xl flex items-center justify-center z-20 absolute right-5 top-1/2" onClick={onClick}>
                <PiCaretRightLight />
            </div>
        )
    }
    const PrevArrow = (props: any) => {
        const { onClick } = props;
        return (
            <div
                className="p-3 bg-slate-100 hover:text-orange-500 hover:bg-white rounded-full cursor-pointer
            duration-200 text-2xl flex items-center justify-center z-20 absolute left-5 top-1/2" onClick={onClick}>
                <PiCaretLeftLight />
            </div>
        )
    }
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };
    return (
        <div className="w-full h-full relative">
            <Slider {...settings}>
                <div className="w-full h-full relative">
                    <Image src={bannerone}
                        alt="bannerone"
                        className="w-full h-full relative" 
                        priority
                        />
                    <Bannertext title="OutWare PickUp" />
                </div>
                <div className="w-full h-full relative">
                    <Image src={bannertwo}
                        alt="bannertwo"
                        className="w-full h-full relative" />
                    <Bannertext title="Seasonal Offers" />
                </div>
                <div className="w-full h-full relative">
                    <Image src={bannerthree}
                        alt="bannerthree"
                        className="w-full h-full relative" />
                    <Bannertext title="Best for men" />
                </div>
            </Slider>
            <div className="absolute w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10"></div>
        </div>
    )
}

export default Banner