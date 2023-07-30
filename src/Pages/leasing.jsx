import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Leasing.css';

const Leasing = () => {
    return (
        <div className='flex flex-col'>
            <div className='Leasing-main'>
                <div id='left'>
                    <div>
                        <h1>Space at the Mill</h1>
                        <p>With nearly half a million square feet, our three-building complex caters to retail and commercial businesses, as well as studio and storage spaces. Kilburn Mill includes more than 40 independently owned boutiques and eateries. These one-of-a-kind locations lend personality to the New Bedford neighborhood, cultivating community throughout the town.</p>
                        <ul className='flex'>
                            <NavLink to='/contact' id='hero-btn'>CONTACT US</NavLink>
                        </ul>
                    </div>
                </div>
                <div id='Leasing-hero' />
            </div>
            <div className='mobile-left lg:hidden m:hidden'>
                <h1>Space at the Mill</h1>
                <p>With nearly half a million square feet, our three-building complex caters to retail and commercial businesses, as well as studio and storage spaces. Kilburn Mill includes more than 40 independently owned boutiques and eateries. These one-of-a-kind locations lend personality to the New Bedford neighborhood, cultivating community throughout the town.</p>
                <ul className='flex'>
                    <NavLink to='/contact' id='hero-btn'>CONTACT US</NavLink>
                </ul>
            </div>
            <div className='left-secondary flex flex-row'>
                <div className='text-secondary'>
                    <h1>Retail & Leasing</h1>
                    <p>We invite you to come see the space for yourself and experience the water views, historic space, and eclectic community firsthand. Kilburn Mill continually seeks merchants and occupants with quality merchandise and selective services to continue to build upon and enhance our tenant mix.</p>
                </div>
            </div>
        </div>
    )
}

export default Leasing