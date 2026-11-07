import image from '../../assets/images/image1.png';
import './Content.css';
 function Content(){
    return(
        <div className="content" id="home">
            <img src={image} alt="Content" />
            <h1>Welcome to Our Website</h1>
            <p> ​self-hosted photo management
                 platform designed to make uploading, organizing, 
                 and searching through
                 your personal memories effortless and secure
            </p>
            <p> Get started and Log in </p>
            <button> Log in </button>
        </div>

    );
}
export default Content;