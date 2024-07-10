import React from 'react';
import {
    MDBCardBody,
    MDBCardTitle,
    MDBContainer,
} from 'mdb-react-ui-kit';
import text from "../../assets/Text/text.json"
import '../../CSS/FCHeader.css';

const FCHeader = () => {
    return (
        <MDBContainer fluid className="my-5">
            <div className='mask'>
                <MDBCardBody>
                    <div className="text-center">
                        <MDBCardTitle><h2>{text.header}</h2></MDBCardTitle>
                    </div>
                </MDBCardBody>
            </div>
        </MDBContainer>
    );
}

export default FCHeader;
