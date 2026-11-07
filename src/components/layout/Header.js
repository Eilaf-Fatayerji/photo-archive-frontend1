import logo from '../../assets/images/photo.png';
import './Header.css';
 function Header(){
    return(
        <div className="header">
            <div className="logo-container">
                <h1>Artify AI</h1>
                <img src={logo} alt="Logo" className="logo"/>
            </div>
            <div className="nav">
                 <ul>
                     <li><a href="#home">Home</a></li>
                     <li><a href="#about">About</a></li>
                     <li><a href="#contact">Contact</a></li>
                 </ul>
            </div>
        </div>
    );
}
export default Header;