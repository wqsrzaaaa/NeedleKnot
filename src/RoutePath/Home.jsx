import FirstPage from "../Homepage/FirstPage";
import { MdOutlineCelebration } from "react-icons/md";
import Swiperjs from "../Homepage/Jecket";
import PlainShirt from "../Homepage/PlainShirt";
import { useState } from "react";
import { Link } from "react-router-dom";
import React, { useEffect, useRef} from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaWhatsappSquare } from "react-icons/fa";



gsap.registerPlugin(ScrollTrigger);





const Home = ({products}) => {


  const ref = useRef(null);
  const [Items, setItems] = useState("Needle & Knot");

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        if (ref.current) {
          gsap.fromTo(
            ref.current.children,
            { y: 100, opacity: 0 }, 
            { y: 0, opacity: 1, stagger: 0.05, duration: 0.6 }
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const [whatsapp, setwhatsapp] = useState('')
  const onkey = (e)=>{
    if(e.key === 'Enter'){
      const mynum = `https://wa.me/923422651792`
      window.open(mynum , '_blank')
    }
  }

  const [width, setwidth] = useState('0%')
  const [Scale, setScale] = useState('1')

  return (

    
    <div id="main" className="w-full z-2 relative">

      {/* Whatsapp Call  */}
      <div 
      onClick={()=>{
        setScale(Scale === 1 ? 0 : 1)
        setwidth(width === '0%' ? "300px" : "0%")
        
      }}
      className="w-[60px] h-[30px] hover:w-[80px] fixed items-center hover:scale-200 transition-all duration-300 cursor-cell right-[0px] top-[90%] z-99 flex ">
          <FaWhatsappSquare className="text-4xl text-green-800 absolute right-[20px] "/>
      </div>
      <div 
      style={{scale : Scale , width : width }}
      className=" h-[200px]
       right-[20px] md:right-[90px] top-[65%] md:top-[60%]
       flex-col items-center gap-2 bg-white overflow-hidden flex  fixed transition-all duration-300 rounded-2xl  z-99">
        <div className="w-full flex flex-col items-center gap-3 justify-center h-[150px] text-white bg-green-800">
          <FaWhatsappSquare className="text-6xl rounded-full"/>
          <p>Need a help? Chat with us</p>
          <p>Type anything</p>
        </div>
        <input type="text" 
        onKeyDown={onkey}
        value={whatsapp}
        onChange={(e)=> setwhatsapp(e.target.value)}
        placeholder="Type Anything." 
        className="text-black !p-2 w-[90%] h-[30px] border border-gray-700 rounded-full appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        onWheel={(e) => e.target.blur()} 
        
         />
      </div>





           <FirstPage />
            <div className='w-full '>
              <div className='w-full bg-zinc-950 flex-col h-[250px] text-[20px] md:text-3xl font-bold gap-4 flex items-center justify-center'>
                <h1>5000+ Satisfied Costumer <span className='inline-block'>{<MdOutlineCelebration />}</span> </h1>
              </div>
              <div className='w-full bg-zinc-950 flex gap-3 flex-wrap justify-center'>
                <div className='w-[70vh] md:w-[100vh] h-full flex flex-col gap-3 items-center justify-center '>
                    <div className = 'md:w-[90vh] w-[45vh] hover:scale-[1.05] transition-all duration-300 h-[70vh] md:h-[90vh] overflow-hidden rounded-3xl'>
                       <Link to="/tshirt"><img onClick={()=> setSelected('Tshirt')} className='w-full h-full object-center object-cover' src="https://needleandknot.online/cdn/shop/collections/2ih4.gif?v=1706433251&width=750" alt="" /></Link>
                    </div>
                    <h1 className='text-[20px] text-center md:text-2xl'>Embroided T-Shirt / Drop Shoulder</h1>
                </div>
                <div className='w-[70vh] md:w-[100vh] h-full flex flex-col gap-3 items-center justify-center '>
                    <div className = 'w-[45vh] md:w-[90vh] hover:scale-[1.05] transition-all duration-300  h-[70vh] md:h-[90vh] overflow-hidden rounded-3xl'>
                        <Link to={'/hoodies'} ><img onClick={()=> setSelected('Hoodies')} className='w-full h-full object-center object-cover' src="https://needleandknot.online/cdn/shop/collections/hoodie.gif?v=1707379370&width=750" alt="" />
                        </Link>
                    </div>
                    <h1 className='text-[20px] md:text-2xl'>Embroided Hoodies</h1>
                </div>
                
              </div>
              <div className='bg-zinc-950 w-full'>
                <div className='w-full h-[300px] text-[20px] md:text-3xl font-bold text-center items-center flex justify-center'>
                  <h1 className='decoration'>Embroided Versity Jecket Collection</h1>
                </div>
                < Swiperjs />
                
              </div>
                <div className="w-full bg-zinc-950 ">
                <div className='w-full h-[300px] text-3xl font-bold items-center flex justify-center'>
                  <h1 className='decoration'>Plain Collection</h1>
                </div>
                    <PlainShirt pro = {products} />
                </div>
            </div>




            <div className='w-full h-[60vh] bg-transparent'></div>
           
           
           
           {/* footer */}
            <div id="footer" className='w-full flex-col !pt-35 md:!p-0 h-[70vh] flex bg-black fixed bottom-0 -z-1'>
              <div id="inside-footer" className='flex pt-20 !pb-6'>
                <div className='w-[50vh] h-full flex items-center justify-center'> 
                  <img className='w-[100px] h-[100px]' src="https://needleandknot.online/cdn/shop/files/logo-modified_6f9455bb-5b8a-4e32-966d-504163f2aa75.png?v=1706389444&width=50" alt="" />
                </div>
                <div className='w-full min-w-[45vh] h-full md:relative absolute md:top-0 top-1/4 md:-translate-y-[90px] -translate-y-[60px] flex gap-6 flex-col !pt-45 !pl-5 md:!pl-25'>
                  <h1>Welcome To</h1>
                  <div id='Span-Item' className='w-full overflow-hidden h-[70px] md:h-[120px] text-4xl md:text-8xl border-b-2 flex items-end justify-center relative'>
                    <h1 ref={ref}>
                      {Items.split('').map((e, i) => (
                        <span key={i} className='inline-block'>{e === " " ? '\u00A0' : e}</span>
                      ))}
                    </h1>
                  </div>
                  <p className='text-zinc-500'>Be bold, be unique—be Needle and Knot!</p>
                </div>
              </div>
              <div className='w-full absolute top-[90%] border-t-1 !pl-9 !pt-2 text-[12px] border-zinc-700'>
                <h1>© 2025, Needle And Knot</h1>
              </div>
            </div>
      </div>
  );
};

export default Home;
