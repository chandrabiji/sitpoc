import React, { useEffect, useState } from "react";
import ProductService from "../services/ProductService";

function ProductList() {
    //initilized products array
    const [products, setProducts] = useState([]);
    //useEffect is a functional hook(Life Cycle method).When ever calling ProductList 
    //load the useEffect
    useEffect(() => {
        ProductService.getAllProducts().then((res) => {
            console.log("data ===> " + JSON.stringify(res.data));
            setProducts(res.data);
        })
    }, []);
    const deleteProduct = (id, e) => {
        e.preventDefault();
        alert("deleting id ==>" + id);

        ProductService.deleteProduct(id).then((res) => {
            console.log(res.data);
            setProducts(res.data);

        })
        //alert("calling delete"+id);
    }
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h1>Product List</h1>
                </div>
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((p, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{p.id}</td>
                                            <td>{p.pname}</td>
                                            <td>{p.qty}</td>
                                            <td>{p.price}</td>
                                            <td>
                                            <button onClick={ () => this.editProduct(p.id)} className="btn btn-info">Update </button>
                                                <button className="btn btn-danger" onClick={(e) => deleteProduct(p.id, e)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}
export default ProductList;