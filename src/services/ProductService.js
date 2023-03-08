import axios from "axios";

const baseUrl = 'http://localhost:3001/products';

class ProductService {
    getAllProducts(){
        return axios.get(baseUrl);
    }

    getProductById(id){
        return axios.get(baseUrl+"/"+id);
    }

    deleteProduct(id){
        alert("Delete Service Id : "+id);
        return axios.delete('http://localhost:3001/products/'+id);
    }
    createProduct(product){
        return axios.post(baseUrl,product);
    }
    updateProduct(id,product){
        return axios.put(`${baseUrl}/${id}`,product);
    }
}
export default new ProductService();