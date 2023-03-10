import React, {useState, useEffect, useMemo} from 'react';
import {Button, Navbar, Nav, NavDropdown, Container, Row, Col} from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import Search from "../components/Search";
import TopProducts from "../components/TopProducts";
import Product from "../API/Product";
import ProductsContainer from "../components/ProductsContainer";
import Category from "../API/Category";
import Login from "../components/Login";
import Foo from "../components/Foo"
import FilterSideBar from "../components/FilterSideBar";
import Values from "../API/Values";
import Cart from "../components/Cart";
import './styles/SomePagesStyles.css'
import CartService from "../API/CartService";
const Home = ({props}) => {

    const [products, setProducts]= useState([{name:'',description:'',imageUrl:'', id:''}]);
    const [searchQuery, setSearchQuery] = useState('')
    const [loginForm, setLoginForm] = useState({visible:false})
    const [topProducts, setTopProducts] = useState([{name:'',description:'',imageUrl:'', id:''}])
    const [categories, setCategories] = useState([])
    const [activeCat, setActiveCat] = useState()
    const [activeSubCat,  setActiveSubCat] = useState()
    const [topIsVisible, setTopIsVisible] = useState(true)
    const [show, setShow] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [activeParams, setActiveParams] = useState([])
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({
        id: 1,
        username: "Pikatchu",
        email: "pikatchu@mail.gov.ua"
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseCart = () => setShowCart(false);
    const handleShowCart = () => setShowCart(true);

    async function fetchCategories(){
        const result = await Category.getAllCats()
        setCategories(result.data)
    }


    async function fetchTopProducts(){
        const result = await Product.getTopProducts()
        setTopProducts(result.data)
    }

    async function fetchProducts(){
        const result = await Product.getAllProducts()
        setProducts(result.data)
    }

    async function fetchSearchProducts(searchQuery, activeCat){
       if( !!(activeCat)) {
           if(  !!(activeSubCat)){
               const result2 = await Product.searchProductInCat(searchQuery, activeCat.category);
               setProducts(result2.data);

           }else{
               const result2 = await Product.searchProductInCat(searchQuery, activeCat.category);
               setProducts(result2.data);
           }

       }
       else
       {
           const result = await Product.searchProduct(searchQuery);
           setProducts(result.data);
       }
    }


    const [cart, setCart] = useState({
        products:[]
    })

    async function fetchCart(userName){
        const result = await CartService.getCart(userName)
        setCart(result.data)
    }



    useEffect(() => {
        fetchCart(user.username)
    },[showCart])

    useEffect(() => {
        fetchTopProducts()
    },[])

    useEffect(()=>{
        fetchSearchProducts(searchQuery, activeCat)
    },[searchQuery, activeCat, activeSubCat])

    useEffect(()=>{
        fetchCategories()
    },[])

    async function fetchValues(parameter){
        const result = await Values.getAllValues(parameter)
        return result.data;
    }

    useEffect(()=>{

        if(!!(activeCat)) {
            let activeParams = activeCat.parameters
            for (let i = 0; i < activeParams.length; i++) {
                fetchValues(activeParams[i].parameter)
                    .then(data => {
                        activeParams[i].val = data
                    })
                    .catch(() => {setLoading(true)})
                    .finally(() => {
                        setLoading(true)
                    })

            }
            setActiveParams(activeParams)
        }
    },[activeCat])


    return (
        <div className='main'>

            <NavigationBar handleShow={handleShow} handleShowCart={handleShowCart} />
            <Login handleClose={handleClose} show={show}/>

            <main className="mx-0 min-vh-100 "  >
                <Container className="mx-0  min-vw-100">
                    <Row className="w-100">
                    <Col className="px-0 col-2  ">

                        <FilterSideBar categories={categories}
                                       setActiveCat={setActiveCat}
                                       setActiveSubCat={setActiveSubCat}
                                       activeCat={activeCat}
                                       activeParams={activeParams}
                                       setActiveParams={setActiveParams}
                                       loading={loading}/>
                    </Col>

                    <Col className="px-0 my-3  col-10" >
                        <Container className="mx-0 px-4 py-3"  style={{ borderLeft: '1px solid grey' }}>
                    <Row className="mt-1 mx-0 ">
                        <Col className=" py-1">
                        <Search
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}/>
                        </Col>
                        <Col className=' p-2'>
                        {
                            !!(activeCat)
                            ? !!(activeSubCat)?
                                <h6> Товари в категорії : {activeCat.category} / {activeSubCat.subcategory} </h6>
                                :  <h6> Товари в категорії : {activeCat.category} </h6>
                                :<h6 >Пошук товарів, на які ви заслуговуєте</h6>
                        }
                            </Col>
                    </Row>
                    <Row  className="mx-5">

                    </Row>
                            <hr style={{marginTop: '50px', marginBottom: '50px' } } />
                    <ProductsContainer products={products}
                                       cart={cart}
                                       activeCat={activeCat}/>


                    {topIsVisible
                                ?
                    <TopProducts
                        topProducts={topProducts}
                    />
                                :<p></p>
                            }
                        </Container>
                    </Col>
                    </Row>
                </Container>
            </main>
            <Foo/>
            <Cart showCart={showCart} handleCloseCart={handleCloseCart}
                  user={user}
                  products={topProducts}
                  cart={cart}
                  setCart={setCart}
            />
        </div>
    );
};

export default Home;