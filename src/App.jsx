import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import ProductListPage from "./pages/productList/ProductListPage"
import ProductDetailsPage from "./pages/productDetails/ProductDetailsPage"
import CartDetailsPage from "./pages/cartList/CartDetailsPage"

function App() {
  
  return (
   <Fragment>
    <Routes>
      <Route path="/" element={<ProductListPage/>}/>
      <Route path="/products" element={<ProductListPage/>}/>
      <Route path="/product-details/:id" element={<ProductDetailsPage/>}/>
      <Route path="/cart" element={<CartDetailsPage/>}/>
    </Routes>
   </Fragment>
  )
}

export default App
