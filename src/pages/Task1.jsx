import React, { useState, useRef } from 'react';
import { assets } from "../assets/assets.js";
import Description from "../components/task1/Description.jsx";
import PersonalInfo from "../components/task1/PersonalInfo.jsx";
import FavouriteFilms from "../components/task1/FavouriteFilms.jsx";

const Task1 = () => {
    const [imageVisible, setImageVisible] = useState(false);
    const [imageWidth, setImageWidth] = useState(100);
    const imageRef = useRef(null);

    const toggleStyles = (event, color1, color2, textColor1, textColor2) => {
        const element = event.currentTarget;
        const isColor1 = element.style.backgroundColor === color1;
        if (isColor1) {
            element.style.backgroundColor = color2;
            element.style.color = textColor2;
        } else {
            element.style.backgroundColor = color1;
            element.style.color = textColor1;
        }
    };

    const addImage = () => {
        setImageVisible(true);
    };

    const zoomIn = () => {
        setImageWidth((prevWidth) => prevWidth + 30);
    };

    const zoomOut = () => {
        setImageWidth((prevWidth) => (prevWidth > 70 ? prevWidth - 30 : prevWidth));
    };

    const deleteImage = () => {
        setImageVisible(false);
    };

    return (
        <div>
            <PersonalInfo/>
            <p>Хоббі:</p>
            <ul>
                <li>Теніс</li>
                <li>Java</li>
                <li>Спортивний зал</li>
                <li
                    id="football"
                    onClick={(event) => toggleStyles(event, "purple", "blue", "white", "yellow")}
                    style={{ backgroundColor: "purple", color: "white" }}
                >
                    Футбол
                </li>
            </ul>
            <p
                id="favFilm"
                onClick={(event) => toggleStyles(event, "deeppink", "green", "green", "deeppink")}
                style={{ backgroundColor: "deeppink", color: "green" }}
            >
                Улюблені фільми:
            </p>
            <FavouriteFilms/>
            <Description/>
            <a href="https://kyivcity.gov.ua/" target="_blank" rel="noopener noreferrer">
                {imageVisible && (
                    <img
                        id="kyiv"
                        ref={imageRef}
                        src={assets.kyiv}
                        alt="Favourite city"
                        style={{ width: `${imageWidth}px`, display: "block" }}
                    />
                )}
            </a>
            <div className="buttons">
                <button className="button" onClick={addImage}>Add</button>
                <button className="button" onClick={zoomIn}>ZoomIn</button>
                <button className="button" onClick={zoomOut}>ZoomOut</button>
                <button className="button" onClick={deleteImage}>Delete</button>
            </div>
        </div>
    );
};

export default Task1;
