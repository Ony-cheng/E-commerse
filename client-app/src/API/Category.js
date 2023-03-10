import axios from 'axios';

// const BASE_API_URL = "http://192.168.1.114:8080/api/v1.0/"
const BASE_API_URL = "http://localhost:8080/api/v1.0/"

export default class Category{

    static async getAllCats(){
        const result = await axios.get(BASE_API_URL + "category/all")
        return result;
    }

    static async getSubCats(activeCat){
        const result = await axios.get(BASE_API_URL + "category/sub", { params: {  category:activeCat }})
        return result;
    }

}