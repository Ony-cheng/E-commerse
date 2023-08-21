
import {Row} from "react-bootstrap";
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ProductCard from "./ProductCard";
const TopProducts = ({topProducts, topIsVisible, categories}) => {



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

        <Row>
            {/*<h3>Топ категорій</h3>*/}
            {/*<div style={{display:"flex", justifyContent:"space-around"}}>*/}
            {/*    <div>*/}
            {/*        <h5 className="my-5">*/}
            {/*            Срака*/}
            {/*        </h5>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <h5 className="my-5">*/}
            {/*            Моя нескінченна потужність*/}
            {/*        </h5>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <h5 className="my-5">*/}
            {/*            Детермінізм рекурсії*/}
            {/*        </h5>*/}
            {/*    </div>*/}

            {/*</div>*/}
        <Row className="mt-3 p-4"
             style={{
                 // borderRadius:"10px",
            // border:"solid lightgrey 1px",
         // backgroundImage: 'url(https://media.istockphoto.com/id/1071204136/photo/cute-bengal-funny-cat-playing.jpg?b=1&s=612x612&w=0&k=20&c=gWWceQHkfxT1k2Nb3lwWaxRMdKr720_ymoDhNkMgQOo=)',
            // backgroundColor:"deepskyblue",
            backgroundSize:"cover"
        }}>


            <h3
                >Топ продажів</h3>
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
            </Row>
    );
};

export default TopProducts;