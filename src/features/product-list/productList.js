import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productListAsync } from './productListSlice';
import { StarIcon } from '@heroicons/react/24/outline'; 
import { Link } from 'react-router-dom';

export default function ProductList() {

  const products = useSelector(state=>state.product.products);
  const dispatch = useDispatch()
  console.log(products);
  
 useEffect(()=>{
  dispatch(productListAsync())
 },[])
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:py-4">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 ">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3     xl:gap-x-8  ">
          {products.map((product) => (
            <div key={product.id} className="group relative py-3 px-6 border border-solid-gray-500 lg:h-80">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                <p className='bg-white text-right'>{product.rating} <StarIcon className='h-4 inline-block '></StarIcon></p>
                <Link to={`/product-details`}>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
               </Link>
              </div>
              <div className="mt-4 flex justify-between relative">
                <div >
                  <h3 className="text-sm text-gray-700 lg:w-36 ">
                   
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                   
                    
                  </h3>
                  <div className=' absolute right-0 top-0'>
                  
                <p className="text-sm font-medium text-gray-900 mb-0">${Math.floor(product.price - (product.price*product.discountPercentage/100))}</p>
                <p className="mt-1 text-sm text-gray-500 line-through">${product.price}</p>
                </div>
                </div>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  )
}
