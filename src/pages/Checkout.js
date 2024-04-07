
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { addAddress, addressAsync, getAddressAsync, orderAsync } from "../features/product-list/productListSlice";


export default function Checkout() {
  const [open, setOpen] = useState(true);
  const cart = useSelector(state => state.product.cart);
  const addr = useSelector(state => state.product.address); // address 
  const loginUser = useSelector(state=>state.product.loggedInUser);

  const [orderInfo,setOrderInfo] = useState({});
  const dispatch = useDispatch();
  const param = useParams();
  console.log(param.total)
  const {
    register, handleSubmit, watch, formState: { errors }, getValues,reset } = useForm();

  const onSubmit = (data) => {
    console.log('data', data)
    dispatch(addressAsync({...data,user:loginUser[0].id}))
    reset();
  }

  const handleOrder = (e)=>{
    e.preventDefault();
    delete orderInfo['push-notifications']
    // console.log({...orderInfo,address:addr[orderInfo.address],cartData:cart})
    dispatch(orderAsync({...orderInfo,address:addr[orderInfo.address],cartData:cart,user:loginUser[0].id}))
    setOrderInfo({});
  }
// console.log(orderInfo)
// console.log(addr)
useEffect(()=>{
  dispatch(getAddressAsync(loginUser[0].id))
},[dispatch])
  return (

    <div className='grid grid-cols-2  my-10 '>
        <div className="space-y-12 py-8  w-156 bg-white px-8 justify-self-end lg:mx-12 ">
          <div className="border-b border-gray-900/10 pb-12">
          <form  noValidate onSubmit={handleSubmit(onSubmit)} autoComplete='off'>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-lg font-medium text-gray-900">Personal Information</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      {...register("first-name", {
                        required: 'first-name is required'
                      })}
                      id="first-name"
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      {...register("last-name", {
                        required: 'last-name is required'
                      })}
                      id="last-name"
                     
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                
                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      {...register("email", {
                        required: 'email is required'
                      })}
                      type="email"
                     
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Phone
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      {...register("phone", {
                        required: 'phone is required'
                      })}
                      type="tel"
                     
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                     


                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      {...register("street-address", {
                        required: 'address is required'
                      })}
                      id="street-address"
                     
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      {...register("city", {
                        required: 'city is required'
                      })}
                      id="city"
                     
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="region"
                      {...register("region", {
                        required: 'region is required'
                      })}
                      id="region"
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="postal-code"
                      {...register("postal-code", {
                        required: 'postal-code is required'
                      })}
                      id="postal-code"
                     
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
               
                <button
               
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add
                </button>
              </div>
            </div>
            </form>
            <form  noValidate autoComplete='off' onSubmit={(e)=>e.preventDefault()}>
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Address</h2>
              {/* address list start */}

              <ul role="list" className="divide-y divide-gray-100">
                {addr.map((val, i) => (
                  <div className="mt-6 space-y-6 border-solid border-0 border-gray-500" key={i}>
                    <div className="flex items-center gap-x-3">
                      <input
                        id={i}
                        name="address"
                        type="radio"
                    onChange={(e)=>setOrderInfo({...orderInfo,[e.target.name]:e.target.id})}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <li key={i} className="flex gap-x-6 py-5 ">

                        <div className=" shrink-0 ">
                          <h1 className="text-md font-bold text-left">{val['first-name']} {val['last-name']}</h1>
                          <p className="text-sm leading-6 text-gray-900 ">{val['street-address']}, {val.city}, {val['postal-code']} ,</p>
                          <p className="text-sm leading-6 text-gray-900">{val.city}, {val.region}</p>
                          <p className="text-sm leading-6 text-gray-900">{val['email']},</p>
                          <p className="text-sm leading-6 text-gray-900 text-left">{val.phone}</p>
                        </div>

                      </li>
                    </div>
                  </div>
                ))}
              </ul>

              {/* address list end */}



              <legend className="text-sm font-semibold leading-6 text-gray-900">Choose Payment Method</legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">Select one to pay </p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="paymentMethod"
                    value='pay via card'
                    onChange={(e)=>setOrderInfo({...orderInfo,[e.target.name]:e.target.value})}
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                    Pay via Card
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="paymentMethod"
                    onChange={(e)=>setOrderInfo({...orderInfo,[e.target.name]:e.target.value})}
                    value='pay online'
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    Pay Online | Google Pay | Phone Pay
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="paymentMethod"
                    value='pay on delivery'
                    onChange={(e)=>setOrderInfo({...orderInfo,[e.target.name]:e.target.value})}
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                    Pay On Delivery
                  </label>
                </div>
              </div>



              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                 <Link to={'/cart'}>Cancel</Link>
                </button>
                <button
                onClick={handleOrder}
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                <Link to={'/'}>Order</Link>  
                </button>
              </div>
            </div>
      </form>

          </div>

        </div>
      {/* cart start */}
      <div className="flex  flex-col bg-white shadow-xl h-156 w-96 justify-self-start ml-36 "  >
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
                            <Link to={product.thumbnail}>{product.title}</Link>
                          </h3>
                          <p className="ml-4">${Math.floor(product.price - (product.price * product.discountPercentage / 100))}</p>
                        </div>
                        {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {product.quantity}</p>

                        <div className="flex">
                          <button
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
            <p>${param.total}.00</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Total items</p>
            <p>{param.items}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
          <div className="mt-6">
            <Link
              to={'/checkout'}
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Order
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

      {/* cart end */}

    </div>



  )
}
