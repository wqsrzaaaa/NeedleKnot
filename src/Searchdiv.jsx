import React from "react";

const Searchdiv = ({ setInpVal, filterproducts, setSearchIcon , InpVal }) => {

  let Suggesstions = [
    'T-Shirt' , 'Hoodies' , 'Jackets' , 'Plain Items'
  ]


  return (
    <div className="w-full h-screen bg-zinc-900 fixed top-0 z-99">
      <div className="w-full h-[25vh] md:h-[32vh] flex items-end justify-center">
        <input
          onChange={(e) => setInpVal(e.target.value)}
          value={InpVal}
          type="text"
          className="w-[80%] p-5 h-[40px] border border-white rounded-full"
          placeholder="Search"
        />
      </div>


      <div className="w-full h-[57vh] flex">
       {/* Suggestion */}
        <div className="w-[80vh] md:block hidden p-6 h-full">
          <p className="w-full border-b border-zinc-700 pb-4">Suggestion</p>
          <div className="w-full flex flex-col gap-3 pt-6 h-full">
            {filterproducts.length === 0 ? (
              <p className="text-red-500">No matching products.</p>
            ) : (
              Suggesstions.map((item, index) => (
                <p
                  key={index}
                  onClick={() => {
                    if (item === "T-Shirt") {
                      window.location.href = "NeedleKnot/#/tshirt";
                      setSearchIcon(false)
                    }else if(item === 'Hoodies'){
                      window.location.href = '/NeedleKnot/#/hoodies'
                      setSearchIcon(false)
                    }else if(item === 'Jackets'){
                      window.location.href = '/NeedleKnot/#/versityjec'
                      setSearchIcon(false)
                    }else{
                      window.location.href = '/NeedleKnot/#/plain'
                      setSearchIcon(false)
                    }
                  }}
                  className="cursor-pointer hover:text-blue-400"
                >
                  {item}
                </p>
              ))
            )}
          </div>
        </div>

          {/* Full Item  */}
        <div className="w-full h-full">
          <div className=" w-full flex h-[65vh] md:h-[60vh] flex-col border-b overflow-y-scroll border-zinc-700 gap-9 items-center p-6">
            {filterproducts.map((item, index) => (
              <div  
              onClick={() => {
                if (item.category === "Shirt") {
                  window.location.href = "/NeedleKnot/#/tshirt";
                  setSearchIcon(false)
                }else if(item.category === 'Hoodie'){
                  window.location.href = '/NeedleKnot/#/hoodies'
                  setSearchIcon(false)
                }else if(item.category === 'jacket'){
                  window.location.href = '/NeedleKnot/#/versityjec'
                  setSearchIcon(false)
                }else{
                  window.location.href = '/NeedleKnot/#/plain'
                  setSearchIcon(false)

                }
              }}
                key={index}
                className="w-full cursor-pointer hover:border-1 flex border-b border-zinc-700 gap-9 items-center p-6"
              >
                <img
                  className="w-[14vh] h-[18vh] border"
                  src={item.img}
                  alt={item.name}
                />
                <div>
                  <h1>{item.name}</h1>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-[10vh] !mt-16 md:!mt-3 flex items-center justify-center">
        <p>Searched for {InpVal}</p>
      </div>
    </div>
  );
};

export default Searchdiv;
