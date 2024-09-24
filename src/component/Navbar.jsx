import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../reducer/slice/seacrhSlice'
import logo from "../assets/logo.jpg"
const Navbar = () => {

  const dispatch = useDispatch();

  return (
    <nav className='flex flex-col lg:flex-row justify-between py-3 px-3 mx-6 mb-6'>

      <div className='mb-3'>

        <div className='flex flex-row gap-2 items-center'>
          <img src={logo} className='w-[30px] h-[30px] rounded-md' alt="" />

          <h1 className='text-2xl font-bold'>Feast Fleet</h1>
        </div>

          <h3 className='text-xl font-bold text-gray-600 '>
              {
                  new Date().toUTCString().slice(0 , 16)
              }
          </h3>

      </div>
       
       <div>

        <input onChange={(e) => {dispatch(setSearch(e.target.value))}} className='p-3 outline-none border border-gray-400 text-sm rounded-lg w-full lg:w-[25vw] ' type="search" name='search' id='search' placeholder='Search here' autoComplete='off' />

       </div>
    </nav>
  )
}

export default Navbar
