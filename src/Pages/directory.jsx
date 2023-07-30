import React, { useEffect, useState } from 'react';
import Floorplan from '../Components/Floorplan/Floorplan';
import floorplanData from '../Components/Floorplan/floorplan-data.json'
import '../Styles/Directory.css';

const Directory = () => {
    const [selectedRoom, setSelectedRoom] = useState(null);

    useEffect(() => {
        const handleClick = (event) => {
            event.preventDefault();
            const clickedRoom = event.currentTarget;
            setSelectedRoom((prevSelectedRoom) => {
                // If the clicked room is the same as the previously selected room, toggle off
                return prevSelectedRoom === clickedRoom ? null : clickedRoom;
            });
        };

        const rooms = document.querySelectorAll('.room');
        rooms.forEach((room) => {
            room.addEventListener('click', handleClick);
        });

        return () => {
            rooms.forEach((room) => {
                room.removeEventListener('click', handleClick);
            });
        };
    }, [selectedRoom]);


    return (
        <div className='directory flex flex-col'>
            <div id='plan'>
                <div className='room' tabindex="1">
                    <p class="roomName"></p>
                    <div class="door"></div>
                </div>
                <div className='room' tabindex="1">
                    <p class="roomName"></p>
                    <div class="door"></div>
                </div>
                <div className='vert-one'>
                    <div className='room-vert-one' tabindex="1">
                        <p class="roomName"></p>
                        <div class="door"></div>
                    </div>
                    <div className='border-line'></div>
                    <div className='room-vert-one' tabindex="1">
                        <p class="roomName"></p>
                        <div class="door"></div>
                    </div>
                </div>
                <div className='vert-two'>
                    <div className='room-vert-two' tabindex="1">
                        <p class="roomName"></p>
                        <div class="door"></div>
                    </div>
                    <div className='border-line'></div>
                    <div className='room-vert-two' tabindex="1">
                        <p class="roomName"></p>
                        <div class="door"></div>
                    </div>
                </div>
                <div className='room' tabindex="1">
                    <p class="roomName"></p>
                    <div class="door"></div>
                </div>
            </div>
            <div className='store-list flex flex-col'>
            </div>
        </div>
    )
}

export default Directory