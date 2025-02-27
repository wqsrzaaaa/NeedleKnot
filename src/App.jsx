import { useState } from "react";
import TopHeader from "./TopHeader";
import Searchdiv from "./Searchdiv";
import { Context } from "./Context";
import { CartProvider } from "./Cart/CartContext";

const App = () => {
  const [SearchIcon, setSearchIcon] = useState(false)
  const [InpVal, setInpVal] = useState('')

  const allProducts = [
    //Plain 

    { name: 'T-Shirt', img: "https://needleandknot.online/cdn/shop/files/men-rnhs-0024_7.jpg?v=1719743988&width=360", price: '899', rating: '1', category: 'Plain' },
    { name: "Drop Shoulder", price: "1099", rating: '1', img: 'https://needleandknot.online/cdn/shop/files/close-up-of-tshirt-mockup-worn-by-a-tall-man-0307.jpg?v=1719748454&width=360', category: 'Plain' },
    { name: "Hoodie", price: '1499', rating: '1', img: "https://needleandknot.online/cdn/shop/files/Black_c201dc3d-ef97-4d05-885e-735d0cf7e4c9.jpg?v=1725443767&width=360", category: 'Plain' },
    { name: "Baseball Jacket", price: "1899", rating: "0", img: "https://needleandknot.online/cdn/shop/files/baseballjacket-Photoroom.png?v=1730651719&width=360", category: 'Plain' },
  

    // Hoodies
    { name: "Gojo Wind", price: "1,800", rating: "6", category: "Hoodie", img: "https://needleandknot.online/cdn/shop/files/cop_94928b18-6ad4-4b95-b05b-34b4204d40e8.jpg?v=1706025960&width=360" },
    { name: "Itachi Sharingan", price: "1,800", rating: "5", category: "Hoodie", img: "https://needleandknot.online/cdn/shop/files/Black_6ba12a2d-008b-429f-b655-1057860544dd.jpg?v=1727015380&width=360" },
    { name: "Baki Hanma", price: "1,800", rating: "7", category: "Hoodie", img: "https://needleandknot.online/cdn/shop/files/BakiHanmaEmbroideryHoodie.jpg?v=1736074531&width=360" },
    { name: "Batman Vegance", price: "1,800", rating: "5", category: "Hoodie", img: "https://needleandknot.online/cdn/shop/files/BatmanHoodieEmbroidery.jpg?v=1734286287&width=360" },
    { name: "Goku Ultra Instinct", price: "1,800", rating: "5", category: "Hoodie", img: "https://needleandknot.online/cdn/shop/files/Black_75790eb5-93a6-4128-9a61-5bf221e1b377.jpg?v=1727014841&width=360" },
    { name: "Luffy Cap", price: "1,800", rating: "5", category: "Hoodie", img: "https://needleandknot.online/cdn/shop/files/Itachi_Black.jpg?v=1725442276&width=360" },
    { name: "Zoro Dragon", price: "2,000", rating: "3", category: "Hoodie", img: "https://needleandknot.online/cdn/shop/files/Hoodie_2.jpg?v=1728392517&width=360" },
    { name: "Ichi go", price: "2,000", rating: "3", category: "Hoodie", img: "https://needleandknot.online/cdn/shop/files/ichigoHoodie.jpg?v=1730213668&width=360" },
    { name: "Hashiras", price: "2,000", rating: "2", category: "Hoodie", img: "https://needleandknot.online/cdn/shop/files/HashirasHoodie.jpg?v=1732647697&width=360" },

    // Shirts
    { name: "Toji", price: "1,599.00", rating: "5", category: "Shirt", img: "https://needleandknot.online/cdn/shop/files/tshirt-hanging_5_115ad555-e87f-42e7-bcdf-8a2a78cb9c8c.jpg?v=1727619266&width=360" },
    { name: "Champions", price: "1,599.00", rating: "4", category: "Shirt", img: "https://needleandknot.online/cdn/shop/files/tshirt-hanging_2_a9ba83cd-3d97-4edf-bf62-6643d70641db.png?v=1727008733&width=360" },
    { name: "Berserk", price: "1,399.00", rating: "2", category: "Shirt", img: "https://needleandknot.online/cdn/shop/files/Cop_5220fe0b-f159-4700-9958-fdb210966d1e.png?v=1707080215&width=360" },
    { name: "Batman", price: "1,399.00", rating: "12", category: "Shirt", img: "https://needleandknot.online/cdn/shop/files/tshirt-hanging_fafc1b1b-dacd-498c-9cbc-77731b801938.jpg?v=1711196250&width=360" },
    { name: "White Beard", price: "1,499.00", rating: "2", category: "Shirt", img: "https://needleandknot.online/cdn/shop/files/tshirt-hanging_2_60f78408-ae4a-4c63-ae68-f471f74ab5f5.png?v=1713536449&width=360" },
    { name: "Levi swords", price: "1,499.00", rating: "0", category: "Shirt", img: "https://needleandknot.online/cdn/shop/files/LeviEmbroidery.jpg?v=1739120136&width=360" },
    { name: "Supermen Hope", price: "1,399.00", rating: "1", category: "Shirt", img: "https://needleandknot.online/cdn/shop/files/tshirt-hanging_a51c5f6c-ec9a-4f1c-b2e3-846ebba14c0f.jpg?v=1723974936&width=360" },
    { name: "Dead Pool", price: "1,599.00", rating: "5", category: "Shirt", img: "https://needleandknot.online/cdn/shop/files/tshirt-hanging_2_c6e33d44-c305-48d0-8079-c9ae8a7dbd68.png?v=1715275829&width=360" },
    { name: "Spider men", price: "1,399.00", rating: "0", category: "Shirt", img: "https://needleandknot.online/cdn/shop/files/tshirt-hanging_5cdcfeb1-909b-4d25-8834-06026f76a28b.jpg?v=1709753335&width=360" },

    // Jackets
    { name: "Ace White Beards", price: "3,199", rating: "2", category: "jacket", img: "https://needleandknot.online/cdn/shop/files/IMG_0819_3.heic?v=1732257825&width=360" },
    { name: "Itachi X Sasuke", price: "3,199", rating: "3", category: "jacket", img: "https://needleandknot.online/cdn/shop/files/PSX_20241105_000722.jpg?v=1730747920&width=360" },
    { name: "Scout Regiment", price: "3,199", rating: "2", category: "jacket", img: "https://needleandknot.online/cdn/shop/files/PSX_20241101_015128.jpg?v=1730408003&width=360" },
    { name: "The Honored One", price: "3,199", rating: "3", category: "jacket", img: "https://needleandknot.online/cdn/shop/files/PSX_20241101_020214.jpg?v=1730408655&width=360" },
  ];

  const filter = allProducts.filter((item) => 
    item.name.toLowerCase().includes(InpVal.toLowerCase())
  );
   
   const Jecket = allProducts.filter((p) => p.category === "jacket")
   const shirt = allProducts.filter((p)=> p.category === 'Shirt')
   const hoodie = allProducts.filter((p)=> p.category === 'Hoodie')
   const category = allProducts.filter((p)=> p.category === 'Plain')
  
  return (
    <>
      <CartProvider>
        <Context>
          < TopHeader category={category} plain = {category} Hoodie={hoodie} shirts={shirt} jecket={Jecket} search = {SearchIcon} setsearch={setSearchIcon} />
          <div className="w-full relative z-3 ">
          {SearchIcon ? <Searchdiv setSearchIcon={setSearchIcon} filterproducts={filter} setInpVal={setInpVal} InpVal={InpVal} /> 
          :
            ''
          }
          </div>
        </Context>
      </CartProvider>
      
    </>
  );
};

export default App;
