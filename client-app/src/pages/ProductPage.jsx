import React, {useEffect} from 'react';
import NavigationBar from "../components/NavigationBar";
import Login from "../components/Login";
import { useParams} from 'react-router-dom';
import {Button, Navbar, Nav, NavDropdown, ToggleButton, ToggleButtonGroup,Container, Row, Col, Card} from "react-bootstrap";
import {useState} from  'react';
import Product from "../API/Product";
import Values from "../API/Values";
import { MDBBtn } from 'mdb-react-ui-kit';
import ButtonToggle from "../UIComponents/ButtonToggle";
import Reviews from "../API/Reviews";
import PostForm from "../components/PostForm";
import Stars from '../UIComponents/Stars'
import RatingButton from "../UIComponents/RatingButton";
import './styles/SomePagesStyles.css';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct]= useState({
        name: "",
        description: "",
        price: "",
        imageUrl: "",
        units: ""});

    const [activeItem, setActiveItem] = useState("Опис")
    const [values, setValues]= useState([])
    const [reviews, setReviews] = useState([])
    const [postFormVisible, setPostFormVisible] = useState(false)
    const [show, setShow] = useState(false);

    const [user, setUser] = useState({
        id: 1,
        username: "Pikatchu",
        email: "pikatchu@mail.gov.ua"
    })


    function showPostForm(){
        setPostFormVisible(!postFormVisible)
        console.log(reviews)
    }

    async function fetchVals(id){
        const result = await Values.getOne(id)
        setValues(result.data)

    }

    async function fetchProduct(id){
        const result = await Product.getOne(id)
        setProduct(result.data)
    }

    async function fetchReview(id){
        const result = await Reviews.getByProduct(id)
        setReviews(result.data)
    }

    const handleItemClick = (index) => {
            setActiveItem(index)
        }


    useEffect(() => {
        fetchProduct(id)
        fetchVals(id)
        fetchReview(id)
    },[])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (

        <div className='main'>
            <NavigationBar handleShow={handleShow}  user={user} />
            <Login handleClose={handleClose} show={show} />
            <main className="mx-0"  >
                <Container className="mx-0  min-vw-100" >
                    <Row className="w-100">
                        <Col className="px-0 col-2 ">
                        </Col >
                            <Col className="px-0 my-3  col-8" >
                                <Row className="px-3 my-4 " >
                                    <Col className="px-0 py-0 col-4 " >
                                        <img src={product.imageUrl}
                                             className='img-fluid border-dark border-2'
                                             width='100%'

                                             style={{borderRadius: '4px', minHeight:'240px'}}
                                             alt='...' />
                                    </Col>
                                     <Col className="px-5 col-8">
                                         <Row>
                                        <h2>{product.name}</h2>
                                             <p>В наявності</p>
                                           <Stars rating={product.rating}/>

                                         </Row>
                                         <Row className="text-end">
                                             <h1>{product.price}</h1>
                                             </Row>
                                         <Row className="text-end">
                                             <h4 >  грн/{product.units}</h4>
                                             </Row>
                                         <Row className="justify-content-end align-bottom " >
                                             <Button
                                                 variant="dark"
                                                 className="w-25 mx-3 my-2">
                                                 До кошику
                                             </Button>
                                             <Button
                                                 variant="dark"
                                                 className="w-25 my-2">
                                                 Замовити
                                             </Button>
                                             {/*<div className="bg-success">В наявності</div>*/}
                                             </Row>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <ButtonToggle
                                        activeItem={activeItem}
                                        setActiveItem={setActiveItem}
                                        name="Опис"
                                    />
                                    <ButtonToggle
                                        activeItem={activeItem}
                                        setActiveItem={setActiveItem}
                                        name="Характеристики"
                                    />
                                    <ButtonToggle
                                    activeItem={activeItem}
                                    setActiveItem={setActiveItem}
                                    name="Відгуки"
                                    />
                                </Row>

                                <Row className='my-3 px-0'
                                     style={ activeItem ==="Опис" ? {display:"block"} : {display:"none"}}>
                                    <p style={{whiteSpace: 'pre-wrap'}}>

                                        {product.description}

                                    </p>
                                </Row>
                                {values.map( (val) => (
                                <Row className='my-3 px-0' key={val.id}
                                style={ activeItem ==="Характеристики" ? {display:"block"} : {display:"none"}}>
                                    <p>{val.specificParams.parameter} {val.value} {val.specificParams.units} </p>
                                </Row>
                                    ))
                                    }

                                <Row className='my-3 px-0'
                                     style={ activeItem ==="Відгуки" ? {display:"block"} : {display:"none"}}>
                                    <Button
                                        onClick={() => {showPostForm()}}
                                        variant='link'
                                        className='my-1'
                                        style={{width: "170px", color:"#04232f"}}
                                    >

                                        Залишити відгук
                                    </Button>
                                    <PostForm postFormVisible={postFormVisible}
                                    productId={id}
                                    />

                                    {reviews.map( (review) => (
                                        <div key={review.id}
                                        ><strong>{review.users.username}   </strong>
                                            <i>{review.date}</i>
                                            <Stars rating={review.rating}/>
                                            <p className="my-1" style={{whiteSpace: 'pre-wrap'}}>{review.body}</p>
                                            <hr/>
                                        </div>
                                ))
                                }

                                </Row>
                            </Col>
                    </Row>
                </Container>
            </main>
        </div>
    );
};

export default ProductPage;