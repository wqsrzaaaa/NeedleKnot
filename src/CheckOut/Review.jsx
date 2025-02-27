import React , {useState} from 'react'
import { IoIosStar } from "react-icons/io";


const Review = ({product,setScaling , Scaling}) => {
  
  const [AddReview, setAddReview] = useState(Number(product.rating));

  const addreview = ()=>{
   setAddReview((prev)=> prev + 1)
   setScaling(false) 
 }


     const [HoverNo, setHoverNo] = useState(0)
     const [selected, setselected] = useState(0)
  
  
  return (
    <>
         <div 
          className={`${Scaling ? 'scale-100' : 'scale-0'} w-full transition-all duration-200 opacity-90 h-screen fixed top-0 z-9999 bg-zinc-400 `}>
            <div className="w-[40vh] md:w-[80vh] !p-3 h-[80vh] flex flex-col gap-3 bg-zinc-800 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
              <div onClick={()=> setScaling(!Scaling && false  )} className="absolute top-5 left-[80%] cursor-pointer w-[30px] h-[30px] bg-red-400 flex items-center justify-center !ml-5">X</div>
              <p>How do you like this item? </p>
              <div className="flex items-center gap-5">
                 <img className="w-[100px] h-[150px]" src={product.img} alt="" />
                 {[1, 2, 3, 4, 5].map((index) => (
            <IoIosStar
              key={index}
              className={`cursor-pointer transition-colors duration-200 ${
                index <= (HoverNo || selected) ? "text-yellow-300 text-shadow scale-[1.4]" : "text-gray-400"
              }`} 
              onClick={()=>setselected(index)}
            />
          ))}
    
              </div>
              <textarea className="w-[90%] h-[120px] border-1 " placeholder="Enter Your Feedback" >
              </textarea>
              <button 
              onClick={()=> (
                addreview()
              )}
              className="!p-3 bg-green-500 w-[200px] hover:bg-black">Submit</button>
            </div>
          </div>


    
    <div className="w-full md:!p-0 !p-5 h-[50vh] flex-col justify-center text-[15px] text-center md:text-[20px] gap-3 items-center flex ">
          <p>Free Delivery all over Pakistan</p>
          <p>Shirts | 180 GSM | 80% Cotton | 20% Polyester</p>
          <p>Hoodie | 320 GSM | 80% Cotton | 20% Polyester</p>
          <p>Soft And Washable Fabric</p>
      </div>



      {/* review */}
      <div className="w-full !p-6 h-[40vh] md:h-[60vh] flex-col flex"> 
        <div className="h-[100px]">Reviews</div>
        <div className="w-full flex justify-between !p-4">
          <div className="w-[50vh] !pr-4 border-r-1 flex h-full items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-4xl">5.0</h1>
              <div className='Stars flex gap-2'><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/></div>
              <p>{AddReview} reviews</p>
            </div>
          </div>
          <div className="w-[130vh] h-full flex flex-col gap-2 ">

          </div>
          <div className="w-[90vh] flex flex-col gap-3 items-center h-full">
            <p>click to review</p>
            <div className="flex gap-2 text-2xl md:text-4xl">
            {[1, 2, 3, 4, 5].map((index) => (
        <IoIosStar
          key={index}
          className={`cursor-pointer transition-colors duration-200 ${
            index <= HoverNo ? "text-yellow-300 text-shadow scale-[1.4]" : "text-gray-400"
          }`} 
          onMouseEnter={() => setHoverNo(index)}
          onMouseLeave={() => setHoverNo(0)}
          onClick={()=> (
            setScaling(true),
            setselected(index)
          )}
        />
            ))}
            </div>
          </div>
        </div>
      </div> 
    </>
         



  )
}

export default Review