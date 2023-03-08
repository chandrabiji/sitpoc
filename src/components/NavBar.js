import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import CreateProduct from './CreateProduct'
import ProductList from './ProductList'
import UpdateProduct from './UpdateProduct'

export class NavBar extends Component {
  render() {
    return (
      <div className='container'>
         <BrowserRouter>
          <ul>
              <li>
                  <Link to="/create">Create Product</Link>
              </li>
              <li>
                  <Link to="/list">Product List</Link>
              </li>
          </ul>
          <Routes>
              <Route path="/create" element={<CreateProduct/>}/>
              <Route path="/list" element={<ProductList/>}/>
              <Route path='/update:id' element = {<UpdateProduct/> }/>
          </Routes>
         </BrowserRouter>
      </div>
    )
  }
}

export default NavBar
