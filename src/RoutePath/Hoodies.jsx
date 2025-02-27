import React, { useState } from 'react'
import { IoIosStar } from "react-icons/io";
import { Link } from 'react-router-dom';


const Hoodies = ({products}) => {
  const [sortBy, setsortBy] = useState("");
  const [Hoodies , setHoodies] = useState(products)


  const handleSort = (e) => {
    let sortedHoodies = [...Hoodies];
  
    if (e === "price-low-high") {
      sortedHoodies.sort((a, b) => 
        Number(a.price.replace(/,/g, "")) - Number(b.price.replace(/,/g, ""))
      );
    } else if (e === "price-high-low") {
      sortedHoodies.sort((a, b) => 
        Number(b.price.replace(/,/g, "")) - Number(a.price.replace(/,/g, ""))
      );
    }else if(e === 'review'){
      sortedHoodies.sort((a,b)=>(
        Number(b.rating) - Number(a.rating)
      ))
    }
  
    setHoodies(sortedHoodies);
    setsortBy(e)
  };



  return (
    <div className='w-full !pt-20 '>
    <div className='w-full h-[200px] flex-col flex justify-center gap-7 !pl-5 md:!pl-9'>
    <h1 className='text-2xl md:text-4xl'>Embroided T-Hoodies / Drop shoulder</h1>
    <div className='w-full flex !pr-9 justify-between'>
       <div className='md:w-[400px] text-[15px] gap-3 flex '>
       <label>Sort By:</label>
        <select
        className='bg-zinc-900 md:w-[200px] w-[100px]'
          value={sortBy}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="">Select</option>
          <option value="price-low-high">Low to High</option>
          <option value="price-high-low">High to Low</option>
          <option value="review">Most Reviewed</option>
        </select>
          
       </div>
       <p className='text-zinc-500'>{Hoodies.length} Preducts</p>
    </div>
  </div>
  <div className='w-full flex !pb-9 flex-wrap justify-center gap-9'>
      {Hoodies.map((e,i)=>(
            <Link key={i} to={'/checkout'} state={{SelectedItem : e}}>
               <div className='md:w-[60vh] md:h-[90vh] w-[40vh] h-[70vh] flex flex-col items-center'>
               <div className='w-[90%] h-[60vh] md:h-[70vh] '>
                 <img className='w-full h-full rounded-2xl' src={e.img} alt="" />
               </div>
               <div className='w-full !pt-3 flex flex-col items-center '>
                 <p>{e.name}</p>
                 <div className='Stars flex gap-2'><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/> <span className='text-white'>({e.rating})</span> </div>
                 <p>price {e.price}</p>
               </div>
              </div>
            </Link>
          ))}
  </div>
  </div>
  )
}

export default Hoodies