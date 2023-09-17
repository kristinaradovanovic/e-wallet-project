import { useDispatch } from "react-redux";
import { addCard } from "../features/CardSlice";
import { Link } from "react-router-dom";

export const NewCard = () => {
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Add Card</h1>

            <input type="text" id="number" placeholder="Enter Card Number"/>
            <br />
            <input type="text" id="ccv" placeholder="Enter CCV" />
            <br />
            <input type="text" id="type" placeholder="Enter Card Type" />
            <br />
            <input type="text" id="date" placeholder="Valid Through" /> 
            <br /><br />
            <Link to="/" ><button
            onClick={()=>{
                let number = document.querySelector("#number").value;
                let ccv = document.querySelector("#ccv").value;
                let type = document.querySelector("#type").value;
                let date = document.querySelector("#date").value;

                dispatch(addCard({ number, ccv, type, date })); 
            }}
            >Add Card</button></Link>
            
            <br />

            

        </div>
    )
}