import gsap from "gsap";
import React, { useContext } from "react";
import { useEffect, useRef, useState } from "react";
import { CartContext } from "../Cart/CartContext"; 
import { useLocation, useNavigate } from "react-router-dom";
import Review from "./Review";


let size = [
  'Small' , "Medium" , "Large" , "Extra Large"
]

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.SelectedItem;
  const [Quantity, setQuantity] = useState(1)
  const [Payment, setPayment] = useState(false)

  

  const decrement = ()=>{
    if(Quantity > 1){
      setQuantity((prev)=>prev - 1)
    }
  }
  const increment = ()=>{
    setQuantity((prev)=> prev + 1)
  }


  if (!product) {
    return <h2>Sold Out</h2>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  const [SpanCon, setSpanCon] = useState(product.name)
  const ref = useRef(null)
   
  useEffect(() => {
    if(ref.current){
      gsap.fromTo(ref.current.children ,
        {opacity : 0 , scale : 0},
        {opacity : 1 , scale : 1 , duration : .5 , stagger : .13 , }
    )
    }
  
  
  }, [])
  
  const [SelectedOne, setSelectedOne] = useState(size[0])
   const ItemClick = (event)=>{
    setSelectedOne(event)
   }

   const [Email, setEmail] = useState('')
   const [address, setaddress] = useState('')
   const [Contact, setContact] = useState('')
   const [AddReview, setAddReview] = useState(Number(product.rating));
   const [Scaling, setScaling] = useState(false)
   const [OrderCompleted, setOrderCompleted] = useState(false)
   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Order Sending....");
    
    const formData = new FormData(event.target);

    formData.append("access_key", "3503e0f4-fe1b-4ab2-9d43-613d84938884");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Order Submitted.");
      event.target.reset();
      setOrderCompleted(true)
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const discount = ()=>{
    if(Quantity >= 3 && Quantity < 5){
       return ((parseFloat(product.price.replace(/,/g,''))* Quantity)-300 + ' ( 300PKR discount added)') 
    }else if(Quantity >= 5){
      return (parseFloat(product.price.replace(/,/g,''))* Quantity) - 500 + '(500PKR discount added)'
      }else{
        return parseFloat(product.price.replace(/,/g,''))* Quantity
      }
    }

    
    const { addToCart , addCount  } = useContext(CartContext); 
    const handleAddToCart = () => {
      if (!product) return;  
    

      const cartItem = { 
        category : product.category,
        name: product.name, 
        size: SelectedOne, 
        img: product.img,
        price: product.price, 
        quantity: Quantity,
      };
      

      
      addToCart(cartItem); 
    };


    const [WatchlistScale, setWatchlistScale] = useState(0)
    const [Watchlisttop, setWatchlisttop] = useState('-50')
    const WatchListTrue = ()=>{
      setWatchlistScale(1)
      setWatchlisttop('140')
      setTimeout(() => {
        setWatchlistScale(0)
        setWatchlisttop('-50')
      }, 3000);

    }


  return (
    <>

    {/* order Confirmation */}
    <div className={`${Payment ? "scale-100" : "scale-0"} w-full transition-all duration-200 opacity-90 h-screen fixed top-0 z-9999 bg-zinc-400`}>
      <div className="w-[40vh] overflow-x-hidden overflow-y-scroll md:w-[110vh] !p-3 h-[80vh] items-center gap-4 md:flex-row flex-col flex bg-zinc-800 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        {!OrderCompleted ? (
          <>
          <div onClick={() => setPayment(false)} className="absolute top-5 left-[80%] !ml-5 cursor-pointer w-[30px] h-[30px] bg-red-400 flex items-center justify-center ">X</div>
          <img className="w-[200px] rounded-2xl h-[350px]" src={product.img} alt="" />
          <div className="w-[35vh] md:w-[80vh] flex flex-col gap-3">
        
          <form className="w-full flex !pb-5 flex-col gap-3" onSubmit={onSubmit}>
             

              <p>Price: {product.price}</p>
              <p>Total price: {discount()}</p>
              <p>Cash on delivery</p>

              {result ? <p className="text-white">{result}</p>
              :
              <>
                <p className="text-2xl font-bold">{product.name}</p>
                  <div className="flex gap-9">
                    <p>Quantity: {Quantity}</p>
                    <p>Size: {SelectedOne}</p>
                  </div>

                  <input type="hidden" name="product_name" value={product.name} />
                  <input type="hidden" name="product_cetegory" value={product.category} />
                  <input type="hidden" name="quantity" value={Quantity} />
                  <input type="hidden" name="size" value={SelectedOne} />
                  <input type="hidden" name="price" value={product.price} />
                  <input type="hidden" name="total_price" value={product.price} />

                  <input
                    name="email"
                    type="email"
                    required
                    className="!p-3 border-1"
                    placeholder="Email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    name="contact"
                    type="number"
                    required
                    className="!p-3 border-1"
                    placeholder="Contact No."
                    value={Contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                  <input
                    name="address"
                    type="text"
                    required
                    className="!p-3 border-1"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}
                  />
                  <button type="submit" className="!p-3 bg-green-500 w-[200px] hover:bg-black">
                  Complete Order
                </button>
              </>
              }
            </form>

          </div>
          </>
        )
          :  <>
            <div className="w-full flex-col gap-3 h-full flex items-center relative justify-center">
            <div onClick={() => setPayment(false)} className="absolute top-5 left-[80%] cursor-pointer w-[60px] bg-zinc-800 h-[60px]">X</div>
              <span className="text-2xl">{result}</span>
              <p>Thank you for shopping</p>
              <button onClick={()=> navigate("/")} className="w-[300px] !p-3 bg-green-500">Continue shopping.</button>
           </div>
          </>
    } 
        
      </div>
    </div>

      {/* Order Item */}
      <div className="w-full !pt-35 flex justify-center flex-wrap">
       <div className="w-[40vh] rounded-2xl overflow-hidden h-[50vh] md:w-[80vh] md:h-full justify-center  flex flex-col gap-5 items-center">
          <img src={product.img} alt={product.name} className="w-[50vh] h-[70vh]" />
       </div>
       <div className="w-[40vh] md:w-[120vh] md:items-start  md:!pt-0 !pt-9 h-full flex  justify-center flex-col gap-4">
          <h1 ref={ref} className="text-4xl font-bold">{
          SpanCon.split("").map((e,i)=>(
            <span key={i}>{e}</span>
          ))
          }</h1>
          <p>Price: {product.price} PKR</p>
          <p className="flex flex-col gap-3">Quantity : <button className="w-[130px] flex justify-between items-center bg-zinc-800 "><span className="text-3xl !p-2 font-bold"  onClick={decrement}>-</span>{Quantity} <span className="text-3xl !p-2" onClick={increment}>+</span></button> </p>
          <div className="w-[40vh] md:w-[100vh] flex flex-col gap-4 ">
            <p>Size : </p>
            <div className="w-[40vh] md:w-[100vh] flex flex-wrap gap-6">{size.map((e,i)=>(
              <button onClick={()=> ItemClick(e)} className={`!p-3 ${SelectedOne === e ? 'bg-zinc-500 text-black' : "bg-zinc-800"} `} key={i}>{e}</button>
            ))}</div>
          </div>
          <button  onClick={()=> (
            handleAddToCart(),
            addCount(),
            WatchListTrue()
            )}  className="bg-blue-500 w-[30vh] md:w-[100vh] text-white p-4 mt-4">Add to watchlist</button>
          <button onClick={()=> setPayment(Payment ? false : true)} className="bg-green-500 w-[30vh] md:w-[100vh] text-white p-4 mt-4">Proceed to Payment</button>
        </div>
      </div>
      <Review setScaling={setScaling} Scaling = {Scaling} product = {product} />
    

        <div style={{scale : WatchlistScale , top : `${Watchlisttop}px`}} className="w-[50vh] !pb-4 !pt-2 transition-all duration-300 md:-translate-y-0 -translate-y-10  bg-zinc-800 gap-4 flex flex-col items-center fixed right-2 z-999">
          <img className="w-[60%] h-[30vh] object-cover" src={product.img} alt="" />
          <p className="w-[90%] text-center"><span className="text-orange-500">{product.name}</span> is added to your cart</p>
        </div> 

    </>
  );
};

export default Checkout;
