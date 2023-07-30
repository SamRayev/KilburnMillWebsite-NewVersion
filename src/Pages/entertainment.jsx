import React from 'react';
import { NavLink } from 'react-router-dom';
import Plate from '../Assets/Plate.png';
import '../Styles/Entertainment.css';

const Entertainment = () => {
    return (
        <div className='flex flex-col'>
            <div className='Ent-main'>
                <div id='left'>
                    <div>
                        <h1>It's All Happening</h1>
                        <p>Kilburn Mill Entertainment offers the best in regional to
                            national acts in the genres of music, comedy, performance
                            theater, rooftop events and a celebrity speaker series.</p>
                        <ul className='flex'>
                            <NavLink to='/directory' id='hero-btn'>VIEW EVENTS</NavLink>
                        </ul>
                    </div>
                </div>
                <div id='ent-hero' />
            </div>
            <div className='mobile-left lg:hidden m:hidden'>
                <h1>It's All Happening</h1>
                <p>Kilburn Mill Entertainment offers the best in regional to
                    national acts in the genres of music, comedy, performance
                    theater, rooftop events and a celebrity speaker series.</p>
                <ul className='flex'>
                    <NavLink to='/directory' id='hero-btn'>VIEW EVENTS</NavLink>
                </ul>
            </div>
            <div className='left-secondary flex flex-row'>
                <div className='text-secondary'>
                    <h1>EXPLORE ENTERTAINMENT</h1>
                    <p>Visit the rooftop Performance Center, which boasts the best sunset on the south coast and
                        a postcard view of Buzzards Bay. In addition to any show or event, Kilburn Mill offers guests
                        a variety of great dining options. There is something for everyone! </p>
                    <NavLink to='/directory' id='hero-btn'>MENU</NavLink>
                </div>
                <div className='plate-container'>
                    <img className='plate' src={Plate} alt='KilburnMill.png' />
                </div>
            </div>
        </div>
    )
}

export default Entertainment