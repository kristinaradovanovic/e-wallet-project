//IMPORTS
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../features/CardSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

//EXPORT NEWCARD
export const NewCard = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    const [numberError, setNumberError] = useState("");
    const [ccvError, setCcvError] = useState("");
    const [dateError, setDateError] = useState("");


//HANDLE SUBMIT + ALLa ERROR MESSAGE OM ANVÄNDARE SKRIVER FEL INPUT 
    const handleSubmit = () => {
        const numberInput = document.querySelector("#number");
        const ccvInput = document.querySelector("#ccv");
        const dateInput = document.querySelector("#date");

        const number = numberInput.value;
        const ccv = ccvInput.value;
        const date = dateInput.value;

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

        if (date.length !== 4) {
            setDateError("Date must be 4 digits.");
            return;
          } else {
            setDateError("");
          }

        dispatch(addCard({ number, ccv, date, active: false }));

        //Rensa input efter submit
        numberInput.value = "";
        ccvInput.value = "";
        dateInput.value = "";
    }

    return(
        <div>
            <h1>Add Cards</h1>
           
            <input type="text" id="holder" value={`${user.name?.first} ${user.name?.last}`} readOnly />
            <br />

    {/* Card Number Input */}
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
            <br />
    {/* CCV Input */}
        {ccvError && <p style={{ color: "red" }}>{ccvError}</p>}
            <input type="text" id="ccv" maxLength="3" placeholder="Enter CCV" required/>
            <br />
    {/* Date Input */}
        {dateError && <p style={{ color: "red" }}>{dateError}</p>}
            <input type="text" id="date" maxLength="4" placeholder="Valid Through" required /> 
            <br /><br />



    {/* ADD/SUBMIT */}
            <button onClick={handleSubmit}>Save</button>
            <br /> 
            <Link to="/" ><button>Add Cards</button></Link>
        </div>
    )
}