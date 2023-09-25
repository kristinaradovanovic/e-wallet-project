import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCard, toggleCardActive } from "./CardSlice";
import "../styling/Card.css";
import wifi from "../assets/wifi.png";
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons' */


export const Card = ({ user, cards, index }) => {
  const dispatch = useDispatch();

  //Att ha space efter varje 4 siffror
  const formattedCardNumber = cards.number.replace(/(.{4})(?!$)/g, "$1 ");


  //Att ha stora bokstäver på user namn
  const [userInformation, setUserInformation] = useState("");
  const capitalizeUserInformation = (user) => {
    return `${user.name?.title} ${user.name?.first} ${user.name?.last}`.toUpperCase();
  };

  React.useEffect(() => {
    setUserInformation(capitalizeUserInformation(user));
  }, [user]);

  //Delete funktion
  const handleDelete = () => {
    if (!cards.active) {
      dispatch(deleteCard(index));
    }
  };

  //Toggla igenom activ/inactiv kort
  const handleToggleActive = () => {
    dispatch(toggleCardActive(index));
  };

  //Få date funktion
  const getMonthYear = (date) => {
    
    const dateObj = new Date(date);
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear().toString().slice(-2);
  
    return `${month}/${year}`;
  };
  const monthYear = getMonthYear(cards.date);

  return (
    <>
      
      <div className={`cardWrapper ${cards.active ? "activeCard" : "inactiveCard"}`}
        onClick={cards.active ? null : handleToggleActive}>
        <div className="iconHolder">
          <img src={wifi} alt="" className="iconImage" />
          <p >{cards.vendor}</p>
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
            <p>Card Holder Name</p>
            <p id="userText">{userInformation}</p>
          </div>

          <div className="valid">
            <p>Valid Through</p>
            <p id="validText"> {monthYear}</p>
          </div>
        </div>
      </div>

      {!cards.active && (
        <div>
          <button onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </>
  );
  
};