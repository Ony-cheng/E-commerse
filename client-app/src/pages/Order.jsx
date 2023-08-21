
import NavigationBar from "../components/NavigationBar";
import Login from "../components/Login";
import {Button, Col, Container, Row} from "react-bootstrap";
import Stars from "../UIComponents/Stars";
import ButtonToggle from "../UIComponents/ButtonToggle";
import PostForm from "../components/PostForm";
import {useParams} from "react-router-dom";
import React, {useState, useEffect, useMemo, useRef } from 'react';
import CartService from "../API/CartService";
import Form from "react-bootstrap/Form";
import Select from "react-select/base";
import DropDownSearch from "../UIComponents/DropDownSearch";
import DeliveryInfo from "../API/DeliveryInfo"
import Orders from "../API/Orders";

const Order = () => {
    const { cartId } = useParams();
    const [show, setShow] = useState(false);
    const [cart, setCart] = useState({
        id: '',
        cartItems: {
            128: {
                id: '',
                product: {name: '', description: '', imageUrl: '', id: ''}
            }
        }
    })
    const [amount, setAmount] = useState(0)
    const [user, setUser] = useState({
        id: 1,
        username: "Pikatchu",
        email: "pikatchu@mail.gov.ua"
    })
    const [postOffice, setPostOffice] = useState(true);
    const [delivery, setDelivery] = useState(false);
    const [card, setCard] = useState(true);
    const [cash, setCash] = useState(false);
    const [userInfo , setUserInfo] = useState({id: 1,
        username: "",
        name: "",
        surname: "",
        phone: "",
        email: "",
        deliveryInfo: {
            id: '',
            deliveryType: null,
            city: "",
            postOffice: "",
            deliveryAddress: null,
            payByCard: true,
            deliveryToPostOffice: true
        }});
    const [phone, setPhone] = useState()
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [city , setCity] = useState()
    const [wh , setWh] = useState()

    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const nameRef = useRef(null);
    const surnameRef = useRef(null);
    const adress = useRef(null);





    async function fetchUserInfo(userName){
        const result = await DeliveryInfo.getUserInfo(userName)
        setUserInfo(result.data)
        setPostOffice(result.data.deliveryInfo.deliveryToPostOffice)
        setCard(result.data.deliveryInfo.payByCard)
       setEmail(result.data.email)
        setPhone(result.data.phone)
        setName(result.data.name)
        setSurname(result.data.surname)
        setCity(result.data.deliveryInfo.city)
        setWh(result.data.deliveryInfo.postOffice)
    }

    async function fetchCart(userName){
        const result = await CartService.getCart(userName)
        setCart(result.data)

    }

    function updateAmount(){
        const items = Object.values(cart.cartItems)
        let amount = 0;
        for (let i = 0; i < items.length; i++){
            amount += items[i].product.price * items[i].quantity;
        }
        setAmount(amount)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        fetchCart(user.username)
        fetchUserInfo(user.username)

    },[])

    useEffect(() => {
        updateAmount()
    },[cart])



    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        if (name === "postOffice") {
            setPostOffice(checked);
            setDelivery(false);
        } else if (name === "delivery") {
            setDelivery(checked);
            setPostOffice(false);
        }
    };

    const handleCheckboxChangePayment = (event) => {
        const { name, checked } = event.target;
        if (name === "card") {
            setCard(checked);
            setCash(false);
        } else if (name === "cash") {
            setCash(checked);
            setCard(false);
        }
    };

    const mailHandler = (e) =>{
       setEmail(e.target.value)
    }
    const phoneHandler = (e) =>{
       setPhone(e.target.value)
    }
    const surnameHandler = (e) =>{
       setSurname(e.target.value)
    }
    const nameHandler = (e) =>{
       setName(e.target.value)
    }

    function createOrder(e){
        e.preventDefault()
     // console.log(cart)
        const items = Object.values(cart.cartItems)
        for(const obj of items){
            delete obj.id;
        }

        const order={
            id:null,
            users:user,
            cartItems: items,
            deliveryInfo:{
                deliveryType: null,
                city: city,
                postOffice: wh,
                deliveryAddress: adress.current.values,
                payByCard: card,
                deliveryToPostOffice: postOffice,
                email:emailRef.current.value,
                name:nameRef.current.value,
                surname: surnameRef.current.value,
                phone:phoneRef.current.value
            }
        }

        // console.log(emailRef.current.value)
        // console.log(city)
        // console.log(wh)
        // console.log(delivery)
        // console.log(postOffice)
        Orders.postOrder(order)
        console.log(order)
    }

    return (
        <div className="main">
            <NavigationBar handleShow={handleShow} user={user} />
            <Login handleClose={handleClose} show={show} />
            <main className="mx-0"  >
                <Container className="mx-0  min-vw-100" >
                    <Row className="px-5 py-2"
                        style={{borderBottom:"solid 1px lightgrey"}}>
                        <h3>Оформлення замовлення</h3>
                    </Row>


                    <Row className="w-100">
                        <Col className="col-6">
                            <Row className="my-3">
                                <h5>Контактні данні</h5>
                            <Form
                            onSubmit={createOrder}
                            >
                                <Form.Group className="mb-4 mt-2" controlId="email">
                                    <Form.Label>Електронна пошта</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="name@example.com"
                                        autoFocus
                                        value={email}
                                        onChange={mailHandler}
                                        ref={emailRef}
                                    />
                                </Form.Group>


                                <Form.Group className="mb-4 mt-2" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Телефон</Form.Label>
                                    <Form.Control
                                        placeholder="+380...."
                                        autoFocus
                                        value={phone}
                                        onChange={phoneHandler}
                                        ref={phoneRef}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Ім'я </Form.Label>
                                    <Form.Control

                                        placeholder="ім'я"
                                        autoFocus
                                        value={name}
                                        onChange={nameHandler}
                                        ref={nameRef}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Прізвище </Form.Label>
                                    <Form.Control
                                        // type="password"
                                        placeholder="прізвище"
                                        autoFocus
                                        value={surname}
                                        onChange={surnameHandler}
                                        ref={surnameRef}
                                    />
                                </Form.Group>

                                <h5>Данні для доставки</h5>

                                <Form.Group className="my-3 d-flex flex-wrap " controlId="formBasicCheckbox">
                                    <Form.Check
                                        type="checkbox"
                                        label="У відділення нової пошти"
                                        variant="dark"
                                        className="me-3"
                                        name="postOffice"
                                        checked={postOffice}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="Кур'єрська доставка"

                                        name="delivery"
                                        checked={!postOffice}
                                        onChange={handleCheckboxChange}

                                    />
                                </Form.Group>



                                <DropDownSearch showWh={postOffice}
                                city={city} setCity={setCity}
                                                wh={wh} setWh={setWh}
                                />


                                <Form.Group className="my-2" controlId="exampleForm.ControlInput1"
                                            style={delivery ? {display:'flex'} : {display:"none"}}>
                                    <Form.Label>Адреса для доставки </Form.Label>
                                    <Form.Control
                                        // type="password"
                                        placeholder="адреса"
                                        autoFocus
                                        ref={adress}
                                    />
                                </Form.Group>


                                <Form.Group className="my-3 d-flex flex-wrap " controlId="formBasicCheckbox2">
                                    <Form.Check
                                        type="checkbox"
                                        label="Банківська картка"
                                        variant="dark"
                                        className="me-3"
                                        name="card"
                                        checked={card}
                                        onChange={handleCheckboxChangePayment}
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="Наложений платіж"

                                        name="cash"
                                        checked={!card}
                                        onChange={handleCheckboxChangePayment}
                                    />
                                </Form.Group>


                                <Button type="submit" variant ="outline-dark"
                                // onSubmit={(e) => {
                                //    e.preventDefault()
                                //     // createOrder()
                                // } }
                                >
                                    Оформити замовлення
                                </Button>



                            </Form>
                            </Row>
                        </Col>

                        <Col className="col-6   px-1"  style={{borderLeft:"solid 1px lightgrey", minHeight:'100vh'}}>
                            <Container className=" mx-1 ">
                            <Row className="my-2 px-0 " style={{borderRadius: '4px'}}>
                                <Col className="col-10 px-0"><strong >Ваше замовлення</strong></Col>
                                <Col className="col-2 px-0"><strong>{amount} грн</strong></Col>
                            </Row>

                            { Object.values(cart.cartItems).map((cartItem, index) =>(
                            <Row key={index} className="my-2 px-0" style={{backgroundColor: "beige",borderRadius: '4px'}}>
                                <Col className='col-2 px-0 '>
                                    <img src={cartItem.product.imageUrl}
                                         style={{borderRadius: '4px'}}
                                         width="70em"
                                         height='70em'/>
                                </Col>
                                <Col className='col-4   d-flex align-items-center'>
                                    <strong>{cartItem.product.name}</strong>
                                </Col>
                                 <Col className='col-2  d-flex align-items-center'>
                                    <nobr>{cartItem.product.price} грн/шт</nobr>
                                </Col>
                                <Col className='col-2   d-flex align-items-center'>
                                    <nobr>{cartItem.quantity} шт</nobr>
                                </Col>

                                <Col className='col-2   d-flex align-items-center'>
                                    <nobr>{cartItem.quantity * cartItem.product.price} грн</nobr>
                                </Col>



                            </Row>
                            ))}
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </main>

        </div>
    );
};

export default Order;