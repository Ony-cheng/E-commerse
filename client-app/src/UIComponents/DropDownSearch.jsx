import React, {useState, useEffect, useRef} from 'react';
import Select from "react-select/base";
import "./dropdownSearch.css"
import DeliveryInfo from "../API/DeliveryInfo"

const DropDownSearch = ({showWh, city, setCity, wh , setWh}) => {

    const [citiesOptions, setCitiesOptions] = useState([])
    const [value, setValue] = useState()
    const [whOptions, setWhOptions] = useState([])
    const [whFilteredOptions, setWhFilteredOptions] = useState([])
    const [whValue, setWhValue] = useState("")


    async function fetchCities(query){
        const cities = await DeliveryInfo.getCities(query)
        setCitiesOptions(Object.values(cities.data));
    }
    async function fetchWarehouses(query){
        const wh = await DeliveryInfo.getWarehouse(query)
        const whStrings = []
        for(let i=0;i<Object.values(wh.data).length;i++){
            whStrings.push(wh.data[i].description)
        }
        setWhOptions(whStrings);
        return whStrings;
    }

    useEffect(() => {
        setValue(city)
    },[city])
    useEffect(() => {
        setWhValue(wh)
    },[wh])


    const citiesInputChangeHandler = (e) =>{
        setValue(e.target.value)
        fetchCities(e.target.value)
    }

   async function  citiesSelectedHandler (index) {
        const selectedCity = citiesOptions[index].Description

        setValue(selectedCity)
       setCity(selectedCity)
        setCitiesOptions([])
        const whStrings = await fetchWarehouses(selectedCity)
        setWhFilteredOptions(whStrings)
         setWhValue("")

    }



    const whInputChangeHandler = (e) =>{
        setWhValue(e.target.value)
        setWhFilteredOptions(searchStrings(e.target.value , whOptions))
    }

    const  whSelectedHandler = (index) => {
        setWhValue(whFilteredOptions[index])
        setWhFilteredOptions([])
        setWh(whFilteredOptions[index])
    }



    function searchStrings(query, strings) {
        const results = [];
        for (let i = 0; i < strings.length; i++) {
            if (strings[i].includes(query)) {
                results.push(strings[i]);
            }
        }
        return results;
    }

    return (
        <div className="dropdown">
            <input className="ddInput"
            value={value}
            onChange={citiesInputChangeHandler}
                   placeholder="Місто"
            />
            <div className="option-box"
                 style={citiesOptions.length > 0 ? {display:'block'} : {display:"none"}}
            >
            {citiesOptions.map((option, index) =>(

                    <div className="options"
                         onClick={() => citiesSelectedHandler(index)}
                         key={index}
                    >
                    {option.Description}
                     </div>
            ))}
            </div>

            <input className="ddInput"
                   value={whValue}
                   onChange={whInputChangeHandler}
                   placeholder="Відділення"
                   style={showWh === true ? {display:'block'} : {display:"none"}}
            />
            <div className="option-box"
                 style={whFilteredOptions.length > 0 ? {display:'block'} : {display:"none"}}
            >
                {whFilteredOptions.map((option, index) =>(

                    <div className="options"
                         onClick={() => whSelectedHandler(index)}
                         key={index}
                    >
                        {option}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default DropDownSearch;