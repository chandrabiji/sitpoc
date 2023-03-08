import React, { Component } from 'react'
import ProductService from '../services/ProductService'

export class UpdateProduct extends Component {
    UpdateProduct(id) {
        ProductService.getProductById(id)
        .then(response => {
            console.log (response.json())
        )
        }
    }
  render() {
    return (
      <div>UpdateProduct</div>
    )
  }
}

export default UpdateProduct