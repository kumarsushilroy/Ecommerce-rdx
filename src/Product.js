import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from './store/cartSlice';
import axios from 'axios'

const Product = () => {

    // const [image , setimage] = useState();
    // const [category , setcategory] = useState();
    // const [price , setprice] = useState();

    const description = '';
    const rating = '';
    const title = '';

    // const obj = {image, category, price, description, rating, title}

    // const handelSubmit = async(e) =>{
    //     e.preventDefault();
    //     try{
    //        await axios.post('https://fakestoreapi.com/products', obj)
    //     }catch(err){
    //         console.log(err)
    //     }

    // }

    const [product, setproduct] = useState([]);

    const dispatch = useDispatch();

    const [searchdata, setsearchdata] = useState([])



    useEffect(() => {
        const getproduct = async () => {
            const Data = await fetch('https://dummyjson.com/products?limit=100');
            const resdata = await Data.json();
            setproduct(resdata.products)
            console.log(product)

        }
        getproduct();

        //for searching data
        const getsearchdata = async () => {
            const srchdata = await fetch('https://dummyjson.com/products?limit=100');
            const result = await srchdata.json();
            const res = result.products;
            setsearchdata(res);
            console.log(searchdata)
        }
        getsearchdata();
        //.........................
    }, [])

    const addCart = (item) => {
        dispatch(add(item))
    }

    //pagination start............................

    const [page, setpage] = useState(1);

    const curentpage = (crntpage) => {
        if (crntpage >= 0 && crntpage <= product.length / 10 && crntpage !== page)
            setpage(crntpage);
    }

    //paginationn end............................

    //search..............statrt
    const [search, setsearch] = useState('')
    console.log(search)
    //search................end



    return (
        <div className='w-full h-[1000px] px-4'>
            <h1 className='text-center text-xl font-bold sticky top-0 '>Redux Store</h1>

            <div className='text-center w-[1200] mb-1 sticky top-0 '>
                <input placeholder='search items....' onChange={(e) => setsearch(e.target.value)} className='w-[900px]  bg-gray-200 outline-none px-4 p-2 rounded' type="text" />
            </div>

            <div className='w-full p-2'>


                {
                    search === '' ? <div className='grid md:grid-cols-5 gap-2 sm:grid-cols-3'>

                        {
                            product.slice(page * 10 - 10, page * 10).map((item, i) => {
                                return (
                                    <div className=' mx-auto '>
                                        <div className='border-2 p-3 bg-gray-50 mx-auto  flex flex-col justify-center'>
                                            <img className='bg-gray-50 h-[200px] w-auto' src={item.thumbnail} alt="" />
                                            <div className='flex items-center justify-around'>
                                                <h1 className='text-center'>{item.category}</h1>
                                                <h1 className='text-center'>{item.price}</h1>

                                            </div>
                                            <span className='flex justify-center'><button onClick={() => addCart(item)} className='hover:opacity-80 duration-500 text-center bg-purple-700 text-white px-5 py-2 rounded'>Add to cart</button></span>

                                        </div>
                                    </div>
                                )


                            })
                        }

                    </div> : <div className='grid md:grid-cols-5 gap-2 sm:grid-cols-3'>
                        {
                            searchdata.filter((item) => {
                                return search.toLowerCase() === '' ? item : item.category.toLowerCase().includes(search)
                            }).map((item, i) => {
                                return (
                                    <div className=' mx-auto '>
                                        <div className='border-2 p-3 bg-gray-50 mx-auto  flex flex-col justify-center'>
                                            <img className='bg-gray-50 h-[200px] w-auto' src={item.thumbnail} alt="" />
                                            <div className='flex items-center justify-around'>
                                                <h1 className='text-center'>{item.category}</h1>
                                                <h1 className='text-center'>{item.price}</h1>

                                            </div>
                                            <span className='flex justify-center'><button onClick={() => addCart(item)} className='hover:opacity-80 duration-500 text-center bg-purple-700 text-white px-5 py-2 rounded'>Add to cart</button></span>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }







            </div>

            <div className='text-center'>
                <span onClick={() => curentpage(page - 1)} style={{ padding: '10px', border: '1px solid gray', cursor: 'pointer' }}>prev....</span>
                {
                    [...Array(product.length / 10)].map((_, i) => {
                        return (
                            <span className={page === i + 1 ? 'bg-gray-300' : ''} onClick={() => curentpage(i + 1)} style={{ padding: '10px', border: '1px solid gray', cursor: 'pointer', }}>{i + 1}</span>
                        )
                    })
                }

                <span onClick={() => curentpage(page + 1)} style={{ padding: '10px', border: '1px solid gray', cursor: 'pointer' }}>next</span>
            </div>

            {/* <div>
                <form onSubmit={handelSubmit}>
                    <label htmlFor="">image</label>
                    <input onChange={(e)=>setimage(e.target.value)} type="text" />
                    <label htmlFor="">category</label>
                    <input onChange={(e)=>setcategory(e.target.value)} type="text" />
                    <label htmlFor="">price</label>
                    <input onChange={(e)=>setprice(e.target.value)} type="number" />
                    <button className='text-white rounded px-5 py-2 bg-purple-700'>Submit</button>
                </form>
            </div> */}

        </div>
    )
}

export default Product