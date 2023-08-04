import React from 'react'
import Card from '../Components/Event/card'
import Image from "../Assets/HeroImage.jpg"
import '../Styles/Events.css';

// If you want to route an event to a new page, you can add the following property after the date: url="YOUR EVENT PAGE'S URL"
// Example: <Card image={Image} description="This is Card 1." date="July 10, 2023" url="event-page"/>

const Events = () => {
  return (
    <div id='events-page'>
      <h1 className='mb-2'>Events</h1>
      <div className='events-page-items'>
        <Card image={Image} description="This is Card 1." date="July 10, 2023"/>
        <Card image={Image} description="This is Card 1." date="July 10, 2023"/>
        <Card image={Image} description="This is Card 1." date="July 10, 2023"/>
        <Card image={Image} description="This is Card 1." date="July 10, 2023"/>
        <Card image={Image} description="This is Card 1." date="July 10, 2023"/>
        <Card image={Image} description="This is Card 1." date="July 10, 2023"/>
        <Card image={Image} description="This is Card 1." date="July 10, 2023"/>
        <Card image={Image} description="This is Card 1." date="July 10, 2023"/>
        <Card image={Image} description="This is Card 1." date="July 10, 2023"/>
      </div>
    </div>
  )
}

export default Events