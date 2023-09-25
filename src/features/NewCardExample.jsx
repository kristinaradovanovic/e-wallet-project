import wifi from "../assets/wifi.png"
import cardIcon from "../assets/card.png"

export const NewCardExample = ({ cardData }) => {
  
  //Få date funktion
  const getMonthYear = (date) => {
    if (!date) {
      return "XX/XX";
    }
    
    const dateObj = new Date(date);
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear().toString().slice(-2);
  
    return `${month}/${year}`;
  };

  //Om det är ingen data XXXXX ska visas som placeholder
  const cardNumber = cardData.number || "XXXX XXXX XXXX XXXX";
  const ccvText = cardData.ccv || "XXX";
  const userText = cardData.name || "FIRST AND LAST NAME";
  const monthYear = getMonthYear(cardData.date);

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
            <p id="validText">{monthYear}</p>
          </div>
        </div>
      </div>
    </div>
  );
  
};
