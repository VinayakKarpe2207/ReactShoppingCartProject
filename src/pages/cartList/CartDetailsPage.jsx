import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import { useNavigate } from 'react-router-dom'
import CartTile from '../../component/cartTile/CartTile'

const CartDetailsPage = () => {

  const {cartItems} = useContext(ShoppingCartContext)
  const navigate = useNavigate();
  
  return (
    <div className='max-w-7xl mx-auto max-md:max-w-xl py-4'>
      <h1 className='text-2xl font-bold text-gray-800 text-center'>My Cart Page</h1>
        <div className='grid md:grid-cols-3 gap-8 mt-12'>
          <div className="md:col-span-2 space-y-4">
             {
              cartItems?.length ? 
              cartItems.map(singleCartItem => <CartTile singleCartItem={singleCartItem}/>)
              : <h1 className='text-center text-3xl'>No Items Available</h1>
             } 
          </div>
          <div className="bg-gray-100 rounded-sm p-4 h-max">
            <h3 className='text-xl font-extrabold text-gray-900 border-b border-gray-300 pb-2'>Order Summary</h3>
            <ul className="text-gray-700 mt-4 space-y-2">
              <p className="flex flex-wrap gap-4 text-sm font-bold">
                Total : <span className='font-bold text-black text-xl'> $ {cartItems.reduce((acc , curr) => acc + curr.totalPrice , 0).toFixed(2)}</span>
              </p>
            </ul>
            <div className="mt-5 flex gap-4">
              <button 
              disabled={cartItems.length === 0}
              className='disabled:bg-white disabled:text-black text-sm px-4 py-3 text-white bg-black font-extrabold'>Check out</button>
              <button className='text-sm px-4 py-3 text-white bg-blue-400 font-extrabold' onClick={() => navigate('/products')}>Continue Shoping</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CartDetailsPage