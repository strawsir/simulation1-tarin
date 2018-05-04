import axios from 'axios';
import React, {Component} from 'react';
import Product from '../Product/Product'

export default class Dashboard extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                {this.props.inventoryList.map(product =>{
                    return(
                        <div key={product.name}>
                            <Product {...product}/>
                        </div>
                    )
                })}
                Dashboard
            </div>
        )
    }
}