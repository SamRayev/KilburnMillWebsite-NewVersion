import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/Artisan.css'

const Artisan = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row'>
                <div id='left'>
                    <div>
                        <h1>Explore</h1>
                        <p>Kilburn Mill Entertainment offers the best in regional to
                            national acts in the genres of music, comedy, performance
                            theater, rooftop events and a celebrity speaker series.</p>
                        <ul className='flex'>
                            <NavLink to='/directory' id='hero-btn'>VIEW EVENTS</NavLink>
                        </ul>
                    </div>
                </div>
                <div id='hero' />
            </div>
            <div id='left-secondary' className='flex flex-row'>
                <div className='text-secondary'>
                    <h1>EXPLORE ENTERTAINMENT</h1>
                    <p>Visit the rooftop Performance Center, which boasts the best sunset on the south coast and
                        a postcard view of Buzzards Bay. In addition to any show or event, Kilburn Mill offers guests
                        a variety of great dining options. There is something for everyone! </p>
                    <NavLink to='/directory' id='hero-btn'>MENU</NavLink>
                </div>
                <div className='plate-container'>
                    <img className='plate' src={null} alt='KilburnMill.png' />
                </div>
            </div>
        </div>
    )
}

export default Artisan