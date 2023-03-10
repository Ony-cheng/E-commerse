import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import CartService from "../API/CartService";
const ProductCardCart = ({products, cart, setCart}) => {

    const [ localProducts, setLocalProducts] = useState(products)

    function removeFromCart(productId, index){
        const p = localProducts
        p.splice(index, 1)
        setLocalProducts([...p])
        CartService.removeFromCart(cart.id, productId)
     }

    useEffect(() => {
       setLocalProducts(products)
    },[products])





    return (
        <Container>
            {localProducts.map( (product, index) =>(
                <Row
                    key={product.id}
                    className='my-3  px-0' style={{border:'1px solid lightgrey', borderRadius:'4px'}} >
                    <Col className='col-4 px-0 '>
                        <img src={product.imageUrl} style={{ borderBottomLeftRadius:'4px',borderTopLeftRadius:'4px'}}
                        width="100%"
                        height='130em'/>
                    </Col>
                    <Col className='col-8 py-1'>
                        <Row style={{height:'5rem'}} >
                        <b > {product.name}</b>
                            <Row className='mx-1'>
                                {product.price} грн {product.units}
                            </Row>
                        </Row>
                        <Row>
                            <Col  className='col-6'>
                            <Button
                                // className='mx-2'
                                size="sm"
                                variant="dark"
                                >
                                До замовлення
                            </Button>
                            </Col>
                            <Col className='col-6 '>
                                <Button
                                    size="sm"
                                    variant="outline-dark"
                                onClick={() => removeFromCart(product.id, index)}
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