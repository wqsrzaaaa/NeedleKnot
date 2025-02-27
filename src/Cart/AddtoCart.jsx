import React , { useContext, useState, useEffect } from "react";
import { CartContext } from "../Cart/CartContext";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AddtoCart = () => {
  const { cart, setCart, removeCart, CompleteOrder , minusCount } = useContext(CartContext);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate =   useNavigate()
  const [result, setResult] = React.useState("");
  

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("CartItem")) || [];
    if (storedCart.length > 0) {
      setCart(storedCart);
    }
  }, []); 
  
 
 
 
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Order Sending....");

    const formData = new FormData(event.target);
  
    formData.append("access_key", "3503e0f4-fe1b-4ab2-9d43-613d84938884");
  
    let productDetails = cart
      .map((product, index) => 
        `Product ${index + 1}: 
        Name: ${product.name}, 
        Category: ${product.category}, 
        Quantity: ${product.quantity}, 
        Size: ${product.size}, 
        Price: ${product.price}`
      )
      .join("\n\n"); 
  
    formData.append("products", productDetails); 
  
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
  
    const data = await response.json();
  
    if (data.success) {
      setResult("Order Submitted.");
      event.target.reset();
      setOrderCompleted(true);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  


  useEffect(() => {
    const quantity = cart.reduce((sum, item) => sum + parseInt(item.quantity), 0);
    let price = cart.reduce(
      (sum, item) => sum + parseFloat(item.price.replace(/,/g, "")) * parseFloat(item.quantity),
      0
    );
    

    if (quantity >= 5) {
      price -= 500;
    } else if (quantity >= 3) {
      price -= 300;
    }

    setTotalQuantity(quantity);
    setTotalPrice(price);
  }, [cart]);

  const [Payment, setPayment] = useState(false)
  const [OrderCompleted, setOrderCompleted] = useState(false)
   const [Email, setEmail] = useState('')
   const [Contact, setContact] = useState('')

  return (
    <div className="w-full !pt-30 !p-4">


      {/* orderConfirm */}
       <div className={`${Payment ? "scale-100" : "scale-0"} w-full transition-all duration-200 opacity-90 h-screen fixed top-0 z-9999 bg-zinc-400`}>
            <div className="w-[40vh] md:w-[110vh] overflow-y-scroll !p-3 flex-col h-[80vh] items-center gap-4 flex bg-zinc-800 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
              {!OrderCompleted ? (
                <>
                <div onClick={() => (
                        setPayment(false))} className="absolute top-5 left-[80%] cursor-pointer bg-red-400 flex items-center justify-center w-[30px] h-[30px]">X</div>
                <form onSubmit={onSubmit} className="w-full flex flex-col gap-3">
                    {cart.map((product, index) => (
                      <div key={index} className="w-[80vh] flex flex-col gap-3">
                        <p className="text-2xl font-bold">{product.name}</p>
                        <div className="flex gap-9">
                          <p>Quantity: {product.quantity}</p>
                          <p>Size: {product.size}</p>
                        </div>
                        <p>Price: {product.price}</p>
                      </div>
                    ))}

                <input type="hidden" name="products" value={cart.map(product => 
                  `Name: ${product.name}, Category: ${product.category}, Quantity: ${product.quantity}, Size: ${product.size}, Price: ${product.price}`
                ).join("\n\n")} />

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
                  className="!p-3 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield] border-1"
                  placeholder="Contact No."
                  value={Contact}
                  onChange={(e) => setContact(e.target.value)}
                />

                <p>Total price: {totalPrice}</p>
                <p>Cash on delivery</p>

                <button
                 type="submit" className="!p-3 bg-green-500 w-[200px] hover:bg-black">
                  Complete Order
                </button>
              </form>


                </>
              )
                :  <>
                  <div className="w-full flex-col gap-3 h-full flex items-center relative justify-center">
                  <div onClick={() => (
                    setPayment(false),CompleteOrder())} className="absolute top-5 left-[80%] cursor-pointer w-[60px] bg-zinc-800 h-[60px]">X</div>
                    <span className="text-2xl">{result}</span>
                    <p>Thank you for shopping</p>
                    <button onClick={()=> (
                      navigate("/"),CompleteOrder())} className="w-[300px] !p-3 bg-green-500">Continue shopping.</button>
                 </div>
                </>
          } 
              
            </div>
          </div>


      <div className="w-full h-[130px] flex border-b-1 flex-col gap-4 justify-center !pl-4 md:!pl-16">
        <h1 className="font-bold text-4xl">Your Cart</h1>
        <div className="md:flex !p-8 hidden !pr-18 w-full items-center justify-between">
          <p>Product</p> <p className=" md:!ml-[40vh]">Quantity</p> <p>Size</p> <p>Price</p> <p>Delete</p>
        </div>
      </div>

      <div className="w-full !pt-9 !p-2 !pl-4 md:!pl-14 flex flex-col gap-2">
        {cart.length === 0 ? (
          <p className="text-xl text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="w-full flex
             !p-4 md:!p-9 gap-5 items-center h-30 border-1">
              <div className="md:w-[20vh]  text-2xl flex gap-3 items-center font-bold">
                <img src={item.img} alt={item.name} className="w-23 h-23" />
              </div>
              <div className="md:w-[130vh] w-[25vh] flex md:flex-row justify-between flex-col">
                <p className="md:text-4xl font-bold">{item.name}</p>
                <p className="md:!ml-5">{item.quantity}</p>
                <p>{item.size}</p>
                <p  >{item.price} PKR</p>
              </div>
              <button
                onClick={() => (removeCart(item),
                  minusCount()
                )}
                className="hover:scale-150 !ml-5 md:!ml-40 transition-all duration-300 cursor-pointer text-2xl"
              >
                <MdDeleteOutline />
              </button>
            </div>
          ))
        )}
        <div className="w-full flex-col gap-5 h-[40vh] flex items-end justify-center !pr-16">
          <p>Total items: {totalQuantity}</p>
          <p>Total Price: {totalPrice} PKR</p>
          {totalQuantity >= 3 && (
            <p className="text-green-400">
              {totalQuantity >= 5 ? "500 PKR discount applied" : "300 PKR discount applied"}
            </p>
          )}
          <button 
          onClick={() => {
            if (cart.length > 0) {
              setPayment(true);
            } else {
              alert("Your cart is empty!");
            }
          }}
          className="!p-3 bg-green-500">Complete Order</button>
        </div>
      </div>
    </div>
  );
};

export default AddtoCart;
