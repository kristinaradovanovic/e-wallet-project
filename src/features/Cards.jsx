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
    <div className="homePageWrapper">
      <div className="cardsWrap">
       <div className="activeCardWrapp">
          <h3>Active Card</h3>
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
      </div>
      <div className="cardsWrap">
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