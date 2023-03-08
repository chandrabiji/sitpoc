import React, { Component } from 'react'
import ProductService from '../services/ProductService';

export class CreateProduct extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            qty: '',
            price: ''
        }
    }
    create(e){
        e.preventDefault();
        alert("create calling");
        let product = {
            id:this.state.id,
            pname:this.state.name,
            qty:this.state.qty,
            price:this.state.price
        }
        alert("Created Product "+JSON.stringify(product));
        ProductService.createProduct(product).then(res=>{
            console.log(res.data);
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='card'>
                    <div className='card-header'>
                        <h1>Create Product</h1>
                    </div>
                    <div className='card-body'>
                        <form>
                            <div className='mb-3'>
                                <label className='form-label'>Product Id</label>
                                <input type="text" name="id" className='form-control' onChange={(e) => { this.setState({id:e.target.value}) }} />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Product Name</label>
                                <input type="text" name="name" className='form-control' onChange={(e) => { this.setState({name:e.target.value}) }} />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Product Qty</label>
                                <input type="text" name="qty" className='form-control' onChange={(e) => { this.setState({qty:e.target.value}) }} />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Product Price</label>
                                <input type="text" name="price" className='form-control' onChange={(e) => { this.setState({price:e.target.value}) }} />
                            </div>
                            <button className='btn btn-primary' onClick={(e)=>this.create(e)}>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateProduct
