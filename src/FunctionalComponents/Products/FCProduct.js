import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBIcon,
} from "mdb-react-ui-kit";
import '../../CSS/FCProduct.css';
import FCProductImg from "./FCProductImg";

const FCProduct = ({ title, description, images }) => {
    return (
       <MDBCard className="text-black">
           <MDBIcon fab icon="apple" size="sm" className="px-3 pt-3 pb-2" />
           <FCProductImg images={images} />
           <MDBCardBody>
               <div className="text-center">
                   <MDBCardTitle><h2>{title}</h2></MDBCardTitle>
                   <p className="text-muted mb-4">{description}</p>
               </div>
           </MDBCardBody>
       </MDBCard>
    );
};

export default FCProduct;
