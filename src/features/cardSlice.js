import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getRandomUser = createAsyncThunk(
    "cardSlice/getRandomUser",
    async () => {
      let response = await fetch("https://randomuser.me/api");
      let data = await response.json();
 /*      console.log(data); */
      return data
    }
    );


const cardSlice = createSlice({
    name: "cardSlice",
    initialState: {
        user: {
            title:"",
            first:"",
            last:""
        },
        cards: []
    },

    reducers: {
        addCard: (state,action) =>{
            state.cards.push(action.payload);
        },
    },
    extraReducers: {
        [getRandomUser.fulfilled]: (state, action) =>{
            state.user = action.payload.results[0];
        }
    }
})

export default cardSlice.reducer;
export const addCard = cardSlice.actions.addCard;