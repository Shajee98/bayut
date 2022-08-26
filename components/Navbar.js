import Image from 'next/image'
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';

const Navbar = () => {
  const [openSubMenu, setOpenSubMenu] = useState(false)

  return (
    <>
    <div className=" md:flex sm:hidden w-[100%] h-20 bg-white pl-32 pr-28 justify-between items-center">
        <div className='w-[13%] h-[70%] mr-64 py-3'> 
        <img className='w-[100%] h-[100%]' src={"/bayut_logo.png"} alt='logo'/>
        </div>
         <div className="h-[100%] w-[87%] flex items-center">
           <ul className="flex list-none w-full justify-between text-md"><li>Blog</li><li>Find an Agency</li><li>Floor Plans</li><li onClick={() => setOpenSubMenu(!openSubMenu)} className='relative cursor-pointer flex justify-between'>Guides {openSubMenu ? <ExpandLess /> : <ExpandMore />}{openSubMenu && <div className='absolute top-7 rounded-lg p-3 shadow-md right-0 z-10 bg-white'><ul><li className='whitespace-nowrap mb-2'>Area Guides</li><li className='whitespace-nowrap mb-2'>Building Guides</li><li className='whitespace-nowrap'>School Guides</li></ul></div>}</li><li>Market Intelligence</li><li>Agent Portal</li><li>Events</li></ul> 
        </div>
    </div>
    </>
  )
}

export default Navbar