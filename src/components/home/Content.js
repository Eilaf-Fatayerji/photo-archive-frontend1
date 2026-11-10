import image from '../../assets/images/image4.png';
import './Content.css';
import { useNavigate } from 'react-router-dom';
 function Content(){
    const navigate=useNavigate();
    return(
        <div className="content" id="home">
            <div>
            <img src={image} alt="Content" />
            </div>
            <div>
            <h1>Welcome to Our Website</h1>
            <p> ​self-hosted photo management
                 platform designed to make uploading, organizing, 
                 and searching through
                 your personal memories effortless and secure
            </p>
            </div>
            <div>
                <p> Get started and Log in </p>
            <button onClick={()=>navigate("/login")}>Get Started</button>

            </div>
            
        </div>

    );
}
export default Content;