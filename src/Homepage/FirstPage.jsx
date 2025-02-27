import React, { useState, useEffect, useRef } from "react";

import gsap from "gsap";


const FirstPage = () => {

  const [HVal, setHVal] = useState("Welcome To Needle&Knot");
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { x: 100, opacity: 0 }, 
        {
          x: 0,
          opacity: 1,
          stagger: 0.05, 
          duration: 0.8,
          ease: "power2.out",
        }
      );
    }
  }, [HVal]); 



  return (
    <div className="w-full h-[80vh] md:h-screen flex z-3 items-center relative justify-center">
    <img
      className="w-full h-full z-[-1] absolute top-0 left-0"
      src="https://needleandknot.online/cdn/shop/files/BGBYCWS-ezgif.com-video-to-gif-converter.gif?v=1708769550&width=1500"
      alt=""
    />
    <div className="items-center w-[90%] text-center md:w-[60%] flex flex-col gap-7">
      <div className=" overflow-hidden p-5 relative rounded-full text-white">
        <h1 id="Text" className="md:text-5xl whitespace-nowrap text-2xl font-bold" ref={textRef}>
          {HVal.split("").map((char, index) => (
            <span key={index} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>
      <p>Explore Our Collection</p>
    </div>
</div>
  )
}

export default FirstPage