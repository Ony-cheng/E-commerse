import React, {useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Col, Container, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import  './styles/CustomStyles.css'
import ProductCardCart from "./ProductCardCart";
import CartService from "../API/CartService"
const Cart = ({showCart, handleCloseCart, user, cart, setCart, removeFromCart}) => {

    const [amount, setAmount] = useState(0)
    const [cartItems, setCartItems] = useState(Object.values(cart.cartItems))

    useEffect(() => {
        setCartItems(Object.values(cart.cartItems))

    },[cart])

     useEffect(() => {

        updateAmount()
    },[cartItems])




    function updateAmount(){
        const items = cartItems

        let amount = 0;
        for (let i = 0; i < items.length; i++){

            amount += items[i].product.price * items[i].quantity;

        }
        setAmount(amount)
    }
    return (
       <Container
           className="cart"
           style={showCart === true ? {display:'block'} : {display:"none"}}
       >
       <div className='cartContainer'>
            <Row className="px-1 py-2 m-0">
                <h2>Кошик</h2>
            </Row>
           <hr className="m-0"/>
           <ProductCardCart localCartItems={cartItems}
                            setLocalCartItems={setCartItems}
                            removeFromCart={removeFromCart}
                            cart={cart}
                            setCart={setCart}
                            setAmount={setAmount}
           />
           <hr className="m-0"/>
           <Row className="px-1 py-3 m-0 w-100 "
                style={amount > 0 ? {display:'flex'} : {display:"none"}}
           >
               <Col className="col-4 px-0">
                   <b>Усього в кошику</b>
               </Col>
               <Col className="col-3">
                   <b> {amount} грн</b>
               </Col>

               <Col className="col-4">
                   <Button href={`order/${cart.id}`}
                           as="a"
                           size="sm"
                           variant="outline-dark"
                   >До замовлення</Button>

               </Col>
           </Row>
       </div>

           <div
               onClick={handleCloseCart}
               className='cartClose'>
           </div>

       </Container>
    );
};

export default Cart;