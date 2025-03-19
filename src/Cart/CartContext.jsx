import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  const removeCart = (itemremove)=>{
    setCart((e)=> e.filter((item)=> item !== itemremove))
  }

  const [setCount, setsetCount] =  useState(() => {
    const savedCount = localStorage.getItem("Counts");
    return savedCount ? JSON.parse(savedCount) : 0;
  });
  const addCount = ()=>{
    setsetCount((prev)=> {
    const newval = prev+1
    localStorage.setItem('Counts' , JSON.stringify(newval))
    return newval
    })
  }

  const minusCount = ()=>{
    setsetCount((prev)=> 
      {const minus =  prev >= 1 ? prev - 1 : 0
        localStorage.setItem('Counts' , JSON.stringify(minus))
        return minus
      })
  }


  useEffect(() => {
    const storecount = localStorage.getItem('Counts')
  }, [])
  const CompleteOrder = ()=>{
    setCart([]),
    setsetCount(0)
  }
    const [cart, setCart] = useState(() => {
      const savedCart = localStorage.getItem("CartItem");
      return savedCart ? JSON.parse(savedCart) : [];
    });


    
   
    useEffect(() => {
      localStorage.setItem("CartItem", JSON.stringify(cart));
    }, [cart]);



  return (
    <CartContext.Provider value={{CompleteOrder,setCart ,cart, minusCount ,addToCart,addCount, setCount , removeCart }}>
      {children}
    </CartContext.Provider>
  );
};
