import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

const SingleProduct = ({ item }) => {

    const navigate = useNavigate();
    const {AddItemToCart ,cartItems} = useContext(ShoppingCartContext);

    function navigateToproductDetailsPage(CurrentProductId){
        navigate(`/product-details/${CurrentProductId}`);
    }

  return (
    <div className="relative group border border-cyan-700 py-6 cursor-pointer">
      <div className="overflow-hidden aspect-square">
        <img className="object-cover h-full w-full transition-all duration-300 group-hover:scale-125"
        src={item?.thumbnail} 
        alt={item?.title}/>
      </div>
      <div className="flex items-start justify-between m-4 space-x-4"> 
        <div className="font-bold text-gray-900 sm:text-sm text-xs md:text-base">
            <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">{item?.title}</p>
        </div>
        <div className="text-right ">
           <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">${item?.price}</p>
        </div>
      </div>
      <button onClick={() => navigateToproductDetailsPage(item?.id)} className="px-5 py-2 mt-4 bg-blue-300 text-white font-bold text-lg rounded-none mx-auto block">View Details</button>
      <button 
      disabled={cartItems.findIndex(items => items.id === item.id) > -1}
      className="disabled:opacity-65 px-5 py-2 mt-4 bg-blue-300 text-white font-bold text-lg rounded-none mx-auto block"
      onClick={()=> AddItemToCart(item)}>Add To Cart</button>
    </div>
  );
};

export default SingleProduct;
