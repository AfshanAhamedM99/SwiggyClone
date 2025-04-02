import { IoLocationSharp } from "react-icons/io5";
import Cards from '../components/Cards'
import cards_Data from '../components/cards_Data'

function OnlineResta(){
    return(
        <div className="w-full md:w-[1200px] md:mx-auto mt-8">
            <div className="">
                <h1 className="font-bold text-[20px] ">Restaurants with Online food delivery in <span className="text-orange-500 underline" >Bengaluru <IoLocationSharp className="inline" /></span> </h1>
                </div>
                <div className="w-full md:w-[1200px] flex p-1 md:p-2 gap-1 md:gap-2 cursor-pointer mt-2 overflow-x-auto flex-wrap md:flex-nowrap ">
                    <div className=" text-black border border-gray-400 p-1 rounded-md">Filter</div>
                    <div className=" text-black border border-gray-400 p-1 rounded-md">Sort By</div>
                    <div className=" text-black border border-gray-400 p-1 rounded-md">Date</div>
                    <div className=" text-black border border-gray-400 p-1 rounded-md">Time</div>
                    <div className=" text-black border border-gray-400 p-1 rounded-md">Year</div>
                    <div className=" text-black border border-gray-400 p-1 rounded-md">Month</div>
                    <div className=" text-black border border-gray-400 p-1 rounded-md">City</div>
                    <div className=" text-black border border-gray-400 p-1 rounded-md">Country</div>
                </div>
                <div className=" mt-2 p-2 grid md:grid-cols-4 grid-cols-2 md:ml-0" >
                    {
                        cards_Data.map((item, index)=>{
                            return(
                                <Cards data={item} />
                            )
                        } )
                    }
                </div>
        </div>
    )
}

export default OnlineResta;