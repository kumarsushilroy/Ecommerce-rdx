
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {remove} from './store/cartSlice'



const Cart = () => {

 const product = useSelector(state=>state.Cart);

 const dispatch = useDispatch()

 const removeItem = (product)=>{
     dispatch(remove(product))
 }

 

  return (
   <div>
     <div className='w-full'>
      
      {
          product.map((item)=>{

              return(

                  <div className='flex mx-3 my-3 justify-around items-center p-2 bg-red-300'>
                     <img className='w-[90px]' src={item.thumbnail} alt="" />
                     <h1>{item.category}</h1>
                     <h1>{item.price}</h1>
                     <button onClick={()=>removeItem(item.id)} className='bg-purple-700 text-white text-center px-5 py-2 rounded hover:opacity-70 duration-500'>remove</button>
                  </div>
              )
          })
      
        }
  </div> 
    

    </div>
  )
}

export default Cart