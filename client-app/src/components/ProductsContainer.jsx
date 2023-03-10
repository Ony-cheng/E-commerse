import React from 'react';
import ProductCard from "./ProductCard";
import {Row} from "react-bootstrap";

const ProductsContainer = ({products, cart}) => {
    return (
        <div style={{ display:"flex" , justifyContent:'left', flexWrap:'wrap',gap:'1em' }} >

            {products.map((product) =>(
                <div>
            <ProductCard cart={cart} product={product} key={product.id}/>
                </div>
                )
            )}

        </div>
    );
};

export default ProductsContainer;