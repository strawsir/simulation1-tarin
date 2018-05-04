import axios from 'axios';
import React, {Component} from 'react';

function Product(product){


    return(
        <div>
            Image:
            <img src={`${product.imageurl}`} alt={product.productName}/>
            <br/>
            Name:
            {`${product.productname}`}
            <br/>
            Price:
            {`$${product.price}`}

            
            
        </div>
    )
}

export default Product;