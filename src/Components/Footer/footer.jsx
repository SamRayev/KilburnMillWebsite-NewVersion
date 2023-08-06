import React from 'react'
import { NavLink } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../../Styles/Footer.css"
const Footer = () => {
    return (
        <div className='footer flex flex-col justify-between'>
            <div className='flex flex-row justify-between'>
                <NavLink to="/">
                    <div className='logo flex flex-col'>
                        <p className='logo-item'>
                            KILBURN MILL
                        </p>
                        <p className='footer-p'>
                            AT CLARKS COVE
                        </p>
                    </div>
                </NavLink>
                <div className='flex flex-col text-right links gap-1.5 pb-4'>
                    <NavLink className="link" to="/isolation-gallery">ISOLATION GALLERY</NavLink>
                    <NavLink className="link" to="/leasing">LEASING</NavLink>
                    <a className="link" href="tel:508-990-3500">508-990-3500</a>
                    <div>
                        <a className='mr-1' href='https://www.instagram.com/kilburnmillatclarkscove/'><InstagramIcon fontSize='small'/></a>
                        <a href='https://www.facebook.com/Kilburnmillatclarkscove/'><FacebookIcon fontSize='small'/></a>
                    </div>
                </div>
            </div>
            <div className='line' />
            <div className='footer-links flex flex-row justify-between cursor-pointer'>
                <div>
                    Copyright © KILBURN MILL 2023
                </div>
                <div className='text-right'>
                    127 WEST RODNEY FRENCH BOULEVARD, NEW BEDFORD, MA 02744
                </div>
            </div>
        </div>
    )
}

export default Footer