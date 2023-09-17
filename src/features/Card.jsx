import { useDispatch } from "react-redux";
import { deleteCard } from "./CardSlice"; 

export const Card = ({ user, cards, index }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteCard(index));
    };


    console.log(user)
    return (
        <div className="cardWrapper">
            <p>{user.name?.title} {user.name?.first} {user.name?.last}</p>
            <p><strong>Card Number:</strong> {cards.number}</p>
            <p><strong>Card Type:</strong> {cards.type}</p>
            <p><strong>CCV:</strong> {cards.ccv}</p>
            <p><strong>Expiration Date:</strong> {cards.date}</p>
            <button onClick={handleDelete} >Delete</button>
            <hr />
        </div>
        
    )
}
