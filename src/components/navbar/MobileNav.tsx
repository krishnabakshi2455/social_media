
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
    <div className='fixed bottom-0 p-2'>
          <div className=' md:flex-col md:gap-24 flex' >


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
    </div>
  )
}

export default MobileNav
