import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cartListAsync, decrementItemAsync, incrementItemAsync, removeCartAsync } from '../product-list/productListSlice'
import { useEffect } from 'react'


export default function Cart() {
    const [open, setOpen] = useState(true)
    const cart = useSelector(state=>state.product.cart);
    const dispatch = useDispatch();
    console.log(cart)
    let totalAmount =0;
     cart?.map((item)=>{
       return totalAmount += Math.floor((item.price * item.quantity) - (item.price*item.discountPercentage/100)*(item.quantity))
    })
    let cartLength = 0;
    cart?.map((item)=>{
        return cartLength += (item.quantity)
     })
    const handleRemove = (id)=>{
       dispatch(removeCartAsync(id));
       dispatch(cartListAsync());
    }

    const incrementQty = (item)=>{
        // if(item.quantity < 10 ){
        let newItem = {...item,quantity:item.quantity+1}
          dispatch(incrementItemAsync(newItem))
          dispatch(cartListAsync())
        // }
    }

    const decrementQty = (item)=>{
        if(item.quantity > 1 ){
        let newItem = {...item,quantity:item.quantity-1}
        dispatch(decrementItemAsync(newItem))
        dispatch(cartListAsync())
        }
    }
    useEffect(()=>{
        dispatch(cartListAsync())
       },[])

    console.log(totalAmount)
   
    return (


        <div className="flex h-full flex-col  bg-white shadow-xl lg:mx-24 xl:mx-96 mt-12 md:mx-12 ">
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 ">
                <div className="flex items-start justify-between">
                    <h1 className="text-lg font-medium text-gray-900">Shopping cart</h1>
                    <div className="ml-3 flex h-7 items-center">
                        <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                        >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                           
                        </button>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cart.map((product) => (
                                <li key={product.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                            src={product.images[0]}
                                            alt={product.title}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                    <p>{product.title}</p>
                                                </h3>
                                                <div>
                                                <p className="ml-4">${Math.floor(product.price - (product.price*product.discountPercentage/100))}</p>
                                                {/* <p className="mt-1 ml-4 text-sm text-gray-500 line-through">${product.price}</p> */}
                                                </div>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500">{product?.color}</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <div className='flex items-center '>
                                            <p className="text-gray-500 px-2">Qty</p>
                                           <button className='border-2 border-black-200 px-4  bg-indigo-600  text-base font-medium text-white hover:bg-indigo-700 mx-2' onClick={()=>decrementQty(product)}>-</button>
                                            {(product.quantity > 9  ) ?   product.quantity :('0' + product.quantity)} 
                                            <button className='border-2 border-black-200 px-4  bg-indigo-600  text-base font-medium text-white hover:bg-indigo-700 mx-2' onClick={()=>incrementQty(product)}>+</button>

                                            </div>
                                            <div className="flex">
                                                <button
                                                    onClick={()=>handleRemove(product.id)}
                                                    type="button"
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${totalAmount}</p>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Total items</p>
                    <p>{cartLength} items</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                    <Link
                        to={'/checkout'}
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                        Checkout
                    </Link>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                        or{' '}
                        <Link
                          to={'/'}
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                           
                        >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>


    )
}
