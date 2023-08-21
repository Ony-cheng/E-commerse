import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import CartService from "../API/CartService";
import {Link} from "react-router-dom";
const ProductCardCart = ({localCartItems,setLocalCartItems, cart, setCart, setAmount}) => {

    // const [ localCartItems, setLocalCartItems] = useState(cartItems)


    function removeFromCart(cartItemId, index){
        const items = localCartItems
        items.splice(index, 1)
        setLocalCartItems([...items])
        CartService.removeFromCart(cart.id, cartItemId)

     }

     function incrementQty(cartItemId, qty, index){
        let newQty = qty + 1;
        CartService.updateQty(cartItemId,newQty)
         const items = localCartItems
        items[index].quantity = newQty;
        setLocalCartItems([...items])

     }

    function decrementQty(cartItemId, qty,index){
        let newQty = qty - 1;
        CartService.updateQty(cartItemId,newQty)
        const items = localCartItems
        items[index].quantity = newQty;
        setLocalCartItems([...items])

    }


    //
    // useEffect(() => {
    //     setLocalCartItems(cartItems)
    //
    // },[cartItems])



    return (
        <Container>
            {localCartItems.map( (cartItem, index) =>(
                <Row
                    key={cartItem.id}
                    className='my-3  px-0' style={{border:'1px solid lightgrey', borderRadius:'4px'}} >
                    <Col className='col-4 px-0 '>
                        <img src={cartItem.product.imageUrl} style={{ borderBottomLeftRadius:'4px',borderTopLeftRadius:'4px'}}
                        width="100%"
                        height='130em'/>
                    </Col>
                    <Col className='col-8 py-1'>
                        <Row style={{height:'5rem'}} >
                        {/*<b > {cartItem.product.name}</b>*/}
                            <Link to={ `/product/${cartItem.product.id}`
                            } style={{color:'#04232f'}}>
                                {cartItem.product.name}
                            </Link>
                            <Row className='mx-1'>
                                {cartItem.product.price} грн {cartItem.product.units}
                            </Row>
                        </Row>
                        <Row className="d-flex  px-0 mx-1">
                            <Col  className='col-2  d-flex justify-content-center align-items-center px-0'>
                            <Button
                                className="text-center w-100"
                                size="sm"
                                variant="dark"
                                onClick={() => decrementQty(cartItem.id, cartItem.quantity, index)}
                                >
                                -
                            </Button>
                            </Col>

                            <Col  className='col-2 d-flex justify-content-center align-items-center'>
                                <div className="text-center">{cartItem.quantity}</div>
                            </Col>


                            <Col  className='col-2  d-flex justify-content-center align-items-center px-0'>
                                <Button
                                    size="sm"
                                    variant="dark"
                                    style={{width: "100%"}}
                                    onClick={() => incrementQty(cartItem.id, cartItem.quantity, index)}
                                >
                                    +
                                </Button>
                            </Col>


                            <Col className='col-6  d-flex justify-content-center align-items-center px-0'>
                                <Button
                                    size="sm"
                                    variant="outline-dark"
                                onClick={() => removeFromCart(cartItem.id, index)}
                                >
                                    Геть з кошику
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            )) }
        </Container>
    );
};

export default ProductCardCart;