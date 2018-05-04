import axios from 'axios';
import React, {Component} from 'react';

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            imageURL:'',
            productName:'',
            price: 0,
            products:[]
        }
        this.resetInput = this.resetInput.bind(this);
        this.updateImage = this.updateImage.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    resetInput(){
        this.setState({
            imageURL:'',
            productName:'',
            price: 0
        })
    }
    updateImage(e){
        this.setState({
            imageURL: e.target.value
        })
    }  
    updateProduct(e){
        this.setState({
            productName: e.target.value
        })
    }  
    updatePrice(e){
        this.setState({
            price: e.target.value
        })
    }

    addProduct(imageURL, productName, price){
        axios.post('/api/product', {
        imageURL:imageURL,
        productName: productName,
        price: price
    }).then(res => {
        
        this.setState({products:res.data})
        this.resetInput();
    })
    }

    render(){
        return(
            <div>
                <input value={this.state.imageURL} onChange={this.updateImage} type="text"/>
                <input value={this.state.productName} onChange={this.updateProduct} type="text"/>
                <input value = {this.state.price} onChange={this.updatePrice} type="number"/>
                <button onClick={this.resetInput}>Cancel</button>
                <button onClick={() => this.addProduct()}>Add to Inventory</button>
                
            </div>
        )
    }
}


