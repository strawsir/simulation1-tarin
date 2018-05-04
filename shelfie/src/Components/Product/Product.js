import axios from 'axios';
import React, {Component} from 'react';

function Product(product){
    return(
        <div>
            <img src={`${product.imageURL}`} alt={product.productName}/>
            <br/>
            {product.productName}
            <br/>
            {`$${product.price}`}
        </div>
    )
}

export default Product;