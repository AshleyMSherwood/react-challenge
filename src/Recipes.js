import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Recipes(props) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
    const [isLoading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);

    // should be async if time
    // ideally would only make API call once, but need to figure it out
    useEffect(() => {
        axios.get(url)
            .then(response => {
            setProduct(response.data);
            setLoading(false);
            console.log(response.data); //only needed for testing!
            });
    }, [url])

    // async function getRecipes() {
    //     const response = await axios.get(url);
    //     setProduct(response.data);
    // }
  
    if (isLoading) {
        return <div className="Detail">Loading...</div>;
    }
    else {
        let result = [];
        // Make one API call for all the meals then pick 5 
        // instead of making 5 seperate calls to the "random" endpoint
        // if time should be truly random instead of first 5
        for (let i = 0; i < 5; i++) {
            result.push(product.meals[i]);
        }
        const list = result.map((item, index) => {
            return (
                <Link to={'./detail/' + item.idMeal} key={item.idMeal} className="daily-link">
                    <div id={item.idMeal}>
                        <div>
                            <h1>{item.strMeal}</h1>
                        </div>
                        <div className="thumbnail-container">
                            <img src={item.strMealThumb} alt="" />
                        </div>
                    </div>
                </Link>
            )
        });

        return list;
    }

}