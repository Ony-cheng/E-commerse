import axios from 'axios';

// const BASE_API_URL = "http://192.168.1.114:8080/api/v1.0/"
const BASE_API_URL = "http://localhost:8080/api/v1.0/"

export default class Reviews{


    static async getByProduct(productId){
        const result = await axios.get(BASE_API_URL + "reviews/byproduct", { params: {  productId:productId }})
        return result;
    }

    static postReview(review){
        axios.post(BASE_API_URL + "reviews/add", {
            body:review.body,
            rating:review.rating,
            product:review.product,
            users:review.users
        })
    }




}