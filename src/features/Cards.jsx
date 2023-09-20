import { useSelector, useDispatch } from "react-redux";
import { getRandomUser } from "./CardSlice";
import { useEffect } from "react";
import { Card } from "./Card";

export const Cards = () =>{
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user)
  const cards = useSelector((state) => state.cards.cards);

  useEffect (()=>{
    dispatch(getRandomUser())
  }, [dispatch]);

  return(
    <div>
      <div>
        <h3>Active Cards</h3>
        {cards.map((card, index) => {
          if (card.active) {
            return (
              <div key={index}>
                <Card user={user} cards={card} index={index}/>
              </div>
            );
          }
        })}
      </div>
      <div>
        <h3>Inactive Cards</h3>
        {cards.map((card, index) => {
          if (!card.active) {
            return (
              <div key={index}>
                <Card user={user} cards={card} index={index}/>
              </div>
            );
          }
        })}
      </div>
    </div>
  )
}