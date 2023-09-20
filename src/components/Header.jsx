import logo from "../assets/logo.png"
import { Link, useLocation} from "react-router-dom"


export const Header = () => {
    const location = useLocation();
  
    const buttonText = location.pathname === '/' ? 'Add Card' : 'HOME';
    const buttonLink = location.pathname === '/' ? '/new' : '/';
  
    return (
      <div className="headerWrapper">
        <div className="header">
          <img src={logo} alt="" />
          <h2>E-WALLET</h2>
          <Link to={buttonLink}><button>{buttonText}</button></Link>
        </div>
      </div>
    )
  };