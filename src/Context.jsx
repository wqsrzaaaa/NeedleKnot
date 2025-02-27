import React, {useState,useContext, createContext } from 'react'
export const context = createContext()
export const Context = ({children}) => {

  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <context.Provider value={{activeIndex , setActiveIndex}}> 
      {children}
    </context.Provider>
  )
}

export const useSwiperContext = () => {
  return useContext(context);
};