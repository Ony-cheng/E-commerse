import React, {useState} from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';
import CartService from "../API/CartService.js"
const ProductCard = ({product,  cart}) => {

    const [inCart, setInCart] = useState(false);

    function addToCartHandler( product){
        setInCart(true)
        CartService.addToCart(cart.id, product)
    }

    return (
        <Col>
            <Card style={{ width: '12em',height: '21em', marginTop:'10px'}}>
                <Card.Img variant="top" src={product.imageUrl} width='100%' height='45%' />
                <Card.Body>
                    <Card.Title style={{height:'2rem', fontSize:'15px'}}>
                        <Link to={{
                            pathname: `product/${product.id}`
                        }}
                              style={{color:'#04232f'}}>
                            {product.name}
                        </Link>
                      </Card.Title>
                    <Row style={{height:'4rem', marginRight:'1px', marginLeft:'3px', fontSize:'smaller'}}>
                        {product.description.substring(0, 45) + "..."}
                    </Row>
                    <Row>
                        <Col className="col-6 ">
                        <Button
                            size="sm"
                            variant= {inCart ? "info" : "dark" }
                            onClick={() => addToCartHandler(product)}
                        >До кошику</Button>
                            {/*<p className="my-2 mx-0" style={{fontSize:'s'}}>В наявності</p>*/}
                        </Col>
                        <Col className="col-6  ">
                                <h5>{product.price}</h5>
                                <b style={{fontSize:'smaller'}}> грн/{product.units}</b>
                        </Col>
                                  </Row>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProductCard;