import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {Button, Navbar, Nav, NavDropdown, Container, Row, Col, Card} from "react-bootstrap";
import './styles/Login.css'

const Login = ({show, handleClose}) => {

    return (
        <>
            <Modal show={show} onHide={handleClose}
                   backdropClassName="bg-transparent"
                   dialogClassName="custom-dialog"
            >
                {/*<Modal.Header closeButton>*/}
                {/*    <Modal.Title>Modal heading</Modal.Title>*/}
                {/*</Modal.Header>*/}
                <Modal.Body>
                    <Container>
                        <Row>
                        <Col>
                            <h2>Вхід</h2>
                    <Form>
                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Label>Пошта або телефон</Form.Label>
                            <Form.Control
                                // type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="пароль"
                                autoFocus
                            />
                        </Form.Group>
                        <Button type="submit" variant ="outline-secondary" >
                            Увійти
                        </Button>
                    </Form>
                        </Col>
                            {/*<Col className="col-sm-2 align-content-center text-center ">*/}
                            {/*   <vr/>*/}
                            {/*</Col>*/}
                        <Col>
                            <h2>Реєстрація</h2>
                            <Form>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Пошта</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="name@example.com"
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Телефон</Form.Label>
                                    <Form.Control
                                        type="phone"
                                        placeholder="+380........."
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="пароль"
                                        autoFocus
                                    />
                                </Form.Group>

                                <Button type="submit" variant ="outline-secondary" >
                                    Зареєструватись
                                </Button>
                            </Form>
                        </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                {/*<Modal.Footer >*/}
                {/*    <Button variant="secondary" onClick={handleClose}>*/}
                {/*        Close*/}
                {/*    </Button>*/}
                {/*    <Button variant="primary" onClick={handleClose}>*/}
                {/*        Save Changes*/}
                {/*    </Button>*/}
                {/*</Modal.Footer>*/}
            </Modal>
        </>
    );
};

export default Login;