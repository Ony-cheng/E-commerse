import axios from 'axios';

const BASE_API_URL = "http://localhost:8080/api/v1.0/"
// const BASE_API_URL = "http://192.168.1.114:8080/api/v1.0/"

export default class Values{

    static async getAllValues(activeParameter){
        const result = await axios.get(BASE_API_URL + "values/all", { params: {  parameter:activeParameter }})
        return result;
    }

    static async getOne(productId){
        const result = await axios.get(BASE_API_URL + "values/byproduct", { params: {  id:productId }})
        return result;
    }


}