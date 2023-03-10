import React, {useState, useEffect, useMemo} from 'react';
import {Container,Button, ToggleButton, ButtonGroup, Form} from "react-bootstrap";
import { MDBCheckbox } from 'mdb-react-ui-kit';

import Values from "../API/Values";
import MultiColumnDropdown from "../UIComponents/MultiColumnDropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import CatDropdown from "./CatDropdown";

const FilterSideBar = ({categories,
                           activeCat,
                           setActiveCat,
                           setActiveParams,
                           activeParams,
                           activeSubCat,
                           setActiveSubCat,
                            loading
                       }) => {


    return (
<Container
>

    <CatDropdown
        categories={categories}
        setActiveCat={setActiveCat}
        setActiveSubCat={setActiveSubCat}


    />
            <hr/>

            {

                activeParams.map((parameters,k) => (
                    <div key={k}>
                        <div key={k} style={{marginTop:"15px", marginBottom:"15px"}}>{parameters.parameter}</div>

                        {
                            parameters.val?.map((val, l) => (
                                <Form key={l}>
                                    <div className="mb-3 mx-2 ">
                                        <Form.Check
                                            variant='outline-dark'
                                            type='checkbox'
                                            label= {[val.value ," ",parameters.units]}
                                        />
                                    </div>
                                </Form>
                            ))
                        }
                        <hr/>
                    </div>
                ))
            }
            </Container>
    );
};

export default FilterSideBar;