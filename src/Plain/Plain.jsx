import React, { useState } from 'react'
import { IoIosStar } from "react-icons/io";
import { Link } from 'react-router-dom';

const Plain = ({products}) => {

  const [sortBy, setsortBy] = useState('');
  const [Shirts, setShirts] = useState(products)
    const handleSort = (e) => {
      let sortedShirts = [...Shirts];
    
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
      <div className='w-full !pt-20'>
        <div className='w-full h-[200px] flex-col flex justify-center gap-7 !pl-9'>
          <h1 className='text-2xl md:text-4xl'>Plain Items</h1>
          <div className='w-full flex !pr-9 justify-between'>
             <div className='md:w-[400px] gap-3 flex '>
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
             <p className='text-zinc-500'>{Shirts.length} Items</p>
          </div>
        </div>
        <div className='w-full flex-wrap !pb-9 flex justify-center '>
       {Shirts.map((e,i)=>(
         <Link key={i}
         to="/checkout"
         state={{ SelectedItem: e }}>
            <div key={i} className='md:w-[60vh] w-[40vh] h-[70vh] md:h-[80vh] flex flex-col items-center'>
            <div className='w-[90%] h-[50vh] md:h-[60vh] '>
             <img className='w-full rounded-2xl h-full' src={e.img} alt="" />
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

export default Plain