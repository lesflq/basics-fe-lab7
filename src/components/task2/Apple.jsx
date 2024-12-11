// eslint-disable-next-line no-unused-vars
import React from 'react'
import {assets} from "../../assets/assets.js";
import '../../index.css';
const Apple = () => {
    return (
        <div>
            <img src={assets.apple} alt="Apple" id='product'/>
            <h3>Apple</h3>
            <p>Cost: 15 UAH</p>
        </div>

    )
}
export default Apple
