import { useState } from 'react';
import swiggyData from './swiggy_Data'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Category(){
let [slide, setSlide]=useState(0)
// console.log(slide)
// console.log(swiggyData.length)
let prevSlide=()=>{
    if(swiggyData.length-5===slide) return false;
    setSlide(slide+3)
}
let nextSlide=()=>{
    if(slide===0) return false;
    setSlide(slide-3)
}
    return(
        <div className='w-full md:w-[1200px] mx-auto my-8'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-[20px]'><span className='text-orange-500'>What's</span> on your Mind ?</h1>
                <div className='flex gap-2'>
                    <div className='bg-gray-400 w[30px] h[30px] p-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-500 hover:shadow-lg' onClick={prevSlide} ><FaArrowLeft /></div>
                    <div className='bg-gray-400 w[30px] h[30px] p-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-500 hover:shadow-lg ' onClick={nextSlide}><FaArrowRight /></div>
                </div>
            </div>
            <div className='my-7 flex gap-5 overflow-hidden'>
                {
                    swiggyData.map((food, index)=>{
                        return(
                            <div key={index} className='w-[150px] shrink-0 duration-500' style={{
                                transform:`translateX(-${slide*100}%)`
                                }}>
                                <img src={food.image} alt="" className='object-cover w-[150px] h-[150px] rounded-full'/>
                                <p className='text-center py-1 font-semibold'>{food.name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <hr className='mt-[50px] border-orange-300' />  
        </div>
    )
}
export default Category;