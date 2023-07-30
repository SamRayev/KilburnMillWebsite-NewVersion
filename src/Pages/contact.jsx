import React from 'react';
import '../Styles/Contact.css';

const Contact = () => {
    return (
        <div className='flex flex-col'>
            <div className='Contact-main'>
                <div id='left'>
                    <div>
                        <h1>Contact Us</h1>
                        <p>We strive for excellence. If you have any questions, don't hesitate to get in touch with us at The Kilburn Mill.</p>
                        <p>Visit Us: <u>127 West Rodney French Boulevard New Bedford, MA 02744</u></p>
                        <p>Phone: <u>+1 508 990 3500</u></p>
                    </div>
                </div>
                <div id='Contact-hero' />
            </div>
            <div className='mobile-left lg:hidden m:hidden'>
                <div>
                    <h1>Contact Us</h1>
                    <p>We strive for excellence. If you have any questions, don't hesitate to get in touch with us at The Kilburn Mill.</p>
                    <p>Visit Us: <u>127 West Rodney French Boulevard New Bedford, MA 02744</u></p>
                    <p>Phone: <u>+1 508 990 3500</u></p>
                </div>
            </div>
        </div>
    )
}

export default Contact