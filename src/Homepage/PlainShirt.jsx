import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/pagination";
import { Pagination } from "swiper/modules"; 
import { IoIosStar } from "react-icons/io";
import { Link } from 'react-router-dom';

const PlainShirt = ({ pro }) => {
  const [Plain] = useState(pro);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full !pl-14 max-w-full px-4 sm:px-0"> 
      <Swiper 
        modules={[Pagination]}
        slidesPerView={1} 
        spaceBetween={10}
        centeredSlides={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full max-w-full !overflow-visible relative z-10"
        breakpoints={{
          480: { slidesPerView: 1, spaceBetween: 10 }, // Small mobile
          640: { slidesPerView: 2, spaceBetween: 15 }, // Tablets
          1024: { slidesPerView: 3, spaceBetween: 30 } // Large screens
        }}
      >
        {Plain.map((text, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Link to={'/checkout'} state={{ SelectedItem: text }}>
              <div
                className={`w-full max-w-[280px] sm:max-w-[350px] h-[550px] flex flex-col items-center relative transition-all duration-300 
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

export default PlainShirt;
