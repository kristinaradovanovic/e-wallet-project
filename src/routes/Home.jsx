import { Link } from "react-router-dom";
import { Cards } from "../features/Cards";

export const Home = () =>{
    return(
        <div>
            <h1>Home</h1>
            <Cards/>
            <Link to="/new"><button>Add Card</button></Link>
        </div>
    )
}