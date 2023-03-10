import React from 'react';
import {Button, Row, Col, Container} from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import arrow from "../images/arrow.png"
import arrowDown from "../images/arrowdwn.png"
import {useState} from "react";


const CatDropdown = ({categories, setActiveCat, setActiveSubCat} ) => {

    const [deployCat, setDeployCat] = useState()

    function subCatDeploy(category){
        setDeployCat(category)
    }
    function subCatCollapse(category){
        setDeployCat(null)
    }

    function catAndSub(category, subCategory){
        setActiveCat(category)
        setActiveSubCat(subCategory)
    }
    function cat(category){
        setActiveCat(category)
        setActiveSubCat(null)
    }



    return (
        <Container className='my-5'>

            <Container style={{
                backgroundColor:"lightgray",
                borderRadius:'4px',
                marginTop:'5px',
                padding:'5px',
                display:'block'
            }}>

            <Button className="my-0 p-2 w-100"
                    variant="outline-dark"
                    style={{borderRadius:"3px",border:'none', textAlign:'left'}}
                    onClick={() =>
                        cat(null)
                    }>
            <b>Усі категорії</b>
            </Button>
            </Container>
            {categories.map((category, index) => (
                <Container style={{
                    backgroundColor:"lightgray",
                    borderRadius:'4px',
                    marginTop:'5px',
                    padding:'5px',
                    display:'block'
                }}
                           onMouseOver={() => subCatDeploy(category.category)}
                           onMouseLeave={() => subCatCollapse()}
                >
            <Button className="my-0 p-2 w-100"
                    key={index}
                    variant="outline-dark"
                    style={{borderRadius:"3px",  border:'none', textAlign:'left'}}
                    onClick={() =>
                        cat(category)
                    }

            >

                <Row className="m-0 p-0">
               <Col className="col-11 mx-0 px-0 ">
                {category.category}
               </Col>
                    <Col className="col-1  mx-0 p-0 my-auto">
                    {/*<b style={{float:'right'}}> > </b>*/}
                        <img
                        src={(category.category===deployCat) ? arrowDown: arrow}
                        width="15px"
                        height="15px"
                        className="my-auto"
                        />
                    </Col>
                </Row>
            </Button>
            { category.subCategories.map((subCategory, subIndex) => (

                (deployCat===category.category) ?
                <Row className='px-1 justify-content-end'>
                 <Button
                     onClick={() =>
                     catAndSub(category, subCategory)
                 }
                     className="text-end mx-2"
                 key={subIndex}
                variant="outline-dark"
                 size="sm"
                 style={{float:'right', border:'none', width:'92%'}}
                 >{subCategory.subcategory} </Button>
                </Row>
                    :<div></div>
                            ))}
            </Container>
                 ))}
        </Container>


    );
};

export default CatDropdown;