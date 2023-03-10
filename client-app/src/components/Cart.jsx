import React, {useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Col, Container, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import  './styles/CustomStyles.css'
import ProductCardCart from "./ProductCardCart";
import CartService from "../API/CartService"
const Cart = ({showCart, handleCloseCart, user, cart, setCart, removeFromCart}) => {


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
           <ProductCardCart products={Object.values(cart.products)}
                            removeFromCart={removeFromCart}
           cart={cart}
                            setCart={setCart}
           />
       </div>
           <div
               onClick={handleCloseCart}
               className='cartClose'>
           </div>
       </Container>
    );
};

export default Cart;