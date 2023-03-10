
import {Row} from "react-bootstrap";
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ProductCard from "./ProductCard";
const TopProducts = ({topProducts, topIsVisible}) => {



    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    function groupIntoThrees (children) {
        const output = []
        let currentGroup = []

        children.forEach((child, index) => {
            currentGroup.push(child)

            if (index % 3 === 2) {
                output.push(currentGroup)
                currentGroup = []
            }
        })

        return output
    }






    return (
        <Row className="mt-3">
            <h1 className="text-center">Топ продажів</h1>
            <Carousel activeIndex={index} onSelect={handleSelect} className='my-3'>

                {groupIntoThrees(topProducts).map((group) =>(

                <Carousel.Item  className="align-content-center py-2 "
                                style={{borderRadius:'7px'
                                   }}>
                    <div style={{display:'flex', justifyContent:"center", width:"100%"}}>
                    <div style={{display:'flex', justifyContent:"space-between", width:"100%", maxWidth:"850px"}}>
                        {group.map( (product) =>
                            <div>
                            <ProductCard product={product} key={product.id} />
                            </div>
                        )}
                    </div >
                    </div>
                    <div style={{display:'flex', height:'50px'}}>

                    </div>
                    <Carousel.Caption>
                       <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                ))}


            </Carousel>
        </Row>
    );
};

export default TopProducts;