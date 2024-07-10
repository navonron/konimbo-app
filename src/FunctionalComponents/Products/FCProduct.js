// src/Card.js
import React from 'react';
import '../../CSS/FCProduct.css'

const FCProduct = ({ title, description }) => {
    return (
        <div className="product-card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default FCProduct;
