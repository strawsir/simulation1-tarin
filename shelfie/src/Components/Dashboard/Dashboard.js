import axios from 'axios';
import React, {Component} from 'react';
import Product from '../Product/Product'

export default class Dashboard extends Component{
    constructor(props){
        super(props)
    }

    getAll(){
        this.props.getAll();
    }

    deleteOne(id){
        axios.delete(`./api/product/${id}`)
        .then(res =>{
            console.log(res.data)
            this.getAll();
        })
    }

    render(){
        return(
            <div>
                {this.props.inventoryList.map(product =>{
                    return(
                        <div key={product.productid}>
                            <Product {...product} deleteThis={this.deleteOne}/>
                            <button onClick={()=>this.deleteOne(product.productid)}>DELETE :(</button>
                            
                            <br/>
                        </div>
                    
                    )
                })}
                Dashboard
            </div>
        )
    }
}