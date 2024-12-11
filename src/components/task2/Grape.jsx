import React from 'react'
import {assets} from "../../assets/assets.js";
import '../../index.css';
const Grape = () => {
    return (
        <div>
            <img src={assets.grape} alt="Grape" id='product'/>
            <h3>Grape</h3>
            <p>Cost: 25 UAH</p>
        </div>
    )
}
export default Grape
