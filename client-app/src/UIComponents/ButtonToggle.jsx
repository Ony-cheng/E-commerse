import React from 'react';
import {ToggleButton} from "react-bootstrap";
import   "../UIComponents/ButtomToggle.css"
const ButtonToggle = ({activeItem, setActiveItem, name }) => {

    function handleItemClick(name){
        setActiveItem(name)
    }

    return (

        <ToggleButton
            onClick={() => {handleItemClick(name)}}
            className={activeItem == name ? "btnActive" : "btnInactive"}

        >{name}
        </ToggleButton>

    );
};

export default ButtonToggle;