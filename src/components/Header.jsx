import { RxCaretDown } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { MdLocalOffer } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import '../index.css'
import { useState } from "react";


function Header(){
    let [toggle, setToggle]= useState(false)
    let openTab = ()=>{
        setToggle(true)
    }
    let hideTab=()=>{
        setToggle(false)
    }
    let stopTab=(e)=>{
        e.stopPropagation();
    }
    let NavBar = [
        {icon:<IoSearchOutline />,name:'Search'}, {icon:<MdLocalOffer />, name: 'Offers', sup:'New'}, {icon:<IoIosHelpCircleOutline />, name:'Help'},{icon:<CiUser />, name:'Sign In'},{icon:<FaCartArrowDown />, name:'Cart', sup:'(9)'}
    ]
    return(
        <>
        <div className="overLay w-full h-full fixed duration-300 z-[99999]" style={{
            opacity: toggle? 1 : 0, 
            visibility: toggle? "visible": "hidden"
        }} onClick={hideTab} >
            <div className="bg-white md:w-[500px] w-[200px] absolute h-full duration-500 ease-in-out" style={{
                left: toggle? '0%' : '-100%'
            }} onClick={stopTab}> 
            {
                        NavBar.map((item,index)=>{
                            return(
                                <li key={index} className="list-none flex items-center gap-1 md:mt-0 mt-5 font-semibold cursor-pointer hover:text-orange-500 md:px-0 px-2">
                                {item.icon}
                                {item.name}
                                <sup className="text-orange-500">{item.sup}</sup>
                                </li>
                            )
                        })
                    }
                    <img src="./images/logo1.png" alt="Swiggy_Logo" className="w-[150px] h-[100px] mt-9 mx-5" />
                    <h1 className="text-orange-500 pl-1 font-semibold text-center" >Swiggy, <br /> Brand tohh suna hoga ! </h1>
            </div>
        </div>
        <header className="shadow-xl p-3">
            <div className="md:w-[1200px] md:mx-auto md:p-2 md:flex md:items-center">
                <div className="w-[100px] ">
                    <img src="./images/logo1.png" alt="Swiggy" />
                </div>
                <div className="">
                    <span className="font-bold border-b-2 border-orange-400">Ratanada</span> <span className="text-gray-500" >Jodhpur, Rajasthan, India </span> <RxCaretDown className="inline text-orange-400 text-[29px] cursor-pointer" onClick={openTab} /> 
                </div>
                    <nav className="md:flex ml-auto gap-5 md:flex-nowrap flex-wrap ">
                    {
                        NavBar.map((item,index)=>{
                            return(
                                <li key={index} className="hidden list-none md:flex items-center gap-1 font-semibold cursor-pointer hover:text-orange-500">
                                {item.icon}
                                {item.name}
                                <sup className="text-orange-500">{item.sup}</sup>
                                </li>
                            )
                        })
                    }
                </nav>
            </div>
        </header>
        </>
    )
}
export default Header;
