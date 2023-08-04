import React from 'react';
import ImageOne from '../Assets/GalleryImages/ImageOne.jpeg';
import ImageTwo from '../Assets/GalleryImages/ImageTwo.JPG';
import ImageThree from '../Assets/GalleryImages/ImageThree.JPG';
import ImageFour from '../Assets/GalleryImages/ImageFour.JPG';
import ImageFive from '../Assets/GalleryImages/ImageFive.JPG';
import ImageSix from '../Assets/GalleryImages/ImageSix.jpg';
import '../Styles/Gallery.css';

const Gallery = () => {
    return (
        <div id='gallery'>
            <h1 className='mb-2'>GALLERY</h1>
            <div className='gallery-items'>
                <img className="gallery-item" src={ImageOne} />
                <img className="gallery-item" src={ImageTwo} />
                <img className="gallery-item" src={ImageThree} />
                <img className="gallery-item" src={ImageFour} />
                <img className="gallery-item" src={ImageFive} />
                <img className="gallery-item" src={ImageSix} />
            </div>
        </div>
    )
}

export default Gallery