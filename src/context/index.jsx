//Create the context
//provide the state to context
//wrap context in the rooy component
//consume the contxt using useContext

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [listOfProduct, setListOfProduct] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  async function fetchProductList() {
    const apiResponse = await fetch("https://dummyjson.com/products");
    const result = await apiResponse.json();

    if (result && result?.products) {
      setListOfProduct(result?.products);
      setLoading(false);
    }
  }

  function AddItemToCart(getProductDetails){
    
    let cpyExistingCartItems = [...cartItems];
    const findIndexOfCurrentItem = cpyExistingCartItems.findIndex(cartItem => cartItem.id === getProductDetails.id);
     
    if(findIndexOfCurrentItem === -1){
      cpyExistingCartItems.push({
        ...getProductDetails,
        quantity : 1,
        totalPrice : getProductDetails?.price,
      })
    }else{
     cpyExistingCartItems[findIndexOfCurrentItem] = {
      ...cpyExistingCartItems[findIndexOfCurrentItem],
      quantity : cpyExistingCartItems[findIndexOfCurrentItem].quantity + 1,
      totalPrice : (cpyExistingCartItems[findIndexOfCurrentItem].quantity + 1) * cpyExistingCartItems[findIndexOfCurrentItem].price
     }
    }
      setCartItems(cpyExistingCartItems);
      localStorage.setItem('cartItems',JSON.stringify(cpyExistingCartItems));
      navigate('/cart');
  }

  function RemoveFromCart(getProductDetails, isFullyRemoveFromCart){
    let cpyExistingCartItems = [...cartItems];
    const findIndexOfCurrentItem = cpyExistingCartItems.findIndex(Item => Item.id === getProductDetails.id);
    if(isFullyRemoveFromCart){
      cpyExistingCartItems.splice(findIndexOfCurrentItem, 1);
    }else {
      cpyExistingCartItems[findIndexOfCurrentItem] = {
        ...cpyExistingCartItems[findIndexOfCurrentItem],
        quantity : cpyExistingCartItems[findIndexOfCurrentItem].quantity - 1,
        totalPrice : (
          cpyExistingCartItems[findIndexOfCurrentItem].quantity -1) * 
          cpyExistingCartItems[findIndexOfCurrentItem].price,
      }
    }
      localStorage.setItem('cartItems',JSON.stringify(cpyExistingCartItems));
      setCartItems(cpyExistingCartItems);
  }
  

  useEffect(() => {
    fetchProductList();
    setCartItems(JSON.parse(localStorage.getItem('cartItems') || [] ));
  }, []);
    
  return (
    <ShoppingCartContext.Provider
      value={{ listOfProduct, 
        loading, 
        setLoading, 
        productDetails, 
        setProductDetails , 
        AddItemToCart ,
        cartItems,
        RemoveFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
export default ShoppingCartProvider;
