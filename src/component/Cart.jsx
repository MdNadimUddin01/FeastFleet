import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import ItemCart from './ItemCart'
import { useSelector } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa'
import toast , {Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router'
// import img from "../assets/logo.png"
const Cart = () => {
    
    const navigate = useNavigate();

    const [active , setActive] = useState(false);

    const cartItems = useSelector((state) => state.cart.cart);

    const totalItems = cartItems.reduce((totalItems , item) => totalItems + item.qty , 0);

    const totalPrice = cartItems.reduce((total , item) => total + item.qty*item.price , 0);


  return (
   <>

    <div className={`z-50 transition-all duration-500 ${active ? 'translate-x-0' : 'translate-x-full'} fixed right-0 top-0 w-full h-full lg:w-[20vw] bg-white p-5 mb-3`}>
        
        <div className='flex justify-between items-center my-3 '>
            <span className='text-xl font-bold text-gray-800'>My Order</span>
            <IoMdClose onClick={() => {setActive(false)}} className='border-2 border-gray-600 font-bold text-gray-600 rounded-md p-1 text-xl hover:text-red-300 hover:border-red-300 cursor-pointer'></IoMdClose>

        </div>
        { cartItems.length == 0 ? <h2 className='text-center my-auto font-bold text-xl'>Your Cart is Empty</h2>  :
            cartItems.map((item) => {
                return <ItemCart key={item.id} id={item.id} name={item.name} imgUrl={item.img} price={item.price} qnty={item.qty} ></ItemCart>
            })

        }
        

        <div className='absolute bottom-0 mx-auto'>
            <h3 className='font-semibold text-gray-800'>Items : {totalItems}</h3>
            <h3 className='font-semibold text-gray-800'>Total Amount : {totalPrice}</h3>

            <hr  className='w-[90vw] lg:w-[18vw]'/>

            <button onClick={() =>  navigate("/success")} className='bg-green-400 font-bold px-3 text-white py-2 hover:bg-green-500 rounded-lg lg:w-[18vw] w-[90vw] mb-5'>
                CheckOut
            </button>
        </div>
    </div>

    <FaShoppingCart onClick={() => {setActive(true)}} className={`cursor-pointer rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-0 right-0 ml-4 mb-4 ${totalItems > 0 && "animate-bounce duration-500 transition-all"}`}></FaShoppingCart>

    
   </>
  )
}

export default Cart
