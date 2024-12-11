import React from 'react'
import Peach from "../components/task2/Peach.jsx";
import Apple from "../components/task2/Apple.jsx";
import Grape from "../components/task2/Grape.jsx";
import Pear from "../components/task2/Pear.jsx";
import '../index.css'
const Task2 = () => {
    return (
        <div className='task2-container'>
            <Apple/>
            <Pear/>
            <Grape/>
            <Peach/>
        </div>
    )
}
export default Task2
