import { useSelector, useDispatch } from "react-redux";
import { getRandomUser } from "./CardSlice";
import React, { useEffect } from "react";

export const Cards = () =>{
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user)

    useEffect (()=>{
        dispatch(getRandomUser())

    }, [dispatch]);

    return(
        <div>
    
            <h3> {user.name?.title} {user.name?.first} {user.name?.last} </h3>

        </div>
    )
}