import wifi from "../assets/wifi.png"
import cardIcon from "../assets/card.png"

export const NewCardExample = () =>{
return (
    <div className="cardsWrap">
         <div className="cardWrapper">
        <div className="iconHolder">
          <img src={wifi} alt="" className="iconImage" />
          <img src={cardIcon} alt="" className="iconImage" />
        </div>
        
        <div className="cardNumber">
          <h3>XXXX XXXX XXXX XXXX</h3>
        </div>

        <div className="ccvHolder">
          <p>
            <strong>CCV: </strong>
          </p>
          <p id="ccvText"> XXX</p>
        </div>

        <div className="infoWrapper">
          <div className="holderInfo">
            <p>Card Holder</p>
            <p id="userText">FIRST AND LAST NAME</p>
          </div>

          <div className="valid">
            <p>Valid Through</p>
            <p id="validText">XXXX</p>
          </div>
        </div>
      </div>
    </div>
)
}