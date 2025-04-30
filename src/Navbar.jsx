import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdOutlinePerson } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { RiCustomerServiceFill } from "react-icons/ri";


const Navbar = () => {
  return (
    <nav className='flex justify-between bg-gray-800 font-mono text-white text-2xl p-4'>
        <div>
            Your Name
        </div>
        <ul className='flex gap-4 items-center text-xl'>
            <li className='flex items-center gap-1'><FaHome /> Home</li>
            <li className='flex items-center gap-1'><MdOutlinePerson /> About</li>
            <li className='flex items-center gap-1'><IoMdContact /> Contact</li>
            <li className='flex items-center gap-1'><RiCustomerServiceFill /> Services</li>
        </ul>
    </nav>
  )
}

export default Navbar