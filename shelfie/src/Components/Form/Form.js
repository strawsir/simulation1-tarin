import axios from 'axios';
import React, {Component} from 'react';

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            imageURL:'',
            productName:'',
            price: 0
        }
        this.resetInput = this.resetInput.bind(this);
        this.updateImage = this.updateImage.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    updateProduct(id){
        axios.put(`./api/product/${id}`, {
            imageURL:this.state.imageURL,
            productName:this.state.productName,
            price: this.state.price
        })
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
    reGet(){
        this.props.getAll();
    }

    addProduct(image, name, price){
        axios.post('/api/product', {
        imageURL:image,
        productName: name,
        price: price
    }).then(res => {
        
        this.setState({products:res.data})
        this.reGet();
        this.resetInput();
    })
    }

    render(){
        return(
            <div>
                IMAGE URL:
                <input value={this.state.imageURL} onChange={this.updateImage} type="text"/>
                NAME:
                <input value={this.state.productName} onChange={this.updateProduct} type="text"/>
                PRICE:
                <input value = {this.state.price} onChange={this.updatePrice} type="number"/>
                <button onClick={this.resetInput}>Cancel</button>
                <button onClick={() => this.addProduct(this.state.imageURL, this.state.productName, this.state.price)}>Add to Inventory</button>
                
            </div>
        )
    }
}


