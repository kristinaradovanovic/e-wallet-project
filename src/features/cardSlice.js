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
        cards: [{
          number: "1234567891234567",
          ccv: "197",
          date:"2025",
          active: true,
          vendor: "Mastercard"
        }],
    },

    reducers: {
        addCard: (state,action) =>{
            state.cards.push(action.payload);
        },
        deleteCard: (state, action) => {
            state.cards.splice(action.payload, 1);
          },
          toggleCardActive: (state, action) => {
            const cardIndex = action.payload;
            if (state.cards[cardIndex].active) {
              state.cards[cardIndex].active = false;
            } else {
              state.cards.forEach((card, index) => {
                if (index !== cardIndex) {
                  card.active = false;
                }
              });
              state.cards[cardIndex].active = true;
            }
          },
    },
    extraReducers: {
        [getRandomUser.fulfilled]: (state, action) =>{
            state.user = action.payload.results[0];
        }
    }
})

export default cardSlice.reducer;
export const {addCard, deleteCard, toggleCardActive} = cardSlice.actions;