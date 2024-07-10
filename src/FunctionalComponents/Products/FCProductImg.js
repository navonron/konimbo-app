import React from 'react';
import $ from 'jquery';
import { MDBCardImage } from 'mdb-react-ui-kit';
import '../../CSS/FCProduct.css';

const FCProductImg = ({ images }) => {
    // Function to handle image swap on mouse enter
    const handleSwapImg = (event) => {
        const mainImg = $(event.target).closest(".images").find(".main-img");
        const tempSrc = mainImg.attr("src");
        const smallImgSrc = $(event.target).attr("src");
        mainImg.attr("src", smallImgSrc);
        $(event.target).attr("src", tempSrc);
    };

    // Limiting images to maximum 5
    const smallImages = images.slice(1, 6); // Slice from index 1 to 5 (5 images)

    return (
        <div className="images" style={{ padding: "10px" }}>
            <MDBCardImage
                className="main-img img-fluid"
                src={images[0]} // Use the first image for now
                position="top"
                alt="Main"
            />
            <div className="small-images d-flex justify-content-around">
                {smallImages.map((image, index) => (
                    <MDBCardImage
                        key={index}
                        src={image}
                        alt={`Small ${index}`}
                        className="img-fluid small-img"
                        onMouseEnter={handleSwapImg} // Call handleSwapImg on mouse enter
                    />
                ))}
            </div>
        </div>
    );
};

export default FCProductImg;
