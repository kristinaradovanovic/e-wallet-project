import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../features/CardSlice";

const store = configureStore({
    reducer: {
        user: cardSlice,
        cards: cardSlice,
    }
})

export default store;


