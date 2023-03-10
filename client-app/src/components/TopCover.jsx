import React from 'react';
import logo from "../images/bigTop.PNG";

const TopCover = () => {
    return (
        <div style={{height:'100px', width:'100vw', color:'#28242c', paddingLeft:'100px',alignItems:'center', display:'flex'}}>
            <img
                src={logo}
                width="380"
                height="100"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            <div > <h4>Ласкаво просимо до магазину абстрактних сутностей Concept Avenue!</h4></div>

        </div>
    );
};

export default TopCover;