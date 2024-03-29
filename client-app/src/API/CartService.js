import axios from 'axios';

// const BASE_API_URL = "http://192.168.1.114:8080/api/v1.0/"
const BASE_API_URL = "http://localhost:8080/api/v1.0/"

export default class Cart{
    static async getCart(userName){
        const result = await axios.get(BASE_API_URL + "cart/find", { params: {  userName:userName }})
        return result;
    }

    static  removeFromCart(cartId, cartItemId){
        axios.delete(BASE_API_URL + "cart/remove/", {params:{cartId: cartId , cartItemId: cartItemId}} )
    }

    static async addToCart(cartId, product){
        await axios.post(BASE_API_URL + "cart/add/" + cartId, product )
        // axios.patch()
    }
    static async updateQty(cartItemId, newQty){
        await axios.post(BASE_API_URL + "cart/updateqty" ,null,{params:{cartItemId: cartItemId , newQty: newQty}} )
        // axios.patch()
    }
}
