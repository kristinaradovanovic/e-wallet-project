//IMPORTS
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../features/CardSlice";
import { Link } from "react-router-dom";
import { useState} from "react";
import { NewCardExample } from "../features/NewCardExample";
import "../styling/NewCard.css"

//EXPORT NEWCARD
export const NewCard = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const cards = useSelector((state) => state.cards.cards);

    const [numberError, setNumberError] = useState("");
    const [ccvError, setCcvError] = useState("");
    const [selectedVendor, setSelectedVendor] = useState("");
    const [cardData, setCardData] = useState({

        number: "",
        ccv: "",
        date: "",
        vendor: "",
      });
      const [date, setDate] = useState("");

    //Date ändring funktion 
      const handleChangeDate = (e) => {
        const dateValue = e.target.value;
        setDate(dateValue);
      };
    

//HANDLE SUBMIT + ALLA ERROR MESSAGE OM ANVÄNDARE SKRIVER FEL INPUT 
    const handleSubmit = () => {
        const numberInput = document.querySelector("#number");
        const ccvInput = document.querySelector("#ccv");
        const dateInput = document.querySelector("#date");

        const number = numberInput.value;
        const ccv = ccvInput.value;
        const selectedDate = new Date(dateInput.value);

        const currentDate = new Date();

    
    //Sätter data som jag ska skicka som props till NewCardExample för att kunna visa "preview" på kort
        setCardData({
            name: `${user.name?.first} ${user.name?.last}`,
            number: numberInput.value,
            ccv: ccvInput.value,
            date: dateInput.value,
            vendor: selectedVendor,
          });

        //ERROR TEXT FÖR FEL INPUT
        if (number.length !== 16) {
            setNumberError("Card number must be 16 digits.");
            return;
          } else {
            setNumberError("");
        }

          if (ccv.length !== 3) {
            setCcvError("CCV must be 3 digits.");
            return;
          } else {
            setCcvError("");
        }
        if (selectedDate < currentDate) {
            alert("Please select a valid date");
            return;
        }

        if (cards.length <= 4) {
            dispatch(addCard({ number, ccv, date, active: false, vendor: selectedVendor }));
    
            numberInput.value = "";
            ccvInput.value = "";
            dateInput.value = "";
            setSelectedVendor("");
        } else {
            alert("You can only add a maximum of 4 cards.");
        }
    }
//-----------------------------------------------------------------------------------------------------------------------------
    return(
        <div>

            <h4>Add New Card</h4>
            <NewCardExample cardData={cardData} />
            
            <div className="inputWrapper">
                <div className="numberNameHolder">
            {/* användare read-only input från api     */}    
                    <input type="text" id="holder" value={`${user.name?.first} ${user.name?.last}`} readOnly />

           {/*  kort nummer input  */}
                    {numberError && <p style={{ color: "red" }}>{numberError}</p>}
                    <input 
                    type="text" 
                    id="number" 
                    maxLength="16" 
                    placeholder="Enter Card Number"
                    onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, ''); 
                    }}
                    required
                    />
                </div>
            {/* CCV input */}
                <div className="ccvValidHolder">
                    {ccvError && <p style={{ color: "red" }}>{ccvError}</p>}
                    <input type="text" id="ccv" maxLength="3" placeholder="Enter CCV" onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, ''); 
                    }} required/>

            {/* date input */}
                    {/* {dateError && <p style={{ color: "red" }}>{dateError}</p>} */}
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={handleChangeDate}
                    />
                </div>

            {/* vendor input */}
                <select
                        value={selectedVendor}
                        onChange={(e) => setSelectedVendor(e.target.value)} 
                    >
                        <option value="">Select Vendor</option>
                        <option value="Mastercard">Mastercard</option>
                        <option value="Visa">Visa</option>
                        <option value="Amex">Amex</option>
                </select>

                <button onClick={handleSubmit}>Save</button>

                <Link to="/" ><button>Add Cards</button></Link>
            </div>   
        </div>
    )
}


