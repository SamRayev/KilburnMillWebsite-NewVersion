import React from 'react'
import { NavLink } from 'react-router-dom'
import ImageOne from "../Assets/EventImages/KilburnWeddingTwo.jpg"
import ImageTwo from "../Assets/EventImages/KilburnWeddingThree.jpg"
import '../Styles/Weddings.css'

const Weddings = () => {
    return (
        <div className='flex flex-col'>
            <div className='wed-main'>
                <div id='left'>
                    <div>
                        <h1>Start Your History at The Mill</h1>
                        <p>Make your wedding a statement of your style, your individualism.  
                            Let Kilburn Mill’s wedding team help you make your wedding a 
                            statement of who you are.</p>
                        <ul className='flex gap-4'>
                            <li id='hero-btn'><NavLink to='/contact'>CONTACT US</NavLink></li>
                            <li id='hero-btn'><NavLink to='https://k5nbbd.p3cdn1.secureserver.net/wp-content/uploads/2021/04/Wedding-Information-2021-2022.pdf'>MORE INFORMATION</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div id='wed-hero' />
            </div>
            <div className='mobile-left lg:hidden m:hidden'>
                <h1>Start Your History at The Mill</h1>
                <p>Make your wedding a statement of your style, your individualism. Let Kilburn Mill’s wedding team help you make your wedding a statement of who you are.</p>
                <ul className='flex gap-4'>
                    <li id='hero-btn'><NavLink to='/contact'>CONTACT US</NavLink></li>
                    <li id='hero-btn'><NavLink to='https://k5nbbd.p3cdn1.secureserver.net/wp-content/uploads/2021/04/Wedding-Information-2021-2022.pdf'>MORE INFORMATION</NavLink></li>
                </ul>
            </div>
            
            <div className='m:hidden lg:hidden'>
                <img className='wedding' src={ImageTwo} />
            </div>

            <div id='left-secondary' className='flex flex-row'>
                <div className='wedding-container'>
                    <img className='wedding' src={ImageTwo} />
                </div>
                <div className='wedding-text-secondary'>
                    <h1>Truly Unique Weddings for Truly Unique Couples</h1>
                    <p>Twenty foot ceiling, thirteen foot windows, water views, open spaces that can be elegant or rustic, intimate or spacious. No small dance floors. No staid ballrooms. Kilburn Mill gives you the opportunity to create your unique wedding. Start with a rooftop ceremony. Have cocktails in the Textile Room or the Gallery Room with lounge whimsical lounge décor. With our wide open floor plans, create a reception that showcases your personal style. Be it rustic or elegant, formal or casual, traditional or whimsically avant garde. We can make it happen at Kilburn Mill.</p>
                </div>
            </div>

            <div className='m:hidden lg:hidden'>
                <img className='wedding' src={ImageOne} />
            </div>
            <div id='left-tirtiary' className='flex flex-row'>
                <div className='wedding-container'>
                    <img className='wedding' src={ImageOne} />
                </div>
                <div className='wedding-list'>
                    <h1>Let Us Help You</h1>
                    <ul className='text-left pl-6'>
                        <li>Wedding Planning & Day-of Coordination</li>
                        <li>Wedding planning guides to keep you on track</li>
                        <li>Choose one of our packages, or let us custom create one</li>
                        <li>Menu selection & group tasting</li>
                        <li>Selection of bar service packages</li>
                        <li>Linen, Tablescape and décor consultation</li>
                        <li>Floral planning and design</li>
                        <li>Professional floor planning and layout</li>
                        <li>Wedding salon with personal wedding attendant</li>
                        <li>Vendor partners list for everything from limos to tuxes, invitations to officiants and more</li>
                        <li>Transportation arrangements</li>
                    </ul>
                    <NavLink to='/gallery' id='hero-btn'>GALLERY</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Weddings