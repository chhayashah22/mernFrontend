import React from 'react';
import img from '../assets/images/img1.jpg';
import ProgressCircle from './ProgressCircle';
import { FaHeart } from "react-icons/fa";
import DonateButton from './DonateButton';
import { AiOutlineHome } from "react-icons/ai"
import { ToastContainer ,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Dashboard(){
const shareText = "Check out this awesome website: https://ngo.com";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareText)
      .then(() => alert("Link copied to clipboard!"));
      
  };

const shareOnWhatsApp = () => {
const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
window.open(whatsappURL, '_blank');
  
    }
    return(
        <>
        <ToastContainer/>         
        <div className='flex justify-between'>
        <DonateButton/> 
        <div className='flex p-2 items-center'><AiOutlineHome style={{color:'orange'} }/> 
        <p>/ General / </p>
        <p> Dashboard</p>
        </div>
        </div>
             
       
    <div className='bg-white shadow-md'>         
           <img className='w-full' src={img}/>
            <div className='sm:flex-row justify-around m-6 flex flex-col '>
            <div>
            <ProgressCircle/>
            </div>
            <div className=''>
                <p className='text-center w-[400px] m-2'><span className='text-orange-500'>Level Achieved</span> : Star</p>
                <p className='border-2 border-gray-200'></p>
                <div className='flex gap-2  justify-center m-4 '>
                    <div><button className='bg-orange-400 p-2 rounded-sm'>Rewards</button></div>
                   <div> <button className='bg-orange-400 p-2 rounded-sm'>Copy Donation Link</button>
                    </div>
                </div>
                <p className='text-center text-sm'>Unlock Rewards at 5000</p>
                <p className='text-center m-4 font-medium'><span className='text-orange-500 '>Time Left </span>: Compaign Expired</p>
                <div className='flex justify-center'> <button className='bg-orange-400 p-2 rounded-sm'>Extend Now</button>
                    </div>

                <p className='border-2 border-orange-700 m-4'></p>
                <p className='text-center'><span className='text-orange-500'>Reference Code</span> : pr223</p>
                <div className='flex justify-center m-4'> <button className='bg-orange-400 p-2 rounded-sm'>Start Here</button>
                    </div>
            </div>
            </div>
            
            <div className='flex m-4'> <button className='bg-orange-400 p-2 rounded-sm m-4'  onClick={() => {
          copyToClipboard();
          shareOnWhatsApp();}}
            >Share using whatsapp</button>
                    </div>
        </div>
        
       
        
        
        
       

      
        </>
    )
}