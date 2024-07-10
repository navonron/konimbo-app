import React from 'react';
import FCProduct from './FCProduct';
import '../../CSS/FCProducts.css'


const FCProducts = ({ products }) => {
    return (
        <div className="products">
            {products.map((product, index) => (
                <FCProduct key={index} title={product.title} description={product.description} />
            ))}
        </div>
    );
};

export default FCProducts;
