import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCard, toggleCardActive } from "./CardSlice";
import "../styling/Card.css";
import wifi from "../assets/wifi.png";
import cardIcon from "../assets/card.png";

export const Card = ({ user, cards, index }) => {
  const dispatch = useDispatch();

  const formattedCardNumber = cards.number.replace(/(.{4})(?!$)/g, '$1 ');

  const [userInformation, setUserInformation] = useState("");

  const capitalizeUserInformation = (user) => {
    return `${user.name?.title} ${user.name?.first} ${user.name?.last}`.toUpperCase();
  };

  React.useEffect(() => {
    setUserInformation(capitalizeUserInformation(user));
  }, [user]);

  const handleDelete = () => {
    if (!cards.active) {
      dispatch(deleteCard(index));
    }
  };

  const handleToggleActive = () => {
    dispatch(toggleCardActive(index));
  };

  return (
    <>
      <div className={`cardWrapper ${cards.active ? "activeCard" : "inactiveCard"}`}>
        <div className="iconHolder">
          <img src={wifi} alt="" className="iconImage" />
          <img src={cardIcon} alt="" className="iconImage" />
        </div>

        <div className="cardNumber">
          <h3>{formattedCardNumber}</h3>
        </div>

        <div className="ccvHolder">
          <p>
            <strong>CCV:</strong>
          </p>
          <p id="ccvText"> {cards.ccv}</p>
        </div>

        <div className="infoWrapper">
          <div className="holderInfo">
            <p>Card Holder</p>
            <p id="userText">{userInformation}</p>
          </div>

          <div className="valid">
            <p>Valid Through</p>
            <p id="validText"> {cards.date}</p>
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
    </>
  );
};








