import axios from 'axios';

// const BASE_API_URL = "http://192.168.1.114:8080/api/v1.0/"
const BASE_API_URL = "http://localhost:8080/api/v1.0/"

export default class Category{

    static async getCities(query){
        const result = await axios.get(BASE_API_URL + "delivery/settlements", { params: {  query:query }})
        return result;
    }
    static async getWarehouse(query){
        const result = await axios.get(BASE_API_URL + "delivery/warehouses", { params: {  cityDescription:query }})
        return result;
    }
    static async getUserInfo(userName){
        const result = await axios.get(BASE_API_URL + "delivery/userinfo", { params: {  userName:userName }})
        return result;
    }

}