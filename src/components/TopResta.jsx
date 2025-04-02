import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Cards from '../components/Cards'
import cards_Data from '../components/cards_Data'
import { useState } from "react";

function TopResta(){
    // console.log('Total: ',cards_Data.length)
    let [Tab, setTab]=useState(0)
    let moveleftTab = ()=>{
        if(Tab===18) return false;
        setTab(Tab+2)
    }
    let moverightTab = () =>{
        if(Tab===0) return false;
        setTab(Tab-2)
    }
    return(
        <div className="w-full md:w-[1200px] mx-auto">
            <div className="flex justify-between">
                <h1 className="font-bold text-[20px]">Top Restraunts in <span className="text-orange-600 cursor-pointer underline" >Tumakuru <IoLocationSharp className="inline" /></span></h1>
                <div className="flex gap-2">
                    <div className='bg-gray-400 w[30px] h[30px] p-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-500 hover:shadow-lg' onClick={moveleftTab}><FaArrowLeft /></div>
                    <div className='bg-gray-400 w[30px] h[30px] p-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-500 hover:shadow-lg' onClick={moverightTab} ><FaArrowRight /></div>
                </div>
            </div>
            <div className="overflow-hidden mt-3 px-2 pb-2 mb-2">
            <div className="flex gap-5 mt-3 duration-500" style={{
            transform:`translateX(-${Tab*20}%)`
            }}>
                {/* For Cards */}
                {
                    cards_Data.map((data, index)=>{
                        return(
                                    <Cards data={data}/>                    
                        )
                    })
                }
            </div>
            </div>
            <hr className='mt-[50px] border-orange-300' />  
        </div>
    )
}

export default TopResta;