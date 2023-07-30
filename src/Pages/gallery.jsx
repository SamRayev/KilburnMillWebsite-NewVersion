import React from 'react';
import Image from '../Components/Event/picture';
import '../Styles/Gallery.css';

const Gallery = () => {
    return (
        <div id='gallery'>
            <h1 className='mb-2'>GALLERY</h1>
            <div className='gallery-items'>
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
                <Image className="gallery-item" image={Image} />
            </div>
        </div>
    )
}

export default Gallery