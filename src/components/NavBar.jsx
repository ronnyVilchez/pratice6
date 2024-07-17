import { useState } from 'react'
import menu from '/images/icon-menu.svg'
import close from '/images/icon-menu-close.svg'

export const NavBar = () => {

    const [menuModal, setMenuModal] = useState(true)
    const openMenu = () => {
        setMenuModal(!menuModal)
    }

    return (
        <>
            <ul className={`${menuModal ? 'hidden' : ''} absolute bg-white top-0 right-0 w-[256px] p-[24px] h-full text-[18px] sm:flex sm:items-center sm:w-[438px] sm:place-content-around sm:p-0 sm:h-auto sm:relative sm:text-[16px]`}>
                <li className={`${menuModal ? 'hidden' : ''} cursor-pointer sm:hidden flex place-content-end`}>
                    <img className='w-8 h-8 mb-[87px]' src={close} alt="close" onClick={openMenu} />
                </li>
                <li className='mb-8 sm:mb-0'> <a className='hover:text-SoftRed sm:text-4' href="#">Home</a></li>
                <li className='mb-8 sm:mb-0'> <a className='hover:text-SoftRed' href="#">Popular</a></li>
                <li className='mb-8 sm:mb-0'> <a className='hover:text-SoftRed' href="#">Trending</a></li>
                <li className='mb-8 sm:mb-0'> <a className='hover:text-SoftRed' href="#">Categories</a></li>
            </ul>
            <img className='w-10 h-4 cursor-pointer sm:hidden' src={menu} alt="menu" onClick={openMenu} />
        </>
    )
}
