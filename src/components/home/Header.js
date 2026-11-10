import logo from '../../assets/images/p.png';
import {Link} from 'react-router-dom';
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
                     <li>
                        <Link to="/login">Log In</Link>
                     </li>
                     <li>
                        <Link to="/signup"> Create account</Link>
                     </li>
                 </ul>
            </div>
        </div>
    );
}
export default Header;