import React, {useState, useEffect} from 'react';
import NavigationBar from "../components/NavigationBar";
import Foo from "../components/Foo";
import {Button, Navbar, Nav, NavDropdown, Container, Row, Col} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import DeliveryInfo from "../API/DeliveryInfo"
import Orders from "../API/Orders";

const Cabinet = () => {
    const { username } = useParams();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [user, setUser] = useState({
        id: null,
        username: "",
        email: "",
        name:"",
        surname:"",
        phone:"",
        deliveryInfo:{
            deliveryType:null,
            city:"",
            postOffice:"",
            deliveryToPostOffice: true,
            payByCard:true,
            deliveryAddress:null
        }
    })
    const [activeOrder, setActiveOrder] = useState(0)
    const [activeOrderButton, setActiveOrderButton] = useState(0)

    async function fetchUserInfo(userName){
        const result = await DeliveryInfo.getUserInfo(userName)
        setUser(result.data)

    }
    const [orders, setOrders] = useState([{
        orderDateTime:"",
        id:"",
        users:{id: null,
            username: "",
            email: "",
            name:"",
            surname:"",
            phone:"",
            status:"",
            deliveryInfo:{
                deliveryType:null,
                city:"",
                postOffice:"",
                deliveryToPostOffice: true,
                payByCard:true,
                deliveryAddress:null
            }},
        cartItems:[
            {
                id:"",
                quantity:"",
                product:{name:'',description:'',imageUrl:'', id:''}
            }
        ],
        deliveryInfo:{
            deliveryType:null,
            city:"",
            postOffice:"",
            deliveryToPostOffice: true,
            payByCard:true,
            deliveryAddress:null,
            name:"",
            surname:"",
            email:"",
            phone:""
        }
    }
    ])

    async function fetchOrders(userName){
        const result = await Orders.getOrders(userName)

        setOrders(result.data)
    }

    function updateAmount(items){
        let amount = 0;
        for (let i = 0; i < items.length; i++){
            amount += items[i].product.price * items[i].quantity;
        }
       return amount;
    }

    function selectOrder(orderNum){
        // console.log(orderNum)
        setActiveOrder(orderNum)
    }

    function fillOrderButton(orderNum){
        // console.log("hover on " + orderNum)
        setActiveOrderButton(orderNum)
    }

    function mouseLeave(){
        setActiveOrderButton(activeOrder)
    }

    useEffect(()=>{
        fetchUserInfo(username)
        fetchOrders(username)
    },[])


    return (
       <div>
           <NavigationBar handleShow={handleShow}  user={user} />
        <div class="main"  >
            <Row className=" h-100 mx-0 py-3  ">
                <Col className="col-1"></Col>

                <Col className="col-10 ">
                    <h2>{user.username}</h2>
                    <h6>Особистий кабінет</h6>
                    <hr className="my-3"/>
                    <Row>
                        <h3>Мої дані</h3>
                        <Col className="col-3">
                            <h6>Ім'я </h6>
                            <h6>Прізвище</h6>
                            <h6>Електронна пошта </h6>
                            <h6>Номер телефону </h6>
                        </Col>
                        <Col className="col-9">
                            <h6>{user.name}</h6>
                            <h6>{user.surname}</h6>
                            <h6>{user.email}</h6>
                            <h6>{user.phone}</h6>
                        </Col>
                    <h6></h6>
                    </Row>
                    <hr className="my-3"/>
                    <Row>
                        <h3>Дані для доставки</h3>
                        <Col className="col-3">
                            <h6>Місто</h6>
                            <h6>Відділення</h6>
                            <h6>Адреса для кур'єрскої доставки</h6>

                        </Col>
                        <Col className="col-9">
                            <h6>{user.deliveryInfo.city}</h6>
                            <h6>{user.deliveryInfo.postOffice}</h6>


                            <h6>{user.deliveryInfo.deliveryAddress}</h6>

                        </Col>
                        <h6></h6>
                    </Row>
                    <hr className="my-3"/>
                    <Row>
                        <h3>Moї замовлення</h3>
                        <Col className="col-3" >
                        {
                            orders.map((order, index) => (
                                <Row key={order.id}
                                className="my-2 px-1 py-1 "
                                style={(index===activeOrderButton) ?
                                    {border:"solid 2px lightgrey", borderRadius:"5px", backgroundColor:"lightblue"}
                                    :
                                    {border:"solid 2px lightgrey", borderRadius:"5px"}
                                }
                                onClick={() => selectOrder(index)}
                                onMouseOver={ () => fillOrderButton(index)}
                                     onMouseLeave={mouseLeave}
                                >
                                    <Col>
                                        <Row>
                                            <nobr>Номер</nobr>
                                        </Row>
                                        <Row>
                                            <nobr>Дата</nobr>
                                        </Row>
                                        <Row>
                                            <nobr>Сума</nobr>
                                        </Row>
                                        <Row>
                                            <nobr>Статус</nobr>
                                        </Row>
                                    </Col>


                                    <Col>
                                        <Row>
                                            <nobr>{order.id}</nobr>
                                        </Row>
                                <Row>
                                        <nobr>{order.orderDateTime.split(' ')[0]}</nobr>
                                </Row>
                                <Row>
                                   <nobr>{updateAmount(order.cartItems)} грн</nobr>
                                </Row>
                                        <Row>
                                            <nobr>{order.status}</nobr>
                                        </Row>
                                    </Col>
                                </Row>
                            ))
                        }
                        </Col>
                        <Col className="col-8 mx-3 my-2"
                             style={{backgroundColor: "lightblue",
                                 borderRadius: '4px',
                                 border:"solid 2px lightgrey"
                             }}
                        >
                                <h5 className="mx-2 my-2">Товари у замовленні</h5>
                                { orders[activeOrder].cartItems.map((cartItem, index) =>(
                                    <Row key={index} className="my-3 px-2 py-2 mx-2"
                                         >
                                        <Col className='col-2 px-0 '>
                                            <img src={cartItem.product.imageUrl}
                                                 style={{borderRadius: '4px'}}
                                                 width="70em"
                                                 height='70em'/>
                                        </Col>
                                        <Col className='col-3   d-flex align-items-center'>
                                            <Link to={ `/product/${cartItem.product.id}`
                                            } style={{color:'#04232f'}}>
                                                {cartItem.product.name}
                                            </Link>
                                        </Col>
                                        <Col className='col-2  d-flex align-items-center'>
                                            <nobr>{cartItem.product.price} грн/шт</nobr>
                                        </Col>
                                        <Col className='col-3   d-flex align-items-center'>
                                            <nobr>{cartItem.quantity} шт</nobr>
                                        </Col>

                                        <Col className='col-2   d-flex align-items-center'>
                                            <nobr>{cartItem.quantity * cartItem.product.price} грн</nobr>
                                        </Col>



                                    </Row>


                                ))}
                            <h5 className="mx-2 my-2">Дані для доставки</h5>
                            <Row className="mx-2 my-3" >
                                <Row>
                                    <Col  className="col-3">Місто</Col>
                                    <Col  className="col-9">{orders[activeOrder].deliveryInfo.city} </Col>
                                </Row>
                                <Row>
                                    <Col  className="col-3">Відділення</Col>
                                    <Col  className="col-9">{orders[activeOrder].deliveryInfo.postOffice} </Col>
                                </Row>

                                <Row>
                                    <Col  className="col-3">
                                        {(orders[activeOrder].deliveryInfo.deliveryToPostOffice === false) ?
                                            <p>Адреса для кур'єрскої доставки</p>
                                            :
                                            <p>Тип доставки</p>
                                        }
                                    </Col>
                                    <Col  className="col-9">
                                        { (orders[activeOrder].deliveryInfo.deliveryToPostOffice === false)
                                            ?
                                            <p>{orders[activeOrder].deliveryInfo.deliveryAddress}</p>
                                            :
                                            <p>у відділення</p>}
                                    </Col>
                                </Row>

                                <Row>
                                    <Col  className="col-3">Спосіб оплати</Col>
                                    <Col  className="col-9">
                                        {
                                            (orders[activeOrder].deliveryInfo.payByCard === false)
                                                ?
                                                <p>у відділені</p>
                                                :
                                                <p>Перетплата на карту</p>
                                        }

                                    </Col>
                                </Row>



                                <Row>
                                    <Col  className="col-3">Ім'я отримувача</Col>
                                    <Col  className="col-9">
                                        {
                                            <Col  className="col-9">{orders[activeOrder].deliveryInfo.name} </Col>
                                        }

                                    </Col>
                                </Row>
                                <Row>
                                    <Col  className="col-3">Прізвище отримувача</Col>
                                    <Col  className="col-9">
                                        {
                                            <Col  className="col-9">{orders[activeOrder].deliveryInfo.surname} </Col>
                                        }

                                    </Col>
                                </Row>
                                <Row>
                                    <Col  className="col-3">Телефон отримувача</Col>
                                    <Col  className="col-9">
                                        {
                                            <Col  className="col-9">{orders[activeOrder].deliveryInfo.phone} </Col>
                                        }

                                    </Col>
                                </Row>


                            </Row>
                        </Col>
                    </Row>
                </Col>



            </Row>

        </div>
           <Foo/>
       </div>
    );
};

export default Cabinet;