import { useDispatch } from "react-redux";
import { deleteCard, toggleCardActive } from "./CardSlice"; 

export const Card = ({ user, cards, index }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (!cards.active) {
      dispatch(deleteCard(index));
    }
  };

  const handleToggleActive = () => {
    dispatch(toggleCardActive(index));
  };

  return (
    <div className="pageWrapper">
      {cards.active ? (
        <div className="activeCards">
          
        </div>
      ) : (
        <div className="inactiveCards">
          
        </div>
      )}

      <div className={`cardWrapper ${cards.active ? "activeCard" : "inactiveCard"}`}>
        <div className="iconHolder">
          <p><strong>CCV:</strong> {cards.ccv}</p>
        </div>

        <div className="cardNumber">
          <p><strong>Card Number:</strong> {cards.number}</p>
        </div>

        <div className="infoWrapper">
          <div className="holderInfo">
            <p>Card Holder</p>    
            <p>{user.name?.title} {user.name?.first} {user.name?.last}</p>
          </div>

          <div className="valid">
            <p>Valid Through</p>
            <p><strong>Expiration Date:</strong> {cards.date}</p>
          </div>
        </div>
      </div> 

      <div>
        <button onClick={handleDelete} disabled={cards.active}>
          Delete
        </button>
        <button onClick={handleToggleActive}>
          {cards.active ? "Deactivate" : "Activate"}
        </button>
       
      </div>
    </div>
  );
};










