import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../context';
import SingleProduct from '../../component/productItem/SingleProduct';

const ProductListPage = () => {

 const {listOfProduct , loading} = useContext(ShoppingCartContext);
 if(loading) return <h3>Loading.............</h3>
 
  return (
    <section className='py-12 bg-white sm:py-16 lg:py-20'>
        <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
          <div className='max-w-md mx-auto text-center'>
            <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>Our Featured Product</h2>
          </div>
          <div className='grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4'> 
              {
                listOfProduct && listOfProduct.length > 0 ? 
                listOfProduct.map(item =>
                  <SingleProduct item={item}/>)
                : <h3>No Products To Dislpay</h3>
              }
          </div>
        </div>
    </section>
  )
}

export default ProductListPage