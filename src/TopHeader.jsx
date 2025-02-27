import React, { useContext, useState, useEffect } from "react";
import { HashRouter  as Router, Link, Route, Routes } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { CartContext } from "./Cart/CartContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from "./RoutePath/Home";
import TShirt from "./RoutePath/T-shirts";
import VersityJec from "./RoutePath/VersityJec";
import Hoodies from "./RoutePath/Hoodies";
import Checkout from "./CheckOut/CheckOut";
import AddtoCart from "./Cart/AddtoCart";
import Plain from "./Plain/Plain";
import { CiMenuFries } from "react-icons/ci";

const TopHeader = ({ shirts, category, plain, Hoodie, jecket, setsearch, search }) => {
  const [scrollHeight, setScrollHeight] = useState(120);
  const [hiddenOpacity, setHiddenOpacity] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const { setCount } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollHeight(60);
        setHiddenOpacity(0);
      } else {
        setScrollHeight(120);
        setHiddenOpacity(1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const PrevArrow = ({ onClick }) => (
    <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10" onClick={onClick}>
      <GrFormPrevious size={12} />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10" onClick={onClick}>
      <GrFormNext size={12} />
    </button>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const [SideBarScale, setSideBarScale] = useState(0)

  return (
    <Router>
      <header style={{ height: `${scrollHeight}px` }} id="nav-header" className="w-full items-center  gap-3 z-50 transition-all duration-300 fixed top-0 md:flex flex-col text-white">
        <div className="w-full md:w-[80%] md:text-2xl text-[12px] mx-auto h-[30px]">
          <Slider style={{ opacity: `${hiddenOpacity}` }} {...settings}>
            <div className="w-full flex items-center justify-center"><h3 className="text-center">Pakistan Largest Embroidered Brand</h3></div>
            <div className="w-full flex items-center justify-center"><h3 className="text-center">Buy 3 get 300rs off</h3></div>
            <div className="w-full flex items-center justify-center"><h3 className="text-center">Buy 5 get 500rs off</h3></div>
            <div className="w-full flex items-center justify-center"><h3 className="text-center">Free delivery all over Pakistan</h3></div>
            <div className="w-full flex items-center justify-center"><h3 className="text-center">Pakistan First Anime Embroidered Brand</h3></div>
          </Slider>
        </div>

        <div className="flex bg-black w-[90%] absolute left-1/2 top-1/3  -translate-x-1/2 rounded-full items-center justify-between px-4 md:px-8 lg:px-16 py-3 md:py-4">
          <div className="flex items-center">
            <img className="w-[50px] h-[50px]" src="https://needleandknot.online/cdn/shop/files/logo-modified_6f9455bb-5b8a-4e32-966d-504163f2aa75.png?v=1706389444&width=50" alt="Logo" />
          </div>

          <nav id="nav-bar" className="hidden md:flex">
            <Link id="HeaderHover" to="/">Home</Link>
            <Link id="HeaderHover" to="/tshirt">T-Shirt</Link>
            <Link id="HeaderHover" to="/versityjec">Versity Jacket</Link>
            <Link id="HeaderHover" to="/hoodies">Hoodies</Link>
            <Link id="HeaderHover" to="/plain">Plain</Link>
          </nav>
          <div className="flex space-x-4 text-2xl">
            <CiSearch onClick={() => setsearch(!search)} className="cursor-pointer" />
            <Link className="relative" to={'/addtocart'}>
              <FiShoppingBag className="cursor-pointer" />
              <p className="absolute -top-2 -right-2 bg-orange-400 rounded-full w-6 h-6 flex items-center justify-center text-sm">{setCount}</p>
            </Link>
            <CiMenuFries onClick={()=>setSideBarScale(1)} className="md:hidden block" />
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden flex flex-col items-center space-y-4 bg-black py-4">
            <Link className="hover:text-gray-400" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link className="hover:text-gray-400" to="/tshirt" onClick={() => setMenuOpen(false)}>T-Shirt</Link>
            <Link className="hover:text-gray-400" to="/versityjec" onClick={() => setMenuOpen(false)}>Versity Jacket</Link>
            <Link className="hover:text-gray-400" to="/hoodies" onClick={() => setMenuOpen(false)}>Hoodies</Link>
            <Link className="hover:text-gray-400" to="/plain" onClick={() => setMenuOpen(false)}>Plain</Link>
          </nav>
        )}
      </header>

        <div style={{scale : SideBarScale}} className="w-full transition-all duration-300 flex items-center text-black text-2xl justify-center flex-col gap-9 h-screen bg-white fixed z-999 opacity-90 top-0 ">
          <div onClick={
            ()=>(
              setSideBarScale(0)
            )
          } className="w-[30px] h-[30px] bg-red-400 absolute flex items-center justify-center text-white top-[10vh] left-[80%]">X</div>
          <h1 className="text-4xl font-bold">Suggestions</h1>
          <div onClick={()=>setSideBarScale(0)} className="flex items-center text-black text-2xl justify-center flex-col gap-9">
              <Link to={'/'}>Home</Link>
              <Link to={'/tshirt'}>T-Shirts</Link>
              <Link to={'/versityjec'}>Versity Jeckets</Link>
              <Link to={'/hoodies'}>Hoodies</Link>
              <Link to={'/plain'}>Plain</Link>
              <Link to={'/addtocart'}>Your Cart</Link>
          </div>
        </div>

      <div className="pt-[50px]">
        <Routes>
          <Route path="/" element={<Home products={plain} />} />
          <Route path="/addtocart" element={<AddtoCart />} />
          <Route path="/tshirt" element={<TShirt products={shirts} />} /> 
          <Route path="/versityjec" element={<VersityJec products={jecket} />} />
          <Route path="/hoodies" element={<Hoodies products={Hoodie} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/plain" element={<Plain products={category} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default TopHeader;
