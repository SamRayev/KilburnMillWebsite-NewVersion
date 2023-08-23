import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import '../Styles/Contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
        await emailjs.sendForm('service_xkdeb51', 'template_kk3vnft', form.current, 'mwL-BIF7A2BTUfsXe') // Change these ID's to the proper account ID's
        console.log('Email sent successfully');
        form.current.reset(); // Clear the form fields
        } catch (error) {
        console.error('Error sending email:', error);
        }
    };
    return (
        <div className='flex flex-col'>
            <div className='Contact-main'>
                <div id='left'>
                    <div>
                        <h1>Get In Touch With Our Team!</h1>
                        <p>We strive for excellence. If you have any questions, don't hesitate to get in touch with us at The Kilburn Mill.</p>
                        <p>Visit Us: <u>127 West Rodney French Boulevard New Bedford, MA 02744</u></p>
                        <p>Phone: <u>+1 508 990 3500</u></p>
                    </div>
                </div>
                <div id='Contact-hero' />
            </div>
            <div className='mobile-left lg:hidden m:hidden'>
                <div>
                    <h1>Get In Touch With Our Team!</h1>
                    <p>We strive for excellence. If you have any questions, don't hesitate to get in touch with us at The Kilburn Mill.</p>
                    <p>Visit Us: <u>127 West Rodney French Boulevard New Bedford, MA 02744</u></p>
                    <p>Phone: <u>+1 508 990 3500</u></p>
                </div>
            </div>
            <div className='contact-form pt-16 pb-16 flex flex-col justify-center text-center'>
                <div className='form'>
                    <h2 className='text-center'>SEND US AN EMAIL</h2>
                    <p className='text-center'>Whether it's a simple question or you need a space for your business, send email to get in contact with us and we'll try to get back to you as soon as possible!</p>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='flex flex-col gap-2 mt-0.5 mb-0.5'>
                            <input className={`focus:outline-none bg-gray-100 p-2 rounded`} type="text" placeholder="Your Name" name="user_name" />
                            <input className={`focus:outline-none bg-gray-100 p-2 rounded`} placeholder="Your Email" required type="email" name="user_email" />
                            <textarea className={`focus:outline-none bg-gray-100 p-2 rounded`} placeholder="Message..." name="message" />
                            <input className="submit-btn focus:outline-none cursor-pointer" type="submit" value="SUBMIT" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact