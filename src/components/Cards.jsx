import '../index.css'
import { FaStarHalfAlt } from "react-icons/fa";

function Cards ({data}){
    return(
        <div className='group'>
        <div className="w-full md:w-[273px] md:h-[180px] mb-1 mt-2 rounded-[5px] md:rounded-[15px] overflow-hidden relative group-hover:scale-95 duration-150">
            <img src={data.image} alt="Food1"  className="w-[95%] md:w-[100%] h-[100%] object-cover"/>
            <div className="card-overlay absolute top-0 md:w-[100%] w-[95%] h-[100%] flex items-end md:flex-nowrap flex-wrap">
                <h1 className='text-white font-semibold text-base p-3'>Item starts from $99 only/- </h1>
            </div>
        </div>
        <div>
            <p className='font-semibold text-base'>{data.cmp_name}</p>
            <p className='text-[13px] font-semibold flex items-center gap-2'><FaStarHalfAlt className='text-green-600' /> {data.rating} <span className='pl-0 md:pl-2'>30 - 40  Minutes</span> </p>
            <p className='text-[13px] text-gray-500'>{data.country}</p>
            <p className='text-[13px] text-gray-500'>{data.review}</p>                
        </div>
        </div>
    )
}
export default Cards;