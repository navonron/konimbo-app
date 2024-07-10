import React from 'react';
import FCProduct from './FCProduct';
import '../../CSS/FCProducts.css';
import {
    MDBContainer,
    MDBRow
} from "mdb-react-ui-kit";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Ensure you import the carousel styles

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 4 // Number of items to show per slide
    },
    desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 3 // Adjust items per slide as needed
    },
    tablet: {
        breakpoint: { max: 768, min: 464 },
        items: 1 // Adjust items per slide as needed
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1 // Adjust items per slide as needed
    }
};

const FCProducts = ({ products }) => {
    return (
        <Carousel
            responsive={responsive}
            showDots={true}
            infinite={true}
            autoPlay={false} // Adjust autoplay settings as needed
            autoPlaySpeed={3000} // Adjust autoplay speed as needed
        >

            {products.map((product, index) => (
                <MDBContainer fluid className="my-5">
                    <div className="card-container">
                        <MDBRow className="justify-content-center row-cols-sm-4">
                            <FCProduct
                                key={index}
                                title={product.title}
                                description={product.description}
                                images={product.images}
                            />
                        </MDBRow>
                    </div>
                </MDBContainer>
            ))}

        </Carousel>
    );
};

export default FCProducts;
