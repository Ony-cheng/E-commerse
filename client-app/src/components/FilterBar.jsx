import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Category from "../API/Category";
import {Button, Navbar, Nav, NavDropdown, Container, Row, Col, Card} from "react-bootstrap";
const FilterBar = ({categories,
                       activeCat,
                       setActiveCat,
                       setTopIsVisible,
                       activeSubCat,
                       setActiveSubCat
                                        }) => {

    const [title, setTitle] = useState("Категорії")
    const [catTitle, setCatTitle] = useState("Підкатегорії")
    const [subCat, setSubCat] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        if(e.target.innerText=="Усі категорії"){
            setActiveCat(null)
            setTitle("Категорії")
            setSubCat(null)
        }else {
            setTitle(e.target.innerText)
            setActiveCat(e.target.innerText)
            fetchSubCategories(e.target.innerText)
        }
    }

    function handleSubmitsub(e){
        if(e.target.innerText=="Усі категорії"){
            setActiveCat(null)
            setTitle("Підкатегорії")
            setActiveSubCat(null)
        }else {
            setCatTitle(e.target.innerText)
            setActiveSubCat(e.target.innerText)
        }
    }


    async function fetchSubCategories(activeCat){
        const result = await Category.getSubCats(activeCat)
        setSubCat(result.data)

    }

    return (

        <Container className="mx-0 ">
            <p style={{marginLeft:"12px", marginTop:"60px"}}><strong>Критерії пошуку </strong></p>
            <DropdownButton id="dropdown-item-button"
                            title={title}
                            className="btn-outline-light"
                            variant="none"
                            onClick={handleSubmit}
            >
                <Dropdown.Item as="button">Усі категорії</Dropdown.Item>
                { categories.map( (category) =>
                    <Dropdown.Item as="button">{category.category}</Dropdown.Item>
                    )}
            </DropdownButton>

            {
                !!(subCat)
                ?
                <DropdownButton id="dropdown-item-button1"
                                title={catTitle}
                                className="btn-outline-light"
                                variant="none"
                                onClick={handleSubmitsub}
                >
                    {subCat.map((subcat) =>
                        <Dropdown.Item as="button">{subcat.subcategory}</Dropdown.Item>
                    )}
                </DropdownButton>
                :<p></p>
            }



        </Container>
    );
};
export default FilterBar;