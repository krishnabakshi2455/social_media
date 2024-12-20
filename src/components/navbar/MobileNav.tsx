
import { House } from 'lucide-react';
import { CirclePlus } from 'lucide-react';
import { Bell } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import './Navbar.css';
// import { RootState } from '../../ReduxFolder/store'; // Assuming RootState is defined in the Redux store
import { NavLink } from 'react-router-dom';

const MobileNav = () => {
  return (
    <div className='fixed bottom-0 p-2 w-full border-t-2'>
          <div className='flex flex-row justify-around items-center w-full ' >


              <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? 'text-orange-600 flex items-center hover:text-orange-600 gap-4 duration-200 md:text-2xl font-semibold font-serif' : 'flex items-center gap-4 md:text-2xl font-semibold font-serif hover:text-orange-600 duration-200'}>
                  <House />
              </NavLink>

              <NavLink
                  to="/posts"
                  className={({ isActive }) => isActive ? 'text-orange-600 flex items-center hover:text-orange-600 gap-4 duration-200 md:text-2xl font-semibold font-serif' : 'flex items-center gap-4 md:text-2xl font-semibold font-serif hover:text-orange-600 duration-200'}>
                  <MessageCircle />
              </NavLink>

              <NavLink
                  to="/notification"
                  className={({ isActive }) => isActive ? 'text-orange-600 flex items-center hover:text-orange-600 gap-4 duration-200 md:text-2xl font-semibold font-serif' : 'flex items-center gap-4 md:text-2xl font-semibold font-serif hover:text-orange-600 duration-200'}>
                  <Bell />
              </NavLink>

              <div
                  className="flex items-center hover:text-orange-600 gap-4 duration-200 md:text-2xl font-semibold font-serif">
                  <CirclePlus />
              </div>

              <NavLink
                  to="/profile"
                  className="bg-orange-600 text-white w-6 h-6 flex justify-center rounded-full items-center">
                  {/* <Avatar className="w-2 special-icon-1">
                                {SingUpUsername ? SingUpUsername[0] : 'U'}
                            </Avatar> */}
                  {/* <span className='nav-text'>{SingUpUsername}</span> */}
                  <span className=''>k</span>

              </NavLink>


          </div>
    </div>
  )
}

export default MobileNav
