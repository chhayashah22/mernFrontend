import React from 'react';
import { IoIosArrowBack  } from "react-icons/io";
import { FaDesktop } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi"
import { FaQuestionCircle } from "react-icons/fa";
import { FaArrowTurnDown } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import { RiFeedbackLine } from "react-icons/ri";
import { Link,NavLink} from 'react-router-dom';

 function Sidebar({visible,setVisible}){
    return(
        <>
<div className={`sm:w-1/4 sm:flex flex-col  p-6 shadow-md h-auto w-full flex  ${!visible && "hidden" } sm:fixed top-0 left-0 bg-white z-10 h-screen `}>
 <p className="flex items-center justify-end sm:hidden " onClick={()=>setVisible(!visible)}>
  <IoIosArrowBack className="text-lg m-4" />
</p>

        <h1 className='p-4 border-4 border-blue-600 rounded-lg '>Logo</h1>
        <Link className="p-4 bg-orange-50 rounded-md text-orange-500 block">General</Link>
        <NavLink  to="/dashboard" end={true}  className={({ isActive }) => `p-4 flex items-center gap-2 rounded-md  ${isActive ? "bg-orange-500 text-white" :"text-black"
          }`} ><FaDesktop /> Dashboard</NavLink>

      <NavLink to="/dashboard/transactions" end={true}  className={({ isActive }) => `p-4 flex items-center gap-2 rounded-md  ${isActive ? "bg-orange-500 text-white" : "text-black"
          }`} ><TfiMenuAlt/>Transaction</NavLink>

      <NavLink to="/dashboard/starthere" end={true}  className={({ isActive }) => `p-4 flex items-center gap-2 rounded-md  ${isActive ? "bg-orange-500 text-white" : "text-black"
          }`} ><FaArrowTurnDown />Start Here</NavLink>

      <NavLink to="/dashboard/faq"end={true}  className={({ isActive }) => `p-4 flex items-center gap-2 rounded-md  ${isActive ? "bg-orange-500 text-white" : "text-black"
          }`} ><FaQuestionCircle/>FAQ</NavLink>
      <NavLink to="/dashboard/modules" end={true}  className={({ isActive }) => `p-4 flex items-center gap-2 rounded-md  ${isActive ? "bg-orange-500 text-white" : "text-black"
          }`} ><IoBookOutline/>Learning Modules</NavLink>
      <NavLink to="/dashboard/rewards" end={true}  className={({ isActive }) => `p-4 flex items-center gap-2 rounded-md  ${isActive ? "bg-orange-500 text-white" : "text-black"
          }`} ><FaRegStar/>Rewards</NavLink>
      <NavLink to="/dashboard/feedback" end={true}  className={({ isActive }) => `p-4 flex items-center gap-2 rounded-md  ${isActive ? "bg-orange-500 text-white" : "text-black"
          }`} ><RiFeedbackLine/>Feedback</NavLink>
    </div>
        </>
    )
}
export default Sidebar;