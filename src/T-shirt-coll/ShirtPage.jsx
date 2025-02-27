import React, { useState } from 'react'
import { IoIosStar } from "react-icons/io";

const ShirtPage = () => {
  const [sortBy, setsortBy] = useState("");
  const handleSort = (e) => {
    let sortedShirts = [...shirts];
  
    if (e === "price-low-high") {
      sortedShirts.sort((a, b) => 
        Number(a.price.replace(/,/g, "")) - Number(b.price.replace(/,/g, ""))
      );
    } else if (e === "price-high-low") {
      sortedShirts.sort((a, b) => 
        Number(b.price.replace(/,/g, "")) - Number(a.price.replace(/,/g, ""))
      );
    }else if(e === 'review'){
      sortedShirts.sort((a,b)=>(
        Number(b.rating) - Number(a.rating)
      ))
    }
  
    setShirts(sortedShirts);
    setsortBy(e)
  };
  




  return (
    <div className='w-full'>
      <div className='w-full h-[200px] flex-col flex justify-center gap-7 !pl-9'>
        <h1 className='text-4xl'>Embroided T-Shirts / Drop shoulder</h1>
        <div className='w-full flex !pr-9 justify-between'>
           <div className='w-[400px] gap-3 flex '>
           <label>Sort By:</label>
            <select
            className='bg-zinc-900'
              value={sortBy}
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="">Select</option>
              <option value="price-low-high">Low to High</option>
              <option value="price-high-low">High to Low</option>
              <option value="review">Most Reviewed</option>
            </select>
              
           </div>
           <p className='text-zinc-500'>{shirts.length} Preducts</p>
        </div>
      </div>
      <div className='w-full flex-wrap flex justify-center '>
     {shirts.map((e,i)=>(
       <div key={i} className='w-[60vh] h-[80vh] flex flex-col items-center'>
          <div className='w-[90%] h-[60vh] '>
            <img className='w-full h-full' src={e.img} alt="" />
          </div>
          <div className='w-full !pt-3 flex flex-col items-center '>
            <p>{e.name}</p>
            <div className='Stars flex gap-2'><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/> <span className='text-white'>({e.rating})</span> </div>
            <p>price {e.price}</p>
          </div>
       </div>
     ))}
     </div>
    </div>
  )
}

export default ShirtPage