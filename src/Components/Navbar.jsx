import { GrDatabase } from "react-icons/gr";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
    return (
        <div className='NavBar flex sm:justify-around items-center sm:px-10 min-[320px]:justify-between min-[320px]:pr-0 min-[320px]:pl-10'>
            <span className='inline-flex justify-center items-center gap-3 cursor-pointer text-[30px] font-semibold'><GrDatabase size={20} color="#5059CD
"/>iHost</span>
            <div className="flex gap-4 items-center">
                <div className='flex'>
                    <a href="#" className='MenuList capitalize p-5 inline-block cursor-pointer border-b-2 border-transparent hover:border-blue-700 hover:text-blue-700 sm:flex min-[320px]:hidden'>domain</a>
                    <a href="#" className='MenuList capitalize p-5 inline-block cursor-pointer border-b-2 border-transparent hover:border-blue-700 hover:text-blue-700 sm:flex min-[320px]:hidden'>hosting</a>
                    <a href="#" className='MenuList capitalize p-5 inline-block cursor-pointer border-b-2 border-transparent hover:border-blue-700 hover:text-blue-700 sm:flex min-[320px]:hidden'>emails</a>
                    <a href="#" className='MenuList capitalize p-5 inline-block cursor-pointer border-b-2 border-transparent hover:border-blue-700 hover:text-blue-700 sm:flex min-[320px]:hidden'>help Center</a>
                    <a href="#" className=' p-5 inline-block cursor-pointer border-b-2 border-transparent hover:border-blue-700 hover:text-blue-700'><IoBagHandleSharp size={20} /></a>
                </div>
                <div className='SignInBtn capitalize p-3 px-6 block cursor-pointer bg-[#5059CD] sm:text-xs min-[320px]:text-[10px] '>sign in</div>
                <div className='MenuBar sm:hidden min-[320px]:flex p-5 inline-block cursor-pointer border-b-2 border-transparent hover:border-blue-700 hover:text-blue-700'><FaBars size={20} /></div>
            </div>
        </div>
    )
}
