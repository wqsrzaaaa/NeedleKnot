import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";

const VersityJec = ({products}) => {

  const [sortedProducts, setSortedProducts] = useState(products);
  const [sortValue, setSortValue] = useState("");
  
  const handleSort = (e) => {
    const value = e.target.value;
    let sortedList = [...products];
  
    if (value === "low-high") {
      sortedList.sort((a, b) => Number(a.price.replace(/,/g, "")) - Number(b.price.replace(/,/g, "")));
    } else if (value === "review") {
      sortedList.sort((a, b) => Number(b.rating) - Number(a.rating));
    }
  
    setSortedProducts(sortedList);
    setSortValue(value);
  };

  return (
    <>

    <div className="w-full !pt-20">
      <div className="w-full gap-8 h-[150px] flex flex-col justify-center !pl-9">
        <div className="w-full text-2xl md:text-6xl">
          <h1>Embroidered Varsity Jacket</h1>
        </div>
        <div className="w-full flex !pr-9 justify-between">
          <div>
            <label>Sorted by: </label>
            <select value={sortValue} onChange={handleSort} className="bg-zinc-900">
              <option value="select">Select</option>
              <option value="low-high">Low to High</option>
              <option value="review">Most Review</option>
            </select>
          </div>
          <p> {products.length} Items</p>
        </div>
      </div>
      <div className="w-full justify-center flex-wrap !pt-16 flex">
        {sortedProducts.map((item, index) => (
         <Link key={index} to={'/checkout'} state = {{SelectedItem : item}}>
             <div className="w-[60vh] h-[80vh] flex flex-col items-center">
               <div className="w-[60%] h-[50vh] md:w-[90%] md:h-[60vh]">
                  <img className="w-full rounded-2xl h-full" src={item.img} alt={item.name} />
                </div>
                <div className="w-full !pt-3 flex flex-col items-center">
                  <p>{item.name}</p>
                  <div className="Stars flex gap-2">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar /> <span className="text-white">({item.rating})</span>
                  </div>
                  <p>Price: {item.price}</p>
                </div>
              </div>
          </Link>
        ))}
      </div>
    </div>
  </>
  )
}

export default VersityJec