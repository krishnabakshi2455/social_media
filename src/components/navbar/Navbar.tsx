
import React from 'react';

import { House } from 'lucide-react';
import { CirclePlus } from 'lucide-react';
import { Bell } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import './Navbar.css';
// import { RootState } from '../../ReduxFolder/store'; // Assuming RootState is defined in the Redux store
import { NavLink } from 'react-router-dom';
import MobileNav from './MobileNav';



const Navbar: React.FC = () => {
    // const SingUpUsername = useSelector((state: RootState) => state.AuthenticationSignup.username)


    return (
        <>
            <div className='border-r-2 md:border-gray-300 md:w-80 md:p-10 md:h-[100vh]'>


                <div className=' md:flex-col md:gap-24 md:flex hidden' >


                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? 'text-orange-600 flex items-center hover:text-orange-600 gap-4 duration-200 text-2xl font-semibold font-serif' : 'flex items-center gap-4 text-2xl font-semibold font-serif hover:text-orange-600 duration-200'}>
                        <House />
                        <span className='text-3xl'>Home</span>
                    </NavLink>

                    <NavLink
                        to="/posts"
                        className={({ isActive }) => isActive ? 'text-orange-600 flex items-center hover:text-orange-600 gap-4 duration-200 text-2xl font-semibold font-serif' : 'flex items-center gap-4 text-2xl font-semibold font-serif hover:text-orange-600 duration-200'}>
                        <MessageCircle />
                        <span className='nav-text'>Chats</span>
                    </NavLink>

                    <NavLink
                        to="/notification"
                        className={({ isActive }) => isActive ? 'text-orange-600 flex items-center hover:text-orange-600 gap-4 duration-200 text-2xl font-semibold font-serif' : 'flex items-center gap-4 text-2xl font-semibold font-serif hover:text-orange-600 duration-200'}>
                        <Bell />
                        <span className='nav-text'>Notification</span>
                    </NavLink>

                    <NavLink
                        to="/create"
                        className={({ isActive }) => isActive ? 'text-orange-600 flex items-center hover:text-orange-600 gap-4 duration-200 text-2xl font-semibold font-serif' : 'flex items-center gap-4 text-2xl font-semibold font-serif hover:text-orange-600 duration-200'}>
                        <CirclePlus />
                        <span className='nav-text'>Create</span>
                    </NavLink>

                    <NavLink
                        to="/profile"
                        className={({ isActive }) => isActive ? 'text-orange-600 flex items-center hover:text-orange-600 gap-4 duration-200 text-2xl font-semibold font-serif' : 'flex items-center gap-4 text-2xl font-semibold font-serif hover:text-orange-600 duration-200'}>
                        {/* <Avatar className="w-2 special-icon-1">
                                {SingUpUsername ? SingUpUsername[0] : 'U'}
                            </Avatar> */}
                        {/* <span className='nav-text'>{SingUpUsername}</span> */}
                        <span className='nav-text'>SingUpUsername</span>

                    </NavLink>


                </div>

                <div className='md:hidden flex'>
                    <MobileNav/>
                </div>

            </div>
        </>
    );
};

export default Navbar;
