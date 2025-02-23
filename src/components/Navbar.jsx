import React from 'react';
import { CgMenuGridO } from "react-icons/cg";

export default function Navbar({ visible, setVisible }) {
    const name = localStorage.getItem("name") || "Guest";
    const result = name.charAt(0).toUpperCase();

    return (
        <>
            <div className='w-full sm:w-[1045px] flex justify-between sm:justify-end items-center shadow-md fixed bg-white  h-[60px] px-4 z-20'>
                {/* Menu Icon - Only Visible on Mobile */}
                <div className='block sm:hidden p-4' onClick={() => setVisible(!visible)}>
                    <CgMenuGridO />
                </div>

                {/* User Info - Always Visible */}
                <div className='flex items-center gap-3 pr-8'>
                    <div className="border rounded-full w-[40px] h-[40px] flex items-center justify-center text-md font-bold bg-orange-200">
                        {result}
                    </div>
                    <div className='flex flex-col'>
                        <div className="text-sm font-bold uppercase">{name}</div>
                        <div className='text-xs'>Fundraiser</div>
                    </div>
                </div>
            </div>
        </>
    );
}
