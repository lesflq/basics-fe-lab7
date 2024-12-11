import React from 'react'
import {assets} from "../../assets/assets.js";
import '../../index.css';
const Pear = () => {
    return (
        <div>
            <img src={assets.pear} alt="Pear" id='product'/>
            <h3>Pear</h3>
            <p>Cost: 20 UAH</p>
        </div>
    )
}
export default Pear
