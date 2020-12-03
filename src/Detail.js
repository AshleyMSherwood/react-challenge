import React, { useState, useEffect } from "react";
import axios from 'axios';
import Nav from "./Nav.js";
import { useParams } from "react-router-dom";

export default function Detail(props) {
    let { id } = useParams();
    let url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id;
    const [isLoading, setLoading] = useState(true);
    const [item, setItem] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setItem(response.data.meals[0]);
                setLoading(false);
            });
    }, [url]);

    function ShowIngredients(props) {
        const newItem = props.item;
        const allIngredients = [];
        // The most ingredients in any recipe returned by the API is twenty 
        for (let i = 1; i < 20; i++) {
            if (newItem['strMeasure' + i]) {
                allIngredients.push(<li key={i}>{newItem['strMeasure' + i]} {newItem['strIngredient' + i]}</li>);
            }
        }
        return allIngredients;
    }

    // Show loading screen in case the API is slow to respond
    if (isLoading) {
        return <div className="Detail">Loading...</div>;
    }
    // ideally could format instructions
    else {
        return (
            <div className="detail-container" id={id}>
                <Nav />
                <div className="thumbnail-container">
                    <img src={item.strMealThumb} alt={item.strMeal} />
                </div>
                <div className="recipe-detail-container">
                    <div>
                        <h1>{item.strMeal}</h1>
                        <ul>
                            <ShowIngredients item={item} />
                        </ul>
                        <h2>Directions</h2>
                        
                        <p>{item.strInstructions}</p>
                    </div>
                </div>
            </div>
        );
    }
}