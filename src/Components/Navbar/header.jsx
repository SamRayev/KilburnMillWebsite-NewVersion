import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import "../../Styles/Header.css"
const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Function to check if the screen size is small
    const checkIsMobile = () => {
        setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint (768) as needed
    };

    const toggleMenu = () => {
        if (window.innerWidth <= 1000) {
            setIsOpen(!isOpen);
        } else {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        // Add event listener to check screen size on mount and window resize
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);
    
    useEffect(() => {
        // Close the menu when the location changes
        setIsOpen(false);
      }, [location]);
    
      
    return (
        <div className='header flex flex-row'>
            <NavLink to="/">
                <div className='logo flex flex-col'>
                    <h1>
                        KILBURN MILL
                    </h1>
                    
                </div>
            </NavLink>
            {!isMobile && (
                <div className='sm:hidden links md:flex gap-6'>
                    <NavLink className='link' to='/events'>
                        EVENTS
                    </NavLink>
                    <NavLink className='link' to='/weddings'>
                        WEDDINGS
                    </NavLink>
                    <NavLink className='link' to='/entertainment'>
                        ENTERTAINMENT
                    </NavLink>
                    <NavLink className='link' to='/gallery'>
                        GALLERY
                    </NavLink>
                    <NavLink className='link' to='/leasing'>
                        LEASING
                    </NavLink>
                    <NavLink className="link" to="/contact">
                        CONTACT
                    </NavLink>
                </div>
            )}
            <div className="md:hidden lg:hidden flex items-center">
                <button
                    onClick={toggleMenu}
                    className="hamburger text-black text-xl focus:outline-none links"
                >
                    {isMobile ? <MenuIcon /> : <MenuIcon />}
                </button>
            </div>
            {isMobile && (
                <div className={`hamburger-menu md:hidden gap-6 pb-20 ${isOpen ? 'active' : ''}`}>
                    <NavLink className='link-ham' to='/events'>
                        EVENTS
                    </NavLink>
                    <NavLink className='link-ham' to='/weddings'>
                        WEDDINGS
                    </NavLink>
                    <NavLink className='link-ham' to='/entertainment'>
                        ENTERTAINMENT
                    </NavLink>
                    <NavLink className='link-ham' to='/gallery'>
                        GALLERY
                    </NavLink>
                    <NavLink className='link-ham' to='/leasing'>
                        LEASING
                    </NavLink>
                    <NavLink className="link-ham" to="/contact">
                        CONTACT
                    </NavLink>
                </div>
            )}
        </div>
    )
}

export default Header