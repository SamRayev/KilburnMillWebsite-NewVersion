import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import Card from '../Components/Event/card'
import Image from "../Assets/HeroImage.jpg"
import HistoryImage from "../Assets/KilburnHistory.jpg"
import { ScrollContainer } from 'react-indiana-drag-scroll';
import emailjs from '@emailjs/browser';
import "../Styles/Home.css"
import 'react-indiana-drag-scroll/dist/style.css';

const Home = () => {
  const form = useRef();
  const [inputValues, setInputValues] = useState({
    user_email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xkdeb51', 'template_7p0r11p', form.current, 'mwL-BIF7A2BTUfsXe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='home flex flex-col'>
      <div className='hero flex flex-col'>
        <h1 className='text-center'>
          Explore the Streets of Kilburn
        </h1>
        <p className='text-center'>
          Home to more than 130 shops and boutiques. Visit Kilburn Mill to find your niche.
        </p>
        <NavLink to='/directory' className='hero-btn'> DIRECTORY</NavLink>
      </div>
      <div className='events flex flex-col'>
        <div className='scroll-group'>
          <ScrollContainer className='row gap-4 flex flex-row'>
            <Card
              image={Image}
              description="This is Card 1."
              date="July 10, 2023"
            />
            <Card
              image={Image}
              description="This is Card 1."
              date="July 10, 2023"
            />
            <Card
              image={Image}
              description="This is Card 1."
              date="July 10, 2023"
            />
            <Card
              image={Image}
              description="This is Card 1."
              date="July 10, 2023"
            />
            <Card
              image={Image}
              description="This is Card 1."
              date="July 10, 2023"
            />
            <Card
              image={Image}
              description="This is Card 1."
              date="July 10, 2023"
            />
            <Card
              image={Image}
              description="This is Card 1."
              date="July 10, 2023"
            />
            <Card
              image={Image}
              description="This is Card 1."
              date="July 10, 2023"
            />
          </ScrollContainer>
        </div>
      </div>
      <div className='m:hidden lg:hidden'>
          <img className='history-img' src={HistoryImage} />
      </div>
      <div id='history' className='flex flex-row'>
          <div className='history-text'>
              <h1>Truly Unique Weddings for Truly Unique Couples</h1>
              <p>The Kilburn Mill was one of the premiere cotton and textile mills in New Bedford. Built in 1903, it was expanded in 1910 to the current 3 building complex. Boasting one of the city’s most beautiful views — overlooking Clark’s Cove at the beginning of what is called New Bedford’s peninsula.</p>
              <p className='mt-16'>New Bedford’s 70 textile mills made it the richest city per person in the world — for a second time after whaling.</p>
          </div>
          <div className='history-container'>
              <img className='history-img' src={HistoryImage} />
          </div>
      </div>
      <div className='contact pt-16 pb-16 flex flex-col justify-center text-center'>
        <h2 className='text-center'>STAY CONNECTED</h2>
        <p className='text-center'>Register for our newsletter to stay updated on the latest upcoming events!</p>
        <form ref={form} onSubmit={sendEmail}>
          <input className={`focus:outline-none`} placeholder="Enter your email" required type="email" value={inputValues.user_email} onChange={handleInputChange} name="user_email" />
          <input className="submit-btn" type="submit" value="SIGN UP" />
        </form>
      </div>
    </div>
  )
}

export default Home