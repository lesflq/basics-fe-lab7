import React from 'react'
import {assets} from "../../assets/assets.js";
import '../../index.css';
const Peach = () => {
    return (
        <div>
            <img src={assets.peach} alt="Peach" id='product'/>
            <h3>Peach</h3>
            <p>Cost: 18 UAH</p>
        </div>
    )
}
export default Peach
