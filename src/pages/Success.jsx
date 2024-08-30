import React, { useEffect, useState } from 'react'
import { ClockLoader } from 'react-spinners'
import { removeAllItem } from '../reducer/slice/cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const Success = () => {
  
  const [loading , setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 3000);
    
  }, []);
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      
      {loading ? <ClockLoader /> : <div className='flex flex-col items-center gap-4'>
        <h2 className='text-3xl font-semibold mb-4 flex'>Order SuccessFull !</h2>
        <p className='text-xl'>Your Order has been Successfully Placed</p>
        
        <button onClick={() => {
          dispatch(removeAllItem());
          navigate("/");
        }} className='py-2 px-3 border-2 rounded-md border-gray-300 shadow-md front-bold text-lg text-white bg-green-400 hover:bg-green-500'>Explore more</button>
      </div>}
    </div>
  )
}

export default Success
