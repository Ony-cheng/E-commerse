import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../images/everstore.png";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'
const NavigationBar = ({handleShow,handleShowCart}) => {
    return (
        <div styles={{minWidth:'100vw'}}>
            <header >
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                    <Container className='px-0 mx-4  mw-100'>
                        <Navbar.Brand  >
                            <Link to='/'>
                            <img
                                src={logo}
                                width="200"
                                height="40"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                            </Link>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                                {/*<Nav.Link href="#pricing">Знижки</Nav.Link>*/}
                                {/*<Nav.Link href="#pricing">Новинки</Nav.Link>*/}
                                {/*<Nav.Link href="#pricing">Товари на які ви заслуговуєте</Nav.Link>*/}
                            </Nav>
                            <Nav >
                                {/*<Nav.Link href="#deets">Вхід</Nav.Link>*/}

                                <Button  variant="outline-light" onClick={handleShow}>Вхід</Button>
                                <Button variant="outline-light"className='mx-3' onClick={handleShowCart}>Кошик</Button>


                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header >
        </div>
    );
};

export default NavigationBar;