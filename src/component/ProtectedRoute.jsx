import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router';
const ProtectedRoute = ({element}) => {

    const cartItems = useSelector((state) => state.cart.cart);
    console.log(cartItems);

  return (
    cartItems.length > 0 ? element : <Navigate to="/"></Navigate>
  )
  
}

export default ProtectedRoute

