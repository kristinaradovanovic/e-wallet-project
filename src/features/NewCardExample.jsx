import wifi from "../assets/wifi.png"
import cardIcon from "../assets/card.png"

export const NewCardExample = ({ cardData }) => {
  const cardNumber = cardData.number || "XXXXXX XXXXX";
  const ccvText = cardData.ccv || "XXX";
  const userText = cardData.name || "FIRST AND LAST NAME";
  const validText = cardData.date || "XXXX";

  return (
    <div className="cardsWrap">
      <div className="cardWrapper">
        <div className="iconHolder">
          <img src={wifi} alt="" className="iconImage" />
          <img src={cardIcon} alt="" className="iconImage" />
        </div>

        <div className="cardNumber">
          <h3>{cardNumber}</h3>
        </div>

        <div className="ccvHolder">
          <p>
            <strong>CCV: </strong>
          </p>
          <p id="ccvText">{ccvText}</p>
        </div>

        <div className="infoWrapper">
          <div className="holderInfo">
            <p>Card Holder</p>
            <p id="userText">{userText}</p>
          </div>

          <div className="valid">
            <p>Valid Through</p>
            <p id="validText">{validText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};