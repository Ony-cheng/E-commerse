import axios from 'axios';

// const BASE_API_URL = "http://192.168.1.114:8080/api/v1.0/"
const BASE_API_URL = "http://localhost:8080/api/v1.0/"

export default class Orders{

    static async getOrders(userName){
        const result = await axios.get(BASE_API_URL + "order/find", { params: {  userName:userName }})
        return result;
    }
    static postOrder(order){
        axios.post(BASE_API_URL + "order/new", {
            cartItems:order.cartItems,
            users:order.users,
            deliveryInfo: order.deliveryInfo
        })
    }

}
