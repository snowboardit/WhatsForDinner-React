import React from "react";

const FoodCard = ({ food, isLoading }) => {

    if (isLoading) {
        return (
            <section>

                <div>
                    <h1>Loading...</h1>
                </div>

            </section>
        )
    } else {
        return (
            <section>

                <div className='left'>
                    <div className="left-wrapper">
                        <h3><strong>{food.name ? food.name : 'No food'}</strong></h3>
                        <h5>Ingredients:</h5>
                        <ul>
                            {food.ingredients ? food.ingredients.map((i, index) => {
                                return (
                                    <li key={index}>
                                        {i}
                                    </li>
                                )
                            }) : <li>No Ingredients</li>}
                        </ul>
                    </div>
                </div>

                <div className='right'>
                    <img src={food.image ? food.image : 'https://picsum.photos/500/500'} alt={food.name ? food.name : 'food image'} />
                </div>

            </section>
        )

    };
};

export default FoodCard;