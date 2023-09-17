import { useSelector, useDispatch } from "react-redux";
import { getRandomUser } from "./CardSlice";
import React, { useEffect } from "react";
import { Card } from "./Card";

export const Cards = () =>{
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user)
    const cards = useSelector((state) => state.cards.cards);

    console.log(cards);

    useEffect (()=>{
        dispatch(getRandomUser())

    }, [dispatch]);

    return(
        <div>
            {cards.map((cards, index) => (
               <div key={index}> 
                    <Card user={user} cards={cards} index={index}/>    
                </div>
                    
            ))}
            
        </div>
    )
}

