import React, {useState} from 'react';

import Sidebar from "react-sidebar";
import { NavLink } from 'react-router-dom';

const SideBar = () => {

    return (
        <Sidebar
            sidebar={<b>Sidebar content</b>}

            docked={true}
            styles={{ sidebar: { background: "white" } }}
        >
           <b>Гейский сайдбар</b>
        </Sidebar>
    );
}

export default SideBar;