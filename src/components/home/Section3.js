import image from '../../assets/images/image5.png';
import './Section3.css';
function Section3() {
    return (
        <div className="section3"id="about">
            <div>
                <h1>Visual Similarity Search</h1>
                <p>
                    Find visually similar images instantly.
                     Upload a photo or select an existing one to discover matching moments 
                     and related memories across your library."
                </p>
            </div>
            <div>
                <img src={image} alt="Section" />
            </div>
        </div>
    );
}
export default Section3;