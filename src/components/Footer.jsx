import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer(){
    return(
        <div className="w-full bg-[#f1f0f5] flex md:gap-x-[76px] md:justify-center pt-5 mt-7 pb-2 md:flex-wrap md:flex-row flex-col md:items-start items-center">
            <div>
                <img src="./images/logo1.png" alt="Swiggy" className="w-[160px] h-[100px]" />
                <h5 className="text-gray-600"> &copy; 2025 Swiggy Clone Limited </h5>
            </div>
            <div>
                <ul className="text-gray-600 font-semibold" >
                <h5 className="font-bold text-black text-lg">Company</h5>
                    <li>About Us</li>
                    <li>Swiggy <br/> Corporate</li>
                    <li>Careers</li>
                    <li>Team</li>
                    <li>Swiggy One</li>
                </ul>
            </div>
            <div className="flex flex-col gap-7">
                <ul className="text-gray-600 font-semibold">
                    <h5 className="font-bold text-black text-lg">Contact Us </h5>
                    <li>About Us</li>
                    <li>Swiggy <br/> Corporate</li>
                    <li>Careers</li>
                    <li>Team</li>
                    <li>Swiggy One</li>
                </ul>
                <ul className="text-gray-600 font-semibold">
                    <h5 className="font-bold text-black text-lg">Legal </h5>
                    <li>About Us</li>
                    <li>Swiggy <br/> Corporate</li>
                    <li>Careers</li>
                    <li>Team</li>
                    <li>Swiggy One</li>
                </ul>
            </div>
            <div>
                <ul className="text-gray-600 font-semibold">
                <h5 className="font-bold text-black text-lg">Available in: </h5>
                    <li>About Us</li>
                    <li>Swiggy <br/> Corporate</li>
                    <li>Careers</li>
                    <li>Team</li>
                    <li>Swiggy One</li>
                </ul>
            </div>
            <div className="flex flex-col gap-11 flex-wrap">
                <ul className="text-gray-600 font-semibold">
                <h5 className="font-bold text-black text-lg">Life at Swiggy  <br /> Clone </h5>
                    <li>About Us</li>
                    <li>Swiggy <br/> Corporate</li>
                    <li>Careers</li>
                    <li>Team</li>
                    <li>Swiggy One</li>
                </ul>
                <ul className="text-gray-600 font-semibold">
                    <h5 className="font-bold text-black text-lg">Social Links </h5>
                    <li className="flex gap-2 mt-2">
                        <span><FaLinkedin /></span>
                        <span><BsInstagram /></span>
                        <span><FaFacebook /></span>
                        <span><FaPinterest /></span>
                        <span><FaTwitter /></span>
                    </li>
                </ul>
            </div>
        </div>
    )    
}

export default Footer;