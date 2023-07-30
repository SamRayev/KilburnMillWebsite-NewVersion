import React from 'react';
import '../../Styles/Image.css';

const Image = ({ image }) => {
    return (
        <div className="Image">
            <img src={image} alt="Image" className="Image-image" />
        </div>
    );
};

export default Image;