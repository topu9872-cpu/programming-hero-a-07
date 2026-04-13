
import { ImStatsDots } from 'react-icons/im';
import { IoMdTime } from 'react-icons/io';
import { RiHome2Line } from 'react-icons/ri';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center shadow-md py-4 px-16 mx-auto'>
            <div className='text-2xl font-semibold'>
                
        KeenKeeper
            </div>
            <div>
                <ul className='flex gap-5'>
                  <NavLink to='/' className={({isActive})=>`font-semibold p-2 rounded-md flex items-center gap-1 ${isActive && 'bg-green-800 text-white'}` }><RiHome2Line/>  Home</NavLink>
                  <NavLink to='/timeline' className={({isActive})=>`font-semibold p-2 rounded-md flex items-center gap-1 ${isActive && 'bg-green-800 text-white'}` }><IoMdTime/>Timeline</NavLink>
                  <NavLink to='/stats' className={({isActive})=>`font-semibold p-2 rounded-md flex items-center gap-1 ${isActive && 'bg-green-800 text-white'}` }> <ImStatsDots/> Stats</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;