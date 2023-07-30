import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Card from '../Components/Event/card'
import Image from "../Assets/HeroImage.jpg"
import HistoryImage from "../Assets/KilburnHistory.jpg"
import { ScrollContainer } from 'react-indiana-drag-scroll';
import "../Styles/Home.css"
import 'react-indiana-drag-scroll/dist/style.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [submittedEmails, setSubmittedEmails] = useState([]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(true); // Reset the validation status when the email is changed
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsEmailValid(false);
      setIsPopupVisible(true);
      return;
    }

    // Check if the email has already been submitted
    if (submittedEmails.includes(email)) {
      setIsEmailValid(false);
      setIsPopupVisible(true);
      return;
    }

    // Send the email to the server for processing
    fetch('/api/store-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Email stored successfully:', data);
        // Add the submitted email to the list
        setSubmittedEmails((prevEmails) => [...prevEmails, email]);
        // Reset the form
        setEmail('');
      })
      .catch((error) => {
        console.error('Error storing email:', error);
      });
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };

  useEffect(() => {
    if (isPopupVisible) {
      const timer = setTimeout(() => {
        setIsPopupVisible(false);
      }, 4000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isPopupVisible]);

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
        <form onSubmit={handleSubmit}>
          <input
            className={`focus:outline-none ${!isEmailValid ? 'invalid' : ''}`}
            placeholder="Enter your email"
            required
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
          {!isEmailValid && isPopupVisible && (
            <div className="popup fade-in-out">
              <p className="popup-message">
                {submittedEmails.includes(email)
                  ? 'Email Already Submitted'
                  : 'Invalid Email Format'}
              </p>
            </div>
          )}
          <button type="submit">SIGN UP</button>
        </form>
      </div>
    </div>
  )
}

export default Home