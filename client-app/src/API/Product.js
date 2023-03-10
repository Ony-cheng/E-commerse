
import axios from 'axios';

// const BASE_API_URL = "http://192.168.1.114:8080/api/v1.0/"
const BASE_API_URL = "http://localhost:8080/api/v1.0/"

export default class Product{

   static async getAllProducts(){
        const result = await axios.get(BASE_API_URL + "product/all")
        return result;
    }

    static async searchProduct(searchQuery){
        const result = await axios.get(BASE_API_URL + "product/search", { params: { query: searchQuery }})
        return result;
    }
    static async getOne(id){
        const result = await axios.get(BASE_API_URL + "product/one", { params: { id : id }})
        return result;
    }

    static async getTopProducts(){
        const result = await axios.get(BASE_API_URL + "product/top")
        return result;
    }

    static async searchProductInCat(searchQuery, category){
        const result = await axios.get(BASE_API_URL + "product/searchcat", { params: { query: searchQuery, category:category }})
        return result;
    }

}