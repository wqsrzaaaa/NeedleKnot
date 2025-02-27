import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/pagination";
import { Pagination } from "swiper/modules"; 
import { IoIosStar } from "react-icons/io";
import { useSwiperContext } from '../Context';
import { Link } from 'react-router-dom';

const slides = [
  { name: 'Ace White Beards', img: "https://needleandknot.online/cdn/shop/files/IMG_0819_3.heic?v=1732257825&width=360", price: '3199', rating: '2' },
  { name: "Itachi X Sasukay", price: "3199", rating: '3', img: 'https://needleandknot.online/cdn/shop/files/PSX_20241105_000722.jpg?v=1730747920&width=360' },
  { name: "Scout Regiment", price: '3199', rating: '2', img: "https://needleandknot.online/cdn/shop/files/PSX_20241101_015128.jpg?v=1730408003&width=360" },
  { name: "The Honored One", price: "3199", rating: "3", img: "https://needleandknot.online/cdn/shop/files/PSX_20241101_020214.jpg?v=1730408655&width=360" },
];

const Swiperjs = () => {
  const { activeIndex, setActiveIndex } = useSwiperContext();

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <div className="w-full max-w-full  px-4 sm:px-0"> 
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}  
        spaceBetween={10}
        centeredSlides={true}
        initialSlide={0}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full !overflow-visible  max-w-full relative z-10"
        breakpoints={{
          480: { slidesPerView: 1, spaceBetween: 10 }, // Mobile screens
          640: { slidesPerView: 2, spaceBetween: 15 }, // Tablets
          1024: { slidesPerView: 3, spaceBetween: 30 } // Large screens
        }}
      >
        {slides.map((text, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Link to={'/versityjec'}>
              <div
                className={`w-full max-w-[300px] !ml-12 sm:max-w-[350px] h-[550px] flex flex-col items- relative transition-all duration-300 
                  ${index === activeIndex ? "scale-105" : "scale-95"}`}
              >
                <div className="w-full h-[400px] rounded-2xl ">
                  <img className="w-full h-full rounded-2xl object-cover" src={text.img} alt={text.name} />
                </div>
                <div className="w-full flex flex-col items-center mt-3">
                  <p className="text-sm sm:text-base text-center">{text.name}</p>
                  <p className="flex Stars gap-1 !pt-2 text-xs sm:text-sm">
                    {Array(5).fill(0).map((_, i) => (
                      <IoIosStar key={i} className={i < text.rating ? "text-yellow-500" : "text-gray-300"} />
                    ))}
                    <span className="Span-Star">({text.rating})</span>
                  </p>
                  <p className="text-sm sm:text-base">{text.price} PKR</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swiperjs;
