import "./header.css";
import O from "../assets/O.png";

const Header = () => {
  return (
    <header className="container">
      <img src={O} alt="Osumare" />
      <button  >Contact us</button>
    </header>
  )
}

export default Header
