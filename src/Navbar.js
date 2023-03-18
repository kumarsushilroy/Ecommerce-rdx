import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

 const cartitems = useSelector((state)=>state.Cart)

  return (
    <div className='bg-blue-400 sticky top-0'>
      <div className="flex text-white items-center text-sm uppercase p-3 font-bold justify-between px-3">
       <h1>Logo</h1>
       <ul className="flex space-x-4 cursor-pointer">
        <NavLink to={'/'}><li className="hover:text-gray-300 duration-500">Home</li></NavLink>
        <NavLink to={'/cart'}><li className="hover:text-gray-300 duration-500">Cart</li></NavLink>
        <li className="hover:text-gray-300  duration-500">Items: <span className='bg-red-700 rounded-full p-2 h-8 w-8'>{cartitems.length}</span></li>
       </ul>
      </div>
    </div>
  )
}

export default Navbar